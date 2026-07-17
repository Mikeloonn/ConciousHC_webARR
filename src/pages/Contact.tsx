import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import PageHeader from '../components/PageHeader';
import { Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

// Componente de texto animado en cascada
const AnimatedText = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const elements = textRef.current.querySelectorAll('.split-item');

    const ctx = gsap.context(() => {
      gsap.fromTo(elements,
        { 
          y: 80, 
          opacity: 0,
          rotateX: 45 
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.03,
          ease: 'power4.out',
          delay: delay,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
          }
        }
      );
    }, textRef);
    
    return () => ctx.revert();
  }, [delay]);

  return (
    <span ref={textRef} className={`inline-block ${className}`} style={{ perspective: '1000px' }}>
      {text.split(' ').map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, charIdx) => (
            <span key={charIdx} className="split-item inline-block origin-bottom opacity-0">
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

// Icono de WhatsApp
const WhatsappIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.883-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

// Textura de partículas
const createParticleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d')!;
  ctx.beginPath();
  ctx.arc(16, 16, 16, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fill();
  return new THREE.CanvasTexture(canvas);
};

const Contact: React.FC = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const MAX_CHARS = 500;
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Lógica del fondo 3D de partículas reactivo al tema
  useEffect(() => {
    let renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera;
    let animId: number;
    let resizeObserver: ResizeObserver;
    
    let geometry: THREE.BufferGeometry;
    let material: THREE.PointsMaterial;
    let particleTexture: THREE.CanvasTexture;

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const section = canvas.parentElement;
      
      if (section) {
        scene = new THREE.Scene();
        // Niebla dinámica según el tema seleccionado
        scene.fog = new THREE.Fog(isLight ? '#F4F5F0' : '#0a0a08', 2, 12);
        
        camera = new THREE.PerspectiveCamera(60, section.clientWidth / section.clientHeight, 0.1, 100);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(section.clientWidth, section.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const count = 3000;
        const positions = new Float32Array(count * 3);
        
        for (let i = 0; i < count; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 15;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }

        geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        particleTexture = createParticleTexture();

        // Color de partícula adaptado al contraste del fondo
        material = new THREE.PointsMaterial({
          color: new THREE.Color(isLight ? '#6B7B54' : '#b3bda3'),
          size: 0.035,
          map: particleTexture,
          transparent: true,
          opacity: isLight ? 0.4 : 0.8, // Menor opacidad en modo claro para una sutileza sublime
          depthWrite: false,
          blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
          sizeAttenuation: true,
          alphaTest: 0.001
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        resizeObserver = new ResizeObserver(() => {
          camera.aspect = section.clientWidth / section.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(section.clientWidth, section.clientHeight);
        });
        resizeObserver.observe(section);

        const clock = new THREE.Clock();

        const animate = () => {
          animId = requestAnimationFrame(animate);
          const elapsedTime = clock.getElapsedTime();
          particles.rotation.x = elapsedTime * 0.02;
          particles.rotation.y = elapsedTime * 0.03;
          renderer.render(scene, camera);
        };
        animate();
      }
    }

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      cancelAnimationFrame(animId);
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (particleTexture) particleTexture.dispose();
      if (renderer) renderer.dispose();
    };
  }, [theme, isLight]);

  // Animaciones de revelado general
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        );
      });
      
      gsap.fromTo('.glass-card', 
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.glass-card',
            start: 'top 85%'
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/ajax/acupunturaholisticayeni@gmail.com", {
        method: "POST",
        body: formData
      });
    } catch (error) {
      // Manejo silencioso
    } finally {
      setIsSubmitted(true);
      setIsSubmitting(false);
      e.currentTarget.reset();
      setTermsAccepted(false);
      setMessage('');
    }
  };

  return (
    <main className="bg-bg-base text-text-main min-h-screen w-full overflow-hidden pb-20 transition-colors duration-600">
      <SEO
        title="Contacto"
        description="Contáctanos para agendar tu cita. Estamos ubicados en Torremolinos, Málaga. Llámanos o escríbenos para iniciar tu terapia."
      />
      <PageHeader title="CONTACTO" breadcrumb="Contacto" />

      <section className="relative py-24 md:py-32">
        <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none"></canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-base via-transparent to-bg-base z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

          {/* TARJETAS DE INFORMACIÓN */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
            
            {/* Tarjeta 1: WhatsApp */}
            <div className="reveal-up">
              <a href="https://wa.me/34624253470" target="_blank" rel="noopener noreferrer" className="glass-card p-8 md:p-10 text-center flex flex-col items-center justify-center h-full block group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-sage/20 to-transparent rounded-full flex items-center justify-center mb-6 text-accent-sage border border-accent-sage/30 group-hover:scale-110 transition-transform duration-500">
                  <WhatsappIcon size={28} />
                </div>
                <h3 className="font-serif text-2xl text-text-main mb-3">
                  <AnimatedText text="WhatsApp" />
                </h3>
                <span className="text-text-muted group-hover:text-text-main transition-colors font-sans tracking-widest text-sm break-all">
                  +34 624 253 470
                </span>
              </a>
            </div>
            
            {/* Tarjeta 2: Email */}
            <div className="reveal-up">
              <a href="mailto:acupunturaholisticayeni@gmail.com" className="glass-card p-8 md:p-10 text-center flex flex-col items-center justify-center h-full block group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-gold/20 to-transparent rounded-full flex items-center justify-center mb-6 text-accent-gold border border-accent-gold/30 group-hover:scale-110 transition-transform duration-500">
                  <Mail size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-text-main mb-3">
                  <AnimatedText text="Email" delay={0.1} />
                </h3>
                <span className="text-text-muted group-hover:text-text-main transition-colors font-sans text-sm break-all">
                  acupunturaholisticayeni@gmail.com
                </span>
              </a>
            </div>
            
            {/* Tarjeta 3: Dirección */}
            <div className="reveal-up">
              <a href="https://maps.google.com/?q=Plaza+Andalucía+4,+Torremolinos,+Málaga" target="_blank" rel="noopener noreferrer" className="glass-card p-8 md:p-10 text-center flex flex-col items-center justify-center h-full block group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-sage/20 to-transparent rounded-full flex items-center justify-center mb-6 text-accent-sage border border-accent-sage/30 group-hover:scale-110 transition-transform duration-500">
                  <MapPin size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-text-main mb-3">
                  <AnimatedText text="Dirección" delay={0.2} />
                </h3>
                <p className="text-text-muted leading-relaxed font-sans text-sm transition-colors group-hover:text-text-main">
                  Plaza Andalucía 4, Centro Comercial España local 81, 29620 - Torremolinos, Málaga.
                </p>
              </a>
            </div>

          </div>

          {/* SECCIÓN DIVIDIDA: MAPA Y FORMULARIO */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            <div>
              <span className="section-label reveal-up block">Conecta con Nosotros</span>
              <h2 className="section-heading text-[clamp(2.5rem,5vw,4rem)] mt-4 mb-8">
                <AnimatedText text="Comienza tu" className="block" />
                <br />
                <AnimatedText text="camino" className="italic text-accent-gold" delay={0.2} /> <AnimatedText text="hoy" delay={0.4} />
              </h2>
              <div className="organic-divider mb-8 reveal-up"></div>
              <p className="text-text-muted leading-relaxed mb-10 reveal-up">
                Estamos aquí para acompañarte. Cuéntanos cómo te sientes y juntos encontraremos el camino hacia tu equilibrio. Tu primera consulta es el primer paso hacia una nueva versión de ti.
              </p>

              <div className="glass-card p-2 rounded-3xl h-[350px] md:h-[400px] overflow-hidden group reveal-up">
                <iframe
                  src="https://maps.google.com/maps?q=Plaza%20Andalucía%204,%20Torremolinos,%20Málaga&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1.25rem', filter: 'grayscale(0.6) contrast(1.1) opacity(0.8)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Ubicación de la Clínica"
                  className="transition-all duration-700 group-hover:filter-none"
                ></iframe>
              </div>
            </div>

            <div className="reveal-up">
              <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-12 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold rounded-full blur-[80px] opacity-10 pointer-events-none"></div>

                <h3 className="font-serif text-3xl text-text-main mb-8">
                  <AnimatedText text="Envíanos un mensaje" delay={0.1} />
                </h3>

                <input type="hidden" name="_subject" value="¡Nuevo mensaje desde tu web de Acupuntura!" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">Nombre completo</label>
                    <input type="text" name="Nombre" maxLength={50} required placeholder="Tu nombre" 
                      className="w-full bg-text-main/5 border border-text-main/10 rounded-xl px-5 py-4 text-text-main font-sans text-sm outline-none focus:border-accent-sage/40 focus:bg-text-main/10 focus:shadow-[0_0_20px_rgba(179,189,163,0.05)] transition-all placeholder:text-text-main/20" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">Email</label>
                    <input type="email" name="Email" maxLength={100} required placeholder="tu@email.com" 
                      className="w-full bg-text-main/5 border border-text-main/10 rounded-xl px-5 py-4 text-text-main font-sans text-sm outline-none focus:border-accent-sage/40 focus:bg-text-main/10 focus:shadow-[0_0_20px_rgba(179,189,163,0.05)] transition-all placeholder:text-text-main/20" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">Asunto</label>
                  <input type="text" name="Asunto" maxLength={100} required placeholder="¿En qué te podemos ayudar?" 
                    className="w-full bg-text-main/5 border border-text-main/10 rounded-xl px-5 py-4 text-text-main font-sans text-sm outline-none focus:border-accent-sage/40 focus:bg-text-main/10 focus:shadow-[0_0_20px_rgba(179,189,163,0.05)] transition-all placeholder:text-text-main/20" />
                </div>
                
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    name="Mensaje"
                    required
                    placeholder="Cuéntanos tus síntomas o dudas..."
                    maxLength={MAX_CHARS}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-text-main/5 border border-text-main/10 rounded-xl px-5 py-4 text-text-main font-sans text-sm outline-none focus:border-accent-sage/40 focus:bg-text-main/10 focus:shadow-[0_0_20px_rgba(179,189,163,0.05)] transition-all resize-none placeholder:text-text-main/20"
                  ></textarea>
                  <div className="text-right text-[10px] tracking-[0.1em] text-text-muted/40 mt-2 uppercase">
                    {MAX_CHARS - message.length} caracteres restantes
                  </div>
                </div>

                {/* Checkbox Términos */}
                <div className="flex items-start gap-4 py-2">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input
                      type="checkbox"
                      id="terms"
                      className="peer appearance-none w-5 h-5 border border-text-main/20 rounded-md bg-text-main/5 checked:bg-gradient-to-br checked:from-accent-sage checked:to-accent-gold checked:border-transparent transition-all cursor-pointer outline-none focus:ring-2 focus:ring-accent-gold/30"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <svg className="absolute w-3 h-3 text-bg-base pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <label htmlFor="terms" className="text-xs text-text-muted/60 leading-relaxed cursor-pointer select-none">
                    He leído y acepto la <Link to="/privacy" className="text-accent-gold hover:text-text-main transition-colors underline underline-offset-4">Política de Privacidad</Link> y consiento el tratamiento de mis datos.
                  </label>
                </div>

                {/* Alerta de Éxito */}
                {isSubmitted && (
                  <div className="p-4 bg-gradient-to-r from-accent-sage/20 to-transparent border-l-2 border-accent-sage text-text-main rounded-r-lg text-sm font-medium animate-fade-in">
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo muy pronto.
                  </div>
                )}

                {/* Botón de Enviar */}
                <button
                  type="submit"
                  disabled={!termsAccepted || isSubmitting}
                  className={`w-full relative overflow-hidden bg-gradient-to-br from-accent-sage/20 to-accent-gold/15 border border-accent-sage/30 text-text-main font-sans text-xs tracking-[0.2em] uppercase py-4 rounded-xl transition-all duration-500 
                    ${!termsAccepted || isSubmitting 
                      ? 'opacity-40 cursor-not-allowed grayscale' 
                      : 'hover:border-accent-sage/60 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_40px_rgba(179,189,163,0.15)] cursor-pointer'
                    }`}
                >
                  <span className="relative z-10 font-bold">{isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}</span>
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;