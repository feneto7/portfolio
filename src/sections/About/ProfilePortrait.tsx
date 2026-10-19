import { CodeXml } from 'lucide-react';
import { profile } from '@/data/profile';

export function ProfilePortrait() {
  return (
    <figure className="relative mx-auto w-full max-w-[370px] p-5">
      <span
        className="absolute left-0 top-0 h-28 w-28 bg-accent"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-0 right-1 h-36 w-32 skew-y-6 bg-accent/70"
        aria-hidden="true"
      />
      {profile.photoAvailable ? (
        <img
          src={profile.photo}
          alt={profile.photoAlt}
          width={370}
          height={440}
          loading="lazy"
          className="relative aspect-[4/5] w-full object-cover saturate-50"
        />
      ) : (
        <div className="relative flex aspect-[4/5] flex-col items-center justify-center border border-card-edge bg-bg-card">
          <div
            className="portrait-grid absolute inset-0 opacity-40"
            aria-hidden="true"
          />
          <CodeXml
            size={42}
            strokeWidth={1}
            className="relative mb-7 text-accent"
            aria-hidden="true"
          />
          <span className="relative text-8xl font-light tracking-tighter text-text-muted">
            {profile.initials}
          </span>
          <span className="relative mt-8 text-xs text-text-muted">
            {profile.photoPlaceholder}
          </span>
        </div>
      )}
    </figure>
  );
}
