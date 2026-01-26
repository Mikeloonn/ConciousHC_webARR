import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const LegalNotice: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Aviso Legal" 
        description="Aviso Legal y Condiciones de Uso de Medico Clínica. Cumplimiento con la LSSI." 
      />
      <PageHeader title="AVISO LEGAL" breadcrumb="Legal" />
      
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="prose prose-lg text-textGray max-w-none">
            
            <h3 className="text-2xl font-bold text-dark mb-4">1. DATOS IDENTIFICATIVOS</h3>
            <p className="mb-6">
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI), se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Titular del sitio web:</strong> [NOMBRE COMPLETO DEL AUTÓNOMO O RAZÓN SOCIAL S.L.]</li>
              <li><strong>NIF/CIF:</strong> [NÚMERO DE IDENTIFICACIÓN FISCAL]</li>
              <li><strong>Domicilio:</strong> Plaza Andalucía 4, Centro Comercial España local 81, 29620 - Torremolinos, Málaga.</li>
              <li><strong>Correo electrónico:</strong> info@clinicamedico.com</li>
              <li><strong>Teléfono:</strong> (+51) 098765432</li>
              <li><strong>Datos Registrales:</strong> <em>(Solo si es empresa S.L.)</em> Inscrita en el Registro Mercantil de Málaga, Tomo [X], Folio [X], Hoja [X].</li>
              <li><strong>Autorización Administrativa:</strong> <em>(Solo si aplica)</em> NICA: [NÚMERO DE AUTORIZACIÓN SANITARIA]</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark mb-4">2. USUARIOS</h3>
            <p className="mb-8">
              El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">3. DESCARGO DE RESPONSABILIDAD (NATURALEZA DE LOS SERVICIOS)</h3>
            <p className="mb-8">
              Los servicios ofrecidos en este sitio web (acupuntura, fitoterapia, terapias holísticas) tienen como finalidad el bienestar, la relajación y el reequilibrio energético del usuario. <strong>Estos servicios son técnicas parasanitarias o complementarias y NO sustituyen en ningún caso al diagnóstico, tratamiento o prescripción médica convencional.</strong>
              <br /><br />
              El usuario reconoce que no debe abandonar ningún tratamiento médico impuesto por un facultativo colegiado para realizar estas terapias. En caso de duda sobre su salud física o mental, recomendamos encarecidamente consultar con su médico de cabecera o especialista.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">4. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
            <p className="mb-8">
              El Titular por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.). Quedan reservados todos los derechos.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">5. LEY APLICABLE Y JURISDICCIÓN</h3>
            <p>
              La relación entre el Titular y el Usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de <strong>Torremolinos (Málaga)</strong>.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalNotice;
