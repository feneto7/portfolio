import { useState } from 'react';
import { Expand } from 'lucide-react';
import { caseStudyCopy } from '@/data/projects';
import type { ProjectScreenshot } from '@/types';
import { ScreenshotDialog } from './ScreenshotDialog';

export function ProjectGallery({
  screenshots,
}: {
  screenshots: ProjectScreenshot[];
}) {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const screenshot = screenshots[selected];
  if (!screenshot) return null;
  return (
    <section aria-labelledby="project-gallery-title">
      <h2 id="project-gallery-title" className="mb-3 text-2xl font-light">
        {caseStudyCopy.gallery}
      </h2>
      <p className="mb-6 leading-7 text-text-muted">
        {caseStudyCopy.galleryDescription}
      </p>
      <figure className="border border-line bg-bg-card">
        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-label={`${caseStudyCopy.enlarge}: ${screenshot.title}`}
          className="block w-full bg-ink focus-visible:relative focus-visible:z-10"
        >
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            width={1920}
            height={960}
            loading="lazy"
            className="aspect-[2/1] w-full object-contain"
          />
        </button>
        <figcaption className="flex flex-wrap items-start justify-between gap-4 p-5">
          <div className="min-w-0 flex-1" aria-live="polite" aria-atomic="true">
            <h3 className="font-semibold">{screenshot.title}</h3>
            <p className="mt-1 text-xs leading-6 text-text-muted">
              {screenshot.caption}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-accent hover:text-accent-hover"
          >
            <Expand size={16} aria-hidden="true" />
            {caseStudyCopy.enlarge}
          </button>
        </figcaption>
      </figure>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {screenshots.map((item, index) => (
          <button
            type="button"
            key={item.src}
            onClick={() => setSelected(index)}
            aria-pressed={selected === index}
            className={`flex items-center gap-3 border p-3 text-left text-xs transition-colors ${selected === index ? 'border-accent bg-bg-card text-text-primary' : 'border-line text-text-muted hover:border-card-edge hover:text-text-primary'}`}
          >
            <img
              src={item.src}
              alt=""
              width={96}
              height={48}
              loading="lazy"
              className="h-12 w-20 shrink-0 object-contain"
            />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <ScreenshotDialog
        screenshot={screenshot}
        open={expanded}
        onClose={() => setExpanded(false)}
      />
    </section>
  );
}
