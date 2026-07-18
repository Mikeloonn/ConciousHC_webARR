import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import CookieBanner from './components/CookieBanner';
import { ThemeProvider } from './context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

// Controla el Scroll al cambiar de página
// Controla el Scroll al cambiar de página
const ScrollToTopRoute = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      
      // Aumentamos el tiempo a 600ms para dar tiempo a que las imágenes carguen 
      // y la página calcule su altura real antes de hacer el scroll.
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 120;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const offsetPosition = (elementRect - bodyRect) - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 600);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Controla el efecto magnético suave y sin bugs (Adaptado del diseño original)
const MagneticEffectHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const el = mouseEvent.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, { x: x * 0.15, y: y * 0.15, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseLeave = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    };

    const timer = setTimeout(() => {
      const hoverables = document.querySelectorAll('[data-hoverable="true"]');
      hoverables.forEach((el) => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const hoverables = document.querySelectorAll('[data-hoverable="true"]');
      hoverables.forEach((el) => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopRoute />
        <MagneticEffectHandler />
        
        {/* Cambiado bg-[#0a0a08] por bg-bg-base con transición suave */}
        <div className="flex flex-col min-h-screen bg-bg-base relative z-10 transition-colors duration-600">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<LegalNotice />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/cookies" element={<CookiePolicy />} />
            </Routes>
          </div>
          <Footer />
          <ScrollToTop />
          <CookieBanner />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;