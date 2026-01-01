import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Event & Competitions", path: "/competitions" },
    { name: "My Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
      ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-md py-2"
        : "bg-white/40 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center px-6 md:px-12 transition-all duration-300">
        {/* โลโก้ */}
        <Link
          to="/"
          className="relative text-2xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600
            hover:opacity-80 transition duration-300"
        >
          Pimonput
        </Link>

        {/* ปุ่มเมนูมือถือ */}
        <button
          className="text-2xl text-gray-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* เมนูหลัก */}
        <ul
          className={`flex flex-col md:flex-row gap-6 md:gap-8 absolute md:static bg-white/95 md:bg-transparent
            left-0 w-full md:w-auto px-6 md:px-0 py-6 md:py-0 shadow-md md:shadow-none
            transition-all duration-300 ease-in-out
            ${menuOpen ? "top-[68px] opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}
          `}
        >
          {links.map((link) => (
            <li key={link.name} className="relative group text-center md:text-left">
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`transition-all duration-300 block ${
                  location.pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
              {/* เส้นขีดใต้ */}
              <span
                className={`absolute bottom-[-4px] left-0 w-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-full ${
                  location.pathname === link.path ? "w-full" : ""
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
