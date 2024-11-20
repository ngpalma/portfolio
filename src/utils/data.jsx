import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import rym from "/App rick y morty captura.png";
import countries from "/Countries captura.png";
import toolverse from "/ToolVerse captura.png";
import splendid from "/Logo Splendid.jpg";
import lenceria1 from "/Lenceria1.png";
import lenceria2 from "/Lenceria2.png";
import lenceria3 from "/Lenceria3.png";
import lenceria4 from "/Lenceria4.png";
import lenceria5 from "/Lenceria5.png";
import lenceria6 from "/Lenceria6.png";
import lenceria7 from "/Lenceria7.png";
import imgTextilCatalogo from "/ImgTextilCatalogo.png";
import imgTextilAbout from "/ImgTextilAbout.png";
import imgTextilDestacado from "/ImgTextilDestacado.png";
import imgTextilDrawer from "/ImgTextilDrawer.png";
import imgTextilFooter from "/ImgTextilFooter.png";
import imgTextilForm from "/ImgTextilForm.png";
import imgTextilHome from "/ImgTextilHome.png";
import imgTextilSegmentos from "/ImgTextilSegmentos.png";
import barberShop from "/BarberShop.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import resume from "/Resume_NicolasPalma_DevFullStack_ES.pdf";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export const stackArray = [
  {
    name: "",
    icon: "",
  },
];

export const contactArray = [
  {
    title: "+54-9-341-2628575",
    icon: <WhatsAppIcon />,
    url: "https://api.whatsapp.com/send?phone=+5493412628575&text=Hola%20Nicolás,%20vengo%20de%20tu%20portfolio%20y%20me%20gustaría",
  },
  {
    title: "nicolasgerardopalma@gmail.com",
    icon: <AlternateEmailIcon />,
    url: "mailto:nicolasgerardopalma@gmail.com",
  },

  {
    title: "github.com/ngpalma",
    icon: <GitHubIcon />,
    url: "https://github.com/ngpalma",
  },

  {
    title: "/in/nicolas-gerardo-palma/",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/nicolas-gerardo-palma/",
  },
  {
    title: "Descargar CV",
    icon: <FileDownloadIcon />,
    url: resume,
  },
];

export const socialMedia = [
  {
    title: "GitHub",
    icon: <GitHubIcon />,
    link: "https://github.com/ngpalma",
  },
  {
    title: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/nicolas-gerardo-palma/",
  },
  {
    title: "X-Twitter",
    icon: <XIcon />,
    link: "https://twitter.com/NicoPalmaSI",
  },
  {
    title: "Instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/npalmaok/",
  },
];

export const projectsArray = [
  {
    images: [rym],
    video: "",
    title: "Rick & Morty",
    description:
      "Buscador de personajes de la famosa serie animada Rick & Morty. Al encontrar un personaje muestra su tarjeta con la imagen y descripción del mismo, permitiendo agregarlo a favoritos.",
    detail:
      "Este proyecto fue parte de mi aprendizaje como desarrollador web. A traves de los distintos módulos fui desarrollando cada etapa del mismo. Las tecnologías que utilicé son: Javascript, React-Redux, Node.js, Express.js, PostgreSQL-Sequelize, HTML5 y CSS3. Al mismo tiempo consumí la API de Rick & Morty para traer sus datos y guardarlos en la base de datos.",
    deploy: "",
    github: "",
  },
  {
    images: [countries],
    video: "",
    title: "Info Paises",
    description:
      "Página informativa sobre los distintos países, ver su bandera, cantidad de habitantes, superficie, etc. Se puede filtrar por continente y agregar actividades turisticas para realizar en una futura visita al mismo.",
    detail:
      "Como parte de un proyecto individual evaluatorio debí desarrollar una página web consumiendo datos de una API de países del mundo en la cual el usuario pudiera interactuar con los mismos y agregar sus actividades favoritas como turista. Utilicé tecnologías como: Javascript, Node y Express para el backend, React, Redux, HTML y CSS para el frontend y PostgreSQL con sequelize para la base de datos. En esta etapa mejoré mucho mi lógica de programación para el manejo de datos desde el backend y mi manejo de estilos CSS en el frontend, ademas de entender mucho mejor el manejo de estados con React y Redux.",
    deploy: "",
    github: "",
  },
  {
    images: [toolverse],
    video: "",
    title: "Tool Verse",
    description:
      "E-commerce de herramientas manuales y electricas para el hogar y la industria. Permite agregar al carrito y realizar una compra segura al estar registrado tanto de manera manual como a traves de Google.",
    detail:
      "Avanzando hacia la parte final de mi aprendizaje como desarrollador full stack enfocado en el PERN Stack, desarrollé junto a un equipo de estudiantes y compañeros un e-commerce de herramientas totalmente funcional con registro de usuarios, carrito de compras, stock de productos,  panel de administrador y de usuario, ordenes de compra, reviews de productos, pasarelas de pago como Mercado Pago y Paypal, persistencia de datos, etc. Aprendí a trabajar en equipo y a separar roles y tareas en Trello y a hacer pruebas con Postman. Mis tareas estuvieron enfocadas en parte en el backend para el armado de la estrutura de la base de datos y los modelos y la integración de Mercado Pago para las compras y en el frontend el dashboard del cliente y el deploy de la página utilizando Railway.",
    deploy: "",
    github: "",
  },
  {
    images: [
      imgTextilCatalogo,
      imgTextilAbout,
      imgTextilDestacado,
      imgTextilDrawer,
      imgTextilFooter,
      imgTextilForm,
      imgTextilHome,
      imgTextilSegmentos,
    ],
    video: "",
    title: "Img Textil S.R.L.",
    description:
      "Web corporativa de una empresa del rubro textil que incluye un catalogo completo con descripciones e imagenes de alta calidad. Sección de contacto. Filtros por segmento, modelo y género.",
    detail:
      "Ahora si, enfocado en un proyecto real me embarque en un desafío junto con otro desarrollador para llevar a cabo una página web con tecnologías como Angular y Angular-Material para el frontend, Node y PostgreSQL para el backend y la base de datos. Nos enfocamos en el SEO de la página y utlizamos un servidor con linux (Ubuntu) para el despliegue del backend y la base de datos. Y un web hosting para el frontend. Fue una experiencia de mucho aprendizaje y quedamos más que conformes con el resultado, quedando abierta la posibilidad de ir escalando la web para que tenga más y mejores caracteristicas.",
    deploy: "https://www.imgtextil.com.ar/home",
    github: "",
  },
  {
    images: [
      lenceria1,
      lenceria2,
      lenceria3,
      lenceria4,
      lenceria5,
      lenceria6,
      lenceria7,
    ],
    video: "",
    title: "Lencería Vale Wey",
    description:
      "Landing Page para una diseñadora y fabricante de lencería que desea mostrar sus creaciones, con imágenes en modo catálogo, redes sociales, sección de contacto y botón de WhastsApp",
    detail:
      "Hoy en día todos necesitan estar presentes en el mundo digital. Tener visibilidad para mejorar en sus proyectos personales, ofrecer servicios, abrirse al mundo. Es por eso que Valeria confió en mi para el desarrollo de su sitio personal con colores en tonos pastel para destacar la delicadeza y sofisticación de sus diseños.",
    deploy: "",
    github: "",
  },
  {
    images: [splendid],
    video: "",
    title: "spLENDid - Desarrollo",
    description:
      "Aplicación Web pensada para permitir a la comunidad vender o alquilar aquello que no usan y asi sacar un redito diario, semanal o mensual, sin tener que preocuparse por roturas o perdidas.",
    detail: "",
    deploy: "",
    github: "",
  },

  {
    images: [barberShop],
    video: "",
    title: "Barbería - Desarrollo",
    description:
      "Plataforma para peluquerías, barberías y estetica en general que permite registrarse a un usuario, seleccionar el servicio, reservar un turno y recibir una notificación de recordatorio del mismo.",
    detail: "",
    deploy: "",
    github: "",
  },
];

