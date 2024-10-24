import React, { useEffect, useState } from "react";
import FilmsTable from "../components/FilmsTable";
import AddFilmModal from "../components/AddFilm";
import filmService from "../services/film.service";

export default function AdminFilms() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

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
    <div className="text-white">
      <h1 className="text-2xl text-center mt-2 font-bold">Manage Films</h1>
      <div className="flex justify-end px-8">
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black py-2 px-5 rounded-md hover:bg-gray-200"
        >
          Add Film
        </button>
      </div>

      <FilmsTable
        data={films.map((film) => ({
          name: film.name,
          duration: film.duration,
          status: film.status,
          id: film._id,
          description: film.description,
          category: film.category,
        }))}
      />

      {/* Modal for adding a film */}
      <AddFilmModal
        show={showModal}
        onClose={() => setShowModal(false) && fetchFavFilms()}
      />
    </div>
  );
}
