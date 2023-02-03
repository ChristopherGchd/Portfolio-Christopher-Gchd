import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div
        id="navbar"
        className="hidden sm:flex justify-between pb-1 bg-[#94a3b8] font-bold"
      >
        <div className="ml-6">
          <div className="inline-block text-center place-content-center items-center mr-4">
            <Link to="/home">
              <p className="text-sm">Home</p>
            </Link>
          </div>
          <div className="inline-block text-center place-content-center mr-4">
            <Link to="/projects">
              <p className="text-sm">My Projects</p>
            </Link>
          </div>
          <div className="inline-block text-center place-content-center mr-4">
            <Link to="/home">
              <p className="text-sm">Contact</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden relative flex justify-end bg-[#94a3b8]">
        <button
          className="p-4 space-y-2"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-[#18181b] rounded-md`}
          />
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-[#18181b] rounded-md`}
          />
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-[#18181b] rounded-md`}
          />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-full z-40 bg-white`}
        >
          <div className="relative w-full bg-[#94a3b8]">
            <button
              className="absolute right-0 mr-4 mt-4 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              X
            </button>
            <div className="p-10">
              <Link to="/home">
                <p className="text-xl font-bold py-2">Home</p>
              </Link>
              <Link to="/projects">
                <p className="text-xl font-bold py-2">My Projects</p>
              </Link>
              <Link to="/home">
                <p className="text-xl font-bold py-2">Contact</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
