export type Project = {
  slug: string
  tag: string
  title: string
  summary: string
  problem: string
  solution: string
  result: string
  tags: string[]
  url?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'emails-de-release',
    tag: 'Automação · Azure DevOps',
    title: 'Emails de release sem copia e cola',
    summary: 'Automação que monta o e-mail de release do QA em um clique.',
    problem:
      'O QA da empresa passava horas montando o e-mail de release à mão, copiando e colando informação das tasks de desenvolvimento no Azure DevOps.',
    solution:
      'Criei um serviço em que ele vincula a conta, seleciona as tasks que saíram na nova versão e, com um clique, o e-mail está montado. Com autocomplete, depois do primeiro preenchimento o uso fica ainda mais rápido.',
    result: 'Cerca de 80% menos tempo para enviar os e-mails de liberação.',
    tags: ['Node.js', 'Azure DevOps API', 'Integração'],
    featured: true,
  },
  {
    slug: 'akemi-gravacoes-a-laser',
    tag: 'Website · Cliente',
    title: 'Portfólio digital para estúdio de gravação a laser',
    summary: 'Site com galeria filtrável e CMS próprio para publicar os trabalhos sem programar.',
    problem:
      'Os trabalhos da Akemi viviam só no feed do Instagram: sem um endereço próprio para mostrar o portfólio, cada interessado precisava garimpar posts antigos para encontrar exemplos.',
    solution:
      'Site com galeria filtrável por tema e modelo, visualização ampliada das peças e contato direto pelo WhatsApp. Fotos e textos vêm de um CMS próprio (Directus), então novos trabalhos entram sem mexer no código.',
    result: 'No ar no domínio próprio, com a Akemi publicando trabalhos por conta própria.',
    tags: ['HTML/CSS/JS', 'Directus CMS', 'GitHub Pages'],
    url: 'https://arturneri.me/akemi-gravacoes-a-laser/',
  },
]

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
