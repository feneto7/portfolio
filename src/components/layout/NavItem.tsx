import { ChevronRight } from 'lucide-react';
import type { NavigationItem, SectionId } from '@/types';

interface NavItemProps {
  item: NavigationItem;
  active: SectionId;
  onNavigate?: () => void;
}
export function NavItem({ item, active, onNavigate }: NavItemProps) {
  const selected = item.id === active;
  const Icon = item.icon;
  return (
    <a
      href={`#${item.id}`}
      onClick={onNavigate}
      aria-current={selected ? 'page' : undefined}
      className={`group flex min-h-14 items-center gap-4 px-8 text-[11px] font-bold uppercase tracking-[.1em] transition-colors ${selected ? 'bg-accent-active text-white' : 'text-text-muted hover:bg-bg-base/40 hover:text-text-primary'}`}
    >
      <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
      <span>{item.label}</span>
      {selected && (
        <ChevronRight size={14} className="ml-auto" aria-hidden="true" />
      )}
    </a>
  );
}
