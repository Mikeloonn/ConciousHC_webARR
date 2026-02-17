import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import { useEffect } from 'react';
import Workshops from './pages/Workshops';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import CookieBanner from './components/CookieBanner';

const ScrollToTopRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopRoute />
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            {/* Legal Routes */}
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