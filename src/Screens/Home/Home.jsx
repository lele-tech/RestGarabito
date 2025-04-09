<<<<<<< Updated upstream
import { Navbar } from '../../Components/Navbar';
import Footer from '../../Components/Footer.jsx';
import { Home_Title } from './Home_Components/Home_Title';
import { Home_Discover } from './Home_Components/Home_Discover';
=======
import Footer2 from "../../Components/Footer2";
import Navbar from "../../Components/Navbar";
>>>>>>> Stashed changes

export function Home() {
    return (
      <div className="min-h-screen flex flex-col bg-soft-sand">
      <Home_Title />
      <Home_Discover />

      <Footer2 />
      {/* <div className="footer-bottom-home">
        <p>© 2025 Palenque Garabito. Todos los derechos reservados</p>
      </div> */}
    </div>
  );
}
