import type { Project } from '../data/projects'
import { useI18n } from '../i18n'

export default function ProjectCard({ project }: { project: Project }) {
  const { t, lang } = useI18n()

  return (
    <a className="project" href={`#/projetos/${project.slug}`}>
      <span className="project__tag">{project.tag[lang]}</span>
      <h3>{project.title[lang]}</h3>
      <p>{project.summary[lang]}</p>
      <span className="project__more">{t.projects.viewCase}</span>
    </a>
  )
}
