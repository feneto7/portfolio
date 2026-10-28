import { localize } from '../i18n/locale';
import type { Project } from '@/types';

export const portfolioCopy = localize({
  intro: 'Código que resolve problemas reais.',
  description:
    'Uma seleção do que venho construindo, da interface às regras de negócio.',
  featured: 'PROJETO EM DESTAQUE',
  view: 'Explorar projeto',
  pending: 'Link do projeto em breve',
  nextTitle: 'Sua ideia pode ser a próxima.',
  nextDescription:
    'Vamos transformar um desafio em uma experiência digital bem construída.',
  nextAction: 'Vamos conversar',
});
export const projects: Project[] = localize([
  {
    id: 'netinove',
    title: 'NETINOVE ERP',
    category: 'ERP WEB / PDV DESKTOP',
    description:
      'Todo o front-end de um ERP web e de um PDV desktop. Interfaces para vendas, cadastro de produtos e operações fiscais, em um sistema integrado à SEFAZ.',
    tags: ['React', 'Vite', 'TypeScript', 'Electron'],
    image: '/netinove-produtos.png',
    imageAlt:
      'Cadastro de produto do NETINOVE ERP, com identificação, precificação, marca e fornecedor.',
    href: null,
    featured: true,
    caseStudy: {
      introduction: 'Da gestão na web à operação no desktop.',
      context:
        'O NETINOVE reúne vendas, cadastro de produtos e emissão de notas fiscais em um ERP integrado à SEFAZ. O projeto conta com uma aplicação web em React e Vite e um PDV desktop em Electron.',
      role: 'Responsável por todo o front-end',
      responsibility:
        'Desenvolvi toda a parte de front-end do NETINOVE ERP, incluindo a aplicação web e a interface do PDV desktop. Minha contribuição está nas telas e nas interações pelas quais o usuário acessa as funcionalidades do sistema.',
      platforms: [
        {
          title: 'ERP web',
          stack: 'React + Vite',
          description:
            'Interfaces para acessar as funcionalidades de gestão pelo navegador.',
        },
        {
          title: 'PDV desktop',
          stack: 'Electron',
          description:
            'Interface do ponto de venda em uma aplicação para desktop.',
        },
      ],
      highlights: [
        {
          title: 'Cadastro organizado por etapas',
          description:
            'A tela de produto reúne abas de dados principais, fiscais, atacado, insumos e endereçamento, organizando diferentes aspectos do cadastro.',
        },
        {
          title: 'Informações agrupadas por contexto',
          description:
            'Identificação, precificação, fornecedor e marca aparecem em blocos próprios. Custo, margem e preço de venda ficam próximos na interface.',
        },
        {
          title: 'Acesso aos módulos fiscais',
          description:
            'A área fiscal apresenta atalhos identificados por ícones e rótulos para NF-e, NFC-e, MDF-e, NFS-e, notas fiscais e CT-e.',
        },
      ],
      screenshots: [
        {
          src: '/netinove-produtos.png',
          alt: 'Formulário de novo produto do NETINOVE com campos de identificação e precificação.',
          title: 'Cadastro de produtos',
          caption:
            'Dados principais, precificação, fornecedor e marca organizados em um formulário com abas.',
        },
        {
          src: '/netinove-fiscal.png',
          alt: 'Menu fiscal do NETINOVE com atalhos para NF-e, NFC-e, MDF-e, NFS-e, notas fiscais e CT-e.',
          title: 'Módulos fiscais',
          caption:
            'Uma área dedicada ao acesso às funcionalidades fiscais do sistema.',
        },
        {
          src: '/netinove-erp.png',
          alt: 'Visão geral do NETINOVE com navegação superior por módulos e identidade visual escura.',
          title: 'Visão geral do sistema',
          caption: 'Navegação por módulos e identidade visual do NETINOVE ERP.',
        },
      ],
    },
  },
]);

export const caseStudyCopy = localize({
  back: 'Voltar ao portfólio',
  eyebrow: 'ESTUDO DE CASO',
  context: 'O projeto',
  role: 'Minha participação',
  platforms: 'Um produto, duas plataformas',
  gallery: 'O projeto em telas',
  galleryDescription:
    'Capturas reais das interfaces que desenvolvi. Selecione uma tela para explorar os detalhes.',
  highlights: 'Detalhes das interfaces',
  enlarge: 'Ampliar imagem',
  close: 'Fechar imagem',
  original: 'Abrir imagem em tamanho original',
  contactTitle: 'Vamos construir a interface do seu próximo projeto?',
  contactDescription:
    'Conte o que você precisa desenvolver. Podemos começar pela web, pelo desktop ou pelas duas plataformas.',
});
