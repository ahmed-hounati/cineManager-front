import React, { useEffect, useState } from "react";
import SeanceCard from "../cards/SeanceCard";
import SeanceService from "../../services/seance.service";

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
    <div className="min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 my-8">Seances</h2>

      {error && <p className="text-red-500">{error}</p>}

      {/* Seance Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
        {seances.length > 0 ? (
          seances.map((seance) => (
            <SeanceCard key={seance._id} seance={seance} />
          ))
        ) : (
          <p>No seances available.</p>
        )}
      </section>
    </div>
  );
}
