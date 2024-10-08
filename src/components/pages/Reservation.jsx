import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import salleService from "../../services/salle.service";
import reservationService from "../../services/reservation.service"; // Import your reservation service

export default function Reservation() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const seanceId = searchParams.get("seanceId");
  const [seats, setSeats] = useState([]); // This will hold all seats with their reserved status
  const [selectedSeats, setSelectedSeats] = useState([]); // Change to array for multiple selections

  useEffect(() => {
    async function fetchSalleDetails() {
      try {
        const { salle, reservedPlaces, availablePlaces } =
          await salleService.salle(id, seanceId);

        console.log("Reserved Places: ", reservedPlaces); // Debug: Check if reservedPlaces is correct
        console.log("Available Places: ", availablePlaces); // Debug: Check if availablePlaces is correct

        // Combine all seats into a single array with reserved flag
        const allSeats = availablePlaces.map((seatNumber) => ({
          seatNumber,
          isReserved: reservedPlaces.includes(seatNumber), // Mark reserved seats
        }));

        setSeats(allSeats);
      } catch (error) {
        console.error("Error fetching salle details:", error);
      }
    }

    fetchSalleDetails();
  }, [id, seanceId]);

  const handleSeatClick = (seatNumber) => {
    const isReserved = seats.find(
      (seat) => seat.seatNumber === seatNumber
    )?.isReserved;

    if (!isReserved) {
      setSelectedSeats((prevSelected) => {
        if (prevSelected.includes(seatNumber)) {
          // If already selected, remove it
          return prevSelected.filter((seat) => seat !== seatNumber);
        } else {
          // If not selected, add it
          return [...prevSelected, seatNumber];
        }
      });
    }
  };

  const handleReserve = async () => {
    try {
      await reservationService.createReservation(seanceId, selectedSeats);
      alert("Reservation successful!");
      setSelectedSeats([]); // Clear selected seats after reservation
    } catch (error) {
      console.error("Error making reservation:", error);
      alert("Failed to reserve seats.");
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-2">Select Your Seats</h2>
      <div className="grid grid-cols-10 gap-2">
        {seats.map(({ seatNumber, isReserved }) => {
          const isSelected = selectedSeats.includes(seatNumber);

          return (
            <div
              key={seatNumber}
              className={`group flex justify-center h-[38px] w-[40px] relative ${
                isReserved ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
              onClick={() => !isReserved && handleSeatClick(seatNumber)}
            >
              <div
                className={`w-[9px] rounded h-[21px] left-1 border border-white absolute bottom-0 group-hover:bg-amber-500 duration-300 ${
                  isReserved
                    ? "bg-red-500" // Reserved seats are red
                    : isSelected
                    ? "bg-amber-500"
                    : "bg-green-700"
                }`}
              ></div>
              <div
                className={`h-full w-[70%] text-center text-black font-medium rounded group-hover:bg-amber-300 duration-300 ${
                  isReserved
                    ? "bg-red-500 text-white" // Reserved seats are red
                    : isSelected
                    ? "bg-amber-300"
                    : "bg-green-400"
                }`}
              >
                {seatNumber}
              </div>
              <div
                className={`w-[9px] rounded h-[21px] right-1 border border-white absolute bottom-0 group-hover:bg-amber-500 duration-300 ${
                  isReserved
                    ? "bg-red-500" // Reserved seats are red
                    : isSelected
                    ? "bg-amber-500"
                    : "bg-green-700"
                }`}
              ></div>
            </div>
          );
        })}
      </div>
      {/* Display the reserve button only if there are selected seats */}
      {selectedSeats.length > 0 && (
        <button
          className="mt-4  bg-[#337F5F] m-8 text-white p-4 rounded"
          onClick={handleReserve}
        >
          Reserve
        </button>
      )}
    </div>
  );
}
