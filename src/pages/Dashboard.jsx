import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

export default function Dashboard() {
  return (
    <div>
      <section className="p-8">
        <div className="p-8 flex justify-between items-center">
          {/* First card with icon */}
          <div className="w-[300px] h-[150px] flex items-center justify-center bg-[#337F5F] rounded-xl">
            <FontAwesomeIcon icon={faBolt} size="2xl" color="white" />{" "}
            {/* Icon used here */}
          </div>

          {/* Second card */}
          <div className="w-[300px] h-[150px] flex items-center justify-center bg-[#337F5F] rounded-xl">
            fav
          </div>

          {/* Third card */}
          <div className="w-[300px] h-[150px] flex items-center justify-center bg-[#337F5F] rounded-xl">
            saved
          </div>
        </div>
        <div className="p-8 flex justify-between items-center">
          {/* First card with icon */}
          <div className="w-[300px] h-[150px] flex items-center justify-center bg-[#337F5F] rounded-xl">
            <FontAwesomeIcon icon={faBolt} size="2xl" color="white" />{" "}
            {/* Icon used here */}
          </div>

          {/* Second card */}
          <div className="w-[300px] h-[150px] flex items-center justify-center bg-[#337F5F] rounded-xl">
            fav
          </div>

          {/* Third card */}
          <div className="w-[300px] h-[150px] flex items-center justify-center bg-[#337F5F] rounded-xl">
            saved
          </div>
        </div>
      </section>
    </div>
  );
}
