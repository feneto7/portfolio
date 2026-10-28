import { localize, locale } from '../i18n/locale';
import { seo } from './seo';

export const siteConfig = localize({
  ...seo,
  logo: 'Felipe.dev',
  name: 'Felipe Neto',
  locale,
  timeZone: 'America/Sao_Paulo',
  role: 'Desenvolvedor Web & Desktop',
  email: 'franciscofelipesn@gmail.com' as string | null,
  phone: { label: '(75) 99884-2196', href: 'tel:+5575998842196' },
  whatsapp: {
    href: 'https://wa.me/5575998842196',
    label: 'Conversar pelo WhatsApp',
  },
  contact: {
    endpoint: import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined,
  },
  cv: {
    href: '/cv-felipe-neto.pdf',
    available: true,
    downloadName: 'FranciscoFelipe_SantiagoNeto_Currículo.pdf',
  },
});
export const layoutCopy = localize({
  navigation: 'Navegação principal',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
  skipLink: 'Pular para o conteúdo',
  loading: 'Carregando seção…',
  available: 'Disponível para projetos',
  location: 'Desenvolvimento web & desktop.',
  footer: 'Feito com cuidado. Construído com código.',
  socialPending: 'Link em breve',
  error: 'Não foi possível carregar esta seção.',
  retry: 'Tentar novamente',
});
export const sectionCopy = localize({
  home: { eyebrow: 'DESENVOLVIMENTO FRONT-END', title: 'Início' },
  about: { eyebrow: 'UM POUCO DA MINHA HISTÓRIA', title: 'Sobre mim' },
  skills: { eyebrow: 'FERRAMENTAS & POSSIBILIDADES', title: 'Habilidades' },
  portfolio: { eyebrow: 'DO PRIMEIRO COMMIT AO PRODUTO', title: 'Portfólio' },
  contact: { eyebrow: 'VAMOS CONSTRUIR ALGO JUNTOS', title: 'Contato' },
});
