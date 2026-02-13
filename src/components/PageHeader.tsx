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
      className="relative bg-cover bg-center h-[300px] flex items-center text-white"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(52, 72, 86, 1) 0%, rgba(32, 54, 70, 0.6) 50%), url(${IMAGES.pageHeaderBg})`
      }}
    >
      <div className="max-w-[1140px] mx-auto px-4 w-full pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          <div className="text-sm flex items-center gap-2 text-gray-300">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <MapPin size={14} /> INICIO
            </Link>
            <span>/</span>
            <span className="uppercase">{breadcrumb}</span>
          </div>
        </div>
        {children && (
          <div className="md:text-right w-full md:w-auto overflow-hidden">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;