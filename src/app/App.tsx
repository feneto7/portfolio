import { lazy, Suspense, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionErrorBoundary } from '@/components/ui/SectionErrorBoundary';
import { useActiveSection } from '@/hooks/useActiveSection';
import { layoutCopy, sectionCopy, siteConfig } from '@/data/siteConfig';
import { Hero } from '@/sections/Hero/Hero';

const About = lazy(() =>
  import('@/sections/About/About').then((module) => ({
    default: module.About,
  })),
);
const Skills = lazy(() =>
  import('@/sections/Skills/Skills').then((module) => ({
    default: module.Skills,
  })),
);
const Portfolio = lazy(() =>
  import('@/sections/Portfolio/Portfolio').then((module) => ({
    default: module.Portfolio,
  })),
);
const Contact = lazy(() =>
  import('@/sections/Contact/Contact').then((module) => ({
    default: module.Contact,
  })),
);
const sections = {
  home: Hero,
  about: About,
  skills: Skills,
  portfolio: Portfolio,
  contact: Contact,
};

export function App() {
  const active = useActiveSection();
  const Section = sections[active];
  useEffect(() => {
    document.title =
      active === 'home'
        ? siteConfig.title
        : `${sectionCopy[active].title} | ${siteConfig.name}`;
  }, [active]);
  return (
    <>
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('main-content')?.focus();
        }}
        className="fixed left-4 top-4 z-50 -translate-y-24 bg-accent px-5 py-3 text-ink focus:translate-y-0"
      >
        {layoutCopy.skipLink}
      </a>
      <Sidebar active={active} />
      <MobileNav active={active} />
      <SectionWrapper active={active}>
        <SectionErrorBoundary key={active}>
          <Suspense
            fallback={
              <p role="status" className="my-auto text-text-muted">
                {layoutCopy.loading}
              </p>
            }
          >
            <Section />
          </Suspense>
        </SectionErrorBoundary>
      </SectionWrapper>
    </>
  );
}
