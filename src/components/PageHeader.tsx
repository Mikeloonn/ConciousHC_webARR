import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import headerVideo from '../assets/videos/conversacionterapistaloop.mp4';

// 1. Variable global fuera del componente. 
// "Sobrevive" a los cambios de página y guarda el segundo exacto del video.
let globalVideoTime = 0;

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb, children }) => {
  // 2. Referencia para poder manipular el video directamente
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Función para sincronizar el tiempo del video con nuestra variable guardada
    const syncTime = () => {
      video.currentTime = globalVideoTime;
    };

    // Si el video ya cargó, le ponemos el tiempo guardado, sino esperamos a que cargue
    if (video.readyState >= 1) {
      syncTime();
    } else {
      video.addEventListener('loadedmetadata', syncTime, { once: true });
    }

    // 3. Mientras el video se reproduce, actualizamos nuestra variable global
    const handleTimeUpdate = () => {
      globalVideoTime = video.currentTime;
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    // Limpieza al cambiar de página
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="relative h-[350px] flex items-center text-[#e8ebe3] overflow-hidden">
      
      {/* 4. Le añadimos ref={videoRef} a la etiqueta de video */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        /* Nota: mantén tu valor de object-position aquí abajo si lo cambiaste */
        className="absolute inset-0 w-full h-full object-cover object-[50%_30%] z-0"
      >
        <source src={headerVideo} type="video/mp4" />
      </video>

      {/* Overlay oscuro: gradiente más suave en móvil, intensidad original en desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08]/80 md:from-[#0a0a08] via-[#0a0a08]/40 md:via-[#0a0a08]/80 to-transparent md:to-[#0a0a08]/40 z-0 pointer-events-none transition-colors duration-500"></div>

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