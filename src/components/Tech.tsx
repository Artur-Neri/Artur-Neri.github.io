import { useI18n } from '../i18n'

function Group({ items }: { items: string[] }) {
  return (
    <div className="tech__group" aria-hidden="true">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}

export default function Tech() {
  const { t } = useI18n()

  return (
    <div className="tech" aria-label={t.tech.label}>
      <div className="tech__track">
        <Group items={t.tech.stack} />
        <Group items={t.tech.stack} />
      </div>
    </div>
  )
}
