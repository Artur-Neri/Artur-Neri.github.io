export const site = {
  name: 'Artur Neri',
  domain: 'arturneri.me',
  tagline: 'Websites e automações que trabalham por você',
  email: 'contato@arturneri.me',
  // Troque pelo seu número no formato internacional, só dígitos: 55 + DDD + número
  whatsapp: '5500000000000',
  github: 'https://github.com/Artur-Neri',
  linkedin: '',
  location: 'Brasil · Atendo remotamente',
}

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
