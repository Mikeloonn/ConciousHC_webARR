import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import { Heart, Eye, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const { t } = useTranslation();

  // Inicializar las animaciones de revelado para esta página
  useEffect(() => {
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

  return (
    <main className="bg-bg-base text-text-main min-h-screen w-full overflow-hidden pb-20 transition-colors duration-600">
<SEO
          title={t('about.pageHeaderTitle')}
          description="Conoce a Yeni Arriarán, acupuntora y terapeuta holística en Torremolinos, Málaga. Más de 12 años de experiencia en medicina tradicional china y terapias naturales."
        />
      <PageHeader title={t('about.pageHeaderTitle')} breadcrumb={t('about.pageHeaderBreadcrumb')} />

      {/* SECCIÓN ESPECIALISTA */}
      <section className="relative py-24 md:py-32">
        <div className="orb w-[400px] h-[400px] bg-accent-sage top-10 left-[-100px] opacity-10 pointer-events-none absolute"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Foto de la Dueña */}
            <div className="w-full lg:w-1/2 reveal-up">
              <div className="relative group">
                {/* Marco desplazado */}
                <div className="absolute inset-0 border border-accent-sage/40 rounded-3xl translate-x-4 translate-y-4 z-0 transition-transform duration-700 group-hover:translate-x-5 group-hover:translate-y-5"></div>

                {/* Contenedor de la imagen */}
                <div className="relative z-10 about-image-container rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src={IMAGES.specialist}
                    alt={t('about.imageAlt')}
                    className="w-full h-[500px] md:h-[650px] object-cover grayscale-[20%] transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* Filtro oscuro fijo para no blanquear la foto y conservar un contraste sublime */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-transparent to-transparent opacity-90 pointer-events-none"></div>
                  {/* Letras claras estáticas con text-shadow para una legibilidad 100% nítida */}
                  <div className="absolute bottom-10 left-10 pointer-events-none">
                    <p className="font-serif text-3xl md:text-4xl text-[#e8ebe3] mb-2 text-shadow-subtle font-medium">{t('about.name')}</p>
                    <p className="text-[#df9e53] font-sans font-medium uppercase tracking-[0.25em] text-xs text-shadow-subtle font-semibold">{t('about.title')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto Historia */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-6 reveal-up">
                <div className="h-[1px] w-12 bg-gradient-to-r from-accent-gold to-transparent"></div>
                <span className="text-[0.65rem] tracking-[0.4em] uppercase text-accent-gold/80">{t('about.label')}</span>
              </div>

              <h2 className="section-heading text-[clamp(2rem,4vw,3.5rem)] mb-10 reveal-up">
                {t('about.heading1')} <span className="italic text-accent-sage">{t('about.heading2')}</span>
              </h2>

              <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed">
                <p className="text-xl font-serif italic text-text-main border-l-2 border-accent-sage pl-6 reveal-up">
                  {t('about.featuredQuote')}
                </p>
                <p className="reveal-up">
                  {t('about.para1')}
                </p>
                <p className="reveal-up">
                  {t('about.para2')}
                </p>
                <p className="reveal-up">
                  {t('about.para3')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="relative py-24 md:py-32 border-t border-text-main/5">
        <div className="orb w-[500px] h-[500px] bg-accent-gold bottom-0 right-[-100px] opacity-10 pointer-events-none absolute"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Misión (Glass Card) */}
            <div className="glass-card p-10 md:p-14 reveal-up" data-hoverable="true">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-sage/20 to-transparent rounded-full flex items-center justify-center text-accent-sage mb-8 border border-accent-sage/30">
                <Heart size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl text-text-main mb-6">{t('about.missionLabel')}</h3>
              <div className="gold-line mb-6"></div>
              <p className="text-text-muted/75 text-sm md:text-base leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>

            {/* Visión (Glass Card) */}
            <div className="glass-card p-10 md:p-14 md:mt-16 reveal-up" data-hoverable="true">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-gold/20 to-transparent rounded-full flex items-center justify-center text-accent-gold mb-8 border border-accent-gold/30">
                <Eye size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl text-text-main mb-6">{t('about.visionLabel')}</h3>
              <div className="gold-line mb-6"></div>
              <p className="text-text-muted/75 text-sm md:text-base leading-relaxed">
                {t('about.visionText')}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VALORES / ELEGIRNOS */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="section-label reveal-up">{t('about.valuesLabel')}</span>
          <h2 className="section-heading text-[clamp(2rem,4vw,3.5rem)] mt-4 mb-16 reveal-up">
            {t('about.valuesHeading1')} <span className="italic text-accent-sage">{t('about.valuesHeading2')}</span> {t('about.valuesHeading3')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: t('about.value1title'), desc: t('about.value1desc') },
              { title: t('about.value2title'), desc: t('about.value2desc') },
              { title: t('about.value3title'), desc: t('about.value3desc') }
            ].map((item, idx) => (
              <div key={idx} className="reveal-up">
                <div className="w-16 h-16 rounded-full bg-text-main/5 flex items-center justify-center mx-auto mb-8 border border-text-main/10 text-accent-gold">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-2xl text-text-main mb-4">{item.title}</h4>
                <p className="text-text-muted/60 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;