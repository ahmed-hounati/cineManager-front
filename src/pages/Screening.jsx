import React, { useEffect, useState } from "react";
import SeanceCard from "../components/cards/SeanceCard";
import SeanceService from "../services/seance.service";

export default function Screening() {
  const [seances, setSeances] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeances = async () => {
      try {
        const response = await SeanceService.allSeances();
        setSeances(response);
      } catch (error) {
        setError("Failed to fetch seances");
        console.error(error);
      }
    };

    fetchSeances();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#181d25]">
      <h2 className="text-3xl font-bold text-white my-8">Seances</h2>

      {error && <p className="text-red-500">{error}</p>}

      {/* Seance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 place-self-center w-full">
        {seances.length > 0 ? (
          seances.map((seance) => (
            <div className="place-self-center" key={seance._id}>
              <SeanceCard seance={seance} />
            </div>
          ))
        ) : (
          <p>No seances available.</p>
        )}
      </div>
    </div>
  );
}
