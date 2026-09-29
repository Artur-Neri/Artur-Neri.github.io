import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project" href={`#/projetos/${project.slug}`}>
      <span className="project__tag">{project.tag}</span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <span className="project__more">Ver case →</span>
    </a>
  )
}
