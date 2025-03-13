import { Link } from 'react-router-dom';

// Cambia la exportación
export const Navbar = () => {
  return (
    <nav className="bg-espresso-brown text-warm-beige py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-righteous text-2xl">
          Palenque Garabito
        </Link>
        
        <div className="flex gap-6 font-poppins">
          <Link to="/" className="hover:text-deep-moss transition">
            Inicio
          </Link>
          <Link to="/menu" className="hover:text-deep-moss transition">
            Menú
          </Link>
          <Link to="/about" className="hover:text-deep-moss transition">
            Nosotros
          </Link>
          <Link to="/contact" className="hover:text-deep-moss transition">
            Contacto
          </Link>
          <Link to="/login" className="hover:text-deep-moss transition">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;