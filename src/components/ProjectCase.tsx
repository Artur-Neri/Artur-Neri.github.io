import type { Project } from '../data/projects'
import { useI18n } from '../i18n'

export default function ProjectCase({ project }: { project: Project }) {
  const { t, lang } = useI18n()

  return (
    <article className="case">
      <div className="case__head">
        <span className="project__tag">{project.tag[lang]}</span>
        <h3>{project.title[lang]}</h3>
      </div>

      <div className="case__body">
        <div className="case__col">
          <span className="case__label">{t.projects.problem}</span>
          <p>{project.problem[lang]}</p>
        </div>
        <div className="case__col">
          <span className="case__label">{t.projects.solution}</span>
          <p>{project.solution[lang]}</p>
        </div>
        <div className="case__col">
          <span className="case__label">{t.projects.result}</span>
          <p className="case__result">{project.result[lang]}</p>
        </div>
      </div>

      <div className="case__foot">
        <div className="project__tags">
          {project.tags[lang].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {project.url && (
          <a
            className="btn btn--ghost"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.projects.live}
          </a>
        )}
      </div>
    </article>
  )
}
