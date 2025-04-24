import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Home } from "./Screens/Home/Home";
import { Contact } from "./Screens/Contact/Contact";
import About from "./Screens/About/About";
import Navbar from "./Components/Navbar";
import { Agregar_Plato } from "./Screens/AgregarPlato/Agregar_Plato";
import { Products } from "./Screens/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agregar" element={<Agregar_Plato/>} />
          <Route path="/menu"element={<Products/>} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;