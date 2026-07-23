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
    // Scroll via Lenis para coherencia con el smooth scroll global.
    // Se usa el evento 'lenis-ready' disparado tras inicialización en App.
    const scrollViaLenis = (target: number | string, offset: number = 0) => {
      if ((window as any).__lenisInstance) {
        (window as any).__lenisInstance.scrollTo(target, { offset, duration: 1.2 });
      } else {
        typeof target === 'number'
          ? window.scrollTo({ top: target, behavior: 'smooth' })
          : (() => {
              const el = document.getElementById(target);
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            })();
      }
    };

    const navigate = () => {
      if (hash) {
        const id = hash.replace('#', '');
        setTimeout(() => {
          scrollViaLenis(id, 120);
        }, 600);
      } else {
        scrollViaLenis(0);
      }
    };

    if ((window as any).__lenisInstance) {
      navigate();
    } else {
      const onReady = () => {
        window.removeEventListener('lenis-ready', onReady);
        navigate();
      };
      window.addEventListener('lenis-ready', onReady);
    }

    return () => {
      window.removeEventListener('lenis-ready', () => {});
    };
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