import { localize } from '../i18n/locale';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiElectron,
} from 'react-icons/si';
import {
  Smartphone,
  BrainCircuit,
  CodeXml,
  Blocks,
  Monitor,
  BookOpen,
} from 'lucide-react';
import type { SkillGroup, Service } from '@/types';

export const skillsCopy = localize({
  title: 'A tecnologia certa para cada ideia.',
  description:
    'Uma base técnica sólida, aliada ao cuidado com os detalhes e à vontade de continuar aprendendo.',
  servicesTitle: 'O que eu posso construir',
  professionalTitle: 'Como eu trabalho em equipe',
});
export const skillGroups: SkillGroup[] = localize([
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
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ],
  },
  {
    title: 'Desktop',
    items: [{ name: 'Electron', icon: SiElectron }],
  },
  {
    title: 'Suporte técnico',
    items: [
      { name: 'Suporte a usuários e equipamentos', icon: Monitor },
      { name: 'Documentação e treinamento', icon: BookOpen },
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
]);
export const professionalSkills: string[] = localize([
  'Trabalho em equipe',
  'Comunicação clara',
  'Gestão do tempo',
  'Resolução de problemas',
  'Aprendizado ágil',
  'Compromisso com a qualidade',
]);
export const services: Service[] = localize([
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
]);
