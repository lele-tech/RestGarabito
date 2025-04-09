import React from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp, FaPhone, FaFacebook } from "react-icons/fa";
import "./Footer2.css";

const Footer2 = () => {
  const location = useLocation();

  let footerClass;

  if (location.pathname === "/") {
    footerClass = "footer-home"; // Página de Inicio
  } else if (location.pathname === "/menu") {
    footerClass = "footer-menu"; // Página de Menú
  } else if (location.pathname === "/about") {
    footerClass = "footer-about"; // Página Acerca de nosotros
  } else if (location.pathname === "/contact") {
    footerClass = "footer-contact"; // Página Contáctanos
  } else if (location.pathname === "/productos") {
    footerClass = "footer-productos"; // Página Productos
  } else if (location.pathname === "/paquetes") {
    footerClass = "footer-paquetes"; // Página Paquetes
  } else {
    footerClass = "footer-default";
  }

  return (
    <footer className={`footer ${footerClass}`}>
      <div className="footer-container">
        {/* Sección Izquierda: Información de Contacto */}
        <div className="footer-section">
          <h2 className="brand-name">Palenque Garabito</h2>
          <div className="contact-inline">
            <p>
              <FaPhone className="phone-icon" /> 2639 3825 / 2639 3826
            </p>
            <p>
              <FaWhatsapp className="whatsapp-icon" />{" "}
              <a
                href="https://wa.me/50684850312"
                target="_blank"
                rel="noopener noreferrer"
              >
                6485 0312
              </a>
            </p>
            <p>
              <FaFacebook className="facebook-icon" />{" "}
              <a
                href="https://www.facebook.com/PalenqueGarabito"
                target="_blank"
                rel="noopener noreferrer"
              >
                Palenque Garabito
              </a>
            </p>
          </div>
        </div>

        {/* Sección Central: Enlaces Rápidos */}
        <div className="footer-section-rapidos">
          <h3 className="footer-link-rapidos">Links rápidos</h3>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/menu">Menú</a>
            </li>
            <li>
              <a href="/about">Acerca de nosotros</a>
            </li>
            <li>
              <a href="/contact">Contáctanos</a>
            </li>
          </ul>
        </div>
      </div>
      {/* sección de derechos reservados */}
      <div className={`footer-bottom-reservados ${footerClass}`}>
        <p>© 2025 Palenque Garabito. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer2;
