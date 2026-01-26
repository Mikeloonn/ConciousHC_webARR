import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Política de Privacidad" 
        description="Política de Privacidad de Medico Clínica. Cómo tratamos tus datos personales (RGPD)." 
      />
      <PageHeader title="POLÍTICA DE PRIVACIDAD" breadcrumb="Privacidad" />
      
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="prose prose-lg text-textGray max-w-none">
            
            <p className="mb-6">
              En <strong>Medico - Terapias Holísticas</strong>, nos comprometemos a proteger la privacidad y la seguridad de sus datos personales, cumpliendo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">1. ¿QUIÉN ES EL RESPONSABLE DEL TRATAMIENTO DE SUS DATOS?</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Identidad:</strong> [NOMBRE DEL DUEÑO O EMPRESA]</li>
              <li><strong>NIF:</strong> [TU NIF]</li>
              <li><strong>Dirección:</strong> Plaza Andalucía 4, C.C. España local 81, 29620 - Torremolinos, Málaga.</li>
              <li><strong>Email:</strong> info@clinicamedico.com</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark mb-4">2. ¿CON QUÉ FINALIDAD TRATAMOS SUS DATOS PERSONALES?</h3>
            <p className="mb-4">Tratamos la información que nos facilitan las personas interesadas con el fin de:</p>
            <ol className="list-decimal pl-6 mb-8 space-y-2">
              <li>Gestionar las citas y reservas solicitadas a través de la web o teléfono.</li>
              <li>Mantener la comunicación necesaria para la prestación del servicio terapéutico.</li>
              <li>Facturación y gestión administrativa.</li>
              <li>Envío de comunicaciones comerciales o boletines informativos (solo si nos ha dado su consentimiento explícito).</li>
            </ol>

            <h3 className="text-2xl font-bold text-dark mb-4">3. DATOS DE CATEGORÍA ESPECIAL (SALUD)</h3>
            <p className="mb-8">
              Debido a la naturaleza de nuestros servicios, es posible que tratemos datos relacionados con su estado físico o bienestar general. Según el artículo 9 del RGPD, estos son "Datos de Categoría Especial". Nos comprometemos a tratarlos con la máxima confidencialidad, aplicando medidas de seguridad reforzadas y utilizándolos únicamente para la correcta prestación del servicio solicitado.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">4. ¿POR CUÁNTO TIEMPO CONSERVAREMOS SUS DATOS?</h3>
            <p className="mb-8">
              Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales (por ejemplo, a efectos fiscales).
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">5. ¿CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE SUS DATOS?</h3>
            <p className="mb-8">
              La base legal para el tratamiento de sus datos es el <strong>consentimiento</strong> que se le solicita (al marcar la casilla en el formulario de contacto) y/o la ejecución del contrato de prestación de servicios al acudir a nuestro centro.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">6. ¿A QUÉ DESTINATARIOS SE COMUNICARÁN SUS DATOS?</h3>
            <p className="mb-8">
              No se cederán datos a terceros, salvo obligación legal (Hacienda, Jueces y Tribunales) o a proveedores de servicios necesarios para el funcionamiento del negocio (encargados de tratamiento), como gestorías fiscales o proveedores de servicios informáticos, que cumplen con la normativa de privacidad.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">7. ¿CUÁLES SON SUS DERECHOS?</h3>
            <p className="mb-4">
              Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando sus datos personales. Las personas interesadas tienen derecho a:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Acceder a sus datos personales.</li>
              <li>Solicitar la rectificación de los datos inexactos.</li>
              <li>Solicitar su supresión cuando los datos ya no sean necesarios.</li>
              <li>Oponerse al tratamiento.</li>
              <li>Solicitar la limitación del tratamiento.</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede enviar un correo electrónico a <strong>info@clinicamedico.com</strong> adjuntando copia de su DNI.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
