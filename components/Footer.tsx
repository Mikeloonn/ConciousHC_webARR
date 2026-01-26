import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { footerLinks, footerAbout, footerHours, footerBottomLinks } from '../data/footer';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Column 1: About */}
          <div>
            <h2 className="text-xl font-bold mb-1 text-white">{footerAbout.title}</h2>
            <div className="text-secondary text-xs mb-4">_____________</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {footerAbout.description}
            </p>
          </div>

          {/* Column 2: Links */}
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


          {/* Column 3: Subscribe */}
          <div>
            <h2 className="text-xl font-bold mb-1 text-white">Suscríbete</h2>
            <div className="text-secondary text-xs mb-4">_____________</div>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="bg-primary/50 border border-gray-600 rounded px-4 py-2 text-sm focus:outline-none focus:border-secondary text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-secondary text-dark font-bold py-2 rounded transition-colors duration-300 text-sm uppercase"
              >
                Suscribirse
              </button>
            </form>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h2 className="text-xl font-bold mb-1 text-white">Horarios</h2>
            <div className="text-secondary text-xs mb-4">_____________</div>
            <div className="space-y-4">
              {footerHours.map((schedule, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Clock className="text-secondary w-8 h-8" />
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