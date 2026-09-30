import { getProject, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectCase from './ProjectCase'
import { useI18n } from '../i18n'

export default function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useI18n()
  const project = getProject(slug)

  if (!project) {
    return (
      <section className="section" id="projetos">
        <div className="container">
          <h2>{t.projects.notFound}</h2>
          <p className="projects__note">{t.projects.notFoundText}</p>
          <a className="btn btn--ghost" href="#projetos">
            {t.projects.back}
          </a>
        </div>
      </section>
    )
  }

  const others = projects.filter((p) => p.slug !== slug)

  return (
    <section className="section" id="projetos">
      <div className="container">
        <a className="back-link" href="#projetos">
          {t.projects.back}
        </a>

        <ProjectCase project={project} />

        {others.length > 0 && (
          <>
            <h3 className="projects__more-title">{t.projects.others}</h3>
            <div className="projects__grid">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
