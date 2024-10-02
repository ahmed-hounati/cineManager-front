import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#337F5F]">
        {/* Header Section */}
        <section className="text-center py-20 bg-[#337F5F]">
          <h1 className="text-4xl text-center font-bold text-white">
            The Place To Watch The Best Movies
          </h1>
          <p className="mt-4 text-center text-white text-lg">
            Get your ticket now. The places is limited
          </p>
        </section>
        <div className="flex">
          <div className="w-full md:w-1/2 flex justify-center p-8">
            <img
              src="/wonka.jpg"
              alt="Login page side image"
              className="w-1/2 h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-8">
            <p className="w-1/2 h-full text-white text-center mt-8 ">
              Wonka is a 2023 musical fantasy film directed by Paul King, who
              co-wrote the screenplay with Simon Farnaby based on a story by
              King. It tells the origin story of Willy Wonka, a central
              character in the 1964 novel Charlie and the Chocolate Factory by
              Roald Dahl, depicting his early days as a chocolatier. The film
              stars Timothée Chalamet as the title character, with an ensemble
              cast including Calah Lane, Keegan-Michael Key, Paterson Joseph,
              Matt Lucas, Mathew Baynton, Sally Hawkins, Rowan Atkinson, Jim
              Carter, Olivia Colman, and Hugh Grant.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-full md:w-1/2 flex justify-center p-8">
            <p className="w-1/2 h-full text-white text-center mt-8 ">
              The Usual Suspects is a 1995 crime thriller film directed by Bryan
              Singer and written by Christopher McQuarrie. It stars Stephen
              Baldwin, Gabriel Byrne, Benicio del Toro, Kevin Pollak, Chazz
              Palminteri, The film was shot on a $6 million budget and began as
              a title taken from a column in Spy magazine called The Usual
              Suspects, after one of Claude Rains' most memorable lines in the
              classic film Casablanca, and Singer thought that it would make a
              good title for a film.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-8">
            <img
              src="/usualsus.png"
              alt="Login page side image"
              className="w-1/2 h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="text-center flex justify-center items-center p-8">
          <Link to="/signup" className="text-2xl text-white hover:text-[#FFE102] transition duration-500">
            Sign Up to More
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
