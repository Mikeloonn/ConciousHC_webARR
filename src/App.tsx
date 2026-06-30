import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
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

const ScrollToTopRoute = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 120; // Ajuste para el Navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // 3. Efecto Magnético a Nivel Global (Funciona en toda la web de forma inteligente)
    const onMouseMoveMagnetic = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-hoverable="true"]') as HTMLElement;
      if (target && window.innerWidth > 768) {
        const rect = target.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        gsap.to(target, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: 'power2.out' });
      }
    };

    const onMouseOutMagnetic = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest && target.closest('[data-hoverable="true"]')) {
        const related = e.relatedTarget as HTMLElement;
        if (!related || !related.closest || !related.closest('[data-hoverable="true"]')) {
          gsap.to(target.closest('[data-hoverable="true"]'), { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
        }
      }
    };

    window.addEventListener('mousemove', onMouseMoveMagnetic);
    window.addEventListener('mouseout', onMouseOutMagnetic);

    return () => {
      window.removeEventListener('mousemove', onMouseMoveMagnetic);
      window.removeEventListener('mouseout', onMouseOutMagnetic);
    };
  }, []);

  return (
    <Router>
      <ScrollToTopRoute />
      <div className="flex flex-col min-h-screen bg-[#0a0a08]">
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