import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div id="navbar" className="flex justify-end mt-6 mr-6">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <button
            type="button"
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
          </button>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <button
              type="button"
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <Link to="/home">
                <li className="border-gray-400 my-8 uppercase">
                  <p>Home</p>
                </li>
              </Link>
              <Link to="/projects">
                <li className="border-gray-400 my-8 uppercase">
                  <p>My Projects</p>
                </li>
              </Link>
              <Link to="/home">
                <li className="border-gray-400 my-8 uppercase">
                  <p>Contact</p>
                </li>
              </Link>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <Link to="/home">
            <li className="border-gray-400 my-8 uppercase">
              <p>Home</p>
            </li>
          </Link>
          <Link to="/projects">
            <li className="border-gray-400 my-8 uppercase">
              <p>My Projects</p>
            </li>
          </Link>
          <Link to="/home">
            <li className="border-gray-400 my-8 uppercase">
              <p>Contact</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
