/*
    Componente que guarda una lista de componentes que componen la lista de navegación.

    export: Permite utilizar el componente en otros archivos.
    NavBar: Componente de la barra de navegación.

    onSelect: Función que detectará el componente seleccionado.
*/

// Importamos el archivo de estilos
import './NavBar.css'
// Importamos los componentes que van dentro
import { NavBarItem } from './navBarItems.jsx'
// Importamos datos que van dentro de los componentes
import { navItems } from '../../data/navItems.js'

export const NavBar = ({onSelect, selectedId}) => {
    return (
        <nav className="navBar">
            {/* Recorremos la lista de componentes y los mostramos en la barra de navegación */}
            <div className="nav-list">
                {navItems.filter(item => !item.hidden).map((item) => (
                    <NavBarItem 
                        key={item.id}                   // ID único del componente
                        label={item.label}              // Texto del componente
                        onClick={() => onSelect(item)}  // Detector del click
                        active={item.id === selectedId}
                    />
                ))}
            </div>
        </nav>
    )
}
