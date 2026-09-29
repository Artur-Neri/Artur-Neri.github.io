import { site, whatsappLink } from '../site'

const stats = [
  { value: '100%', label: 'Projetos sob medida' },
  { value: '-80%', label: 'Tempo em tarefas manuais' },
  { value: '24h/dia', label: 'Robôs rodando sozinhos' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="pill">
          <span className="pill__dot" /> Disponível para novos projetos
        </span>

        <h1>
          Websites e automações que <em>trabalham por você</em>
        </h1>

        <p className="hero__lead">
          Desenvolvimento web, scraping e integrações sob medida. Eu transformo
          tarefas repetitivas e sistemas espalhados em fluxos automáticos que
          economizam horas todos os dias.
        </p>

        <div className="hero__actions">
          <a
            className="btn btn--primary btn--lg"
            href={whatsappLink('Olá, Artur! Quero conversar sobre um projeto.')}
            target="_blank"
            rel="noreferrer"
          >
            Pedir orçamento no WhatsApp
          </a>
          <a className="btn btn--ghost btn--lg" href="#projetos">
            Ver projetos
          </a>
        </div>

        <dl className="hero__stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>

        <p className="hero__meta">{site.location}</p>
      </div>
    </section>
  )
}
