import FormLogin from "./Auth/FormLogin";
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = ({ theme = "claro" }) => {
  const bgColor = theme === "oscuro" ? "bg-[#362419]" : "bg-[#D9CEBC]";
  const textColor = theme === "oscuro" ? "text-[#D9CEBC]" : "text-[#362419]";
  const textColorBottom = theme === "oscuro" ? "text-[#362419]" : "text-[#F3ECE1]";
  const bgBottom = theme === "oscuro" ? "bg-[#D9CEBC]" : "bg-[#362419]";

  return (
    <footer className={`${bgColor} ${textColor} `}>
      <div className="max-w-full grid sm:grid-cols-1  lg:grid-cols-3 gap-10 p-16 mx-auto">

        <div className="flex flex-col space-y-8  ">
          <h2 className="text-7xl font-islandMoments mb-4">Palenque Garabito</h2>
          <span className="text-lg flex items-center gap-2 font-poppins "><FaPhone className="scale-x-[-1]"/> 2639 3825 / 2639 3826</span>
          <span className="text-lg flex items-center gap-2  font-poppins"><FaWhatsapp /> 6485 0312</span>
          <span className="text-lg flex items-center gap-2 font-poppins"><FaFacebook /> Palenque Garabito</span>
        </div>

 
        <div className=" font-poppins xl:m-auto" >
          <h3 className=" font-bold text-sm mb-8">Links Rápidos</h3>
          <ul className="space-y-2 text-sm ">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li><Link to="/menu" className="hover:underline">Menú</Link></li>
            <li><Link to="/about" className="hover:underline">Acerca de nosotros</Link></li>
            <li><Link to="/contacto" className="hover:underline">Contáctanos</Link></li>
          </ul>
        </div>

        <div className="">
          <FormLogin />
        </div>
      </div>

      <div className={`${bgBottom} ${textColorBottom} text-center font-poppins font-medium p-4 mt-6`}>
        <p>Todos los derechos reservados por: Palenque Garabito</p>
      </div>
    </footer>
  );
};

export default Footer;

