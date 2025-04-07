// src/Components/About.jsx
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./About.css";

export function About() {
  return (
    <>
      <Navbar />

      <div className="bg-[#4D3B2A] text-[#EDE0D4] min-h-screen flex flex-col md:flex-row px-4 md:px-12 p-20">
        {/* Lado Izquierdo */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-8">
          {/* Contenedor compacto texto + imagen */}
          <div className="flex flex-col items-start justify-center mx-auto">
            {/* Bloque de texto superior */}
            <div className="mb-8">
              <p className="text-lg tracking-[0.2em] lowercase mb-2">restaurante</p>
              <h2 className="text-5xl font-bold leading-none">Palenque</h2>
              <h2 className="text-5xl font-bold leading-none">Garabito</h2>
            </div>

            {/* Imagen alineada debajo */}
            <img
              src="/imgs/Logo.png"
              alt="Decoración"
              className="w-72 h-72 object-contain mx-auto"
            />
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-8 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-widest">
            Acerca de Nosotros
          </h1>

          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-1">Nuestra Misión</h2>
            <p className="text-sm md:text-base leading-relaxed">
              El patrona, es una familia comprometida con el servicio de excelencia al cliente
              preservando nuestras raíces, con recetas únicas y de alta calidad. En continuo
              colaboración en el desarrollo de la comunidad.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-1">Nuestra Visión</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Nos definimos como líder en nuestro segmento de Restaurante en la zona, basándonos
              en dos pilares: nuestra cultura organizacional y el uso eficiente de nuestros
              recursos. Seremos la opción preferida por la calidad, diversidad, comodidad,
              versatilidad y servicio que satisfaga las necesidades y expectativas de nuestros
              clientes.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-1">Nuestros Valores</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Los valores son principios éticos en los que se asienta la cultura de nuestro
              negocio, y nos permiten crear nuestros pautas de comportamiento. Integridad, ética,
              compromiso, lealtad, honestidad, respeto y vocación de servicio profesional y
              personal en nuestra labor. Para con los clientes internos y externos.
            </p>
          </div>

          <button className="self-start bg-[#D5C4A1] text-[#4D3B2A] px-4 py-2 rounded-sm hover:bg-[#b8a58f] text-sm font-semibold">
            CONTÁCTANOS
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
