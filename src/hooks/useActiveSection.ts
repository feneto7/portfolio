import { useEffect, useState } from 'react';
import { DEFAULT_SECTION, navigation } from '@/data/navigation';
import type { SectionId } from '@/types';

function getSection(): SectionId {
  return (
    navigation.find(({ id }) => `#${id}` === window.location.hash)?.id ??
    DEFAULT_SECTION
  );
}
export function useActiveSection() {
  const [active, setActive] = useState<SectionId>(getSection);
  useEffect(() => {
    const update = () => {
      const section = getSection();
      if (window.location.hash !== `#${section}`)
        window.history.replaceState(null, '', `#${section}`);
      setActive(section);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return active;
}
