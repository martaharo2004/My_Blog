/* Archivo con datos del navbar.
    export: Permite exportar.
    const navItems: Lista de objetos con los datos del navbar.
        id: ID único del componente.
        label: Texto mostrado en el componente.
*/

import { projectGroups } from './projectGroups.js'

const projectSection = (id, label, groupId) => {
    const group = projectGroups.find(group => group.id === groupId)
    return {
        id,
        label,
        projectGroupId: groupId,
        sections: group.projects
            .filter(project => !project.hidden)
            .map(project => ({ id: String(project.id), label: project.title })),
    }
}

export const navItems = [
    {
        id: 1,
        label: 'Inicio',
        sections: [
            { id: 'presentacion', label: 'Presentación' },
            { id: 'destacados', label: 'Proyectos destacados' },
            { id: 'contacto', label: 'Contacto' },
        ]
    },
    projectSection(4, 'Diseño UI/UX', 'diseno-ui-ux'),
    projectSection(5, 'Desarrollo web y móvil', 'desarrollo-diseno-web'),
    projectSection(6, 'Videojuegos', 'videojuegos'),
    projectSection(8, 'Animación 3D', 'animacion-3d'),
    projectSection(9, 'Animación de personajes', 'animacion-personajes'),
    { 
        id: 3, 
        label: 'Lenguajes de programación',
        hidden: true,
        sections: [
            { id: '1', label: 'C' },
            { id: '2', label: 'C#' },
            { id: '3', label: 'C++' },
            { id: '4', label: 'CSS' },
            { id: '5', label: 'HTML' },
            { id: '6', label: 'Java' },
            { id: '7', label: 'JavaScript' },
            { id: '8', label: 'Matlab' },
            { id: '9', label: 'PHP' },
            { id: '10', label: 'Python' },
            { id: '11', label: 'VHDL' },
        ]
    }
]
