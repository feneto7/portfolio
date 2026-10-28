import { localize } from '../i18n/locale';
import { House, UserRound, CodeXml, Layers, Send } from 'lucide-react';
import type { NavigationItem, SectionId } from '@/types';

export const navigation: NavigationItem[] = localize([
  { id: 'home', label: 'Início', number: '01', icon: House },
  { id: 'about', label: 'Sobre', number: '02', icon: UserRound },
  { id: 'skills', label: 'Habilidades', number: '03', icon: CodeXml },
  { id: 'portfolio', label: 'Portfólio', number: '04', icon: Layers },
  { id: 'contact', label: 'Contato', number: '05', icon: Send },
]);
export const DEFAULT_SECTION: SectionId = 'home';
