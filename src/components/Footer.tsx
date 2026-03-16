import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Facebook, Youtube, Instagram } from 'lucide-react';
import { footerLinks, footerAbout, footerHours, footerBottomLinks } from '../data/footer';
import logo from '../assets/images/logohc.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Brand Intro */}
          <div className="flex flex-col items-center text-center">
            <Link to="/" className="flex flex-col items-center mb-6 group">
              <div className="relative mb-3 h-16 group-hover:h-28 transition-all duration-500 ease-in-out">
                <img
                  src={logo}
                  alt="Logo Conscious Healing Center"
                  className="h-16 w-16 group-hover:h-28 group-hover:w-24 rounded-full group-hover:rounded-xl object-cover border-2 border-secondary/20 transition-all duration-500 ease-in-out shadow-sm group-hover:shadow-secondary/20"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl leading-none tracking-tight text-white group-hover:text-secondary transition-colors duration-300">
                  Conscious Healing
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-secondary">
                  Center
                </span>
              </div>
            </Link>
            
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
              ¡RECOMIENZA, PARA SEGUIR!
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Te inspira a recordar ese motivo especial que lo inicio todo y que cada día te impulsa a seguir adelante.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-dark transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-dark transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-dark transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h2 className="text-xl font-bold mb-1 text-white">{footerAbout.title}</h2>
            <div className="text-secondary text-xs mb-4">_____________</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footerAbout.description}
            </p>
          </div>

          {/* Column 3: Links (Legal) */}
          <div>
            <h2 className="text-xl font-bold mb-1 text-white">Legal</h2>
            <div className="text-secondary text-xs mb-4">_____________</div>
            <div className="flex flex-col gap-2">
              <Link to="/legal" className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200">
                Aviso Legal
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200">
                Política de Privacidad
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200">
                Política de Cookies
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200">
                Servicios
              </Link>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h2 className="text-xl font-bold mb-1 text-white">Horarios</h2>
            <div className="text-secondary text-xs mb-4">_____________</div>
            <div className="space-y-4">
              {footerHours.map((schedule, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Clock className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{schedule.label}</p>
                    <p className="text-xs text-gray-400">{schedule.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; 2025 Acupuntura y Terapias Holísticas - Todos los derechos reservados
          </p>
          <div className="flex gap-4">
            {footerBottomLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-sm text-gray-300 hover:text-secondary font-bold">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;