import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo_web.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#dddcdb] shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <NavLink
          to="/"
          className="text-xl font-bold text-[#424551] hover:text-gray-700 flex items-center gap-3"
        >
          <img className="w-[70px]" src={Logo} alt="" />
          Bog'ot tuman - AKM
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-[#424551]"
                : "text-[#424551] hover:text-gray-700"
            }
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-[#424551]"
                : "text-[#424551] hover:text-gray-700"
            }
          >
            Kitoblar
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-[#424551]"
                : "text-[#424551] hover:text-gray-700"
            }
          >
            Yangiliklar
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#424551] focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#f7bf9f] px-4 pb-4 space-y-3">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block font-bold text-[#424551]"
                : "block text-[#424551] hover:text-gray-700"
            }
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            to="/books"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block font-bold text-[#424551]"
                : "block text-[#424551] hover:text-gray-700"
            }
          >
            Kitoblar
          </NavLink>
          <NavLink
            to="/news"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block font-bold text-[#424551]"
                : "block text-[#424551] hover:text-gray-700"
            }
          >
            Yangiliklar
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;