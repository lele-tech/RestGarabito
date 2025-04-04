import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px]">
          <div className="absolute inset-0">
            <img
              src="/imgs/hero-restaurant.jpg"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-6xl font-righteous mb-4">Palenque Garabito</h1>
            <p className="text-2xl font-poppins">
              Sabores auténticos de Costa Rica
            </p>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16 bg-soft-sand">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-righteous text-center text-espresso-brown mb-12">
              Nuestros Platillos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Platillo 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/imgs/dish1.jpg"
                  alt="Platillo 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-righteous text-espresso-brown">
                    Casado Típico
                  </h3>
                  <p className="text-gray-600 mt-2 font-poppins">
                    El auténtico sabor de Costa Rica en un plato tradicional.
                  </p>
                </div>
              </div>

              {/* Platillo 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/imgs/dish2.jpg"
                  alt="Platillo 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-righteous text-espresso-brown">
                    Ceviche Fresco
                  </h3>
                  <p className="text-gray-600 mt-2 font-poppins">
                    Pescado fresco marinado con limón y especias.
                  </p>
                </div>
              </div>

              {/* Platillo 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/imgs/dish3.jpg"
                  alt="Platillo 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-righteous text-espresso-brown">
                    Chifrijo
                  </h3>
                  <p className="text-gray-600 mt-2 font-poppins">
                    Una deliciosa combinación de chicharrón y frijoles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-espresso-brown text-warm-beige">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-righteous mb-6">¡Visítanos Hoy!</h2>
            <p className="text-xl font-poppins mb-8">
              Disfruta de la mejor comida tradicional costarricense
            </p>
            <button className="bg-deep-moss text-white px-8 py-3 rounded-full font-poppins hover:bg-earth-olive transition">
              Hacer Reservación
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
