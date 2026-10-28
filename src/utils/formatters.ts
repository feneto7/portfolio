import { siteConfig } from '@/data/siteConfig';

export function formatCurrentDate(date: Date): string {
  return new Intl.DateTimeFormat(siteConfig.locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: siteConfig.timeZone,
  }).format(date);
}
