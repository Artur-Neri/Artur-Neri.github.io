import { useEffect, useState } from 'react'
import { site, whatsappLink } from '../site'
import { useI18n } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Nav() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#servicos', label: t.nav.services },
    { href: '#processo', label: t.nav.process },
    { href: '#projetos', label: t.nav.projects },
    { href: '#contato', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__mark">AN</span>
          <span>
            {site.name}
            <small>{site.domain}</small>
          </span>
        </a>

        <div className="nav__right">
          <nav className={`nav__links ${open ? 'is-open' : ''}`}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              className="btn btn--primary nav__cta"
              href={whatsappLink(t.nav.whatsapp)}
              target="_blank"
              rel="noreferrer"
            >
              {t.nav.cta}
            </a>
          </nav>

          <div className="nav__end">
            <LanguageSwitcher />
            <button
              className="nav__toggle"
              aria-label={t.nav.menu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
