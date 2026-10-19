import type { ProfileDetail } from '@/types';
import { siteConfig } from './siteConfig';

export const heroCopy = {
  greeting: 'Olá, eu sou',
  name: siteConfig.name,
  headline:
    'Sou Desenvolvedor Front-End com 3 anos de experiência, criando aplicações web e mobile com TypeScript, React e Next.js, com código limpo, modular e escalável, e uma base sólida em IA.',
  tagline: 'Eu construo coisas para a web e para o mobile.',
  primaryAction: 'Conheça meu trabalho',
  secondaryAction: 'Vamos conversar',
  illustrationAlt:
    'Ilustração de um desenvolvedor trabalhando com dois monitores em uma mesa.',
  artLabel: 'IDEIAS QUE GANHAM VIDA',
  artCaption: 'Uma linha de código de cada vez.',
  stackLabel: 'MINHA STACK',
  stack: ['TypeScript', 'React', 'Next.js'],
};
export const profile = {
  introduction: 'Eu sou',
  name: siteConfig.name,
  bio: 'Sou Francisco Felipe Santiago Neto, desenvolvedor de São Felipe, Bahia. Transformo ideias em interfaces intuitivas e aplicações bem estruturadas. Minha trajetória também inclui suporte técnico na Netinove desde 2019, com atendimento ao usuário, documentação e treinamento de equipes — experiências que reforçam meu cuidado com quem utiliza cada produto.',
  photo: '/profile.jpg',
  photoAvailable: false,
  photoAlt: 'Foto de Felipe Neto',
  initials: 'FN',
  photoPlaceholder: 'Seu retrato, em breve.',
  cvLabel: 'Baixar CV',
  cvPending: 'Currículo em preparação',
  approachTitle: 'Como eu desenvolvo',
  approach:
    'Código limpo desde o início. Componentes com responsabilidades claras, módulos independentes e boas práticas de engenharia para construir aplicações que possam evoluir.',
  principles: [
    'Código limpo',
    'Componentização',
    'Modularização',
    'Acessibilidade',
  ],
  details: [
    { label: 'Nome completo', value: 'Francisco Felipe Santiago Neto' },
    { label: 'Experiência', value: '3 anos' },
    { label: 'Idiomas', value: 'A informar' },
    { label: 'Localização', value: 'São Felipe, Bahia — Brasil' },
    { label: 'E-mail', value: siteConfig.email ?? 'A informar' },
    { label: 'Telefone', value: siteConfig.phone.label },
    { label: 'Freelance', value: 'Disponível' },
  ] satisfies ProfileDetail[],
};
