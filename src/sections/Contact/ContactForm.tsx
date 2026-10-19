import { ArrowUpRight, LoaderCircle } from 'lucide-react';
import { contactCopy } from '@/data/contact';
import { useContactForm } from '@/hooks/useContactForm';
import { Button } from '@/components/ui/Button';
import { ContactField } from './ContactField';
import type { ContactValues } from '@/types';

export function ContactForm() {
  const { values, errors, status, feedback, update, submit } = useContactForm();
  return (
    <form
      onSubmit={submit}
      noValidate
      className="border-t-[3px] border-card-edge bg-bg-card p-6 sm:p-8"
      aria-busy={status === 'sending'}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {(Object.keys(contactCopy.fields) as (keyof ContactValues)[]).map(
          (name) => (
            <ContactField
              key={name}
              name={name}
              value={values[name]}
              error={errors[name]}
              disabled={status === 'sending'}
              onChange={update}
            />
          ),
        )}
      </div>
      <Button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 w-full sm:w-auto"
      >
        {status === 'sending' ? contactCopy.sending : contactCopy.submit}
        {status === 'sending' ? (
          <LoaderCircle
            size={16}
            className="motion-safe:animate-spin"
            aria-hidden="true"
          />
        ) : (
          <ArrowUpRight size={16} aria-hidden="true" />
        )}
      </Button>
      <p className="mt-4 text-[11px] leading-5 text-text-muted">
        {contactCopy.note}
      </p>
      <div aria-live="polite" aria-atomic="true">
        {feedback && (
          <p
            className={`mt-5 border-l-2 pl-4 text-sm leading-6 ${status === 'success' ? 'border-status-success text-status-success' : 'border-status-error text-status-error'}`}
          >
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}
