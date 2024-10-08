import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import seanceService from "../../services/seance.service";

export default function Screen() {
  const { id } = useParams();
  const [seance, setSeance] = useState(null); // Initially set to null
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    async function fetchSeance() {
      try {
        const data = await seanceService.oneSeance(id); // Ensure it's async
        setSeance(data);
      } catch (error) {
        console.error("Error fetching seance:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch is done
      }
    }

    fetchSeance();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching
  }

  if (!seance || !seance.film) {
    return <div>Seance not found or missing film details!</div>; // Error handling
  }

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen">
      {/* Movie Image Section */}
      <div className="relative w-full max-w-2xl">
        <img
          src={seance.film.image} // Make sure this path exists
          alt={seance.film.name}
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 p-2 rounded">
          <h1 className="text-xl font-bold">{seance.film.name}</h1>
          <p className="text-sm">{seance.film.duration}</p>
        </div>
      </div>

      {/* Seance Details Section */}
      <div className="w-full max-w-2xl p-4 mt-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Date</h2>
            <p>{new Date(seance.showTime).toLocaleDateString()}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Time</h2>
            <div>
              <Link
                to={`/reservation/${seance.salle._id}?seanceId=${seance._id}`}
              >
                Reserve
              </Link>
            </div>
            <p>{seance.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
