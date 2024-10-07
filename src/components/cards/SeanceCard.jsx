import React from "react";

export default function SeanceCard({ seance }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px] h-[250px] m-4">
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
    </div>
  );
}
