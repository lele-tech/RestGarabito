import { Navbar } from '../../Components/Navbar';
import Footer from '../../Components/Footer.jsx';
import { Home_Title } from './Home_Components/Home_Title';
import { Home_Discover } from './Home_Components/Home_Discover';

export function Home() {
    return (
      <div className="min-h-screen flex flex-col bg-soft-sand">
      <Home_Title />
      <Home_Discover />

      <Footer />
    </div>
  );
}
