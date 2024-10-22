import React from "react";
import filmService from "../services/film.service";
import useFormData from "../hooks/useFormData";

const UpdateFilm = ({ show, onClose, film }) => {
  const { formData, onSubmit, handleChange } = useFormData({
    name: "",
    category: "",
    duration: "",
    description: "",
    poster: {},
    video: {},
    status: "",
  });
  const { name, category, duration, description, status, poster, video } =
    formData;

  const handleSubmit = () => {
    onSubmit(async (data) => {
      await filmService.addFilm(data);
      onClose();
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-md w-[500px]">
        <h2 className="text-xl font-bold mb-4">Update Film</h2>
        <form>
          <div className="flex flex-row items-center justify-between gap-6 ">
            <div>
              <div className="mb-4">
                <label className="block ">Name</label>
                <input
                  type="text"
                  placeholder="film name"
                  value={film.name}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  name="name"
                />
              </div>
              <div className="mb-4">
                <label className="block ">Description</label>
                <input
                  type="text"
                  placeholder="film description..."
                  value={film.description}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  name="description"
                />
              </div>
              <div className="mb-4">
                <label className="block">Duration</label>
                <input
                  type="text"
                  placeholder="example : 1h30m"
                  value={film.duration}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full text-black px-4 py-2 border rounded-md"
                  name="duration"
                />
              </div>
              <div className="mb-4">
                <label className="block ">Category</label>
                <input
                  placeholder="film category"
                  type="text"
                  value={film.category}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  name="category"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label className="block">Status</label>
                <input
                  type="text"
                  value={film.status}
                  placeholder="available or not"
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  name="status"
                />
              </div>
              <div className="mb-4 text-white">
                <label className="block">Image</label>
                <input
                  type="file"
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-white py-2 border rounded-md"
                  name="poster"
                />
              </div>
              <div className="mb-4 text-white">
                <label className="block">Video</label>
                <input
                  type="file"
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-white py-2 border rounded-md"
                  name="video"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-[#337F5F] text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFilm;
