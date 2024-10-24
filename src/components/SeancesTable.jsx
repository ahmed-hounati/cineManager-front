import React, { useState } from "react";
import SeanceService from "../services/seance.service";

const SeancesTable = ({ data }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [selected, setSelected] = useState({});

  const handleEdit = (item) => {
    setSelected(item);
    setShowUpdate(true);
  };

  const handleDelete = async (id) => {
    await SeanceService.delete(id);
  };
  if (data.length == 0) return <></>;

  const keys = Object.keys(data[0]);
  return (
    <div className="overflow-x-auto m-4 bg-[#000000] text-white">
      <table className="min-w-full border border-gray-800">
        <thead>
          <tr className="text-left">
            {keys.map((key) => (
              <th className="p-4 border-b">{key}</th>
            ))}
            <th className="p-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-800">
              {Object.keys(item).map((key) => (
                <td className="p-4">{item[key]}</td>
              ))}
              <td className="p-4 text-center">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-yellow-500 hover:text-yellow-700 mx-2"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
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

export default SeancesTable;
