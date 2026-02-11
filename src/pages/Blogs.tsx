import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import ReelsCarousel, { ReelItem } from '../components/ReelsCarousel';

const Blogs: React.FC = () => {
  // Datos de ejemplo para "Nuestras Historias"
  // Usamos el enlace proporcionado y variaciones simuladas
  const storiesData: ReelItem[] = [
    { id: 1, url: "https://www.instagram.com/reel/DMPvKq0N42k/", title: "Terapia Holística en Acción" },
    { id: 2, url: "https://www.instagram.com/reel/DMPvKq0N42k/", title: "Testimonio de Recuperación" }, // Duplicado para ejemplo
    { id: 3, url: "https://www.instagram.com/reel/DMPvKq0N42k/", title: "Nuestro Espacio Zen" },
    { id: 4, url: "https://www.instagram.com/reel/DMPvKq0N42k/", title: "Sesión de Acupuntura" },
    { id: 5, url: "https://www.instagram.com/reel/DMPvKq0N42k/", title: "Día a día en la clínica" },
  ];

  // Datos de ejemplo para "Curiosidades"
  const curiositiesData: ReelItem[] = [
    { id: 10, url: "https://www.instagram.com/reel/DMPvKq0N42k/", title: "¿Sabías esto de la Moxibustión?" },
    { id: 11, url: "https://www.instagram.com/reel/DMPvKq0N42k/", title: "Beneficios del Té Verde" },
    { id: 12, url: "https://www.instagram.com/reel/DMPvKq0N42k/", title: "5 Puntos de Presión" },
    { id: 13, url: "https://www.instagram.com/reel/DMPvKq0N42k/", title: "Mitos sobre la Acupuntura" },
    { id: 14, url: "https://www.instagram.com/reel/DMPvKq0N42k/", title: "Relajación en 1 minuto" },
  ];

  return (
    <div>
      <SEO 
        title="Blogs" 
        description="Lee nuestros artículos y mira nuestros reels sobre salud, acupuntura y vida holística. Consejos y noticias para mejorar tu calidad de vida." 
      />
      <PageHeader title="BLOGS" breadcrumb="Blogs" />
      
      <section className="bg-white pb-10">
        {/* Sección 1: Nuestras Historias */}
        <ReelsCarousel title="Nuestras Historias" items={storiesData} />

        {/* Separador visual */}
        <div className="max-w-[1140px] mx-auto px-4">
           <hr className="border-gray-200" />
        </div>

        {/* Sección 2: Curiosidades */}
        <ReelsCarousel title="Curiosidades" items={curiositiesData} direction="right" />
      </section>
    </div>
  );
};

export default Blogs;
