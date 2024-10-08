import React from "react";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* First Section: Text */}
      <section className="my-5 flex justify-center items-center px-4 md:px-0">
        <div className="p-8 md:p-16 text-center">
          <p className="text-lg md:text-2xl max-w-lg mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos mollitia itaque aspernatur explicabo saepe, error, nulla
            maxime quia tempore veniam repudiandae harum aut totam, soluta ut
            doloremque officia! Soluta a quisquam sint laborum veniam
            accusantium illum sequi id tempora iste eaque exercitationem ipsa
            aut cupiditate, commodi laudantium voluptate, cum debitis.
          </p>
        </div>
      </section>

      {/* Second Section: Form */}
      <section className="bg-[#337F5F] py-8">
        <div className="max-w-3xl mx-auto p-4">
          <form className="p-4 md:p-8">
            {/* Email field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full md:w-3/4 px-4 py-3 rounded-md border border-black"
                name="email"
              />
            </div>

            {/* Message field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                placeholder="Your message"
                className="mt-1 block w-full md:w-3/4 px-4 py-3 h-32 rounded-md border border-black"
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
  );
}
