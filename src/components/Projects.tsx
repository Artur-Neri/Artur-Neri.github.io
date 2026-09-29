const projects = [
  {
    tag: 'Automação · Jurídico',
    title: 'Robô de documentos e tribunais',
    text: 'Sistema que monitora processos, baixa documentos de forma automática e organiza tudo por cliente, substituindo horas de trabalho manual por dia.',
    tags: ['Node.js', 'Scraping', 'Docker'],
  },
  {
    tag: 'Web · Dashboard',
    title: 'Painel de monitoramento',
    text: 'Interface web para acompanhar robôs e status de execuções em tempo real, com logs, alertas e histórico de resultados.',
    tags: ['React', 'API', 'Real-time'],
  },
  {
    tag: 'Integração · Dados',
    title: 'Coleta e sincronização',
    text: 'Integração entre sistemas que não conversam entre si, centralizando dados e eliminando planilhas controladas à mão.',
    tags: ['ETL', 'APIs', 'Notificações'],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">Projetos</span>
          <h2>Alguns exemplos do que já construí</h2>
          <p>Projetos reais, feitos para resolver problemas concretos de quem trabalha com informação e processos.</p>
        </header>

        <div className="grid grid--3">
          {projects.map((p) => (
            <article className="project" key={p.title}>
              <span className="project__tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="project__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