export const navLinksArray = [
  {
    title: "Inicio",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Sobre mi",
    path: "/about",
    icon: <InfoIcon />,
  },
  {
    title: "Servicios",
    path: "/services",
    icon: <MiscellaneousServicesIcon />,
  },
  {
    title: "Proyectos",
    path: "/projects",
    icon: <DeveloperBoardIcon />,
  },
  {
    title: "Contacto",
    path: "/contact",
    icon: <ContactPageIcon />,
  },
];

export const servicesArray = [
  {
    title: "Desarrollo Web Personalizado y Completo",
    description:
      "Como profesional en desarrollo web, estoy comprometido a brindar soluciones completas y adaptadas a medida para satisfacer las diversas necesidades de mis clientes. Desde pequeñas empresas hasta grandes corporaciones, mi enfoque se centra en crear experiencias digitales que cautiven a los usuarios y impulsen el crecimiento empresarial.",
  },
  {
    title: "Diseño y Desarrollo Front-end y Back-end",
    description:
      "Con experiencia sólida en tecnologías front-end y back-end, me especializo en la creación de sitios web visualmente impresionantes y altamente funcionales. Desde la estructura y la navegación hasta la interfaz de usuario y la integración de bases de datos, cada aspecto de tu sitio web recibirá la atención detallada que merece.",
  },
  {
    title: "Optimización para Móviles y SEO",
    description:
      "Entiendo la importancia de la accesibilidad y la visibilidad en línea. Por ello, todos los sitios web que desarrollo están completamente optimizados para dispositivos móviles y se implementan las mejores prácticas de SEO para mejorar su clasificación en los motores de búsqueda.",
  },
  {
    title: "E-commerce y Soluciones de Comercio Electrónico",
    description:
      "Si estás buscando expandir tu negocio en línea, puedo ayudarte a establecer una sólida presencia en el mercado digital con soluciones de comercio electrónico personalizadas. Desde la configuración de tiendas en línea hasta la integración de pasarelas de pago seguras, estoy aquí para hacer que tu negocio prospere en el mundo digital.",
  },
  {
    title: "Mantenimiento y Soporte Continuo",
    description:
      "Mi compromiso no termina con la entrega del proyecto. Ofrezco servicios de mantenimiento y soporte continuo para garantizar que tu sitio web siga funcionando de manera óptima y se mantenga actualizado con las últimas tendencias y tecnologías en desarrollo web.",
  },
  {
    title: "Consulta y Asesoramiento Personalizado",
    description:
      "Entiendo que cada proyecto es único y requiere un enfoque personalizado. Estoy aquí para escuchar tus necesidades, entender tus objetivos y ofrecerte la mejor solución posible que se adapte a tus requerimientos y presupuesto.",
  },
];
