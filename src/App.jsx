import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Home } from "./Screens/Home/Home";
import { Contact } from "./Screens/Contact/Contact";
import About from "./Screens/About/About";
import Navbar from "./Components/Navbar";
import FormularioPlato from "./Components/FormularioPlato/FormularioPlato";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* FORMULARIO PLATO, BOTON EDITAR */}
          {/* <Route path="/menu" element={<FormularioPlato modo="editar" />} /> */}

          {/* FORMULARIO PLATO, BOTON AGREGAR */}
          <Route path="/menu" element={<FormularioPlato modo="crear" />} />
          {/* <Route
          path="/menu"
          element={<div>Página de Menú en construcción</div>}
        /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
