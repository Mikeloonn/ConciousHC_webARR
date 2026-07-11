import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/images/logohc.jpg';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Le damos un pequeñísimo margen de tiempo (100ms) para que React 
    // termine de pintar la nueva página y la altura del documento sea la correcta.
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // 1. Reseteamos las columnas por si se quedaron invisibles del cambio de página
        gsap.set('.footer-col', { opacity: 0, y: 50 });

        // 2. Creamos la animación en cascada (stagger)
        gsap.to('.footer-col', {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2, // Tiempo entre cada columna (Efecto Cascada)
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%', // Se activa en cuanto asoma el footer
            toggleActions: 'play none none reverse'
          },
        });

        // 3. Forzamos a GSAP a recalcular todas las medidas de la página
        ScrollTrigger.refresh();
      }, footerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Este Hook se dispara CADA VEZ que cambias de página

  return (
    <footer ref={footerRef} className="relative pt-24 pb-12 overflow-hidden border-t border-sage-200/5 bg-[#0a0a08]" role="contentinfo">
      {/* Esfera de luz decorativa en el fondo */}
      <div className="orb w-[300px] h-[300px] bg-[#5c694d] top-0 left-1/3 opacity-5 pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Columna 1: Marca & Redes */}
          <div className="footer-col opacity-0 text-left">
            <Link to="/" className="flex items-center gap-3 mb-6 focus:outline-none" data-hoverable="true">
              <img
                src={logo}
                alt="Logo Conscious Healing Center"
                className="h-10 w-10 rounded-full object-cover border border-[#e8ebe3]/20 shadow-sm"
              />
              <div className="flex flex-col text-left">
                <span className="font-serif font-semibold text-base tracking-widest text-[#e8ebe3] leading-none">
                  Centro de Acupuntura
                </span>
                <span className="text-[8px] font-sans font-medium uppercase tracking-[0.25em] text-[#b3bda3] mt-1">
                  y Terapias Holísticas
                </span>
              </div>
            </Link>
            <p className="text-[#d1d7c7]/40 text-sm leading-relaxed mb-6 text-left">
              Tu espacio de confianza para el equilibrio y bienestar integral. Combinamos la sabiduría de la Medicina Tradicional China y terapias holísticas para acompañarte a sanar y vivir en armonía.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full border border-sage-200/10 flex items-center justify-center hover:border-sage-200/30 text-sage-200/60 hover:text-[#e8ebe3] transition-all duration-300" aria-label="Instagram" data-hoverable="true">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-sage-200/10 flex items-center justify-center hover:border-sage-200/30 text-sage-200/60 hover:text-[#e8ebe3] transition-all duration-300" aria-label="Facebook" data-hoverable="true">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-sage-200/10 flex items-center justify-center hover:border-sage-200/30 text-sage-200/60 hover:text-[#e8ebe3] transition-all duration-300" aria-label="Youtube" data-hoverable="true">
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Columna 2: Nosotros (Breve Intro) */}
          <div className="footer-col opacity-0 text-left">
            <h3 className="font-serif text-xl mb-4 text-sage-100">Nosotros</h3>
            <p className="text-[#d1d7c7]/40 text-sm leading-relaxed mb-6">
              Inspirados en la alquimia del bienestar natural, nos enfocamos en el potencial humano y el autoconocimiento. Creemos que la salud física es solo la puerta de entrada para una vida plenamente consciente.
            </p>
          </div>

          {/* Columna 3: Enlaces Legales */}
          <div className="footer-col opacity-0 text-left">
            <h3 className="font-serif text-xl mb-4 text-sage-100">Legal</h3>
            <nav className="flex flex-col gap-3" aria-label="Enlaces legales">
              <Link to="/legal" className="footer-link text-sm text-[#d1d7c7]/40 hover:text-[#e8ebe3] transition-colors" data-hoverable="true">Aviso Legal</Link>
              <Link to="/privacy" className="footer-link text-sm text-[#d1d7c7]/40 hover:text-[#e8ebe3] transition-colors" data-hoverable="true">Política de Privacidad</Link>
              <Link to="/cookies" className="footer-link text-sm text-[#d1d7c7]/40 hover:text-[#e8ebe3] transition-colors" data-hoverable="true">Política de Cookies</Link>
              <Link to="/services" className="footer-link text-sm text-[#d1d7c7]/40 hover:text-[#e8ebe3] transition-colors" data-hoverable="true">Servicios</Link>
            </nav>
          </div>

          {/* Columna 4: Horarios */}
          <div className="footer-col opacity-0 text-left">
            <h3 className="font-serif text-xl mb-4 text-sage-100">Horarios</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-sage-100 mb-2 flex items-center gap-2">
                  <Clock size={16} className="text-sage-200/60" /> Lun. - Vie.
                </div>
                <div className="text-sm text-sage-200/40">9:30 h a 14:00 h</div>
                <div className="text-sm text-sage-200/40 mt-1">17:00 h a 19:00 h</div>
              </div>
            </div>
          </div>
        </div>

        <div className="organic-divider mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sage-300/30">© {new Date().getFullYear()} Centro de Terapias Holísticas. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs font-bold text-sage-200/30 hover:text-[#e8ebe3]" data-hoverable="true">
              INICIO
            </Link>
            <Link to="/about" className="text-xs font-bold text-sage-200/30 hover:text-[#e8ebe3]" data-hoverable="true">
              SOBRE NOSOTROS
            </Link>
            <Link to="/contact" className="text-xs font-bold text-sage-200/30 hover:text-[#e8ebe3]" data-hoverable="true">
              CONTACTO
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;