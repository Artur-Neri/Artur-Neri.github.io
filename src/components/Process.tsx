const steps = [
  {
    n: '01',
    title: 'Conversa rápida',
    text: 'Entendo o problema, o objetivo e o prazo. Sem enrolação e sem termos técnicos desnecessários.',
  },
  {
    n: '02',
    title: 'Proposta clara',
    text: 'Você recebe escopo, prazo e valor fechados. Sabe exatamente o que vai receber e quando.',
  },
  {
    n: '03',
    title: 'Desenvolvimento',
    text: 'Construo em etapas com entregas parciais. Você acompanha o progresso e dá feedback durante o caminho.',
  },
  {
    n: '04',
    title: 'Entrega e suporte',
    text: 'Publico, testo e te mostro como usar. Fico disponível para ajustes e evolução do projeto.',
  },
]

export default function Process() {
  return (
    <section className="section section--alt" id="processo">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">Processo</span>
          <h2>Simples, transparente e sem surpresas</h2>
        </header>

        <ol className="steps">
          {steps.map((s) => (
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
