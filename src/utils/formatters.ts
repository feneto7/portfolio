import { siteConfig } from '@/data/siteConfig';

export function formatCurrentDate(date: Date): string {
  const parts = new Intl.DateTimeFormat(siteConfig.locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: siteConfig.timeZone,
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? '';
  return `${value('day')} de ${value('month')}, ${value('year')}`;
}
