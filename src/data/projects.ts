import type { Lang } from '../i18n/config'

export type Localized = Record<Lang, string>

export type Project = {
  slug: string
  tag: Localized
  title: Localized
  summary: Localized
  problem: Localized
  solution: Localized
  result: Localized
  tags: Record<Lang, string[]>
  url?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'emails-de-release',
    tag: { pt: 'Automação · Azure DevOps', en: 'Automation · Azure DevOps' },
    title: {
      pt: 'Emails de release sem copia e cola',
      en: 'Release emails without copy and paste',
    },
    summary: {
      pt: 'Automação que monta o e-mail de release do QA em um clique.',
      en: 'Automation that builds the QA release email in a single click.',
    },
    problem: {
      pt: 'O QA da empresa passava horas montando o e-mail de release à mão, copiando e colando informação das tasks de desenvolvimento no Azure DevOps.',
      en: 'The company’s QA team spent hours hand-building the release email, copying and pasting information from the development tasks in Azure DevOps.',
    },
    solution: {
      pt: 'Criei um serviço em que ele vincula a conta, seleciona as tasks que saíram na nova versão e, com um clique, o e-mail está montado. Com autocomplete, depois do primeiro preenchimento o uso fica ainda mais rápido.',
      en: 'I built a service where they connect their account, select the tasks included in the new version and, with one click, the email is ready. With autocomplete, after the first fill it gets even faster to use.',
    },
    result: {
      pt: 'Cerca de 80% menos tempo para enviar os e-mails de liberação.',
      en: 'Around 80% less time to send the release emails.',
    },
    tags: {
      pt: ['Node.js', 'Azure DevOps API', 'Integração'],
      en: ['Node.js', 'Azure DevOps API', 'Integration'],
    },
    featured: true,
  },
  {
    slug: 'akemi-gravacoes-a-laser',
    tag: { pt: 'Website · Cliente', en: 'Website · Client' },
    title: {
      pt: 'Portfólio digital para estúdio de gravação a laser',
      en: 'Digital portfolio for a laser engraving studio',
    },
    summary: {
      pt: 'Site com galeria filtrável e CMS próprio para publicar os trabalhos sem programar.',
      en: 'Website with a filterable gallery and its own CMS to publish work without coding.',
    },
    problem: {
      pt: 'Os trabalhos da Akemi viviam só no feed do Instagram: sem um endereço próprio para mostrar o portfólio, cada interessado precisava garimpar posts antigos para encontrar exemplos.',
      en: 'Akemi’s work lived only on the Instagram feed: with no dedicated address to showcase the portfolio, every interested visitor had to dig through old posts to find examples.',
    },
    solution: {
      pt: 'Site com galeria filtrável por tema e modelo, visualização ampliada das peças e contato direto pelo WhatsApp. Fotos e textos vêm de um CMS próprio (Directus), então novos trabalhos entram sem mexer no código.',
      en: 'A website with a gallery filterable by theme and model, enlarged views of each piece and direct WhatsApp contact. Photos and copy come from its own CMS (Directus), so new work is published without touching the code.',
    },
    result: {
      pt: 'No ar no domínio próprio, com a Akemi publicando trabalhos por conta própria.',
      en: 'Live on its own domain, with Akemi publishing new work on her own.',
    },
    tags: {
      pt: ['HTML/CSS/JS', 'Directus CMS', 'GitHub Pages'],
      en: ['HTML/CSS/JS', 'Directus CMS', 'GitHub Pages'],
    },
    url: 'https://arturneri.me/akemi-gravacoes-a-laser/',
  },
]

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug)
