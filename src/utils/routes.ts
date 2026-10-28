import { DEFAULT_SECTION, navigation } from '@/data/navigation';
import { projects } from '@/data/projects';
import type { SectionId } from '@/types';

interface PortfolioRoute {
  section: SectionId;
  projectId: string | null;
  hash: string;
}

export function resolveRoute(hash: string): PortfolioRoute {
  const project = projects.find(
    (item) => item.caseStudy && hash === `#portfolio/${item.id}`,
  );
  if (project) return { section: 'portfolio', projectId: project.id, hash };
  const section =
    navigation.find((item) => hash === `#${item.id}`)?.id ??
    (hash.startsWith('#portfolio/') ? 'portfolio' : DEFAULT_SECTION);
  return { section, projectId: null, hash: `#${section}` };
}
