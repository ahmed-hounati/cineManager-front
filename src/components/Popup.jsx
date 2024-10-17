import React from "react";

const AddCommentPopup = ({ turnOff, handleSubmit, comment, handleChange }) => {
  return (
    <div className="z-50 fixed bg-black/60 top-0 right-0 left-0 bottom-0">
      <div
        onClick={turnOff}
        className="z-40 absolute bg-black/60 top-0 right-0 left-0 bottom-0"
      ></div>
      <form
        onSubmit={handleSubmit}
        className="relative z-50 flex flex-col px-10 border-2 rounded-lg py-12 bg-gray-600 w-[30%] mt-44 mx-auto"
      >
        <h1 className="text-[#B9F5DB] font-bold font-serif text-2xl py-4">
          Add Comment
        </h1>
        <input
          type="text"
          placeholder="Write your comment"
          value={comment}
          onChange={handleChange}
          className="p-3 mb-5 bg-gray-800 text-white border border-gray-600 rounded-md"
        />
        <button
          type="submit"
          className="bg-white text-black py-2 px-5 rounded-md hover:bg-gray-200"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default AddCommentPopup;
