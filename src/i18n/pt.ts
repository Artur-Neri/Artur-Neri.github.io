export const pt = {
  meta: {
    title: 'Artur Neri — Web Dev & Automação',
    description:
      'Desenvolvimento web, automação e scraping sob medida. Sites, dashboards, robôs e integrações que economizam horas do seu dia.',
  },
  nav: {
    services: 'Serviços',
    process: 'Processo',
    projects: 'Projetos',
    contact: 'Contato',
    cta: 'Falar agora',
    menu: 'Abrir menu',
    whatsapp: 'Olá, Artur! Quero conversar sobre um projeto.',
  },
  language: {
    label: 'Selecionar idioma',
  },
  hero: {
    available: 'Disponível para novos projetos',
    titleLead: 'Websites e automações que ',
    titleAccent: 'trabalham por você',
    lead: 'Desenvolvimento web, automação e scraping sob medida. Já transformei um processo de horas montando e-mails de release à mão em um clique — e faço o mesmo com as tarefas repetitivas que consomem o seu dia.',
    cta: 'Pedir orçamento no WhatsApp',
    whatsapp: 'Olá, Artur! Quero conversar sobre um projeto.',
    secondary: 'Ver projetos',
    stats: [
      { value: '100%', label: 'Projetos sob medida' },
      { value: '-80%', label: 'Tempo em tarefas manuais' },
      { value: '24h/dia', label: 'Robôs rodando sozinhos' },
    ],
    location: 'Brasil · Atendo remotamente',
  },
  services: {
    eyebrow: 'Serviços',
    title: 'O que eu construo para o seu negócio',
    intro:
      'Soluções práticas para problemas reais: menos trabalho manual, mais tempo para o que importa.',
    items: [
      {
        icon: '</>',
        title: 'Desenvolvimento Web',
        text: 'Sites, landing pages e painéis rápidos e responsivos. Do design ao deploy, com foco em conversão e performance.',
        items: ['Sites e landing pages', 'Dashboards e painéis', 'APIs e backends'],
      },
      {
        icon: '⚙',
        title: 'Automação & Scraping',
        text: 'Robôs que coletam, monitoram e processam dados por você — sem trabalho manual repetitivo.',
        items: [
          'Coleta e monitoramento de dados',
          'Integração entre sistemas',
          'Relatórios automáticos',
        ],
      },
      {
        icon: '⇄',
        title: 'Integrações & APIs',
        text: 'Conecto ferramentas que não conversam entre si, elimino planilhas manuais e centralizo a informação.',
        items: ['Webhooks e integrações', 'Sincronização de dados', 'Bots de notificação'],
      },
    ],
  },
  process: {
    eyebrow: 'Processo',
    title: 'Simples, transparente e sem surpresas',
    steps: [
      {
        n: '01',
        title: 'Conversa rápida',
        text: 'Entendo o problema, o objetivo e o prazo. Sem enrolação e sem termos técnicos desnecessários.',
      },
      {
        n: '02',
        title: 'Proposta clara',
        text: 'Você recebe escopo, prazo e valor fechados. Sabe exatamente o que vai receber e quando.',
      },
      {
        n: '03',
        title: 'Desenvolvimento',
        text: 'Construo em etapas com entregas parciais. Você acompanha o progresso e dá feedback durante o caminho.',
      },
      {
        n: '04',
        title: 'Entrega e suporte',
        text: 'Publico, testo e te mostro como usar. Fico disponível para ajustes e evolução do projeto.',
      },
    ],
  },
  tech: {
    label: 'Tecnologias',
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
      'Automação',
    ],
  },
  projects: {
    eyebrow: 'Projetos',
    title: 'Casos reais',
    intro: 'Nada de mockup: são problemas reais, resolvidos e em uso.',
    viewCase: 'Ver case →',
    problem: 'O problema',
    solution: 'O que construí',
    result: 'Resultado',
    live: 'Ver site ao vivo',
    notFound: 'Projeto não encontrado',
    notFoundText: 'O link pode estar quebrado ou o projeto saiu do ar.',
    back: '← Voltar aos projetos',
    others: 'Outros projetos',
    docTitle: 'Projeto não encontrado · Artur Neri',
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos tirar seu projeto do papel',
    intro:
      'Me conte o que você precisa. Respondo rápido e sem compromisso — só para entender se consigo ajudar.',
    whatsappCta: 'Chamar no WhatsApp',
    whatsapp: 'Olá, Artur! Quero um orçamento.',
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    email: 'E-mail',
    emailPlaceholder: 'voce@email.com',
    message: 'Mensagem',
    messagePlaceholder: 'Descreva o que você precisa...',
    sending: 'Enviando...',
    send: 'Enviar mensagem',
    success: 'Mensagem enviada! Retorno em breve.',
    error: 'Algo deu errado. Tente novamente ou chame no WhatsApp.',
    mailSubject: 'Novo projeto',
    mailFallbackName: 'contato pelo site',
  },
  footer: {
    email: 'E-mail',
  },
}

export type Messages = typeof pt
