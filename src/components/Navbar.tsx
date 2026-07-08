import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logohc.jpg';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Controla el fondo de la cabecera al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Bloquea el scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'SOBRE NOSOTROS', path: '/about' },
    { name: 'SERVICIOS', path: '/services' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACTO', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9990] transition-all duration-500 border-b ${isScrolled || isMenuOpen
            ? 'bg-[#0a0a08]/85 backdrop-blur-md py-2.5 border-[#e8ebe3]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-[#0a0a08]/40 backdrop-blur-sm py-4 border-[#e8ebe3]/5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative">
          {/* Logo minimalista */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <img
              src={logo}
              alt="Logo Conscious Healing Center"
              className="h-9 w-9 rounded-full object-cover border border-[#e8ebe3]/20 transition-transform duration-500 group-hover:scale-110 shadow-sm"
            />
            <div className="flex flex-col relative z-10">
              <span className="font-serif font-bold text-[13px] md:text-sm tracking-widest text-[#e8ebe3] leading-none">
                Centro de Acupuntura
              </span>
              <span className="text-[7px] md:text-[8px] font-sans font-medium uppercase tracking-[0.25em] text-[#b3bda3] mt-1">
                y Terapias Holísticas
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 relative z-10">
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

          {/* Hamburger (Menú móvil animado a 'X') */}
          <button
            className="md:hidden flex flex-col gap-[5.5px] cursor-pointer p-2 z-[9996] focus:outline-none relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            <span className={`w-6 h-[1.5px] bg-[#e8ebe3] transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-[#e8ebe3] transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-2' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-[#e8ebe3] transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Movido AFUERA del header para que ocupe toda la pantalla */}
      <nav
        className={`fixed inset-0 z-[9980] bg-[#0a0a08]/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <ul className="flex flex-col items-center gap-8 mt-12 w-full px-6">
          {navLinks.map((link, index) => (
            <li key={link.name} className="overflow-hidden w-full text-center">
              <Link
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-serif text-3xl md:text-4xl font-light transition-all duration-500 block py-2 ${location.pathname === link.path ? 'text-[#df9e53]' : 'text-[#e8ebe3]/60 hover:text-[#e8ebe3]'
                  } ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-6 overflow-hidden">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`inline-flex items-center justify-center border border-[#b3bda3]/30 text-[#e8ebe3] text-xs tracking-[0.2em] uppercase px-10 py-4 rounded-full bg-gradient-to-r hover:from-[#b3bda3]/20 hover:to-[#df9e53]/10 transition-all duration-500 shadow-lg ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: isMenuOpen ? `${navLinks.length * 100}ms` : '0ms' }}
            >
              Agendar Cita
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;