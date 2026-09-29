import { useState, type FormEvent } from 'react'
import { site, whatsappLink } from '../site'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const endpoint = site.formspreeId
    ? `https://formspree.io/f/${site.formspreeId}`
    : ''

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Sem formulário configurado: mantém o fallback por e-mail.
    if (!endpoint) {
      const subject = `Novo projeto — ${name || 'contato pelo site'}`
      const body = `Nome: ${name}\nE-mail: ${email}\n\n${message}`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
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
          <button
            className="btn btn--primary btn--lg"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
          </button>

          {status === 'success' && (
            <p className="form__feedback form__feedback--ok" role="status">
              Mensagem enviada! Retorno em breve.
            </p>
          )}
          {status === 'error' && (
            <p className="form__feedback form__feedback--error" role="alert">
              Algo deu errado. Tente novamente ou chame no WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
