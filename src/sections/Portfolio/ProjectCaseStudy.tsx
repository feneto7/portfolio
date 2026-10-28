import {
  ArrowLeft,
  ArrowUpRight,
  CodeXml,
  Monitor,
  PanelsTopLeft,
  MessageCircle,
} from 'lucide-react';
import { caseStudyCopy, portfolioCopy } from '@/data/projects';
import { siteConfig } from '@/data/siteConfig';
import { ButtonLink } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import type { Project, ProjectCaseStudy as Study } from '@/types';
import { ProjectGallery } from './ProjectGallery';

export function ProjectCaseStudy({
  project,
  study,
}: {
  project: Project;
  study: Study;
}) {
  return (
    <article className="section-enter py-4">
      <a
        href="#portfolio"
        className="mb-8 inline-flex min-h-11 items-center gap-2 text-xs text-text-muted hover:text-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {caseStudyCopy.back}
      </a>
      <header className="border-b border-line pb-8">
        <p className="mb-4 text-[10px] font-bold tracking-[.2em] text-accent">
          {caseStudyCopy.eyebrow} · {project.category}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mb-6 mt-4 max-w-3xl text-2xl font-light leading-relaxed text-text-muted">
          {study.introduction}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>
      <div className="my-10 grid items-start gap-8 xl:grid-cols-2">
        <section>
          <h2 className="mb-4 text-xl font-semibold">
            {caseStudyCopy.context}
          </h2>
          <p className="leading-7 text-text-muted">{study.context}</p>
        </section>
        <section className="border-l-[3px] border-accent bg-bg-card p-6">
          <p className="mb-3 flex items-center gap-2 text-xs text-accent">
            <CodeXml size={19} aria-hidden="true" />
            {caseStudyCopy.role}
          </p>
          <h2 className="mb-3 text-xl font-semibold">{study.role}</h2>
          <p className="text-sm leading-7 text-text-muted">
            {study.responsibility}
          </p>
        </section>
      </div>
      <ProjectGallery screenshots={study.screenshots} />
      <section className="mt-12 border-t border-line pt-8">
        <h2 className="mb-6 text-2xl font-light">{caseStudyCopy.platforms}</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {study.platforms.map((platform, index) => {
            const Icon = index === 0 ? PanelsTopLeft : Monitor;
            return (
              <article
                key={platform.title}
                className="border-t-[3px] border-card-edge bg-bg-card p-7"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="mb-5 text-accent"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-xl font-semibold">{platform.title}</h3>
                <p className="mb-4 text-xs font-semibold text-accent">
                  {platform.stack}
                </p>
                <p className="leading-7 text-text-muted">
                  {platform.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-light">{caseStudyCopy.highlights}</h2>
        <div className="grid gap-7 xl:grid-cols-3">
          {study.highlights.map((item) => (
            <article key={item.title} className="border-t border-line pt-5">
              <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-7 text-text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <aside className="mt-12 border border-line bg-bg-card p-7 sm:p-9">
        <h2 className="max-w-2xl text-2xl font-light">
          {caseStudyCopy.contactTitle}
        </h2>
        <p className="mb-6 mt-3 max-w-2xl leading-7 text-text-muted">
          {caseStudyCopy.contactDescription}
        </p>
        <div className="flex flex-wrap gap-4">
          <ButtonLink
            href={siteConfig.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} aria-hidden="true" />
            {siteConfig.whatsapp.label}
          </ButtonLink>
          <ButtonLink href="#contact" variant="outline">
            {portfolioCopy.nextAction}
            <ArrowUpRight size={16} aria-hidden="true" />
          </ButtonLink>
        </div>
      </aside>
    </article>
  );
}
