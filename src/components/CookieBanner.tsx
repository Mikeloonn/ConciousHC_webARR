import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('medico_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const handleReopen = () => setIsVisible(true);
    window.addEventListener('reopen-cookie-banner', handleReopen);
    return () => window.removeEventListener('reopen-cookie-banner', handleReopen);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('medico_cookie_consent', 'accepted');
    setIsVisible(false);
    window.dispatchEvent(new Event('consent-updated'));
  };

  const handleReject = () => {
    localStorage.setItem('medico_cookie_consent', 'rejected');
    setIsVisible(false);
    window.dispatchEvent(new Event('consent-updated'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-bg-base/95 backdrop-blur-md border-t border-text-main/10 shadow-[0_-10px_40px_var(--shadow-color)] z-[9995] p-6 md:p-8 transition-colors duration-600 animate-fade-in-up">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
        
        <div className="text-sm text-text-muted/80 md:w-2/3">
          <h3 className="font-serif font-medium text-text-main text-2xl mb-3">Privacidad y Cookies</h3>
          <p className="leading-relaxed">
            Utilizamos cookies propias y de terceros para analizar nuestros servicios y mostrarte publicidad relacionada con tus preferencias en base a un perfil elaborado a partir de tus hábitos de navegación. 
            Puedes aceptar todas las cookies pulsando "Aceptar todo" o rechazarlas pulsando "Rechazar todo". 
            Para más información consulta nuestra <Link to="/cookies" className="text-accent-gold underline underline-offset-4 hover:text-text-main transition-colors font-medium">Política de Cookies</Link>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
          <button 
            onClick={handleReject}
            className="px-8 py-3 rounded-full border border-text-main/20 text-text-main font-sans font-medium hover:bg-text-main/5 hover:border-text-main/40 transition-all duration-300 text-[10px] tracking-[0.2em] uppercase text-center w-full md:w-auto cursor-pointer"
            data-hoverable="true"
          >
            Rechazar todo
          </button>
          <button 
            onClick={handleAccept}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-sage to-accent-gold text-bg-base font-sans font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 text-[10px] tracking-[0.2em] uppercase text-center shadow-lg w-full md:w-auto cursor-pointer"
            data-hoverable="true"
          >
            Aceptar todo
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieBanner;