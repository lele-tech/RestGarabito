import { useState, useRef } from "react";
import CardPlato from "../../Components/Card_plato";
import { Title_Dark } from "../../Components/Titles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Flecha izquierda
const CustomPrevArrow = ({ className = "", onClick }) => {
  if (typeof onClick !== "function") return null;
  return (
    <div
      className={`!left-0 top-1/2 transform -translate-y-1/2 absolute z-20 bg-dawn-pink bg-opacity-80 border border-cocoa-bark/30 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition hidden sm:flex items-center justify-center`}
      onClick={onClick}
      style={{ width: "40px", height: "40px" }}
    >
      <ChevronLeft className="w-8 h-8 text-cocoa-bark" />
    </div>
  );
};

// Flecha derecha
const CustomNextArrow = ({ className = "", onClick }) => {
  if (typeof onClick !== "function") return null;
  return (
    <div
      className={`!right-0 top-1/2 transform -translate-y-1/2 absolute z-20 bg-dawn-pink bg-opacity-80 border border-cocoa-bark/30 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition hidden sm:flex items-center justify-center`}
      onClick={onClick}
      style={{ width: "40px", height: "40px" }}
    >
      <ChevronRight className="w-8 h-8 text-cocoa-bark" />
    </div>
  );
};
const categorias = ["Desayunos", "Almuerzos", "Ensaladas", "Bebidas"];

const generarPlatos = (nombreCategoria, inicioIndice) =>
  Array.from({ length: 12 }, (_, i) => ({
    nombre: `${nombreCategoria} #${i + 1}`,
    imagen_url: `https://picsum.photos/300?${inicioIndice + i}`,
    tiempo_preparacion: 10 + i,
    precio: 5000 + i * 500,
  }));

const platosPorCategoria = {
  Desayunos: generarPlatos("Desayuno", 1),
  Almuerzos: generarPlatos("Almuerzo", 100),
  Ensaladas: generarPlatos("Ensalada", 200),
  Bebidas: generarPlatos("Bebida", 300),
};

const Listado = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Desayunos");
  const sliderRef = useRef(null); // referencia al slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleCategoriaClick = (categoria) => {
    setCategoriaActiva(categoria);
    
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  return (
    <main className="bg-cocoa-bark flex flex-col min-h-screen">
      <Title_Dark />

      <div className="flex flex-wrap justify-center gap-3 mb-8 px-4 max-w-screen-md mx-auto">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => handleCategoriaClick(categoria)}
            className={`font-[Poppins] px-5 py-2.5 rounded-full text-sm font-semibold transition duration-300 transform ${
              categoria === categoriaActiva
                ? "bg-dawn-pink text-cocoa-bark scale-105 shadow-md"
                : "bg-coral-reef text-white hover:bg-dawn-pink hover:text-cocoa-bark"
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-white font-[Poppins] mb-4 ml-6">
        {categoriaActiva}
      </h2>

      <div className="px-2 pb-12 relative">
        <Slider ref={sliderRef} {...settings}>
          {platosPorCategoria[categoriaActiva].map((plato, index) => (
            <div key={index} className="!flex !justify-center !px-1">
              <CardPlato plato={plato} />
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </main>
  );
};

export default Listado;
