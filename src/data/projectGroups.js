import { projectItems } from './projectItems.js'

const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

const dateOrder = project => {
  const date = (project.date ?? '').toLowerCase().trim()
  const year = Number(date.match(/\d{4}/)?.[0] ?? 0)
  const month = months.indexOf(date.split(/\s+/)[0]) + 1
  return year * 100 + month
}

const groups = [
  { id: 'desarrollo-diseno-web', title: 'Desarrollo web y móvil', projectIds: [1, 2, 3] },
  { id: 'diseno-ui-ux', title: 'Diseño UI/UX', projectIds: [5, 6] },
  { id: 'videojuegos', title: 'Videojuegos', projectIds: [4, 18, 19, 20, 21] },
  { id: 'animacion-3d', title: 'Animación 3D', projectIds: [7, 8, 9, 10, 11, 12] },
  { id: 'animacion-personajes', title: 'Animación de personajes', projectIds: [14, 13, 17, 16, 15] },
]

export const projectGroups = groups.map(group => ({
  ...group,
  projects: group.projectIds
    .map(id => projectItems.find(project => project.id === id))
    .sort((a, b) => dateOrder(b) - dateOrder(a)),
}))

export const projectIndex = projectGroups.flatMap(group => [
  { id: group.id, label: group.title, isGroup: true },
  ...group.projects.map(project => ({ id: String(project.id), label: project.title, isProject: true })),
])
