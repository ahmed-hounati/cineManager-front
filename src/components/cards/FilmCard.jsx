import React, { useState, useEffect } from "react";
import filmService from "../../services/film.service";
import { Link } from "react-router-dom";

export default function FilmCard({ film }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesResponse = await filmService.favFilms();
        const favoriteIds = favoritesResponse.map((favFilm) => favFilm._id);
        setFavorites(favoriteIds);
      } catch (error) {
        console.error("Error fetching favorite films", error);
      }
    };

    fetchFavorites();
  }, []);

  // Check if the current film is in the favorites list
  const isFavorite = favorites.includes(film._id);

  // Function to toggle favorite status
  const toggleFavorite = async (filmId) => {
    try {
      if (isFavorite) {
        await filmService.removeFavorite(filmId);
        setFavorites((prev) => prev.filter((id) => id !== filmId));
      } else {
        await filmService.addFavorite(filmId);
        setFavorites((prev) => [...prev, filmId]);
      }
    } catch (error) {
      console.error("Error updating favorites", error);
    }
  };

  return (
    <div className="w-[180px] relative bg-gray-800 text-white rounded-md overflow-hidden shadow-md">
      {/* Film Image */}
      <img
        src={film.image}
        alt={film.name}
        className="w-full h-48 object-cover"
      />

      {/* Favorite Toggle Button */}
      <div className="absolute top-2 right-2">
        <button onClick={() => toggleFavorite(film._id)} className="text-white">
          {isFavorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 text-red-500"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6 text-white"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Film Info and Link to Detail Page */}
      <Link to={`/film/${film._id}`} className="p-4 block">
        <h3 className="text-lg font-semibold">{film.name}</h3>
        <div className="flex items-center text-sm text-gray-400 mt-1">
          <span>{film.category}</span>
          <span className="mx-2">•</span>
          <span>{film.duration}</span>
        </div>
      </Link>
    </div>
  );
}
