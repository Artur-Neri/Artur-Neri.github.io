const projects = [
  {
    tag: 'Automação · Azure DevOps',
    title: 'Emails de release sem copia e cola',
    problem:
      'O QA da empresa passava horas montando o e-mail de release à mão, copiando e colando informação das tasks de desenvolvimento no Azure DevOps.',
    solution:
      'Criei um serviço em que ele vincula a conta, seleciona as tasks que saíram na nova versão e, com um clique, o e-mail está montado. Com autocomplete, depois do primeiro preenchimento o uso fica ainda mais rápido.',
    result: 'Cerca de 80% menos tempo para enviar os e-mails de liberação.',
    tags: ['Node.js', 'Azure DevOps API', 'Integração'],
  },
]

export default function Projects() {
  const [project] = projects

  return (
    <section className="section" id="projetos">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">Projetos</span>
          <h2>Um caso real</h2>
          <p>
            Não é mockup: é um problema de trabalho que existia todos os dias e
            deixou de existir.
          </p>
        </header>

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

          <div className="project__tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
