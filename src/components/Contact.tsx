import { useState, type FormEvent } from 'react'
import { site, whatsappLink } from '../site'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `Novo projeto — ${name || 'contato pelo site'}`
    const body = `Nome: ${name}\nE-mail: ${email}\n\n${message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section section--alt" id="contato">
      <div className="container contact">
        <div className="contact__intro">
          <span className="eyebrow">Contato</span>
          <h2>Vamos tirar seu projeto do papel</h2>
          <p>
            Me conte o que você precisa. Respondo rápido e sem compromisso — só
            para entender se consigo ajudar.
          </p>

          <div className="contact__links">
            <a
              className="btn btn--primary btn--lg"
              href={whatsappLink('Olá, Artur! Quero um orçamento.')}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
            <a className="contact__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              required
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
              required
            />
          </label>
          <label>
            Mensagem
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Descreva o que você precisa..."
              rows={5}
              required
            />
          </label>
          <button className="btn btn--primary btn--lg" type="submit">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  )
}
