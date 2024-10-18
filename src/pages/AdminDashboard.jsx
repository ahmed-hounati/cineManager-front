import React, { useState, useEffect } from "react";
import FilmCard from "../components/cards/FilmCard";
import filmService from "../services/film.service";
import reservationService from "../services/reservation.service";
import { Link } from "react-router-dom";
import FilmsTable from "../components/FilmsTable";

export default function AdminDashboard() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchFavFilms = async () => {
      try {
        const response = await filmService.allFilms();
        setFilms(response);
      } catch (error) {
        setError("Failed to fetch films");
        console.error(error);
      }
    };

    fetchFavFilms();
  }, []);


  return (
    <div className="flex h-screen bg-[#181d25] p-8 text-white">
      {/* Main Content */}
      <div className="flex-1 bg-[#181d25]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            👋 Hi, Welcome back {user.name}
          </h2>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Favorites */}
          <Link
            to={"/admin/seances"}
            className="text-white bg-gradient-to-r from-black via-teal-900 to-cyan-400 p-6 rounded-md shadow"
          >
            <h3 className="text-xl font-semibold">Seances</h3>
          </Link>

          <Link
            to={"/admin/users"}
            className="text-white bg-gradient-to-r from-black via-[#790909] to-[#ff0000] p-6 rounded-md shadow"
          >
            <h3 className="text-xl font-semibold">Users</h3>
          </Link>
          {/* Account */}
          <Link
            to={"/admin/films"}
            className="text-white bg-gradient-to-r from-black via-[#09791a] to-[#f5ff00] p-6 rounded-md shadow"
          >
            <h3 className="text-xl font-semibold">Films</h3>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* All Reservations */}
          <div className="bg-[#000000] p-8 rounded-md shadow">
            <h3 className="text-lg font-semibold mb-4">All Statics</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
