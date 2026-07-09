import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy: React.FC = () => {
  
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
        title="Política de Privacidad" 
        description="Política de Privacidad del Centro de Acupuntura y Terapias Holísticas. Tratamiento seguro de tus datos personales (RGPD)." 
      />
      <PageHeader title="POLÍTICA DE PRIVACIDAD" breadcrumb="Privacidad" />
      
      <section className="relative py-16 md:py-24">
        {/* Orbes decorativos de fondo (su opacidad la dicta index.css) */}
        <div className="orb w-[400px] h-[400px] bg-accent-sage top-20 -left-32 parallax-layer z-0" data-speed="0.02"></div>
        <div className="orb w-[300px] h-[300px] bg-accent-gold bottom-20 -right-20 parallax-layer z-0" data-speed="0.03"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-12 reveal-up">
            <h2 className="section-heading text-[clamp(1.8rem,4vw,3rem)] mb-4">
              Protección de <span className="italic text-accent-sage">Datos</span>
            </h2>
            <div className="organic-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-sage/60">Política de Privacidad</p>
          </div>

          <div className="glass-card p-8 md:p-14 lg:p-20 reveal-up">

            <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-12 border-b border-text-main/10 pb-8">
              En el <strong className="text-text-main font-medium">Centro de Acupuntura y Terapias Holísticas</strong>, nos comprometemos a proteger la privacidad y la seguridad de sus datos personales, cumpliendo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
            </p>

            {/* Bloque 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">1.</span>
                <h3 className="font-serif text-2xl text-text-main">¿Quién es el responsable del tratamiento?</h3>
              </div>
              <ul className="space-y-3 text-text-muted/80 text-sm md:text-base leading-relaxed pl-4 border-l border-accent-gold/30">
                <li><strong className="text-text-main font-medium">Identidad:</strong> [NOMBRE DEL DUEÑO O EMPRESA]</li>
                <li><strong className="text-text-main font-medium">NIF/CIF:</strong> [TU NIF]</li>
                <li><strong className="text-text-main font-medium">Dirección:</strong> Plaza Andalucía 4, Centro Comercial España local 81, 29620 - Torremolinos, Málaga.</li>
                <li><strong className="text-text-main font-medium">Email:</strong> acupunturaholisticayeni@gmail.com</li>
              </ul>
            </div>

            {/* Bloque 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">2.</span>
                <h3 className="font-serif text-2xl text-text-main">¿Con qué finalidad tratamos sus datos?</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-4">
                Tratamos la información que nos facilitan las personas interesadas con el fin de:
              </p>
              <ol className="list-decimal space-y-3 text-text-muted/80 text-sm md:text-base leading-relaxed pl-8 border-l border-accent-gold/30 ml-1">
                <li>Gestionar las citas y reservas solicitadas a través de la web o teléfono.</li>
                <li>Mantener la comunicación necesaria para la prestación del servicio terapéutico.</li>
                <li>Facturación y gestión administrativa.</li>
                <li>Envío de comunicaciones comerciales o boletines informativos (solo si nos ha dado su consentimiento explícito).</li>
              </ol>
            </div>

            {/* Bloque 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">3.</span>
                <h3 className="font-serif text-2xl text-text-main">Datos de Categoría Especial (Salud)</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                Debido a la naturaleza de nuestros servicios, es posible que tratemos datos relacionados con su estado físico o bienestar general. Según el artículo 9 del RGPD, estos son "Datos de Categoría Especial". Nos comprometemos a tratarlos con la máxima confidencialidad, aplicando medidas de seguridad reforzadas y utilizándolos únicamente para la correcta prestación del servicio solicitado.
              </p>
            </div>

            {/* Bloque 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">4.</span>
                <h3 className="font-serif text-2xl text-text-main">¿Por cuánto tiempo conservaremos sus datos?</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales (por ejemplo, a efectos fiscales).
              </p>
            </div>

            {/* Bloque 5 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">5.</span>
                <h3 className="font-serif text-2xl text-text-main">Legitimación para el tratamiento</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                La base legal para el tratamiento de sus datos es el <strong className="text-text-main font-medium">consentimiento</strong> que se le solicita (al marcar la casilla en el formulario de contacto) y/o la ejecución del contrato de prestación de servicios al acudir a nuestro centro.
              </p>
            </div>

            {/* Bloque 6 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">6.</span>
                <h3 className="font-serif text-2xl text-text-main">Destinatarios</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                No se cederán datos a terceros, salvo obligación legal (Hacienda, Jueces y Tribunales) o a proveedores de servicios necesarios para el funcionamiento del negocio (encargados de tratamiento), como gestorías fiscales o proveedores de servicios informáticos, que cumplen con la normativa de privacidad.
              </p>
            </div>

            {/* Bloque 7 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-accent-gold">7.</span>
                <h3 className="font-serif text-2xl text-text-main">¿Cuáles son sus derechos?</h3>
              </div>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-4">
                Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando sus datos personales. Las personas interesadas tienen derecho a:
              </p>
              <ul className="space-y-2 text-text-muted/80 text-sm md:text-base leading-relaxed pl-4 border-l border-accent-gold/30 mb-6">
                <li className="hover:text-text-main transition-colors">Acceder a sus datos personales.</li>
                <li className="hover:text-text-main transition-colors">Solicitar la rectificación de los datos inexactos.</li>
                <li className="hover:text-text-main transition-colors">Solicitar su supresión cuando los datos ya no sean necesarios.</li>
                <li className="hover:text-text-main transition-colors">Oponerse al tratamiento.</li>
                <li className="hover:text-text-main transition-colors">Solicitar la limitación del tratamiento.</li>
              </ul>
              <p className="text-text-muted/80 text-sm md:text-base leading-relaxed">
                Para ejercer estos derechos, puede enviar un correo electrónico a <strong className="text-text-main font-medium">acupunturaholisticayeni@gmail.com</strong> adjuntando copia de su DNI.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;