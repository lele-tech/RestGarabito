import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Home } from "./Screens/Home/Home";
import { Contact } from "./Screens/Contact/Contact";
import { Packages } from "./Screens/Packages/Packages";
import About from "./Screens/About/About";
import Navbar from "./Components/Navbar";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ListaPlatos from "./Components/ListaPlatos";
import { Agregar_Plato } from "./Screens/AgregarPlato/Agregar_Plato";

import Listado from "./Screens/Listado/Listado";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<ListaPlatos />} />
          <Route path="/packages" element={<Listado />} />
          {/* <Route
            path="/menu"
            element={<div>Página de Menú en construcción</div>}
packages-page
        />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />}
        
        />
        
      </Routes>

          /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
