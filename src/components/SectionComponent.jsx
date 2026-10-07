import { InicioPage } from './InicioComponents/InicioPage'
import { ProgPage } from './ProgComponents/ProgPage'
import { ProjectPage } from './ProjectComponents/ProjectPage'
import { projectGroups } from '../data/projectGroups.js'

export const SectionComponent = ({ selected, onOpenProject }) => {
    if (!selected) return <InicioPage onOpenProject={onOpenProject}/>

    if (selected.id === 1) return <InicioPage onOpenProject={onOpenProject} />
    if (selected.id === 3) return <ProgPage />
    const group = projectGroups.find(group => group.id === selected.projectGroupId)
    return group ? <ProjectPage key={group.id} group={group} title={selected.label} /> : <p>Sección no encontrada</p>
}
