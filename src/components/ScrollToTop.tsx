import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if ((window as any).__lenisInstance) {
      (window as any).__lenisInstance.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-bg-base/80 backdrop-blur-sm text-text-main shadow-[0_4px_20px_var(--shadow-color)] border border-text-main/20 hover:border-accent-gold hover:text-accent-gold hover:-translate-y-1 transition-all duration-500 z-[90] cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label={t('scrollToTop.ariaLabel')}
      data-hoverable="true"
    >
      <ChevronUp size={20} strokeWidth={1.5} />
    </button>
  );
};

export default ScrollToTop;