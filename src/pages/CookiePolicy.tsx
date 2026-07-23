import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CookiePolicy: React.FC = () => {
  const { t } = useTranslation();
  
  // Animación suave de aparición al hacer scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
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
    <main className="bg-bg-base text-text-main min-h-screen w-full overflow-hidden pb-24 transition-colors duration-600">
<SEO
          title="Política de Cookies"
          description="Política de cookies del centro de acupuntura y terapias holísticas de Yeni Arriarán en Torremolinos, Málaga. Información sobre el uso de cookies."
        />
      <PageHeader title={t('cookiePolicy.pageHeaderTitle')} breadcrumb={t('cookiePolicy.pageHeaderBreadcrumb')} />
      
      <section className="relative py-16 md:py-24">
        {/* Orbes decorativos de fondo (su opacidad la dicta index.css) */}
        <div className="orb w-[400px] h-[400px] bg-accent-sage top-20 -left-32 parallax-layer z-0" data-speed="0.02"></div>
        <div className="orb w-[300px] h-[300px] bg-accent-gold bottom-20 -right-20 parallax-layer z-0" data-speed="0.03"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-12 reveal-up">
            <h2 className="section-heading text-[clamp(1.8rem,4vw,3rem)] mb-4">
              {t('cookiePolicy.heading1')} <span className="italic text-accent-sage">{t('cookiePolicy.heading2')}</span>
            </h2>
            <div className="organic-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-sage/60">{t('cookiePolicy.subtitle')}</p>
          </div>

          <div className="glass-card p-8 md:p-14 lg:p-20 reveal-up">
            
            {/* Bloque 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">{t('cookiePolicy.block1num')}</span>
                <h3 className="font-serif text-2xl text-text-main">{t('cookiePolicy.block1title')}</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                {t('cookiePolicy.block1text')}
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">{t('cookiePolicy.block2num')}</span>
                <h3 className="font-serif text-2xl text-text-main">{t('cookiePolicy.block2title')}</h3>
              </div>
              <ul className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pl-4 border-l border-accent-gold/30">
                <li>
                  <strong className="text-text-main font-medium block mb-1">{t('cookiePolicy.block2sub1')}</strong> 
                  {t('cookiePolicy.block2desc1')}
                </li>
                <li>
                  <strong className="text-text-main font-medium block mb-1">{t('cookiePolicy.block2sub2')}</strong> 
                  {t('cookiePolicy.block2desc2')}
                </li>
              </ul>
            </div>

            {/* Bloque 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">{t('cookiePolicy.block3num')}</span>
                <h3 className="font-serif text-2xl text-text-main">{t('cookiePolicy.block3title')}</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                {t('cookiePolicy.block3text')}
              </p>
            </div>

            {/* Bloque 4 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">{t('cookiePolicy.block4num')}</span>
                <h3 className="font-serif text-2xl text-text-main">{t('cookiePolicy.block4title')}</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-4">
                {t('cookiePolicy.block4text')}
              </p>
              <ul className="space-y-2 text-text-muted/80 text-sm md:text-base leading-relaxed pl-4 border-l border-accent-gold/30">
                <li className="hover:text-text-main transition-colors">{t('cookiePolicy.browserChrome')}</li>
                <li className="hover:text-text-main transition-colors">{t('cookiePolicy.browserFirefox')}</li>
                <li className="hover:text-text-main transition-colors">{t('cookiePolicy.browserSafari')}</li>
                <li className="hover:text-text-main transition-colors">{t('cookiePolicy.browserEdge')}</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default CookiePolicy;