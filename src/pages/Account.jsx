import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios"; // Assuming you're using axios for HTTP requests
import AuthService from "../services/auth.service";

export default function Account() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  const [email, setEmail] = useState(user?.email || "");
  const [name, setName] = useState(user?.name || "");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.update(email, name);
      if (response) {
        localStorage.setItem("token", JSON.stringify(token));
        const updatedUser = { ...user, name, email };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setMessage("Profile updated successfully!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to update profile.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Account Section */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#337F5F]"
                onChange={(e) => setName(e.target.value)} // Update state
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#337F5F]"
                onChange={(e) => setEmail(e.target.value)} // Update state
              />
            </div>

            {/* Save Button */}
            <div className="text-right">
              <button
                type="submit" // Ensure the button submits the form
                className="bg-[#337F5F] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#337F5F] focus:outline-none focus:ring-2 focus:ring-[#337F5F]"
              >
                Save Changes
              </button>
            </div>

            {/* Success/Failure Message */}
            {message && (
              <p className="text-center mt-4 text-sm text-gray-600">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
