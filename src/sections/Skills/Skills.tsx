import { skillGroups, services, skillsCopy } from '@/data/skills';
import { sectionCopy } from '@/data/siteConfig';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

export function Skills() {
  return (
    <section className="py-4">
      <SectionTitle {...sectionCopy.skills} number="03" />
      <div className="grid gap-12 xl:grid-cols-[.85fr_1.15fr]">
        <div>
          <h2 className="max-w-xs text-3xl font-light leading-snug">
            {skillsCopy.title}
          </h2>
          <p className="mb-9 mt-4 max-w-md leading-7 text-text-muted">
            {skillsCopy.description}
          </p>
          <div className="space-y-7">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[.15em] text-accent">
                  {group.title}
                </h3>
                <ul className="grid grid-cols-2 gap-x-5 gap-y-4">
                  {group.items.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 text-[13px] text-text-primary"
                    >
                      <Icon
                        size={19}
                        className="shrink-0 text-text-muted"
                        aria-hidden="true"
                      />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="sr-only">{skillsCopy.servicesTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map(({ title, description, icon: Icon }) => (
              <Card key={title}>
                <Icon
                  size={31}
                  strokeWidth={1.3}
                  className="mb-6 text-accent"
                  aria-hidden="true"
                />
                <h3 className="min-h-12 text-[17px] font-semibold">{title}</h3>
                <div className="mb-4 mt-4 h-px w-8 bg-card-edge" />
                <p className="text-[13px] leading-6 text-text-muted">
                  {description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
