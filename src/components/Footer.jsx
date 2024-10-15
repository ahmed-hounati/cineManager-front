import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#181d25] text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center flex-wrap">
        {/* Left section: Links */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start mb-6 md:mb-0">
          <div className="md:ml-6">
            <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
              <li className="mb-2 md:mb-0">
                <a href="/" className="hover:text-[#337F5F]">
                  Home
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="/about" className="hover:text-[#337F5F]">
                  About Us
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="/films" className="hover:text-[#337F5F]">
                  Films
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#337F5F]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle section: Social Media */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/twitter-original.svg"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>

        {/* Right section: Copyright */}
        <div className="text-center md:text-right">
          <p>&copy; 2024 CineManager</p>
        </div>
      </div>
    </footer>
  );
}
