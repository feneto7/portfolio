import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { heroCopy } from '@/data/profile';
import { sectionCopy, siteConfig } from '@/data/siteConfig';
import { ButtonLink } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialIcon';
import { ProfilePortrait } from '@/sections/About/ProfilePortrait';

export function Hero() {
  return (
    <section className="relative flex flex-1 flex-col">
      <div
        className="star-field pointer-events-none absolute -inset-10"
        aria-hidden="true"
      />
      <header className="relative flex flex-wrap items-center justify-between gap-4 border-b border-line/60 pb-6 text-[10px] font-semibold uppercase tracking-[.2em] text-text-muted">
        <span>{siteConfig.role}</span>
        <span className="hidden sm:block">{heroCopy.artLabel}</span>
      </header>
      <div className="relative grid flex-1 items-center gap-6 py-14 lg:grid-cols-[1.15fr_1fr] lg:py-16">
        <div className="relative z-10">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[.18em] text-text-muted">
            <span className="h-px w-8 bg-accent" />
            {sectionCopy.home.eyebrow}
          </p>
          <h1 className="mb-6 text-[42px] font-light leading-[1.16] tracking-tight sm:text-[54px] xl:text-[60px]">
            {heroCopy.greeting}
            <br />
            <strong className="font-bold text-accent">
              {heroCopy.name}
              <span className="text-text-primary" aria-hidden="true">
                .
              </span>
            </strong>
          </h1>
          <p className="max-w-[600px] text-[22px] font-light leading-[1.55] text-text-primary">
            {heroCopy.headline}
          </p>
          <p className="mb-8 mt-5 text-sm text-text-muted">
            {heroCopy.tagline}
          </p>
          <div className="mb-8 flex flex-wrap items-center gap-5">
            <ButtonLink href="#portfolio">
              {heroCopy.primaryAction}
              <ArrowUpRight size={17} aria-hidden="true" />
            </ButtonLink>
            <a
              href="#contact"
              className="flex min-h-11 items-center gap-2 text-xs text-text-primary transition-colors hover:text-accent"
            >
              {heroCopy.secondaryAction}
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
          <SocialLinks />
        </div>
        <div className="mx-auto w-full max-w-[440px]">
          <ProfilePortrait priority />
          <p className="mt-3 text-center text-[10px] tracking-[.16em] text-text-muted">
            {heroCopy.artCaption}
          </p>
        </div>
      </div>
      <div className="relative flex flex-wrap items-center gap-x-7 gap-y-3 text-xs">
        <span className="text-[9px] tracking-[.18em] text-text-muted">
          {heroCopy.stackLabel}
        </span>
        <span className="h-5 w-px bg-line" aria-hidden="true" />
        {heroCopy.stack.map((item) => (
          <span key={item} className="font-semibold text-text-muted">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
