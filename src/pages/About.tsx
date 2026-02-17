import React from 'react';
import PageHeader from '../components/PageHeader';
import { Heart, Eye, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';

const About: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Sobre Nosotros" 
        description="Conoce a Yeni Arriarán y la historia detrás de Conscious Healing Center. Nuestra misión y visión para un bienestar integral." 
      />
      <PageHeader title="SOBRE NOSOTROS" breadcrumb="Sobre Nosotros" />
      
      {/* SECCIÓN ESPECIALISTA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Foto de la Dueña */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-secondary/30 rounded-3xl translate-x-4 translate-y-4 z-0"></div>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={IMAGES.specialist} 
                    alt="Yeni Arriarán - Terapeuta" 
                    className="w-full h-[500px] md:h-[600px] object-cover" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-8 text-white">
                    <p className="font-bold text-2xl">Yeni Arriarán</p>
                    <p className="text-secondary font-medium uppercase tracking-widest text-sm">Terapeuta Especializada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto Historia */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-secondary"></div>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm">Conoce a nuestra especialista</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8">Una búsqueda personal de bienestar</h2>
              
              <div className="prose prose-lg text-textGray space-y-6 leading-relaxed">
                <p className="text-xl font-medium text-primary italic">
                  "Soy Yeni Arriarán, terapeuta especializada en Medicina Tradicional China y terapias energéticas. Mi camino empezó desde un lugar muy personal."
                </p>
                <p>
                  Durante muchos años trabajé como directora financiera, con un nivel de exigencia alto y jornadas largas. Con el tiempo, ese ritmo fue afectando mi salud: mi cuerpo empezó a debilitarse y viví un periodo de desequilibrio importante.
                </p>
                <p>
                  En ese proceso recibí un diagnóstico de adenoma hipofisario pequeño. Fue un antes y un después: entendí que necesitaba mirar la salud de otra manera, más integral.
                </p>
                <p>
                  Descubrí la Medicina Tradicional China, que me abrió un mundo completamente nuevo: un enfoque que observa a la persona como un todo—cuerpo, emociones, energía y hábitos—y no solo el síntoma. Ahí fue donde empecé a sentir un alivio real y sostenido.
                </p>
                <p>
                  Esa transformación me impulsó a formarme para acompañar a otras personas que se sienten cansadas, con dolor o con ansiedad. Hoy mi misión es ayudarte a recuperar tu equilibrio con un abordaje profesional y humano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="py-24 bg-light relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform origin-top"></div>
        
        <div className="max-w-[1140px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Misión */}
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Heart size={32} />
              </div>
              <h3 className="text-3xl font-bold text-dark mb-6">Nuestra Misión</h3>
              <p className="text-textGray text-lg leading-relaxed">
                Acompañar a cada persona de forma cercana y personalizada, combinando la Medicina Tradicional China y terapias holísticas para aliviar el dolor, reducir el estrés y mejorar el equilibrio físico, emocional y mental. Nuestro compromiso es ofrecer un espacio de escucha, respeto y confianza.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-500 md:mt-12">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold text-dark mb-6">Nuestra Visión</h3>
              <p className="text-textGray text-lg leading-relaxed">
                Crear un espacio donde la salud se viva con más conciencia y menos prisa. Queremos ser un centro reconocido por su trato humano y un enfoque integrativo que aporte resultados y confianza. Soñamos con una comunidad que cuide su cuerpo, su mente y su energía para mejorar su calidad de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES / ELEGIRNOS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">¿Por qué confiar en nosotros?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Atención Humana", desc: "No tratamos enfermedades, acompañamos a personas." },
               { title: "Enfoque Integral", desc: "Equilibramos cuerpo, mente y energía vital." },
               { title: "Paz y Conciencia", desc: "Un espacio diseñado para sanar sin prisas." }
             ].map((item, idx) => (
               <div key={idx} className="text-center group p-6">
                  <div className="w-20 h-20 bg-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-dark mb-3">{item.title}</h4>
                  <p className="text-textGray">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;