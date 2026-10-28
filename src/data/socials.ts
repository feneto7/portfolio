import { localize } from '../i18n/locale';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import type { Social } from '@/types';
import { siteConfig } from './siteConfig';

export const socials: Social[] = localize([
  { label: 'GitHub', href: 'https://github.com/feneto7', icon: FiGithub },
  { label: 'LinkedIn', href: null, icon: FiLinkedin },
  { label: 'Instagram', href: null, icon: FiInstagram },
  {
    label: 'E-mail',
    href: siteConfig.email ? `mailto:${siteConfig.email}` : null,
    icon: FiMail,
  },
]);
