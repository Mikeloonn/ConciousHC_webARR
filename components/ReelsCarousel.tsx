import React, { useRef, useState, useEffect } from 'react';
import { Play } from 'lucide-react';

export interface ReelItem {
  id: number;
  url: string;
  title: string;
}

interface ReelsCarouselProps {
  title: string;
  items: ReelItem[];
  direction?: 'left' | 'right';
}

const ReelsCarousel: React.FC<ReelsCarouselProps> = ({ title, items, direction = 'left' }) => {
  // Triplicamos los items para el efecto infinito
  const displayItems = [...items, ...items, ...items];
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [clickStartX, setClickStartX] = useState(0); // Para diferenciar click de drag
  const animationRef = useRef<number>(0);
  const initializedRef = useRef(false);

  // Lógica de Autoplay Infinito (Igual al TestimonialCarousel)
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    const animate = () => {
      if (scrollContainer && !isDown && !isPaused) {
        // Calculamos el ancho total real y dividimos entre 3 (porque triplicamos la data)
        const singleSetWidth = scrollContainer.scrollWidth / 3;

        // Inicializar posición para scroll hacia la derecha
        if (direction === 'right' && !initializedRef.current && singleSetWidth > 0) {
           scrollContainer.scrollLeft = singleSetWidth;
           initializedRef.current = true;
        }

        if (direction === 'left') {
          scrollContainer.scrollLeft += 1;
        } else {
          scrollContainer.scrollLeft -= 1;
        }
        
        if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
          scrollContainer.scrollLeft = singleSetWidth;
        } else if (scrollContainer.scrollLeft <= 0) {
           // Por si acaso scrollea hacia atrás mucho
           scrollContainer.scrollLeft = singleSetWidth;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDown, isPaused]);

  // Manejo de Mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (scrollContainerRef.current) {
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
      setClickStartX(e.pageX);
    }
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseUp = (e: React.MouseEvent, url: string) => {
    setIsDown(false);
    setIsPaused(false);
    
    // Si se movió menos de 5px, lo consideramos un click para abrir el enlace
    if (Math.abs(e.pageX - clickStartX) < 5) {
      window.open(url, '_blank');
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="py-10">
      <div className="max-w-[1140px] mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-dark mb-2">{title}</h2>
        <div className="w-12 h-1 bg-primary rounded"></div>
      </div>

      <div className="relative group">
        {/* Sombras laterales */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden cursor-grab active:cursor-grabbing py-4 no-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
        >
          <div className="flex gap-40 px-4">
            {displayItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="relative min-w-[260px] h-[460px] bg-black rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
                onMouseUp={(e) => handleMouseUp(e, item.url)}
              >
                {/* Iframe con pointer-events-none para que no interfiera con el drag */}
                <iframe 
                  src={`${item.url}embed`}
                  className="w-full h-full object-cover pointer-events-none border-none"
                  title={item.title}
                  loading="lazy"
                ></iframe>

                {/* Overlay para capturar el click/drag y mostrar título */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                   <div className="flex items-center gap-2 mb-2">
                     <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                        <Play size={16} className="text-white fill-white" />
                     </div>
                     <span className="text-xs text-white font-medium uppercase tracking-wider">Reel</span>
                   </div>
                   <h3 className="text-white font-bold leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsCarousel;
