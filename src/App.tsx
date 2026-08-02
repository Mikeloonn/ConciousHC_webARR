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

const ScrollToTopRoute = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // El navbar fijo mide ~56px (img h-9 + py-2.5) y los elementos target
    // tienen scroll-mt-32 (128px) en el CSS. Lenis respeta scroll-margin-top,
    // por lo que un offset de -100 reduce el aire final entre navbar y título
    // dejando ~28px de respiro visible bajo el navbar.
    const NAV_OFFSET = 0;

    // Scroll via Lenis para coherencia con el smooth scroll global.
    const scrollToTarget = (id: string) => {
      const lenis = (window as any).__lenisInstance;
      if (!lenis) return;

      if (id === '') {
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }

      const el = document.getElementById(id);
      if (!el) return;

      // Las animaciones de ScrollTrigger modifican el layout/altura de la página
      // (elementos `.reveal-up` con opacity:0/y:60 al montarse). Si scrolleamos antes
      // de que la geometría del documento sea estable, el offset medido será erróneo.
      // Forzamos un recálculo de ScrollTrigger y luego scrolleamos.
      // El requestAnimationFrame asegura que el navegador haya hecho layout/paint
      // del contenido de la nueva ruta antes de medir getBoundingClientRect().
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        lenis.scrollTo(el, { offset: -NAV_OFFSET, duration: 1.2 });
      });
    };

    const performNavigation = () => {
      const id = hash.replace('#', '');
      scrollToTarget(id);
    };

    // Si Lenis ya está inicializado (caso normal tras primera carga),
    // navegamos directamente. Si no, esperamos al evento 'lenis-ready'.
    if ((window as any).__lenisInstance) {
      performNavigation();
    } else {
      const onReady = () => {
        window.removeEventListener('lenis-ready', onReady);
        performNavigation();
      };
      window.addEventListener('lenis-ready', onReady);
      return () => window.removeEventListener('lenis-ready', onReady);
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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as any).__lenisInstance = lenis;
    window.dispatchEvent(new Event('lenis-ready'));

    lenis.on('scroll', () => ScrollTrigger.update());

    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      delete (window as any).__lenisInstance;
    };
  }, []);

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