import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LegalNotice: React.FC = () => {

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
        description="Aviso Legal y Condiciones de Uso del Centro de Acupuntura y Terapias Holísticas. Cumplimiento con la LSSI."
      />
      <PageHeader title="AVISO LEGAL" breadcrumb="Legal" />

      <section className="relative py-16 md:py-24">
        {/* Orbes decorativos de fondo (su opacidad ahora la controla el CSS según el tema) */}
        <div className="orb w-[400px] h-[400px] bg-accent-sage top-20 -left-32 parallax-layer z-0" data-speed="0.02"></div>
        <div className="orb w-[300px] h-[300px] bg-accent-gold bottom-20 -right-20 parallax-layer z-0" data-speed="0.03"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">

          <div className="text-center mb-12 reveal-up">
            <h2 className="section-heading text-[clamp(1.8rem,4vw,3rem)] mb-4">
              Términos y <span className="italic text-accent-sage">Condiciones</span>
            </h2>
            <div className="organic-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-sage/60">Información Legal</p>
          </div>

          <div className="glass-card p-8 md:p-14 lg:p-20 reveal-up">

            {/* Bloque 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">1.</span>
                <h3 className="font-serif text-2xl text-text-main">Datos Identificativos</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-6">
                En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI), se reflejan los siguientes datos:
              </p>
              <ul className="space-y-3 text-text-muted/80 text-sm md:text-base leading-relaxed pl-4 border-l border-accent-gold/30">
                <li><strong className="text-text-main font-medium">Titular del sitio web:</strong> Yeni Gladys Arriarán Gutiérrez</li>
                <li><strong className="text-text-main font-medium">NIF/CIF:</strong> 043249104J</li>
                <li><strong className="text-text-main font-medium">Domicilio:</strong> Plaza Andalucía 4, Centro Comercial España, local 81, 29620, Torremolinos, Málaga.</li>
                <li><strong className="text-text-main font-medium">Correo electrónico:</strong> acupunturaholisticayeni@gmail.com</li>
                <li><strong className="text-text-main font-medium">Teléfono:</strong> (+34) 624 253 470</li>
              </ul>
            </div>

            {/* Bloque 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">2.</span>
                <h3 className="font-serif text-2xl text-text-main">Usuarios</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">3.</span>
                <h3 className="font-serif text-2xl text-text-main">Descargo de Responsabilidad (Naturaleza de los Servicios)</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-4">
                Los servicios ofrecidos en este sitio web (acupuntura, fitoterapia, terapias holísticas) tienen como finalidad el bienestar, la relajación y el reequilibrio energético del usuario. Estos servicios son técnicas parasanitarias o complementarias y no sustituyen en ningún caso al diagnóstico, tratamiento o prescripción médica convencional.
              </p>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                El usuario reconoce que no debe abandonar ningún tratamiento médico impuesto por un facultativo colegiado para realizar estas terapias. En caso de duda sobre su salud física o mental, recomendamos encarecidamente consultar con su médico de cabecera o especialista.
              </p>
            </div>

            {/* Bloque 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">4.</span>
                <h3 className="font-serif text-2xl text-text-main">Propiedad Intelectual e Industrial</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                El Titular por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.). Quedan reservados todos los derechos.
              </p>
            </div>

            {/* Bloque 5 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">5.</span>
                <h3 className="font-serif text-2xl text-text-main">Ley Aplicable y Jurisdicción</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                La relación entre el Titular y el Usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Torremolinos (Málaga).
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalNotice;