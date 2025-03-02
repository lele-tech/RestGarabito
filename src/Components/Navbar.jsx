import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#D5C4A1] p-4 rounded-b-xl flex justify-center">
      <ul className="flex space-x-6 text-[#4D3B2A] font-semibold">
        <li><Link to="/" className="hover:underline">INICIO</Link></li>
        <li><Link to="/menu" className="hover:underline">MENÚ</Link></li>
        <li><Link to="/about" className="hover:underline">ACERCA DE NOSOTROS</Link></li>
        <li><Link to="/productos" className="hover:underline">PRODUCTOS</Link></li>
        <li><Link to="/servicios" className="hover:underline">SERVICIOS</Link></li>
        <li><Link to="/contacto" className="hover:underline">CONTÁCTENOS</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;