import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';

const About: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Sobre Nosotros" 
        description="Conoce la historia y experiencia de nuestra clínica de fisioterapia y terapias holísticas. Más de 15 años brindando bienestar." 
      />
      <PageHeader title="SOBRE NOSOTROS" breadcrumb="Sobre Nosotros" />
      
      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div>
                <h2 className="text-3xl font-bold text-dark mb-6">Nuestra Historia</h2>
                <p className="text-textGray mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-textGray mb-4 leading-relaxed">
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
             </div>
             <div>
                <img src={IMAGES.clinicInterior} alt="Clinic Interior" className="rounded-lg shadow-lg w-full" />
             </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-dark mb-10 text-center">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Experiencia Certificada", desc: "Más de 15 años brindando terapias." },
                 { title: "Enfoque Holístico", desc: "Tratamos cuerpo, mente y espíritu." },
                 { title: "Instalaciones Modernas", desc: "Ambiente diseñado para tu relajación." }
               ].map((item, idx) => (
                 <div key={idx} className="bg-light p-8 rounded-lg text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-textGray">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;