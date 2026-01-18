import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Calendar, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <SEO 
        title="Inicio" 
        description="Bienvenido a Medico. Especialistas en Acupuntura, Fisioterapia y Terapias Holísticas para tu bienestar integral en Lima." 
      />
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Video Background Fallback to Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.heroBackground}
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
        </div>

        <div className="relative z-20 px-4 max-w-4xl mx-auto mt-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Acupuntura y Terapias Holísticas
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
            con Yeni Arriarán
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor.
          </p>
          <Link to="/services" className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-medium uppercase hover:bg-white hover:text-primary transition-all duration-300">
            Nuestros Servicios
          </Link>
        </div>
      </section>

      {/* INFO BAR - Negative Margin to overlap Hero */}
      <div className="relative z-30 -mt-16 px-4">
        <div className="max-w-[900px] mx-auto bg-primary rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/contact" className="group flex flex-col items-center justify-center text-white p-4 rounded transition-all hover:bg-accent hover:-translate-y-1">
              <Clock size={40} className="mb-3 text-secondary" />
              <h3 className="text-lg font-medium">Horario de Atención</h3>
            </Link>
            <Link to="/contact" className="group flex flex-col items-center justify-center text-white p-4 rounded transition-all hover:bg-accent hover:-translate-y-1">
              <MapPin size={40} className="mb-3 text-secondary" />
              <h3 className="text-lg font-medium">Ubicación</h3>
            </Link>
            <Link to="/contact" className="group flex flex-col items-center justify-center text-white p-4 rounded transition-all hover:bg-accent hover:-translate-y-1">
              <Calendar size={40} className="mb-3 text-secondary" />
              <h3 className="text-lg font-medium">Contacto</h3>
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-dark mb-2">Acerca de nosotros</h2>
                <div className="w-12 h-1 bg-primary rounded"></div>
              </div>
              <p className="text-textGray text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, illo dolore enim vero aspernatur tempora sapiente corporis sunt deserunt animi.
              </p>
              <ul className="space-y-2 mb-8">
                {['Profesionales certificados', 'Atención personalizada', 'Ambiente relajante'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-textGray">
                    <CheckCircle size={18} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-primary font-bold hover:text-accent underline decoration-2 underline-offset-4">
                Leer más
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                   src={IMAGES.aboutHome}
                   alt="About Us" 
                   className="w-full h-auto"
                />
                {/* Simulated Play Button for Video */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/80 rounded-full p-4">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-primary border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-light">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Nuestros servicios</h2>
            <div className="w-12 h-1 bg-primary rounded mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Acupuntura', img: IMAGES.services.acupuntura },
              { title: 'Auriculoterapia', img: IMAGES.services.auriculoterapia },
              { title: 'Fitoterapia', img: IMAGES.services.fitoterapia }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-textGray mb-4 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ipsum, quae voluptatem pariatur autem nam fuga delectus.
                  </p>
                  <Link to="/services" className="text-primary font-semibold hover:text-accent text-sm uppercase">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block bg-primary text-white px-8 py-3 shadow-lg hover:bg-dark transition-colors duration-300">
              Ver más servicios
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIALIST SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img 
                src={IMAGES.specialist}
                alt="Yeni Arriarán" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-4xl font-bold text-dark mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-primary">
                Conoce a nuestra Terapista
              </h2>
              <p className="text-lg text-textGray mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-textGray mb-8 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              </p>
              <Link to="/contact" className="btn btn-primary bg-primary text-white px-6 py-3 rounded hover:bg-accent transition-colors">
                Contactar Especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO VIDEO SECTION */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Promociones del Mes</h2>
          <p className="text-gray-300 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ullam hic, quas ex rerum voluptatem ducimus temporibus neque ipsam, maxime esse cum amet.
          </p>
          <div className="aspect-w-16 aspect-h-9 w-full bg-black rounded-xl overflow-hidden shadow-2xl">
             {/* Placeholder for iframe */}
             <div className="w-full aspect-video bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Video Promocional Player</span>
             </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM PREVIEW */}
      <section className="py-20 bg-light">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Formulario de contacto</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre" className="w-full border-b border-light py-2 px-3 focus:border-primary outline-none transition-colors" />
                  <input type="email" placeholder="Correo electrónico" className="w-full border-b border-light py-2 px-3 focus:border-primary outline-none transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Teléfono" className="w-full border-b border-light py-2 px-3 focus:border-primary outline-none transition-colors" />
                  <input type="text" placeholder="Asunto" className="w-full border-b border-light py-2 px-3 focus:border-primary outline-none transition-colors" />
                </div>
                <textarea rows={4} placeholder="Déjanos tu mensaje" className="w-full border-b border-light py-2 px-3 focus:border-primary outline-none resize-none transition-colors"></textarea>
                
                <div className="flex items-start gap-2 text-sm text-textGray mt-4">
                   <input type="checkbox" id="policy" className="mt-1" />
                   <label htmlFor="policy">
                     He leído y estoy de acuerdo con los <a href="#" className="text-primary hover:underline">términos y condiciones</a>.
                   </label>
                </div>

                <button type="button" className="mt-6 bg-light text-textGray px-6 py-3 font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-md">
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div className="md:w-2/5 relative">
              <img src={IMAGES.contactPreview} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;