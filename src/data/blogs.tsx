import React from 'react';
import { IMAGES } from '../constants/images';

// 1. Datos para la sección: "NUESTRAS HISTORIAS" (Testimonios y Tratamientos)
export const blogPosts = [
  {
    id: 1,
    title: '¿Cómo es tu primera vez en una consulta de terapias holísticas?',
    date: 'Parte 1 - Paula',
    category: 'Experiencia',
    image: IMAGES.blogs[0],
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DMPvKq0N42k/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DMPvKq0N42k/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicación en Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DMPvKq0N42k/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Una publicación compartida por @acupuntura_terapias_holisticas</a></p></div></blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Dar el primer paso hacia el bienestar integral a veces puede generar dudas. ¿Qué pasa exactamente cuando cruzas la puerta de un centro de terapias naturales? ¿Cómo es el trato? En este breve pero revelador video, te invitamos a acompañar a una paciente en su primera visita a la consulta de <strong>Yeni Arriarán</strong>, especialista en acupuntura y terapias holísticas ubicada en Torremolinos, Málaga.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El valor de ser verdaderamente escuchado</h4>
        <p>Lo primero que destaca en el video es el ambiente de calma y bienvenida. A diferencia de las consultas tradicionales donde el reloj siempre parece apremiar, la filosofía de este espacio es muy diferente y liberadora: <em className="text-accent-gold">"Aquí vienes a soltar, no a explicar con prisa"</em>.</p>
        <p>El video nos muestra que el primer gran paso para sanar es establecer una conexión de confianza. Antes de cualquier aguja o tratamiento, la prioridad es la <strong>escucha activa y empática</strong>.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Conectando los síntomas</h4>
        <p>Durante la consulta, vemos cómo la paciente comparte sus malestares cotidianos:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Sensación constante de inflamación.</li>
          <li>Digestiones muy pesadas.</li>
          <li>Dolor persistente en la boca del estómago.</li>
        </ul>
        <p>Frente a esto, el mensaje de la terapeuta es claro y reconfortante: <em className="text-accent-gold">"Todo lo que sientes... importa"</em>. En la medicina holística, ningún síntoma es aislado; todos son piezas clave para entender el estado general del cuerpo y la mente.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El inicio del diagnóstico</h4>
        <p>Finalmente, el clip nos da un pequeño vistazo a las técnicas de evaluación, comenzando con la tradicional <strong>toma del pulso</strong>. Esta es una herramienta milenaria y fundamental en la acupuntura para leer cómo está fluyendo la energía y qué órganos necesitan recuperar su equilibrio.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">¿Te animas a dar el paso?</h4>
        <p>Si alguna vez te has preguntado cómo se vive una sesión de este tipo, este video te dará una visión cercana, profesional y muy humana. Te invitamos a darle al <em>play</em> para conocer de cerca este proceso de sanación y a mantenerte atento.</p>
      </div>
    )
  },
  {
    id: 2,
    title: 'Tu cuerpo guarda respuestas: El diagnóstico en la terapia holística',
    date: 'Parte 2 - Paula',
    category: 'Diagnóstico',
    image: IMAGES.blogs[1],
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DMhwsedqs1R/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DMhwsedqs1R/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicación en Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DMhwsedqs1R/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Una publicación compartida por @acupuntura_terapias_holisticas</a></p></div></blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Si nos acompañaste en la primera parte de esta serie, ya sabes que el primer paso en el consultorio de la especialista <strong>Yeni Arriarán</strong> es la escucha activa. Pero, ¿qué sucede una vez que hemos compartido nuestras molestias? En este segundo video, entramos de lleno en la fase de evaluación, descubriendo una verdad fascinante: nuestro cuerpo habla y guarda respuestas que a veces ni nosotros mismos conocíamos.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El lenguaje silencioso de tu cuerpo</h4>
        <p>El video nos muestra cómo la terapeuta va más allá de las palabras de Paula. A través de técnicas tradicionales y milenarias, como la <strong>lectura de la lengua y el pulso</strong>, Yeni comienza a descifrar el estado interno de la paciente. Como bien nos recuerda el video: <em className="text-accent-gold">"La lengua, el pulso, los puntos de tensión... todo habla"</em>. Para la medicina holística, estas herramientas son el mapa perfecto para entender cómo fluye nuestra energía.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Descifrando los mensajes, no los enemigos</h4>
        <p>Uno de los mensajes más poderosos de esta sesión es cambiar nuestra perspectiva sobre el dolor: <em className="text-accent-gold">"Cada síntoma es un mensaje, no un enemigo"</em>. Durante la evaluación, Yeni y Paula van conectando las piezas del rompecabezas:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Una digestión que sigue sintiéndose lenta.</li>
          <li>Exceso de calor interno que provoca despertares nocturnos.</li>
          <li>Una profunda sensibilidad y tensión en la zona lumbar baja y el sacro (en el área de las vértebras L5 y S1).</li>
        </ul>
        <p>Lo que en la medicina tradicional podrían parecer problemas aislados (insomnio, digestión y dolor de espalda), aquí se observan, se escuchan y se conectan para encontrar la verdadera raíz del desequilibrio.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Del diagnóstico a la acción</h4>
        <p>El momento clave llega cuando todas las señales encajan. Con una frase llena de empatía y seguridad, Yeni le dice a la paciente: <em className="text-accent-gold">"Y ahora que sé lo que necesitas... empiezo a ayudarte"</em>. Es el instante de dejar las palabras atrás, quitarse los zapatos y pasar a la camilla para comenzar el verdadero trabajo de sanación.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">¿Listo para descubrir qué dice tu cuerpo?</h4>
        <p>Te invitamos a darle al <em>play</em> para ver de cerca cómo se realiza esta evaluación tan personalizada.</p>
      </div>
    )
  },
  {
    id: 3,
    title: 'Tratando la inflamación abdominal: El poder de una sola aguja',
    date: 'Parte 3 - Paula',
    category: 'Tratamiento',
    image: IMAGES.blogs[2],
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DMz40cvs5Wx/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DMz40cvs5Wx/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicación en Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DMz40cvs5Wx/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Una publicación compartida por @acupuntura_terapias_holisticas</a></p></div></blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Si has seguido esta serie desde el principio, ya conoces la importancia de la escucha activa y el diagnóstico corporal en la consulta de la especialista Yeni Arriarán. Ahora, en esta tercera entrega, pasamos a la fase más esperada: el tratamiento en la camilla. Acompaña a Paula para descubrir cómo se aborda de forma efectiva y sorprendente la inflamación digestiva.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El mapa del dolor a través de la palpación</h4>
        <p>El video comienza con Yeni realizando un chequeo detallado mediante la palpación del vientre de la paciente. El objetivo es claro: localizar los puntos exactos de tensión. A través de suaves presiones, ambas logran identificar que el dolor más agudo se concentra en la parte alta del abdomen, confirmando los síntomas de pesadez e inflamación que Paula mencionaba al llegar.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Resultados sorprendentes en segundos</h4>
        <p>Aquí es donde presenciamos lo fascinante de la acupuntura y las terapias holísticas. En lugar de tratar directamente la zona adolorida del estómago, Yeni coloca una sola aguja en la pantorrilla de Paula. Al volver a palpar el abdomen casi de inmediato, la respuesta del cuerpo es increíble: el dolor baja significativamente y la paciente confirma sentirse <em className="text-accent-gold">"mucho mejor"</em>. Esto nos demuestra cómo los canales de nuestro cuerpo están interconectados de maneras asombrosas.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Los puntos "limpiadores" para un alivio total</h4>
        <p>Para eliminar el lóbulo último de molestia que quedaba en el vientre, la terapeuta recurre a un ajuste final: estimula un punto específico en el pie. Una vez más, el alivio es instantáneo y la tensión desaparece por completo. Tras esto, coloca una aguja en ese punto del pie, actuando como un "limpiador" para consolidar el equilibrio en el organismo.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Una metodología rápida y efectiva</h4>
        <p>Al final del clip, Yeni nos resume la eficacia de esta metodología:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Chequeo y palpación del vientre para encontrar la raíz física.</li>
          <li>Uso de una sola aguja principal para quitar el mayor porcentaje del dolor.</li>
          <li>Aplicación de puntos "limpiadores" (como los del pie) para terminar el proceso.</li>
        </ul>
        <p>¿Lo más sorprendente? Es un tratamiento profundo que, en esta fase, toma apenas 10 minutos en brindar un alivio real.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Descubre el alivio por ti mismo</h4>
        <p>Si sufres de inflamación digestiva o dolores crónicos, este video te demostrará que una alternativa natural, rápida y respetuosa con tu cuerpo es posible. ¡Dale al <em>play</em> para ver este fascinante proceso de sanación con tus propios ojos!</p>
      </div>
    )
  },
  {
    id: 4,
    title: 'El testimonio de Paula: "¿Parece magia?" Los resultados de la terapia holística',
    date: 'Parte 4 - Paula',
    category: 'Testimonio',
    image: IMAGES.blogs[3],
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DNFwmcKIQxj/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DNFwmcKIQxj/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicación en Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DNFwmcKIQxj/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Una publicación compartida por @acupuntura_terapias_holisticas</a></p></div></blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Tras haber recorrido el camino de la escucha activa, el diagnóstico corporal y el tratamiento con acupuntura en la consulta de <strong>Yeni Arriarán</strong>, llega el momento más importante: escuchar cómo se siente la paciente al terminar su primera sesión. En este último video de la serie, Paula comparte su experiencia real y las sensaciones que le ha dejado esta alternativa de bienestar.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El punto de partida: ¿Por qué acudir a consulta?</h4>
        <p>Para entender el valor del resultado, es fundamental recordar el estado en el que Paula llegó a la consulta. En sus propias palabras, acudió porque sufría dos malestares muy constantes que afectaban su calidad de vida:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Una fuerte y molesta inflamación en la boca del estómago.</li>
          <li>Un dolor persistente en la zona baja de la espalda y el sacro.</li>
        </ul>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El alivio inmediato: "Parece que Yeni hace magia"</h4>
        <p>Al preguntarle si ha notado mejoría tras la sesión, la respuesta de Paula es inmediata y viene acompañada de una gran sonrisa de alivio: <em className="text-accent-gold">"La verdad es que parece que Yeni hace magia"</em>. Este testimonio refleja cómo la estimulación de los puntos correctos del cuerpo mediante la acupuntura puede liberar tensiones y reducir el dolor de forma casi instantánea, devolviendo la ligereza al cuerpo en una sola visita.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Un proceso consciente hacia el 100% de bienestar</h4>
        <p>A pesar de la rápida mejoría, uno de los aprendizajes más valiosos que Paula se lleva de la consulta es entender cómo funciona verdaderamente la sanación holística. Como ella misma explica, Yeni le ha mostrado que recuperar el equilibrio <strong>es un proceso</strong>.</p>
        <p>El alivio inmediato es el primer gran paso, pero la constancia y el seguimiento en las sesiones son la clave para que el cuerpo sane de raíz. Paula se despide motivada y muy contenta, con la certeza y la tranquilidad de saber que, siguiendo su tratamiento, llegará a <em className="text-accent-gold">"estar bien al 100%"</em>.</p>
        
        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">¿Y tú, cuándo empiezas tu proceso?</h4>
        <p>El viaje de Paula nos demuestra que no tenemos por qué resignarnos a vivir con inflamación o dolor crónico. Tu cuerpo también tiene la capacidad de recuperar su equilibrio natural si le das las herramientas adecuadas. Te invitamos a darle al <em>play</em> para escuchar su testimonio completo.</p>
        
        <hr className="border-text-main/10 my-8" />
        
        <p className="text-sm italic">Si deseas iniciar tu propio camino hacia el bienestar en la zona de Málaga, te recordamos que puedes encontrar el Centro de Terapias Naturales de Yeni Arriarán en la Plaza Andalucía 4 (Centro Comercial España, Nº 81), en Torremolinos. Al final del video encontrarás su número de contacto para agendar tu cita.</p>
      </div>
    )
  },
  {
    id: 5,
    title: '¿Por qué decidirse por la acupuntura? La historia de sanación de Paula',
    date: 'Parte 5 - Paula',
    category: 'Testimonio',
    image: IMAGES.blogs[4],
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DNX0oywBj5Y/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DNX0oywBj5Y/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicación en Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DNX0oywBj5Y/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Una publicación compartida por @acupuntura_terapias_holisticas</a></p></div></blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>En los videos anteriores vimos cómo se desarrolla una sesión de acupuntura en la consulta de <strong>Yeni Arriarán</strong> y el alivio inmediato que puede brindar para tensiones físicas y problemas digestivos. Sin embargo, en esta entrega especial, Paula nos abre su corazón para contarnos <strong>el verdadero motivo de fondo</strong> que la llevó a buscar las terapias holísticas: una dura lucha contra la endometriosis.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Un diagnóstico difícil y un pronóstico desalentador</h4>
        <p>La historia de Paula comenzó hace 6 años, poco después de su primer embarazo, cuando le detectaron <strong>endometriosis</strong>. El mensaje que recibió por parte de la medicina convencional fue sumamente inflexible:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Le aseguraron que era una enfermedad crónica que la acompañaría inevitablemente hasta la menopausia.</li>
          <li>Le dijeron que no podría volver a tener hijos.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El camino hacia la medicina tradicional china</h4>
        <p>Impulsada por la desesperación y el deseo profundo de recuperar su calidad de vida, Paula decidió buscar otras opciones. Aunque nunca antes la había probado, decidió confiar en la <strong>medicina tradicional china</strong>, combinando el tratamiento de acupuntura con el uso de plantas medicinales.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Un resultado que sorprende hasta a los médicos</h4>
        <p>El desenlace de su testimonio es tan conmovedor como inspirador. Hoy en día, Paula comparte con una inmensa alegría y tranquilidad que:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Ha podido <strong>dejar por completo las pastillas</strong> que tomaba para la endometriosis.</li>
          <li><strong>Le han dado el alta definitiva</strong> en la unidad materno-infantil de su hospital.</li>
        </ul>
        <p>Según sus propias palabras, ni siquiera su médico especialista logra explicarse cómo la enfermedad ha podido desaparecer por completo de su organismo.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Una puerta abierta a la esperanza</h4>
        <p>Este poderoso testimonio nos recuerda que las terapias holísticas no solo ayudan a aliviar dolencias del día a día, sino que pueden trabajar a un nivel muy profundo y transformador en dolencias consideradas crónicas, ayudando al organismo a recuperar su equilibrio natural. Te invitamos a darle al <em>play</em> para escuchar esta inspiradora historia de superación de voz de su propia protagonista.</p>

        <hr className="border-text-main/10 my-8" />

        <p className="text-sm italic">Si estás pasando por una situación similar o buscas un enfoque médico integrativo y respetuoso para tu bienestar en Málaga, te recordamos que el Centro de Terapias Naturales de Yeni Arriarán se encuentra en la Plaza Andalucía 4 (Centro Comercial España, Nº 81), en Torremolinos. Al final del video encontrarás su número de contacto para agendar tu cita y dar el primer paso.</p>
      </div>
    )
  },
  {
    id: 6,
    title: 'De un dolor nivel 10 a un nivel 2 en solo 30 minutos: La experiencia de Roscoe',
    date: 'Parte 6 - Roscoe',
    category: 'Testimonio',
    image: IMAGES.blogs[5],
    embedHtml: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@yeni_arriaran/video/7593707844826877206" data-video-id="7593707844826877206" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@yeni_arriaran" href="https://www.tiktok.com/@yeni_arriaran?refer=embed">@yeni_arriaran</a> Acupuntura para dolor de cuello.  Paciente inglés con dolor cervical 10&#47;10 → 2&#47;10 en 30 min, 1ª sesión. Tratamiento personalizado con medicina tradicional china. <a title="acupuntura" target="_blank" href="https://www.tiktok.com/tag/acupuntura?refer=embed">#acupuntura</a> <a title="dolor" target="_blank" href="https://www.tiktok.com/tag/dolor?refer=embed">#dolor</a> <a title="torremolinos" target="_blank" href="https://www.tiktok.com/tag/torremolinos?refer=embed">#torremolinos</a> <a title="dolordecuello" target="_blank" href="https://www.tiktok.com/tag/dolordecuello?refer=embed">#dolordecuello</a> <a target="_blank" title="♬ sonido original - yeni_arriaran" href="https://www.tiktok.com/music/sonido-original-7593707854561839894?refer=embed">♬ sonido original - yeni_arriaran</a> </section> </blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Cuando sufrimos de dolor severo en el cuello o la espalda, realizar hasta las tareas más simples del día a día puede volverse una tarea titánica. A menudo pensamos que un dolor tan agudo requerirá meses de tratamiento o medicación pesada para empezar a ceder. Sin embargo, en este video te compartimos el caso de <strong>Roscoe</strong>, un paciente que llegó a consulta buscando alivio y se llevó una grata sorpresa en una sola sesión.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El punto de partida: Un dolor en el máximo nivel</h4>
        <p>Durante el video, Roscoe nos comparte en inglés cómo se sentía antes de tumbarse en la camilla. Venía lidiando con una fuerte tensión y un dolor persistente en la espalda y, sobre todo, en el cuello. Al preguntarle por la intensidad de esa molestia en una escala del 1 al 10, su respuesta inicial era contundente: el dolor estaba en un <strong>nivel 10</strong>.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El poder de 30 minutos de terapia holística</h4>
        <p>Lo verdaderamente impactante de este testimonio es la rapidez y eficacia del tratamiento mediante la acupuntura. Con tan solo <strong>30 minutos</strong> de sesión, el rostro de relajación de Roscoe lo dice todo. Al evaluar su progreso al final de la terapia, nos cuenta que su dolor se redujo drásticamente a un <strong>nivel 2 o 3</strong>.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">"Muy efectivo": Un alivio que trasciende fronteras</h4>
        <p>Las palabras de agradecimiento de Roscoe reflejan el impacto de recibir un tratamiento acertado y respetuoso con el cuerpo: <em className="text-accent-gold">"Me siento muy bien... ha sido muy efectivo. Me has ayudado muchísimo hoy"</em>. Su caso es un excelente ejemplo de cómo la medicina tradicional y la estimulación precisa de los puntos energéticos pueden desactivar contracturas y dolores agudos de forma natural y sin métodos invasivos.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">¿Lidias con dolor de cuello o espalda?</h4>
        <p>Si tú también sientes que el dolor cervical o lumbar está limitando tu rutina y te encuentras en un "nivel 10", el cuerpo te está pidiendo una pausa y una solución de raíz. Te invitamos a darle al <em>play</em> para escuchar el testimonio completo de Roscoe y comprobar cómo la acupuntura puede devolverte el bienestar en tiempo récord.</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">Recuerda que puedes encontrar nuestro centro de acupuntura y terapias holísticas en la Plaza Andalucía 4 (Centro Comercial España, Nº 81), en Torremolinos (Málaga). Al final del video tienes disponible nuestro teléfono de contacto para agendar tu cita y empezar a vivir sin dolor.</p>
      </div>
    )
  },
  {
    id: 7,
    title: '¿Dolor menstrual "nivel parto"? Cómo la acupuntura integrativa puede cambiar tu ciclo',
    date: 'Parte 7 - Anita',
    category: 'Testimonio',
    image: IMAGES.blogs[6],
    embedHtml: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@yeni_arriaran/video/7593831000438770966" data-video-id="7593831000438770966" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@yeni_arriaran" href="https://www.tiktok.com/@yeni_arriaran?refer=embed">@yeni_arriaran</a> <p></p> <a target="_blank" title="♬ sonido original - yeni_arriaran" href="https://www.tiktok.com/music/sonido-original-7593831003215498006?refer=embed">♬ sonido original - yeni_arriaran</a> </section> </blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Para muchas mujeres, la llegada de la menstruación —e incluso los días de ovulación— es sinónimo de un sufrimiento incapacitante. Pasar el día en la cama, dependiendo de mantas térmicas y altas dosis de analgésicos como el naproxeno, se convierte en una rutina agotadora. En este video acompañamos a Anita (@anita_madre_emprendedora), quien cansada de vivir con dolores que ella misma describe como <em className="text-accent-gold">"nivel parto"</em>, decidió buscar una solución definitiva en el centro de terapias holísticas de <strong>Yeni Arriarán</strong> en Torremolinos, Málaga.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">De la desesperación a la confianza</h4>
        <p>Uno de los mayores temores al acercarse a la acupuntura es el miedo a las agujas. Anita confiesa que le daba mucho respeto el <em className="text-accent-gold">"tema de pinchar"</em>, pero la calidez y el trato empático de Yeni disiparon cualquier temor desde el primer momento. Todo comienza con una valoración exhaustiva donde no solo se habla del dolor local, sino del descanso, los niveles de energía y el estado general del organismo para trazar un plan a medida.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El poder de combinar técnicas en una sola sesión</h4>
        <p>Lo que hace verdaderamente especial la metodología de Yeni es que no se limita a una sola herramienta. Según las necesidades reales del paciente, en una misma sesión se pueden integrar diversas técnicas milenarias y modernas:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li><strong>Craneopuntura:</strong> Puntos estratégicos en la cabeza para relajar el sistema nervioso y aliviar migrañas o cefaleas tensionales.</li>
          <li><strong>Auriculoterapia:</strong> Estimulación de puntos reflejos en la oreja mediante dispositivos especializados.</li>
          <li><strong>Moxibustión:</strong> Aplicación de calor terapéutico (con la tradicional caja de artemisa) sobre el vientre o extremidades para movilizar la energía y calmar el útero.</li>
          <li><strong>Acupuntura Neoclásica y palpación abdominal:</strong> Un chequeo inmediato del abdomen para encontrar desequilibrios energéticos y comprobar en tiempo real cómo el dolor disminuye al colocar una aguja distal.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Resultados que se sienten en el acto: 90% menos de dolor</h4>
        <p>Durante la sesión, el cambio fue asombroso: tras la palpación abdominal y la aplicación de la aguja correcta, el dolor agudo del vientre se redujo en casi un <strong>90%</strong>. Pero el beneficio no fue solo físico; Anita, quien se considera una persona natural e inquieta, llegó a quedarse profundamente dormida en la camilla, saliendo en un estado de relajación absoluta y sin la típica carga lumbar de esos días.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Una inversión accesible para tu bienestar</h4>
        <p>Además de la efectividad, el testimonio destaca la transparencia y accesibilidad del tratamiento: una primera sesión completa de valoración y tratamiento por 70€, y sesiones de seguimiento por 50€. Una alternativa natural que busca ir a la raíz del problema para que puedas dejar atrás la dependencia mensual de la medicación fuerte.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">¿Lista para vivir tu ciclo en paz?</h4>
        <p>Si tú también sufres de dolores intensos al ovular o con la llegada de tu regla, tu cuerpo te está pidiendo un enfoque diferente. Te invitamos a darle al <em>play</em> para ver el proceso completo de esta sesión integrativa y descubrir cómo puedes recuperar tu calidad de vida.</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">Si te encuentras en la provincia de Málaga y quieres empezar tu tratamiento, puedes visitar el Centro de Terapias Naturales de Yeni Arriarán en la Plaza Andalucía 4 (Centro Comercial España, Local 81), en Torremolinos. Al final del video encontrarás su teléfono de contacto (+34 624 253 470) para agendar tu cita.</p>
      </div>
    )
  },
  {
    id: 8,
    title: 'Acelerando la recuperación postquirúrgica: El cambio radical de Lucía con acupuntura',
    date: 'Parte 8 - Lucia',
    category: 'Testimonio',
    image: IMAGES.blogs[7],
    embedHtml: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@yeni_arriaran/video/7599711253715553558" data-video-id="7599711253715553558" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@yeni_arriaran" href="https://www.tiktok.com/@yeni_arriaran?refer=embed">@yeni_arriaran</a> Cuando te operan y te ves así… asusta 😔 Hoy te muestro un caso real de inflamación post operación maxilofacial. Con 2 sesiones de acupuntura, la hinchazón bajó de forma muy notable (aprox. 80% en este caso).  ✨ Acompañar al cuerpo en su recuperación puede marcar la diferencia. 📍 Plaza Andalucía 4 (C.C. España n°81), Torremolinos (Málaga) 📲 Reserva tu cita por mensaje o WhatsApp 💚 Tu cuerpo te está hablando. Es hora de escucharlo… y liberarlo. <a title="acupuntura" target="_blank" href="https://www.tiktok.com/tag/acupuntura?refer=embed">#acupuntura</a> <a title="terapiasalternativas" target="_blank" href="https://www.tiktok.com/tag/terapiasalternativas?refer=embed">#terapiasalternativas</a> <a title="maxilofacial" target="_blank" href="https://www.tiktok.com/tag/maxilofacial?refer=embed">#maxilofacial</a> <a title="inflamacion" target="_blank" href="https://www.tiktok.com/tag/inflamacion?refer=embed">#inflamacion</a> <a title="torremolinos_malaga" target="_blank" href="https://www.tiktok.com/tag/torremolinos_malaga?refer=embed">#torremolinos_malaga</a> <a target="_blank" title="♬ sonido original - yeni_arriaran" href="https://www.tiktok.com/music/sonido-original-7599711257327192854?refer=embed">♬ sonido original - yeni_arriaran</a> </section> </blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Someterse a una cirugía maxilofacial es un proceso complejo que no termina en el quirófano. El postoperatorio suele venir acompañado de una inflamación severa, incomodidad y extensos hematomas que pueden tardar semanas en desaparecer de forma natural. Sin embargo, la medicina tradicional china ofrece recursos muy potentes para acelerar este proceso. En este video te mostramos el caso de <strong>Lucía</strong>, quien tras su operación decidió complementar su recuperación en el centro de <strong>Yeni Arriarán</strong> en Torremolinos, Málaga.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El impacto visible de una cirugía maxilofacial</h4>
        <p>Al inicio del clip podemos ver el punto de partida de Lucía: una inflamación muy pronunciada en el área de la mandíbula y la mejilla (lo que ella misma describe de forma coloquial como <em className="text-accent-gold">"tenía un huevo en la cara"</em>), acompañada de un hematoma o "moretón" que cubría una gran parte de su rostro. Este tipo de inflamación no solo resulta incómoda estéticamente, sino que genera tensión dolorosa en los tejidos musculares y articulares de la cara.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Resultados sorprendentes en solo dos sesiones</h4>
        <p>Lo verdaderamente impactante de este testimonio es la velocidad de la recuperación. Tras recibir apenas <strong>dos sesiones de acupuntura</strong>, el rostro de Lucía luce completamente transformado. Al sonreír ante la cámara, podemos apreciar cómo:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>La inflamación general del rostro ha bajado de manera drástica, devolviendo la definición natural a su rostro.</li>
          <li>El extenso hematoma oscuro se ha reducido a una pequeña y leve marca amarillenta en la zona inferior de la mandíbula.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">"Maravilloso": Una recuperación sin dolor y a ritmo acelerado</h4>
        <p>Cuando se le pregunta por su experiencia con el tratamiento, la respuesta de Lucía es directa y cargada de alivio: <em className="text-accent-gold">"Maravilloso"</em>. La acupuntura posquirúrgica funciona estimulando puntos clave que activan la circulación sanguínea y el drenaje linfático. Esto permite que el propio organismo reabsorba los fluidos y hematomas mucho más rápido, reduciendo el dolor y acortando los tiempos de convalecencia de forma natural y respetuosa.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">¿Vas a pasar por una cirugía o estás en postoperatorio?</h4>
        <p>Si tú o un ser querido se enfrentan a una intervención quirúrgica (dental, maxilofacial o estética) y quieren que la inflamación y el dolor desaparezcan mucho más rápido, la acupuntura es un aliado clínico excepcional. Te invitamos a darle al <em>play</em> para ver el increíble cambio en el rostro de Lucía con tus propios ojos.</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">Si buscas acelerar tu recuperación en la provincia de Málaga, te recordamos que el Centro de Terapias Naturales de Yeni Arriarán se encuentra en la Plaza Andalucía 4 (Centro Comercial España, Local 81), en Torremolinos. Al final del video tienes disponible su número de contacto (+34 624 253 470) para consultar tu caso agendar tu cita.</p>
      </div>
    )
  },
  {
    id: 9,
    title: 'Adiós al dolor de rodilla: De un nivel 6 a 0 en solo 30 minutos',
    date: 'Parte 9 - Alfonso',
    category: 'Testimonio',
    image: IMAGES.blogs[8],
    embedHtml: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@yeni_arriaran/video/7606862169799396630" data-video-id="7606862169799396630" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@yeni_arriaran" href="https://www.tiktok.com/@yeni_arriaran?refer=embed">@yeni_arriaran</a> <p></p> <a target="_blank" title="♬ sonido original - yeni_arriaran" href="https://www.tiktok.com/music/sonido-original-7606862164137233174?refer=embed">♬ sonido original - yeni_arriaran</a> </section> </blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>El dolor de rodilla es una de las molestias articulares más limitantes; puede dificultar gestos tan cotidianos como caminar, subir escaleras o simplemente flexionar las piernas para sentarse. Muchas veces asumimos que este tipo de desgaste o inflamación tardará semanas en mejorar. Sin embargo, en este nuevo video te presentamos el caso de <strong>Alfonso</strong>, quien acudió a la consulta de <strong>Yeni Arriarán</strong> en Torremolinos (Málaga) y experimentó un alivio total en una sola sesión.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El punto de partida: Un dolor articular limitante</h4>
        <p>Al inicio del video vemos a Alfonso tumbado en la camilla explicándole a la terapeuta el motivo de su visita: un molesto dolor en su rodilla izquierda. Al evaluar la intensidad de esta dolencia en una escala del 1 al 10 antes de empezar, Alfonso confirma que llegó con un <strong>nivel 6 de dolor</strong>, una molestia lo suficientemente fuerte como para interferir con su bienestar diario.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">La eficacia de 30 minutos de tratamiento holístico</h4>
        <p>A través de la estimulación precisa de los canales energéticos mediante la acupuntura y las terapias holísticas, es posible desinflamar la articulación, relajar la musculatura circundante y restaurar el flujo energético en la zona afectada sin necesidad de recurrir a métodos invasivos ni fármacos.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El resultado: Una sonrisa de alivio total (Nivel 0)</h4>
        <p>Lo más impactante de este testimonio ocurre tras apenas <strong>30 minutos de tratamiento</strong>. Cuando Yeni le pregunta por su nivel de dolor en ese momento, la amplia sonrisa de satisfacción de Alfonso lo dice absolutamente todo: <strong>el dolor se ha reducido a nivel 0</strong>. La molestia desapareció por completo, devolviéndole la movilidad y la ligereza en su pierna en tiempo récord.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">¿El dolor articular frena tu día a día?</h4>
        <p>El caso de Alfonso nos demuestra que nuestro cuerpo tiene una capacidad de respuesta y sanación increíble cuando se le aplican las técnicas correctas. Si tú también sufres de dolores en la rodilla, la espalda o cualquier otra articulación, no tienes por qué resignarte a vivir con molestia. ¡Dale al <em>play</em> para ver la cara de alivio de Alfonso y descubre todo lo que la medicina holística puede hacer por ti!</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">Si quieres agendar tu cita y comenzar a disfrutar de la salud y movilidad que mereces, te esperamos en el Centro de Terapias Naturales de Yeni Arriarán, ubicado en la Plaza Andalucía 4 (Centro Comercial España, Local 81), en Torremolinos (Málaga). Puedes contactarnos o pedir cita directamente llamando o escribiendo al teléfono <strong>+34 624 253 470</strong>.</p>
      </div>
    )
  }
];

