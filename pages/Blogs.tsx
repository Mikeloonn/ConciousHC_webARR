import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const Blogs: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Blogs" 
        description="Lee nuestros artículos sobre salud, acupuntura y vida holística. Consejos y noticias para mejorar tu calidad de vida." 
      />
      <PageHeader title="BLOGS" breadcrumb="Blogs" />
      
      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-4">
           <div className="text-center py-20 text-gray-400">
             <h2 className="text-2xl font-bold mb-4">Próximamente</h2>
             <p>Estamos preparando artículos interesantes para ti.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;