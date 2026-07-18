import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CookiePolicy: React.FC = () => {
  
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
      <PageHeader title="POLÍTICA DE COOKIES" breadcrumb="Cookies" />
      
      <section className="relative py-16 md:py-24">
        {/* Orbes decorativos de fondo (su opacidad la dicta index.css) */}
        <div className="orb w-[400px] h-[400px] bg-accent-sage top-20 -left-32 parallax-layer z-0" data-speed="0.02"></div>
        <div className="orb w-[300px] h-[300px] bg-accent-gold bottom-20 -right-20 parallax-layer z-0" data-speed="0.03"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-12 reveal-up">
            <h2 className="section-heading text-[clamp(1.8rem,4vw,3rem)] mb-4">
              Transparencia y <span className="italic text-accent-sage">Privacidad</span>
            </h2>
            <div className="organic-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-sage/60">Política de Cookies</p>
          </div>

          <div className="glass-card p-8 md:p-14 lg:p-20 reveal-up">
            
            {/* Bloque 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">1.</span>
                <h3 className="font-serif text-2xl text-text-main">¿Qué son las cookies?</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">2.</span>
                <h3 className="font-serif text-2xl text-text-main">¿Qué tipos de cookies utiliza esta web?</h3>
              </div>
              <ul className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pl-4 border-l border-accent-gold/30">
                <li>
                  <strong className="text-text-main font-medium block mb-1">Cookies Técnicas (Necesarias):</strong> 
                  Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen. Sin ellas, la web podría no funcionar correctamente.
                </li>
                <li>
                  <strong className="text-text-main font-medium block mb-1">Cookies de Análisis (Opcionales):</strong> 
                  Son aquellas que, tratadas por nosotros o por terceros (como Google Analytics), nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio para mejorar nuestra oferta.
                </li>
              </ul>
            </div>

            {/* Bloque 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">3.</span>
                <h3 className="font-serif text-2xl text-text-main">Aceptación, Rechazo o Configuración</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                Al entrar en este sitio web, usted visualizó un panel emergente (Banner de Cookies) donde podía aceptar o rechazar el uso de cookies opcionales. Puede modificar su consentimiento en cualquier momento eliminando las cookies de su navegador y recargando la página.
              </p>
            </div>

            {/* Bloque 4 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">4.</span>
                <h3 className="font-serif text-2xl text-text-main">Cómo desactivar las cookies en los navegadores</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-4">
                Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Consulte la "Ayuda" de su navegador para más detalles:
              </p>
              <ul className="space-y-2 text-text-muted/80 text-sm md:text-base leading-relaxed pl-4 border-l border-accent-gold/30">
                <li className="hover:text-text-main transition-colors">Google Chrome</li>
                <li className="hover:text-text-main transition-colors">Mozilla Firefox</li>
                <li className="hover:text-text-main transition-colors">Apple Safari</li>
                <li className="hover:text-text-main transition-colors">Microsoft Edge</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default CookiePolicy;