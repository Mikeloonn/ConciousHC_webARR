import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import { Check } from 'lucide-react';

interface Service {
  title: string;
  image: string;
  description?: string;
  fullText?: React.ReactNode;
}

const servicesList: Service[] = [
  {
    title: 'Acupuntura',
    fullText: (
      <div className="space-y-6 text-textGray text-lg leading-relaxed">
        <p>
          La acupuntura es una terapia milenaria de la Medicina Tradicional China que busca restablecer el equilibrio natural del cuerpo, la mente y las emociones. Se basa en la estimulación de puntos específicos del cuerpo, a través de agujas muy finas y estériles, situadas a lo largo de los meridianos energéticos, por donde circula el Qi (energía vital).
        </p>
        <p>
          Según la MTC, cuando el Qi fluye de forma armónica, el cuerpo se mantiene sano. Sin embargo, el estrés, las emociones, los hábitos de vida o los desequilibrios internos pueden bloquear ese flujo, generando dolor o enfermedad.
          La acupuntura actúa desbloqueando y regulando ese flujo energético, activando la capacidad natural del organismo para recuperarse.
        </p>
        <p>
          Desde una visión integrativa, la acupuntura también estimula el sistema nervioso, mejora la circulación, regula funciones orgánicas y favorece procesos de autorregulación y bienestar profundo.
        </p>
        <div className="bg-light/50 p-8 rounded-2xl border border-secondary/20">
          <h4 className="text-dark font-bold text-2xl mb-6">Beneficios de la Acupuntura</h4>
          <p className="mb-6">La acupuntura no solo trata síntomas, sino que aborda a la persona de forma global, teniendo en cuenta su estado físico, emocional y energético. Entre sus principales beneficios destacan:</p>
          <ul className="space-y-6">
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Alivio del dolor</span>
              <span>Es especialmente eficaz en dolores musculares y articulares, cervicalgias, lumbalgias, migrañas, ciáticas, lesiones deportivas y dolores crónicos.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Regulación del sistema nervioso y emocional</span>
              <span>Ayuda a reducir el estrés, la ansiedad, el insomnio, el agotamiento mental y los estados de tensión emocional, promoviendo una sensación profunda de calma y equilibrio.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Mejora del funcionamiento interno del organismo</span>
              <span>Favorece el equilibrio del sistema digestivo, hormonal, respiratorio e inmunológico, apoyando procesos como problemas digestivos, alteraciones menstruales, menopausia o fatiga crónica.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Enfoque preventivo y personalizado</span>
              <span>La acupuntura no solo se utiliza cuando hay enfermedad, sino también como prevención, fortaleciendo el organismo y adaptando cada tratamiento a las necesidades específicas de la persona.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Terapia natural e integrativa</span>
              <span>Es una técnica segura, natural y compatible con otros tratamientos médicos, ideal para quienes buscan un enfoque respetuoso y consciente de su salud.</span>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-100 pt-6">
          <h4 className="text-xl font-bold text-dark mb-4">Un tratamiento adaptado a ti</h4>
          <p className="italic">
            En consulta, la acupuntura se integra dentro de un enfoque de Medicina China y terapias holísticas, donde cada persona es única. El número de sesiones y la evolución del tratamiento dependen de la condición, el terreno y la respuesta individual, siempre con el objetivo de lograr el mayor bienestar posible en el menor tiempo adecuado para cada caso.
          </p>
        </div>
      </div>
    ),
    image: IMAGES.services.acupuntura
  },
  {
    title: 'Auriculoterapia',
    fullText: (
      <div className="space-y-6 text-textGray text-lg leading-relaxed">
        <p>
          La auriculoterapia es una técnica terapéutica de la Medicina Tradicional China que utiliza el pabellón auricular como un microsistema que refleja todo el organismo. En la oreja se encuentran representados los órganos, sistemas y estructuras del cuerpo, así como puntos relacionados con el estado emocional y energético de la persona.
        </p>
        <p>
          Mediante la estimulación de puntos específicos del oído —con semillas, esferas, agujas muy finas o imanes— se activan mecanismos de regulación que ayudan al cuerpo a recuperar su equilibrio natural.
          Esta técnica actúa tanto a nivel energético como neurológico, ya que el oído tiene una estrecha conexión con el sistema nervioso central.
        </p>
        <p>
          La auriculoterapia puede utilizarse como tratamiento principal o como complemento de la acupuntura y otras terapias, potenciando y prolongando sus efectos.
        </p>
        <div className="bg-light/50 p-8 rounded-2xl border border-secondary/20">
          <h4 className="text-dark font-bold text-2xl mb-6">Beneficios de la Auriculoterapia</h4>
          <p className="mb-6">La auriculoterapia es una técnica suave, eficaz y muy bien aceptada, con beneficios tanto físicos como emocionales:</p>
          <ul className="space-y-6">
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Alivio del dolor</span>
              <span>Es especialmente útil en dolores musculares y articulares, cefaleas, migrañas, lumbalgias y molestias crónicas, ayudando a reducir la intensidad del dolor de forma progresiva.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Regulación del estrés y las emociones</span>
              <span>Contribuye a equilibrar el sistema nervioso, reduciendo ansiedad, nerviosismo, insomnio y estados de tensión emocional, favoreciendo una mayor sensación de calma y bienestar.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Apoyo en procesos de cambio</span>
              <span>Se utiliza como apoyo en el control del apetito, gestión del peso, abandono del tabaco, regulación de hábitos compulsivos y acompañamiento en procesos de desintoxicación.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Mejora del equilibrio interno</span>
              <span>Ayuda a regular funciones digestivas, hormonales y energéticas, reforzando la respuesta natural del organismo frente a desequilibrios físicos y emocionales.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Efecto continuo y prolongado</span>
              <span>Al utilizar semillas o imanes, el tratamiento sigue actuando entre sesiones, permitiendo que la persona participe activamente estimulando los puntos indicados.</span>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-100 pt-6">
          <h4 className="text-xl font-bold text-dark mb-4">Auriculoterapia dentro de un enfoque integral</h4>
          <p className="italic">
            En consulta, la auriculoterapia forma parte de un enfoque global de Medicina Tradicional China y Terapias Holísticas, adaptado a cada persona. La selección de puntos y el tipo de estimulación se personalizan según el diagnóstico energético y la evolución del paciente. 
            Puede utilizarse sola o combinada con acupuntura, fitoterapia u otras técnicas, con el objetivo de potenciar resultados y acompañar de manera respetuosa el proceso de equilibrio y bienestar.
          </p>
        </div>
      </div>
    ),
    image: IMAGES.services.auriculoterapia
  },
  {
    title: 'Fitoterapia',
    fullText: (
      <div className="space-y-6 text-textGray text-lg leading-relaxed">
        <p>
          La Fitoterapia China es una de las principales ramas de la Medicina Tradicional China (MTC) y se basa en el uso terapéutico de plantas medicinales, minerales y sustancias naturales cuidadosamente seleccionadas para restablecer el equilibrio interno del organismo.
        </p>
        <p>
          A diferencia de la fitoterapia occidental, la Fitoterapia China no se centra únicamente en el síntoma, sino en el patrón energético de la persona. Cada fórmula se prescribe teniendo en cuenta la constitución, el estado físico, emocional y energético, así como la raíz del desequilibrio que ha dado lugar al malestar.
        </p>
        <p>
          Las plantas se combinan en fórmulas personalizadas, donde cada componente cumple una función específica: potenciar el efecto terapéutico, armonizar el organismo y reducir posibles efectos secundarios. El objetivo no es forzar al cuerpo, sino acompañarlo en su proceso natural de autorregulación.
        </p>
        <div className="bg-light/50 p-8 rounded-2xl border border-secondary/20">
          <h4 className="text-dark font-bold text-2xl mb-6">Beneficios de la Fitoterapia China</h4>
          <p className="mb-6">La Fitoterapia China actúa de forma profunda y progresiva, ofreciendo beneficios tanto a nivel físico como emocional:</p>
          <ul className="space-y-6">
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Tratamiento de la causa, no solo del síntoma</span>
              <span>Las fórmulas herbales trabajan sobre la raíz del desequilibrio, ayudando al organismo a recuperar su funcionamiento óptimo de manera sostenida en el tiempo.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Regulación de órganos y sistemas</span>
              <span>Es especialmente eficaz en trastornos digestivos, desequilibrios hormonales, problemas menstruales, menopausia, fatiga crónica, alteraciones del sueño y fortalecimiento del sistema inmunológico.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Apoyo emocional y energético</span>
              <span>Muchas fórmulas ayudan a equilibrar emociones como la ansiedad, la irritabilidad, la tristeza o el agotamiento, que en MTC están directamente relacionadas con los órganos internos.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Enfoque personalizado y seguro</span>
              <span>Cada prescripción se adapta a la persona y a su momento vital. La Fitoterapia China, bien indicada, es segura y puede utilizarse de forma complementaria a otros tratamientos médicos.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Efecto profundo y duradero</span>
              <span>Al actuar desde el interior, sus beneficios suelen mantenerse en el tiempo, especialmente cuando se combina con acupuntura y cambios conscientes en el estilo de vida.</span>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-100 pt-6">
          <h4 className="text-xl font-bold text-dark mb-4">Fitoterapia China como parte de un tratamiento integral</h4>
          <p className="italic">
            En consulta, la Fitoterapia China se integra dentro de un enfoque global de Medicina China y Terapias Holísticas, donde el tratamiento se adapta a la evolución de cada persona. Las fórmulas pueden ajustarse a lo largo del proceso, respetando los ritmos del cuerpo y favoreciendo una recuperación consciente y sostenida.
            El número de semanas o meses de tratamiento dependerá de la condición y del terreno de cada paciente, siempre priorizando la seguridad, la personalización y el bienestar global.
          </p>
        </div>
      </div>
    ),
    image: IMAGES.services.fitoterapia
  },
  {
    title: 'Ventosas (Cupping)',
    fullText: (
      <div className="space-y-6 text-textGray text-lg leading-relaxed">
        <p>
          La terapia con ventosas, conocida internacionalmente como Cupping, es una técnica ancestral de la Medicina Tradicional China que utiliza copas especiales (de vidrio, bambú o plástico) para crear un efecto de succión sobre la piel. Este vacío estimula la circulación sanguínea y linfática en zonas profundas, facilitando la eliminación de toxinas y la relajación muscular.
        </p>
        <p>
          En la MTC, se considera que el dolor y la tensión son causados por el estancamiento de Qi (energía) y Sangre. Las ventosas actúan "moviendo" este estancamiento, permitiendo que la energía fluya libremente de nuevo. Es una técnica muy valorada por su capacidad para aliviar dolores de espalda, contracturas y estados gripales incipientes.
        </p>
        <div className="bg-light/50 p-8 rounded-2xl border border-secondary/20">
          <h4 className="text-dark font-bold text-2xl mb-6">Beneficios del Cupping</h4>
          <p className="mb-6">Esta terapia ofrece un alivio rápido y efectivo, siendo ideal para deportistas y personas con alta carga de estrés físico:</p>
          <ul className="space-y-6">
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Descontracturante profundo</span>
              <span>Alivia la tensión muscular acumulada, especialmente en espalda, hombros y cuello, liberando nudos y rigidez de forma más rápida que un masaje convencional.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Mejora la circulación y oxigenación</span>
              <span>El efecto de vacío atrae sangre fresca a la zona tratada, nutriendo los tejidos y acelerando la recuperación de lesiones musculares.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Eliminación de toxinas</span>
              <span>Estimula el sistema linfático, ayudando al cuerpo a depurar sustancias de desecho acumuladas en los músculos y la piel.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Fortalecimiento del sistema inmune</span>
              <span>Tradicionalmente se utiliza para expulsar "factores patógenos" como el frío y la humedad, siendo útil en resfriados y problemas respiratorios.</span>
            </li>
             <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Efecto sedante y relajante</span>
              <span>Actúa sobre el sistema nervioso parasimpático, induciendo una profunda relajación y reduciendo los niveles de estrés y ansiedad.</span>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-100 pt-6">
          <h4 className="text-xl font-bold text-dark mb-4">¿Es doloroso? ¿Deja marcas?</h4>
          <p className="italic">
            La aplicación de ventosas no es dolorosa, aunque se siente una fuerte succión y estiramiento de la piel. Es común que queden marcas circulares (hematomas indoloros) que pueden durar desde unos días hasta una semana; esto es una señal positiva de que se ha movilizado el estancamiento sanguíneo y las toxinas.
            En consulta, la intensidad se ajusta siempre a la sensibilidad de cada paciente, integrando esta técnica con masaje o acupuntura para potenciar sus efectos terapéuticos.
          </p>
        </div>
      </div>
    ),
    image: IMAGES.services.ventosas
  },
  {
    title: 'Masaje Tuina',
    fullText: (
      <div className="space-y-6 text-textGray text-lg leading-relaxed">
        <p>
          El Tuina es una de las ramas terapéuticas más antiguas y completas de la Medicina Tradicional China. Más que un simple masaje de relajación, es un sistema de terapia manual vigorosa y profunda que combina técnicas de masaje, acupresión (digitopuntura) y manipulaciones articulares para desbloquear el flujo de Qi (energía) y Xue (sangre) en los meridianos.
        </p>
        <p>
          Su nombre proviene de dos de sus técnicas principales: "Tui" (empujar) y "Na" (agarrar). El terapeuta utiliza las manos, dedos, codos y antebrazos para aplicar una variedad de movimientos rítmicos y presiones específicas, adaptando la intensidad según el diagnóstico energético del paciente.
        </p>
        <div className="bg-light/50 p-8 rounded-2xl border border-secondary/20">
          <h4 className="text-dark font-bold text-2xl mb-6">Beneficios Terapéuticos del Tuina</h4>
          <p className="mb-6">El Tuina es altamente efectivo tanto para problemas musculoesqueléticos como para desequilibrios internos:</p>
          <ul className="space-y-6">
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Alivio del dolor crónico y agudo</span>
              <span>Trata eficazmente contracturas, lumbalgias, ciáticas, tortícolis, tendinitis y recuperación de lesiones deportivas, devolviendo la movilidad y flexibilidad.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Desbloqueo energético</span>
              <span>Al trabajar sobre los meridianos y puntos de acupuntura, libera estancamientos de energía que causan dolor o malestar, restableciendo el equilibrio yin-yang.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Regulación de órganos internos</span>
              <span>A través de técnicas reflejas en la espalda y el abdomen, estimula el funcionamiento del sistema digestivo, respiratorio y ginecológico (estreñimiento, dismenorrea, asma).</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Relajación profunda del sistema nervioso</span>
              <span>Reduce los niveles de estrés, ansiedad e insomnio, induciendo un estado de calma mental y bienestar emocional duradero.</span>
            </li>
             <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Fortalecimiento del sistema inmune</span>
              <span>En niños y adultos, el Tuina pediátrico o general ayuda a fortalecer las defensas y prevenir enfermedades recurrentes.</span>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-100 pt-6">
          <h4 className="text-xl font-bold text-dark mb-4">¿Cómo es una sesión de Tuina?</h4>
          <p className="italic">
            A diferencia de otros masajes, el Tuina se realiza generalmente con ropa cómoda y ligera, o sobre una sábana de algodón, sin necesidad de aceites (aunque a veces se utilizan linimentos herbales). Es una terapia activa y dinámica donde el paciente participa en su recuperación.
            En consulta, integramos el Tuina con otras técnicas como ventosas o acupuntura para potenciar los resultados y ofrecer un tratamiento completo y personalizado.
          </p>
        </div>
      </div>
    ),
    image: IMAGES.services.tuina
  },
  {
    title: 'Moxibustión',
    fullText: (
      <div className="space-y-6 text-textGray text-lg leading-relaxed">
        <h4 className="text-dark font-bold text-2xl mb-4">La Alquimia del Calor Terapéutico</h4>
        <p>
          La Moxibustión (del japonés Mogusa, que significa "hierba para quemar") es una de las terapias pilares de la Medicina Tradicional China, cuya antigüedad es incluso superior a la de la propia acupuntura. En nuestra práctica clínica, la entendemos como una técnica de termoterapia profunda que utiliza la combustión de la planta Artemisia Vulgaris para restaurar la bioelectricidad y la dinámica térmica del organismo.
        </p>
        
        <h4 className="text-dark font-bold text-xl mt-8 mb-4">La Naturaleza de la Artemisa</h4>
        <p>
          La elección de la Artemisa Vulgaris no es casual. Esta planta medicinal posee propiedades únicas: una vez procesada y envejecida, su combustión genera un espectro de radiación infrarroja de onda corta y larga que tiene la capacidad de penetrar en los tejidos profundos, alcanzando niveles que el calor superficial (como una manta eléctrica) nunca podría lograr. Sus aceites esenciales y resinas actúan de forma sinérgica, facilitando una respuesta biológica inmediata.
        </p>

        <div className="bg-light/50 p-8 rounded-2xl border border-secondary/20 mt-8">
          <h4 className="text-dark font-bold text-2xl mb-6">Mecanismos de Acción desde la MTC</h4>
          <p className="mb-6">Desde la cosmovisión de la Medicina China, la moxibustión actúa sobre el sistema de meridianos bajo tres principios fundamentales:</p>
          <ul className="space-y-6">
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Tonificación del Yang</span>
              <span>Es la herramienta por excelencia para recuperar la energía vital cuando hay agotamiento crónico, sensación de frío interno o debilidad orgánica.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Expulsión de Factores Patógenos</span>
              <span>Es altamente eficaz para "disolver" el Frío y la Humedad estancada en articulaciones y órganos, condiciones que suelen manifestarse como dolores agudos, pesadez o procesos inflamatorios crónicos.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-secondary font-bold text-lg">🌿 Activación del Xue (Sangre) y el Qi</span>
              <span>El calor de la moxa rompe el estancamiento sanguíneo, promoviendo una circulación fluida que nutre los tejidos y acelera los procesos de reparación celular.</span>
            </li>
          </ul>
        </div>

        <h4 className="text-dark font-bold text-xl mt-8 mb-4">Perspectiva Científica y Fisiológica</h4>
        <p>La ciencia moderna ha validado los efectos de la moxibustión a través de diversos mecanismos fisiológicos:</p>
        <ul className="list-disc pl-6 space-y-2">
            <li><strong>Efecto Vasodilatador:</strong> Incrementa de forma local y sistémica el flujo sanguíneo, mejorando la oxigenación de los tejidos.</li>
            <li><strong>Modulación Inmunitaria:</strong> Se ha demostrado que la aplicación de moxibustión en puntos específicos aumenta la producción de glóbulos blancos y fortalece la respuesta del sistema inmune.</li>
            <li><strong>Efecto Analgésico:</strong> Al actuar sobre los termorreceptores y las terminaciones nerviosas, eleva el umbral del dolor y reduce la inflamación mediante la liberación de mediadores químicos naturales.</li>
        </ul>

        <div className="border-t border-gray-100 pt-6 mt-8">
          <h4 className="text-xl font-bold text-dark mb-4">Aplicaciones Clínicas en Consulta</h4>
          <p className="mb-4">
            En nuestro centro, integramos la moxibustión de forma estratégica según el diagnóstico sindrómico de cada paciente. Utilizamos diferentes métodos, desde la moxa indirecta (puros de moxa) hasta la moxa sobre aguja (calor conducido a través de la aguja de acupuntura hacia la profundidad del punto), siendo especialmente efectiva en:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1 text-sm italic">
            <li>Patologías ginecológicas (dismenorrea, infertilidad por frío en útero).</li>
            <li>Trastornos digestivos (diarrea crónica, digestiones lentas).</li>
            <li>Dolores articulares y óseos que empeoran con el frío o la humedad.</li>
            <li>Fortalecimiento del sistema preventivo (inmunidad).</li>
          </ul>
          <p className="text-center font-bold text-xl text-primary italic border-l-4 border-primary pl-4 py-2 bg-light/30 rounded-r-lg">
            "La moxibustión no es solo calor; es la entrega de energía pura para que el cuerpo recupere su capacidad de autorregulación y vida."
          </p>
        </div>
      </div>
    ),
    image: IMAGES.services.moxibustion
  }
];

