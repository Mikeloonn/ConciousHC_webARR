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
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Ajuste para el Navbar y el índice
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <SEO 
        title="Nuestros Servicios" 
        description="Especialistas en Medicina Tradicional China, Coaching Transformacional y Terapias Energéticas para un bienestar integral." 
      />
      <PageHeader title="SERVICIOS" breadcrumb="Servicios">
        <nav className="flex flex-col gap-3">
          <a 
            href="#medicina-tradicional-china" 
            onClick={(e) => scrollToSection(e, 'medicina-tradicional-china')}
            className="group flex items-center md:justify-end gap-3 text-sm font-bold text-gray-200 hover:text-white transition-all"
          >
            <span>Medicina Tradicional China</span>
            <span className="w-2 h-2 bg-secondary rounded-full group-hover:scale-150 transition-transform"></span>
          </a>
          <a 
            href="#coaching-transformacional" 
            onClick={(e) => scrollToSection(e, 'coaching-transformacional')}
            className="group flex items-center md:justify-end gap-3 text-sm font-bold text-gray-200 hover:text-white transition-all"
          >
            <span>Coaching Transformacional</span>
            <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
          </a>
          <a 
            href="#terapias-energeticas" 
            onClick={(e) => scrollToSection(e, 'terapias-energeticas')}
            className="group flex items-center md:justify-end gap-3 text-sm font-bold text-gray-200 hover:text-white transition-all"
          >
            <span>Terapias Energéticas</span>
            <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform"></span>
          </a>
        </nav>
      </PageHeader>

      {/* BLOQUE 1: MEDICINA TRADICIONAL CHINA */}
      <section id="medicina-tradicional-china" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Medicina Tradicional China</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-textGray text-lg max-w-2xl mx-auto">
              Técnicas milenarias diseñadas para restaurar el flujo de energía y el equilibrio natural de tu cuerpo.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {servicesList.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                   <div className="relative group">
                     <div className="absolute top-4 left-4 w-full h-full border-2 border-secondary/30 rounded-2xl transform translate-x-2 translate-y-2 z-0"></div>
                     <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                        />
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
                  <button className="bg-primary text-white px-8 py-3 rounded hover:bg-dark transition-colors duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Consultar Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 2: COACHING TRANSFORMACIONAL */}
      <section id="coaching-transformacional" className="py-24 bg-light relative overflow-hidden scroll-mt-32">
        {/* Decorative circle background */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-[1140px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Coaching Transformacional</h2>
            <p className="text-secondary font-bold text-xl uppercase tracking-widest">Empoderamiento y Reconfiguración Subconsciente</p>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <p className="text-xl text-dark font-medium leading-relaxed mb-8 italic border-l-4 border-secondary pl-6">
                  Este servicio está enfocado en el potencial humano. Es un espacio diseñado para personas que se encuentran en un punto de inflexión vital.
                </p>
                
                <div className="prose prose-lg text-textGray max-w-none space-y-6">
                  <p>
                    Ya sea por cambios de carrera, desafíos en el emprendimiento, crisis relacionales o la necesidad de superar techos de cristal internos como el autosabotaje y los miedos limitantes.
                  </p>

                  <h4 className="text-2xl font-bold text-dark pt-4">La Fusión de Cuatro Pilares</h4>
                  <p className="text-primary font-medium italic">Coaching, Dirección de Personas, Reprogramación Subconsciente y Mundo Energético</p>
                  
                  <p>
                    A diferencia de un coaching convencional basado únicamente en la voluntad y el análisis consciente, mi metodología aborda el cambio desde la arquitectura profunda de la mente:
                  </p>

                  <ul className="space-y-6 !pl-0">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                        <Check size={20} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-dark block text-lg mb-1">Coaching Estratégico y Dirección de Personal</strong>
                        Aporto mi experiencia en la gestión de recursos humanos y coaching ejecutivo para ofrecerte estructura, objetivos claros y una visión estratégica. No solo hablamos de sueños; trazamos planes de acción realistas.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                        <Check size={20} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-dark block text-lg mb-1">Reprogramación Subconsciente</strong>
                        Es el motor de cambio. El subconsciente rige el 95% de nuestras conductas. Mediante este método, eliminamos bloqueos emocionales y grabamos nuevas creencias de forma rápida y directa.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                        <Check size={20} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-dark block text-lg mb-1">Maestría en el Mundo Energético</strong>
                        Entendemos que tu capacidad de logro depende de tu nivel de coherencia energética. Si tu energía está bloqueada por traumas antiguos, no tendrás la fuerza necesaria.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="https://picsum.photos/600/800?image=66" alt="Coaching Session" className="w-full h-80 object-cover" />
                </div>
                
                <div className="bg-primary text-white p-8 rounded-2xl shadow-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Check className="text-secondary" /> ¿En qué áreas trabajamos?
                  </h4>
                  <ul className="space-y-4 text-sm text-gray-200">
                    <li><strong className="text-secondary">● Emprendimiento y Éxito:</strong> Superar el síndrome del impostor y liderazgo.</li>
                    <li><strong className="text-secondary">● Autoestima:</strong> Eliminar la autocrítica destructiva y desvalorización.</li>
                    <li><strong className="text-secondary">● Transiciones:</strong> Afrontar rupturas, duelos o cambios con claridad.</li>
                    <li><strong className="text-secondary">● Fobias y Miedos:</strong> Desactivar respuestas automáticas de miedo.</li>
                  </ul>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500 hidden md:block">
                  <img src="https://picsum.photos/600/400?image=67" alt="Mental Clarity" className="w-full h-48 object-cover" />
                </div>
              </div>
            </div>

            {/* How is a session? Section */}
            <div className="mt-16 pt-12 border-t border-gray-100">
              <div className="max-w-3xl">
                <h4 className="text-2xl font-bold text-dark mb-6 italic">¿Cómo es una sesión?</h4>
                <p className="text-textGray leading-relaxed text-lg">
                  Es una sesión de trabajo activa. A través de la comunicación con el subconsciente (test muscular) y técnicas de integración cerebral, identificamos los obstáculos invisibles y los desactivamos en la misma sesión. El objetivo es que salgas de la mentoría con una nueva configuración interna, sintiéndote con el permiso y la capacidad real de ejecutar tus cambios.
                </p>
                <div className="mt-10">
                  <button className="bg-secondary text-dark font-bold px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-xl flex items-center gap-3">
                    Agendar Mentoría Transformacional
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: TERAPIAS ENERGÉTICAS */}
      <section id="terapias-energeticas" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Terapias Energéticas</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="bg-light/50 border-2 border-dashed border-gray-200 rounded-3xl p-20 flex flex-col items-center justify-center text-center">
            <div className="text-secondary/40 mb-4">
              <Check size={64} strokeWidth={1} />
            </div>
            <p className="text-textGray text-xl italic font-medium">Próximamente estaremos detallando nuestros servicios de equilibrio energético.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
