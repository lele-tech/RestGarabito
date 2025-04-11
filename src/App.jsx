import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Home } from "./Screens/Home/Home";
import About from "./Screens/About/About";
import Navbar from "./Components/Navbar";
import { seedPlatos } from "./firebase/scripts/seedPlatos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/menu"
            element={
              <div>
                <h1 className="text-xl font-bold mb-4">Menú (modo desarrollador)</h1>
                <button
                  onClick={seedPlatos}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Agregar platos de prueba 🍽️
                </button>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<div>Página de Contacto en construcción</div>}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;