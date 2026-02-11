import { Service, PriceItem } from '../types';
import { IMAGES } from '../constants/images';

export const servicesList: Service[] = [
  {
    id: 1,
    title: 'Acupuntura',
    description: 'Técnica milenaria china que implica la inserción de agujas finas en puntos específicos del cuerpo para aliviar el dolor y tratar diversas condiciones físicas y emocionales.',
    image: IMAGES.services.acupuntura
  },
  {
    id: 2,
    title: 'Auriculoterapia',
    description: 'Método de tratamiento en el cual se estimula la superficie externa de la oreja, o aurícula, para aliviar condiciones patológicas en otras partes del cuerpo.',
    image: IMAGES.services.auriculoterapia
  },
  {
    id: 3,
    title: 'Fitoterapia',
    description: 'Uso de productos de origen vegetal con finalidad terapéutica, ya sea para prevenir, para atenuar o para curar un estado patológico.',
    image: IMAGES.services.fitoterapia
  },
  {
    id: 4,
    title: 'Ventosas (Cupping)',
    description: 'Terapia antigua en la que se colocan copas especiales en la piel durante unos minutos para crear succión, facilitando el flujo sanguíneo y la relajación.',
    image: IMAGES.services.ventosas
  },
  {
    id: 5,
    title: 'Masaje Tuina',
    description: 'Rama de la medicina china tradicional que utiliza el masaje, la acupresión y otras formas de manipulación corporal.',
    image: IMAGES.services.tuina
  },
  {
    id: 6,
    title: 'Moxibustión',
    description: 'Terapia que consiste en quemar artemisa seca (moxa) en puntos particulares del cuerpo.',
    image: IMAGES.services.moxibustion
  }
];

export const pricesList: PriceItem[] = [
  { name: 'Consulta Inicial', duration: '60 min', price: 'S/. 100' },
  { name: 'Sesión de Acupuntura', duration: '45 min', price: 'S/. 80' },
  { name: 'Masaje Terapéutico', duration: '50 min', price: 'S/. 90' },
];
