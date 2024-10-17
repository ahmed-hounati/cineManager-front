import React, { useState } from "react";
import Rate from "react-rating";

function Rating({ handleSubmit, turnOff }) {
  const [rating, setRating] = useState(0);

  const emptyStar = (
    <svg
      className="w-10 h-10 text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
      />
    </svg>
  );

  const fullStar = (
    <svg
      className="w-10 h-10 text-yellow-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
    </svg>
  );

  const handleRateClick = () => {
    handleSubmit(rating);
  };

  return (
    <div className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/80">
      <div className="bg-black border-2 border-[#B9F5DB] flex justify-center flex-col items-center w-[30%] h-[30%] m-auto py-44 mt-60 shadow-2xl shadow-[#B9F5DB]/40 rounded">
        <h1 className="text-white font-serif text-2xl font-medium">
          How Do You Like It
        </h1>
        <div className="rating flex items-center py-5">
          <Rate
            emptySymbol={emptyStar}
            fullSymbol={fullStar}
            initialRating={rating}
            onChange={(rate) => setRating(rate)}
          />
          <span className="text-white font-medium hidden">{rating} Stars</span>
        </div>
        <div className="flex justify-center items-center gap-3 py-4">
          <button
            onClick={handleRateClick}
            className="text-black bg-[#337F5F] font-medium px-10 py-2 rounded"
          >
            Rate
          </button>
          <button
            onClick={turnOff} // Use turnOff prop to close the popup
            className="text-black bg-gray-300 hover:bg-gray-100 duration-300 font-serif font-medium px-10 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rating;
