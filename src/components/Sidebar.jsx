import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Sidebar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const logout = () => {
    AuthService.logout().then(setCurrentUser(undefined), navigate("/login"));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar open/closed
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 h-screen bg-[#181d25] text-white border-r transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10">
          <img
            src="/cineLogo.png"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div className="mt-10">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="block text-left mx-2 px-4 py-2 rounded-xl text-lg text-white hover:bg-[#B9F5DB] hover:text-gray-800"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/reservations"
                className="block text-left mx-2 px-4 py-2 rounded-xl text-lg text-white hover:bg-[#B9F5DB] hover:text-gray-800"
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                to="/screening"
                className="block text-left mx-2 px-4 py-2 rounded-xl text-lg text-white hover:bg-[#B9F5DB] hover:text-gray-800"
              >
                Screening
              </Link>
            </li>
            <li>
              <Link
                to="/films"
                className="block text-left mx-2 px-4 py-2 rounded-xl text-lg text-white hover:bg-[#B9F5DB] hover:text-gray-800"
              >
                Films
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <button
            onClick={logout}
            className="w-full px-2 py-2 bg-[#337F5F] text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Burger Menu Button */}
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={toggleSidebar}
            className="text-white bg-[#181d25] p-2 rounded-md focus:outline-none"
          >
            {/* Burger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay for closing sidebar when clicking outside */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-30"
        ></div>
      )}
    </div>
  );
}
