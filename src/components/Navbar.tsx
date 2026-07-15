import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/images/logohc.jpg';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Al cambiar de página, cerramos los menús móviles
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setMobileServicesOpen(false);
    }
  }, [isMenuOpen]);

  // Estructura de Navegación con Sub-menú para Servicios
  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'SOBRE NOSOTROS', path: '/about' },
    { 
      name: 'SERVICIOS', 
      path: '/services',
      subItems: [
        { name: 'Acupuntura', hash: '#acupuntura' },
        { name: 'Auriculoterapia', hash: '#auriculoterapia' },
        { name: 'Fitoterapia', hash: '#fitoterapia' },
        { name: 'Ventosas (Cupping)', hash: '#ventosas-cupping' },
        { name: 'Masaje Tuina', hash: '#masaje-tuina' },
        { name: 'Moxibustión', hash: '#moxibustion' },
        { name: 'Coaching Transformacional', hash: '#coaching-transformacional' },
        { name: 'Péndulo Hebreo', hash: '#pendulo-hebreo' },
        { name: 'Sanación Cuántica', hash: '#sanacion-cuantica' },
        { name: 'Biomagnetismo', hash: '#biomagnetismo' },
      ]
    },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACTO', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9990] transition-all duration-500 border-b ${
          isScrolled || isMenuOpen
            ? 'bg-[#0a0a08]/85 backdrop-blur-md py-2.5 border-[#e8ebe3]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-[#0a0a08]/40 backdrop-blur-sm py-4 border-[#e8ebe3]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative">
          
          {/* Logo */}
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
                <li key={link.name} className="relative group">
                  
                  {/* Título Principal (Clicable) */}
                  <div className="flex items-center gap-1 h-full py-2">
                    <Link
                      to={link.path}
                      className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      {link.name}
                    </Link>
                    {link.subItems && (
                      <ChevronDown size={14} className="text-[#e8ebe3]/60 group-hover:rotate-180 transition-transform duration-300 mt-0.5" />
                    )}
                  </div>

                  {/* Menú Desplegable con Hover */}
                  {link.subItems && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[280px] z-50">
                      {/* Contenedor tipo ventanita con scroll interno */}
                      <div className="bg-[#0a0a08]/95 backdrop-blur-xl border border-[#e8ebe3]/10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-2 w-full">
                        <div className="overflow-y-auto max-h-[320px] flex flex-col pr-1">
                          {link.subItems.map(subItem => (
                            <Link
                              key={subItem.name}
                              to={`${link.path}${subItem.hash}`}
                              className="text-[10px] tracking-[0.15em] uppercase text-[#e8ebe3]/70 hover:text-[#df9e53] hover:bg-[#e8ebe3]/5 px-4 py-3.5 rounded-xl transition-colors text-center w-full block"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5 border-l border-[#e8ebe3]/20 pl-5">
              <button
                onClick={toggleTheme}
                className="text-[#e8ebe3]/60 hover:text-[#df9e53] transition-colors duration-300 focus:outline-none cursor-pointer"
                aria-label="Cambiar Tema"
                data-hoverable="true"
              >
                {theme === 'dark' ? <Sun size={18} strokeWidth={1.8} /> : <Moon size={18} strokeWidth={1.8} />}
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-[#b3bda3]/30 text-[#e8ebe3] text-[10px] tracking-[0.2em] uppercase px-5 py-2 rounded-full hover:bg-[#b3bda3]/10 hover:border-[#b3bda3]/60 transition-all duration-300 focus:outline-none"
              >
                Agendar
              </Link>
            </div>
          </nav>

          {/* Hamburger (Móvil) */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-[#e8ebe3]/80 p-2 z-[9996] focus:outline-none cursor-pointer"
              aria-label="Cambiar Tema"
            >
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button
              className="flex flex-col gap-[5.5px] cursor-pointer p-2 z-[9996] focus:outline-none relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              <span className={`w-6 h-[1.5px] bg-[#e8ebe3] transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
              <span className={`w-6 h-[1.5px] bg-[#e8ebe3] transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-2' : ''}`}></span>
              <span className={`w-6 h-[1.5px] bg-[#e8ebe3] transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <nav
        className={`fixed inset-0 z-[9980] bg-[#0a0a08]/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 overflow-y-auto ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 mt-12 w-full px-6 pb-20">
          {navLinks.map((link, index) => (
            <li key={link.name} className="overflow-hidden w-full text-center flex flex-col items-center">
              
              <div className="flex items-center justify-center gap-3 relative w-full">
                <Link
                  to={link.path}
                  onClick={() => !link.subItems && setIsMenuOpen(false)}
                  className={`font-serif text-3xl md:text-4xl font-light transition-all duration-500 block py-2 ${
                    location.pathname === link.path ? 'text-[#df9e53]' : 'text-[#e8ebe3]/60 hover:text-[#e8ebe3]'
                  } ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
                >
                  {link.name}
                </Link>
                
                {/* Botón para desplegar submenú en móvil */}
                {link.subItems && (
                  <button 
                    onClick={(e) => { e.preventDefault(); setMobileServicesOpen(!mobileServicesOpen); }}
                    className={`p-2 transition-all duration-500 text-[#e8ebe3]/60 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} focus:outline-none`}
                    style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
                  >
                    <ChevronDown size={24} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#df9e53]' : ''}`} />
                  </button>
                )}
              </div>

              {/* Submenú Móvil (Acordeón con Scroll) */}
              {link.subItems && (
                <div className={`grid transition-all duration-500 ease-in-out w-full ${mobileServicesOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden">
                    <div className="overflow-y-auto max-h-[220px] flex flex-col gap-5 w-full px-4 border-l-2 border-r-2 border-[#df9e53]/30 py-3 mx-auto max-w-[280px]">
                      {link.subItems.map(subItem => (
                        <Link
                          key={subItem.name}
                          to={`${link.path}${subItem.hash}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-[10px] tracking-[0.2em] uppercase text-[#e8ebe3]/50 hover:text-[#df9e53] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </li>
          ))}
          <li className="mt-8 overflow-hidden w-full flex justify-center">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`inline-flex items-center justify-center border border-[#b3bda3]/30 text-[#e8ebe3] text-xs tracking-[0.2em] uppercase px-10 py-4 rounded-full bg-gradient-to-r hover:from-[#b3bda3]/20 hover:to-[#df9e53]/10 transition-all duration-500 shadow-lg ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
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