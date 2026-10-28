import type { ProfileDetail } from '@/types';
import { siteConfig } from './siteConfig';

export const heroCopy = {
  greeting: 'Olá, eu sou',
  name: siteConfig.name,
  headline:
    'Desenvolvo aplicações web e desktop com React, TypeScript e Electron.',
  tagline:
    'Interfaces para sistemas de gestão e pontos de venda, com foco em clareza e facilidade de uso.',
  primaryAction: 'Ver projetos',
  secondaryAction: 'Entrar em contato',
  illustrationAlt:
    'Ilustração de um desenvolvedor trabalhando com dois monitores em uma mesa.',
  artLabel: 'SISTEMAS DE GESTÃO & PDV',
  artCaption: 'Interfaces para o dia a dia de quem usa.',
  stackLabel: 'MINHA STACK',
  stack: ['React', 'TypeScript', 'Electron'],
};
export const profile = {
  introduction: 'Eu sou',
  name: siteConfig.name,
  bio: 'Sou Francisco Felipe Santiago Neto, desenvolvedor de São Felipe, Bahia. Transformo ideias em interfaces intuitivas e aplicações bem estruturadas. Minha trajetória também inclui suporte técnico na Netinove desde 2019, com atendimento ao usuário, documentação e treinamento de equipes — experiências que reforçam meu cuidado com quem utiliza cada produto.',
  photo: '/profile.jpg',
  photoAvailable: true,
  photoAlt: 'Foto de Francisco Felipe Santiago Neto em um restaurante.',
  initials: 'FN',
  photoPlaceholder: 'Seu retrato.',
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
    { label: 'Idiomas', value: 'Português · Inglês básico' },
    { label: 'Localização', value: 'São Felipe, Bahia — Brasil' },
    { label: 'E-mail', value: siteConfig.email ?? 'A informar' },
    { label: 'Telefone', value: siteConfig.phone.label },
    { label: 'Freelance', value: 'Disponível' },
  ] satisfies ProfileDetail[],
};
