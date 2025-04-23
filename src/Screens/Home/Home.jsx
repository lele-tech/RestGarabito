import Footer from '../../Components/Footer.jsx';
import { Home_Title } from './Home_Components/Home_Title';
import { Home_Discover } from './Home_Components/Home_Discover';
import { Title_Dark, Title_Light } from '../../Components/Titles.jsx';

export function Home() {
    return (
      <div className="min-h-screen flex flex-col bg-soft-sand">
      <Home_Title />

      <Home_Discover />

      <Footer theme="oscuro" /> 
      
    </div>
  );
}
