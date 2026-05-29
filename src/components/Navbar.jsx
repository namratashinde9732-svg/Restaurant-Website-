import { useState } from "react";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-10 py-5 sticky top-0 z-50 shadow-lg">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <FaUtensils className="text-3xl text-yellow-400" />

          <h1 className="text-2xl md:text-3xl font-bold">
            Food<span className="text-yellow-400">Hub</span>
          </h1>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">

          <li>
            <a href="#home" className="hover:text-yellow-400 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#menu" className="hover:text-yellow-400 duration-300">
              Menu
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-400 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-400 duration-300">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">

          <button onClick={() => setMenuOpen(!menuOpen)}>

            {menuOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <ul className="md:hidden flex flex-col gap-5 mt-6 text-lg font-semibold bg-gray-900 p-6 rounded-2xl">

          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#menu" onClick={() => setMenuOpen(false)}>
              Menu
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

        </ul>

      )}

    </nav>
  );
}