import type { Project } from '@/types';

export const portfolioCopy = {
  intro: 'Código que resolve problemas reais.',
  description:
    'Uma seleção do que venho construindo, da interface às regras de negócio.',
  featured: 'PROJETO EM DESTAQUE',
  view: 'Conhecer projeto',
  pending: 'Link do projeto em breve',
  nextTitle: 'Sua ideia pode ser a próxima.',
  nextDescription:
    'Vamos transformar um desafio em uma experiência digital bem construída.',
  nextAction: 'Vamos conversar',
};
export const projects: Project[] = [
  {
    id: 'netinove',
    title: 'NETINOVE',
    category: 'SISTEMA WEB / ERP',
    description:
      'ERP de vendas e emissão de notas fiscais integrado à SEFAZ. Tecnologia aplicada para simplificar a gestão e conectar processos em uma única experiência.',
    tags: ['React', 'Vite', 'TypeScript'],
    image: '/netinove-cover.svg',
    imageAlt: 'Capa conceitual NETINOVE, ERP de vendas e notas fiscais.',
    href: null,
    featured: true,
  },
];
