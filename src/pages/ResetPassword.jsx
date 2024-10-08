import React, { useState } from "react";
import AuthService from "../services/auth.service"; // Import AuthService
import { useParams, useNavigate } from "react-router-dom"; // To get the token from the URL

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState(""); // Password state
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password state
  const [message, setMessage] = useState(""); // Success message state
  const [error, setError] = useState(""); // Error message state
  const [loading, setLoading] = useState(false); // Loading state
  const { token } = useParams(); // Assuming token is passed in the URL
  const navigate = useNavigate(); // For navigation after success

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset any previous messages
    setError(""); // Reset any previous errors

    // Validate password and confirm password match
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true); // Set loading to true

    try {
      // Call the resetPassword method from AuthService
      await AuthService.resetPassword(token, newPassword);
      setMessage("Password has been reset successfully. You can now log in.");
      setTimeout(() => navigate("/login"), 3000); // Redirect to login after 3 seconds
    } catch (error) {
      setError(
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          "Something went wrong, please try again."
      );
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Reset Password
        </h2>

        {/* Feedback Messages */}
        {message && (
          <div className="p-4 mb-4 text-green-700 bg-green-100 rounded-md">
            {message}
          </div>
        )}
        {error && (
          <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleResetPassword}>
          {/* New Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter your new password"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your new password"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-md text-lg font-semibold text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#337F5F] hover:bg-[#295f49]"
            }`}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>

      <div className="mt-8">
        <p className="text-gray-600 text-center">
          Enter your new password to reset it.
        </p>
      </div>
    </div>
  );
}
