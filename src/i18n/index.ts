import { createContext, useContext } from 'react'
import type { Messages } from './pt'
import type { Lang } from './config'

export type I18nValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Messages
}

export const I18nContext = createContext<I18nValue | null>(null)

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
