import React, { useEffect, useState } from "react";
import filmService from "../services/film.service";
import useFormData from "../hooks/useFormData";
import SalleService from "../services/salle.service";
import SeanceService from "../services/seance.service";

const AddSeance = ({ show, onClose }) => {
  const [films, setFilms] = useState([]);
  const [sales, setSales] = useState([]);

  // Fetch films and sales on component mount
  useEffect(() => {
    const getFilms = async () => {
      try {
        const filmsData = await filmService.allFilms();
        setFilms(filmsData);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    const getSales = async () => {
      try {
        const salesData = await SalleService.allSales();
        setSales(salesData);
      } catch (error) {
        console.error("Error fetching sales:", error);
      }
    };

    getFilms();
    getSales();
  }, []);

  const { formData, onSubmit, handleChange } = useFormData({
    filmId: "",
    salleId: "",
    description: "",
    duration: "",
    showtime: "",
    status: "",
  });

  const { filmId, salleId, description, durationTime, showTime, status } =
    formData;

  const handleSubmit = () => {
    onSubmit(async (data) => {
      try {
        if (await SeanceService.addSeance(data)) {
          onClose();
        }
      } catch (error) {
        console.error("Error adding seance:", error);
      }
    });
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-md w-[500px]">
        <h2 className="text-xl font-bold mb-4">Add New Seance</h2>
        <form>
          <div className="flex flex-row items-center justify-between gap-6">
            <div>
              <div className="mb-4">
                <label className="block">Select Film</label>
                <select
                  name="filmId"
                  value={filmId}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full text-black px-4 py-2 border rounded-md"
                >
                  <option value="">Choose a film</option>
                  {films.map((film) => (
                    <option key={film.id} value={film._id}>
                      {film.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block">Select Salle</label>
                <select
                  name="salleId"
                  value={salleId}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full text-black px-4 py-2 border rounded-md"
                >
                  <option value="">Choose a salle</option>
                  {sales.map((sale) => (
                    <option key={sale._id} value={sale._id}>
                      {sale.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block">Description</label>
                <input
                  type="text"
                  placeholder="Film description..."
                  value={description}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 py-2 text-black border rounded-md"
                  name="description"
                />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label className="block">Status</label>
                <input
                  type="text"
                  placeholder="available or not"
                  value={status}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 py-2 text-black border rounded-md"
                  name="status"
                />
              </div>
              <div className="mb-4">
                <label className="block">Duration</label>
                <input
                  type="text"
                  placeholder="e.g., 1h30m"
                  value={durationTime}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 py-2 text-black border rounded-md"
                  name="durationTime"
                />
              </div>
              <div className="mb-4">
                <label className="block">Showtime</label>
                <input
                  type="text"
                  placeholder="Date of show"
                  value={showTime}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 py-2 text-black border rounded-md"
                  name="showTime"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-[#337F5F] text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSeance;
