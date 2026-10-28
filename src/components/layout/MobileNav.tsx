import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { layoutCopy, siteConfig } from '@/data/siteConfig';
import { DESKTOP_QUERY, useMediaQuery } from '@/hooks/useMediaQuery';
import type { SectionId } from '@/types';
import { NavItem } from './NavItem';
import { LanguageSwitcher } from './LanguageSwitcher';

export function MobileNav({ active }: { active: SectionId }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  useEffect(() => {
    setOpen(false);
  }, [active, isDesktop]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !isDesktop) dialog?.showModal();
    else dialog?.close();
    if (!open || isDesktop) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open, isDesktop]);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 flex h-20 items-center justify-between border-b border-line bg-bg-sidebar px-6 lg:hidden">
        <a href="#home" className="text-[26px] font-light">
          {siteConfig.logo}
        </a>
        <button
          type="button"
          aria-label={layoutCopy.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center text-accent"
        >
          <Menu />
        </button>
      </header>
      <dialog
        id="mobile-menu"
        ref={dialogRef}
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        aria-label={layoutCopy.navigation}
        className="m-0 h-dvh max-h-none w-72 max-w-[85vw] border-r border-line bg-bg-sidebar p-0 text-text-primary backdrop:bg-ink/70"
      >
        <div className="mb-12 flex h-20 items-center justify-between border-b border-line px-6">
          <span className="text-2xl font-light">{siteConfig.logo}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={layoutCopy.closeMenu}
            className="flex h-11 w-11 items-center justify-center text-accent"
          >
            <X />
          </button>
        </div>
        <nav aria-label={layoutCopy.navigation}>
          {navigation.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              active={active}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </nav>
        <div className="px-6 py-6">
          <LanguageSwitcher />
        </div>
      </dialog>
    </>
  );
}
