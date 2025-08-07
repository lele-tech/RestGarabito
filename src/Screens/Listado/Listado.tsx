import { useState, useRef, useEffect } from "react";
import CardPlato from "../../Components/Card_plato";
import { Title_Dark } from "../../Components/Titles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/Firebase-config";
import { Plato } from "../../types/firebaseTypes";
import { Categoria } from "../../types/firebaseTypes";

// Flecha izquierda
const CustomPrevArrow = ({ onClick }: { className?: string; onClick?: () => void }) => {
  if (typeof onClick !== "function") return null;
  return (
    <div
      className="!left-0 top-1/2 transform -translate-y-1/2 absolute z-20 bg-dawn-pink bg-opacity-80 border border-cocoa-bark/30 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition hidden sm:flex items-center justify-center"
      onClick={onClick}
      style={{ width: "40px", height: "40px" }}
    >
      <ChevronLeft className="w-8 h-8 text-cocoa-bark" />
    </div>
  );
};

// Flecha derecha
const CustomNextArrow = ({ onClick }: { className?: string; onClick?: () => void }) => {
  if (typeof onClick !== "function") return null;
  return (
    <div
      className="!right-0 top-1/2 transform -translate-y-1/2 absolute z-20 bg-dawn-pink bg-opacity-80 border border-cocoa-bark/30 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition hidden sm:flex items-center justify-center"
      onClick={onClick}
      style={{ width: "40px", height: "40px" }}
    >
      <ChevronRight className="w-8 h-8 text-cocoa-bark" />
    </div>
  );
};

const categorias: Categoria[] = ["Platos", "Ensaladas", "Pastas", "Bebidas"];

const Listado = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Platos");
  const [platos, setPlatos] = useState<Plato[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sliderRef = useRef<Slider>(null);

  const obtenerPlatos = async () => {
    try {
      const snapshot = await getDocs(collection(db, "plato"));
  
      const data: Plato[] = snapshot.docs.map((doc) => {
        const plato = doc.data() as Plato; // Los datos del plato
        return { ...plato, id: doc.id }; // Agregar el id del documento
      });
  
      if (data.length === 0) {
        setError("⚠️ No se encontraron platos en la base de datos.");
      } else {
        setPlatos(data);
      }
    } catch (e) {
      setError("❌ No se pudo conectar con la base de datos.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerPlatos();
  }, []);

  
  const slidesToShow = platos.length < 4 ? platos.length : 4;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, 
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
    adaptiveHeight: false,
  };

  const handleCategoriaClick = (categoria: string) => {
    setCategoriaActiva(categoria);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  const platosFiltrados = platos.filter(
    (plato) => plato.categoria === categoriaActiva
  );

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
        {cargando ? (
          <p className="text-white text-center">⏳ Cargando platos...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : platosFiltrados.length > 0 ? (
          <Slider ref={sliderRef} {...settings}>
            {platosFiltrados.map((plato, index) => (
              <div key={index} className="!flex !justify-center !px-1">
                <CardPlato plato={plato} />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-white text-center font-bold">
            No hay platos en esta categoría.
          </p>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default Listado;