// 2. Datos para la sección: "CONOCE MÁS" (Mitos e Historia)
export const conoceMasPosts = [
  {
    id: 10,
    title: 'Lo que necesitas saber antes de tu primera sesión',
    date: 'Mitos vs. Realidades de la Acupuntura',
    category: 'Mitos',
    image: IMAGES.blogs[9],
    embedHtml: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@yeni_arriaran/video/7541361996956994838" data-video-id="7541361996956994838" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@yeni_arriaran" href="https://www.tiktok.com/@yeni_arriaran?refer=embed">@yeni_arriaran</a> ✨ MITOS vs REALIDAD en la acupuntura y sanación natural 🧠 Mito: &#34;Sanar depende solo del terapeuta&#34; ✅ Realidad: ¡No! Es 50% el terapeuta y 50% tú. Sin tu compromiso, no hay transformation real. 💥 Mito: &#34;Con una sesión basta&#34; ✅ Realidad: Cada cuerpo es diferente. Edad, cronicidad, historia... todo influye. Sanar lleva su tiempo. 💉 Mito: &#34;Las agujas duelen&#34; ✅ Realidad: Son ultra finas. Lo que sentirás no es dolor… ¡es alivio! 🌿 La sanación no es mágica, pero cuando te implicas… los resultados sí lo parecen. 📍 Torremolinos – Plaza Andalucía 4 📲 624 253 470 <a title="yeniacupuntura" target="_blank" href="https://www.tiktok.com/tag/yeniacupuntura?refer=embed">#YeniAcupuntura</a> <a title="sanardesdedentro" target="_blank" href="https://www.tiktok.com/tag/sanardesdedentro?refer=embed">#SanarDesdeDentro</a> <a title="mitosvsrealidad" target="_blank" href="https://www.tiktok.com/tag/mitosvsrealidad?refer=embed">#MitosVsRealidad</a> <a title="acupunturasinmiedo" target="_blank" href="https://www.tiktok.com/tag/acupunturasinmiedo?refer=embed">#AcupunturaSinMiedo</a> <a title="medicinachina" target="_blank" href="https://www.tiktok.com/tag/medicinachina?refer=embed">#MedicinaChina</a> <a title="consultaholística" target="_blank" href="https://www.tiktok.com/tag/consultahol%C3%ADstica?refer=embed">#ConsultaHolística</a> <a title="tiktoksalud" target="_blank" href="https://www.tiktok.com/tag/tiktoksalud?refer=embed">#TikTokSalud</a> <a title="acupunturamálaga" target="_blank" href="https://www.tiktok.com/tag/acupunturam%C3%A1laga?refer=embed">#AcupunturaMálaga</a> <a target="_blank" title="♬ sonido original - yeni_arriaran" href="https://www.tiktok.com/music/sonido-original-7541362024639417110?refer=embed">♬ sonido original - yeni_arriaran</a> </section> </blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Alrededor de las terapias holísticas y la acupuntura existen numerosas creencias que pueden generar dudas o falsas expectativas cuando decidimos dar el paso hacia el bienestar natural. En este video, la especialista <strong>Yeni Arriarán</strong>, desde su centro en Torremolinos (Málaga), nos ayuda a desmontar los 3 mitos más comunes para entender realmente cómo funciona este proceso de sanación.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Mito 1: La sanación depende al 100% del terapeuta</h4>
        <p>Uno de los errores más frecuentes es pensar que al acudir a una consulta, el terapeuta o el médico tienen la responsabilidad absoluta de curarnos mediante una técnica.</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li><strong>La Realidad:</strong> El éxito de una terapia holística es un trabajo en equipo: <strong>50% del terapeuta y 50% del paciente</strong>. El especialista aporta el conocimiento, la técnica y la guía, pero el paciente debe comprometerse activamente con su proceso, adoptar hábitos saludables y contribuir conscientemente a su propia sanación integral.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Mito 2: En una sola sesión desaparecerán todos los problemas de salud</h4>
        <p>A menudo se espera que una sola cita sea suficiente para resolver dolencias que llevan meses o incluso años afectando al organismo.</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li><strong>La Realidad:</strong> Cada cuerpo es un mundo y cada caso clínico es completamente único. El tiempo de recuperación va a depender de factores clave como la <strong>edad del paciente, el tiempo que lleva con el problema, la cronicidad de la enfermedad</strong> y el estilo de vida que esté llevando. Como toda terapia profunda, requiere su propio tiempo y un proceso personalizado.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Mito 3: Las agujas de acupuntura duelen mucho</h4>
        <p>El miedo al dolor es el principal freno que impide a muchas personas probar esta milenaria técnica, asociando las agujas de acupuntura con las inyecciones médicas tradicionales.</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li><strong>La Realidad:</strong> Es totalmente incorrecto comparar una aguja de acupuntura con una de inyección o extracción de sangre. Las agujas utilizadas en esta terapia son <strong>ultrafinas y sumamente flexibles</strong>. Si bien puedes llegar a percibir una leve sensación o un micro-pinchazo en el segundo inicial de la inserción, el efecto inmediato posterior es de relajación profunda y un alivio notable del dolor general.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Despeja tus dudas y toma el control de tu salud</h4>
        <p>Conocer la realidad detrás de estos mitos nos permite abordar las terapias naturales con mayor confianza, realismo y tranquilidad. Te invitamos a darle al <em>play</em> para escuchar la explicación detallada de Yeni Arriarán y descubrir cómo un enfoque consciente puede transform tu bienestar.</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">Si estás en la provincia de Málaga y deseas iniciar un tratamiento holístico personalizado y profesional, te esperamos en el Centro de Terapias Naturales de Yeni Arriarán, ubicado en la Plaza Andalucía 4 (Centro Comercial España, Local 81), en Torremolinos. Puedes contactar o pedir tu cita llamando o escribiendo al teléfono <strong>+34 624 253 470</strong>.</p>
      </div>
    )
  },
  {
    id: 11,
    title: '¿Cómo llegué al mundo de la acupuntura?',
    date: 'El origen de mi vocación',
    category: 'Historia',
    image: IMAGES.blogs[10],
    embedHtml: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@yeni_arriaran/video/7543949228452711702" data-video-id="7543949228452711702" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@yeni_arriaran" href="https://www.tiktok.com/@yeni_arriaran?refer=embed">@yeni_arriaran</a> 🌿✨ &#34;Todo está bien&#34;... pero tú sabes que no lo está. Durante años fui directora financiera. Hasta que me diagnosticaron un adenoma hipofisario inoperable. Dolores, sueño extremo, malestar constante... Y en cada revisión, lo mismo: “Estás bien.” Pero mi cuerpo decía otra cosa. Desesperada, llegué a la Medicina China. Y ahí empezó mi verdadera sanación. Hoy no solo me escucho… también te acompaño a ti. 💬 Si alguna vez te han dicho que todo está bien… pero tú sabes que no, este espacio es para ti. 📍 Torremolinos – Plaza Andalucía 4 📲 624 253 470 <a title="yeniacupuntura" target="_blank" href="https://www.tiktok.com/tag/yeniacupuntura?refer=embed">#YeniAcupuntura</a> <a title="sanardesdedentro" target="_blank" href="https://www.tiktok.com/tag/sanardesdedentro?refer=embed">#SanarDesdeDentro</a> <a title="mihistoria" target="_blank" href="https://www.tiktok.com/tag/mihistoria?refer=embed">#MiHistoria</a> <a title="tiktoksalud" target="_blank" href="https://www.tiktok.com/tag/tiktoksalud?refer=embed">#TikTokSalud</a> <a title="adenomahipofisario" target="_blank" href="https://www.tiktok.com/tag/adenomahipofisario?refer=embed">#AdenomaHipofisario</a> <a title="consultaholística" target="_blank" href="https://www.tiktok.com/tag/consultahol%C3%ADstica?refer=embed">#ConsultaHolística</a> <a title="medicinachina" target="_blank" href="https://www.tiktok.com/tag/medicinachina?refer=embed">#MedicinaChina</a> <a title="escuchatucuerpo" target="_blank" href="https://www.tiktok.com/tag/escuchatucuerpo?refer=embed">#EscuchaTuCuerpo</a> <a title="acupunturamálaga" target="_blank" href="https://www.tiktok.com/tag/acupunturam%C3%A1laga?refer=embed">#AcupunturaMálaga</a> <a title="torremolinos" target="_blank" href="https://www.tiktok.com/tag/torremolinos?refer=embed">#Torremolinos</a> <a target="_blank" title="♬ sonido original - yeni_arriaran" href="https://www.tiktok.com/music/sonido-original-7543949309645998870?refer=embed">♬ sonido original - yeni_arriaran</a> </section> </blockquote>`,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Detrás de cada terapeuta comprometido suele haber una historia profunda de transformación personal. A diario vemos a la especialista <strong>Yeni Arriarán</strong> ayudando a decenas de pacientes en su consulta de Torremolinos (Málaga) a aliviar dolores crónicos y recuperar su equilibrio; pero, ¿qué fue exactamente lo que la inspiró a dedicarse a las terapias holísticas? En este íntimo y revelador video, Yeni nos abre su corazón para contarnos su propio viaje de sanación.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">De una vida corporativa a un diagnóstico difícil</h4>
        <p>Antes de dedicarse a la medicina tradicional china, Yeni llevaba una vida completamente diferente trabajando como directora. Fue en esa etapa de alto ritmo profesional cuando su cuerpo le dio una señal de alarma definitiva: le diagnosticaron un <strong>adenoma hipofisario inoperable</strong>.</p>
        <p>A partir de ese momento, comenzó a experimentar síntomas muy debilitantes que afectaban profundamente su calidad de vida:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Dolores constantes y difusos.</li>
          <li>Un sueño y cansancio excesivos que la dejaban sin energía.</li>
          <li>Una sensación generalizada de malestar intenso.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">La frustración del "todo está bien"</h4>
        <p>Como cualquier paciente, Yeni acudió a innumerables revisiones médicas, sometiéndose a pruebas una tras otra. Sin embargo, se encontró con una de las experiencias más frustrantes y solitarias que puede vivir una persona enferma: los médicos le aseguraban una y otra vez que <strong>"todo estaba bien"</strong>, a pesar de que ella sentía claramente que su cuerpo no funcionaba como debía.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">El encuentro con la acupuntura y el inicio de una misión</h4>
        <p>Cansada de no obtener respuestas y buscando desesperadamente recuperar su bienestar, Yeni decidió explorar caminos alternativos. Fue así como descubrió el poder de las terapias complementarias y la <strong>acupuntura</strong>, un enfoque que por fin escuchó a su organismo, le devolvió la salud y transformó el rumbo de su vida profesional para siempre.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">¿Sientes que algo anda mal aunque las pruebas digan lo contrario?</h4>
        <p>El testimonio de Yeni nos deja una reflexión vital: nuestro cuerpo tiene su propia sabiduría. Si alguna vez te han dicho que "todo está bien" pero dentro de ti sientes que algo no marcha como debería, no ignores esas señales. Te invitamos a darle al <em>play</em> para conocer su inspiradora historia de primera mano y a unirte a esta comunidad donde cada síntoma es verdaderamente escuchado.</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">Si te sientes identificado con esta historia y buscas un espacio donde tu malestar sea tratado desde la raíz, te esperamos en el Centro de Terapias Naturales de Yeni Arriarán, ubicado en la Plaza Andalucía 4 (Centro Comercial España, Local 81), en Torremolinos (Málaga). Puedes comunicarte o agendar tu cita llamando o escribiendo al teléfono <strong>+34 624 253 470</strong>.</p>
      </div>
    )
  }
];

