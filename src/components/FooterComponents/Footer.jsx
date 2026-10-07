/*
  Componente que guarda el footer de la página web.

  export: Permite utilizar el componente en otros archivos.
  Footer: Componente del footer.
*/

// Importamos el archivo de estilos
import './Footer.css'

import { navItems } from '../../data/navItems.js'

// Importamos las imágenes
import profileImg from '../../assets/mh-def.png'

export const Footer = ({onSelect}) => {
    return (
        <footer className="footer">
            <div className = "footer-top">
                <div className="footer-top-left">
                    <div className="footer-profile">
                        <img src={profileImg} alt="Profile" className="profile-img"/>
                        <h2 className="footer-title">Marta Haro · Portfolio</h2>
                    </div>

                    <p className="footer-description">Portfolio de Marta Haro: proyectos de diseño UI/UX, desarrollo front-end, diseño de videojuegos y animación 3D.</p>
               
                    <div className="social-links">
                        <a href="https://github.com/martaharo2004" target="_blank" rel="noopener noreferrer" aria-label="Perfil de GitHub de Marta Haro" title="GitHub">
                            <i className="ti ti-brand-github social-icon" style={{ fontSize: '1.5rem', width: '1em', height: '1em', lineHeight: 1 }} aria-hidden="true"></i>
                        </a>
                        <a href="https://www.youtube.com/@Glauja" target="_blank" rel="noopener noreferrer" aria-label="Canal de YouTube de Glauja" title="YouTube">
                            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M23 7a4 4 0 0 0-3-3c-3-.4-13-.4-16 0a4 4 0 0 0-3 3 30 30 0 0 0 0 10 4 4 0 0 0 3 3c3 .4 13 .4 16 0a4 4 0 0 0 3-3 30 30 0 0 0 0-10ZM10 16V8l7 4-7 4Z" />
                            </svg>
                        </a>
                       {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/marta-haro-antonio-70197b24b/" target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn">
                        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect x="2" y="9" width="4" height="12"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                            <circle cx="12" cy="12" r="4"/>
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                        </svg>
                        </a>
                        <a href="https://glauja.itch.io" target="_blank" rel="noopener noreferrer" aria-label="itch.io" title="itch.io">
                            <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M6 7h12a3 3 0 0 1 3 3l1 7a2 2 0 0 1-3 2l-4-3H9l-4 3a2 2 0 0 1-3-2l1-7a3 3 0 0 1 3-3Z" />
                                <path d="M7 10v5m-2.5-2.5h5" /><circle cx="16" cy="11" r=".5" /><circle cx="18" cy="14" r=".5" />
                            </svg>
                        </a>
                        <a href="https://sketchfab.com/glauja" target="_blank" rel="noopener noreferrer" aria-label="Perfil de Sketchfab" title="Sketchfab">
                            <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="m12 2 9 5v10l-9 5-9-5V7Z M3 7l9 5 9-5 M12 12v10" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-top-right">
                    <div className="footer-list">
                        <h3 className="footer-list-title">Navegación</h3>
                            <ul className="footer-nav">
                                {navItems.filter(item => !item.hidden).map((item) => (
                                    <li key={item.id}>
                                        <a href="#" onClick={(e) => {
                                            e.preventDefault()
                                            onSelect(item)
                                            window.scrollTo({ top: 0, behavior: 'smooth' })  // 👈
                                        }}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                    </div>

                    <div className="footer-list">
                        <h3 className="footer-list-title">Contacto</h3>
                        <ul className="footer-contact">
                            <li>Email:</li>
                            <li><a href="mailto:martaharo2004@gmail.com">martaharo2004@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <hr></hr>

            <div className="footer-bottom">
                <p>&copy; 2026 Marta Haro · Portfolio. All rights reserved.</p>
            </div>
        </footer>
    )
}
 
 
 
