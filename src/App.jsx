import { Routes, Route } from 'react-router-dom';
import './index.css';
import CursorGlow from './components/CursorGlow';
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
import CaseStudy from './pages/CaseStudy';

function LandingPage() {
  return (
    <>
      <CursorGlow />
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/case-study" element={<CaseStudy />} />
    </Routes>
  );
}

export default App;
