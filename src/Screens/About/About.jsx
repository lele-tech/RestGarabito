// src/Components/About.jsx
import Footer from "../../Components/Footer";
import "./About.css";

export function About() {
  return (
    <div className="bg-[#4D3B2A] text-[#EDE0D4] min-h-screen">
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-6">Acerca de Nosotros</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative w-48 h-48 bg-[#EDE0D4] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-[#4D3B2A] font-bold">PHOTO</span>
          </div>
          <div className="text-left ml-8">
            <h2 className="text-xl font-semibold">Nuestra Misión</h2>
            <p className="mb-4">
              El patrona, es una familia comprometida con el servicio de
              excelencia a clientes preservando nuestras raíces, con recetas
              únicas y de alta calidad.
            </p>
            <h2 className="text-xl font-semibold">Nuestra Visión</h2>
            <p className="mb-4">
              Nos definimos como líder en nuestro segmento de Restaurante en la
              zona, basándonos en dos pilares: nuestra cultura organizacional y
              el uso eficiente de nuestros recursos.
            </p>
            <h2 className="text-xl font-semibold">Nuestros Valores</h2>
            <p className="mb-4">
              Los valores son principios éticos que sustentan la cultura de
              nuestro negocio, como lealtad, honestidad, respeto y vocación de
              servicio profesional.
            </p>
            <button className="bg-[#D5C4A1] text-[#4D3B2A] px-4 py-2 rounded-md hover:bg-[#b8a58f]">
              CONTÁCTANOS
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
