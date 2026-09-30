import { site } from '../site'
import { useI18n } from '../i18n'

const year = new Date().getFullYear()

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {year} {site.name} · {site.domain}
        </span>
        <div className="footer__links">
          {site.github && (
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          <a href={`mailto:${site.email}`}>{t.footer.email}</a>
        </div>
      </div>
    </footer>
  )
}
