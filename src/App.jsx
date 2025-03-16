import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Components/Auth/Login';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About'; // Changed from 'about' to 'About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<div>Página de Menú en construcción</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div>Página de Contacto en construcción</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
