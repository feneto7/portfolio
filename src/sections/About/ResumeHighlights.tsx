import { BriefcaseBusiness } from 'lucide-react';
import { career, resumeCopy } from '@/data/resume';

export function ResumeHighlights() {
  return (
    <div className="mt-12 border-t border-line pt-8">
      <section aria-labelledby="experience-title">
        <h2
          id="experience-title"
          className="mb-7 flex items-center gap-3 text-xl"
        >
          <BriefcaseBusiness
            size={21}
            className="text-accent"
            aria-hidden="true"
          />
          {resumeCopy.experienceTitle}
        </h2>
        <ol className="space-y-8 border-l border-line pl-6">
          {career.map((entry) => (
            <li
              key={`${entry.organization}-${entry.role}`}
              className="relative"
            >
              <span
                className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <p className="mb-2 text-xs text-accent">{entry.period}</p>
              <h3 className="text-lg font-semibold">{entry.role}</h3>
              <p className="mb-3 mt-1 text-sm text-text-muted">
                {entry.organization} · {entry.location}
              </p>
              <ul className="list-disc space-y-2 pl-4 text-sm leading-6 text-text-muted">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
