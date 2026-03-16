import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, HeartPulse, CheckCircle, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { servicesList } from '../data/services';
import heroVideo from '../assets/videos/videostudioloop.mp4';

// Custom BedPulse icon from user's camapulso.svg
const BedPulseIcon = ({ size = 40 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 226 184" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(0, 184) scale(0.1, -0.1)">
      <path d="M1636 1687 c-9 -12 -47 -92 -87 -177 -39 -85 -74 -159 -79 -164 -4 -4 -32 27 -61 70 -29 44 -57 82 -63 86 -6 4 -64 8 -128 8 -114 0 -118 -1 -134 -25 -15 -23 -15 -27 0 -50 16 -24 21 -25 115 -25 l98 0 62 -94 c73 -110 91 -129 123 -124 25 3 46 40 147 258 49 108 54 114 67 95 8 -11 35 -46 59 -77 l45 -58 119 0 c126 0 151 8 151 50 0 40 -26 50 -128 50 l-97 1 -55 75 c-95 132 -123 150 -154 101z"/>
      <path d="M286 1488 c-14 -20 -16 -101 -16 -678 0 -577 2 -658 16 -678 18 -26 46 -28 68 -6 13 12 16 41 16 150 l0 134 800 0 800 0 0 -128 c0 -99 3 -132 16 -150 18 -26 46 -28 69 -6 14 15 16 57 13 393 l-3 376 -26 56 c-60 127 -166 198 -311 206 l-83 5 -17 -31 c-9 -17 -32 -40 -50 -51 l-33 -20 115 0 c100 0 122 -3 166 -24 59 -27 116 -90 132 -145 7 -22 12 -109 12 -210 l0 -171 -350 0 -350 0 0 258 c0 293 0 292 76 292 l40 0 -45 48 c-41 43 -49 47 -72 40 -39 -13 -79 -60 -90 -104 -4 -22 -9 -150 -9 -286 l0 -248 -400 0 -400 0 0 484 c0 427 -2 486 -16 500 -22 22 -50 20 -68 -6z"/>
      <path d="M710 1151 c-152 -50 -225 -203 -163 -341 82 -183 337 -198 438 -26 70 120 25 281 -96 344 -49 25 -138 37 -179 23z m130 -109 c107 -53 107 -211 0 -264 -75 -38 -167 -8 -201 65 -23 53 -23 81 0 134 34 73 126 103 201 65z"/>
    </g>
  </svg>
);

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <SEO
        title="Inicio"
        description="Bienvenido a Medico. Especialistas en Acupuntura, Fisioterapia y Terapias Holísticas para tu bienestar integral en Lima."
      />
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Video Background with Image Fallback */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            <img
              src={IMAGES.heroBackground}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
        </div>

        <div className="relative z-20 px-4 max-w-4xl mx-auto mt-8 animate-slide-in-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Acupuntura y Terapias Holísticas
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-6">
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

      {/* INFO BAR - Overlap Hero */}
      <div className="relative z-30 -mt-20 px-4">
        <div className="max-w-[1140px] mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-10 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Item 1 */}
            <div className="flex items-start gap-5">
              <div className="text-secondary bg-secondary/10 p-4 rounded-2xl flex-shrink-0">
                <Stethoscope size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Especialistas Expertos</h3>
                <p className="text-textGray text-sm leading-relaxed">
                  Profesionales certificados en Medicina Tradicional China para tu salud integral.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-5">
              <div className="text-secondary bg-secondary/10 p-4 rounded-2xl flex-shrink-0">
                <BedPulseIcon size={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Salas de Tratamiento</h3>
                <p className="text-textGray text-sm leading-relaxed">
                  Ambientes diseñados para la relajación y el equilibrio de tu energía vital.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-5">
              <div className="text-secondary bg-secondary/10 p-4 rounded-2xl flex-shrink-0">
                <HeartPulse size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Garantía de Cuidado</h3>
                <p className="text-textGray text-sm leading-relaxed">
                  Compromiso total con tu bienestar físico, mental y emocional en cada sesión.
                </p>
              </div>
            </div>

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
            <div className="relative flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 aspect-[9/16] w-full max-w-[320px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/geJt7ahL1-E?autoplay=0&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
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