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

  // Efecto para inicializar el script de Instagram y TikTok cuando se abre el modal
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
      
      // 1. Cargar Script de Instagram
      const loadInstagramScript = () => {
        if (!document.getElementById('instagram-embed-script')) {
          const script = document.createElement('script');
          script.id = 'instagram-embed-script';
          script.src = "//www.instagram.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        } else {
          // Si ya existe, le decimos a Instagram que procese los nuevos embeds
          if ((window as any).instgrm) {
            setTimeout(() => {
              (window as any).instgrm.Embeds.process();
            }, 100);
          }
        }
      };

      // 2. Cargar Script de TikTok
      const loadTikTokScript = () => {
        // En SPA's (React), TikTok requiere que eliminemos y volvamos a inyectar el script
        // para que detecte correctamente el nuevo video (blockquote) al abrir el modal.
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

      loadInstagramScript();
      loadTikTokScript();
      
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
              
              {/* Mitad Izquierda: Video de Instagram / TikTok */}
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