import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import FilmCard from "../components/cards/FilmCard";
import filmService from "../services/film.service";
import reservationService from "../services/reservation.service";

export default function Dashboard() {
  const [favFilms, setFavFilms] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null); // Added error state to handle errors
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchFavFilms = async () => {
      try {
        const response = await filmService.favFilms();
        setFavFilms(response);
      } catch (error) {
        setError("Failed to fetch films");
        console.error(error);
      }
    };

    fetchFavFilms();
  }, []);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await reservationService.allReservations();
        setReservations(response);
      } catch (error) {
        setError("Failed to fetch reservations");
        console.error(error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            Hi, Welcome back {user.name}
          </h2>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Favorites */}
          <div className="text-white bg-gradient-to-r from-black via-teal-900 to-cyan-400 p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold">Favorites</h3>
          </div>

          {/* Recent Reservations */}
          <div className="text-white bg-gradient-to-r from-black via-[#790909] to-[#ff0000] p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold">Recent Reservations</h3>
          </div>

          {/* Rooms */}
          <div className="text-white bg-gradient-to-r from-black via-[#09791a] to-[#f5ff00] p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold">Rooms</h3>
          </div>

          {/* Account */}
          <div className="text-white bg-gradient-to-r from-black via-[#5a7909] to-[#eb00ff] p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold">Account</h3>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* All Reservations */}
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-lg font-semibold mb-4">All Reservations</h3>
            <p className="text-6xl font-bold text-green-600">{reservations}</p>
          </div>

          {/* Your List */}
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-lg font-semibold mb-4">Your List</h3>
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : favFilms.length === 0 ? (
              <p className="text-gray-500">No items in your list.</p>
            ) : (
              favFilms.map((film) => <FilmCard key={film._id} film={film} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
