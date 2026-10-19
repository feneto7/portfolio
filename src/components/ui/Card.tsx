import type { HTMLAttributes } from 'react';

export function Card({
  className = '',
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={`border-t-[3px] border-card-edge bg-bg-card p-7 ${className}`}
      {...props}
    />
  );
}
