import './Project.css'

import { ProjectItems } from "./projectItems";
import { projectItems } from '../../data/projectItems.js'


export const ProjectPage = () => (
  <section>
    {projectItems.map(project => (
      <ProjectItems key={project.id} {...project} />
    ))}
  </section>
);