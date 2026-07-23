import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LegalNotice: React.FC = () => {
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
          title="Aviso Legal"
          description="Aviso legal y condiciones de uso del sitio web de acupuntura y terapias holísticas en Torremolinos, Málaga. Cumplimiento con la LSSI."
        />
      <PageHeader title={t('legal.pageHeaderTitle')} breadcrumb={t('legal.pageHeaderBreadcrumb')} />

      <section className="relative py-16 md:py-24">
        {/* Orbes decorativos de fondo (su opacidad ahora la controla el CSS según el tema) */}
        <div className="orb w-[400px] h-[400px] bg-accent-sage top-20 -left-32 parallax-layer z-0" data-speed="0.02"></div>
        <div className="orb w-[300px] h-[300px] bg-accent-gold bottom-20 -right-20 parallax-layer z-0" data-speed="0.03"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">

          <div className="text-center mb-12 reveal-up">
            <h2 className="section-heading text-[clamp(1.8rem,4vw,3rem)] mb-4">
              {t('legal.heading1')} <span className="italic text-accent-sage">{t('legal.heading2')}</span>
            </h2>
            <div className="organic-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-sage/60">{t('legal.subtitle')}</p>
          </div>

          <div className="glass-card p-8 md:p-14 lg:p-20 reveal-up">

            {/* Bloque 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">1.</span>
                <h3 className="font-serif text-2xl text-text-main">{t('legal.block1title')}</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-6">
                {t('legal.block1intro')}
              </p>
              <ul className="space-y-3 text-text-muted/80 text-sm md:text-base leading-relaxed pl-4 border-l border-accent-gold/30">
                <li><strong className="text-text-main font-medium">{t('legal.fieldOwner')}</strong> {t('legal.ownerValue')}</li>
                <li><strong className="text-text-main font-medium">{t('legal.fieldNif')}</strong> {t('legal.nifValue')}</li>
                <li><strong className="text-text-main font-medium">{t('legal.fieldAddress')}</strong> {t('legal.addressValue')}</li>
                <li><strong className="text-text-main font-medium">{t('legal.fieldEmail')}</strong> {t('legal.emailValue')}</li>
                <li><strong className="text-text-main font-medium">{t('legal.fieldPhone')}</strong> {t('legal.phoneValue')}</li>
              </ul>
            </div>

            {/* Bloque 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">2.</span>
                <h3 className="font-serif text-2xl text-text-main">{t('legal.block2title')}</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                {t('legal.block2text')}
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">3.</span>
                <h3 className="font-serif text-2xl text-text-main">{t('legal.block3title')}</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-4">
                {t('legal.block3text1')}
              </p>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                {t('legal.block3text2')}
              </p>
            </div>

            {/* Bloque 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">4.</span>
                <h3 className="font-serif text-2xl text-text-main">{t('legal.block4title')}</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                {t('legal.block4text')}
              </p>
            </div>

            {/* Bloque 5 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">5.</span>
                <h3 className="font-serif text-2xl text-text-main">{t('legal.block5title')}</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                {t('legal.block5text')}
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalNotice;