import React, { useState } from "react";
import filmService from "../services/film.service";

const AddFilmModal = ({ show, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filmData = {
      video: video,
      poster: image,
      name: name,
      status: status,
      category: category,
      description: description,
      duration: duration,
    };

    try {
      await filmService.addFilm(filmData);
      onClose();
    } catch (error) {
      console.error("Error adding film:", error);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-md w-[500px]">
        <h2 className="text-xl font-bold mb-4">Add New Film</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row items-center justify-between gap-6 ">
            <div>
              <div className="mb-4">
                <label className="block ">Name</label>
                <input
                  type="text"
                  placeholder="film name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block ">Description</label>
                <input
                  type="text"
                  placeholder="film description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block">Duration</label>
                <input
                  type="text"
                  placeholder="example : 1h30m"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full text-black px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block ">Category</label>
                <input
                  placeholder="film category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label className="block">Status</label>
                <input
                  type="text"
                  value={status}
                  placeholder="available or not"
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                />
              </div>
              <div className="mb-4 text-white">
                <label className="block">Image</label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full px-4 text-white py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4 text-white">
                <label className="block">Video</label>
                <input
                  type="file"
                  onChange={(e) => setVideo(e.target.files[0])}
                  className="w-full px-4 text-white py-2 border rounded-md"
                  required
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
              type="submit"
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

export default AddFilmModal;
