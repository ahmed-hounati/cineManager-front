import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Sidebar() {
  const navigate = useNavigate();
  const logout = () => {
    AuthService.logout().then(navigate("/login"));
  };
  return (
    <div className="w-64 h-screen bg-[#181d25] text-white border-r">
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
              className="block text-left mx-2 px-4 rounded-xl py-2 text-lg text-white hover:bg-[#B9F5DB] hover:text-gray-800"
            >
              Films
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <Link
          onClick={logout}
          className="w-auto px-2 bg-[#337F5F] text-white py-2 rounded-md "
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
