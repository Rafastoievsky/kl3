/****************************************  NAVEGACION  ****************************************/

import { cartel, ciclo, contrato, remate, casa01, casa02, casa03,remates, 
  remate_selected, venta_terceros, venta_terceros_selected, cancelacion_hipo,
   cancelacion_hipo_selected, flipping, flipping_selected, tramites, tramites_selected, 
   compra, compra_selected,testimonio01, testimonio02,comedor, cuarto, cuartoDos, sala,
   sanitario, sanitarioDos, cancelacionServ, comprasServ, flippingServ, rematesServ, 
   tramitesServ, ventaServ,
  
  
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
    descripcion:`Proin ut arcu sit amet odio ultrices scelerisque a non purus. Pellentesque habitant morbi 
    tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus pellentesque est, a 
    iaculis est tempor ac. Sed id felis porttitor, tempus nunc sed, congue odio. Quisque sed dignissim 
    tellus. Ut sapien est, pellentesque ut lorem vel, ultricies tempor turpis. Praesent pellentesque 
    commodo enim commodo vulputate`,
    portada: casa01,
    pictures:[comedor, sanitario, sanitarioDos, cuarto, cuartoDos, sala],
    colonia: "Col. Modelo",
    direccion: "Rio Yaqui #159",
    size: "300",
    habitaciones: "3",
    wc:"1.5",
    costo: 1500000,
    servicio:"Flipping Inmobiliario"
  },
  {
    id: 2,
    descripcion:`Proin ut arcu sit amet odio ultrices scelerisque a non purus. Pellentesque habitant morbi 
    tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus pellentesque est, a 
    iaculis est tempor ac. Sed id felis porttitor, tempus nunc sed, congue odio. Quisque sed dignissim 
    tellus. Ut sapien est, pellentesque ut lorem vel, ultricies tempor turpis. Praesent pellentesque 
    commodo enim commodo vulputate`,
    portada: casa02,
    pictures:[comedor, sanitario, sanitarioDos, cuarto, cuartoDos, sala],
    colonia: "Col. Pitic",
    direccion: "De la Pitic #159, esq. La calle Dos",
    size: "300",
    habitaciones: "3",
    wc:"1.5",
    costo: 1500000,
    servicio:"Remates Bancarios"
  },
  {
    id: 3,
    descripcion:`Proin ut arcu sit amet odio ultrices scelerisque a non purus. Pellentesque habitant morbi 
    tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus pellentesque est, a 
    iaculis est tempor ac. Sed id felis porttitor, tempus nunc sed, congue odio. Quisque sed dignissim 
    tellus. Ut sapien est, pellentesque ut lorem vel, ultricies tempor turpis. Praesent pellentesque 
    commodo enim commodo vulputate`,
    portada: casa03,
    pictures:[comedor, sanitario, sanitarioDos, cuarto, cuartoDos, sala],
    colonia: "Fracc. La Rioja",
    direccion: "Rio Rioja #200, entre Calle Uno y Calle Dos",
    size: "300",
    habitaciones: "3",
    wc:"1",
    costo: 1500000,
    servicio:"Venta con Crédito"
  },
  {
    id: 4,
    descripcion:`Proin ut arcu sit amet odio ultrices scelerisque a non purus. Pellentesque habitant morbi 
    tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus pellentesque est, a 
    iaculis est tempor ac. Sed id felis porttitor, tempus nunc sed, congue odio. Quisque sed dignissim 
    tellus. Ut sapien est, pellentesque ut lorem vel, ultricies tempor turpis. Praesent pellentesque 
    commodo enim commodo vulputate`,
    portada: casa03,
    pictures:[comedor, sanitario, sanitarioDos, cuarto, cuartoDos, sala],
    colonia: "Col. Insurgentes",
    direccion: "Rio Yaqui 159",
    size: "300",
    habitaciones: "3",
    wc:"2.5",
    costo: 1500000,
    servicio:"Traspaso"
  },
]


export const servicesNavList = [
  {
    id: 1,
    title: "Remate Bancario",
    icon:remates,
    selectedIcon:remate_selected,
    picture: rematesServ,
    subtitle:`Oportunidades de inversión en propiedades en remate.`,
    descripcion:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet`
  },
  {
    id: 2,
    title: "Venta a Terceros",
    icon:venta_terceros,
    selectedIcon:venta_terceros_selected,
    picture: rematesServ,
    subtitle:`Oportunidades de inversión en propiedades en remate.`,
    descripcion:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet`
  },
  {
    id: 3,
    title: "Cancelación de Hipoteca",
    icon:cancelacion_hipo,
    selectedIcon:cancelacion_hipo_selected,
    picture: cancelacionServ,
    subtitle:`Oportunidades de inversión en propiedades en remate.`,
    descripcion:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet`
  },
  {
    id: 4,
    title: "Flipping Inmobiliario",
    icon:flipping,
    selectedIcon:flipping_selected,
    picture: flippingServ,
    subtitle:`Oportunidades de inversión en propiedades en remate.`,
    descripcion:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet`
  },
  {
    id: 5,
    title: "Trámites Inmobiliarios",
    icon:tramites,
    selectedIcon:tramites_selected,
    picture: tramitesServ,
    subtitle:`Oportunidades de inversión en propiedades en remate.`,
    descripcion:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet`
  },
  {
    id: 6,
    title: "Compra de Viviendas",
    icon:compra,
    selectedIcon:compra_selected,
    picture: comprasServ,
    subtitle:`Oportunidades de inversión en propiedades en remate.`,
    descripcion:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet`
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