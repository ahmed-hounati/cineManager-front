import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white">
        {/* First Section: Text */}
        <section className="my-5 flex justify-center items-center px-4 md:px-0">
          <div className="p-8 md:p-16 text-center">
            <h2 className="text-4xl">Contact Us</h2>
            <p className="mt-5 text-lg md:text-2xl max-w-lg mx-auto">
              CinéManager is an innovative cinema management application
              designed to streamline the booking and screening process for movie
              theaters. The platform allows users to easily browse available
              films, view detailed schedules.
            </p>
          </div>
        </section>

        {/* Second Section: Form */}
        <section className="bg-[#337F5F] py-8">
          <div className="flex flex-col items-center justify-center gap-8 p-4">
            <h2 className="text-3xl text-white text-center">
              Send Us your message
            </h2>
            <form className="w-full max-w-lg p-4 md:p-8">
              {/* Email field */}
              <div className="mb-4 flex flex-col justify-center">
                <label className="text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full px-4 py-3 rounded-md border border-black"
                  name="email"
                />
              </div>

              {/* Message field */}
              <div className="mb-4 flex flex-col justify-center">
                <label className="text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  placeholder="Your message"
                  className="mt-1 w-full px-4 py-3 h-32 rounded-md border border-black"
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-1/4 text-white py-3 bg-[#45b595] rounded-md text-lg font-semibold transition duration-300 hover:bg-[#2b6f5a]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
