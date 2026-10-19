import type { PropsWithChildren } from 'react';

export function Tag({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex rounded border border-line px-3 py-1 text-xs text-text-muted">
      {children}
    </span>
  );
}
