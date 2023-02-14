import banner_comida_saludable from '../imagenes/banner_comida_saludable.jpeg'
import foto_perfil from "../imagenes/foto-perfil.jpg";
export const USER_PERMISSIONS = {
  isAdmin: true,
}

export const cursesData = [
  {
    id: 1,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    descripcion_creador:"Nutricionista dietista, por más de 10 años fue presentadora y realizadora de de programas de nutrición y gastronomía, le apasiona ser fuente de bienestar.",
    descripcion_curso:"Existe evidencia sólida que demuestra que comer una alimentación balanceada y saludable puede reducir el riesgo de obesidad y  enfermedades tales como diabetes, cardiopatía, accidentescerebro-vasculares, osteoporosis y algunos tipos de cáncer.   El programa de nutrición consciente esta diseñado para mostarte elcamino hacia una alimentación adecuada, suficiente, variada,equilibrada y enriquecida con alimentos nutritivos. Aprende dela mano de Maria Isabel Valderrama, nutricionista dietista, laimportancia de una alimentación saludable. 'Aliméntate bien y vive mejor'.",
    requerimientos:"No hay un requerimiento especial, sin embargo sugerimos acompañar el programa de nutrición consciente con los programas de actividad física.",
    foto_perfil : foto_perfil,
    calificacion: 3,
    img: banner_comida_saludable,
    beneficios:[
      {
        beneficio:"Aprenderás de manera divertida y práctica que es la nutrición y cuales son alimentos que realmente aportan valor a tu alimentación."
      },
      {
        beneficio:"Descubrirás recetas fáciles y prácticas para una merienda, almuerzo o cena deliciosa y rica en nutrientes."
      },
      {
        beneficio:"Aprenderás a leer etiquetas nutricionales, a conocer los aditivos y tóxicos que esconden las etiquetas y los componentes que debes evitar."
      },
      {
        beneficio:"Conocerás cuales son los nutrientes esenciales que tu cuerpo necesita para estar en equilibrio y balance."
      },
      {
        beneficio:"Aprenderás a conocer tu composición corporal y entenderás que todos tenemos un cuerpo diferente."
      },
      {
        beneficio:"Tendrás claro los conceptos claves para empezar a crear una alimentación balanceada y empezar a prevenir afecciones y enfermedades futuras para ti y tu familia."
      }
    ],
    modulos:[
        {
          módulo:1,
          nombre_modulo:"Alimentación consciente",
          video:"https://player.vimeo.com/progressive_redirect/playback/697590375/rendition/1080p/file.mp4?loc=external&signature=b2dfcce3fa0229f1a03011666046b5a1ea4791c659180084a49d8c4bb89fa2dd",
          temario_modulo:
          { 
            1:"Bienvenido a la nutrición consciente",
            2:"¿Qué es nutrición consciente?",
            3:"¿Sabes como se procesa un alimento en tu cuerpo?",
            4:"¿Realmente somos solo lo que comemos?",
          },
        },
        {
          módulo:2,
          nombre_modulo:"Aprende a elegir tus alimetnos - parte 1",
          video:"https://player.vimeo.com/progressive_redirect/playback/697590375/rendition/1080p/file.mp4?loc=external&signature=b2dfcce3fa0229f1a03011666046b5a1ea4791c659180084a49d8c4bb89fa2dd",
          temario_modulo:
          { 
            1:"¿Como seleccionar facilmente los alimentos?",
            2:"Conoce los nutrientes que aportan los alimentos.",
            3:"Hablemos de carbohidratos.",
            4:"Receta - aprende a preparar una deliciosa arepa casera de maíz peto con quinua.",
            5:"Hablemos de proteinas.",
            6:"Receta - aprende a preparar un delicioso pollo al curry y tofu al curry en leche de coco.",
            7:"Hablemos de las grasas.",
            8:"Receta - aprende a preparar mayonesa casera y mantequilla clarificada - ghee",
          },
        },
        {
          módulo:3,
          nombre_modulo:"Aprende a elegir tus alimetnos - parte 1",
          video:"https://player.vimeo.com/progressive_redirect/playback/697590375/rendition/1080p/file.mp4?loc=external&signature=b2dfcce3fa0229f1a03011666046b5a1ea4791c659180084a49d8c4bb89fa2dd",
          temario_modulo:
          { 
            1:"Hablemos de vitaminas.",
            2:"Hablemos de minerales.",
            3:"Hablemos de fitonutrientes.",
            4:"Receta - aprende a preparar una deliciosa ensalada.",
            5:"Receta - aprende a preparar deliciosas aguas saborizadas.",
          },
        },
      ]
  },
  {
    id: 2,
    nombre: "Activate con Zumba",
    creado: "Veruska Barreto",
    calificacion: 4,
  },
  {
    id: 3,
    nombre: "Cocina Conciente",
    creado: "Lohan Sandoval",
    calificacion: 0,
  },
  {
    id: 4,
    nombre: "Cambios de hábitos",
    creado: "Lina Maria Silva Rojas",
    calificacion: 0,
  },
  {
    id: 5,
    nombre: "Meditacion para principiantes",
    creado: "Lohan Sandoval",
    calificacion: 0,
  },
  {
    id: 7,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 0,
  },
  {
    id: 8,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 1,
  },
  {
    id: 9,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 1,
  },
  {
    id: 10,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 1,
  },
];


export const data = [
  { name: "ENE", colaboradores: 4000, cursos: 2400 },
  { name: "MAR", colaboradores: 2000, cursos: 2800 },
  { name: "FEB", colaboradores: 3000, cursos: 1398 },
  { name: "ABR", colaboradores: 2780, cursos: 2908 },
  { name: "MAY", colaboradores: 3890, cursos: 2800 },
  { name: "JUN", colaboradores: 2390, cursos: 1300 },
  { name: "JUL", colaboradores: 3490, cursos: 1300 },
  { name: "AGO", colaboradores: 3290, cursos: 2700 },
  { name: "SEP", colaboradores: 3490, cursos: 2300 },
  { name: "OCT", colaboradores: 3490, cursos: 1800 },
  { name: "NOV", colaboradores: 2490, cursos: 2300 },
  { name: "DIC", colaboradores: 5490, cursos: 2300 },
];

export const dataActiveUsers = [
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
export const dataActiveUsersLast = [
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
export const dataUserResgitrados = ["200"];

export const userData = [
  {
    id: 1,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
  {
    id: 2,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
  {
    id: 3,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
  {
    id: 4,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
  {
    id: 5,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
  {
    id: 6,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
];