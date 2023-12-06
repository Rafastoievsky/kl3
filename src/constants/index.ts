/****************************************  NAVEGACION  ****************************************/

import { cartel, ciclo, contrato, remate, casa01, casa02, casa03, casa04 } from "../assets";


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
    colonia: "Modelo",
    direccion: "Rio Yaqui 159",
    size: "300 m",
    habitaciones: "3 habitaciones",
    costo: "$1,500,000",
  },
  {
    id: 2,
    picture: casa02,
    colonia: "Modelo",
    direccion: "Rio Yaqui 159",
    size: "300 m",
    habitaciones: "3 habitaciones",
    costo: "$1,500,000",
  },
  {
    id: 3,
    picture: casa03,
    colonia: "Modelo",
    direccion: "Rio Yaqui 159",
    size: "300 m",
    habitaciones: "3 habitaciones",
    costo: "$1,500,000",
  },
  {
    id: 4,
    picture: casa04,
    colonia: "Modelo",
    direccion: "Rio Yaqui 159",
    size: "300 m",
    habitaciones: "3 habitaciones",
    costo: "$1,500,000",
  },
]
