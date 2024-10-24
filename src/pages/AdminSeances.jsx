import React, { useEffect, useState } from "react";
import SeancesTable from "../components/SeancesTable";
import AddFilmModal from "../components/AddFilm";
import SeanceService from "../services/seance.service";
import AddSeance from "../components/AddSeance";

export default function AdminSeances() {
  const [Seances, setSeances] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    const fetchSeances = async () => {
      try {
        const response = await SeanceService.allSeances();
        setSeances(response);
      } catch (error) {
        setError("Failed to fetch Seances");
        console.error(error);
      }
    };

    fetchSeances();
  }, []);

  const fetchSeances = async () => {
    try {
      const response = await SeanceService.allSeances();
      setSeances(response);
    } catch (error) {
      setError("Failed to fetch Seances");
      console.error(error);
    }
  };

  return (
    <div className="text-white bg-[#181d25]">
      <h1 className="text-2xl text-center mt-2 font-bold">Manage Seances</h1>
      <div className="flex justify-end px-8 mb-4">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="bg-white text-black py-2 px-5 rounded-md hover:bg-gray-200"
        >
          Add Seance
        </button>
      </div>

      <SeancesTable
        data={Seances.map((seance) => ({
          film: seance.film.name,
          durationTime: seance.durationTime,
          status: seance.status,
          id: seance._id,
          description: seance.description,
          salle: seance.salle.name,
        }))}
      />

      {/* Modal for adding a film */}
      <AddSeance
        show={showModal}
        onClose={() => setShowModal(false) && fetchSeances()}
      />
    </div>
  );
}
