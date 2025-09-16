// import React from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className="bg-[#f7bf9f]">
//       <nav className="container py-5 flex justify-between items-center">
//         <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-[#424551]" : "text-[#424551]"}>
//           Home
//         </NavLink>

//         <span className="flex gap-10 items-center">
//           <NavLink to="/books" className={({ isActive }) => isActive ? "font-lato font-bold text-[#424551]" : "font-lato text-[#424551]"}>
//             Kitoblar
//           </NavLink>

//           <NavLink to="/news" className={({ isActive }) => isActive ? "font-lato font-bold text-[#424551]" : "font-lato text-[#424551]"}>
//             Yangiliklar
//           </NavLink>

//           {/* <NavLink to="/admin" className="font-lato text-[#424551]">Admin</NavLink> */}
//         </span>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f7bf9f] shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <NavLink
          to="/"
          className="text-xl font-bold text-[#424551] hover:text-gray-700"
        >
          Kutubxona
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
            Home
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
            Home
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