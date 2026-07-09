import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import { X, User } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

// Estructura de los datos de los blogs
const blogPosts = [
  {
    id: 1,
    title: '¿Cómo es tu primera vez en una consulta de terapias holísticas?',
    date: 'Parte 1',
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
    date: 'Parte 2',
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
    date: 'Parte 3',
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
  }
];

const Blogs: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const { theme } = useTheme();

  // Inicializar animaciones GSAP
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

  // Efecto para inicializar el script de Instagram cuando se abre el modal
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
          // Si el script ya existe, le decimos a Instagram que procese los nuevos embeds
          if ((window as any).instgrm) {
            setTimeout(() => {
              (window as any).instgrm.Embeds.process();
            }, 100);
          }
        }
      };

      loadInstagramScript();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  return (
    <main className="bg-bg-base text-text-main min-h-screen w-full overflow-hidden pb-20 transition-colors duration-600">
      <SEO 
        title="Nuestras Historias" 
        description="Lee nuestras historias, testimonios y mira nuestros reels sobre salud, acupuntura y vida holística." 
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

          {/* Grilla de Blogs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="reveal-up cursor-pointer flex flex-col h-full group"
                onClick={() => setSelectedPost(post)}
                data-hoverable="true"
              >
                {/* Altura de 450px a 550px, sin bordes y sin esquinas curvas */}
                <div className="relative w-full h-[450px] lg:h-[550px] shrink-0 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Etiqueta de Categoría Flotante */}
                  <div className="absolute top-4 left-4 bg-bg-base/80 backdrop-blur-md text-accent-gold text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-accent-gold/30 z-10">
                    {post.category}
                  </div>
                </div>
                
                {/* Contenedor de Texto */}
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

      {/* Ventana Modal para mostrar el contenido */}
      {selectedPost && (
        <div className="fixed inset-0 z-[9980] flex items-center justify-center p-4 sm:p-6 pt-[80px] md:pt-[100px]">
          
          {/* Fondo oscuro clickeable (z-0 para que se quede por debajo del modal, pero por encima de la pagina) */}
          <div 
            className="absolute inset-0 bg-bg-base/90 backdrop-blur-md z-0"
            onClick={() => setSelectedPost(null)}
          ></div>
          
          {/* Contenedor Modal: Abarca el centro del espacio libre debajo del Navbar */}
          <div className="relative w-full max-w-6xl max-h-[85vh] glass-card z-10 bg-bg-base/90 overflow-y-auto" data-lenis-prevent="true">
            
            {/* Contenedor Sticky para el botón Cerrar (No rompe el Flexbox) */}
            <div className="sticky top-0 z-50 flex justify-end w-full" style={{ height: 0 }}>
              <button 
                onClick={() => setSelectedPost(null)} 
                className="absolute top-4 right-4 bg-bg-base/80 hover:bg-accent-gold text-text-main rounded-full p-2 shadow-lg transition-colors border border-text-main/20 backdrop-blur-sm"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Layout en 2 columnas: items-start para que el texto/video empiece desde arriba */}
            <div className="flex flex-col lg:flex-row w-full min-h-full">
              
              {/* Mitad Izquierda: Video de Instagram */}
              <div className="w-full lg:w-5/12 bg-bg-base/30 flex items-start justify-center p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-text-main/5 pt-12">
                <div 
                  className="w-full max-w-[350px] mx-auto"
                  dangerouslySetInnerHTML={{ __html: selectedPost.embedHtml }}
                />
              </div>

              {/* Mitad Derecha: Texto del Blog */}
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