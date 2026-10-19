import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { career, education, resumeCopy } from '@/data/resume';

export function ResumeHighlights() {
  return (
    <div className="mt-12 grid items-start gap-10 border-t border-line pt-8 xl:grid-cols-[1.4fr_1fr]">
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
      <section aria-labelledby="education-title">
        <h2
          id="education-title"
          className="mb-7 flex items-center gap-3 text-xl"
        >
          <GraduationCap size={23} className="text-accent" aria-hidden="true" />
          {resumeCopy.educationTitle}
        </h2>
        {education.map((entry) => (
          <article
            key={`${entry.institution}-${entry.course}`}
            className="border-t-[3px] border-card-edge bg-bg-card p-6"
          >
            <p className="mb-3 text-xs text-accent">{entry.date}</p>
            <h3 className="text-lg font-semibold">{entry.course}</h3>
            <p className="mt-2 text-sm text-text-muted">
              {entry.institution} · {entry.location}
            </p>
            <p className="mt-5 border-t border-line pt-4 text-sm text-text-primary">
              {entry.status}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
