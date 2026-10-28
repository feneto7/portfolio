import { useEffect, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { caseStudyCopy } from '@/data/projects';
import type { ProjectScreenshot } from '@/types';

interface ScreenshotDialogProps {
  screenshot: ProjectScreenshot;
  open: boolean;
  onClose: () => void;
}

export function ScreenshotDialog({
  screenshot,
  open,
  onClose,
}: ScreenshotDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open) {
      dialog?.close();
      return;
    }
    dialog?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      onClose={onClose}
      aria-labelledby="screenshot-dialog-title"
      className="m-auto max-h-[95dvh] w-[96vw] max-w-[1600px] overflow-y-auto border border-line bg-ink p-0 text-text-primary backdrop:bg-ink/90"
    >
      <header className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
        <h2 id="screenshot-dialog-title" className="font-semibold">
          {screenshot.title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={caseStudyCopy.close}
          className="flex h-11 w-11 shrink-0 items-center justify-center text-accent"
        >
          <X size={22} aria-hidden="true" />
        </button>
      </header>
      {open && (
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          width={1920}
          height={960}
          className="max-h-[75dvh] w-full object-contain"
        />
      )}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4">
        <p className="max-w-3xl text-xs leading-6 text-text-muted">
          {screenshot.caption}
        </p>
        <a
          href={screenshot.src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-xs text-accent hover:text-accent-hover"
        >
          {caseStudyCopy.original}
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      </div>
    </dialog>
  );
}
