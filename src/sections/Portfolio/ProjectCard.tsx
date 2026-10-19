import { ArrowUpRight } from 'lucide-react';
import { portfolioCopy } from '@/data/projects';
import { Tag } from '@/components/ui/Tag';
import type { Project } from '@/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden border border-line bg-bg-card">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1000}
          height={560}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
        />
        {project.featured && (
          <span className="absolute left-5 top-5 bg-ink px-3 py-2 text-[9px] font-bold tracking-[.14em] text-accent">
            {portfolioCopy.featured}
          </span>
        )}
      </div>
      <div className="p-7">
        <p className="mb-3 text-[9px] tracking-[.18em] text-accent">
          {project.category}
        </p>
        <h2 className="mb-3 text-2xl font-semibold">{project.title}</h2>
        <p className="max-w-2xl text-sm leading-7 text-text-muted">
          {project.description}
        </p>
        <div className="my-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-3 text-xs font-bold text-accent hover:text-accent-hover"
          >
            {portfolioCopy.view}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : (
          <span className="inline-flex min-h-11 items-center gap-3 text-xs text-text-muted">
            {portfolioCopy.pending}
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        )}
      </div>
    </article>
  );
}
