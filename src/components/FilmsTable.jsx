import React from "react";

const FilmsTable = ({ films, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-[#000000] text-white">
      <table className="min-w-full border border-gray-800 p-8">
        <thead>
          <tr className="text-left">
            <th className="p-4 border-b">Title</th>
            <th className="p-4 border-b">Duration</th>
            <th className="p-4 mr-1 border-b">Status</th>
            <th className="p-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film) => (
            <tr key={film.id} className="border-b hover:bg-gray-800">
              <td className="p-4">{film.name}</td>
              <td className="p-4">{film.duration}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded-full text-sm`}>
                  Available
                </span>
              </td>
              <td className="p-4 text-center">
                <button
                  onClick={() => onEdit(film.id)}
                  className="text-yellow-500 hover:text-yellow-700 mx-2"
                >
                  <i className="fas fa-edit"></i> {/* Edit Icon */}
                </button>
                <button
                  onClick={() => onDelete(film.id)}
                  className="text-red-500 hover:text-red-700 mx-2"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilmsTable;
