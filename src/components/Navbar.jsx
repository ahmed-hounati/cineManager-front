import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbare() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 px-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold">
          <Link to="/">
            <img src="/cineLogo.png" alt="Logo" className="h-16 w-16" />
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links (Hidden on mobile) */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/films"
            className="text-gray-700 text-xl hover:text-[#337F5F]"
          >
            Films
          </Link>
          <Link
            to="/rooms"
            className="text-gray-700 text-xl hover:text-[#337F5F]"
          >
            Rooms
          </Link>
          <Link
            to="/screening"
            className="text-gray-700 text-xl hover:text-[#337F5F]"
          >
            Screening
          </Link>
          <Link
            to="/about"
            className="text-gray-700 text-xl hover:text-[#337F5F]"
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 text-xl hover:text-[#337F5F]"
          >
            Contact us
          </Link>
        </div>

        {/* Buttons (Hidden on mobile) */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="text-gray-700 text-xl px-4 py-2 hover:text-gray-900"
          >
            LOG IN
          </Link>
          <Link
            to="/signup"
            className="bg-[#337F5F] text-xl text-white px-4 py-2 rounded-md"
          >
            SIGN UP
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Visible on mobile) */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link
            to="/films"
            className="text-gray-700 text-lg hover:text-[#337F5F]"
            onClick={toggleMenu}
          >
            Films
          </Link>
          <Link
            to="/rooms"
            className="text-gray-700 text-lg hover:text-[#337F5F]"
            onClick={toggleMenu}
          >
            Rooms
          </Link>
          <Link
            to="/screening"
            className="text-gray-700 text-lg hover:text-[#337F5F]"
            onClick={toggleMenu}
          >
            Screening
          </Link>
          <Link
            to="/about"
            className="text-gray-700 text-lg hover:text-[#337F5F]"
            onClick={toggleMenu}
          >
            About us
          </Link>
          <Link
            to="/login"
            className="text-gray-700 text-lg hover:text-gray-900"
            onClick={toggleMenu}
          >
            LOG IN
          </Link>
          <Link
            to="/signup"
            className="bg-[#337F5F] text-lg text-white px-4 py-2 rounded-md"
            onClick={toggleMenu}
          >
            SIGN UP
          </Link>
        </div>
      )}
    </nav>
  );
}
