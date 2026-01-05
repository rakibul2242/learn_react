import React from "react";
import { NavLink, Outlet } from "react-router";

function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">React Practice Projects</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Collection of basic React projects perfect for beginners. Click on
            any project to view it.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full" viewBox="0 0 1440 120">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        {/* Top buttons */}
        <div className="flex container mx-auto justify-center flex-wrap gap-4 my-4">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
                : "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            }
          >
            GitHub
          </NavLink>
          <NavLink
            to="bg-changer"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
                : "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            }
          >
            Bg Changer
          </NavLink>
          <NavLink
            to="counter"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
                : "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            }
          >
            Counter
          </NavLink>
          <NavLink
            to="clock"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
                : "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            }
          >
            Clock
          </NavLink>
          <NavLink
            to="password-generator"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
                : "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            }
          >
            Password Generator
          </NavLink>
          <NavLink
            to="form-submit"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
                : "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            }
          >
            Form Submit
          </NavLink>
          <NavLink
            to="toggle"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
                : "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            }
          >
            Toggle
          </NavLink>
        </div>

        {/* Projects content */}
        <Outlet />
      </section>
    </div>
  );
}

export default Projects;
