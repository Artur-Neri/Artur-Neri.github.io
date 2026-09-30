import { useI18n } from '../i18n'

export default function Process() {
  const { t } = useI18n()

  return (
    <section className="section section--alt" id="processo">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">{t.process.eyebrow}</span>
          <h2>{t.process.title}</h2>
        </header>

        <ol className="steps">
          {t.process.steps.map((s) => (
            <li className="step" key={s.n}>
              <span className="step__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
