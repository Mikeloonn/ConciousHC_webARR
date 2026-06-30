import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logohc.jpg';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'SOBRE NOSOTROS', path: '/about' },
    { name: 'SERVICIOS', path: '/services' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACTO', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9990] transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-[#0a0a08]/85 backdrop-blur-md py-2.5 border-[#e8ebe3]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#0a0a08]/40 backdrop-blur-sm py-4 border-[#e8ebe3]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative">
        {/* Logo minimalista (Sin data-hoverable para evitar magnetismo) */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <img
            src={logo}
            alt="Logo Conscious Healing Center"
            className="h-9 w-9 rounded-full object-cover border border-[#e8ebe3]/20 transition-transform duration-500 group-hover:scale-110 shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-serif text-[13px] md:text-sm tracking-widest text-[#e8ebe3] leading-none">
              Centro de Acupuntura
            </span>
            <span className="text-[7px] md:text-[8px] font-sans font-medium uppercase tracking-[0.25em] text-[#b3bda3] mt-1">
              y Terapias Holísticas
            </span>
          </div>
        </Link>

        {/* Desktop Nav (Sin data-hoverable para evitar magnetismo) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <ul className="flex gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-[#b3bda3]/30 text-[#e8ebe3] text-[10px] tracking-[0.2em] uppercase px-5 py-2 rounded-full hover:bg-[#b3bda3]/10 hover:border-[#b3bda3]/60 transition-all duration-300 focus:outline-none"
          >
            Agendar
          </Link>
        </nav>

        {/* Hamburger (Menú móvil) */}
        <button
          className={`hamburger md:hidden flex flex-col gap-[5px] cursor-pointer p-2 z-[9996] focus:outline-none ${
            isMenuOpen ? 'active' : ''
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          <span className="w-6 h-px bg-[#e8ebe3] transition-all duration-300 origin-center"></span>
          <span className="w-6 h-px bg-[#e8ebe3] transition-all duration-300 origin-center"></span>
          <span className="w-6 h-px bg-[#e8ebe3] transition-all duration-300 origin-center"></span>
        </button>

        {/* Mobile Menu Overlay */}
        <nav
          className={`fixed inset-0 z-[9995] bg-[#0a0a08]/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 origin-top ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-3xl font-light text-[#e8ebe3]/50 hover:text-[#e8ebe3] transition-all duration-300 block py-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-8">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center border border-[#b3bda3]/30 text-[#e8ebe3] text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:bg-[#b3bda3]/10 transition-all duration-300"
              >
                Agendar Cita
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;