import { Home_Title } from '../Home/Home_Components/Home_Title';
import { Home_Discover } from '../Home/Home_Components/Home_Discover';
import Footer from '../../Components/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products_Components/Products.css';

export function Products() {
  const [categoriaActiva, setCategoriaActiva] = useState('Platos');

  // Datos de ejemplo para los productos
  const productos = {
    Platos: [
      { id: 1, nombre: 'Casado con Pollo', precio: 5000, tiempo: 15, imagen: '/imgs/Logo.png' },
      { id: 2, nombre: 'Casado con Carne', precio: 5500, tiempo: 20, imagen: '/imgs/Logo.png' },
      { id: 3, nombre: 'Arroz con Pollo', precio: 4500, tiempo: 15, imagen: '/imgs/Logo.png' },
      { id: 4, nombre: 'Chifrijo', precio: 4000, tiempo: 10, imagen: '/imgs/Logo.png' },
      { id: 5, nombre: 'Gallo Pinto', precio: 3500, tiempo: 10, imagen: '/imgs/Logo.png' },
      { id: 6, nombre: 'Olla de Carne', precio: 6000, tiempo: 25, imagen: '/imgs/Logo.png' },
      { id: 7, nombre: 'Sopa Negra', precio: 4000, tiempo: 15, imagen: '/imgs/Logo.png' },
      { id: 8, nombre: 'Picadillo', precio: 3800, tiempo: 15, imagen: '/imgs/Logo.png' },
    ],
    Ensaladas: [
      { id: 1, nombre: 'Ensalada César', precio: 4000, tiempo: 10, imagen: '/imgs/Logo.png' },
      { id: 2, nombre: 'Ensalada Mixta', precio: 3500, tiempo: 8, imagen: '/imgs/Logo.png' },
      { id: 3, nombre: 'Ensalada de Pollo', precio: 4500, tiempo: 12, imagen: '/imgs/Logo.png' },
      { id: 4, nombre: 'Ensalada de Atún', precio: 4200, tiempo: 10, imagen: '/imgs/Logo.png' },
      { id: 5, nombre: 'Ensalada Tropical', precio: 4000, tiempo: 10, imagen: '/imgs/Logo.png' },
      { id: 6, nombre: 'Ensalada Griega', precio: 4300, tiempo: 10, imagen: '/imgs/Logo.png' },
      { id: 7, nombre: 'Ensalada Caprese', precio: 3800, tiempo: 8, imagen: '/imgs/Logo.png' },
      { id: 8, nombre: 'Ensalada Waldorf', precio: 4100, tiempo: 10, imagen: '/imgs/Logo.png' },
    ],
    Pastas: [
      { id: 1, nombre: 'Espagueti Bolognesa', precio: 5500, tiempo: 20, imagen: '/imgs/Logo.png' },
      { id: 2, nombre: 'Fettuccine Alfredo', precio: 5800, tiempo: 18, imagen: '/imgs/Logo.png' },
      { id: 3, nombre: 'Lasaña de Carne', precio: 6000, tiempo: 25, imagen: '/imgs/Logo.png' },
      { id: 4, nombre: 'Ravioles de Queso', precio: 5500, tiempo: 20, imagen: '/imgs/Logo.png' },
      { id: 5, nombre: 'Penne a la Vodka', precio: 5800, tiempo: 18, imagen: '/imgs/Logo.png' },
      { id: 6, nombre: 'Canelones de Espinaca', precio: 5500, tiempo: 22, imagen: '/imgs/Logo.png' },
      { id: 7, nombre: 'Espagueti al Pesto', precio: 5300, tiempo: 18, imagen: '/imgs/Logo.png' },
      { id: 8, nombre: 'Linguine con Mariscos', precio: 6500, tiempo: 25, imagen: '/imgs/Logo.png' },
    ],
    Bebidas: [
      { id: 1, nombre: 'Café Negro', precio: 1500, tiempo: 5, imagen: '/imgs/Logo.png' },
      { id: 2, nombre: 'Jugo Natural', precio: 2000, tiempo: 8, imagen: '/imgs/Logo.png' },
      { id: 3, nombre: 'Batido de Frutas', precio: 2500, tiempo: 10, imagen: '/imgs/Logo.png' },
      { id: 4, nombre: 'Agua Mineral', precio: 1000, tiempo: 2, imagen: '/imgs/Logo.png' },
      { id: 5, nombre: 'Té Helado', precio: 1800, tiempo: 5, imagen: '/imgs/Logo.png' },
      { id: 6, nombre: 'Limonada', precio: 1800, tiempo: 8, imagen: '/imgs/Logo.png' },
      { id: 7, nombre: 'Refresco', precio: 1500, tiempo: 2, imagen: '/imgs/Logo.png' },
      { id: 8, nombre: 'Cerveza Nacional', precio: 2500, tiempo: 3, imagen: '/imgs/Logo.png' },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-soft-sand">
      {/* Título y Logo */}
      <div className="home-title-wrapper mb-16">
        <Home_Title />
      </div>

      {/* Barra de selección de categorías */}
      <div className="w-full max-w-screen-xl mx-auto px-4 mt-16 pt-8">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-righteous text-cocoa-bark mr-8">Menú</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {Object.keys(productos).map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`px-4 py-2 rounded-md font-poppins transition-colors ${categoriaActiva === categoria
                  ? 'bg-cocoa-bark text-soft-sand'
                  : 'bg-transparent text-cocoa-bark hover:bg-cocoa-bark/10'
                  }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16">
          {productos[categoriaActiva].map((producto) => (
            <div key={producto.id} className="bg-coral-reef/30 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-warm-beige/50 flex items-center justify-center">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="h-32 object-contain"
                />
              </div>
              <div className="p-5 md:p-6 bg-soft-sand">
                <h3 className="text-center uppercase font-bold text-cocoa-bark">{producto.nombre}</h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-sm text-cocoa-bark/70">
                    <span className="inline-block mr-1">⏱</span>
                    <span>{producto.tiempo} Mins</span>
                  </div>
                  <div className="font-bold text-cocoa-bark">
                    ₡{producto.precio.toLocaleString()}
                  </div>
                </div>
                <div className="mt-5 text-right">
                  <Link to="#" className="text-sm text-cocoa-bark hover:underline">MÁS INFO</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;