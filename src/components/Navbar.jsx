import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#herobanner' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full flex justify-center ${scrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-6'}`}>
      <div className="w-[92%] md:w-[95%] max-w-[1920px] transition-all duration-300">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 md:p-4 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
          <div className="flex items-center">
            <img src={Logo} alt="Senios Logo" className="h-8 md:h-12 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer" />
          </div>

          <div className="hidden md:flex items-center gap-10 font-outfit">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-all uppercase tracking-[0.3em] text-[10px] font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-all duration-300 relative z-60"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black/98 backdrop-blur-2xl z-50 md:hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-12 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white hover:text-gray-400 transition-colors uppercase tracking-[0.25em] font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
