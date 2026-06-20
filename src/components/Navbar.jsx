import { useEffect, useState } from 'react';
import logo from '../assets/light.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-10">
      <div className={`max-w-5xl mx-auto flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-500
        ${scrolled
          ? 'bg-white/95 backdrop-blur-xl border border-border shadow-[0_8px_32px_rgba(36,53,42,0.10)]'
          : 'bg-white/70 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(36,53,42,0.07)]'
        }`}
      >
        {/* Logo */}
        <img src={logo} alt="CrescenFlow" className="h-7 w-auto" />

        {/* Nav links — desktop only */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-xs font-medium text-secondary/60 hover:text-primary transition-colors duration-150 tracking-wide">How It Works</a>
          <a href="#pricing" className="text-xs font-medium text-secondary/60 hover:text-primary transition-colors duration-150 tracking-wide">Pricing</a>
          <a href="#faq" className="text-xs font-medium text-secondary/60 hover:text-primary transition-colors duration-150 tracking-wide">FAQ</a>
        </div>

        {/* CTA */}
        <a
          href="#booking"
          className="bg-primary text-white text-xs px-4 py-2.5 md:px-5 rounded-xl font-semibold hover:bg-secondary transition-colors duration-200 whitespace-nowrap shadow-sm"
        >
          <span className="hidden md:inline">Send First 50 Messages Free →</span>
          <span className="md:hidden">Get Started →</span>
        </a>
      </div>
    </nav>
  );
}
