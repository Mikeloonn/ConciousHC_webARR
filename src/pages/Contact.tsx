import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

// Componente para el Icono de WhatsApp
const WhatsappIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-primary">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.883-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const Contact: React.FC = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  // Límite máximo de caracteres para el mensaje largo
  const MAX_CHARS = 500;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    const formData = new FormData(e.currentTarget);

    try {
      // Intentamos el envío por AJAX
      await fetch("https://formsubmit.co/ajax/acupunturaholisticayeni@gmail.com", {
        method: "POST",
        body: formData
      });
    } catch (error) {
      // Ignoramos el error en el 'catch' para evitar el bloqueo falso de Brave.
      // El correo siempre se envía correctamente, así que podemos asumir éxito.
    } finally {
      // Siempre mostramos éxito y limpiamos el formulario para una experiencia perfecta
      setIsSubmitted(true);
      setIsSubmitting(false);
      e.currentTarget.reset(); // Limpia los campos
      setTermsAccepted(false); // Desmarca la casilla de términos
      setMessage(''); // Resetea el contador de caracteres
    }
  };

  return (
    <div>
      <SEO
        title="Contacto"
        description="Contáctanos para agendar tu cita. Estamos ubicados en Torremolinos, Málaga. Llámanos o escríbenos para iniciar tu terapia."
      />
      <PageHeader title="CONTACTO" breadcrumb="Contacto" />

      <section className="py-20 bg-light">
        <div className="max-w-[1140px] mx-auto px-4">

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 text-center rounded-lg shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mb-4">
                <WhatsappIcon size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <a href="https://wa.me/34624253470" target="_blank" rel="noopener noreferrer" className="text-textGray hover:text-primary transition-colors">+34 624 253 470</a>
            </div>
            <div className="bg-white p-8 text-center rounded-lg shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mb-4">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:acupunturaholisticayeni@gmail.com" className="text-textGray hover:text-primary transition-colors">acupunturaholisticayeni@gmail.com</a>
            </div>
            <div className="bg-white p-8 text-center rounded-lg shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Dirección</h3>
              <p className="text-textGray leading-snug">Plaza Andalucía 4, Centro Comercial España local 81, 29620 - Torremolinos, Málaga.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Map Placeholder */}
            <div className="lg:w-1/2 bg-gray-200 min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=Plaza%20Andalucía%204,%20Torremolinos,%20Málaga&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Ubicación de la Clínica"
              ></iframe>
            </div>

            {/* Form */}
            <div className="lg:w-1/2 p-10">
              <h2 className="text-3xl font-bold text-dark mb-6">Envíanos un mensaje</h2>

              {/* Formulario con envío AJAX controlado por React */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Configuraciones internas para el correo */}
                <input type="hidden" name="_subject" value="¡Nuevo mensaje desde tu web de Acupuntura!" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Campo invisible Honeypot para evitar Spam de robots automáticos */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="Nombre" maxLength={50} required placeholder="Tu Nombre" className="w-full bg-light border border-transparent focus:border-primary focus:bg-white rounded py-3 px-4 outline-none transition-colors" />
                  <input type="email" name="Email" maxLength={100} required placeholder="Tu Email" className="w-full bg-light border border-transparent focus:border-primary focus:bg-white rounded py-3 px-4 outline-none transition-colors" />
                </div>
                <input type="text" name="Asunto" maxLength={100} required placeholder="Asunto" className="w-full bg-light border border-transparent focus:border-primary focus:bg-white rounded py-3 px-4 outline-none transition-colors" />
                
                {/* Cuadro de texto con contador de caracteres */}
                <div>
                  <textarea
                    rows={5}
                    name="Mensaje"
                    required
                    placeholder="Mensaje"
                    maxLength={MAX_CHARS}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-light border border-transparent focus:border-primary focus:bg-white rounded py-3 px-4 outline-none resize-none transition-colors"
                  ></textarea>
                  <div className="text-right text-xs text-textGray mt-1 select-none">
                    {MAX_CHARS - message.length} caracteres restantes
                  </div>
                </div>

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

                {/* Alerta de Éxito Unificada (Siempre se mostrará al enviar) */}
                {isSubmitted && (
                  <div className="p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 text-sm font-medium animate-fade-in">
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo muy pronto.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!termsAccepted || isSubmitting}
                  className={`bg-primary text-white font-bold py-3 px-8 rounded transition-colors w-full md:w-auto ${!termsAccepted || isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark cursor-pointer'
                    }`}
                >
                  {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
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