import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#337F5F]">
        {/* Header Section */}
        <section className="text-center py-16 md:py-20 p-8 bg-[#337F5F]">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            The Place To Watch The Best Movies
          </h1>
          <p className="mt-4 text-white text-base md:text-lg">
            Get your ticket now. The places are limited.
          </p>
        </section>

        {/* Movie Section: Wonka */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center p-8">
            <img
              src="/wonka.jpg"
              alt="Wonka movie"
              className="w-full md:w-1/2 h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-8">
            <p className="w-full md:w-1/2 text-white text-center mt-4 md:mt-8">
              Wonka is a 2023 musical fantasy film directed by Paul King, who
              co-wrote the screenplay with Simon Farnaby. It tells the origin
              story of Willy Wonka, a central character in the 1964 novel
              Charlie and the Chocolate Factory by Roald Dahl.
            </p>
          </div>
        </div>

        {/* Movie Section: The Usual Suspects */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center p-8 order-2 md:order-1">
            <p className="w-full md:w-1/2 text-white text-center mt-4 md:mt-8">
              The Usual Suspects is a 1995 crime thriller directed by Bryan
              Singer. It stars Stephen Baldwin, Gabriel Byrne, Benicio del Toro,
              and Kevin Pollak. The film was shot on a $6 million budget and
              tells the story of a group of criminals brought together under
              mysterious circumstances.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-8 order-1 md:order-2">
            <img
              src="/usualsus.png"
              alt="The Usual Suspects movie"
              className="w-full md:w-1/2 h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Signup Section */}
        <div className="text-center flex justify-center items-center p-8">
          <Link
            to="/signup"
            className="text-2xl text-white hover:text-[#FFE102] transition duration-500"
          >
            Sign Up for More
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
