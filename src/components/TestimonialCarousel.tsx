import React, { useRef, useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const googleReviews = [
  {
    id: 1,
    author: 'Safa Kadhum',
    initials: 'SK',
    text: 'We had a truly fantastic experience at Acupuntura en Torremolinos – Yeni Arriarán. Both my mother and I felt very welcome from the start, and the atmosphere was calm and relaxing throughout. The treatment was professional and soothing, and we could immediately feel an improvement afterwards...',
    link: 'https://www.google.com/search?q=Acupuntura+en+Torremolinos+-+Yeni+Arriar%C3%A1n#lrd=0x0:0x0,1,,,'
  },
  {
    id: 2,
    author: 'Franklin Jose Pacheco Quijada',
    initials: 'FP',
    text: 'Quiero agradecer profundamente a la Doctora Yeni Arriaran por su excelente trabajo con la acupuntura. Llegué con un dolor de espalda bastante fuerte y desde la primera sesión noté una gran mejoría. Para mi sorpresa, en la segunda sesión el dolor desapareció completamente. Fue muy profesional...',
    link: 'https://www.google.com/search?q=Acupuntura+en+Torremolinos+-+Yeni+Arriar%C3%A1n#lrd=0x0:0x0,1,,,'
  },
  {
    id: 3,
    author: 'Edurne MGA',
    initials: 'EM',
    text: 'He ido a varios terapeutas de acupuntura, la técnica que utiliza Yeni me gustó mucho porque con 1 sola aguja, como mucho 2, es capaz de reducir en la misma sesión notoriamente la dolencia con la que llegas. El trato es muy humano y cercano.',
    link: 'https://www.google.com/search?q=Acupuntura+en+Torremolinos+-+Yeni+Arriar%C3%A1n#lrd=0x0:0x0,1,,,'
  }
];

const displayReviews = [...googleReviews, ...googleReviews, ...googleReviews];

const TestimonialCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    const animate = () => {
      if (scrollContainer && !isDown && !isPaused) {
        const singleSetWidth = scrollContainer.scrollWidth / 3;

        if (scrollContainer.scrollLeft === 0) {
            scrollContainer.scrollLeft = singleSetWidth;
        }

        scrollContainer.scrollLeft += 1;

        if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
          scrollContainer.scrollLeft = singleSetWidth;
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = singleSetWidth;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isDown, isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setDragDistance(0);
    if (scrollContainerRef.current) {
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    setDragDistance(Math.abs(walk));
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDown(true);
    setDragDistance(0);
    if (scrollContainerRef.current) {
      setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    setDragDistance(Math.abs(walk));
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    if (dragDistance < 10) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="relative w-full overflow-hidden reveal-up">
      {/* Sombras de desvanecimiento dinámicas que reaccionan al modo de tema */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none transition-colors duration-600"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none transition-colors duration-600"></div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 px-3 overflow-x-hidden cursor-grab active:cursor-grabbing no-scrollbar py-4"
        onMouseDown={handleMouseDown}
        onMouseLeave={() => { setIsDown(false); setIsPaused(false); }}
        onMouseUp={() => setIsDown(false)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsPaused(true)}
        onTouchStart={handleTouchStart}
        onTouchEnd={() => { setIsDown(false); setIsPaused(false); }}
        onTouchMove={handleTouchMove}
      >
        {displayReviews.map((review, i) => (
          <a
            key={i}
            href={review.link}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onClick={(e) => handleClick(e, review.link)}
            className="testimonial-card block w-[320px] md:w-[450px] shrink-0 transform transition-all duration-500 hover:border-accent-sage/30 select-none"
          >
            <div className="flex gap-1 mb-4 relative z-10 pointer-events-none">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={16} className="text-[#df9e53] fill-[#df9e53]" />
              ))}
            </div>
            <p className="text-text-muted/70 text-sm leading-relaxed mb-8 relative z-10 line-clamp-6 pointer-events-none">
              "{review.text}"
            </p>
            <div className="flex items-center gap-3 relative z-10 mt-auto pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-sage/20 to-accent-gold/20 flex items-center justify-center">
                <span className="font-serif text-sm text-text-main">{review.initials}</span>
              </div>
              <div>
                <div className="text-sm text-text-main">{review.author}</div>
                <div className="text-xs text-accent-sage/50">Reseña en Google</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;