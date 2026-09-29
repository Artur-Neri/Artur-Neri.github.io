export const site = {
  name: 'Artur Neri',
  domain: 'arturneri.me',
  tagline: 'Websites e automações que trabalham por você',
  email: 'contato@arturneri.me',
  // Troque pelo seu número no formato internacional, só dígitos: 55 + DDD + número
  whatsapp: '5518996194624',
  github: 'https://github.com/Artur-Neri',
  linkedin: '',
  location: 'Brasil · Atendo remotamente',
  // Endpoint do Formspree (https://formspree.io) para enviar o formulário
  // direto do site, sem abrir o app de e-mail do visitante.
  // Crie um form e cole o ID aqui, ex.: 'xayzabcd'.
  formspreeId: 'xdoqaprv',
}

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
