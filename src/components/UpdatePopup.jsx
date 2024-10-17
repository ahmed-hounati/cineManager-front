import React from "react";

const UpdatePopup = ({ turnOff, handleSubmit, comment, handleChange }) => {
  
  return (
    <div className="z-50 fixed bg-black/60 top-0 right-0 left-0 bottom-0">
      <div onClick={turnOff} className="absolute inset-0 bg-black/60"></div>
      <form
        onSubmit={handleSubmit}
        className="relative z-50 flex flex-col px-10 py-12 bg-gray-600 rounded-lg w-[30%] mt-44 mx-auto"
      >
        <h1 className="text-[#B9F5DB] font-bold font-serif text-2xl mb-4">
          Update Comment
        </h1>
        <textarea
          onChange={handleChange}
          value={comment}
          className="w-full text-black h-24 p-2 border border-gray-300 rounded-md"
        />
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={turnOff}
            className="mr-4 bg-red-500 text-white py-2 px-4 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#337F5F] text-white py-2 px-4 rounded-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePopup;
