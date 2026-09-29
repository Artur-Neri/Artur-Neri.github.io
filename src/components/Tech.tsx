const stack = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'REST APIs',
  'Scraping',
  'Automação',
]

function Group() {
  return (
    <div className="tech__group" aria-hidden="true">
      {stack.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  )
}

export default function Tech() {
  return (
    <div className="tech" aria-label="Tecnologias">
      <div className="tech__track">
        <Group />
        <Group />
      </div>
    </div>
  )
}
