import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    AuthService.login(email, password)
      .then(() => {
        navigate("/dashboard"); // Redirect to dashboard after successful login
        window.location.reload(); // Reload the page to update UI based on logged-in state
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setError(resMessage);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center">
      {/* Left side: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 mb-10 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome back</h2>

        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot password */}
          <div className="flex justify-between mb-6">
            <div>
              <Link
                to="/forget-password"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Forgot password
              </Link>
            </div>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="w-full md:w-3/4 bg-[#337F5F] text-white py-3 rounded-md text-lg font-semibold "
          >
            Login
          </button>
        </form>

        {/* Sign up link */}
        <p className="mt-4 text-center md:text-left text-gray-500">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#337F5F]">
            Sign up
          </Link>
        </p>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-1/2 flex justify-center p-8">
        <img
          src="/login-page-yimage.png"
          alt="Login page side image"
          className="max-w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
