import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  const getNavbarColor = () => {
    switch (currentPath) {
      case '/packages':
        return 'bg-soft-sand text-cocoa-bark';
      case '/about':
        return 'bg-soft-sand text-cocoa-bark';
      default:
        return 'bg-cocoa-bark text-soft-sand';
    }
  };

  const getHoverColor= () => {
    switch (currentPath) {
      case '/packages':
        return 'hover:text-cocoa-bark/50';
      case '/about':
        return 'hover:text-cocoa-bark/50';
      default:
        return 'hover:text-soft-sand/50';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 font-semibold py-6 px-5 rounded-b-full shadow-md transition-all duration-300 ease-in-out ${getNavbarColor()}`}>
      <div className="container mx-auto relative">

        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-60">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${getNavbarColor()} text-2xl`}
          >
              <FiMenu />
          </button>
        </div>


        <div className="hidden md:flex justify-center gap-10 text-sm uppercase">
          <Link to="/" className={`${getHoverColor()} font-poppins`}>Inicio</Link>
          <Link to="/menu" className={`${getHoverColor()} font-poppins`}>Menú</Link>
          <Link to="/about" className={`${getHoverColor()} font-poppins`}>Acerca de Nosotros</Link>
          <Link to="/packages" className={`${getHoverColor()} font-poppins`}>Paquetes</Link>
          <Link to="/contact" className={`${getHoverColor()} font-poppins`}>Contáctenos</Link>
        </div>


        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

       
        <div
          className={`md:hidden fixed top-0 right-0 h-full z-50 w-3/4 max-w-xs p-6 shadow-[0_5px_10px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-in-out transform ${getNavbarColor()} ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
         
          <div className="absolute top-4 right-4 z-70">
            <button
              onClick={() => setIsOpen(false)}
              className={`${getNavbarColor()} text-2xl`}
            >
              <FiX />
            </button>
          </div>

          
          <nav className="flex flex-col gap-4 text-sm uppercase mt-12">
            <Link to="/" className={`${getHoverColor()} font-poppins`} onClick={() => setIsOpen(false)}>Inicio</Link>
            <Link to="/menu" className={`${getHoverColor()} font-poppins`} onClick={() => setIsOpen(false)}>Menú</Link>
            <Link to="/about" className={`${getHoverColor()} font-poppins`} onClick={() => setIsOpen(false)}>Acerca de Nosotros</Link>
            <Link to="/packages" className={`${getHoverColor()} font-poppins`} onClick={() => setIsOpen(false)}>Paquetes</Link>
            <Link to="/contact" className={`${getHoverColor()} font-poppins`} onClick={() => setIsOpen(false)}>Contáctenos</Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
