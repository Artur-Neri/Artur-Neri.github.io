const services = [
  {
    icon: '</>',
    title: 'Desenvolvimento Web',
    text: 'Sites, landing pages e painéis rápidos e responsivos. Do design ao deploy, com foco em conversão e performance.',
    items: ['Sites e landing pages', 'Dashboards e painéis', 'APIs e backends'],
  },
  {
    icon: '⚙',
    title: 'Automação & Scraping',
    text: 'Robôs que coletam, monitoram e processam dados por você — sem trabalho manual repetitivo.',
    items: ['Coleta e monitoramento de dados', 'Integração entre sistemas', 'Relatórios automáticos'],
  },
  {
    icon: '⇄',
    title: 'Integrações & APIs',
    text: 'Conecto ferramentas que não conversam entre si, elimino planilhas manuais e centralizo a informação.',
    items: ['Webhooks e integrações', 'Sincronização de dados', 'Bots de notificação'],
  },
]

export default function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">Serviços</span>
          <h2>O que eu construo para o seu negócio</h2>
          <p>
            Soluções práticas para problemas reais: menos trabalho manual, mais
            tempo para o que importa.
          </p>
        </header>

        <div className="grid grid--3">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <span className="card__icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="card__list">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
