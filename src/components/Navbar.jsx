import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiUserCircle } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Side - Logo & Menu (Tablet & Mobile) */}
          <div className="flex items-center space-x-2">
            <button
              className="lg:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
            <Link to="/" className="text-2xl font-bold">
              Beauty Salon
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-10 flex-1 justify-center">
            <div className="relative group">
              <Link
                to="/"
                className="transition-colors text-lg duration-300 hover:text-pink-400"
              >
                Home
              </Link>
              <div className="absolute left-0 bottom-0 h-0.5 bg-pink-400 w-0 transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="relative group">
              <Link
                to="/about"
                className="transition-colors text-lg duration-300 hover:text-pink-400"
              >
                About Us
              </Link>
              <div className="absolute left-0 bottom-0 h-0.5 bg-pink-400 w-0 transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="relative group">
              <Link
                to="/services"
                className="transition-colors text-lg duration-300 hover:text-pink-400"
              >
                Services
              </Link>
              <div className="absolute left-0 bottom-0 h-0.5 bg-pink-400 w-0 transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="relative group">
              <Link
                to="/gallery"
                className="transition-colors text-lg duration-300 hover:text-pink-400"
              >
                Gallery
              </Link>
              <div className="absolute left-0 bottom-0 h-0.5 bg-pink-400 w-0 transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="relative group">
              <Link
                to="/contact"
                className="transition-colors text-lg duration-300 hover:text-pink-400"
              >
                Contact Us
              </Link>
              <div className="absolute left-0 bottom-0 h-0.5 bg-pink-400 w-0 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>

          {/* Right Side - Book Appointment Button & Profile Icon */}
          <div className="flex items-center space-x-4">
            <Link to="/booking">
              <button className="hidden lg:block bg-transparent border border-pink-400 text-pink-400 px-4 py-2 rounded hover:bg-pink-400 hover:text-white transition">
                Book an Appointment
              </button>
              <button className="md:block lg:hidden hidden bg-transparent border border-pink-400 text-pink-400 px-4 py-2 rounded ">
                Book an Appointment
              </button>
              <button className="sm:block md:hidden bg-transparent border border-pink-400 text-pink-400 px-2 py-1 text-md rounded ">
                Book Now
              </button>
            </Link>
            <Link to="/signup">
              <HiUserCircle size={40} className="text-white cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 text-white shadow-md p-4 space-y-4">
          <Link
            to="/"
            className="block transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="block transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className="block transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
