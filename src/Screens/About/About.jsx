import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Button } from "../../Components/ui/Buttons";
import "./About.css";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="bg-[#3B2819] text-coral-reef min-h-screen flex flex-col md:flex-row px-4 md:px-12 py-16 pb-44">
        {/* Lado Izquierdo */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-6 px-6">
          {/* Texto superior alineado a la izquierda con nuevo estilo */}
          <div className="mb-10">
            <p className="text-3xl tracking-[0.3em] lowercase font-righteous text-soft-sand mb-3">
              restaurante
            </p>
            <h2 className="text-6xl font-righteous text-soft-sand leading-[1.01]">
              Palenque
            </h2>
            <h2 className="text-6xl font-righteous text-soft-sand leading-[1.01]">
              Garabito
            </h2>
          </div>

          {/* Logo grande centrado */}
          <div className="w-full flex justify-center mt-4">
            <img
              src="/imgs/FondoPalenqueBlanco.png"
              alt="Logo Restaurante"
              className="w-[400px] md:w-[460px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Lado Derecho bajado con padding inferior del contenedor para evitar colisión con el footer */}
        <div className="w-full md:w-1/2 flex flex-col justify-start relative top-[140px] max-w-2xl mx-auto">
          {/* Título principal con más tracking */}
          <h1 className="text-4xl font-righteous text-center mb-10 tracking-[0.25em] text-soft-sand">
            Acerca de Nosotros
          </h1>

          {/* Misión */}
          <div className="mb-8">
            <h2 className="text-2xl font-righteous mb-1 text-soft-sand">
              Nuestra Misión
            </h2>
            <p className="text-base leading-relaxed font-poppins text-coral-reef">
              El patrona, es una familia comprometida con el servicio de
              excelencia al cliente preservando nuestras raíces, con recetas
              únicas y de alta calidad. En continuo colaboración en el
              desarrollo de la comunidad.
            </p>
          </div>

          {/* Visión */}
          <div className="mb-8">
            <h2 className="text-2xl font-righteous mb-1 text-soft-sand">
              Nuestra Visión
            </h2>
            <p className="text-base leading-relaxed font-poppins text-coral-reef">
              Nos definimos como líder en nuestro segmento de Restaurante en la
              zona, basándonos en dos pilares: nuestra cultura organizacional y
              el uso eficiente de nuestros recursos. Seremos la opción preferida
              por la calidad, diversidad, comodidad, versatilidad y servicio que
              satisfaga las necesidades y expectativas de nuestros clientes.
            </p>
          </div>

          {/* Valores */}
          <div className="mb-8">
            <h2 className="text-2xl font-righteous mb-1 text-soft-sand">
              Nuestros Valores
            </h2>
            <p className="text-base leading-relaxed font-poppins text-coral-reef">
              Los valores son principios éticos en los que se asienta la cultura
              de nuestro negocio, y nos permiten crear nuestros pautas de
              comportamiento. Integridad, ética, compromiso, lealtad,
              honestidad, respeto y vocación de servicio profesional y personal
              en nuestra labor. Para con los clientes internos y externos.
            </p>
          </div>

          {/* Botón */}
          <Button
          text="CONTACTANOS"
          extraStyles="self-start px-6 font-righteous tracking-wider text-[#3c2e22] bg-gradient-to-b from-[#e2d4c2] to-[#c7b9a6] shadow-md hover:brightness-110 transition duration-200"
          id="about"
          isMain={true}
          onClick={() => navigate("/contact")}
        />

        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
