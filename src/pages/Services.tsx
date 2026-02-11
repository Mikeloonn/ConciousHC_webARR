import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import { Check } from 'lucide-react';

const servicesList = [
  {
    title: 'Acupuntura',
    description: 'Técnica milenaria china que implica la inserción de agujas finas en puntos específicos del cuerpo para aliviar el dolor y tratar diversas condiciones físicas y emocionales. Ideal para estrés, migrañas y dolores musculares.',
    image: IMAGES.services.acupuntura
  },
  {
    title: 'Auriculoterapia',
    description: 'Método de tratamiento en el cual se estimula la superficie externa de la oreja, o aurícula, para aliviar condiciones patológicas en otras partes del cuerpo. Excelente complemento para control de peso y ansiedad.',
    image: IMAGES.services.auriculoterapia
  },
  {
    title: 'Fitoterapia',
    description: 'Uso de productos de origen vegetal con finalidad terapéutica, ya sea para prevenir, para atenuar o para curar un estado patológico. Utilizamos hierbas seleccionadas y fórmulas tradicionales.',
    image: IMAGES.services.fitoterapia
  },
  {
    title: 'Ventosas (Cupping)',
    description: 'Terapia antigua en la que se colocan copas especiales en la piel durante unos minutos para crear succión, facilitando el flujo sanguíneo, la relajación y el bienestar general.',
    image: IMAGES.services.ventosas
  },
  {
    title: 'Masaje Tuina',
    description: 'Rama de la medicina china tradicional que utiliza el masaje, la acupresión y otras formas de manipulación corporal para desbloquear el Chi y restaurar el equilibrio.',
    image: IMAGES.services.tuina
  },
  {
    title: 'Moxibustión',
    description: 'Terapia que consiste en quemar artemisa seca (moxa) en puntos particulares del cuerpo. El calor estimula el flujo de energía y fortalece el sistema inmunológico.',
    image: IMAGES.services.moxibustion
  }
];

const Services: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Nuestros Servicios" 
        description="Ofrecemos Acupuntura, Ventosas, Fitoterapia y Masajes Terapéuticos. Descubre nuestras tarifas y tratamientos holísticos." 
      />
      <PageHeader title="SERVICIOS" breadcrumb="Servicios" />

      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col gap-24">
            {servicesList.map((service, index) => (
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
                          src={service.image} 
                          alt={service.title} 
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
                     <span className="text-secondary font-bold uppercase tracking-wider text-sm">Terapia Holística</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    {service.title}
                  </h3>
                  <p className="text-textGray text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-3 text-textGray">
                        <div className="bg-light p-1 rounded-full text-primary">
                           <Check size={16} strokeWidth={3} />
                        </div>
                        <span>Atención personalizada</span>
                     </li>
                     <li className="flex items-center gap-3 text-textGray">
                        <div className="bg-light p-1 rounded-full text-primary">
                           <Check size={16} strokeWidth={3} />
                        </div>
                        <span>Ambiente relajante y seguro</span>
                     </li>
                  </ul>

                  <button className="bg-primary text-white px-8 py-3 rounded hover:bg-dark transition-colors duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Agendar Sesión
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

export default Services;
