import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center">
      {/* Left side: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 mb-10 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome To CineManager
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full md:w-3/4 px-4 py-3 rounded-md border border-black"
              name="name"
            />
          </div>
          {/* Email field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full md:w-3/4 px-4 py-3 rounded-md border border-black"
              name="email"
            />
          </div>

          {/* Password field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full md:w-3/4 px-4 py-3 rounded-md border border-black"
              name="password"
            />
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="w-full md:w-3/4 bg-[#337F5F] text-white py-3 rounded-md text-lg font-semibold "
          >
            Sign Up
          </button>
        </form>

        {/* Sign up link */}
        <p className="mt-4 text-center md:text-left text-gray-500">
          Have an account?{" "}
          <Link to="/login" className="text-[#337F5F]">
            Login
          </Link>
        </p>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-1/2 flex justify-center p-8">
        <img
          src="/login.png"
          alt="Login page side image"
          className="max-w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
