import LSxpressLogo from '../assets/LSxpress.png'
import EventPlannerLogo from '../assets/EventPlanner.png'
import TotKCompanionLogo from '../assets/TotKCompanion.png'
import GuardiansLogo from '../assets/guardians-of-the-rose.png'
import { additionalProjectItems } from './additionalProjectItems.js'

export const projectItems = [
  {
    id: 1,
    title: "Event Planner",
    subtitle: "Práctica final · Proyectos Web I",
    date: "Enero 2025",
    emoji: "null",
    logo: EventPlannerLogo,
    tags: ["HTML", "CSS", "JavaScript", "Google Calendar API", "Gemini AI", "Email API"],
    description:
      "Aplicación web de gestión de eventos similar a Google Calendar, con vistas mensual, semanal y diaria. Integra IA conversacional entrenada como asistente personal y envío de notificaciones por correo. Diseño responsive orientado tanto a uso profesional como personal.",
    features: [
      { icon: "calendar-event", name: "Calendario", desc: "Vista mensual, semanal y diaria" },
      { icon: "message-chatbot", name: "Chat con IA", desc: "Asistente basado en Gemini" },
      { icon: "mail", name: "Email", desc: "Notificaciones automáticas" },
      { icon: "device-mobile", name: "Responsive", desc: "Adaptado a todos los dispositivos" },
    ],
    notice:
      "Proyecto de aprendizaje de 2025, no está en mantenimiento activo. Algunas funcionalidades pueden no estar operativas debido a cambios en las APIs externas desde su desarrollo.",
    videoUrl: "https://youtu.be/3AsO0MLbpzQ",
    githubUrl: "https://github.com/martaharo2004/Event-Planner---Event-calendar-Web-Page",
    itchUrl: null,
    figmaUrl: null,
    figmaEmbed: null,
    authors: [
      { initials: "MH", name: "Marta Haro" },
      { initials: "MG", name: "Marta García" },
    ],
  },
  {
    id: 2,
    title: "Festivities Calendar",
    subtitle: "Práctica · Proyectos Web II",
    date: "Febrero 2026",
    emoji: "📅",
    logo: null,
    tags: ["PHP", "MySQL", "Docker", "Composer", "Guzzle", "Calendarific API", "PDO"],
    description:
      "Aplicación web en PHP puro que muestra festividades nacionales de España por mes. Integra la API de Calendarific con caché en base de datos MySQL para minimizar llamadas externas. Incluye sistema de autenticación con registro, login y sesiones, desplegado en entorno local con Docker y Composer.",
    features: [
      { icon: "calendar-month", name: "Calendario", desc: "Vista mensual con festivos marcados" },
      { icon: "database", name: "Caché en BD", desc: "MySQL evita llamadas repetidas a la API" },
      { icon: "lock", name: "Autenticación", desc: "Registro, login y sesiones seguras" },
      { icon: "brand-docker", name: "Docker", desc: "Entorno local reproducible" },
    ],
    notice:
      "Proyecto de aprendizaje que requiere entorno local con Docker y MySQL. No está desplegado en producción. La API key de Calendarific puede haber caducado desde su desarrollo.",
    videoUrl: "https://youtu.be/gtQAiQ99Xzw",
    githubUrl: "https://github.com/martaharo2004/Calendar-Festivities-Web-Page",
    itchUrl: null,
    figmaUrl: null,
    figmaEmbed: null,
    authors: [
      { initials: "MH", name: "Marta Haro" },
    ],
  },
  {
    id: 3,
    title: "Shop Manager",
    subtitle: "Práctica · Proyectos Web III",
    date: "Marzo 2026",
    emoji: "null",
    logo: LSxpressLogo,
    tags: ["PHP", "CodeIgniter 4", "MySQL", "Docker", "MVC", "REST API", "PDO"],
    description:
      "Gestor de tienda online desarrollado con CodeIgniter 4. Incluye carrito de compra, gestión de productos, conexión a API externa y base de datos MySQL. Arquitectura MVC con rutas personalizadas, filtros de autenticación y validación mediante custom rules.",
    features: [
      { icon: "shopping-cart", name: "Carrito", desc: "Gestión de productos y pedidos" },
      { icon: "plug-connected", name: "API externa", desc: "Conexión y consumo de datos" },
      { icon: "database", name: "MySQL", desc: "Models y Query Builder" },
      { icon: "lock", name: "Autenticación", desc: "Sesiones y filtros de acceso" },
    ],
    ciFeatures: [
      { icon: "route", name: "Rutas personalizadas" },
      { icon: "filter", name: "Filtros HTTP" },
      { icon: "layout-sidebar", name: "Arquitectura MVC" },
      { icon: "table", name: "Models + Query Builder" },
      { icon: "checks", name: "Custom validation rules" },
      { icon: "layers-subtract", name: "Vistas con layouts" },
    ],
    notice:
      "Proyecto de aprendizaje que requiere entorno local con Docker. No está desplegado en producción.",
    videoUrl: "https://youtu.be/dnTsV9kZM4c",
    githubUrl: "https://github.com/martaharo2004/LSxpress---Shopping-Web-Page",
    itchUrl: null,
    figmaUrl: null,
    figmaEmbed: null,
    authors: [
      { initials: "MH", name: "Marta Haro" },
    ],
  },
  {
    id: 4,
    title: "Guardians of the Rose",
    relatedProject: {
      description: "Guardians of the Rose parte del concept art que creé en Bachillerato para mi trabajo de investigación «Concept Art. De la realitat al paper». Mi centro lo seleccionó como el mejor trabajo de investigación de ese año y lo presentó en la Mostra de Recerca Jove d’Horta-Guinardó de 2022. El videojuego lleva ese trabajo creativo a una experiencia interactiva en Unity.",
      label: "Ver referencia del trabajo de investigación · 2022",
      url: "https://serveiseducatius.xtec.cat/horta-guinardo/forumrecerca/mostra-de-recerca-jove-dhorta-guinardo-2022/",
    },
    subtitle: "Práctica Final · Programación de Videojuegos",
    date: "Octubre 2025",
    emoji: "🌹",
    logo: GuardiansLogo,
    tags: ["Unity", "C#", "Pixel Art", "Concept Art", "Tilemap", "2D"],
    description:
      "Videojuego 2D de aventura desarrollado en Unity. Narra el primer encuentro entre Fafnir y Jordi en un mundo de pixel art. Incluye tilemaps, animaciones en pixel art, interacciones con el entorno y menús. Jugable directamente en el navegador.",
    features: [
      { icon: "map", name: "Tilemap", desc: "Escenarios construidos con tiles" },
      { icon: "hand-click", name: "Interacciones", desc: "Sistema de interacción con el entorno" },
      { icon: "player-play", name: "Animaciones", desc: "Pixel art animado en Unity" },
      { icon: "layout-list", name: "Menús", desc: "Interfaz y navegación de juego" },
    ],
    notice: "Prototipo jugable en el navegador vía itch.io.",
    videoUrl: null,
    githubUrl: null,
    itchUrl: "https://glauja.itch.io/guardians-of-the-rose",
    figmaUrl: null,
    figmaEmbed: null,
    authors: [
      { initials: "MH", name: "Marta Haro" },
    ],
  },
  {
    id: 5,
    title: "The Legend of Zelda: Tears of the Kingdom Companion Móvil",
    subtitle: "Práctica Final · Diseño y Usabilidad II",
    date: "Mayo 2023",
    emoji: "null",
    logo: TotKCompanionLogo,
    tags: ["Figma", "UX/UI", "Prototipo interactivo", "Diseño de app móvil"],
    description:
      "Prototipo interactivo de aplicación móvil que hace la función de Companion del videojuego 'The Legend of Zelda: Tears of the Kingdom'. Desarrollado en Figma, incluye diseño de interfaz, experiencia de usuario y prototipado de interacciones.",
    features: [
      { icon: "device-mobile", name: "Diseño móvil", desc: "Interfaz optimizada para dispositivos móviles" },
      { icon: "layout-grid", name: "Prototipo interactivo", desc: "Simulación de navegación y acciones" },
      { icon: "palette", name: "Diseño visual", desc: "Estética y consistencia visual en la paleta, tipografía y componentes" },
      { icon: "users", name: "Diseño centrado en el usuario", desc: "Interfaz pensada para facilitar la navegación y el acceso rápido a la información" },
    ],
    notice: "Prototipo desarrollado en Figma, contiene mayor parte de las pantallas y funcionalidades de la app.",
    videoUrl: null,
    githubUrl: null,
    itchUrl: null,
    figmaUrl: "https://www.figma.com/proto/7IbJ6WfM19c8Lz7PmIxWts/Companion-TotK-Mobile?node-id=2-11037&p=f&t=fPn3LF6YWI2JdNq0-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/7IbJ6WfM19c8Lz7PmIxWts/Companion-TotK-Mobile?node-id=2-11037%26scaling=scale-down%26page-id=0%3A1",
    authors: [
      { initials: "MH", name: "Marta Haro" },
      { initials: "MG", name: "Marta García" },
      { initials: "JS", name: "Júlia Salom Colombás" },
    ],
  },
  {
    id: 6,
    title: "The Legend of Zelda: Tears of the Kingdom Companion Web",
    subtitle: "Práctica Final · Diseño y Usabilidad II",
    date: "Mayo 2023",
    emoji: "null",
    logo: TotKCompanionLogo,
    tags: ["Figma", "UX/UI", "Prototipo interactivo", "Diseño de aplicación web"],
    description:
      "Prototipo interactivo de aplicación de escritorio que actúa como Companion del videojuego 'The Legend of Zelda: Tears of the Kingdom'. Desarrollado en Figma, incluye diseño de interfaz, experiencia de usuario y prototipado de interacciones adaptadas a pantallas de escritorio.",
    features: [
      { icon: "device-desktop", name: "Diseño de escritorio", desc: "Interfaz optimizada para pantallas de ordenador" },
      { icon: "layout-grid", name: "Prototipo interactivo", desc: "Simulación de navegación, flujos e interacciones entre pantallas" },
      { icon: "palette", name: "Diseño visual", desc: "Estética consistente mediante una paleta, tipografía y componentes reutilizables" },
      { icon: "users", name: "Diseño centrado en el usuario", desc: "Interfaz diseñada para facilitar la navegación y el acceso rápido a la información" },
    ],
    notice: "Prototipo desarrollado en Figma que incluye la mayor parte de las pantallas y funcionalidades de la aplicación.",
    videoUrl: null,
    githubUrl: null,
    itchUrl: null,
    figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/DdK3TIBsblOgRYsyBZs92U/Untitled?node-id=1-439%26scaling=min-zoom%26content-scaling=fixed%26page-id=0%3A1%26starting-point-node-id=1%3A439",
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/DdK3TIBsblOgRYsyBZs92U/Untitled?node-id=1-439%26scaling=scale-down%26content-scaling=fixed%26page-id=0%3A1%26starting-point-node-id=1%3A439",    authors: [
      { initials: "MH", name: "Marta Haro" },
      { initials: "MG", name: "Marta García" },
      { initials: "JS", name: "Júlia Salom Colombás" },
    ],
},





  ...additionalProjectItems,
];
