interface CareerEntry {
  role: string;
  organization: string;
  period: string;
  location: string;
  highlights: string[];
}

export const resumeCopy = {
  experienceTitle: 'Experiência profissional',
};

export const career: CareerEntry[] = [
  {
    role: 'Desenvolvedor Front-End',
    organization: 'Autônomo',
    period: 'Janeiro de 2025 — atual',
    location: 'São Felipe, BA',
    highlights: [
      'Desenvolvimento de interfaces responsivas com HTML, CSS e JavaScript, com foco na experiência do usuário.',
      'Apoio na criação de projetos com TypeScript para soluções funcionais e bem estruturadas.',
    ],
  },
  {
    role: 'Help Desk',
    organization: 'Netinove',
    period: 'Março de 2019 — atual',
    location: 'São Felipe, BA',
    highlights: [
      'Atendimento e suporte a usuários, registro de incidentes e configuração de computadores e impressoras.',
      'Documentação técnica, elaboração de manuais e treinamento de colaboradores em sistemas internos.',
      'Orientação sobre segurança da informação, melhoria de processos e colaboração com a equipe para resolver problemas recorrentes.',
    ],
  },
];
