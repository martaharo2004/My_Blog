import { InicioPage } from './InicioComponents/InicioPage'
import { ProgPage } from './ProgComponents/ProgPage'
//import { DisenoUIUX } from './DisenoUIUX'
//import { DisenoWebMovil } from './DisenoWebMovil'
//import { DisenoVideojuegos } from './DisenoVideojuegos'
import { ProjectPage } from './ProjectComponents/ProjectPage'

const components = {
  1: <InicioPage />,
  2: <ProjectPage />,
  3: <ProgPage />,
  
  //3: <DisenoUIUX />,
  //4: <DisenoWebMovil />,
  //5: <DisenoVideojuegos />,
}

export const SectionComponent = ({ selected }) => {
    if (!selected) return <InicioPage/>

    return components[selected.id] ?? <p>Sección no encontrada</p>
}