import React from "react";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-gradient-to-r sticky top-0 z-50 from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">R</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">MyApp</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-200 font-semibold border-b-2 border-white pb-1"
                  : "hover:text-blue-200 transition-colors duration-300 font-medium"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-200 font-semibold border-b-2 border-white pb-1"
                  : "hover:text-blue-200 transition-colors duration-300 font-medium"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-200 font-semibold border-b-2 border-white pb-1"
                  : "hover:text-blue-200 transition-colors duration-300 font-medium"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-200 font-semibold border-b-2 border-white pb-1"
                  : "hover:text-blue-200 transition-colors duration-300 font-medium"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-white/10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (hidden by default) */}
        <div className="md:hidden mt-4 pb-2 border-t border-white/20 pt-4">
          <div className="flex flex-col space-y-3">
            <Link href="#" className="hover:text-blue-200 py-2">
              Home
            </Link>
            <a href="#" className="hover:text-blue-200 py-2">
              About
            </a>
            <a href="#" className="hover:text-blue-200 py-2">
              Services
            </a>
            <a href="#" className="hover:text-blue-200 py-2">
              Contact
            </a>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold mt-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
