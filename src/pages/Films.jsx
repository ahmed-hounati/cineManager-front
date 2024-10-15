import React, { useState, useEffect } from "react";
import filmService from "../services/film.service";

export default function Films() {
  const [filmsByCategory, setFilmsByCategory] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch films and group them by category
    const fetchFilms = async () => {
      try {
        const response = await filmService.allFilms();
        
        // Group films by category
        const filmsByCategory = response.reduce((acc, film) => {
          const category = film.category;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(film);
          return acc;
        }, {});
        
        setFilmsByCategory(filmsByCategory);
      } catch (error) {
        console.error("Error fetching films", error);
      }
    };

    // Fetch user's favorite films
    const fetchFavorites = async () => {
      try {
        const response = await filmService.favFilms();
        setFavorites(response);
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };

    fetchFilms();
    fetchFavorites();
  }, []);

  // Function to toggle favorites
  const toggleFavorite = async (filmId) => {
    const isFavorite = favorites.includes(filmId);
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
    <div className="p-8">
      <h1 className="text-center text-white text-5xl p-4">Films</h1>
      {/* Loop through each category and display its films */}
      {Object.entries(filmsByCategory).map(([category, films]) => (
        <section key={category} className="mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4 ml-10 capitalize">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {films.map((film) => (
              <div key={film._id} className="relative group w-44 place-self-center">
                <img
                  src={film.image}
                  alt={film.name}
                  className="w-44 h-64 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => toggleFavorite(film._id)}
                    className="text-white"
                  >
                    {favorites.includes(film._id) ? (
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
                        // viewBox="0 0 24 24"
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
                <div className="mt-2">
                  <h4 className="text-sm text-white font-medium">{film.name}</h4>
                  <p className="text-xs text-white">{film.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
