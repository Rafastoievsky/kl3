/****************************************  NAVEGACION  ****************************************/

import { cartel, ciclo, contrato, remate, casa01, casa02, casa03,remates, 
  remate_selected, venta_terceros, venta_terceros_selected, cancelacion_hipo,
   cancelacion_hipo_selected, flipping, flipping_selected, tramites, tramites_selected, 
   compra, compra_selected,testimonio01, testimonio02 
  
  
} from "../assets";


export const navLinks = [
  {
    id: "/",
    title: "Inicio",
  },
  {
    id: "/nosotros",
    title: "Quienes Somos",
  },
  {
    id: "/servicios",
    title: "Servicios",
  },
  {
    id: "/#testimonios",
    title: "Testimonios",
  },
  {
    id: "/blog",
    title: "Blog",
  },
];
export const footerLinks = [
  {
    id: "/privacidad",
    title: "Aviso de Privacidad",
  },
  {
    id: "/quejas",
    title: "Quejas y Sugerencias",
  },
  {
    id: "/derechos",
    title: "Todos los Derechos Reservados",
  },
  {
    id: "/antidiscriminacion",
    title: "Política de Antidiscriminación",
  },
  {
    id: "/terminos",
    title: "Términos y Condiciones",
  },
];

export const numbersCardsData = [
  {
    id: 1,
    icon: cartel,
    iconPosition: "start",
    title: "Casas vendidas con Infonavit",
    number: "+568",
  },
  {
    id: 2,
    icon: contrato,
    iconPosition: "end",
    title: "Trámites Completados",
    number: "+150",
  },
  {
    id: 3,
    icon: remate,
    iconPosition: "start",
    title: "Remates Bancarios",
    number: "+120",
  },
  {
    id: 4,
    icon: ciclo,
    iconPosition: "end",
    title: "Traspasos Exitosos",
    number: "+100",
  },
];

export const propiedadesList = [
  {
    id: 1,
    picture: casa01,
    colonia: "Col. Modelo",
    direccion: "Rio Yaqui #159",
    size: "300 m",
    habitaciones: "3 habitaciones",
    costo: "$1,500,000",
  },
  {
    id: 2,
    picture: casa02,
    colonia: "Col. Pitic",
    direccion: "De la Pitic #159, esq. La calle Dos",
    size: "300 m",
    habitaciones: "3 habitaciones",
    costo: "$1,500,000",
  },
  {
    id: 3,
    picture: casa03,
    colonia: "Fracc. La Rioja",
    direccion: "Rio Rioja #200, entre Calle Uno y Calle Dos",
    size: "300 m",
    habitaciones: "3 habitaciones",
    costo: "$1,500,000",
  },
  {
    id: 4,
    picture: casa03,
    colonia: "Col. Insurgentes",
    direccion: "Rio Yaqui 159",
    size: "300 m",
    habitaciones: "3 habitaciones",
    costo: "$1,500,000",
  },
]


export const servicesNavList = [
  {
    id: 1,
    title: "Remate Bancario",
    icon:remates,
    selectedIcon:remate_selected
  },
  {
    id: 2,
    title: "Venta a Terceros",
    icon:venta_terceros,
    selectedIcon:venta_terceros_selected
  },
  {
    id: 3,
    title: "Cancelación de Hipoteca",
    icon:cancelacion_hipo,
    selectedIcon:cancelacion_hipo_selected
  },
  {
    id: 4,
    title: "Flipping Inmobiliario",
    icon:flipping,
    selectedIcon:flipping_selected
  },
  {
    id: 5,
    title: "Trámites Inmobiliarios",
    icon:tramites,
    selectedIcon:tramites_selected
  },
  {
    id: 6,
    title: "Compra de Viviendas",
    icon:compra,
    selectedIcon:compra_selected
  }
]


export const tetimoniosList = [
  {
    id: 1,
    nombre: "Fulanito de Tal",
    edad: "30",
    servicio: "Flipping Inmobiliario",
    comentario:`Lorem ipsum dolor sit amet, consectetuer 
    adipiscing elit, sed diam nonummy nibh 
    euismod tincidunt ut laoreet dolore magna 
    aliquam erat volutpat`,
    picture:testimonio01
  },
  {
    id: 2,
    nombre: "Manganita de Tal",
    edad: "41",
    servicio: "Cancelación de Hipoteca",
    comentario:`Lorem ipsum dolor sit amet, consectetuer 
    adipiscing elit, sed diam nonummy nibh 
    euismod tincidunt ut laoreet dolore magna 
    aliquam erat volutpat`,
    picture:testimonio02
  },

]