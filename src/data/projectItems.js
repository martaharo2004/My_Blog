import LSxpressLogo from '../assets/LSxpress.png'
import EventPlannerLogo from '../assets/EventPlanner.png'

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
    authors: [
      { initials: "MH", name: "Marta Haro" },
      { initials: "MG", name: "Marta García" },
    ],
  },
  {
    id: 2,
    title: "Festivities Calendar",
    subtitle: "Práctica · Proyectos Web II",
    date: "2026",
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
    authors: [
      { initials: "MH", name: "Marta Haro" },
    ],
  },
  {
    id: 3,
    title: "Shop Manager",
    subtitle: "Práctica · Proyectos Web III",
    date: "2026",
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
    authors: [
      { initials: "MH", name: "Marta Haro" },
    ],
  },
];