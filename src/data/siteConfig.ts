import { seo } from './seo';

export const siteConfig = {
  ...seo,
  logo: 'Felipe.dev',
  name: 'Felipe Neto',
  locale: 'pt-BR',
  timeZone: 'America/Sao_Paulo',
  role: 'Front-End / Mobile Developer',
  email: null as string | null,
  contact: {
    endpoint: import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined,
  },
  cv: { href: '/cv-felipe-neto.pdf', available: false },
};
export const layoutCopy = {
  navigation: 'Navegação principal',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
  skipLink: 'Pular para o conteúdo',
  loading: 'Carregando seção…',
  available: 'Disponível para projetos',
  location: 'Web & mobile, com propósito.',
  footer: 'Feito com cuidado. Construído com código.',
  socialPending: 'Link em breve',
  error: 'Não foi possível carregar esta seção.',
  retry: 'Tentar novamente',
};
export const sectionCopy = {
  home: { eyebrow: 'DESIGN EM CÓDIGO. IDEIAS EM PRODUTOS.', title: 'Início' },
  about: { eyebrow: 'UM POUCO DA MINHA HISTÓRIA', title: 'Sobre mim' },
  skills: { eyebrow: 'FERRAMENTAS & POSSIBILIDADES', title: 'Habilidades' },
  portfolio: { eyebrow: 'DO PRIMEIRO COMMIT AO PRODUTO', title: 'Portfólio' },
  contact: { eyebrow: 'VAMOS CONSTRUIR ALGO JUNTOS', title: 'Contato' },
};
