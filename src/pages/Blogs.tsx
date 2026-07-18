import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { X, User } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { BlogPost } from '../types';
import { blogPosts, conoceMasPosts } from '../data/blogs';
import { Cookie } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Blogs: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { theme } = useTheme();
  const [consentAccepted, setConsentAccepted] = useState(
    () => localStorage.getItem('medico_cookie_consent') === 'accepted'
  );

  useEffect(() => {
    const handleConsent = () => {
      setConsentAccepted(localStorage.getItem('medico_cookie_consent') === 'accepted');
    };
    window.addEventListener('consent-updated', handleConsent);
    return () => window.removeEventListener('consent-updated', handleConsent);
  }, []);

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
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
      
      const loadInstagramScript = () => {
        if (!document.getElementById('instagram-embed-script')) {
          const script = document.createElement('script');
          script.id = 'instagram-embed-script';
          script.src = "//www.instagram.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        } else {
          if ((window as any).instgrm) {
            setTimeout(() => {
              (window as any).instgrm.Embeds.process();
            }, 100);
          }
        }
      };

      const loadTikTokScript = () => {
        const oldScript = document.getElementById('tiktok-embed-script');
        if (oldScript) {
          oldScript.remove();
        }
        const script = document.createElement('script');
        script.id = 'tiktok-embed-script';
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      };

      if (consentAccepted) {
        loadInstagramScript();
        loadTikTokScript();
      }
      
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost, consentAccepted]);

  return (
    <main className="bg-bg-base text-text-main min-h-screen w-full overflow-hidden pb-20 transition-colors duration-600">
<SEO
          title="Blog de Acupuntura y Salud Holística en Torremolinos"
          description="Testimonios reales de pacientes y artículos sobre acupuntura, medicina china y terapias holísticas en Torremolinos, Málaga."
        />
      <PageHeader title="NUESTRO BLOG" breadcrumb="Historias" />
      
      <section className="relative py-24 md:py-32">
        <div className="orb w-[400px] h-[400px] bg-accent-gold top-1/3 -left-32 parallax-layer z-0 opacity-10" data-speed="0.025"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div className="reveal-up">
              <span className="section-label">Sabiduría & Conocimiento</span>
              <h2 className="section-heading text-[clamp(2rem,5vw,4rem)] mt-4">
                Nuestras <span className="italic text-accent-sage">Historias</span>
              </h2>
              <div className="organic-divider max-w-xs mt-6"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="reveal-up cursor-pointer flex flex-col h-full group"
                onClick={() => setSelectedPost(post)}
                data-hoverable="true"
              >
                <div className="relative w-full h-[450px] lg:h-[550px] shrink-0 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-bg-base/80 backdrop-blur-md text-accent-gold text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-accent-gold/30 z-10">
                    {post.category}
                  </div>
                </div>
                
                <div className="pt-6 flex flex-col flex-grow">
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase text-accent-gold/80">{post.date}</span>
                  <h3 className="font-serif text-lg lg:text-xl mt-3 mb-4 leading-snug text-text-main group-hover:text-accent-sage transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-3 pt-6 border-t border-text-main/10 text-[0.65rem] text-accent-sage/50 uppercase tracking-widest">
                    <User size={14} />
                    <span>Por: Yeni Arriarán</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 border-t border-text-main/5">
        <div className="orb w-[350px] h-[350px] bg-accent-sage bottom-0 -right-20 parallax-layer z-0 opacity-10" data-speed="0.03"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div className="reveal-up">
              <span className="section-label">Descubre y Aprende</span>
              <h2 className="section-heading text-[clamp(2rem,5vw,4rem)] mt-4">
                Conoce <span className="italic text-accent-gold">Más</span>
              </h2>
              <div className="organic-divider max-w-xs mt-6"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8">
            {conoceMasPosts.map((post, index) => (
              <article 
                key={post.id} 
                className={`reveal-up cursor-pointer flex flex-col h-full group lg:col-span-4 ${index === 0 ? 'lg:col-start-3' : ''}`}
                onClick={() => setSelectedPost(post)}
                data-hoverable="true"
              >
                <div className="relative w-full h-[450px] lg:h-[550px] shrink-0 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-bg-base/80 backdrop-blur-md text-accent-gold text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-accent-gold/30 z-10">
                    {post.category}
                  </div>
                </div>
                
                <div className="pt-6 flex flex-col flex-grow">
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase text-accent-gold/80">{post.date}</span>
                  <h3 className="font-serif text-lg lg:text-xl mt-3 mb-4 leading-snug text-text-main group-hover:text-accent-sage transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-3 pt-6 border-t border-text-main/10 text-[0.65rem] text-accent-sage/50 uppercase tracking-widest">
                    <User size={14} />
                    <span>Por: Yeni Arriarán</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedPost && (
        <div className="fixed inset-0 z-[9980] flex items-center justify-center p-4 sm:p-6 pt-[80px] md:pt-[100px]">
          
          <div 
            className="absolute inset-0 bg-bg-base/90 backdrop-blur-md z-0"
            onClick={() => setSelectedPost(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl max-h-[85vh] glass-card z-10 bg-bg-base/90 overflow-y-auto" data-lenis-prevent="true">
            
            <div className="sticky top-0 z-50 flex justify-end w-full" style={{ height: 0 }}>
              <button 
                onClick={() => setSelectedPost(null)} 
                className="absolute top-4 right-4 bg-bg-base/80 hover:bg-accent-gold text-text-main rounded-full p-2 shadow-lg transition-colors border border-text-main/20 backdrop-blur-sm"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row w-full min-h-full">
              
                <div className="w-full lg:w-5/12 bg-bg-base/30 flex items-start justify-center p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-text-main/5 pt-12">
                {consentAccepted ? (
                  <div 
                    className="w-full max-w-[350px] mx-auto"
                    dangerouslySetInnerHTML={{ __html: selectedPost.embedHtml }}
                  />
                ) : (
                  <div className="w-full max-w-[350px] mx-auto text-center py-12">
                    <Cookie size={40} className="mx-auto mb-4 text-accent-sage/50" />
                    <p className="text-sm text-text-main/60 leading-relaxed mb-4">
                      Para ver este contenido de redes sociales, necesitas aceptar las cookies.
                    </p>
                    <button
                      onClick={() => window.dispatchEvent(new Event('reopen-cookie-banner'))}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-sage to-accent-gold text-bg-base text-[10px] tracking-[0.2em] uppercase font-bold cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      Configurar cookies
                    </button>
                  </div>
                )}
              </div>

              <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col justify-start pt-12">
                <div className="inline-block self-start bg-gradient-to-r from-accent-sage/20 to-transparent text-accent-sage text-[0.65rem] tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6 border border-accent-sage/30">
                  {selectedPost.category} • {selectedPost.date}
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-light text-text-main mb-8 leading-tight pr-8">
                  {selectedPost.title}
                </h2>
                <div className="gold-line mb-8"></div>
                {selectedPost.content}
              </div>
            </div>

          </div>
        </div>
      )}
    </main>
  );
};

export default Blogs;
