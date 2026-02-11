import React, { useRef, useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { IMAGES } from '../constants/images';

const testimonialsData = [
  {
    id: 1,
    name: "María Gonzales",
    role: "Paciente de Acupuntura",
    image: IMAGES.testimonials[0],
    text: "La terapia cambió mi vida. Llegué con dolor crónico de espalda y después de 5 sesiones me siento renovada."
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    role: "Deportista",
    image: IMAGES.testimonials[1],
    text: "El masaje Tuina es excelente para la recuperación muscular. La atención de la especialista es A1."
  },
  {
    id: 3,
    name: "Elena Torres",
    role: "Paciente de Estrés",
    image: IMAGES.testimonials[2],
    text: "El ambiente de la clínica te relaja desde que entras. Las ventosas me ayudaron mucho con la tensión."
  },
  {
    id: 4,
    name: "Jorge Mendez",
    role: "Ejecutivo",
    image: IMAGES.testimonials[3],
    text: "Recomiendo totalmente la fitoterapia. Un enfoque natural que realmente funciona."
  },
  {
    id: 5,
    name: "Ana Pardo",
    role: "Madre de familia",
    image: IMAGES.testimonials[4],
    text: "Increíble experiencia. La calidez y profesionalismo me hacen volver siempre."
  }
];

// Duplicamos la data para el efecto infinito
const items = [...testimonialsData, ...testimonialsData, ...testimonialsData];

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
        <div className="flex gap-40 px-4">
          {items.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="min-w-[300px] md:min-w-[350px] bg-white p-6 rounded-xl shadow-md select-none border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-textGray italic mb-6 text-sm leading-relaxed">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover pointer-events-none"
                />
                <div>
                  <h4 className="font-bold text-dark text-sm">{item.name}</h4>
                  <p className="text-xs text-secondary font-medium uppercase">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;