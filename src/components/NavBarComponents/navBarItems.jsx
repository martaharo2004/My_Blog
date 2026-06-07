/*
    Componentes de la lista de navegación. Permiten crear una lista de componentes
    para utilizarlos en la barra de navegación.

    export: Permite utilizar el archivo en otros componentes.
    NavBarItem: Componentes de la barra de navegación.

    Props: Heredados del padre NavBar.jsx, recibiremos información del componente.
        - label Texto mostrado en el componente.
        - onClick: Función que se ejecuta al hacerle click al componente.
*/
export const NavBarItem = ({label, onClick}) => {
    return (
        <div className="nav-item" onClick={onClick}>
            {label} <span>❯</span>
        </div>
    ) 
}

export default NavBarItem