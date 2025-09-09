// import React from "react";
// import { NavLink } from "react-router-dom";

// function Navigation() {
//   return (
//     <div className="bg-[#f7bf9f]">
//     <nav className="container py-[20px] flex justify-between items-center">

//       <NavLink exact to="/" activeClassName="active">
//         Home
//       </NavLink>
//       <span className="flex gap-[40px] items-center">
//         <NavLink className='font-lato font-bold text-[#424551]' to="/about" activeClassName="active">
//           Kitoblar
//         </NavLink>
//         <NavLink className='font-lato font-bold text-[#424551]' to="/contact" activeClassName="active">
//           Yangiliklar
//         </NavLink>
//       </span>
//     </nav>
//     </div>
//   );
// }

// export default Navigation;











import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#f7bf9f]">
      <nav className="container py-5 flex justify-between items-center">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-[#424551]" : "text-[#424551]"}>
          Home
        </NavLink>

        <span className="flex gap-10 items-center">
          <NavLink to="/books" className={({ isActive }) => isActive ? "font-lato font-bold text-[#424551]" : "font-lato text-[#424551]"}>
            Kitoblar
          </NavLink>

          <NavLink to="/news" className={({ isActive }) => isActive ? "font-lato font-bold text-[#424551]" : "font-lato text-[#424551]"}>
            Yangiliklar
          </NavLink>

          {/* <NavLink to="/admin" className="font-lato text-[#424551]">Admin</NavLink> */}
        </span>
      </nav>
    </div>
  );
}

export default Navbar;