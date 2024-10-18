import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import salleService from "../services/salle.service";
import reservationService from "../services/reservation.service";

export default function Reservation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const seanceId = searchParams.get("seanceId");
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    async function fetchSalleDetails() {
      try {
        const { salle, reservedPlaces, availablePlaces } =
          await salleService.salle(id, seanceId);

        const allSeats = availablePlaces.map((seatNumber) => ({
          seatNumber,
          isReserved: reservedPlaces.includes(seatNumber),
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
          return prevSelected.filter((seat) => seat !== seatNumber);
        } else {
          return [...prevSelected, seatNumber];
        }
      });
    }
  };

  const handleReserve = async () => {
    try {
      await reservationService.createReservation(seanceId, selectedSeats);
      navigate("/");
      setSelectedSeats([]);
    } catch (error) {
      console.error("Error making reservation:", error);
      alert("Failed to reserve seats.");
    }
  };

  return (
    <div className="text-center p-8 bg-[#181d25] text-white">
      <h2 className="text-4xl font-semibold mb-2">Available Seats</h2>
      <h2 className="text-xl font-semibold mb-2">Select Your Seats</h2>
      <div className="grid grid-cols-11 gap-2 text-center md:grid-cols-8">
        {seats.map(({ seatNumber, isReserved }) => {
          const isSelected = selectedSeats.includes(seatNumber);

          return (
            <div
              key={seatNumber}
              className={`group flex justify-center items-center place-self-center h-[38px] w-[40px] relative ${
                isReserved ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
              onClick={() => !isReserved && handleSeatClick(seatNumber)}
            >
              <div
                className={`w-[9px] rounded h-[21px] left-1 border border-white absolute bottom-0 group-hover:bg-red-500 duration-300 ${
                  isReserved
                    ? "bg-red-500"
                    : isSelected
                    ? "bg-amber-500"
                    : "bg-green-700"
                }`}
              ></div>
              <div
                className={`h-full w-[70%] text-center text-black font-medium rounded group-hover:bg-red-300 duration-300 ${
                  isReserved
                    ? "bg-red-500 text-white"
                    : isSelected
                    ? "bg-amber-300"
                    : "bg-green-400"
                }`}
              >
                {seatNumber}
              </div>
              <div
                className={`w-[9px] rounded h-[21px] right-1 border border-white absolute bottom-0 group-hover:bg-red-500 duration-300 ${
                  isReserved
                    ? "bg-red-500"
                    : isSelected
                    ? "bg-amber-500"
                    : "bg-green-700"
                }`}
              ></div>
            </div>
          );
        })}
      </div>
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
