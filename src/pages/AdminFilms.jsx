import React, { useEffect, useState } from "react";
import FilmsTable from "../components/FilmsTable";
import AddFilmModal from "../components/AddFilmModal";
import filmService from "../services/film.service";

export default function AdminFilms() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleEdit = (id) => {};

  const handleDelete = (id) => {
    const filteredFilms = films.filter((film) => film.id !== id);
    setFilms(filteredFilms);
  };

  return (
    <div className="p-8 text-white">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold py-8">Manage Films</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black py-2 px-5 rounded-md hover:bg-gray-200"
        >
          Add Film
        </button>
      </div>

      <FilmsTable films={films} onEdit={handleEdit} onDelete={handleDelete} />

      {/* Modal for adding a film */}
      <AddFilmModal
        show={showModal}
        onClose={() => setShowModal(false) && fetchFavFilms()}
      />
    </div>
  );
}
