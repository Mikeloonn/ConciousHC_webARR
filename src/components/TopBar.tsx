import React from 'react';
import { Phone, Mail, Facebook, Youtube, Instagram, Twitter } from 'lucide-react'; // Using Twitter icon for generic social/TikTok placeholder if needed

const TopBar: React.FC = () => {
  return (
    <div className="bg-primary text-white py-2 text-sm hidden md:block">
      <div className="max-w-[1140px] mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-6">
          <a href="https://wa.me/34624253470" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors duration-300">
            <Phone size={14} /> <span>+34 624 253 470</span>
          </a>
          <a href="mailto:acupunturaholisticayeni@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors duration-300">
            <Mail size={14} /> <span>acupunturaholisticayeni@gmail.com</span>
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