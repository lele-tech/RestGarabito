import { useState } from "react";
import CardPlato from "../../Components/Card_plato";
import { Title_Dark, Title_Light } from "../../Components/Titles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categorias = ["Desayunos", "Almuerzos", "Ensaladas", "Bebidas"];

const platosPorCategoria = {
    Desayunos: [
        {
            nombre: "Desayuno #1",
            imagen_url: "https://picsum.photos/300?1",
            tiempo_preparacion: 15,
            precio: 7000,
        },
        {
            nombre: "Desayuno #2",
            imagen_url: "https://picsum.photos/300?2",
            tiempo_preparacion: 20,
            precio: 8000,
        },
        {
            nombre: "Desayuno #3",
            imagen_url: "https://picsum.photos/300?3",
            tiempo_preparacion: 18,
            precio: 8500,
        },
        {
            nombre: "Desayuno #4",
            imagen_url: "https://picsum.photos/300?4",
            tiempo_preparacion: 25,
            precio: 9200,
        },
    ],
    Almuerzos: [
        {
            nombre: "Almuerzo #1",
            imagen_url: "https://picsum.photos/300?5",
            tiempo_preparacion: 30,
            precio: 7500,
        },
        {
            nombre: "Almuerzo #2",
            imagen_url: "https://picsum.photos/300?6",
            tiempo_preparacion: 35,
            precio: 7900,
        },
        {
            nombre: "Almuerzo #3",
            imagen_url: "https://picsum.photos/300?7",
            tiempo_preparacion: 40,
            precio: 8800,
        },
        {
            nombre: "Almuerzo #4",
            imagen_url: "https://picsum.photos/300?8",
            tiempo_preparacion: 45,
            precio: 9400,
        },
    ],
    Ensaladas: [
        {
            nombre: "Ensalada #1",
            imagen_url: "https://picsum.photos/300?9",
            tiempo_preparacion: 10,
            precio: 5600,
        },
        {
            nombre: "Ensalada #2",
            imagen_url: "https://picsum.photos/300?10",
            tiempo_preparacion: 12,
            precio: 5900,
        },
        {
            nombre: "Ensalada #3",
            imagen_url: "https://picsum.photos/300?11",
            tiempo_preparacion: 8,
            precio: 6200,
        },
        {
            nombre: "Ensalada #4",
            imagen_url: "https://picsum.photos/300?12",
            tiempo_preparacion: 15,
            precio: 6500,
        },
    ],
    Bebidas: [
        {
            nombre: "Bebida #1",
            imagen_url: "https://picsum.photos/300?13",
            tiempo_preparacion: 5,
            precio: 2000,
        },
        {
            nombre: "Bebida #2",
            imagen_url: "https://picsum.photos/300?14",
            tiempo_preparacion: 4,
            precio: 2200,
        },
        {
            nombre: "Bebida #3",
            imagen_url: "https://picsum.photos/300?15",
            tiempo_preparacion: 3,
            precio: 1800,
        },
        {
            nombre: "Bebida #4",
            imagen_url: "https://picsum.photos/300?16",
            tiempo_preparacion: 6,
            precio: 2500,
        },
    ],
};

const Listado = () => {
    const [categoriaActiva, setCategoriaActiva] = useState("Desayunos");
  
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024, // pantallas medianas
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640, // móviles
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <main className="bg-cocoa-bark flex flex-col min-h-screen">
        <Title_Dark />
  
        {/* Selector de Categorías */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`font-[Poppins] px-4 py-2 rounded-full text-sm font-semibold transition duration-300 transform ${
                categoria === categoriaActiva
                  ? "bg-[#f3ece1] text-[#362419] scale-105 shadow-md"
                  : "bg-[#C5B9A6] text-white hover:bg-[#f3ece1] hover:text-[#362419]"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
  
        <h2 className="text-xl font-semibold text-white font-[Poppins] mb-4 ml-6">
          {categoriaActiva}
        </h2>
  
        <div className="px-2 pb-12">
          <Slider {...settings}>
            {platosPorCategoria[categoriaActiva].map((plato, index) => (
              <div key={index} className="px-2">
                <CardPlato plato={plato} />
              </div>
            ))}
          </Slider>
        </div>
      </main>
    );
  };
  
  export default Listado;