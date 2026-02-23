import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Calendar, CheckCircle, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { servicesList } from '../data/services';

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

        <div className="relative z-20 px-4 max-w-4xl mx-auto mt-16 animate-slide-in-left">
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
            <h2 className="text-4xl font-bold text-dark mb-4 uppercase tracking-wider">Nuestros servicios</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Fila 1 */}
            <div className="flex flex-col md:flex-row h-[600px] md:h-[450px] gap-4">
              {servicesList.slice(0, 3).map((service, index) => (
                <Link 
                  key={index} 
                  to={`/services#${service.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                  className="group relative flex-[1] hover:flex-[3] transition-all duration-700 ease-in-out overflow-hidden rounded-xl shadow-lg"
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/60 transition-all duration-700"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-secondary mb-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
                    
                    {/* Previa de Texto con Máscara de Transparencia (Efecto Desvanecido) */}
                    <div className="relative max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out">
                      <p 
                        className="text-gray-200 text-sm md:text-base leading-relaxed mb-2 [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]"
                      >
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-300 flex flex-col items-center gap-2">
                      <span className="inline-flex items-center gap-2 border border-white/40 text-white text-xs py-2 px-4 rounded-full uppercase tracking-tighter hover:bg-white hover:text-primary transition-all duration-300">
                        Ver más <ChevronDown size={14} className="animate-bounce" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Fila 2 */}
            <div className="flex flex-col md:flex-row h-[600px] md:h-[450px] gap-4">
              {servicesList.slice(3, 6).map((service, index) => (
                <Link 
                  key={index} 
                  to={`/services#${service.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                  className="group relative flex-[1] hover:flex-[3] transition-all duration-700 ease-in-out overflow-hidden rounded-xl shadow-lg"
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/60 transition-all duration-700"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-secondary mb-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
                    
                    {/* Previa de Texto con Máscara de Transparencia (Efecto Desvanecido) */}
                    <div className="relative max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out">
                      <p 
                        className="text-gray-200 text-sm md:text-base leading-relaxed mb-2 [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]"
                      >
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-300 flex flex-col items-center gap-2">
                      <span className="inline-flex items-center gap-2 border border-white/40 text-white text-xs py-2 px-4 rounded-full uppercase tracking-tighter hover:bg-white hover:text-primary transition-all duration-300">
                        Ver más <ChevronDown size={14} className="animate-bounce" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-dark transition-all duration-300 transform hover:-translate-y-1">
              Explorar Todos los Servicios
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

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-light overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl font-bold text-dark mb-2">Testimonios</h2>
            <div className="w-12 h-1 bg-primary rounded mx-auto mb-4"></div>
            <p className="text-textGray">Lo que dicen nuestros pacientes sobre nosotros</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
};

export default Home;