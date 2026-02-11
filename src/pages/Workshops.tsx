import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import { Check } from 'lucide-react';

const workshopsList = [
  {
    title: 'Yoga',
    description: 'Nuestras clases de Yoga están diseñadas para unir cuerpo, mente y espíritu. A través de asanas (posturas), pranayama (respiración) y meditación, mejoramos la flexibilidad, reducimos el estrés y promovemos un estado de paz interior.',
    image: IMAGES.workshops.yoga
  },
  {
    title: 'Pilates',
    description: 'El método Pilates se centra en el desarrollo de los músculos internos para mantener el equilibrio corporal y dar estabilidad y firmeza a la columna vertebral. Es ideal para rehabilitación y prevención de dolores de espalda.',
    image: IMAGES.workshops.pilates
  },
  {
    title: 'Coach Transformacional',
    description: 'Un proceso de acompañamiento reflexivo y creativo que te inspira a maximizar tu potencial personal y profesional. Trabajamos creencias limitantes, gestión emocional y logro de objetivos vitales.',
    image: IMAGES.workshops.coaching
  }
];

const Workshops: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Talleres" 
        description="Participa en nuestros talleres de Yoga, Pilates y Coaching Transformacional. Mejora tu bienestar físico y mental en grupo." 
      />
      <PageHeader title="TALLERES" breadcrumb="Talleres" />

      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col gap-24">
            {workshopsList.map((workshop, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                   <div className="relative group">
                     <div className="absolute top-4 left-4 w-full h-full border-2 border-secondary rounded-2xl transform translate-x-2 translate-y-2 z-0"></div>
                     <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                        <img 
                          src={workshop.image} 
                          alt={workshop.title} 
                          className="w-full h-[350px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                        />
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                     </div>
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="h-[2px] w-12 bg-secondary"></div>
                     <span className="text-secondary font-bold uppercase tracking-wider text-sm">Bienestar & Movimiento</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    {workshop.title}
                  </h3>
                  <p className="text-textGray text-lg leading-relaxed mb-8">
                    {workshop.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-3 text-textGray">
                        <div className="bg-light p-1 rounded-full text-primary">
                           <Check size={16} strokeWidth={3} />
                        </div>
                        <span>Grupos reducidos</span>
                     </li>
                     <li className="flex items-center gap-3 text-textGray">
                        <div className="bg-light p-1 rounded-full text-primary">
                           <Check size={16} strokeWidth={3} />
                        </div>
                        <span>Instructores certificados</span>
                     </li>
                  </ul>

                  <button className="bg-primary text-white px-8 py-3 rounded hover:bg-dark transition-colors duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Inscribirse
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
