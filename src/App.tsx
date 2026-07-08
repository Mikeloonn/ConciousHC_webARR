import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

gsap.registerPlugin(ScrollTrigger);

// Controla el Scroll al cambiar de página
const ScrollToTopRoute = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 120;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const offsetPosition = (elementRect - bodyRect) - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
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
      
      // Valores exactos del diseño original (0.15 y 0.4s)
      gsap.to(el, { x: x * 0.15, y: y * 0.15, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseLeave = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      
      // Valores exactos del diseño original (0.6s y elastic.out(1, 0.4))
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    };

    // Aplicamos los eventos después de que React termine de pintar la página
    const timer = setTimeout(() => {
      const hoverables = document.querySelectorAll('[data-hoverable="true"]');
      hoverables.forEach((el) => {
        // Removemos para evitar duplicados en caso de re-render
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
        
        // Agregamos el listener directo al elemento (evita el temblor/bug)
        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      const hoverables = document.querySelectorAll('[data-hoverable="true"]');
      hoverables.forEach((el) => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [pathname]); // Se vuelve a ejecutar en cada cambio de ruta

  return null;
};

const App: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Scroll Suave (Lenis) - GLOBAL
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // 2. Cursor Personalizado - GLOBAL
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    let cursorAnimId: number;

    const onMouseMoveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDotRef.current) {
        gsap.to(cursorDotRef.current, { x: mouseX - 4, y: mouseY - 4, duration: 0 });
      }
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', onMouseMoveCursor);
      
      const animateCursorRing = () => {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        if (cursorRingRef.current) {
          cursorRingRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
        }
        cursorAnimId = requestAnimationFrame(animateCursorRing);
      };
      animateCursorRing();
    }

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', onMouseMoveCursor);
      cancelAnimationFrame(cursorAnimId);
    };
  }, []);

  return (
    <Router>
      <ScrollToTopRoute />
      <MagneticEffectHandler />
      
      {/* OVERLAYS GLOBALES */}
      <div className="noise-overlay pointer-events-none"></div>
      <div ref={cursorDotRef} className="cursor-dot hidden md:block"></div>
      <div ref={cursorRingRef} className="cursor-ring hidden md:block"></div>

      <div className="flex flex-col min-h-screen bg-[#0a0a08] relative z-10">
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
  );
};

export default App;