// ─── ENGLISH BLOG POSTS ──────────────────────────────────────────────

export const blogPostsEn = [
  {
    id: 1,
    title: 'What is your first holistic therapy consultation like?',
    date: 'Part 1 - Paula',
    category: 'Experience',
    image: IMAGES.blogs[0],
    embedHtml: blogPosts[0].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Taking the first step toward holistic wellness can sometimes raise doubts. What exactly happens when you walk through the door of a natural therapies center? What is the experience like? In this short but revealing video, we invite you to accompany a patient on her first visit to the practice of <strong>Yeni Arriarán</strong>, specialist in acupuncture and holistic therapies located in Torremolinos, Málaga.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The value of being truly heard</h4>
        <p>The first thing that stands out in the video is the atmosphere of calm and welcome. Unlike traditional consultations where the clock always seems to be ticking, the philosophy of this space is very different and liberating: <em className="text-accent-gold">"Here you come to let go, not to explain in a hurry"</em>.</p>
        <p>The video shows us that the first big step toward healing is establishing a trusting connection. Before any needle or treatment, the priority is <strong>active and empathetic listening</strong>.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Connecting the symptoms</h4>
        <p>During the consultation, we see how the patient shares her daily discomforts:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Constant feeling of bloating.</li>
          <li>Very heavy digestion.</li>
          <li>Persistent pain in the pit of the stomach.</li>
        </ul>
        <p>Faced with this, the therapist's message is clear and reassuring: <em className="text-accent-gold">"Everything you feel... matters"</em>. In holistic medicine, no symptom is isolated; all are key pieces to understanding the general state of the body and mind.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The beginning of the diagnosis</h4>
        <p>Finally, the clip gives us a small glimpse of the evaluation techniques, beginning with the traditional <strong>pulse diagnosis</strong>. This is an ancient and fundamental tool in acupuncture for reading how energy is flowing and which organs need to restore their balance.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Ready to take the step?</h4>
        <p>If you have ever wondered what a session like this feels like, this video will give you a close, professional, and very human perspective. We invite you to hit <em>play</em> to see this healing process up close.</p>
      </div>
    )
  },
  {
    id: 2,
    title: 'Your body holds the answers: Diagnosis in holistic therapy',
    date: 'Part 2 - Paula',
    category: 'Diagnosis',
    image: IMAGES.blogs[1],
    embedHtml: blogPosts[1].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>If you joined us in the first part of this series, you already know that the first step in specialist <strong>Yeni Arriarán</strong>'s practice is active listening. But what happens once we have shared our discomforts? In this second video, we dive into the evaluation phase, discovering a fascinating truth: our body speaks and holds answers that sometimes even we did not know about.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The silent language of your body</h4>
        <p>The video shows how the therapist goes beyond Paula's words. Through traditional and ancient techniques such as <strong>tongue and pulse reading</strong>, Yeni begins to decipher the patient's internal state. As the video reminds us: <em className="text-accent-gold">"The tongue, the pulse, the points of tension... everything speaks"</em>. For holistic medicine, these tools are the perfect map to understand how our energy flows.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Deciphering messages, not enemies</h4>
        <p>One of the most powerful messages of this session is changing our perspective on pain: <em className="text-accent-gold">"Every symptom is a message, not an enemy"</em>. During the evaluation, Yeni and Paula connect the puzzle pieces:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Digestion that still feels slow.</li>
          <li>Excess internal heat causing night waking.</li>
          <li>Deep sensitivity and tension in the lower lumbar area and sacrum (in the area of vertebrae L5 and S1).</li>
        </ul>
        <p>What in traditional medicine might seem like isolated problems (insomnia, digestion, and back pain) are here observed, listened to, and connected to find the true root of the imbalance.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">From diagnosis to action</h4>
        <p>The key moment arrives when all the signals fit together. With a phrase full of empathy and confidence, Yeni tells the patient: <em className="text-accent-gold">"And now that I know what you need... I start helping you"</em>. It is the moment to leave words behind and begin the real healing work.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Ready to discover what your body says?</h4>
        <p>We invite you to hit <em>play</em> to see up close how this personalized evaluation is performed.</p>
      </div>
    )
  },
  {
    id: 3,
    title: 'Treating abdominal inflammation: The power of a single needle',
    date: 'Part 3 - Paula',
    category: 'Treatment',
    image: IMAGES.blogs[2],
    embedHtml: blogPosts[2].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>If you have followed this series from the beginning, you already know the importance of active listening and body diagnosis in specialist Yeni Arriarán's practice. Now, in this third installment, we move to the most anticipated phase: the treatment on the table. Join Paula to discover how digestive inflammation is addressed effectively and surprisingly.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The map of pain through palpation</h4>
        <p>The video begins with Yeni performing a detailed check through abdominal palpation. The goal is clear: to locate the exact points of tension. Through gentle pressure, both manage to identify that the sharpest pain is concentrated in the upper abdomen, confirming the symptoms of heaviness and bloating that Paula mentioned upon arrival.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Surprising results in seconds</h4>
        <p>This is where we witness the fascinating aspect of acupuncture and holistic therapies. Instead of treating the painful stomach area directly, Yeni places a single needle on Paula's calf. Upon palpating the abdomen again almost immediately, the body's response is incredible: the pain decreases significantly and the patient confirms feeling <em className="text-accent-gold">"much better"</em>. This demonstrates how our body's channels are interconnected in amazing ways.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The "cleansing" points for total relief</h4>
        <p>To eliminate the last bit of discomfort remaining in the belly, the therapist resorts to a final adjustment: she stimulates a specific point on the foot. Once again, relief is instantaneous and tension disappears completely. She then places a needle on that foot point, acting as a "cleanser" to consolidate balance in the body.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">A quick and effective methodology</h4>
        <p>At the end of the clip, Yeni summarizes the effectiveness of this methodology:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Check and palpation of the abdomen to find the physical root.</li>
          <li>Use of a single main needle to remove the largest percentage of pain.</li>
          <li>Application of "cleansing" points (such as those on the foot) to finish the process.</li>
        </ul>
        <p>The most surprising part? It is a deep treatment that, in this phase, takes only about 10 minutes to provide real relief.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Discover relief for yourself</h4>
        <p>If you suffer from digestive inflammation or chronic pain, this video will show you that a natural, quick, and respectful alternative for your body is possible. Hit <em>play</em> to see this fascinating healing process with your own eyes!</p>
      </div>
    )
  },
  {
    id: 4,
    title: 'Paula\'s testimony: "Like magic?" The results of holistic therapy',
    date: 'Part 4 - Paula',
    category: 'Testimonial',
    image: IMAGES.blogs[3],
    embedHtml: blogPosts[3].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>After having walked the path of active listening, body diagnosis, and acupuncture treatment at <strong>Yeni Arriarán</strong>'s practice, the most important moment arrives: hearing how the patient feels after her first session. In this final video of the series, Paula shares her real experience and the feelings this wellness alternative has left her with.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The starting point: Why come to the consultation?</h4>
        <p>To understand the value of the result, it is essential to remember the state Paula was in when she arrived. In her own words, she came because she suffered from two very persistent discomforts affecting her quality of life:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Strong and bothersome inflammation in the pit of the stomach.</li>
          <li>Persistent pain in the lower back and sacrum.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Immediate relief: "It seems like Yeni does magic"</h4>
        <p>When asked if she noticed improvement after the session, Paula's response is immediate and accompanied by a big smile of relief: <em className="text-accent-gold">"Honestly, it seems like Yeni does magic"</em>. This testimony reflects how stimulating the right body points through acupuncture can release tension and reduce pain almost instantly, restoring lightness to the body in a single visit.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">A conscious process toward 100% wellbeing</h4>
        <p>Despite the rapid improvement, one of the most valuable lessons Paula takes from the consultation is understanding how holistic healing truly works. As she explains, Yeni has shown her that restoring balance <strong>is a process</strong>.</p>
        <p>Immediate relief is the first big step, but consistency and follow-up sessions are the key to deep healing. Paula says goodbye motivated and very happy, with the certainty and peace of mind that, by following her treatment, she will reach <em className="text-accent-gold">"100% wellbeing"</em>.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">When will you start your process?</h4>
        <p>Paula's journey shows us that we do not have to resign ourselves to living with inflammation or chronic pain. Your body also has the ability to restore its natural balance if you give it the right tools. We invite you to hit <em>play</em> to hear her full testimony.</p>

        <hr className="border-text-main/10 my-8" />

        <p className="text-sm italic">If you wish to start your own journey toward wellbeing in the Málaga area, you can find Yeni Arriarán's Natural Therapies Center at Plaza Andalucía 4 (Centro Comercial España, No. 81), in Torremolinos.</p>
      </div>
    )
  },
  {
    id: 5,
    title: 'Why choose acupuncture? Paula\'s healing story',
    date: 'Part 5 - Paula',
    category: 'Testimonial',
    image: IMAGES.blogs[4],
    embedHtml: blogPosts[4].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>In the previous videos, we saw how an acupuncture session unfolds at <strong>Yeni Arriarán</strong>'s practice and the immediate relief it can provide for physical tension and digestive issues. However, in this special installment, Paula opens her heart to tell us <strong>the real underlying reason</strong> that led her to seek holistic therapies: a hard battle against endometriosis.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">A difficult diagnosis and a discouraging prognosis</h4>
        <p>Paula's story began 6 years ago, shortly after her first pregnancy, when she was diagnosed with <strong>endometriosis</strong>. The message she received from conventional medicine was extremely inflexible:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>She was told it was a chronic disease that would inevitably accompany her until menopause.</li>
          <li>They said she would not be able to have more children.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The path toward Traditional Chinese Medicine</h4>
        <p>Driven by desperation and a deep desire to regain her quality of life, Paula decided to seek other options. Although she had never tried it before, she decided to trust <strong>Traditional Chinese Medicine</strong>, combining acupuncture treatment with the use of medicinal herbs.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">A result that surprises even doctors</h4>
        <p>The outcome of her testimony is as moving as it is inspiring. Today, Paula shares with immense joy and peace of mind that:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>She has been able to <strong>completely stop taking pills</strong> for endometriosis.</li>
          <li>She has been <strong>given definitive discharge</strong> from the maternal-infant unit of her hospital.</li>
        </ul>
        <p>In her own words, even her specialist doctor cannot explain how the disease has completely disappeared from her body.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">A door open to hope</h4>
        <p>This powerful testimony reminds us that holistic therapies not only help alleviate everyday ailments but can work at a very deep and transformative level on conditions considered chronic, helping the body restore its natural balance. We invite you to hit <em>play</em> to hear this inspiring story of overcoming from its very protagonist.</p>

        <hr className="border-text-main/10 my-8" />

        <p className="text-sm italic">If you are going through a similar situation or are looking for an integrative and respectful medical approach for your wellbeing in Málaga, Yeni Arriarán's Natural Therapies Center is located at Plaza Andalucía 4 (Centro Comercial España, No. 81), in Torremolinos.</p>
      </div>
    )
  },
  {
    id: 6,
    title: 'From level 10 pain to level 2 in just 30 minutes: Roscoe\'s experience',
    date: 'Part 6 - Roscoe',
    category: 'Testimonial',
    image: IMAGES.blogs[5],
    embedHtml: blogPosts[5].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>When we suffer from severe neck or back pain, even the simplest daily tasks can become a titanic effort. We often think that such acute pain will require months of treatment or heavy medication to begin subsiding. However, in this video we share the case of <strong>Roscoe</strong>, a patient who came to the practice seeking relief and got a pleasant surprise in just one session.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The starting point: Pain at maximum level</h4>
        <p>During the video, Roscoe shares how he felt before lying on the table. He had been dealing with strong tension and persistent pain in his back and, especially, in his neck. When asked about the intensity of that discomfort on a scale of 1 to 10, his initial response was clear: the pain was at a <strong>level 10</strong>.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The power of 30 minutes of holistic therapy</h4>
        <p>The truly impactful part of this testimony is the speed and effectiveness of the acupuncture treatment. With just <strong>30 minutes</strong> of session, Roscoe's relaxed face says it all. When evaluating his progress at the end of the therapy, he tells us his pain dropped dramatically to <strong>level 2 or 3</strong>.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">"Very effective": Relief that transcends borders</h4>
        <p>Roscoe's words of gratitude reflect the impact of receiving an accurate and respectful treatment: <em className="text-accent-gold">"I feel really good... it's been very effective. You've helped me so much today"</em>. His case is an excellent example of how traditional medicine and precise stimulation of energy points can deactivate contractures and acute pain naturally and without invasive methods.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Dealing with neck or back pain?</h4>
        <p>If you also feel that cervical or lumbar pain is limiting your routine and you are at a "level 10," your body is asking for a pause and a root solution. Hit <em>play</em> to hear Roscoe's full testimony and see how acupuncture can restore your wellbeing in record time.</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">Remember you can find our acupuncture and holistic therapies center at Plaza Andalucía 4 (Centro Comercial España, No. 81), in Torremolinos (Málaga).</p>
      </div>
    )
  },
  {
    id: 7,
    title: 'Period pain "like childbirth"? How integrative acupuncture can change your cycle',
    date: 'Part 7 - Anita',
    category: 'Testimonial',
    image: IMAGES.blogs[6],
    embedHtml: blogPosts[6].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>For many women, the arrival of menstruation — and even ovulation days — is synonymous with incapacitating suffering. Spending the day in bed, relying on heating pads and high doses of painkillers like naproxen becomes an exhausting routine. In this video we accompany Anita (@anita_madre_emprendedora), who tired of living with pain she herself describes as <em className="text-accent-gold">"childbirth level"</em>, decided to seek a definitive solution at <strong>Yeni Arriarán</strong>'s holistic therapies center in Torremolinos, Málaga.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">From desperation to trust</h4>
        <p>One of the biggest fears when approaching acupuncture is the fear of needles. Anita confesses she was very apprehensive about the <em className="text-accent-gold">"poking thing"</em>, but Yeni's warmth and empathetic treatment dispelled any fear from the very first moment. It all begins with a thorough assessment where not only the local pain is discussed, but also rest, energy levels, and the general state of the body to create a personalized plan.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The power of combining techniques in one session</h4>
        <p>What makes Yeni's methodology truly special is that it is not limited to a single tool. Depending on the patient's real needs, various ancient and modern techniques can be integrated in one session:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li><strong>Scalp Acupuncture:</strong> Strategic points on the head to relax the nervous system and relieve migraines or tension headaches.</li>
          <li><strong>Auriculotherapy:</strong> Stimulation of reflex points on the ear using specialized devices.</li>
          <li><strong>Moxibustion:</strong> Application of therapeutic heat (with the traditional mugwort box) on the abdomen or extremities to mobilize energy and calm the uterus.</li>
          <li><strong>Neoclassical Acupuncture and abdominal palpation:</strong> An immediate abdominal check to find energetic imbalances and verify in real time how pain decreases when placing a distal needle.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Results felt instantly: 90% less pain</h4>
        <p>During the session, the change was astonishing: after abdominal palpation and application of the correct needle, the sharp abdominal pain was reduced by almost <strong>90%</strong>. But the benefit was not only physical; Anita, who considers herself a naturally restless person, ended up falling deeply asleep on the table, leaving in a state of absolute relaxation without the typical lumbar burden of those days.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">An accessible investment in your wellbeing</h4>
        <p>In addition to effectiveness, the testimony highlights the transparency and accessibility of the treatment: a first complete assessment and treatment session for €70, and follow-up sessions for €50. A natural alternative that seeks to get to the root of the problem so you can leave behind the monthly dependence on strong medication.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Ready to live your cycle in peace?</h4>
        <p>If you also suffer from intense pain during ovulation or with your period, your body is asking for a different approach. Hit <em>play</em> to see the complete process of this integrative session and discover how you can regain your quality of life.</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">If you are in the province of Málaga and want to start your treatment, you can visit Yeni Arriarán's Natural Therapies Center at Plaza Andalucía 4 (Centro Comercial España, Local 81), in Torremolinos.</p>
      </div>
    )
  },
  {
    id: 8,
    title: 'Accelerating post-surgical recovery: Lucia\'s radical change with acupuncture',
    date: 'Part 8 - Lucia',
    category: 'Testimonial',
    image: IMAGES.blogs[7],
    embedHtml: blogPosts[7].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Undergoing maxillofacial surgery is a complex process that does not end in the operating room. The postoperative period is usually accompanied by severe inflammation, discomfort, and extensive bruising that can take weeks to disappear naturally. However, Traditional Chinese Medicine offers very powerful resources to accelerate this process. In this video we show the case of <strong>Lucía</strong>, who after her operation decided to complement her recovery at <strong>Yeni Arriarán</strong>'s center in Torremolinos, Málaga.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The visible impact of maxillofacial surgery</h4>
        <p>At the beginning of the clip we can see Lucía's starting point: very pronounced inflammation in the jaw and cheek area (which she herself colloquially describes as <em className="text-accent-gold">"I had an egg on my face"</em>), accompanied by a bruise that covered a large part of her face. This type of inflammation is not only aesthetically uncomfortable but also generates painful tension in the muscular and joint tissues of the face.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Surprising results in just two sessions</h4>
        <p>The truly impactful part of this testimony is the speed of recovery. After receiving only <strong>two acupuncture sessions</strong>, Lucía's face looks completely transformed. Smiling at the camera, we can appreciate how:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>The general facial inflammation has drastically decreased, restoring natural definition to her face.</li>
          <li>The extensive dark bruise has reduced to a small, faint yellowish mark on the lower jaw area.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">"Wonderful": A painless recovery at an accelerated pace</h4>
        <p>When asked about her experience with the treatment, Lucía's response is direct and full of relief: <em className="text-accent-gold">"Wonderful"</em>. Post-surgical acupuncture works by stimulating key points that activate blood circulation and lymphatic drainage. This allows the body to reabsorb fluids and bruises much faster, reducing pain and shortening recovery times naturally and respectfully.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Going through surgery or in postoperative recovery?</h4>
        <p>If you or a loved one are facing a surgical intervention (dental, maxillofacial, or aesthetic) and want inflammation and pain to disappear much faster, acupuncture is an exceptional clinical ally. Hit <em>play</em> to see the incredible change in Lucía's face with your own eyes.</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">If you are looking to accelerate your recovery in the province of Málaga, Yeni Arriarán's Natural Therapies Center is located at Plaza Andalucía 4 (Centro Comercial España, Local 81), in Torremolinos.</p>
      </div>
    )
  },
  {
    id: 9,
    title: 'Goodbye to knee pain: From level 6 to 0 in just 30 minutes',
    date: 'Part 9 - Alfonso',
    category: 'Testimonial',
    image: IMAGES.blogs[8],
    embedHtml: blogPosts[8].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Knee pain is one of the most limiting joint discomforts; it can hinder everyday actions like walking, climbing stairs, or simply bending your legs to sit down. We often assume that this type of wear and tear or inflammation will take weeks to improve. However, in this new video we present the case of <strong>Alfonso</strong>, who came to <strong>Yeni Arriarán</strong>'s practice in Torremolinos (Málaga) and experienced total relief in a single session.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The starting point: Limiting joint pain</h4>
        <p>At the beginning of the video we see Alfonso lying on the table explaining the reason for his visit: a bothersome pain in his left knee. When evaluating the intensity of this ailment on a scale of 1 to 10 before starting, Alfonso confirms he arrived with a <strong>level 6 of pain</strong>, discomfort strong enough to interfere with his daily wellbeing.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The effectiveness of 30 minutes of holistic treatment</h4>
        <p>Through precise stimulation of energy channels using acupuncture and holistic therapies, it is possible to reduce inflammation in the joint, relax surrounding muscles, and restore energy flow to the affected area without resorting to invasive methods or medication.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The result: A smile of total relief (Level 0)</h4>
        <p>The most impactful part of this testimony occurs after only <strong>30 minutes of treatment</strong>. When Yeni asks about his pain level at that moment, Alfonso's broad smile of satisfaction says absolutely everything: <strong>the pain has been reduced to level 0</strong>. The discomfort disappeared completely, restoring mobility and lightness to his leg in record time.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Does joint pain slow down your daily life?</h4>
        <p>Alfonso's case shows us that our body has an incredible capacity for response and healing when the right techniques are applied. If you also suffer from knee, back, or any other joint pain, you do not have to resign yourself to living with discomfort. Hit <em>play</em> to see the relief on Alfonso's face and discover everything holistic medicine can do for you!</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">If you want to book your appointment and start enjoying the health and mobility you deserve, we are waiting for you at Yeni Arriarán's Natural Therapies Center, located at Plaza Andalucía 4 (Centro Comercial España, Local 81), in Torremolinos (Málaga).</p>
      </div>
    )
  }
];

