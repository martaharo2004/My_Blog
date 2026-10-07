import { projectItems } from '../../data/projectItems.js'
import './InicioPage.css'
const featured = [
 { id: 5, group: 'diseno-ui-ux', title: 'TotK Companion', area: 'Diseño UI/UX', text: 'Diseño de una aplicación de consulta inspirada en Zelda.' },
 { id: 4, group: 'videojuegos', title: 'Guardians of the Rose', area: 'Diseño y desarrollo de videojuegos', text: 'Una aventura 2D en Unity con escenarios de pixel art, animaciones e interacciones. Jugable en el navegador.' },
 { id: 1, group: 'desarrollo-diseno-web', title: 'Event Planner', area: 'Desarrollo front-end', text: 'Una web para consultar y organizar eventos.' },
]
const linkedin = 'https://www.linkedin.com/in/marta-haro-antonio-70197b24b/'
export const InicioPage = ({ onOpenProject }) => (
 <div className="home-page">
  <section id="presentacion" className="home-intro">
   <p className="home-eyebrow">Marta Haro · Portfolio</p>
   <h1>Hola, soy Marta Haro</h1>
   <h2>Diseño interfaces, desarrollo experiencias web y creo mundos interactivos.</h2>
   <p>Soy estudiante de Ingeniería Multimedia y me interesa trabajar en diseño UI/UX, desarrollo front-end y diseño de videojuegos. En este portfolio comparto mis proyectos, el proceso de creación y mi aportación en cada uno.</p>
   <div className="home-actions"><a className="home-button" href="#destacados">Ver proyectos</a><a className="home-button secondary" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="home-button secondary" href="https://glauja.itch.io" target="_blank" rel="noopener noreferrer">itch.io ↗</a><a className="home-button secondary" href="https://sketchfab.com/glauja" target="_blank" rel="noopener noreferrer">Sketchfab ↗</a><a className="home-button secondary" href="#contacto">Contactar</a></div>
  </section>
  <section id="destacados"><h2>Proyectos destacados</h2><div className="home-projects">
   {featured.map(item => {
    const project = projectItems.find(project => project.id === item.id)
    const image = project.images?.[0]
    return <button key={item.id} className="home-project" onClick={() => onOpenProject(item.group, item.id)}>
     <div className={`home-project-image ${project.logo ? 'home-project-logo' : ''}`}>{project.logo || image?.src ? <img src={project.logo || image?.src} alt={image?.alt || item.title} loading="lazy" /> : <span className="home-project-symbol" aria-hidden="true">{project.emoji}</span>}</div>
     <div className="home-project-copy"><span className="home-eyebrow">{item.area}</span><h3>{item.title}</h3><p>{item.text}</p><span className="home-project-link">Ver proyecto →</span></div>
    </button>
   })}
  </div></section>
  <section id="contacto" className="home-contact"><h2>Hablemos</h2><p>Busco prácticas o trabajos junior en diseño UI/UX, desarrollo front-end y game design, donde aportar mis conocimientos y seguir creciendo profesionalmente.</p><div className="home-actions"><a className="home-button" href="mailto:martaharo2004@gmail.com">Escríbeme</a><a className="home-button secondary" href={linkedin} target="_blank" rel="noopener noreferrer">Conectar en LinkedIn ↗</a></div></section>
 </div>
)
