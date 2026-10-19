import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
} from 'react-icons/si';
import { Smartphone, BrainCircuit, CodeXml, Blocks } from 'lucide-react';
import type { SkillGroup, Service } from '@/types';

export const skillsCopy = {
  title: 'A tecnologia certa para cada ideia.',
  description:
    'Uma base técnica sólida, aliada ao cuidado com os detalhes e à vontade de continuar aprendendo.',
  servicesTitle: 'O que eu posso construir',
};
export const skillGroups: SkillGroup[] = [
  {
    title: 'Linguagens',
    items: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Front-end / Web',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vite', icon: SiVite },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Mobile',
    items: [{ name: 'Desenvolvimento de apps mobile', icon: Smartphone }],
  },
  {
    title: 'Inteligência artificial',
    items: [{ name: 'Base de conhecimento sólida', icon: BrainCircuit }],
  },
];
export const services: Service[] = [
  {
    title: 'Front-End Developer',
    description:
      'Interfaces modernas, performáticas e acessíveis. Do componente à experiência completa.',
    icon: CodeXml,
  },
  {
    title: 'Desenvolvimento Mobile',
    description:
      'Aplicativos mobile com foco em UX e interações que fazem sentido no dia a dia.',
    icon: Smartphone,
  },
  {
    title: 'Base sólida em IA',
    description:
      'Uso de IA para produtividade e para construir produtos com novas possibilidades.',
    icon: BrainCircuit,
  },
  {
    title: 'Código Limpo & Arquitetura',
    description:
      'Projetos componentizados, modulares e organizados, seguindo boas práticas.',
    icon: Blocks,
  },
];
