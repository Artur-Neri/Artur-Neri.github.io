import type { Project } from '../data/projects'

export default function ProjectCase({ project }: { project: Project }) {
  return (
    <article className="case">
      <div className="case__head">
        <span className="project__tag">{project.tag}</span>
        <h3>{project.title}</h3>
      </div>

      <div className="case__body">
        <div className="case__col">
          <span className="case__label">O problema</span>
          <p>{project.problem}</p>
        </div>
        <div className="case__col">
          <span className="case__label">O que construí</span>
          <p>{project.solution}</p>
        </div>
        <div className="case__col">
          <span className="case__label">Resultado</span>
          <p className="case__result">{project.result}</p>
        </div>
      </div>

      <div className="case__foot">
        <div className="project__tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        {project.url && (
          <a
            className="btn btn--ghost"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver site ao vivo
          </a>
        )}
      </div>
    </article>
  )
}
