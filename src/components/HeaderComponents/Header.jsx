/*
  Componente que guarda el header de la página web.

  export: Permite utilizar el componente en otros archivos.
  Header: Componente del header.
*/

// Importamos funciones de react
import { useState, useEffect } from 'react'

// Importamos el archivo de estilos
import './Header.css'

// Importamos imágenes
import profileImg from '../../assets/mh-def.png'

export const Header = () => {
    /*
      Método que pregunta al navegador si el sistema está en modo ocuro.

      dark: variable que guarda si la web está en modo oscuro o no.
        True -> Si está en dark
        False -> Si está en light

      setDark: Método que cambia el estado de la página de modo oscuro a claro y viceversa.
    */
    const [dark, setDark] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )

    /*
      Método que se activa cada vez que cambia el estado de dark.
        Dark = True -> cambiamos a modo oscuro
        Dark = False -> cambiamos a modo claro
    */
    useEffect(() => {
        if (dark) {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }
    }, [dark])

    /*
      Método que se activa al pulsar el botón de cambio de modo.
      Activa el cambio de dark que a su vez cambiará useEffect.
    */
    const toggleTheme = () => {
        setDark(!dark)
    }

  return (
    <header className="header">
      <div className="header-profile">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h1 className="blog-title">Marta Haro · Portfolio</h1>
      </div>
      
      <button className="theme-toggle" onClick={toggleTheme}>
        {dark ? /* Primera opción Sol y segunda Luna para el icono SVG*/ 
        (
          <svg viewBox="0 0 24 24" fill="currentColor" className="theme-icon">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="theme-icon">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>
    </header>
  )
}