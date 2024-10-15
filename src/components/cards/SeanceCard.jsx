import React from "react";
import { Link } from "react-router-dom";

export default function SeanceCard({ seance }) {
  return (
    <div className="bg-[#B8DBD9] shadow-lg rounded-lg overflow-hidden w-[300px] h-[310px] my-4">
      <img
        src={seance.film.image}
        alt={seance.film.name}
        className="w-full h-[150px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{seance.film.name}</h3>
        <p className="text-sm text-gray-600">{seance.description}</p>
        <p className="text-sm font-medium mt-2">{`Room: ${seance.salle.name}`}</p>
      </div>
      <div className="px-8">
        <Link to={`/screen/${seance._id}`}>
          <button className="rounded-md text-center w-[100px] h-[40px] text-white bg-[#337F5F]">
            show more
          </button>
        </Link>
      </div>
    </div>
  );
}
