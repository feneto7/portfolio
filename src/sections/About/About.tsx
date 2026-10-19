import { Download, CodeXml } from 'lucide-react';
import { profile } from '@/data/profile';
import { sectionCopy, siteConfig } from '@/data/siteConfig';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ButtonLink } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';

export function About() {
  return (
    <section className="py-4">
      <SectionTitle {...sectionCopy.about} number="02" />
      <div className="grid items-center gap-14 xl:grid-cols-[.8fr_1.2fr]">
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
        <div>
          <h2 className="mb-5 text-3xl font-light">
            {profile.introduction}{' '}
            <strong className="font-semibold text-accent">
              {profile.name}
            </strong>
          </h2>
          <p className="mb-7 leading-7 text-text-muted">{profile.bio}</p>
          <dl className="mb-8 grid gap-3">
            {profile.details.map(({ label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[130px_1fr] gap-3 text-sm"
              >
                <dt className="font-bold">{label}</dt>
                <dd className="break-words text-text-muted">{value}</dd>
              </div>
            ))}
          </dl>
          <ButtonLink
            href={siteConfig.cv.href}
            download
            aria-disabled={!siteConfig.cv.available}
            onClick={
              siteConfig.cv.available
                ? undefined
                : (event) => event.preventDefault()
            }
            className={
              !siteConfig.cv.available ? 'cursor-not-allowed opacity-60' : ''
            }
          >
            <Download size={15} aria-hidden="true" />
            {profile.cvLabel}
          </ButtonLink>
          {!siteConfig.cv.available && (
            <p className="mt-3 text-xs text-text-muted">{profile.cvPending}</p>
          )}
        </div>
      </div>
      <div className="mt-16 border-t border-line pt-8">
        <h2 className="mb-3 text-xl">{profile.approachTitle}</h2>
        <p className="max-w-3xl leading-7 text-text-muted">
          {profile.approach}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.principles.map((principle) => (
            <Tag key={principle}>{principle}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
