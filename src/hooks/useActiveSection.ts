import { useEffect, useState } from 'react';
import { resolveRoute } from '@/utils/routes';
import type { SectionId } from '@/types';

function getSection(): SectionId {
  return resolveRoute(window.location.hash).section;
}
export function useActiveSection() {
  const [active, setActive] = useState<SectionId>(getSection);
  useEffect(() => {
    const update = () => {
      const { section, hash } = resolveRoute(window.location.hash);
      if (window.location.hash !== hash)
        window.history.replaceState(null, '', hash);
      setActive(section);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return active;
}
