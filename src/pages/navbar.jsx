import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const menu = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <header className=" md:px-16 px-4 py-1 sm:py-0  flex flex-wrap items-center  shadow-md">
        <div className="flex-1 flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold text-transparent bg-clip-text  bg-gradient-to-tr from-amber-400 via-amber-200 to-red-800"
          >
            Prashant
          </Link>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor sm:hidden block">
          <span
            className="fill-current font-bold text-xl text-gray-900"
            onClick={menu}
          >
            {!open ? <RiMenuFill /> : <RiCloseFill />}
          </span>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className={`sm:flex sm:items-center sm:w-auto w-full `} id="menu">
          <nav>
            <ul
              className={`sm:flex items-center z-10 justify-between sm:text-2xl font-semibold  pt-4 sm:pt-0 ${
                open
                  ? "block relative z-10 bg-[#0092DA] w-full ml-0 pl-5 "
                  : "hidden"
              }`}
            >
              <li>
                <Link
                  className="sm:p-4 py-3 px-0 block hover:underline hover:ease-linear"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="sm:p-4 py-3 px-0 block hover:underline hover:ease-linear"
                  to="/stack"
                >
                  Tech-Stack
                </Link>
              </li>
              <li>
                <Link
                  className="sm:p-4 py-3 px-0 block hover:underline hover:ease-linear"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="sm:p-4 py-3 px-0 block sm:mb-0 mb-2 hover:underline hover:ease-linear"
                  to="/contact"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
