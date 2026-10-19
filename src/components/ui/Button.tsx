import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

const base =
  'inline-flex min-h-12 items-center justify-center gap-3 rounded px-6 text-[11px] font-bold uppercase tracking-[.14em] transition-colors disabled:cursor-not-allowed disabled:opacity-60';
const variants = {
  primary: 'bg-accent text-ink hover:bg-accent-hover',
  outline:
    'border border-line text-text-primary hover:border-accent hover:text-accent',
};
type Variant = keyof typeof variants;
export function Button({
  className = '',
  variant = 'primary',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
export function ButtonLink({
  className = '',
  variant = 'primary',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
