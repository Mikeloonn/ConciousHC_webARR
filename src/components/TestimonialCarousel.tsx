import React, { useRef, useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { IMAGES } from '../constants/images';


const items = [...IMAGES.testimonials, ...IMAGES.testimonials, ...IMAGES.testimonials];

const TestimonialCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>(0);

  // Lógica de Autoplay Infinito
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const animate = () => {
      if (scrollContainer && !isDown && !isPaused) {
        // Velocidad del auto-scroll
        scrollContainer.scrollLeft += 1;

        // Resetear scroll para loop infinito invisible
        // Si hemos scrolleado más de la mitad (un set completo de items), volvemos al inicio
        // Asumimos que el contenido está triplicado para seguridad
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3) * 2) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDown, isPaused]);

  // Eventos de Mouse/Touch para arrastrar (Drag)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (scrollContainerRef.current) {
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDown(true);
    if (scrollContainerRef.current) {
      setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleTouchEnd = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Velocidad del drag
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative group">
      {/* Sombras laterales para indicar scroll */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-light to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-light to-transparent z-10 pointer-events-none"></div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-hidden cursor-grab active:cursor-grabbing py-10 no-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div className="flex gap-30 px-4 items-center">
          {items.map((imgSrc, index) => (
            <div
              key={index}
              // 👇 AQUÍ QUITAMOS EL bg-white, border, shadow y p-2
              className="min-w-[300px] md:min-w-[350px] select-none transition-transform duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <img
                src={imgSrc}
                alt={`Testimonio ${index + 1}`}
                className="w-full h-auto object-contain pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;