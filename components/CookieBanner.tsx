import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobar si ya existe una decisión guardada
    const consent = localStorage.getItem('medico_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('medico_cookie_consent', 'accepted');
    setIsVisible(false);
    // Aquí se activarían los scripts de terceros (GA4, Pixel, etc.)
  };

  const handleReject = () => {
    localStorage.setItem('medico_cookie_consent', 'rejected');
    setIsVisible(false);
    // Aquí nos aseguramos de que NO se carguen cookies no esenciales
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-primary shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-[60] p-6 md:p-8 animate-fade-in-up">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="text-sm text-textGray md:w-2/3">
          <h3 className="font-bold text-dark text-lg mb-2">Respetamos tu privacidad</h3>
          <p className="leading-relaxed">
            Utilizamos cookies propias y de terceros para analizar nuestros servicios y mostrarte publicidad relacionada con tus preferencias en base a un perfil elaborado a partir de tus hábitos de navegación (por ejemplo, páginas visitadas). 
            Puedes aceptar todas las cookies pulsando el botón "Aceptar todo" o rechazarlas pulsando "Rechazar todo". 
            Para más información consulta nuestra <Link to="/cookies" className="text-primary underline font-bold hover:text-accent">Política de Cookies</Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button 
            onClick={handleReject}
            className="px-6 py-3 rounded border border-gray-300 text-dark font-bold hover:bg-gray-100 transition-colors duration-200 text-sm uppercase tracking-wide text-center"
          >
            Rechazar todo
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-3 rounded bg-primary text-white font-bold hover:bg-dark transition-colors duration-200 text-sm uppercase tracking-wide text-center shadow-lg hover:shadow-xl"
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
