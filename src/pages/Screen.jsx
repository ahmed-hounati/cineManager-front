import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import seanceService from "../services/seance.service";

export default function Screen() {
  const { id } = useParams();
  const [seance, setSeance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSeance() {
      try {
        const data = await seanceService.oneSeance(id);
        setSeance(data);
      } catch (error) {
        console.error("Error fetching seance:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSeance();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!seance || !seance.film) {
    return <div>Seance not found or missing film details!</div>;
  }

  return (
    <div className="flex items-center justify-center p-8 text-black ">
      <section className="p-8 flex flex-col justify-center items-center">
        <h2 className="text-4xl">{seance.description}</h2>
        <div className="flex flex-row items-center justify-between gap-[30px]">
          <div className="p-8">
            <img
              src={seance.film.image}
              alt={seance.film.name}
              className="w-[200px] rounded-xl h-[400px] object-cover"
            />
          </div>
          <div className="p-8 rounded">
            <h1 className="text-2xl font-bold">{seance.film.name}</h1>
            <p className="text-xl">{seance.film.description}</p>
            <p className="text-xl">Duration :{seance.film.duration}</p>
            <h2 className="text-lg font-semibold">Salle</h2>
            <p>{seance.salle.name}</p>
            <h2 className="text-lg font-semibold">Date</h2>
            <p>{seance.showTime}</p>
            <div className="p-4">
              <Link
                className="bg-[#337F5F] px-8 py-2 rounded-lg text-white"
                to={`/reservation/${seance.salle._id}?seanceId=${seance._id}`}
              >
                Reserve
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
