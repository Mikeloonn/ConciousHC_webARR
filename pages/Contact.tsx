import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div>
      <SEO 
        title="Contacto" 
        description="Contáctanos para agendar tu cita. Estamos ubicados en Lima, Perú. Llámanos o escríbenos para iniciar tu terapia." 
      />
      <PageHeader title="CONTACTO" breadcrumb="Contacto" />
      
      <section className="py-20 bg-light">
        <div className="max-w-[1140px] mx-auto px-4">
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 text-center rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Teléfono</h3>
              <p className="text-textGray">(+51) 098765432</p>
            </div>
            <div className="bg-white p-8 text-center rounded-lg shadow-sm">
               <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-textGray">info@clinicamedico.com</p>
            </div>
            <div className="bg-white p-8 text-center rounded-lg shadow-sm">
               <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Dirección</h3>
              <p className="text-textGray">Av. Principal 123, Lima, Perú</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
             {/* Map Placeholder */}
             <div className="lg:w-1/2 bg-gray-200 min-h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.666999999999!2d-77.042793!3d-12.046374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b74c0e66c9%3A0x6739379654109c91!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
             </div>

             {/* Form */}
             <div className="lg:w-1/2 p-10">
                <h2 className="text-3xl font-bold text-dark mb-6">Envíanos un mensaje</h2>
                <form className="space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Tu Nombre" className="w-full bg-light border border-transparent focus:border-primary focus:bg-white rounded py-3 px-4 outline-none transition-colors" />
                      <input type="email" placeholder="Tu Email" className="w-full bg-light border border-transparent focus:border-primary focus:bg-white rounded py-3 px-4 outline-none transition-colors" />
                   </div>
                   <input type="text" placeholder="Asunto" className="w-full bg-light border border-transparent focus:border-primary focus:bg-white rounded py-3 px-4 outline-none transition-colors" />
                   <textarea rows={5} placeholder="Mensaje" className="w-full bg-light border border-transparent focus:border-primary focus:bg-white rounded py-3 px-4 outline-none resize-none transition-colors"></textarea>
                   
                   {/* Terms Checkbox */}
                   <div className="flex items-start gap-3 py-2">
                     <input 
                       type="checkbox" 
                       id="terms" 
                       className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                       checked={termsAccepted}
                       onChange={(e) => setTermsAccepted(e.target.checked)}
                     />
                     <label htmlFor="terms" className="text-sm text-textGray leading-tight select-none cursor-pointer">
                       He leído y acepto la <Link to="/privacy" className="text-primary hover:underline">Política de Privacidad</Link> y consiento el tratamiento de mis datos.
                     </label>
                   </div>

                   <button 
                    type="submit" 
                    disabled={!termsAccepted}
                    className={`bg-primary text-white font-bold py-3 px-8 rounded transition-colors w-full md:w-auto ${
                      !termsAccepted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark cursor-pointer'
                    }`}
                   >
                      ENVIAR MENSAJE
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;