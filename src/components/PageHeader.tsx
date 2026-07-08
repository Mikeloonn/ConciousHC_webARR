import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { IMAGES } from '../constants/images';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb, children }) => {
  return (
    <div 
      className="relative bg-cover bg-center h-[350px] flex items-center text-[#e8ebe3]"
      style={{
        backgroundImage: `url(${IMAGES.pageHeaderBg})`
      }}
    >
      {/* Overlay oscuro para integrar con el tema de la web */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-[#0a0a08]/80 to-[#0a0a08]/40 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 relative z-10">
        <div className="reveal-up">
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-none mb-4">{title}</h1>
          <div className="text-xs tracking-[0.2em] uppercase flex items-center gap-2 text-[#b3bda3]">
            <Link to="/" className="hover:text-[#e8ebe3] flex items-center gap-1 transition-colors" data-hoverable="true">
              <MapPin size={14} /> INICIO
            </Link>
            <span className="text-[#e8ebe3]/30">/</span>
            <span className="text-[#e8ebe3]/60">{breadcrumb}</span>
          </div>
        </div>
        
        {children && (
          <div className="md:text-right w-full md:w-auto reveal-up">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;