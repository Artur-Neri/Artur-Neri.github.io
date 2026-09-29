import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectCase from './ProjectCase'

export default function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0]
  const others = projects.filter((project) => project !== featured)

  return (
    <section className="section" id="projetos">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">Projetos</span>
          <h2>Casos reais</h2>
          <p>Nada de mockup: são problemas reais, resolvidos e em uso.</p>
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
