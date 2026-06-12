/* Archivo con datos del navbar.
    export: Permite exportar.
    const navItems: Lista de objetos con los datos del navbar.
        id: ID único del componente.
        label: Texto mostrado en el componente.
*/

export const navItems = [
    { 
        id: 1, 
        label: 'Inicio',
        sections: []
    },
    { 
        id: 2, 
        label: 'Proyectos',
        sections: [
            { id: 'proj-1', label: 'Event Planner' },
            { id: 'proj-2', label: 'Festivities Calendar' },
            { id: 'proj-3', label: 'Shop Manager' },
        ]
    },
    { 
        id: 3, 
        label: 'Lenguajes de programación',
        sections: []
    },
    { 
        id: 4, 
        label: 'Diseño UI y UX',
        sections: [] 
    },
    { 
        id: 5, 
        label: 'Diseño web y móvil',
        sections: [] 
    },
    { 
        id: 6, 
        label: 'Diseño de videojuegos',
        sections: [] 
    }
]