import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FilmCard({ film }) {
  return (
    <div className="w-[180px] relative bg-gray-800 text-white rounded-md overflow-hidden shadow-md">
      <img
        src={film.image}
        alt={film.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full">
        <Link>
          <FaHeart className="text-red-500" />
        </Link>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{film.name}</h3>
        <div className="flex items-center text-sm text-gray-400 mt-1">
          <span>{film.category}</span>
          <span className="mx-2">•</span>
          <span>{film.duration}</span>
        </div>
      </div>
    </div>
  );
}
