import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Home } from "./Screens/Home/Home";
import About from "./Screens/About/About";
import Navbar from "./Components/Navbar";
import { Products } from "./Screens/Products/Products";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/menu"
          element={<Products />}
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
