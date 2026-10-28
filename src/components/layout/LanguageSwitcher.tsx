import {
  changeLanguage,
  language,
  preference,
  type LanguagePreference,
} from '@/i18n/locale';

export function LanguageSwitcher() {
  return (
    <label className="flex items-center gap-2 text-[11px] text-text-muted">
      <span>{language === 'pt' ? 'Idioma' : 'Language'}</span>
      <select
        value={preference}
        onChange={(event) =>
          changeLanguage(event.target.value as LanguagePreference)
        }
        className="min-h-11 min-w-0 rounded border border-line bg-bg-sidebar px-2 text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
      >
        <option value="auto">
          {language === 'pt' ? 'Automático' : 'Automatic'}
        </option>
        <option value="pt" lang="pt-BR">
          Português
        </option>
        <option value="en" lang="en">
          English
        </option>
      </select>
    </label>
  );
}
