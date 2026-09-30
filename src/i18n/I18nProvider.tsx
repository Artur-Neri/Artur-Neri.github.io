import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { pt, type Messages } from './pt'
import { en } from './en'
import type { Lang } from './config'
import { I18nContext, type I18nValue } from './index'

const dictionaries: Record<Lang, Messages> = { pt, en }

const STORAGE_KEY = 'arturneri.lang'

function detectLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    /* localStorage indisponível */
  }

  const browser = window.navigator.language?.toLowerCase() ?? ''
  return browser.startsWith('pt') ? 'pt' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* localStorage indisponível */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', dictionaries[lang].meta.description)
  }, [lang])

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
