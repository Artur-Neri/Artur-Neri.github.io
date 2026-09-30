import type { Messages } from './pt'

export const en: Messages = {
  meta: {
    title: 'Artur Neri — Web Developer & Automation',
    description:
      'Custom web development, automation and scraping. Websites, dashboards, bots and integrations that save you hours every day.',
  },
  nav: {
    services: 'Services',
    process: 'Process',
    projects: 'Projects',
    contact: 'Contact',
    cta: "Let's talk",
    menu: 'Open menu',
    whatsapp: "Hi Artur! I'd like to talk about a project.",
  },
  language: {
    label: 'Select language',
  },
  hero: {
    available: 'Available for new projects',
    titleLead: 'Websites and automations that ',
    titleAccent: 'work for you',
    lead: 'Custom web development, automation and scraping. I once turned a process that took hours of hand-building release emails into a single click — and I do the same with the repetitive tasks that eat up your day.',
    cta: 'Request a quote on WhatsApp',
    whatsapp: "Hi Artur! I'd like to talk about a project.",
    secondary: 'See projects',
    stats: [
      { value: '100%', label: 'Tailor-made projects' },
      { value: '-80%', label: 'Time spent on manual tasks' },
      { value: '24/7', label: 'Bots running on their own' },
    ],
    location: 'Brazil · Working remotely',
  },
  services: {
    eyebrow: 'Services',
    title: 'What I build for your business',
    intro:
      'Practical solutions to real problems: less manual work, more time for what matters.',
    items: [
      {
        icon: '</>',
        title: 'Web Development',
        text: 'Fast, responsive websites, landing pages and dashboards. From design to deploy, focused on conversion and performance.',
        items: ['Websites and landing pages', 'Dashboards and admin panels', 'APIs and backends'],
      },
      {
        icon: '⚙',
        title: 'Automation & Scraping',
        text: 'Bots that collect, monitor and process data for you — no repetitive manual work.',
        items: ['Data collection and monitoring', 'System integration', 'Automated reports'],
      },
      {
        icon: '⇄',
        title: 'Integrations & APIs',
        text: 'I connect tools that do not talk to each other, get rid of manual spreadsheets and centralize your information.',
        items: ['Webhooks and integrations', 'Data synchronization', 'Notification bots'],
      },
    ],
  },
  process: {
    eyebrow: 'Process',
    title: 'Simple, transparent and no surprises',
    steps: [
      {
        n: '01',
        title: 'Quick chat',
        text: 'I understand the problem, the goal and the deadline. No fluff and no unnecessary jargon.',
      },
      {
        n: '02',
        title: 'Clear proposal',
        text: 'You get a fixed scope, timeline and price. You know exactly what you will receive and when.',
      },
      {
        n: '03',
        title: 'Development',
        text: 'I build in stages with partial deliveries. You follow the progress and give feedback along the way.',
      },
      {
        n: '04',
        title: 'Delivery and support',
        text: 'I deploy, test and show you how to use it. I stay available for tweaks and future improvements.',
      },
    ],
  },
  tech: {
    label: 'Technologies',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'REST APIs',
      'Scraping',
      'Automation',
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Real cases',
    intro: 'No mockups: these are real problems, solved and in use.',
    viewCase: 'View case →',
    problem: 'The problem',
    solution: 'What I built',
    result: 'Result',
    live: 'View live site',
    notFound: 'Project not found',
    notFoundText: 'The link may be broken or the project is offline.',
    back: '← Back to projects',
    others: 'Other projects',
    docTitle: 'Project not found · Artur Neri',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's get your project off the ground",
    intro:
      'Tell me what you need. I reply quickly and with no obligation — just to see if I can help.',
    whatsappCta: 'Chat on WhatsApp',
    whatsapp: "Hi Artur! I'd like a quote.",
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'E-mail',
    emailPlaceholder: 'you@email.com',
    message: 'Message',
    messagePlaceholder: 'Describe what you need...',
    sending: 'Sending...',
    send: 'Send message',
    success: 'Message sent! I will get back to you soon.',
    error: 'Something went wrong. Try again or reach me on WhatsApp.',
    mailSubject: 'New project',
    mailFallbackName: 'contact via website',
  },
  footer: {
    email: 'E-mail',
  },
}
