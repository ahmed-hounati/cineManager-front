import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      await AuthService.login(email, password);
      navigate("/screening");
      window.location.reload();
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        "Something went wrong. Please try again.";
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full bg-cover bg-center bg-[#181d25]">
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-4xl font-bold text-[#B8DBD9] mb-6">
          Login to Your Account
        </h2>

        <form
          onSubmit={handleLogin}
          className="w-full max-w-md p-8 bg-gray-600 shadow-md rounded-lg"
        >
          {/* Email field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error or success message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {message && <p className="text-green-500 mb-4">{message}</p>}

          {/* Forgot password and submit button */}
          <div className="flex justify-between mb-6">
            <Link
              to="/forget-password"
              className="text-sm text-white hover:text-gray-900"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-lg font-semibold ${
              loading ? "bg-gray-400" : "bg-[#337F5F] text-white"
            } `}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Sign up link */}
        <p className="mt-4 text-center text-white">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#B8DBD9] hover:text-green-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
