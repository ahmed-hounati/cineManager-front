import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Navbar({ currentUser, setCurrentUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    AuthService.logout().then(setCurrentUser(undefined), navigate("/login"));
  };

  return (
    <nav className="py-4 px-10">
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
            className="text-white hover:text-white focus:outline-none"
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
          {currentUser ? (
            <Link
              to="/dashboard"
              className="text-white text-xl hover:text-[#337F5F]"
            >
              Dashboard
            </Link>
          ) : (
            <input type="hidden" />
          )}
          <Link to="/films" className="text-white text-xl hover:text-[#337F5F]">
            Films
          </Link>
          <Link
            to="/screening"
            className="text-white text-xl hover:text-[#337F5F]"
          >
            Screening
          </Link>
          <Link to="/about" className="text-white text-xl hover:text-[#337F5F]">
            About us
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl hover:text-[#337F5F]"
          >
            Contact us
          </Link>
        </div>

        {/* Buttons (Hidden on mobile) */}
        {!currentUser ? (
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="text-white text-xl px-4 py-2 hover:text-gray-900"
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
        ) : (
          <div className="hidden md:flex space-x-4">
            <Link
              onClick={logout}
              className="bg-[#337F5F] text-xl text-white px-4 py-2 rounded-md"
            >
              Logout
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu (Visible on mobile) */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link
            to="/films"
            className="text-white text-lg hover:text-[#337F5F]"
            onClick={toggleMenu}
          >
            Films
          </Link>
          <Link
            to="/screening"
            className="text-white text-lg hover:text-[#337F5F]"
            onClick={toggleMenu}
          >
            Screening
          </Link>
          <Link
            to="/about"
            className="text-white text-lg hover:text-[#337F5F]"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg hover:text-[#337F5F]"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          {!currentUser ? (
            <>
              <Link
                to="/login"
                className="text-white text-lg hover:text-gray-900"
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
            </>
          ) : (
            <Link
              className="bg-[#337F5F] text-lg text-white px-4 py-2 rounded-md"
              onClick={logout}
            >
              Logout
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