const Services: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Ajuste para el Navbar y el índice
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <SEO 
        title="Nuestros Servicios" 
        description="Especialistas en Medicina Tradicional China, Coaching Transformacional y Terapias Energéticas para un bienestar integral." 
      />
      <PageHeader title="SERVICIOS" breadcrumb="Servicios">
        <nav className="flex flex-col gap-3">
          <a 
            href="#medicina-tradicional-china" 
            onClick={(e) => scrollToSection(e, 'medicina-tradicional-china')}
            className="group flex items-center md:justify-end gap-3 text-sm font-bold text-gray-200 hover:text-white transition-all"
          >
            <span>Medicina Tradicional China</span>
            <span className="w-2 h-2 bg-secondary rounded-full group-hover:scale-150 transition-transform"></span>
          </a>
          <a 
            href="#coaching-transformacional" 
            onClick={(e) => scrollToSection(e, 'coaching-transformacional')}
            className="group flex items-center md:justify-end gap-3 text-sm font-bold text-gray-200 hover:text-white transition-all"
          >
            <span>Coaching Transformacional</span>
            <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
          </a>
          <a 
            href="#terapias-energeticas" 
            onClick={(e) => scrollToSection(e, 'terapias-energeticas')}
            className="group flex items-center md:justify-end gap-3 text-sm font-bold text-gray-200 hover:text-white transition-all"
          >
            <span>Terapias Energéticas</span>
            <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform"></span>
          </a>
        </nav>
      </PageHeader>

      {/* BLOQUE 1: MEDICINA TRADICIONAL CHINA */}
      <section id="medicina-tradicional-china" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Medicina Tradicional China</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-textGray text-lg max-w-2xl mx-auto">
              Técnicas milenarias diseñadas para restaurar el flujo de energía y el equilibrio natural de tu cuerpo.
            </p>
          </div>

          <div className="flex flex-col gap-32">
            {servicesList.map((service, index) => (
              <div 
                key={index} 
                className="block"
              >
                {/* Header of Service: Title and Category */}
                <div className="flex items-center gap-3 mb-6">
                   <div className="h-[2px] w-12 bg-secondary"></div>
                   <span className="text-secondary font-bold uppercase tracking-wider text-sm">Terapia Holística</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-dark mb-10">
                  {service.title}
                </h3>

                {service.fullText ? (
                  <div className="relative">
                    {/* Image floated to one side */}
                    <div className={`w-full md:w-[450px] mb-8 md:mb-10 ${index % 2 === 0 ? 'md:float-left md:mr-12' : 'md:float-right md:ml-12'}`}>
                      <div className="relative group">
                        <div className="absolute inset-0 border-2 border-secondary/30 rounded-2xl translate-x-2 translate-y-2 z-0"></div>
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-[350px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content that wraps or flows below */}
                    <div className="text-textGray text-lg leading-relaxed">
                      {service.fullText}
                    </div>

                    {/* Clearfix for float */}
                    <div className="clear-both mt-12">
                      <button className="bg-primary text-white px-10 py-4 rounded-full hover:bg-dark transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wider text-sm">
                        Agendar Sesión de {service.title}
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Simple layout for other services */
                  <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
                    <div className="w-full md:w-1/2">
                      <div className="relative group">
                        <div className="absolute inset-0 border-2 border-secondary/30 rounded-2xl translate-x-2 translate-y-2 z-0"></div>
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                          <img src={service.image} alt={service.title} className="w-full h-[300px] object-cover" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="text-textGray text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <button className="bg-primary text-white px-8 py-3 rounded hover:bg-dark transition-colors duration-300 font-medium shadow-lg">
                        Consultar Detalles
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 2: COACHING TRANSFORMACIONAL */}
      <section id="coaching-transformacional" className="py-24 bg-light relative overflow-hidden scroll-mt-32">
        {/* Decorative circle background */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-[1140px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Coaching Transformacional</h2>
            <p className="text-secondary font-bold text-xl uppercase tracking-widest">Empoderamiento y Reconfiguración Subconsciente</p>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <p className="text-xl text-dark font-medium leading-relaxed mb-8 italic border-l-4 border-secondary pl-6">
                  Este servicio está enfocado en el potencial humano. Es un espacio diseñado para personas que se encuentran en un punto de inflexión vital.
                </p>
                
                <div className="prose prose-lg text-textGray max-w-none space-y-6">
                  <p>
                    Ya sea por cambios de carrera, desafíos en el emprendimiento, crisis relacionales o la necesidad de superar techos de cristal internos como el autosabotaje y los miedos limitantes.
                  </p>

                  <h4 className="text-2xl font-bold text-dark pt-4">La Fusión de Cuatro Pilares</h4>
                  <p className="text-primary font-medium italic">Coaching, Dirección de Personas, Reprogramación Subconsciente y Mundo Energético</p>
                  
                  <p>
                    A diferencia de un coaching convencional basado únicamente en la voluntad y el análisis consciente, mi metodología aborda el cambio desde la arquitectura profunda de la mente:
                  </p>

                  <ul className="space-y-6 !pl-0">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                        <Check size={20} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-dark block text-lg mb-1">Coaching Estratégico y Dirección de Personal</strong>
                        Aporto mi experiencia en la gestión de recursos humanos y coaching ejecutivo para ofrecerte estructura, objetivos claros y una visión estratégica. No solo hablamos de sueños; trazamos planes de acción realistas.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                        <Check size={20} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-dark block text-lg mb-1">Reprogramación Subconsciente</strong>
                        Es el motor de cambio. El subconsciente rige el 95% de nuestras conductas. Mediante este método, eliminamos bloqueos emocionales y grabamos nuevas creencias de forma rápida y directa.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                        <Check size={20} strokeWidth={3} />
                      </div>
                      <div>
                        <strong className="text-dark block text-lg mb-1">Maestría en el Mundo Energético</strong>
                        Entendemos que tu capacidad de logro depende de tu nivel de coherencia energética. Si tu energía está bloqueada por traumas antiguos, no tendrás la fuerza necesaria.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="https://picsum.photos/600/800?image=66" alt="Coaching Session" className="w-full h-80 object-cover" />
                </div>
                
                <div className="bg-primary text-white p-8 rounded-2xl shadow-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Check className="text-secondary" /> ¿En qué áreas trabajamos?
                  </h4>
                  <ul className="space-y-4 text-sm text-gray-200">
                    <li><strong className="text-secondary">● Emprendimiento y Éxito:</strong> Superar el síndrome del impostor y liderazgo.</li>
                    <li><strong className="text-secondary">● Autoestima:</strong> Eliminar la autocrítica destructiva y desvalorización.</li>
                    <li><strong className="text-secondary">● Transiciones:</strong> Afrontar rupturas, duelos o cambios con claridad.</li>
                    <li><strong className="text-secondary">● Fobias y Miedos:</strong> Desactivar respuestas automáticas de miedo.</li>
                  </ul>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500 hidden md:block">
                  <img src="https://picsum.photos/600/400?image=67" alt="Mental Clarity" className="w-full h-48 object-cover" />
                </div>
              </div>
            </div>

            {/* How is a session? Section */}
            <div className="mt-16 pt-12 border-t border-gray-100">
              <div className="max-w-3xl">
                <h4 className="text-2xl font-bold text-dark mb-6 italic">¿Cómo es una sesión?</h4>
                <p className="text-textGray leading-relaxed text-lg">
                  Es una sesión de trabajo activa. A través de la comunicación con el subconsciente (test muscular) y técnicas de integración cerebral, identificamos los obstáculos invisibles y los desactivamos en la misma sesión. El objetivo es que salgas de la mentoría con una nueva configuración interna, sintiéndote con el permiso y la capacidad real de ejecutar tus cambios.
                </p>
                <div className="mt-10">
                  <button className="bg-secondary text-dark font-bold px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-xl flex items-center gap-3">
                    Agendar Mentoría Transformacional
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: TERAPIAS ENERGÉTICAS */}
      <section id="terapias-energeticas" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Terapias Energéticas</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="bg-light/50 border-2 border-dashed border-gray-200 rounded-3xl p-20 flex flex-col items-center justify-center text-center">
            <div className="text-secondary/40 mb-4">
              <Check size={64} strokeWidth={1} />
            </div>
            <p className="text-textGray text-xl italic font-medium">Próximamente estaremos detallando nuestros servicios de equilibrio energético.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
