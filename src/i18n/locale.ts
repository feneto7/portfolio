import { english } from './en';

export type Language = 'pt' | 'en';
export type LanguagePreference = Language | 'auto';
const STORAGE_KEY = 'felipe-portfolio-language';

export function resolveLanguage(
  preference: string | null,
  languages: readonly string[],
): Language {
  if (preference === 'pt' || preference === 'en') return preference;
  for (const language of languages) {
    const base = language.toLowerCase().split(/[-_]/)[0];
    if (base === 'pt' || base === 'en') return base;
  }
  return 'en';
}

function readPreference(): LanguagePreference {
  if (typeof window !== 'undefined') {
    const requested = new URLSearchParams(window.location.search).get('lang');
    if (requested === 'pt' || requested === 'en' || requested === 'auto')
      return requested;
  }
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'pt' || value === 'en' ? value : 'auto';
  } catch {
    return 'auto';
  }
}

export const preference = readPreference();
// The build runs without a browser; its static HTML stays in Portuguese.
export const language: Language =
  typeof window === 'undefined'
    ? 'pt'
    : resolveLanguage(
        preference,
        navigator.languages?.length
          ? navigator.languages
          : [navigator.language],
      );
export const locale = language === 'pt' ? 'pt-BR' : 'en-US';

export function changeLanguage(value: LanguagePreference) {
  try {
    if (value === 'auto') localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // The URL also preserves the choice when browser storage is disabled.
  }
  const url = new URL(window.location.href);
  url.searchParams.set('lang', value);
  window.location.assign(url.href);
}

/** Translate copy only; keep identifiers, URLs, React icons and original assets intact. */
export function localize<T>(value: T, target: Language = language): T {
  if (target === 'pt') return value;
  if (typeof value === 'string')
    return (Object.hasOwn(english, value) ? english[value] : value) as T;
  if (Array.isArray(value))
    return value.map((item: unknown) => localize(item, target)) as T;
  if (
    value &&
    typeof value === 'object' &&
    Object.getPrototypeOf(value) === Object.prototype &&
    !('$$typeof' in value)
  ) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, target)]),
    ) as T;
  }
  return value;
}
