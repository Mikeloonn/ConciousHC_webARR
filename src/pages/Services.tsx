import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 1. ESTRUCTURA DE DATOS ORIGINAL 100% CONSERVADA
const servicesData = [
  {
    id: 'acupuntura',
    title: 'Acupuntura',
    image: IMAGES.services.acupuntura,
    intro: (
      <>
        <p>
          La acupuntura es una terapia milenaria de la Medicina Tradicional China que busca restablecer el equilibrio natural del cuerpo, la mente y las emociones. Se basa en la estimulación de puntos específicos del cuerpo, a través de agujas muy finas y estériles, situadas a lo largo de los meridianos energéticos, por donde circula el Qi (energía vital).
        </p>
        <p>
          Según la MTC, cuando el Qi fluye de forma armónica, el cuerpo se mantiene sano. Sin embargo, el estrés, las emociones, los hábitos de vida o los desequilibrios internos pueden bloquear ese flujo, generando dolor o enfermedad.
        </p>
        <p>
          Desde una visión integrativa, la acupuntura también estimula el sistema nervioso, mejora la circulación, regula funciones orgánicas y favorece procesos de autorregulación y bienestar profundo.
        </p>
      </>
    ),
    benefitsTitle: 'Beneficios de la Acupuntura',
    benefits: [
      { title: 'Alivio del dolor', desc: 'Es especially eficaz en dolores musculares y articulares, cervicalgias, lumbalgias, migrañas, ciáticas, lesiones deportivas y dolores crónicos.' },
      { title: 'Regulación del sistema nervioso', desc: 'Ayuda a reducir el estrés, la ansiedad, el insomnio, el agotamiento mental y los estados de tensión emocional.' },
      { title: 'Mejora del funcionamiento interno', desc: 'Favorece el equilibrio del sistema digestivo, hormonal, respiratorio e inmunológico.' }
    ],
    outroTitle: 'Un tratamiento adaptado a ti',
    outro: 'En consulta, la acupuntura se integra dentro de un enfoque de Medicina China y terapias holísticas, donde cada persona es única. El número de sesiones y la evolución del tratamiento dependen de la condición, el terreno y la respuesta individual.'
  },
  {
    id: 'auriculoterapia',
    title: 'Auriculoterapia',
    image: IMAGES.services.auriculoterapia,
    intro: (
      <>
        <p>
          La auriculoterapia es una técnica terapéutica de la Medicina Tradicional China que utiliza el pabellón auricular como un microsistema que refleja todo el organismo. En la oreja se encuentran representados los órganos, sistemas y estructuras del cuerpo, así como puntos relacionados con el estado emocional y energético de la persona.
        </p>
        <p>
          Mediante la estimulación de puntos específicos del oído —con semillas, esferas, agujas muy finas o imanes— se activan mecanismos de regulación que ayudan al cuerpo a recuperar su equilibrio natural.
        </p>
        <p>
          La auriculoterapia puede utilizarse como tratamiento principal o como complemento de la acupuntura y otras terapias, potenciando y prolongando sus efectos a lo largo de los días posteriores a la sesión.
        </p>
      </>
    ),
    benefitsTitle: 'Beneficios de la Auriculoterapia',
    benefits: [
      { title: 'Alivio del dolor crónico', desc: 'Es especialmente útil en dolores musculares y articulares, cefaleas, migrañas y lumbalgias.' },
      { title: 'Regulación del estrés y las emociones', desc: 'Contribuye a equilibrar el sistema nervioso, reduciendo ansiedad, nerviosismo e insomnio.' },
      { title: 'Apoyo en procesos de cambio', desc: 'Se utiliza como apoyo en el control del apetito, gestión del peso, abandono del tabaco y procesos de desintoxicación.' }
    ],
    outroTitle: 'Efecto continuo y prolongado',
    outro: 'Al utilizar semillas o imanes, el tratamiento sigue actuando entre sesiones, permitiendo que la persona participe activamente estimulando los puntos indicados en su día a día.'
  },
  {
    id: 'fitoterapia',
    title: 'Fitoterapia',
    image: IMAGES.services.fitoterapia,
    intro: (
      <>
        <p>
          La Fitoterapia China es una de las principales ramas de la Medicina Tradicional China (MTC) y se basa en el uso terapéutico de plantas medicinales, minerales y sustancias naturales cuidadosamente seleccionadas para restablecer el equilibrio interno del organismo.
        </p>
        <p>
          A diferencia de la fitoterapia occidental, no se centra únicamente en el síntoma, sino en el patrón energético de la persona. Cada fórmula se prescribe teniendo en cuenta la constitución, el estado físico, emocional y energético.
        </p>
        <p>
          El objetivo no es forzar al cuerpo, sino acompañarlo en su proceso natural de autorregulación mediante sinergias de plantas que armonizan y nutren desde el interior.
        </p>
      </>
    ),
    benefitsTitle: 'Beneficios de la Fitoterapia',
    benefits: [
      { title: 'Tratamiento de la raíz', desc: 'Las fórmulas herbales trabajan sobre la causa del desequilibrio, ayudando al organismo a recuperar su funcionamiento óptimo de manera sostenida.' },
      { title: 'Regulación de órganos y sistemas', desc: 'Especialmente eficaz en trastornos digestivos, desequilibrios hormonales, problemas menstruales y sistema inmunológico.' },
      { title: 'Apoyo emocional y energético', desc: 'Ayuda a equilibrar emociones como la ansiedad, la irritabilidad, la tristeza o el agotamiento profundo.' }
    ],
    outroTitle: 'Tratamiento personalizado',
    outro: 'Las fórmulas pueden ajustarse a lo largo del proceso, respetando los ritmos del cuerpo y favoreciendo una recuperación consciente. Es segura y puede utilizarse de forma complementaria.'
  },
  {
    id: 'ventosas',
    title: 'Ventosas (Cupping)',
    image: IMAGES.services.ventosas,
    intro: (
      <>
        <p>
          La terapia con ventosas, conocida internacionalmente como Cupping, es una técnica ancestral que utiliza copas especiales (de vidrio, bambú o plástico) para crear un efecto de succión sobre la piel. Este vacío estimula la circulación sanguínea y linfática en zonas profundas.
        </p>
        <p>
          En la MTC, se considera que el dolor y la tensión son causados por el estancamiento de Qi (energía) y Sangre. Las ventosas actúan "moviendo" este estancamiento, permitiendo que la energía fluya libremente de nuevo.
        </p>
        <p>
          Es una técnica inmensamente valorada por su capacidad casi inmediata para aliviar dolores de espalda intensos, contracturas musculares severas y estados de tensión acumulada por el estrés.
        </p>
      </>
    ),
    benefitsTitle: 'Beneficios del Cupping',
    benefits: [
      { title: 'Descontracturante profundo', desc: 'Alivia la tensión muscular acumulada, especialmente en espalda, hombros y cuello, liberando nudos de forma más rápida que un masaje.' },
      { title: 'Eliminación de toxinas', desc: 'Estimula el sistema linfático, ayudando al cuerpo a depurar sustancias de desecho acumuladas en los tejidos.' },
      { title: 'Fortalecimiento inmunológico', desc: 'Tradicionalmente se utiliza para expresar factores patógenos como el frío y la humedad, siendo muy útil en resfriados incipientes.' }
    ],
    outroTitle: '¿Es doloroso? ¿Deja marcas?',
    outro: 'No es dolorosa. Es común que queden marcas circulares (hematomas indoloros) que pueden durar unos días; esto es una excelente señal biológica de que se ha movilizado el estancamiento sanguíneo.'
  },
  {
    id: 'masaje-tuina',
    title: 'Masaje Tuina',
    image: IMAGES.services.tuina,
    intro: (
      <>
        <p>
          El Tuina es una de las ramas terapéuticas más antiguas. Más que un simple masaje de relajación, es un sistema de terapia manual vigorosa y profunda que combina técnicas de masaje, acupresión (digitopuntura) y manipulaciones articulares.
        </p>
        <p>
          Su nombre proviene de dos de sus técnicas principales: "Tui" (empujar) y "Na" (agarrar). El terapeuta utiliza las manos, dedos, codos y antebrazos para aplicar movimientos rítmicos y presiones para desbloquear el flujo de Qi (energía).
        </p>
        <p>
          Es una terapia sumamente dinámica donde el terapeuta adapta constantemente la intensidad de las maniobras al diagnóstico energético y estructural del paciente.
        </p>
      </>
    ),
    benefitsTitle: 'Beneficios Terapéuticos',
    benefits: [
      { title: 'Alivio del dolor agudo y crónico', desc: 'Trata eficazmente contracturas, lumbalgias, ciáticas, tortícolis, tendinitis y apoya la recuperación de lesiones.' },
      { title: 'Regulación de órganos internos', desc: 'A través de técnicas reflejas en la espalda y el abdomen, estimula el buen funcionamiento del sistema digestivo y respiratorio.' },
      { title: 'Relajación profunda', desc: 'Reduce drásticamente los niveles de estrés, ansiedad e insomnio, induciendo un estado de calma mental.' }
    ],
    outroTitle: 'Dinámica de la sesión',
    outro: 'A diferencia de otros masajes, el Tuina se realiza generalmente con ropa cómoda y ligera, o sobre una sábana de algodón. Es una terapia activa que a menudo se integra con ventosas o acupuntura.'
  },
  {
    id: 'moxibustion',
    title: 'Moxibustión',
    image: IMAGES.services.moxibustion,
    intro: (
      <>
        <p>
          La Moxibustión (del japonés Mogusa) es una técnica de termoterapia profunda que utiliza la combustión de la planta Artemisia Vulgaris para restaurar la bioelectricidad y la dinámica térmica del organismo.
        </p>
        <p>
          La elección de la Artemisa no es casual. Esta planta medicinal posee propiedades únicas: una vez procesada y envejecida, su combustión genera un espectro de radiación infrarroja que penetra en los tejidos profundos de manera que el calor superficial no puede igualar.
        </p>
        <p>
          Sus aceites esenciales y resinas actúan de forma sinérgica, facilitando una respuesta biológica y celular inmediata para revitalizar órganos debilitados.
        </p>
      </>
    ),
    benefitsTitle: 'Mecanismos de Acción',
    benefits: [
      { title: 'Tonificación del Yang', desc: 'Es la herramienta por excelencia para recuperar la energía vital ante cuadros de agotamiento crónico o frío interno sostenido.' },
      { title: 'Expulsión de Factores Patógenos', desc: 'Altamente eficaz para disolver el "Frío" y la "Humedad" estancada en las articulaciones y los huesos.' },
      { title: 'Activación de la Sangre (Xue)', desc: 'Rompe el estancamiento sanguíneo profundo, promoviendo una circulación fluida que nutre los tejidos dañados.' }
    ],
    outroTitle: 'Perspectiva Científica',
    outro: 'Clínicamente incrementa el flujo sanguíneo (efecto vasodilatador), eleva la producción de glóbulos blancos (modulación inmunitaria) y reduce la inflamación celular elevando el umbral del dolor.'
  }
];

