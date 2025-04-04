import { Navbar } from '../Nav_Foot/Navbar';
import Footer from '../Nav_Foot/Footer'
import { MainButton, SecondaryButton } from '../ui/Buttons'
import { Home_Title } from './Home_Components/Home_Title';
import { Home_Discover } from './Home_Components/Home_Discover';

export function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-soft-sand">
      <Navbar />

      <Home_Title />
      <Home_Discover />

      <Footer />
    </div>
  )
}