import { getProject, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectCase from './ProjectCase'

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = getProject(slug)

  if (!project) {
    return (
      <section className="section" id="projetos">
        <div className="container">
          <h2>Projeto não encontrado</h2>
          <p className="projects__note">O link pode estar quebrado ou o projeto saiu do ar.</p>
          <a className="btn btn--ghost" href="#projetos">
            Voltar aos projetos
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
          ← Voltar aos projetos
        </a>

        <ProjectCase project={project} />

        {others.length > 0 && (
          <>
            <h3 className="projects__more-title">Outros projetos</h3>
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
