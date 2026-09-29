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

export default function Tech() {
  return (
    <div className="tech" aria-label="Tecnologias">
      <div className="tech__track">
        {[...stack, ...stack].map((t, i) => (
          <span key={`${t}-${i}`}>{t}</span>
        ))}
      </div>
    </div>
  )
}
