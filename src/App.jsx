import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Home } from "./Screens/Home/Home";
import { Contact } from "./Screens/Contact/Contact";
import About from "./Screens/About/About";
import Navbar from "./Components/Navbar";
import ListaPlatos from "./Components/ListaPlatos";
import { Agregar_Plato } from "./Screens/AgregarPlato/Agregar_Plato";
import Listado from "./Screens/Listado/Listado";

import EditarPlato  from "./Screens/EditarPlato/EditarPlato"
import EditarScreen from "./Screens/EditarPlato/EditarScreen"



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
          <Route path="/editar" element={< EditarScreen />} />
          
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
