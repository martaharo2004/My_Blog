/*
  Componente que guarda el footer de la página web.

  export: Permite utilizar el componente en otros archivos.
  Footer: Componente del footer.
*/

// Importamos el archivo de estilos
import './Footer.css'

import { navItems } from '../../data/navItems.js'

// Importamos las imágenes
import profileImg from '../../assets/profile.jpg'

export const Footer = ({onSelect}) => {
    return (
        <footer className="footer">
            <div className = "footer-top">
                <div className="footer-top-left">
                    <div className="footer-profile">
                        <img src={profileImg} alt="Profile" className="profile-img"/>
                        <h2 className="footer-title">Glauja_code</h2>
                    </div>

                    <p className="footer-description">Blog personal sobre programación, diseño UI/UX, diseño web/móvil y diseño de videojuegos.</p>
               
                    <div className="social-links">
                       {/* LinkedIn */}
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
                    </div>
                </div>

                <div className="footer-top-right">
                    <div className="footer-list">
                        <h3 className="footer-list-title">Navegación</h3>
                            <ul className="footer-nav">
                                {navItems.map((item) => (
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
                            <li>contacto@myblog.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <hr></hr>

            <div className="footer-bottom">
                <p>&copy; 2026 Glauja_code Blog. All rights reserved.</p>
            </div>
        </footer>
    )
}
 
 
 