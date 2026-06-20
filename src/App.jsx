import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Mechanism from './components/Mechanism';
import HowItWorks from './components/HowItWorks';
import Offer from './components/Offer';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Mechanism />
      <HowItWorks />
      <Offer />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
