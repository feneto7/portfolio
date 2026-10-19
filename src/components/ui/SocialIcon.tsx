import type { Social } from '@/types';
import { layoutCopy } from '@/data/siteConfig';
import { socials } from '@/data/socials';

export function SocialIcon({ social }: { social: Social }) {
  const Icon = social.icon;
  const className =
    'flex h-10 w-10 items-center justify-center rounded-full border border-card-edge transition-colors';
  return social.href ? (
    <a
      href={social.href}
      target={social.href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noopener noreferrer"
      aria-label={social.label}
      className={`${className} text-text-primary hover:border-accent hover:bg-accent hover:text-ink`}
    >
      <Icon size={16} aria-hidden="true" />
    </a>
  ) : (
    <span
      role="img"
      aria-label={`${social.label}: ${layoutCopy.socialPending}`}
      title={`${social.label}: ${layoutCopy.socialPending}`}
      className={`${className} text-text-muted`}
    >
      <Icon size={16} aria-hidden="true" />
    </span>
  );
}
export function SocialLinks() {
  return (
    <div className="flex gap-3">
      {socials.map((social) => (
        <SocialIcon key={social.label} social={social} />
      ))}
    </div>
  );
}
