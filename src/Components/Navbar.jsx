import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2D1B10] text-white py-5 px-6 rounded-b-3xl shadow-lg ">
      <div className="container mx-auto relative">
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className="hidden md:flex justify-center gap-10 text-sm uppercase">
          <Link to="/" className="hover:text-gray-300 font-poppins text-lg">
            Inicio
          </Link>
          <Link to="/" className="hover:text-gray-300 font-poppins text-lg">
            Menú
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 font-poppins text-lg"
          >
            Acerca de Nosotros
          </Link>
          <Link to="/" className="hover:text-gray-300 font-poppins text-lg">
            Paquetes
          </Link>
          <Link to="/" className="hover:text-gray-300 font-poppins text-lg">
            Contáctenos
          </Link>
        </div>

        <div
          className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#2D1B10] p-6 shadow-lg z-10 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-4 text-sm uppercase mt-12">
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Menú
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Acerca de Nosotros
            </Link>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Paquetes
            </Link>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contáctenos
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
