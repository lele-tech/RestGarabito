import { useState } from "react";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Home_Title } from "../Home/Home_Components/Home_Title";
import { CardPlato } from "../../Components/Card_plato";
import "./css/products.css";

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Platos");

  // Datos locales de ejemplo
  const menuData = {
    Platos: [
      {
        id: 1,
        nombre: "Casado con Pollo",
        precio: 4500,
        tiempo_preparacion: 15,
        imagen_url: "/imgs/platos/casado-pollo.jpg"
      },
      // ... más platos
    ],
    Ensaladas: [
      {
        id: 1,
        nombre: "Ensalada César",
        precio: 3500,
        tiempo_preparacion: 10,
        imagen_url: "/imgs/platos/ensalada-cesar.jpg"
      },
      // ... más ensaladas
    ],
    Pastas: [
      {
        id: 1,
        nombre: "Espagueti Carbonara",
        precio: 5000,
        tiempo_preparacion: 20,
        imagen_url: "/imgs/platos/espagueti-carbonara.jpg"
      },
      // ... más pastas
    ],
    Bebidas: [
      {
        id: 1,
        nombre: "Limonada Natural",
        precio: 1500,
        tiempo_preparacion: 5,
        imagen_url: "/imgs/platos/limonada.jpg"
      },
      // ... más bebidas
    ]
  };

  return (
    <div className="min-h-screen bg-soft-sand">
      <Navbar />
      <div className="products-title">
        <Home_Title />
      </div>
      
      {/* Menú de categorías */}
      <div className="menu-categories w-full max-w-screen-xl mx-auto mt-12 px-4">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-3xl font-righteous text-cocoa-bark drop-shadow-md">Menú</h2>
          <div className="flex gap-6">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-righteous text-xl ${selectedCategory === category ? 'text-cocoa-bark active' : 'text-gray-400'} hover:text-cocoa-bark transition-colors drop-shadow-md`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de platos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {menuData[selectedCategory]?.map((plato) => (
            <CardPlato key={plato.id} plato={plato} />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}