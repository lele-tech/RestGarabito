import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2D1B10] text-white py-6 px-5 rounded-b-full shadow-[0_5px_10px_rgba(0,0,0,0.6)]">
      <div className="container mx-auto relative">

        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-60">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
              <FiMenu />
          </button>
        </div>


        <div className="hidden md:flex justify-center gap-10 text-sm uppercase">
          <Link to="/" className="hover:text-gray-300 font-poppins">Inicio</Link>
          <Link to="/" className="hover:text-gray-300 font-poppins">Menú</Link>
          <Link to="/about" className="hover:text-gray-300 font-poppins">Acerca de Nosotros</Link>
          <Link to="/" className="hover:text-gray-300 font-poppins">Paquetes</Link>
          <Link to="/" className="hover:text-gray-300 font-poppins">Contáctenos</Link>
        </div>


        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

       
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#2D1B10] p-6 shadow-[0_5px_10px_rgba(0,0,0,0.6)] z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
         
          <div className="absolute top-4 right-4 z-60">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl"
            >
              <FiX />
            </button>
          </div>

          
          <nav className="flex flex-col gap-4 text-sm uppercase mt-12">
            <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Inicio</Link>
            <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Menú</Link>
            <Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Acerca de Nosotros</Link>
            <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Paquetes</Link>
            <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contáctenos</Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
