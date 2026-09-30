import { whatsappLink } from '../site'
import { useI18n } from '../i18n'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="pill">
          <span className="pill__dot" /> {t.hero.available}
        </span>

        <h1>
          {t.hero.titleLead}
          <em>{t.hero.titleAccent}</em>
        </h1>

        <p className="hero__lead">{t.hero.lead}</p>

        <div className="hero__actions">
          <a
            className="btn btn--primary btn--lg"
            href={whatsappLink(t.hero.whatsapp)}
            target="_blank"
            rel="noreferrer"
          >
            {t.hero.cta}
          </a>
          <a className="btn btn--ghost btn--lg" href="#projetos">
            {t.hero.secondary}
          </a>
        </div>

        <dl className="hero__stats">
          {t.hero.stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>

        <p className="hero__meta">{t.hero.location}</p>
      </div>
    </section>
  )
}
