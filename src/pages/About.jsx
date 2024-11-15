import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white">
        {/* First Section: Image and Text */}
        <section>
          <h2 className="text-4xl text-center mt-8">About Us</h2>
          <div className="flex flex-col md:flex-row p-8 md:p-20 justify-between items-center">
            <img
              src="/cinema.png"
              className="w-full md:w-1/2 h-auto rounded-xl mb-8 md:mb-0"
              alt="cinema image"
            />
            <p className="text-lg md:text-xl w-full md:w-[500px] text-center md:text-left">
              CineManager is a place where you can reserve tickets to watch your
              favorite movies.
            </p>
          </div>
        </section>

        {/* Second Section: Text and Google Map */}
        <section className="bg-[#45b595] flex flex-col md:flex-row items-center justify-between p-8">
          <p className="text-lg md:text-xl text-white w-full md:w-[600px] text-center md:text-left mb-8 md:mb-0">
            CinéManager is an innovative cinema management application designed
            to streamline the booking and screening process for movie theaters.
            The platform allows users to easily browse available films, view
            detailed schedules, and make seat reservations in just a few clicks.
            With features like user authentication, film ratings, favorites
            management, and real-time seat selection, CinéManager provides a
            seamless and user-friendly experience for both cinema-goers and
            administrators. The application also offers advanced functionalities
            such as session management, customizable room layouts, and ticketing
            integration, making it an all-in-one solution for modern theaters.
          </p>
          <div className="w-full md:w-auto flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96684.05834050952!2d-9.319094525192309!3d32.29305058981145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac212049843597%3A0x6b618c47dfd85d40!2sSafi!5e1!3m2!1sen!2sma!4v1727943873559!5m2!1sen!2sma"
              className="border-0 w-full md:w-[500px] h-[350px] rounded-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Sign Up Section */}
        <div className="bg-[#45b595] flex justify-center items-center p-8">
          <p className="text-lg md:text-2xl text-white text-center">
            To Know More About Us,{" "}
            <Link
              to="/signup"
              className="hover:text-[#FFE102] transition duration-500"
            >
              Sign Up
            </Link>
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
}