const Services: React.FC = () => {
  useEffect(() => {
    // Animaciones de revelado suave al hacer scroll
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 50 }, 
          {
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            ease: 'power3.out',
            scrollTrigger: { 
              trigger: el, 
              start: 'top 85%', 
              toggleActions: 'play none none reverse' 
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Ajuste para el Navbar flotante
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = (elementRect - bodyRect) - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="bg-bg-base text-text-main min-h-screen w-full overflow-hidden pb-20 transition-colors duration-600">
      <SEO 
        title="Nuestros Servicios" 
        description="Especialistas en Medicina Tradicional China, Coaching Transformacional y Terapias Energéticas para un bienestar integral." 
      />
      <PageHeader title="SERVICIOS" breadcrumb="Servicios">
        <nav className="flex flex-col gap-3 mt-8 md:mt-0">
          <a 
            href="#medicina-tradicional-china" 
            onClick={(e) => scrollToSection(e, 'medicina-tradicional-china')}
            className="group flex items-center md:justify-end gap-3 text-xs tracking-[0.15em] uppercase text-text-muted/60 hover:text-text-main transition-all outline-none"
            data-hoverable="true"
          >
            <span>Medicina Tradicional China</span>
            <span className="w-1.5 h-1.5 bg-accent-sage rounded-full group-hover:scale-150 transition-transform"></span>
          </a>
          <a 
            href="#coaching-transformacional" 
            onClick={(e) => scrollToSection(e, 'coaching-transformacional')}
            className="group flex items-center md:justify-end gap-3 text-xs tracking-[0.15em] uppercase text-text-muted/60 hover:text-text-main transition-all outline-none"
            data-hoverable="true"
          >
            <span>Coaching Transformacional</span>
            <span className="w-1.5 h-1.5 bg-accent-gold rounded-full group-hover:scale-150 transition-transform"></span>
          </a>
          <a 
            href="#terapias-energeticas" 
            onClick={(e) => scrollToSection(e, 'terapias-energeticas')}
            className="group flex items-center md:justify-end gap-3 text-xs tracking-[0.15em] uppercase text-text-muted/60 hover:text-text-main transition-all outline-none"
            data-hoverable="true"
          >
            <span>Terapias Energéticas</span>
            <span className="w-1.5 h-1.5 bg-accent-sage/60 rounded-full group-hover:scale-150 transition-transform"></span>
          </a>
        </nav>
      </PageHeader>

      {/* BLOQUE 1: MEDICINA TRADICIONAL CHINA */}
      <section id="medicina-tradicional-china" className="relative py-24 md:py-32 scroll-mt-24">
        {/* Decoración de fondo */}
        <div className="orb w-[500px] h-[500px] bg-accent-sage top-40 -left-48 parallax-layer z-0 opacity-10" data-speed="0.02"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-32 reveal-up">
            <h2 className="section-heading text-[clamp(2rem,5vw,4rem)] mb-6">
              Medicina <span className="italic text-accent-sage">Tradicional</span> China
            </h2>
            <div className="organic-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-sage/60">Restaurando el flujo de energía</p>
          </div>

          <div className="flex flex-col gap-32 md:gap-48">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="block scroll-mt-32 w-full"
                >
                  {/* Etiqueta Superior */}
                  <div className="flex items-center gap-3 mb-6 reveal-up">
                     <div className="h-[1px] w-12 bg-gradient-to-r from-accent-gold to-transparent"></div>
                     <span className="text-[0.65rem] tracking-[0.4em] uppercase text-accent-gold/80">Terapia Holística</span>
                  </div>
                  
                  {/* Título */}
                  <h3 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-none text-text-main mb-10 reveal-up">
                    {service.title}
                  </h3>

                  {/* Contenedor Principal Editorial */}
                  <div className="block w-full relative">
                    
                    {/* Imagen Flotante sin overlays claros para evitar palidez (Overlays oscuros estáticos) */}
                    <div className={`relative z-20 w-full md:w-[45vw] lg:w-[500px] mb-12 md:mb-10 reveal-up ${isEven ? 'md:float-left md:mr-10' : 'md:float-right md:ml-10'}`}>
                      <div className="relative group block">
                        {/* Marco desplazado */}
                        <div className="absolute inset-0 border border-accent-sage/40 rounded-3xl translate-x-4 translate-y-4 z-0 transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-6"></div>
                        <div className="relative z-10 about-image-container rounded-3xl shadow-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px]">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover grayscale-[20%] transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                            loading="lazy"
                          />
                          {/* El gradiente oscuro sobre la imagen es fijo para conservar profundidad y calidad */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-[#0a0a08]/10 to-transparent opacity-60 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    {/* Texto Introductorio (Envuelve la imagen) */}
                    <div className="relative z-10 space-y-6 text-text-muted/80 text-base lg:text-lg leading-relaxed reveal-up">
                      {service.intro}
                    </div>

                    {/* Tarjeta Glassmorphism */}
                    <div className="relative z-10 glass-card clear-both mt-16 lg:mt-20 p-8 lg:p-12 reveal-up">
                      <h4 className="font-serif text-text-main text-2xl lg:text-3xl mb-6">{service.benefitsTitle}</h4>
                      <div className="gold-line mb-8"></div>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex flex-col">
                            <span className="text-accent-gold font-serif italic text-xl lg:text-2xl mb-2">🌿 {benefit.title}</span>
                            <span className="text-text-muted/60 text-sm leading-relaxed">{benefit.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Texto de Cierre (Outro) */}
                    <div className="mt-10 reveal-up max-w-4xl relative z-10">
                      <h4 className="font-serif text-xl lg:text-2xl text-text-main mb-4">{service.outroTitle}</h4>
                      <p className="italic border-l-2 border-accent-sage pl-5 text-text-muted/70 leading-relaxed">
                        {service.outro}
                      </p>
                    </div>

                    {/* Botón de Acción */}
                    <div className="mt-10 reveal-up relative z-10">
                      <button className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-text-main border border-accent-sage/30 px-8 py-4 rounded-full hover:bg-accent-sage/10 hover:border-accent-sage/60 transition-all duration-300" data-hoverable="true">
                        Agendar Sesión de {service.title}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOQUE 2: COACHING TRANSFORMACIONAL */}
      <section id="coaching-transformacional" className="relative py-24 md:py-32 border-t border-text-main/5 scroll-mt-24">
        <div className="orb w-[500px] h-[500px] bg-accent-gold -top-24 -right-24 parallax-layer z-0 opacity-10" data-speed="0.03"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 reveal-up">
            <h2 className="section-heading text-[clamp(2rem,5vw,4rem)] mb-4">
              Coaching <span className="italic text-accent-gold">Transformacional</span>
            </h2>
            <div className="organic-divider max-w-md mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-gold/60">Reconfiguración Subconsciente</p>
          </div>

          <div className="glass-card p-8 md:p-16 reveal-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <p className="text-xl text-text-main font-serif leading-relaxed mb-8 italic border-l-2 border-accent-gold pl-6">
                  Un espacio diseñado para personas que se encuentran en un punto de inflexión vital, buscando superar miedos limitantes y autosabotaje.
                </p>
                
                <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed">
                  <h4 className="font-serif text-2xl text-text-main pt-4">La Fusión de Cuatro Pilares</h4>
                  <div className="gold-line mb-6"></div>
                  
                  <ul className="space-y-8 !pl-0">
                    <li className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 border border-accent-gold/30 rounded-full flex items-center justify-center text-accent-gold">
                        <Check size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <strong className="text-text-main block text-lg font-serif mb-2">Coaching Estratégico</strong>
                        Aporto experiencia en gestión y dirección para ofrecerte estructura y objetivos. No solo hablamos de sueños; trazamos planes de acción realistas.
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 border border-accent-gold/30 rounded-full flex items-center justify-center text-accent-gold">
                        <Check size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <strong className="text-text-main block text-lg font-serif mb-2">Reprogramación Subconsciente</strong>
                        El subconsciente rige el 95% de nuestras conductas. Eliminamos bloqueos emocionales y grabamos nuevas creencias de forma rápida.
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 border border-accent-gold/30 rounded-full flex items-center justify-center text-accent-gold">
                        <Check size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <strong className="text-text-main block text-lg font-serif mb-2">Maestría Energética</strong>
                        Entendemos que tu capacidad de logro depende de tu nivel de coherencia energética. Liberamos traumas antiguos que bloquean tu fuerza.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="about-image-container rounded-3xl shadow-xl">
                  <img src="https://picsum.photos/600/800?image=66" alt="Coaching Session" className="w-full h-[400px] object-cover grayscale-[20%]" />
                </div>
                
                {/* Caja de áreas de trabajo adaptativa */}
                <div className="bg-text-main/5 border border-text-main/10 p-8 rounded-3xl">
                  <h4 className="font-serif text-xl text-text-main mb-4">Áreas de trabajo</h4>
                  <ul className="space-y-4 text-sm text-text-muted/80">
                    <li><strong className="text-accent-gold">● Emprendimiento:</strong> Síndrome del impostor.</li>
                    <li><strong className="text-accent-gold">● Autoestima:</strong> Autocrítica y desvalorización.</li>
                    <li><strong className="text-accent-gold">● Transiciones:</strong> Rupturas, duelos o cambios.</li>
                    <li><strong className="text-accent-gold">● Fobias:</strong> Desactivar respuestas de miedo.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-text-main/10">
              <div className="max-w-3xl">
                <h4 className="font-serif text-2xl text-text-main mb-6">¿Cómo es una sesión?</h4>
                <p className="text-text-muted/80 leading-relaxed text-sm md:text-base mb-10">
                  A través de la comunicación con el subconsciente (test muscular) y técnicas de integración cerebral, identificamos los obstáculos invisibles y los desactivamos en la misma sesión. Sales con el permiso y la capacidad real de ejecutar tus cambios.
                </p>
                {/* Botón adaptado a base para contraste impecable */}
                <button className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-bg-base bg-gradient-to-r from-accent-sage to-accent-gold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 font-bold" data-hoverable="true">
                  Agendar Mentoría
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: TERAPIAS ENERGÉTICAS */}
      <section id="terapias-energeticas" className="relative py-24 md:py-32 border-t border-text-main/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 reveal-up">
            <h2 className="section-heading text-[clamp(2rem,5vw,4rem)] mb-4">
              Terapias <span className="italic text-accent-sage">Energéticas</span>
            </h2>
            <div className="organic-divider max-w-xs mx-auto mb-6"></div>
          </div>
          <div className="glass-card border border-dashed border-text-main/10 rounded-3xl p-20 flex flex-col items-center justify-center text-center reveal-up">
            <div className="text-accent-sage/40 mb-6">
              <Check size={48} strokeWidth={1} />
            </div>
            <p className="text-text-muted/80 text-lg md:text-xl font-serif italic">
              Próximamente estaremos detallando nuestros servicios de equilibrio energético.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;