// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { HiMenu, HiX, HiUserCircle } from "react-icons/hi";

// function Navbar() {
//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About Us" },
//     { path: "/services", label: "Services" },
//     { path: "/contact", label: "Contact Us" },
//     { path: "/booking", label: "Reservation" },
//   ];

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <div className="bg-gradient-to-b from-black/80 font-light text-white w-full sticky top-0 z-50 opacity-70">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex space-x-2">
//             <button className="lg:hidden text-white" onClick={toggleMenu}>
//               {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
//             </button>
//             <Link
//               to="/"
//               className="md:text-2xl great-vibes text-lg tracking-widest"
//             >
//               Echelon
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden great-vibes lg:flex space-x-10 justify-center">
//             {navLinks.map(({ path, label }) => (
//               <div key={path} className="group">
//                 <Link
//                   to={path}
//                   className="transition-colors duration-300 text-lg  hover:text-[#D4AF37]"
//                 >
//                   {label}
//                 </Link>
//                 <div className="left-0 bottom-0 h-0.5 bg-[#D4AF37] w-0 transition-all duration-300 group-hover:w-full" />
//               </div>
//             ))}
//           </div>

//           <Link to="/signup">
//             <HiUserCircle size={35} />
//           </Link>
//         </div>
//       </div>

//       {/* Mobile & Tablet Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-gray-800 shadow-md p-4 space-y-4">
//           {navLinks.map(({ path, label }) => (
//             <Link key={path} to={path} className="block" onClick={closeMenu}>
//               {label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiUserCircle } from "react-icons/hi";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact Us" },
  { path: "/booking", label: "Reservation" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="bg-gradient-to-b from-black/80 font-light text-white w-full sticky top-0 z-50 opacity-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo & Menu Button */}
          <div className="flex space-x-2 items-center">
            <button
              className="lg:hidden text-white mb-1.5"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
            <Link
              to="/"
              className="md:text-2xl great-vibes text-lg tracking-widest"
            >
              Echelon
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden great-vibes lg:flex space-x-10 justify-center">
            {navLinks.map(({ path, label }) => (
              <div key={path} className="group relative">
                <Link
                  to={path}
                  className={`transition-colors duration-300 text-lg ${
                    location.pathname === path
                      ? "text-[#D4AF37]"
                      : "hover:text-[#D4AF37]"
                  }`}
                >
                  {label}
                </Link>
                <div className="left-0 bottom-0 h-0.5 bg-[#D4AF37] w-0 transition-all duration-300 group-hover:w-full absolute" />
              </div>
            ))}
          </div>

          {/* Right: User Icon */}
          <Link to="/signup">
            <HiUserCircle size={35} />
          </Link>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        className={`lg:hidden bg-gray-800 shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 p-4 space-y-4" : "max-h-0 p-0"
        }`}
      >
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`block transition-colors duration-300 ${
              location.pathname === path
                ? "text-[#D4AF37]"
                : "hover:text-[#D4AF37]"
            }`}
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
