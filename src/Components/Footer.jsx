import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-[#EDE0D4] text-[#4D3B2A] p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl font-serif mb-4">Palenque Garabito</h2>
            <p className="text-sm">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don’t look even slightly believable.
            </p>
            <div className="flex space-x-4 mt-4">
              <span className="text-2xl">📞</span>
              <span className="text-2xl">💬</span>
              <span className="text-2xl">📘</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Links Rápidos</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:underline">Inicio</Link></li>
              <li><Link to="/menu" className="hover:underline">Menú</Link></li>
              <li><Link to="/about" className="hover:underline">Acerca de nosotros</Link></li>
              <li><Link to="/contacto" className="hover:underline">Contáctanos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Links Rápidos</h3>
            <ul className="space-y-1">
              <li>FAQ’S</li>
              <li>Política de Privacidad</li>
              <li>Términos y Condiciones</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contáctenos</h3>
            <ul className="space-y-1">
              <li>Ubicación</li>
              <li>Número de teléfono</li>
              <li>Correo electrónico</li>
              <li>Whatsapp</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#4D3B2A] text-[#EDE0D4] text-center p-4 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p>Todos los derechos reservados por: Palenque Garabito</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <span>📞 2639 3825 / 2639 3826</span>
            <span>💬 6485 0312</span>
            <span>📘 Palenque Garabito</span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;