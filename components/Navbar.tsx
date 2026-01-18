import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary' : 'text-textGray md:text-white hover:text-primary';
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-primary/90 py-4'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
           <div className={`font-bold text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
             MEDICO
           </div>
           {/* If you had an image logo: <img src="..." alt="Logo" className="h-10 w-auto" /> */}
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                    isScrolled 
                      ? (location.pathname === link.path ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary')
                      : (location.pathname === link.path ? 'text-secondary font-bold' : 'text-white hover:text-secondary')
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            to="/contact" 
            className={`px-6 py-2 rounded-md text-sm font-bold uppercase transition-all duration-300 ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-accent' 
                : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            Agendar
          </Link>
        </nav>

        {/* Mobile Nav */}
        <nav 
          className={`absolute top-full right-0 w-64 bg-white shadow-xl rounded-bl-lg transform transition-transform duration-300 origin-top-right ${
            isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          } md:hidden`}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-100 last:border-none">
                <Link 
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-4 text-sm font-medium uppercase ${
                    location.pathname === link.path ? 'text-primary bg-light' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="p-4">
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-primary text-white rounded-md text-sm font-bold uppercase hover:bg-accent"
              >
                Agendar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;