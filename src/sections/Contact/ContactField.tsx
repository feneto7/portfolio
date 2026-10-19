import { contactCopy, contactLimits } from '@/data/contact';
import type { ContactValues } from '@/types';

interface ContactFieldProps {
  name: keyof ContactValues;
  value: string;
  error?: string;
  disabled: boolean;
  onChange: (name: keyof ContactValues, value: string) => void;
}
export function ContactField({
  name,
  value,
  error,
  disabled,
  onChange,
}: ContactFieldProps) {
  const field = contactCopy.fields[name];
  const inputProps = {
    id: `contact-${name}`,
    name,
    value,
    required: true,
    disabled,
    placeholder: field.placeholder,
    autoComplete: field.autoComplete,
    maxLength: contactLimits[name].max,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `error-${name}` : undefined,
    className: `w-full rounded border bg-bg-base px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/80 transition-colors focus:border-accent disabled:opacity-60 ${error ? 'border-status-error' : 'border-card-edge'}`,
  };
  return (
    <div className={name === 'message' ? 'sm:col-span-2' : ''}>
      <label
        htmlFor={inputProps.id}
        className="mb-2 block text-xs font-semibold"
      >
        {field.label}
      </label>
      {name === 'message' ? (
        <textarea
          {...inputProps}
          rows={6}
          className={`${inputProps.className} min-h-40 resize-y`}
          onChange={(event) => onChange(name, event.target.value)}
        />
      ) : (
        <input
          {...inputProps}
          type={name === 'email' ? 'email' : 'text'}
          onChange={(event) => onChange(name, event.target.value)}
        />
      )}
      {error && (
        <p id={`error-${name}`} className="mt-2 text-xs text-status-error">
          {error}
        </p>
      )}
    </div>
  );
}
