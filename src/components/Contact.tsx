import { useState, type FormEvent } from 'react'
import { site, whatsappLink } from '../site'
import { useI18n } from '../i18n'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { t } = useI18n()
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
      const subject = `${t.contact.mailSubject} — ${name || t.contact.mailFallbackName}`
      const body = `${t.contact.name}: ${name}\n${t.contact.email}: ${email}\n\n${message}`
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
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.intro}</p>

          <div className="contact__links">
            <a
              className="btn btn--primary btn--lg"
              href={whatsappLink(t.contact.whatsapp)}
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.whatsappCta}
            </a>
            <a className="contact__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label>
            {t.contact.name}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.contact.namePlaceholder}
              required
            />
          </label>
          <label>
            {t.contact.email}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.contact.emailPlaceholder}
              required
            />
          </label>
          <label>
            {t.contact.message}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.contact.messagePlaceholder}
              rows={5}
              required
            />
          </label>
          <button
            className="btn btn--primary btn--lg"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? t.contact.sending : t.contact.send}
          </button>

          {status === 'success' && (
            <p className="form__feedback form__feedback--ok" role="status">
              {t.contact.success}
            </p>
          )}
          {status === 'error' && (
            <p className="form__feedback form__feedback--error" role="alert">
              {t.contact.error}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