export const conoceMasPostsEn = [
  {
    id: 10,
    title: 'What you need to know before your first session',
    date: 'Myths vs. Realities of Acupuncture',
    category: 'Myths',
    image: IMAGES.blogs[9],
    embedHtml: conoceMasPosts[0].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Around holistic therapies and acupuncture, there are many beliefs that can create doubts or false expectations when we decide to take the step toward natural wellbeing. In this video, specialist <strong>Yeni Arriarán</strong>, from her center in Torremolinos (Málaga), helps us debunk the 3 most common myths to truly understand how this healing process works.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Myth 1: Healing depends 100% on the therapist</h4>
        <p>One of the most frequent mistakes is thinking that when attending a consultation, the therapist has the absolute responsibility to cure us through a technique.</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li><strong>The Reality:</strong> The success of holistic therapy is teamwork: <strong>50% therapist and 50% patient</strong>. The specialist brings knowledge, technique, and guidance, but the patient must actively commit to their process, adopt healthy habits, and consciously contribute to their own comprehensive healing.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Myth 2: One session will make all health problems disappear</h4>
        <p>It is often expected that a single appointment is enough to resolve ailments that have been affecting the body for months or even years.</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li><strong>The Reality:</strong> Each body is a world and each clinical case is completely unique. Recovery time depends on key factors such as the <strong>patient's age, how long they have had the problem, the chronicity of the disease</strong>, and their lifestyle. Like any deep therapy, it requires its own time and a personalized process.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Myth 3: Acupuncture needles hurt a lot</h4>
        <p>The fear of pain is the main barrier preventing many people from trying this ancient technique, associating acupuncture needles with traditional medical injections.</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li><strong>The Reality:</strong> It is completely incorrect to compare an acupuncture needle to an injection or blood draw needle. The needles used in this therapy are <strong>ultra-fine and extremely flexible</strong>. While you may perceive a slight sensation or micro-pinch in the initial second of insertion, the immediate subsequent effect is deep relaxation and notable overall pain relief.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Clear your doubts and take control of your health</h4>
        <p>Knowing the reality behind these myths allows us to approach natural therapies with greater confidence, realism, and tranquility. Hit <em>play</em> to hear Yeni Arriarán's detailed explanation and discover how a conscious approach can transform your wellbeing.</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">If you are in the province of Málaga and wish to start a personalized and professional holistic treatment, we are waiting for you at Yeni Arriarán's Natural Therapies Center, located at Plaza Andalucía 4 (Centro Comercial España, Local 81), in Torremolinos.</p>
      </div>
    )
  },
  {
    id: 11,
    title: 'How I came to the world of acupuncture',
    date: 'The origin of my vocation',
    category: 'Story',
    image: IMAGES.blogs[10],
    embedHtml: conoceMasPosts[1].embedHtml,
    content: (
      <div className="space-y-6 text-text-muted/80 text-sm md:text-base leading-relaxed pb-12">
        <p>Behind every committed therapist, there is usually a deep story of personal transformation. We see specialist <strong>Yeni Arriarán</strong> helping dozens of patients in her Torremolinos (Málaga) practice relieve chronic pain and restore balance; but what exactly inspired her to dedicate herself to holistic therapies? In this intimate and revealing video, Yeni opens her heart to tell us her own healing journey.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">From a corporate life to a difficult diagnosis</h4>
        <p>Before dedicating herself to Traditional Chinese Medicine, Yeni led a completely different life working as a director. It was in this period of high professional rhythm that her body gave her a definitive alarm signal: she was diagnosed with an <strong>inoperable pituitary adenoma</strong>.</p>
        <p>From that moment, she began to experience very debilitating symptoms that profoundly affected her quality of life:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-accent-gold">
          <li>Constant and diffuse pain.</li>
          <li>Excessive sleep and fatigue that left her without energy.</li>
          <li>A generalized feeling of intense discomfort.</li>
        </ul>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The frustration of "everything is fine"</h4>
        <p>Like any patient, Yeni went to countless medical check-ups, undergoing test after test. However, she encountered one of the most frustrating and lonely experiences a sick person can face: doctors assured her time and again that <strong>"everything was fine"</strong>, even though she clearly felt her body was not functioning as it should.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">The encounter with acupuncture and the start of a mission</h4>
        <p>Tired of not getting answers and desperately seeking to regain her wellbeing, Yeni decided to explore alternative paths. That is how she discovered the power of complementary therapies and <strong>acupuncture</strong>, an approach that finally listened to her body, restored her health, and transformed the course of her professional life forever.</p>

        <h4 className="font-serif text-2xl lg:text-3xl text-text-main mt-10 mb-4">Do you feel something is wrong even though tests say otherwise?</h4>
        <p>Yeni's testimony leaves us with a vital reflection: our body has its own wisdom. If someone has ever told you that "everything is fine" but inside you feel something is not right, do not ignore those signals. We invite you to hit <em>play</em> to hear her inspiring first-hand story and join this community where every symptom is truly heard.</p>

        <hr className="border-text-main/10 my-8" />
        <p className="text-sm italic">If you identify with this story and are looking for a space where your discomfort is treated from the root, we are waiting for you at Yeni Arriarán's Natural Therapies Center, located at Plaza Andalucía 4 (Centro Comercial España, Local 81), in Torremolinos (Málaga).</p>
      </div>
    )
  }
];

export function getBlogPosts(): typeof blogPosts {
  if (typeof window !== 'undefined' && localStorage.getItem('medico_lang') === 'en') {
    return blogPostsEn;
  }
  return blogPosts;
}

export function getConoceMasPosts(): typeof conoceMasPosts {
  if (typeof window !== 'undefined' && localStorage.getItem('medico_lang') === 'en') {
    return conoceMasPostsEn;
  }
  return conoceMasPosts;
}
