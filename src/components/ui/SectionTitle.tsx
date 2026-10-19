interface SectionTitleProps {
  title: string;
  eyebrow: string;
  number: string;
}
export function SectionTitle({ title, eyebrow, number }: SectionTitleProps) {
  return (
    <header className="mb-12 flex items-end justify-between gap-4">
      <div>
        <p className="mb-3 text-[10px] font-bold tracking-[.2em] text-text-muted">
          {eyebrow}
        </p>
        <h1
          id="section-title"
          className="text-[26px] font-semibold uppercase tracking-wide"
        >
          {title}
        </h1>
        <div className="mt-5 h-[3px] w-24 bg-line" aria-hidden="true">
          <div className="h-full w-8 bg-accent" />
        </div>
      </div>
      <span
        className="select-none text-5xl font-light text-text-muted/30"
        aria-hidden="true"
      >
        {number}
      </span>
    </header>
  );
}
