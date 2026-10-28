import { CodeXml } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { layoutCopy, siteConfig } from '@/data/siteConfig';
import { useCurrentDate } from '@/hooks/useCurrentDate';
import type { SectionId } from '@/types';
import { NavItem } from './NavItem';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Sidebar({ active }: { active: SectionId }) {
  const date = useCurrentDate();
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-sidebar flex-col border-r border-line/50 bg-bg-sidebar lg:flex">
      <a
        href="#home"
        className="flex h-28 items-center justify-center border-b border-line text-[28px] font-light tracking-tight"
      >
        {siteConfig.logo}
        <span className="ml-1 h-1.5 w-1.5 bg-accent" aria-hidden="true" />
      </a>
      <div className="flex flex-1 flex-col justify-center pb-10">
        <CodeXml
          className="mb-10 ml-8 text-accent/70"
          size={28}
          strokeWidth={1}
          aria-hidden="true"
        />
        <nav aria-label={layoutCopy.navigation}>
          {navigation.map((item) => (
            <NavItem key={item.id} item={item} active={active} />
          ))}
        </nav>
      </div>
      <div className="border-t border-line px-8 pb-8 pt-6">
        <div className="mb-4">
          <LanguageSwitcher />
        </div>
        <p className="mb-3 flex items-center gap-2 text-[10px] text-text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {layoutCopy.available}
        </p>
        <p className="text-[10px] text-text-muted">{date}</p>
      </div>
    </aside>
  );
}
