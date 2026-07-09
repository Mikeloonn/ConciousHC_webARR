import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import { servicesList } from '../data/services';
import TestimonialCarousel from '../components/TestimonialCarousel';
import heroVideo from '../assets/videos/videostudioloop.mp4';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const servicesCanvasRef = useRef<HTMLCanvasElement>(null);
  const therapistCanvasRef = useRef<HTMLCanvasElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    // 1. Three.js Services Canvas (Líneas dinámicas del tema)
    let srvRenderer: THREE.WebGLRenderer, srvScene: THREE.Scene, srvCamera: THREE.PerspectiveCamera;
    let srvAnimId: number;
    let resizeObserverSrv: ResizeObserver;

    if (servicesCanvasRef.current) {
      const canvas = servicesCanvasRef.current;
      const section = canvas.parentElement;
      if (section) {
        srvScene = new THREE.Scene();
        srvCamera = new THREE.PerspectiveCamera(60, section.clientWidth / section.clientHeight, 0.1, 100);
        srvRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        srvRenderer.setSize(section.clientWidth, section.clientHeight);
        srvRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const planeGeo = new THREE.PlaneGeometry(30, 30, 80, 80);
        const srvPlaneMat = new THREE.ShaderMaterial({
          uniforms: { 
            uTime: { value: 0 }, 
            uColor1: { value: new THREE.Color(isLight ? 0x6B7B54 : 0xb3bda3) }, 
            uColor2: { value: new THREE.Color(0xdf9e53) } 
          },
          vertexShader: `
            uniform float uTime; varying vec2 vUv; varying float vElevation;
            void main() {
              vUv = uv; vec3 pos = position;
              float wave1 = sin(pos.x * 0.5 + uTime * 0.4) * cos(pos.y * 0.3 + uTime * 0.3) * 0.8;
              float wave2 = sin(pos.x * 0.3 - uTime * 0.2) * sin(pos.y * 0.5 + uTime * 0.25) * 0.5;
              pos.z = wave1 + wave2; vElevation = pos.z;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 uColor1; uniform vec3 uColor2; uniform float uTime;
            varying vec2 vUv; varying float vElevation;
            void main() {
              float mixVal = (vElevation + 1.0) * 0.5;
              vec3 color = mix(uColor1, uColor2, mixVal);
              float alpha = smoothstep(0.0, 0.5, abs(vElevation)) * 0.08;
              gl_FragColor = vec4(color, alpha);
            }
          `,
          transparent: true, wireframe: true, side: THREE.DoubleSide
        });

        const plane = new THREE.Mesh(planeGeo, srvPlaneMat);
        plane.rotation.x = -Math.PI * 0.4; plane.position.y = -3;
        srvScene.add(plane);
        srvCamera.position.set(0, 5, 10); srvCamera.lookAt(0, 0, 0);

        resizeObserverSrv = new ResizeObserver(() => {
          if (srvCamera && srvRenderer && section) {
            srvCamera.aspect = section.clientWidth / section.clientHeight;
            srvCamera.updateProjectionMatrix();
            srvRenderer.setSize(section.clientWidth, section.clientHeight);
          }
        });
        resizeObserverSrv.observe(section);

        const animateSrv = () => {
          srvAnimId = requestAnimationFrame(animateSrv);
          srvPlaneMat.uniforms.uTime.value += 0.008;
          srvRenderer.render(srvScene, srvCamera);
        };
        animateSrv();
      }
    }

    // 2. Three.js Therapist Canvas (Partículas siempre doradas)
    let therRenderer: THREE.WebGLRenderer, therScene: THREE.Scene, therCamera: THREE.PerspectiveCamera;
    let therAnimId: number;
    let resizeObserverTher: ResizeObserver;

    if (therapistCanvasRef.current) {
      const canvas = therapistCanvasRef.current;
      const section = canvas.parentElement;
      if (section) {
        therScene = new THREE.Scene();
        therScene.fog = new THREE.Fog(isLight ? '#F4F5F0' : '#0a0a08', 2, 12);
        
        therCamera = new THREE.PerspectiveCamera(60, section.clientWidth / section.clientHeight, 0.1, 1000);
        therRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        therRenderer.setSize(section.clientWidth, section.clientHeight);
        therRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const particleCount = window.innerWidth < 768 ? 60 : 150;
        const positions = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const speeds = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 20; 
          positions[i * 3 + 1] = (Math.random() - 0.5) * 15; 
          positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; 
          sizes[i] = Math.random() * 2.0 + 0.5;
          speeds[i] = Math.random() * 0.01 + 0.002;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));

        const therMaterial = new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0 },
            uColor: { value: new THREE.Color(0xdf9e53) } // Partículas siempre en dorado mágico
          },
          vertexShader: `
            attribute float size;
            attribute float aSpeed;
            varying float vAlpha;
            uniform float uTime;
            void main() {
              vec3 pos = position;
              pos.y += mod(uTime * aSpeed * 50.0, 20.0) - 10.0;
              pos.x += sin(uTime * aSpeed * 10.0 + pos.y) * 0.5;
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (40.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
              vAlpha = smoothstep(10.0, 0.0, abs(pos.y)) * 0.6;
            }
          `,
          fragmentShader: `
            uniform vec3 uColor;
            varying float vAlpha;
            void main() {
              float dist = length(gl_PointCoord - vec2(0.5));
              if (dist > 0.5) discard;
              float glow = smoothstep(0.5, 0.0, dist);
              gl_FragColor = vec4(uColor, glow * vAlpha);
            }
          `,
          transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, therMaterial);
        therScene.add(particles);
        therCamera.position.z = 10;

        resizeObserverTher = new ResizeObserver(() => {
          if (therCamera && therRenderer && section) {
            therCamera.aspect = section.clientWidth / section.clientHeight;
            therCamera.updateProjectionMatrix();
            therRenderer.setSize(section.clientWidth, section.clientHeight);
          }
        });
        resizeObserverTher.observe(section);

        const animateTher = () => {
          therAnimId = requestAnimationFrame(animateTher);
          therMaterial.uniforms.uTime.value += 0.02;
          particles.rotation.y += 0.001; 
          therRenderer.render(therScene, therCamera);
        };
        animateTher();
      }
    }

    // 3. GSAP
    const initGSAPAnimations = () => {
      const heroTL = gsap.timeline({ delay: 0.2 });
      heroTL
        .to('#hero-sub', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
        .to('#hero-line', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to('#hero-line1', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.5')
        .to('#hero-line2', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.7')
        .to('#hero-line3', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.7')
        .to('#hero-desc', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
        .to('#hero-cta', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');

      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(el, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
        });
      });

      gsap.utils.toArray('.reveal-blur').forEach((el: any) => {
        gsap.fromTo(el, { opacity: 0, filter: 'blur(10px)' }, {
          opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
        });
      });

      gsap.utils.toArray('.parallax-layer').forEach((layer: any) => {
        const speed = parseFloat(layer.dataset.speed || '0.02');
        gsap.to(layer, {
          y: () => window.innerHeight * speed * 10,
          ease: 'none',
          scrollTrigger: { trigger: layer.closest('section') || layer.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 }
        });
      });

      gsap.utils.toArray('.glass-card').forEach((card: any, i) => {
        gsap.fromTo(card, { opacity: 0, y: 80, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 88%' } });
      });

      gsap.fromTo('.therapist-stagger', 
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#terapeuta-trigger',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    };

    // 4. Loader
    if (loaderRef.current) {
      const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');

      if (!hasSeenIntro) {
        const loaderText = loaderRef.current.querySelector('.loader-text');
        const loaderLine = loaderRef.current.querySelector('.loader-line');
        const loaderCounter = loaderRef.current.querySelector('.loader-counter');

        const loaderTL = gsap.timeline();
        loaderTL
          .to(loaderText, { opacity: 1, duration: 0.8, ease: 'power2.out' })
          .to(loaderLine, { width: '200px', duration: 1.5, ease: 'power2.inOut' }, '-=0.3')
          .to({}, { duration: 1.5, onUpdate: function () { if (loaderCounter) { loaderCounter.textContent = Math.round(this.progress() * 100) + '%'; } }, ease: 'power1.inOut' }, '-=1.5')
          .to(loaderText, { opacity: 0, y: -20, duration: 0.4, ease: 'power2.in' })
          .to([loaderLine, loaderCounter], { opacity: 0, duration: 0.3 }, '-=0.3')
          .to(loaderRef.current, {
            yPercent: -100, duration: 1, ease: 'power4.inOut',
            onComplete: () => {
              if (loaderRef.current) loaderRef.current.style.display = 'none';
              sessionStorage.setItem('hasSeenIntro', 'true');
              initGSAPAnimations();
            }
          });
      } else {
        loaderRef.current.style.display = 'none';
        initGSAPAnimations();
      }
    }

    return () => {
      if (resizeObserverSrv) resizeObserverSrv.disconnect();
      if (resizeObserverTher) resizeObserverTher.disconnect();
      cancelAnimationFrame(srvAnimId);
      cancelAnimationFrame(therAnimId);
      if (srvRenderer) srvRenderer.dispose();
      if (therRenderer) therRenderer.dispose();
    };
  }, [theme, isLight]);

  return (
    <>
      <SEO title="Inicio" description="Bienvenido al Centro de Terapias Holísticas..." />

      <div ref={loaderRef} className="loader">
        <div className="loader-text font-serif text-[clamp(1.5rem,4vw,3rem)] text-text-main opacity-0 tracking-[0.3em]">
          TERAPIAS HOLÍSTICAS
        </div>
        <div className="loader-line w-0 h-px bg-gradient-to-r from-transparent via-accent-sage to-transparent mt-8"></div>
        <div className="loader-counter font-sans text-xs text-text-main/40 mt-6 tracking-widest">0%</div>
      </div>

      <main className="w-full overflow-hidden">
        
        {/* HERO SECTION */}
        <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden w-full">
          {/* Conservamos el overlay oscuro estático en el vídeo para máxima nitidez de letras y evitar palidez */}
          <div className="absolute inset-0 bg-[#0a0a08]/70 z-10 pointer-events-none"></div>

          <div className="absolute inset-0 z-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
          
          <div className="orb w-[500px] h-[500px] bg-accent-sage top-1/4 -left-48 parallax-layer z-10" data-speed="0.02"></div>
          <div className="orb w-[400px] h-[400px] bg-accent-gold bottom-1/4 -right-32 parallax-layer z-10" data-speed="0.03"></div>

          <svg className="sacred-svg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] z-20 pointer-events-none" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(179,189,163,0.3)" strokeWidth="0.3" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(179,189,163,0.2)" strokeWidth="0.3" />
            <circle cx="200" cy="200" r="90" fill="none" stroke="rgba(179,189,163,0.15)" strokeWidth="0.3" />
            <polygon points="200,50 350,275 50,275" fill="none" stroke="rgba(179,189,163,0.15)" strokeWidth="0.3" />
            <polygon points="200,350 50,125 350,125" fill="none" stroke="rgba(179,189,163,0.15)" strokeWidth="0.3" />
          </svg>

          {/* El contenido del Hero utiliza colores estáticos claros con sombreado de alta definición */}
          <div className="hero-content text-center px-6 w-full max-w-4xl mx-auto z-30 pt-20">
            <div className="hero-subtitle mb-6 opacity-0 translate-y-[60px] text-xs tracking-[0.35em] uppercase text-[#e8ebe3]/70 text-shadow-subtle" id="hero-sub">Bienvenido a tu transformación</div>
            <div className="hero-line mx-auto mb-8 w-[60px] h-px bg-gradient-to-r from-accent-sage to-transparent opacity-0 translate-y-[60px]" id="hero-line"></div>
            <h1 className="hero-title text-[clamp(2.2rem,6vw,5.5rem)] mb-8 text-[#e8ebe3] text-shadow-subtle">
              <span className="block opacity-0 translate-y-[60px]" id="hero-line1">Acupuntura</span>
              <span className="block italic text-[#b3bda3] opacity-0 translate-y-[60px]" id="hero-line2">y Terapias Holísticas</span>
              <span className="block opacity-0 translate-y-[60px] text-lg lg:text-xl font-sans tracking-[0.3em] uppercase text-[#e8ebe3]/80 mt-6" id="hero-line3">con Yeni Arriarán</span>
            </h1>
            <p className="text-sm lg:text-base text-[#d1d7c7] max-w-2xl mx-auto leading-relaxed mb-10 opacity-0 translate-y-[60px] text-shadow-subtle" id="hero-desc">
              Te acompañamos en tu camino hacia el bienestar integral a través de la acupuntura y un abordaje terapéutico personalizado.
            </p>
            <Link to="/services" className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#b3bda3] hover:text-[#e8ebe3] transition-all duration-500 opacity-0 translate-y-[60px] text-shadow-subtle" id="hero-cta" data-hoverable="true">
              <span>Descubre nuestras terapias</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="hero-scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-accent-sage/60">Scroll</span>
            <div className="scroll-line bg-gradient-to-b from-[#e8ebe3]/40 to-transparent"></div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="nosotros" className="relative py-24 md:py-32 lg:py-48 overflow-hidden w-full flex justify-center">
          <div className="orb w-[400px] h-[400px] bg-accent-sage top-0 right-0 parallax-layer" data-speed="0.02"></div>

          <div className="w-full max-w-[1140px] px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <span className="section-label reveal-up">Nuestra Esencia</span>
                <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mt-4 mb-8 reveal-up">
                  Sanación que<br />
                  <span className="italic text-accent-sage">trasciende</span> lo<br />
                  convencional
                </h2>
                <div className="organic-divider mb-8 reveal-up"></div>
                <p className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-6 reveal-up">
                  En el Centro de Acupuntura y Terapias Holísticas nos dedicamos a restaurar tu bienestar y vitalidad de forma natural. Creemos que la salud real se logra cuando equilibramos el cuerpo, la mente y la energía, brindándote un espacio cálido y profesional diseñado para que encuentres el alivio y la paz que necesitas en tu día a día.
                </p>
                
                {/* Viñetas horizontales */}
                <div className="flex flex-row justify-between md:justify-start gap-4 md:gap-10 reveal-up mb-10 w-full mt-10">
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={22} className="text-accent-sage" strokeWidth={2} />
                      <span className="font-serif text-xl md:text-2xl lg:text-3xl text-text-main">Profesionales</span>
                    </div>
                    <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-accent-sage/50 mt-1 ml-8">certificados</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={22} className="text-accent-sage" strokeWidth={2} />
                      <span className="font-serif text-xl md:text-2xl lg:text-3xl text-text-main">Atención</span>
                    </div>
                    <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-accent-sage/50 mt-1 ml-8">personalizada</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={22} className="text-accent-sage" strokeWidth={2} />
                      <span className="font-serif text-xl md:text-2xl lg:text-3xl text-text-main">Ambiente</span>
                    </div>
                    <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-accent-sage/50 mt-1 ml-8">relajante</div>
                  </div>
                </div>
              </div>
              
              {/* Contenedor del video de YouTube */}
              <div className="order-1 lg:order-2 reveal-up w-full flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 border border-text-main/10">
                  <iframe
                    className="w-full h-full border-0"
                    src="https://www.youtube.com/embed/geJt7ahL1-E?autoplay=0&mute=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden w-full flex justify-center">
          <div className="w-full max-w-[1140px] px-6 md:px-12 text-center">
            <div className="quote-mark reveal-blur">"</div>
            <blockquote className="section-heading text-[clamp(1.5rem,4vw,3rem)] leading-snug mt-4 mb-8 reveal-blur">
              La verdadera sanación comienza cuando nos permitimos <span className="italic text-accent-gold">escuchar</span> lo que nuestro cuerpo y alma necesitan decirnos.
            </blockquote>
            <div className="organic-divider max-w-xs mx-auto mb-6 reveal-up"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent-sage/60 reveal-up">Nuestra Filosofía</p>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicios" className="relative py-24 md:py-32 lg:py-48 overflow-hidden w-full flex justify-center border-t border-text-main/5">
          <canvas ref={servicesCanvasRef} id="services-canvas" className="absolute inset-0 z-0 opacity-40"></canvas>
          <div className="orb w-[500px] h-[500px] bg-accent-gold -bottom-48 left-1/4 parallax-layer" data-speed="0.02"></div>

          <div className="relative z-10 w-full max-w-[1140px] px-6 lg:px-12">
            <div className="text-center mb-20">
              <span className="section-label reveal-up">Nuestras Terapias</span>
              <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mt-4 reveal-up">
                Caminos hacia tu<br />
                <span className="italic text-accent-sage">bienestar</span>
              </h2>
            </div>

            {/* Acordeón Interactivo Centrado Original con Sombreado Antipalidez */}
            <div className="flex flex-col gap-6 w-full">
              {/* Fila 1 */}
              <div className="flex flex-col md:flex-row h-[600px] md:h-[420px] gap-4 w-full">
                {servicesList.slice(0, 3).map((service) => (
                  <Link
                    key={service.id}
                    to={`/services#${service.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                    className="group relative flex-[1] hover:flex-[3] transition-all duration-700 ease-in-out overflow-hidden rounded-2xl border border-text-main/5 shadow-lg"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Filtro oscuro fijo para no debilitar ni blanquear la imagen de fondo en tema claro */}
                    <div className="absolute inset-0 bg-[#0a0a08]/40 group-hover:bg-transparent transition-colors duration-500"></div>

                    {/* Contenedor del texto totalmente centrado con sombreado de alta nitidez */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08]/90 via-[#0a0a08]/20 to-transparent flex flex-col items-center justify-center p-6 text-center z-10">
                      <h3 className="font-serif text-xl md:text-2xl font-normal text-[#e8ebe3] uppercase tracking-[0.2em] transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105 text-shadow-subtle">
                        {service.title}
                      </h3>
                      
                      <div className="w-12 h-[1px] bg-gradient-to-r from-accent-sage to-accent-gold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>

                      <div className="relative max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out px-4">
                        <p className="text-[#e8ebe3]/90 text-xs md:text-sm leading-relaxed mb-4 text-shadow-subtle font-medium">
                          {service.description}
                        </p>
                      </div>

                      <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-200">
                        <span className="inline-flex items-center gap-2 border border-accent-sage/30 text-[#e8ebe3] text-[9px] tracking-[0.2em] uppercase py-2 px-4 rounded-full hover:bg-accent-sage/10 hover:border-accent-sage/60 transition-all duration-300">
                          Ver más <ChevronDown size={12} className="animate-bounce" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Fila 2 */}
              <div className="flex flex-col md:flex-row h-[600px] md:h-[420px] gap-4 w-full">
                {servicesList.slice(3, 6).map((service) => (
                  <Link
                    key={service.id}
                    to={`/services#${service.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                    className="group relative flex-[1] hover:flex-[3] transition-all duration-700 ease-in-out overflow-hidden rounded-2xl border border-text-main/5 shadow-lg"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0a0a08]/40 group-hover:bg-transparent transition-colors duration-500"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08]/90 via-[#0a0a08]/20 to-transparent flex flex-col items-center justify-center p-6 text-center z-10">
                      <h3 className="font-serif text-xl md:text-2xl font-normal text-[#e8ebe3] uppercase tracking-[0.2em] transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105 text-shadow-subtle">
                        {service.title}
                      </h3>
                      
                      <div className="w-12 h-[1px] bg-gradient-to-r from-accent-sage to-accent-gold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>

                      <div className="relative max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out px-4">
                        <p className="text-[#e8ebe3]/90 text-xs md:text-sm leading-relaxed mb-4 text-shadow-subtle font-medium">
                          {service.description}
                        </p>
                      </div>

                      <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-200">
                        <span className="inline-flex items-center gap-2 border border-accent-sage/30 text-[#e8ebe3] text-[9px] tracking-[0.2em] uppercase py-2 px-4 rounded-full hover:bg-accent-sage/10 hover:border-accent-sage/60 transition-all duration-300">
                          Ver más <ChevronDown size={12} className="animate-bounce" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center reveal-up">
              <Link to="/services" className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-accent-sage hover:text-text-main transition-colors duration-300 border border-accent-sage/30 px-8 py-4 rounded-full hover:bg-accent-sage/10" data-hoverable="true">
                Ver catálogo completo
              </Link>
            </div>
          </div>
        </section>

        {/* SECCIÓN TERAPEUTA */}
        <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden w-full flex justify-center border-t border-text-main/5">
          <canvas ref={therapistCanvasRef} className="absolute inset-0 z-0 opacity-80 pointer-events-none"></canvas>
          <div className="orb w-[500px] h-[500px] bg-accent-sage top-1/2 -left-48 parallax-layer" data-speed="0.015"></div>

          <div className="w-full max-w-[1140px] px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              <div className="lg:col-span-5 reveal-up w-full flex justify-center lg:justify-start">
                <div className="relative w-full max-w-md aspect-[4/5] mx-auto lg:mx-0 group">
                  <div className="absolute inset-0 border border-accent-sage/40 rounded-3xl translate-x-4 translate-y-4 z-0 transition-transform duration-700 group-hover:translate-x-5 group-hover:translate-y-5"></div>
                  
                  <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={IMAGES.specialistHome} 
                      alt="Yeni Arriarán" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08]/90 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Texto sobre imagen configurado en claro fijo y con text-shadow para que resalte nítido sobre cualquier tema */}
                    <div className="absolute bottom-8 left-8 pointer-events-none">
                      <p className="font-serif text-3xl text-[#e8ebe3] mb-1 font-semibold text-shadow-subtle">Yeni Arriarán</p>
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#df9e53] font-medium text-shadow-subtle">Terapeuta Especializada</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7" id="terapeuta-trigger">
                <div className="flex items-center gap-3 mb-6 therapist-stagger">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-accent-gold to-transparent"></div>
                  <span className="text-[0.65rem] tracking-[0.4em] uppercase text-accent-gold/80">Nuestra Terapeuta</span>
                </div>
                <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-snug text-text-main mb-8 therapist-stagger">
                  De la exigencia a la<br />
                  <span className="italic text-accent-sage">sanación consciente</span>
                </h2>
                
                <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed">
                  <p className="therapist-stagger">
                    "Soy Yeni Arriarán, terapeuta especializada en Medicina Tradicional China y terapias energéticas. Tras años de alta exigencia en el sector financiero, un diagnóstico de adenoma hipofisario marcó un antes y un después en mi vida, impulsándome a buscar un camino de sanación más integral."
                  </p>
                  <p className="therapist-stagger">
                    "Así descubrí la Medicina Tradicional China, un enfoque que observa a la persona como un todo: cuerpo, emociones y energía. Hoy, mi misión es acompañarte a recuperar tu equilibrio y bienestar con un abordaje profesional, consciente y sobre todo, humano."
                  </p>
                </div>
                
                <div className="mt-12 therapist-stagger">
                   <p className="font-serif text-4xl italic text-accent-sage/60">Yeni Arriarán</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden w-full flex flex-col items-center border-t border-text-main/5">
          <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 mb-16 text-center">
            <span className="section-label reveal-up">Testimonios</span>
            <h2 className="section-heading text-[clamp(2rem,4vw,3rem)] mt-4 reveal-up">
              Voces de <span className="italic text-accent-sage">transformación</span>
            </h2>
          </div>
          
          <TestimonialCarousel />
            
          <div className="mt-20 text-center reveal-up">
             <Link to="/contact" className="inline-block bg-gradient-to-br from-accent-sage/20 to-accent-gold/15 border border-accent-sage/30 text-text-main px-10 py-4 rounded-xl text-sm tracking-[0.2em] uppercase hover:border-accent-sage/60 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_40px_var(--shadow-color)]" data-hoverable="true">
               Agendar Cita
             </Link>
          </div>
        </section>

      </main>
    </>
  );
};

export default Home;