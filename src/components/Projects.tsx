import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectCase from './ProjectCase'
import { useI18n } from '../i18n'

export default function Projects() {
  const { t } = useI18n()
  const featured = projects.find((project) => project.featured) ?? projects[0]
  const others = projects.filter((project) => project !== featured)

  return (
    <section className="section" id="projetos">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">{t.projects.eyebrow}</span>
          <h2>{t.projects.title}</h2>
          <p>{t.projects.intro}</p>
        </header>

        <ProjectCase project={featured} />

        {others.length > 0 && (
          <div className="projects__grid">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
