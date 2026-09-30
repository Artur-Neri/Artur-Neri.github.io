import { useI18n } from '../i18n'

// A strip rola -50% do track, ou seja, uma "metade". Cada metade precisa ser
// mais larga que a tela para o loop ficar contínuo, então repetimos a stack.
const REPEAT = 4
const SECONDS_PER_STACK = 28

function Group({ items }: { items: string[] }) {
  return (
    <div className="tech__group" aria-hidden="true">
      {items.map((item, index) => (
        <span key={`${item}-${index}`}>{item}</span>
      ))}
    </div>
  )
}

export default function Tech() {
  const { t } = useI18n()
  const items = Array.from({ length: REPEAT }, () => t.tech.stack).flat()

  return (
    <div className="tech" aria-label={t.tech.label}>
      <div
        className="tech__track"
        style={{ animationDuration: `${SECONDS_PER_STACK * REPEAT}s` }}
      >
        <Group items={items} />
        <Group items={items} />
      </div>
    </div>
  )
}
