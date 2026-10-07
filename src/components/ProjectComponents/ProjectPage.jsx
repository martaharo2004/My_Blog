import './Project.css'

import { ProjectItems } from "./projectItems";


export const ProjectPage = ({ group, title }) => (
      <section className="proj-group" aria-labelledby={group.id}>
        <h2 className="proj-group-title" id={group.id}>{title}</h2>
        {group.projects.map(project => <ProjectItems key={project.id} {...project} />)}
      </section>
);
