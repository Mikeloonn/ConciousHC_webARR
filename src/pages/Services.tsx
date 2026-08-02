import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import { Check, Leaf, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const { t } = useTranslation();
  // Estado para controlar qué acordeón está abierto
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  // 1. ESTRUCTURA DE DATOS MEDICINA TRADICIONAL CHINA
  const servicesData = [
    {
      id: 'acupuntura',
      title: t('nav.subAcupuntura'),
      image: IMAGES.services.acupuntura,
      intro: (
        <>
          <p>{t('services.intro_acupuntura_p1')}</p>
          <p>{t('services.intro_acupuntura_p2')}</p>
          <p>{t('services.intro_acupuntura_p3')}</p>
        </>
      ),
      benefitsTitle: t('services.benefitsTitle_acupuntura'),
      benefits: [
        { title: t('services.benefit_acupuntura_1_title'), desc: t('services.benefit_acupuntura_1_desc') },
        { title: t('services.benefit_acupuntura_2_title'), desc: t('services.benefit_acupuntura_2_desc') },
        { title: t('services.benefit_acupuntura_3_title'), desc: t('services.benefit_acupuntura_3_desc') }
      ],
      outroTitle: t('services.outroTitle_acupuntura'),
      outro: t('services.outro_acupuntura')
    },
    {
      id: 'auriculoterapia',
      title: t('nav.subAuriculoterapia'),
      image: IMAGES.services.auriculoterapia,
      intro: (
        <>
          <p>{t('services.intro_auriculoterapia_p1')}</p>
          <p>{t('services.intro_auriculoterapia_p2')}</p>
          <p>{t('services.intro_auriculoterapia_p3')}</p>
        </>
      ),
      benefitsTitle: t('services.benefitsTitle_auriculoterapia'),
      benefits: [
        { title: t('services.benefit_auriculoterapia_1_title'), desc: t('services.benefit_auriculoterapia_1_desc') },
        { title: t('services.benefit_auriculoterapia_2_title'), desc: t('services.benefit_auriculoterapia_2_desc') },
        { title: t('services.benefit_auriculoterapia_3_title'), desc: t('services.benefit_auriculoterapia_3_desc') }
      ],
      outroTitle: t('services.outroTitle_auriculoterapia'),
      outro: t('services.outro_auriculoterapia')
    },
    {
      id: 'fitoterapia',
      title: t('nav.subFitoterapia'),
      image: IMAGES.services.fitoterapia,
      intro: (
        <>
          <p>{t('services.intro_fitoterapia_p1')}</p>
          <p>{t('services.intro_fitoterapia_p2')}</p>
          <p>{t('services.intro_fitoterapia_p3')}</p>
        </>
      ),
      benefitsTitle: t('services.benefitsTitle_fitoterapia'),
      benefits: [
        { title: t('services.benefit_fitoterapia_1_title'), desc: t('services.benefit_fitoterapia_1_desc') },
        { title: t('services.benefit_fitoterapia_2_title'), desc: t('services.benefit_fitoterapia_2_desc') },
        { title: t('services.benefit_fitoterapia_3_title'), desc: t('services.benefit_fitoterapia_3_desc') }
      ],
      outroTitle: t('services.outroTitle_fitoterapia'),
      outro: t('services.outro_fitoterapia')
    },
    {
      id: 'ventosas-cupping',
      title: t('nav.subVentosas'),
      image: IMAGES.services.ventosas,
      intro: (
        <>
          <p>{t('services.intro_ventosas_p1')}</p>
          <p>{t('services.intro_ventosas_p2')}</p>
          <p>{t('services.intro_ventosas_p3')}</p>
        </>
      ),
      benefitsTitle: t('services.benefitsTitle_ventosas'),
      benefits: [
        { title: t('services.benefit_ventosas_1_title'), desc: t('services.benefit_ventosas_1_desc') },
        { title: t('services.benefit_ventosas_2_title'), desc: t('services.benefit_ventosas_2_desc') },
        { title: t('services.benefit_ventosas_3_title'), desc: t('services.benefit_ventosas_3_desc') }
      ],
      outroTitle: t('services.outroTitle_ventosas'),
      outro: t('services.outro_ventosas')
    },
    {
      id: 'masaje-tuina',
      title: t('nav.subTuina'),
      image: IMAGES.services.tuina,
      intro: (
        <>
          <p>{t('services.intro_tuina_p1')}</p>
          <p>{t('services.intro_tuina_p2')}</p>
          <p>{t('services.intro_tuina_p3')}</p>
        </>
      ),
      benefitsTitle: t('services.benefitsTitle_tuina'),
      benefits: [
        { title: t('services.benefit_tuina_1_title'), desc: t('services.benefit_tuina_1_desc') },
        { title: t('services.benefit_tuina_2_title'), desc: t('services.benefit_tuina_2_desc') },
        { title: t('services.benefit_tuina_3_title'), desc: t('services.benefit_tuina_3_desc') }
      ],
      outroTitle: t('services.outroTitle_tuina'),
      outro: t('services.outro_tuina')
    },
    {
      id: 'moxibustion',
      title: t('nav.subMoxibustion'),
      image: IMAGES.services.moxibustion,
      intro: (
        <>
          <p>{t('services.intro_moxibustion_p1')}</p>
          <p>{t('services.intro_moxibustion_p2')}</p>
          <p>{t('services.intro_moxibustion_p3')}</p>
        </>
      ),
      benefitsTitle: t('services.benefitsTitle_moxibustion'),
      benefits: [
        { title: t('services.benefit_moxibustion_1_title'), desc: t('services.benefit_moxibustion_1_desc') },
        { title: t('services.benefit_moxibustion_2_title'), desc: t('services.benefit_moxibustion_2_desc') },
        { title: t('services.benefit_moxibustion_3_title'), desc: t('services.benefit_moxibustion_3_desc') }
      ],
      outroTitle: t('services.outroTitle_moxibustion'),
      outro: t('services.outro_moxibustion')
    }
  ];

  // 2. SUB-MENÚ DE COACHING (Para el índice del PageHeader)
  const coachingSubItems = [
    { id: 'coaching-pilares', title: t('services.coachingSubItem_pilares') },
    { id: 'coaching-areas', title: t('services.coachingSubItem_areas') },
    { id: 'coaching-sesion', title: t('services.coachingSubItem_sesion') }
  ];

  // 3. ESTRUCTURA DE DATOS TERAPIAS ENERGÉTICAS
  const energeticasData = [
    {
      id: 'pendulo-hebreo',
      title: t('nav.subPendulo'),
      image: IMAGES.energeticas.penduloHebreo,
      intro: (
        <>
          <p>{t('services.intro_pendulo_p1')}</p>
          <p>{t('services.intro_pendulo_p2')}</p>
          <p>{t('services.intro_pendulo_p3')}</p>
        </>
      ),
      benefitsTitle: t('services.benefitsTitle_pendulo'),
      benefits: [
        { title: t('services.benefit_pendulo_1_title'), desc: t('services.benefit_pendulo_1_desc') },
        { title: t('services.benefit_pendulo_2_title'), desc: t('services.benefit_pendulo_2_desc') },
        { title: t('services.benefit_pendulo_3_title'), desc: t('services.benefit_pendulo_3_desc') }
      ],
      outroTitle: t('services.outroTitle_pendulo'),
      outro: t('services.outro_pendulo')
    },
    {
      id: 'sanacion-cuantica',
      title: t('nav.subSanacion'),
      image: IMAGES.energeticas.sanacionCuantica,
      intro: (
        <>
          <p>{t('services.intro_sanacion_p1')}</p>
          <p>{t('services.intro_sanacion_p2')}</p>
        </>
      ),
      benefitsTitle: t('services.benefitsTitle_sanacion'),
      benefits: [
        { title: t('services.benefit_sanacion_1_title'), desc: t('services.benefit_sanacion_1_desc') },
        { title: t('services.benefit_sanacion_2_title'), desc: t('services.benefit_sanacion_2_desc') },
        { title: t('services.benefit_sanacion_3_title'), desc: t('services.benefit_sanacion_3_desc') }
      ],
      outroTitle: t('services.outroTitle_sanacion'),
      outro: t('services.outro_sanacion')
    },
    {
      id: 'biomagnetismo',
      title: t('nav.subBiomagnetismo'),
      image: IMAGES.energeticas.biomagnetismo,
      intro: (
        <>
          <p>{t('services.intro_biomagnetismo_p1')}</p>
          <p>{t('services.intro_biomagnetismo_p2')}</p>
        </>
      ),
      benefitsTitle: t('services.benefitsTitle_biomagnetismo'),
      benefits: [
        { title: t('services.benefit_biomagnetismo_1_title'), desc: t('services.benefit_biomagnetismo_1_desc') },
        { title: t('services.benefit_biomagnetismo_2_title'), desc: t('services.benefit_biomagnetismo_2_desc') },
        { title: t('services.benefit_biomagnetismo_3_title'), desc: t('services.benefit_biomagnetismo_3_desc') }
      ],
      outroTitle: t('services.outroTitle_biomagnetismo'),
      outro: t('services.outro_biomagnetismo')
    }
  ];

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
    if ((window as any).__lenisInstance) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          (window as any).__lenisInstance.resize();
          (window as any).__lenisInstance.scrollTo(element, { offset: 0, force: true, duration: 1.2 });
        });
      });
    } else {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }
  };

  return (
    <main className="bg-bg-base text-text-main min-h-screen w-full overflow-hidden pb-20 transition-colors duration-600">
<SEO
          title="Medicina China y Terapias Holísticas en Málaga"
          description="Acupuntura, auriculoterapia, moxibustión, ventosas, fitoterapia, masaje tuina, coaching y terapias energéticas en Torremolinos, Málaga."
        />
      <PageHeader title={t('services.pageHeaderTitle')} breadcrumb={t('pageHeader.breadcrumb.Services')}>
        
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
                <span>{t('services.accordionMtc')}</span>
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
                <span>{t('services.accordionCoaching')}</span>
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
                <span>{t('services.accordionEnergeticas')}</span>
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
              {t('services.sectionMtcHeading1')} <span className="italic text-accent-sage">{t('services.sectionMtcHeading2')}</span> {t('services.sectionMtcHeading3')}
            </h2>
            <div className="organic-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-sage/60">{t('services.sectionMtcSubtitle')}</p>
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
                    <span className="text-[0.65rem] tracking-[0.4em] uppercase text-accent-gold/80">{t('services.terapyLabel')}</span>
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
                          {t('services.cta', { service: service.title })}
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
              {t('services.sectionCoachingHeading1')} <span className="italic text-accent-gold">{t('services.sectionCoachingHeading2')}</span>
            </h2>
            <div className="organic-divider max-w-md mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-gold/60">{t('services.sectionCoachingSubtitle')}</p>
          </div>

          <div className="glass-card p-8 md:p-16 reveal-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <p className="text-xl text-text-main font-serif leading-relaxed mb-8 italic border-l-2 border-accent-gold pl-6">
                  {t('services.coachingIntro')}
                </p>

                <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed">
                  <h4 id="coaching-pilares" className="font-serif text-2xl text-text-main pt-4 scroll-mt-32">{t('services.coachingPilaresHeading')}</h4>
                  <div className="gold-line mb-6"></div>

                  <ul className="space-y-8 !pl-0">
                    <li className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 border border-accent-gold/30 rounded-full flex items-center justify-center text-accent-gold">
                        <Check size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <strong className="text-text-main block text-lg font-serif mb-2">{t('services.coachingPilar1Title')}</strong>
                        {t('services.coachingPilar1Desc')}
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 border border-accent-gold/30 rounded-full flex items-center justify-center text-accent-gold">
                        <Check size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <strong className="text-text-main block text-lg font-serif mb-2">{t('services.coachingPilar2Title')}</strong>
                        {t('services.coachingPilar2Desc')}
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 border border-accent-gold/30 rounded-full flex items-center justify-center text-accent-gold">
                        <Check size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <strong className="text-text-main block text-lg font-serif mb-2">{t('services.coachingPilar3Title')}</strong>
                        {t('services.coachingPilar3Desc')}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="about-image-container rounded-3xl shadow-xl">
                  <img src={IMAGES.coaching} alt={t('services.coachingImageAlt')} className="w-full h-[400px] object-cover grayscale-[20%]" />
                </div>

                {/* Caja de áreas de trabajo adaptativa */}
                <div className="bg-text-main/5 border border-text-main/10 p-8 rounded-3xl">
                  <h4 id="coaching-areas" className="font-serif text-xl text-text-main mb-4 scroll-mt-32">{t('services.coachingAreasHeading')}</h4>
                  <ul className="space-y-4 text-sm text-text-muted/80">
                    <li><strong className="text-accent-gold">{t('services.coachingArea1Label')}</strong> {t('services.coachingArea1Desc')}</li>
                    <li><strong className="text-accent-gold">{t('services.coachingArea2Label')}</strong> {t('services.coachingArea2Desc')}</li>
                    <li><strong className="text-accent-gold">{t('services.coachingArea3Label')}</strong> {t('services.coachingArea3Desc')}</li>
                    <li><strong className="text-accent-gold">{t('services.coachingArea4Label')}</strong> {t('services.coachingArea4Desc')}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-text-main/10">
              <div className="max-w-3xl">
                <h4 id="coaching-sesion" className="font-serif text-2xl text-text-main mb-6 scroll-mt-32">{t('services.coachingSesionHeading')}</h4>
                <p className="text-text-muted/80 leading-relaxed text-sm md:text-base mb-10">
                  {t('services.coachingSesionDesc')}
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
                    {t('services.ctaMentoria')}
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
              {t('services.sectionEnergeticasHeading1')} <span className="italic text-accent-sage">{t('services.sectionEnergeticasHeading2')}</span>
            </h2>
            <div className="organic-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-sage/60">{t('services.sectionEnergeticasSubtitle')}</p>
          </div>

          {/* INTRODUCCIÓN GENERAL */}
          <div className="glass-card p-8 md:p-14 mb-24 reveal-up">
            <p className="text-xl text-text-main font-serif leading-relaxed mb-6 italic border-l-2 border-accent-sage pl-6">
              {t('services.energeticasIntroP1')}
            </p>
            <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed mb-10">
              <p>
                {t('services.energeticasIntroP2')}
              </p>
              <p>
                {t('services.energeticasIntroP3')}
              </p>
            </div>

            <h4 className="font-serif text-2xl text-text-main mb-6 pt-4 border-t border-text-main/10">{t('services.energeticasRecomendadasHeading')}</h4>
            <p className="text-text-muted/80 text-sm md:text-base mb-6">{t('services.energeticasRecomendadasIntro')}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-muted/80 text-sm md:text-base mb-8">
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> {t('services.energeticasChecklist1')}</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> {t('services.energeticasChecklist2')}</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> {t('services.energeticasChecklist3')}</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> {t('services.energeticasChecklist4')}</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> {t('services.energeticasChecklist5')}</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> {t('services.energeticasChecklist6')}</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> {t('services.energeticasChecklist7')}</li>
              <li className="flex items-start gap-3"><Check size={20} className="text-accent-sage shrink-0 mt-0.5" /> {t('services.energeticasChecklist8')}</li>
            </ul>
            <p className="text-xs text-text-muted/50 italic bg-text-main/5 p-4 rounded-xl border border-text-main/10">
              {t('services.energeticasDisclaimer')}
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
                    <span className="text-[0.65rem] tracking-[0.4em] uppercase text-accent-sage/80">{t('services.herramientaEnergeticaLabel')}</span>
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
                          {t('services.cta', { service: service.title })}
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
                <h4 className="font-serif text-2xl text-text-main mb-6">{t('services.sesionClosingHeading')}</h4>
                <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-4">
                  {t('services.sesionClosingP1')}
                </p>
                <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                  {t('services.sesionClosingP2')}
                </p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-text-main mb-6">{t('services.miFormaHeading')}</h4>
                <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-4">
                  {t('services.miFormaP1')}
                </p>
                <p className="text-text-main text-sm md:text-base leading-relaxed font-medium bg-gradient-to-r from-accent-sage/20 to-transparent p-4 rounded-xl border-l-2 border-accent-sage">
                  {t('services.miFormaP2')}
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-text-muted/80 mb-6 italic">{t('services.closingText')}</p>
              <Link to="/contact" className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-bg-base bg-gradient-to-r from-accent-sage to-accent-gold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 font-bold" data-hoverable="true">
                {t('services.ctaAcompanamiento')}
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Services;
