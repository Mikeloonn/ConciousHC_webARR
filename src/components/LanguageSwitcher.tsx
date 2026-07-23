import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const next = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-text-main/20 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-text-main/5 transition-all duration-300 cursor-pointer"
      aria-label={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className={i18n.language === 'es' ? 'text-accent-gold' : 'text-text-muted/50'}>Español</span>
      <span className="text-text-muted/30">|</span>
      <span className={i18n.language === 'en' ? 'text-accent-gold' : 'text-text-muted/50'}>English</span>
    </button>
  );
};

export default LanguageSwitcher;
