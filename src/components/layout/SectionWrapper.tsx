import { useEffect, useRef, type PropsWithChildren } from 'react';
import type { SectionId } from '@/types';
import { layoutCopy, sectionCopy } from '@/data/siteConfig';

export function SectionWrapper({
  active,
  children,
}: PropsWithChildren<{ active: SectionId }>) {
  const main = useRef<HTMLElement>(null);
  useEffect(() => {
    main.current?.focus({ preventScroll: true });
  }, [active]);
  return (
    <main
      id="main-content"
      tabIndex={-1}
      ref={main}
      aria-label={sectionCopy[active].title}
      className="relative flex min-h-dvh flex-col overflow-hidden px-6 pb-6 pt-28 outline-none sm:px-10 lg:ml-sidebar lg:px-14 lg:pt-10 xl:px-16"
    >
      <div
        key={active}
        className="section-enter mx-auto flex w-full max-w-[1260px] flex-1 flex-col"
      >
        {children}
      </div>
      <footer className="relative mx-auto mt-12 flex w-full max-w-[1260px] flex-wrap justify-between gap-3 border-t border-line/60 pt-5 text-[10px] tracking-wide text-text-muted">
        <span>{layoutCopy.footer}</span>
        <span>{layoutCopy.location}</span>
      </footer>
    </main>
  );
}
