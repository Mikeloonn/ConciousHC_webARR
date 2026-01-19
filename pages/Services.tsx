import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { servicesList, pricesList } from '../data/services';

const Services: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Nuestros Servicios" 
        description="Ofrecemos Acupuntura, Ventosas, Fitoterapia y Masajes Terapéuticos. Descubre nuestras tarifas y tratamientos holísticos." 
      />
      <PageHeader title="SERVICIOS" breadcrumb="Servicios" />

      <section className="py-20 bg-light">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="overflow-hidden h-64">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                   />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-textGray text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <button className="text-primary font-bold text-sm uppercase border-b-2 border-transparent hover:border-primary transition-all">
                    Leer Más
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-8">Tarifas Referenciales</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full min-w-[600px] text-left border-collapse">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-4 border border-gray-600">Servicio</th>
                    <th className="p-4 border border-gray-600">Duración</th>
                    <th className="p-4 border border-gray-600">Precio</th>
                  </tr>
                </thead>
                <tbody className="text-textGray">
                  {pricesList.map((row, i) => (
                    <tr key={i} className="hover:bg-light">
                      <td className="p-4 border border-gray-200">{row.name}</td>
                      <td className="p-4 border border-gray-200 text-center">{row.duration}</td>
                      <td className="p-4 border border-gray-200 text-center font-bold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;