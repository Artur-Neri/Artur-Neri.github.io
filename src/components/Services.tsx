import { useI18n } from '../i18n'

export default function Services() {
  const { t } = useI18n()
  const services = t.services.items

  return (
    <section className="section" id="servicos">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2>{t.services.title}</h2>
          <p>{t.services.intro}</p>
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
