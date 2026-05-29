import { FaUtensils } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-5 flex justify-between items-center sticky top-0 z-50 shadow-lg">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <FaUtensils className="text-3xl text-yellow-400" />

        <h1 className="text-3xl font-bold">
          Food<span className="text-yellow-400">Hub</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-lg font-semibold">

        <li>
          <a
            href="#home"
            className="hover:text-yellow-400 duration-300"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#menu"
            className="hover:text-yellow-400 duration-300"
          >
            Menu
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="hover:text-yellow-400 duration-300"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-yellow-400 duration-300"
          >
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}