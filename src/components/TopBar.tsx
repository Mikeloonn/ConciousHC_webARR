import React from 'react';
import { Phone, Mail, Facebook, Youtube, Instagram, Twitter } from 'lucide-react'; // Using Twitter icon for generic social/TikTok placeholder if needed

const TopBar: React.FC = () => {
  return (
    <div className="bg-primary text-white py-2 text-sm hidden md:block">
      <div className="max-w-[1140px] mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-6">
          <a href="tel:+51098765432" className="flex items-center gap-2 hover:text-secondary transition-colors duration-300">
            <Phone size={14} /> <span>(+51) 098765432</span>
          </a>
          <a href="mailto:info@clinicamedico.com" className="flex items-center gap-2 hover:text-secondary transition-colors duration-300">
            <Mail size={14} /> <span>info@clinicamedico.com</span>
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-secondary transition-colors duration-300"><Facebook size={16} /></a>
          <a href="#" className="hover:text-secondary transition-colors duration-300"><Youtube size={16} /></a>
          <a href="#" className="hover:text-secondary transition-colors duration-300"><Instagram size={16} /></a>
          <a href="#" className="hover:text-secondary transition-colors duration-300"><Twitter size={16} /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;