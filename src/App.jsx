import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Home } from "./Screens/Home/Home";
import { Contact } from "./Screens/Contact/Contact";
import About from "./Screens/About/About";
import Navbar from "./Components/Navbar";
<<<<<<< HEAD
import { Products } from "./Screens/Products/Products";
=======
import { Agregar_Plato } from "./Screens/AgregarPlato/Agregar_Plato";
>>>>>>> main

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Navbar />
    <main className="min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Products />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}
        />
      </Routes>
=======
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agregar" element={<Agregar_Plato/>} />
          {/* <Route
          path="/menu"
          element={<div>Página de Menú en construcción</div>}
        /> */}

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
>>>>>>> main
      </main>
    </BrowserRouter>
  );
}

export default App;
