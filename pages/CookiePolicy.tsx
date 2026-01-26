import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const CookiePolicy: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Política de Cookies" 
        description="Información sobre el uso de cookies en Medico Clínica." 
      />
      <PageHeader title="POLÍTICA DE COOKIES" breadcrumb="Cookies" />
      
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="prose prose-lg text-textGray max-w-none">
            
            <h3 className="text-2xl font-bold text-dark mb-4">1. ¿QUÉ SON LAS COOKIES?</h3>
            <p className="mb-8">
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">2. ¿QUÉ TIPOS DE COOKIES UTILIZA ESTA WEB?</h3>
            <ul className="list-disc pl-6 mb-8 space-y-4">
              <li>
                <strong>Cookies Técnicas (Necesarias):</strong> Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen.
              </li>
              <li>
                <strong>Cookies de Análisis (Opcionales):</strong> Son aquellas que, tratadas por nosotros o por terceros (como Google Analytics), nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-dark mb-4">3. ACEPTACIÓN, RECHAZO O CONFIGURACIÓN</h3>
            <p className="mb-8">
              Al entrar en este sitio web, usted visualizó un panel de configuración donde podía aceptar, rechazar o configurar las cookies. Puede modificar su consentimiento en cualquier momento eliminando las cookies de su navegador y recargando la página.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">4. CÓMO DESACTIVAR LAS COOKIES EN LOS NAVEGADORES</h3>
            <p className="mb-4">
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Consulte la "Ayuda" de su navegador para más detalles:
            </p>
             <ul className="list-disc pl-6 space-y-2">
              <li>Chrome</li>
              <li>Firefox</li>
              <li>Safari</li>
              <li>Edge</li>
            </ul>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
