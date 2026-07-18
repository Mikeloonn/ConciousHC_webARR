import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import { Check, Leaf, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 1. ESTRUCTURA DE DATOS MEDICINA TRADICIONAL CHINA
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
      { title: 'Alivio del dolor', desc: 'Es especialmente eficaz en dolores musculares y articulares, cervicalgias, lumbalgias, migrañas, ciáticas, lesiones deportivas y dolores crónicos.' },
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
    id: 'ventosas-cupping',
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

// 2. SUB-MENÚ DE COACHING (Para el índice del PageHeader)
const coachingSubItems = [
  { id: 'coaching-pilares', title: 'Cuatro Pilares' },
  { id: 'coaching-areas', title: 'Áreas de trabajo' },
  { id: 'coaching-sesion', title: '¿Cómo es una sesión?' }
];

// 3. ESTRUCTURA DE DATOS TERAPIAS ENERGÉTICAS
const energeticasData = [
  {
    id: 'pendulo-hebreo',
    title: 'Péndulo Hebreo',
    image: IMAGES.energeticas.penduloHebreo,
    intro: (
      <>
        <p>
          El Péndulo Hebreo es una herramienta de trabajo energético que utiliza etiquetas en hebreo para detectar, liberar y armonizar bloqueos en el campo energético de la persona.
        </p>
        <p>
          A través de esta técnica se puede trabajar la limpieza energética, la armonización de chakras, el desbloqueo emocional, la protección energética, el cierre de ciclos y la reprogramación de patrones que pueden estar interfiriendo en el bienestar personal.
        </p>
        <p>
          Mi formación en Péndulo Hebreo está realizada en la Escuela Internacional de Péndulo Hebreo de Cristina Vicente, integrando protocolos de trabajo profundo, ordenado y respetuoso.
        </p>
      </>
    ),
    benefitsTitle: 'Programa Reseteo Energético',
    benefits: [
      { title: 'Reprogramación', desc: 'Libera bloqueos, cargas, memorias o patrones para abrir espacio a una energía más clara y coherente.' },
      { title: 'Alineación de chakras', desc: 'Revisa y favorece una mayor armonía entre cuerpo, emoción, mente y energía. Aporta calma y ligereza.' },
      { title: 'Sellado áurico', desc: 'Ayuda a fortalecer y proteger el campo energético después del proceso de limpieza y armonización.' }
    ],
    outroTitle: 'Sesiones Complementarias',
    outro: 'Según el proceso, se pueden realizar sesiones de Ataduras del Pasado, Misil de Luz o Limpieza energética de espacios (presencial o a distancia).'
  },
  {
    id: 'sanacion-cuantica',
    title: 'Sanación Cuántica y Sintergética',
    image: IMAGES.energeticas.sanacionCuantica,
    intro: (
      <>
        <p>
          La Sanación Cuántica, la Sintergética y las técnicas de "Manos para Sanar" permiten acompañar a la persona desde una mirada integrativa, considerando la estrecha relación entre cuerpo, energía, emoción, mente y conciencia.
        </p>
        <p>
          Son sesiones suaves, respetuosas y no invasivas, orientadas a favorecer la coherencia interna, la profunda calma, la conexión personal y la capacidad natural de autorregulación de tu organismo.
        </p>
      </>
    ),
    benefitsTitle: '¿Cuándo se recomiendan?',
    benefits: [
      { title: 'Momentos de Estrés', desc: 'Ideal para reducir el estrés, el agotamiento acumulado y la fatiga física o mental crónica.' },
      { title: 'Procesos Emocionales', desc: 'Acompañamiento sutil en etapas de cambios personales, duelos, separaciones o procesos intensos.' },
      { title: 'Agotamiento Profundo', desc: 'Recomendado cuando sientes falta de energía, desconexión interior o dificultad para avanzar.' }
    ],
    outroTitle: 'Acompañamiento sutil y profundo',
    outro: 'Una terapia no invasiva perfecta cuando la persona siente que necesita un soporte más compasivo, profundo y consciente para recuperar su bienestar.'
  },
  {
    id: 'biomagnetismo',
    title: 'Biomagnetismo Cuántico',
    image: IMAGES.energeticas.biomagnetismo,
    intro: (
      <>
        <p>
          El Biomagnetismo Cuántico y el Par Biomagnético se utilizan como potentes herramientas energéticas complementarias mediante la aplicación de imanes en puntos específicos del cuerpo.
        </p>
        <p>
          En mi consulta lo integro desde una mirada sumamente prudente y personalizada, actuando como un sólido apoyo al equilibrio bioenergético y al bienestar general de la persona.
        </p>
      </>
    ),
    benefitsTitle: 'Apoyo Bioenergético',
    benefits: [
      { title: 'Equilibrio General', desc: 'Sirve como apoyo integral para recuperar la vitalidad, armonía y el equilibrio natural del organismo.' },
      { title: 'Herramienta Complementaria', desc: 'Se integra estratégicamente en la sesión sin generar dolor ni molestias físicas.' },
      { title: 'Enfoque Prudente', desc: 'Siempre se trabaja respetando el proceso y las indicaciones sanitarias que cada persona pueda estar siguiendo.' }
    ],
    outroTitle: 'Aviso Importante',
    outro: 'Esta terapia no sustituye un diagnóstico ni un tratamiento médico o psicológico. Se ofrece como acompañamiento complementario para favorecer tu bienestar.'
  }
];

const Services: React.FC = () => {
  // Estado para controlar qué acordeón está abierto
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

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

  // Función para abrir/cerrar el menú en el Header
  const toggleMenu = (e: React.MouseEvent<HTMLAnchorElement>, menuId: string) => {
    e.preventDefault();
    setExpandedMenu(prev => prev === menuId ? null : menuId);
  };

  // Función para scrollear a la sección específica y cerrar el menú
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setExpandedMenu(null); // Al dar click en un enlace, contraemos el menú de nuevo
    
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
          title="Medicina China y Terapias Holísticas en Málaga"
          description="Acupuntura, auriculoterapia, moxibustión, ventosas, fitoterapia, masaje tuina, coaching y terapias energéticas en Torremolinos, Málaga."
        />
      <PageHeader title="SERVICIOS" breadcrumb="Servicios">
        
        {/* Usamos h-[120px] fijo. Al ocultar 2 items, liberamos espacio para el acordeón 
            con scroll, evitando al 100% que el título de la página salte. */}
        <nav className="flex flex-col gap-4 mt-8 lg:mt-0 w-full lg:w-auto h-[120px] justify-start lg:justify-end">
          
          {/* MENU 1: MEDICINA TRADICIONAL CHINA */}
          <div className={`flex-col lg:items-end w-full ${expandedMenu && expandedMenu !== 'mtc' ? 'hidden' : 'flex'}`}>
            <a
              href="#medicina-tradicional-china"
              onClick={(e) => toggleMenu(e, 'mtc')}
              className="group flex items-center justify-start lg:justify-end gap-3 text-xs tracking-[0.15em] uppercase text-[#e8ebe3]/70 hover:text-[#e8ebe3] transition-all outline-none text-shadow-subtle w-full cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span>Medicina Tradicional China</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${expandedMenu === 'mtc' ? 'rotate-180 text-[#b3bda3]' : ''}`} />
              </div>
              <span className="w-1.5 h-1.5 bg-[#b3bda3] rounded-full group-hover:scale-150 transition-transform shadow-[0_0_5px_rgba(179,189,163,0.8)] shrink-0"></span>
            </a>
            
            {/* Dropdown MTC con scroll (max-h-[95px]) */}
            <div className={`grid transition-all duration-500 ease-in-out w-full lg:w-auto ${expandedMenu === 'mtc' ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
              <div className="overflow-hidden">
                <div className="overflow-y-auto max-h-[95px] flex flex-col gap-3 text-left lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-[#b3bda3]/40 pl-4 lg:pl-0 lg:pr-4 ml-1 lg:ml-0 lg:mr-1.5 py-1 pr-2">
                  {servicesData.map(service => (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      onClick={(e) => scrollToSection(e, service.id)}
                      className="text-[10px] tracking-[0.15em] uppercase text-[#e8ebe3]/60 hover:text-[#e8ebe3] transition-colors cursor-pointer text-shadow-subtle"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MENU 2: COACHING TRANSFORMACIONAL */}
          <div className={`flex-col lg:items-end w-full ${expandedMenu && expandedMenu !== 'coaching' ? 'hidden' : 'flex'}`}>
            <a
              href="#coaching-transformacional"
              onClick={(e) => toggleMenu(e, 'coaching')}
              className="group flex items-center justify-start lg:justify-end gap-3 text-xs tracking-[0.15em] uppercase text-[#e8ebe3]/70 hover:text-[#e8ebe3] transition-all outline-none text-shadow-subtle w-full cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span>Coaching Transformacional</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${expandedMenu === 'coaching' ? 'rotate-180 text-[#df9e53]' : ''}`} />
              </div>
              <span className="w-1.5 h-1.5 bg-[#df9e53] rounded-full group-hover:scale-150 transition-transform shadow-[0_0_5px_rgba(223,158,83,0.8)] shrink-0"></span>
            </a>

            {/* Dropdown Coaching con scroll (max-h-[95px]) */}
            <div className={`grid transition-all duration-500 ease-in-out w-full lg:w-auto ${expandedMenu === 'coaching' ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
              <div className="overflow-hidden">
                <div className="overflow-y-auto max-h-[95px] flex flex-col gap-3 text-left lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-[#df9e53]/40 pl-4 lg:pl-0 lg:pr-4 ml-1 lg:ml-0 lg:mr-1.5 py-1 pr-2">
                  {coachingSubItems.map(item => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className="text-[10px] tracking-[0.15em] uppercase text-[#e8ebe3]/60 hover:text-[#e8ebe3] transition-colors cursor-pointer text-shadow-subtle"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MENU 3: TERAPIAS ENERGÉTICAS */}
          <div className={`flex-col lg:items-end w-full ${expandedMenu && expandedMenu !== 'energeticas' ? 'hidden' : 'flex'}`}>
            <a
              href="#terapias-energeticas"
              onClick={(e) => toggleMenu(e, 'energeticas')}
              className="group flex items-center justify-start lg:justify-end gap-3 text-xs tracking-[0.15em] uppercase text-[#e8ebe3]/70 hover:text-[#e8ebe3] transition-all outline-none text-shadow-subtle w-full cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span>Terapias Energéticas</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${expandedMenu === 'energeticas' ? 'rotate-180 text-[#b3bda3]' : ''}`} />
              </div>
              <span className="w-1.5 h-1.5 bg-[#b3bda3] rounded-full group-hover:scale-150 transition-transform shadow-[0_0_5px_rgba(179,189,163,0.8)] shrink-0"></span>
            </a>

            {/* Dropdown Energéticas con scroll (max-h-[95px]) */}
            <div className={`grid transition-all duration-500 ease-in-out w-full lg:w-auto ${expandedMenu === 'energeticas' ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
              <div className="overflow-hidden">
                <div className="overflow-y-auto max-h-[95px] flex flex-col gap-3 text-left lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-[#b3bda3]/40 pl-4 lg:pl-0 lg:pr-4 ml-1 lg:ml-0 lg:mr-1.5 py-1 pr-2">
                  {energeticasData.map(service => (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      onClick={(e) => scrollToSection(e, service.id)}
                      className="text-[10px] tracking-[0.15em] uppercase text-[#e8ebe3]/60 hover:text-[#e8ebe3] transition-colors cursor-pointer text-shadow-subtle"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
                            <div className="flex items-center gap-2 mb-2">
                              <Leaf size={22} className="text-accent-sage shrink-0" fill="currentColor" />
                              <span className="text-accent-gold font-serif italic text-xl lg:text-2xl">{benefit.title}</span>
                            </div>
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

                    {/* Botón de Acción con Link - EFECTO ANIMADO */}
                    <div className="mt-10 reveal-up relative z-10">
                      <Link 
                        to="/contact" 
                        className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full border border-text-main/30 overflow-hidden transition-all duration-300"
                      >
                        {/* Fondo animado que se carga de izquierda a derecha */}
                        <div className="absolute inset-0 w-full h-full bg-accent-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                        
                        {/* Texto que cambia de color para contrastar con el fondo dorado */}
                        <span className="relative z-10 text-xs tracking-[0.2em] uppercase text-text-main group-hover:text-bg-base font-bold transition-colors duration-500">
                          Agendar Sesión de {service.title}
                        </span>
                      </Link>
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
                  <h4 id="coaching-pilares" className="font-serif text-2xl text-text-main pt-4 scroll-mt-32">La Fusión de Cuatro Pilares</h4>
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
                  <img src={IMAGES.coaching} alt="Sesión de coaching transformacional en Málaga" className="w-full h-[400px] object-cover grayscale-[20%]" />
                </div>

                {/* Caja de áreas de trabajo adaptativa */}
                <div className="bg-text-main/5 border border-text-main/10 p-8 rounded-3xl">
                  <h4 id="coaching-areas" className="font-serif text-xl text-text-main mb-4 scroll-mt-32">Áreas de trabajo</h4>
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
                <h4 id="coaching-sesion" className="font-serif text-2xl text-text-main mb-6 scroll-mt-32">¿Cómo es una sesión?</h4>
                <p className="text-text-muted/80 leading-relaxed text-sm md:text-base mb-10">
                  A través de la comunicación con el subconsciente (test muscular) y técnicas de integración cerebral, identificamos los obstáculos invisibles y los desactivamos en la misma sesión. Sales con el permiso y la capacidad real de ejecutar tus cambios.
                </p>
                
                {/* Botón con Link - EFECTO ANIMADO */}
                <Link 
                  to="/contact" 
                  className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full border border-text-main/30 overflow-hidden transition-all duration-300"
                >
                  {/* Fondo animado que se carga de izquierda a derecha */}
                  <div className="absolute inset-0 w-full h-full bg-accent-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                  
                  {/* Texto que cambia de color para contrastar con el fondo dorado */}
                  <span className="relative z-10 text-xs tracking-[0.2em] uppercase text-text-main group-hover:text-bg-base font-bold transition-colors duration-500">
                    Agendar Mentoría
                  </span>
                </Link>
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
              Terapias <span className="italic text-accent-sage">Energéticas</span> e Integrativas
            </h2>
            <div className="organic-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-sage/60">Recupera tu equilibrio, calma y claridad</p>
          </div>

          {/* INTRODUCCIÓN GENERAL */}
          <div className="glass-card p-8 md:p-14 mb-24 reveal-up">
            <p className="text-xl text-text-main font-serif leading-relaxed mb-6 italic border-l-2 border-accent-sage pl-6">
              Las terapias energéticas son un espacio de acompañamiento profundo para personas que desean recuperar equilibrio, calma, claridad interior y conexión consigo mismas.
            </p>
            <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed mb-10">
              <p>
                A veces el malestar no se expresa únicamente en el cuerpo. También puede sentirse como cansancio emocional, bloqueo, ansiedad, sensación de carga, dificultad para avanzar, pensamientos repetitivos, tristeza, falta de energía o desconexión interna.
              </p>
              <p>
                En mi consulta trabajo con diferentes herramientas energéticas e integrativas que permiten acompañar estos procesos de forma personalizada, respetuosa y consciente. Cada sesión se adapta al momento de la persona, a su historia, a su sensibilidad y al objetivo que desea trabajar.
              </p>
            </div>

            <h4 className="font-serif text-2xl text-text-main mb-6 pt-4 border-t border-text-main/10">¿Para quién están recomendadas?</h4>
            <p className="text-text-muted/80 text-sm md:text-base mb-6">Las terapias energéticas pueden acompañarte si sientes:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-muted/80 text-sm md:text-base mb-8">
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> Cansancio físico, mental o emocional.</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> Estrés, ansiedad o sensación de saturación.</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> Bloqueos personales o dificultad para avanzar.</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> Etapas de cambio, duelo, separación o transformación.</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> Sensación de carga energética o ambientes densos.</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> Necesidad de cerrar ciclos del pasado.</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> Falta de claridad, dispersión o desconexión interior.</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> Deseo de armonizar tu energía y recuperar equilibrio.</li>
            </ul>
            <p className="text-xs text-text-muted/50 italic bg-text-main/5 p-4 rounded-xl border border-text-main/10">
              * Este trabajo no sustituye un tratamiento médico, psicológico o psiquiátrico cuando sea necesario. Se ofrece como acompañamiento complementario para favorecer tu bienestar, tu calma y tu proceso personal.
            </p>
          </div>

          {/* LISTA DE TERAPIAS ENERGÉTICAS (DISEÑO REVISTA) */}
          <div className="flex flex-col gap-32 md:gap-48">
            {energeticasData.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} id={service.id} className="block scroll-mt-32 w-full">
                  <div className="flex items-center gap-3 mb-6 reveal-up">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-accent-sage to-transparent"></div>
                    <span className="text-[0.65rem] tracking-[0.4em] uppercase text-accent-sage/80">Herramienta Energética</span>
                  </div>

                  <h3 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-none text-text-main mb-10 reveal-up">
                    {service.title}
                  </h3>

                  <div className="block w-full relative">
                    <div className={`relative z-20 w-full md:w-[45vw] lg:w-[500px] mb-12 md:mb-10 reveal-up ${isEven ? 'md:float-left md:mr-10' : 'md:float-right md:ml-10'}`}>
                      <div className="relative group block">
                        <div className="absolute inset-0 border border-accent-sage/40 rounded-3xl translate-x-4 translate-y-4 z-0 transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-6"></div>
                        <div className="relative z-10 about-image-container rounded-3xl shadow-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px]">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover grayscale-[20%] transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-[#0a0a08]/10 to-transparent opacity-60 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 space-y-6 text-text-muted/80 text-base lg:text-lg leading-relaxed reveal-up">
                      {service.intro}
                    </div>

                    <div className="relative z-10 glass-card clear-both mt-16 lg:mt-20 p-8 lg:p-12 reveal-up">
                      <h4 className="font-serif text-text-main text-2xl lg:text-3xl mb-6">{service.benefitsTitle}</h4>
                      <div className="gold-line mb-8"></div>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex flex-col">
                            <span className="text-accent-sage font-serif italic text-xl lg:text-2xl mb-2">✦ {benefit.title}</span>
                            <span className="text-text-muted/60 text-sm leading-relaxed">{benefit.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-10 reveal-up max-w-4xl relative z-10">
                      <h4 className="font-serif text-xl lg:text-2xl text-text-main mb-4">{service.outroTitle}</h4>
                      <p className="italic border-l-2 border-accent-sage pl-5 text-text-muted/70 leading-relaxed">
                        {service.outro}
                      </p>
                    </div>
                    
                    {/* Botón de Acción con Link */}
                    <div className="mt-10 reveal-up relative z-10">
                      <Link 
                        to="/contact" 
                        className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full border border-text-main/30 overflow-hidden transition-all duration-300"
                      >
                        {/* Fondo animado que se carga de izquierda a derecha */}
                        <div className="absolute inset-0 w-full h-full bg-accent-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                        
                        {/* Texto que cambia de color para contrastar con el fondo dorado */}
                        <span className="relative z-10 text-xs tracking-[0.2em] uppercase text-text-main group-hover:text-bg-base font-bold transition-colors duration-500">
                          Agendar Sesión de {service.title}
                        </span>
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* METODOLOGÍA FINAL (CIERRE DE SECCIÓN) */}
          <div className="glass-card p-8 md:p-14 mt-32 reveal-up bg-text-main/5 border-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="font-serif text-2xl text-text-main mb-6">¿Cómo es una sesión?</h4>
                <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-4">
                  Primero conversamos sobre el motivo de consulta y el objetivo que deseas trabajar. Después realizo una valoración energética y aplico la técnica más adecuada según tu caso.
                </p>
                <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                  Al finalizar, te explico de forma sencilla qué se ha trabajado y qué puedes observar en los días posteriores. Cada sesión se realiza con respeto, cuidado y confidencialidad. Mi objetivo es acompañarte para que puedas sentirte con más calma, claridad y equilibrio en tu proceso.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-text-main mb-6">Mi forma de trabajar</h4>
                <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-4">
                  Trabajo desde una visión integrativa: cuerpo, mente, emoción y energía forman parte de una misma historia. Por eso, cada persona necesita un acompañamiento único.
                </p>
                <p className="text-text-main text-sm md:text-base leading-relaxed font-medium bg-gradient-to-r from-accent-sage/20 to-transparent p-4 rounded-xl border-l-2 border-accent-sage">
                  No trabajo con promesas ni soluciones mágicas. Trabajo con presencia, escucha, experiencia y herramientas que ayudan a ordenar, liberar y fortalecer tu energía de forma consciente.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-text-muted/80 mb-6 italic">Si sientes que estás en un momento de cambio, bloqueo o cansancio interno, estas terapias pueden ayudarte a reconectar contigo y avanzar con más claridad.</p>
              <Link to="/contact" className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-bg-base bg-gradient-to-r from-accent-sage to-accent-gold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 font-bold" data-hoverable="true">
                Agendar Acompañamiento
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Services;