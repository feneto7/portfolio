import { ArrowUpRight } from 'lucide-react';
import { projects, portfolioCopy } from '@/data/projects';
import { sectionCopy } from '@/data/siteConfig';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ButtonLink } from '@/components/ui/Button';
import { ProjectCard } from './ProjectCard';

export function Portfolio() {
  return (
    <section className="py-4">
      <SectionTitle {...sectionCopy.portfolio} number="04" />
      <h2 className="text-3xl font-light">{portfolioCopy.intro}</h2>
      <p className="mb-9 mt-4 text-text-muted">{portfolioCopy.description}</p>
      <div className="grid gap-7 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <aside className="flex min-h-72 flex-col items-start justify-center border border-dashed border-card-edge p-8 sm:p-12">
          <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-line text-accent">
            <ArrowUpRight size={26} strokeWidth={1} aria-hidden="true" />
          </span>
          <h2 className="max-w-xs text-3xl font-light leading-snug">
            {portfolioCopy.nextTitle}
          </h2>
          <p className="mb-8 mt-4 max-w-sm leading-7 text-text-muted">
            {portfolioCopy.nextDescription}
          </p>
          <ButtonLink href="#contact" variant="outline">
            {portfolioCopy.nextAction}
            <ArrowUpRight size={15} aria-hidden="true" />
          </ButtonLink>
        </aside>
      </div>
    </section>
  );
}
