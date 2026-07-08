import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Heart, Eye, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {

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
    <main className="bg-[#0a0a08] text-[#e8ebe3] min-h-screen w-full overflow-hidden pb-20">
      <SEO
        title="Sobre Nosotros"
        description="Conoce a Yeni Arriarán y la historia detrás del Centro de Acupuntura y Terapias Holísticas."
      />
      <PageHeader title="SOBRE NOSOTROS" breadcrumb="Nosotros" />

      {/* SECCIÓN ESPECIALISTA */}
      <section className="relative py-24 md:py-32">
        <div className="orb w-[400px] h-[400px] bg-[#93a07e] top-10 left-[-100px] opacity-10 pointer-events-none absolute"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Foto de la Dueña */}
            <div className="w-full lg:w-1/2 reveal-up">
              <div className="relative group">
                {/* Marco desplazado */}
                <div className="absolute inset-0 border border-[#b3bda3]/40 rounded-3xl translate-x-4 translate-y-4 z-0 transition-transform duration-700 group-hover:translate-x-5 group-hover:translate-y-5"></div>

                {/* Contenedor de la imagen */}
                <div className="relative z-10 about-image-container rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src={IMAGES.specialist}
                    alt="Yeni Arriarán - Terapeuta"
                    className="w-full h-[500px] md:h-[650px] object-cover grayscale-[20%] transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-transparent to-transparent opacity-90 pointer-events-none"></div>
                  <div className="absolute bottom-10 left-10 pointer-events-none">
                    <p className="font-serif text-3xl md:text-4xl text-[#e8ebe3] mb-2">Yeni Arriarán</p>
                    <p className="text-[#df9e53] font-sans font-medium uppercase tracking-[0.25em] text-xs">Fundadora & Terapeuta</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto Historia */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-6 reveal-up">
                <div className="h-[1px] w-12 bg-gradient-to-r from-[#df9e53] to-transparent"></div>
                <span className="text-[0.65rem] tracking-[0.4em] uppercase text-[#df9e53]/80">Nuestra Historia</span>
              </div>

              <h2 className="section-heading text-[clamp(2rem,4vw,3.5rem)] mb-10 reveal-up">
                Una búsqueda personal hacia el <span className="italic text-[#b3bda3]">bienestar</span>
              </h2>

              <div className="space-y-6 text-[#d1d7c7]/70 text-sm md:text-base leading-relaxed">
                <p className="text-xl font-serif italic text-[#e8ebe3] border-l-2 border-[#b3bda3] pl-6 reveal-up">
                  "Mi camino empezó desde un lugar muy personal. Hoy mi misión es ayudarte a recuperar tu equilibrio."
                </p>
                <p className="reveal-up">
                  Durante muchos años trabajé como directora financiera, con un nivel de exigencia alto y jornadas largas. Con el tiempo, ese ritmo fue afectando mi salud: mi cuerpo empezó a debilitarse y viví un periodo de desequilibrio importante.
                </p>
                <p className="reveal-up">
                  Recibir un diagnóstico de adenoma hipofisario fue un antes y un después: entendí que necesitaba mirar la salud de otra manera, más integral.
                </p>
                <p className="reveal-up">
                  Descubrí la Medicina Tradicional China, que me abrió un mundo completamente nuevo: un enfoque que observa a la persona como un todo —cuerpo, emociones, energía y hábitos— y no solo el síntoma. Ahí fue donde empecé a sentir un alivio real y sostenido.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="relative py-24 md:py-32 border-t border-[#e8ebe3]/5">
        <div className="orb w-[500px] h-[500px] bg-[#df9e53] bottom-0 right-[-100px] opacity-10 pointer-events-none absolute"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Misión (Glass Card) */}
            <div className="glass-card p-10 md:p-14 reveal-up" data-hoverable="true">
              <div className="w-14 h-14 bg-gradient-to-br from-[#93a07e]/20 to-transparent rounded-full flex items-center justify-center text-[#b3bda3] mb-8 border border-[#93a07e]/30">
                <Heart size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl text-[#e8ebe3] mb-6">Nuestra Misión</h3>
              <div className="gold-line mb-6"></div>
              <p className="text-[#d1d7c7]/60 text-sm md:text-base leading-relaxed">
                Acompañar a cada persona de forma cercana y personalizada, combinando la Medicina Tradicional China y terapias holísticas para aliviar el dolor, reducir el estrés y mejorar el equilibrio físico, emocional y mental. Nuestro compromiso es ofrecer un espacio de escucha, respeto y confianza.
              </p>
            </div>

            {/* Visión (Glass Card) */}
            <div className="glass-card p-10 md:p-14 md:mt-16 reveal-up" data-hoverable="true">
              <div className="w-14 h-14 bg-gradient-to-br from-[#df9e53]/20 to-transparent rounded-full flex items-center justify-center text-[#df9e53] mb-8 border border-[#df9e53]/30">
                <Eye size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl text-[#e8ebe3] mb-6">Nuestra Visión</h3>
              <div className="gold-line mb-6"></div>
              <p className="text-[#d1d7c7]/60 text-sm md:text-base leading-relaxed">
                Crear un espacio donde la salud se viva con más conciencia y menos prisa. Queremos ser un centro reconocido por su trato humano y un enfoque integrativo que aporte resultados y confianza. Soñamos con una comunidad que cuide su cuerpo, su mente y su energía.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VALORES / ELEGIRNOS */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="section-label reveal-up">Nuestros Valores</span>
          <h2 className="section-heading text-[clamp(2rem,4vw,3.5rem)] mt-4 mb-16 reveal-up">
            ¿Por qué <span className="italic text-[#b3bda3]">confiar</span> en nosotros?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Atención Humana", desc: "No tratamos enfermedades de forma aislada, escuchamos y acompañamos a personas." },
              { title: "Enfoque Integral", desc: "Buscamos la raíz del problema equilibrando el cuerpo, la mente y la energía vital." },
              { title: "Paz y Conciencia", desc: "Hemos creado un refugio sensorial diseñado para sanar sin el ruido y las prisas del exterior." }
            ].map((item, idx) => (
              <div key={idx} className="reveal-up">
                <div className="w-16 h-16 rounded-full bg-[#e8ebe3]/5 flex items-center justify-center mx-auto mb-8 border border-[#e8ebe3]/10 text-[#df9e53]">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-2xl text-[#e8ebe3] mb-4">{item.title}</h4>
                <p className="text-[#d1d7c7]/50 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;