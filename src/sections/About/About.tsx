import { Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { sectionCopy, siteConfig } from '@/data/siteConfig';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ButtonLink } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { ResumeHighlights } from './ResumeHighlights';
import { ProfilePortrait } from './ProfilePortrait';

export function About() {
  return (
    <section className="py-4">
      <SectionTitle {...sectionCopy.about} number="02" />
      <div className="grid items-center gap-14 xl:grid-cols-[.8fr_1.2fr]">
        <ProfilePortrait />
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
                className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-3"
              >
                <dt className="font-bold">{label}</dt>
                <dd className="min-w-0 break-words text-text-muted">{value}</dd>
              </div>
            ))}
          </dl>
          <ButtonLink
            href={siteConfig.cv.href}
            download={siteConfig.cv.downloadName}
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
      <ResumeHighlights />
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
