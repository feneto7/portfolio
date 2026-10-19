import { useRef, useState, type FormEvent } from 'react';
import { contactCopy, emptyContact } from '@/data/contact';
import { sendContact } from '@/services/contact';
import { validateContact } from '@/utils/validation';
import type { ContactErrors, ContactStatus, ContactValues } from '@/types';

export function useContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<ContactStatus>('idle');
  const [feedback, setFeedback] = useState('');
  const inFlight = useRef(false);
  function update(name: keyof ContactValues, value: string) {
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    setStatus('idle');
    setFeedback('');
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus();
      return;
    }
    inFlight.current = true;
    setStatus('sending');
    setFeedback('');
    try {
      setFeedback(await sendContact(values));
      setStatus('success');
      setValues(emptyContact);
    } catch (error: unknown) {
      setStatus('error');
      setFeedback(
        error instanceof Error && error.message === contactCopy.notConfigured
          ? error.message
          : contactCopy.failed,
      );
    } finally {
      inFlight.current = false;
    }
  }
  return { values, errors, status, feedback, update, submit };
}
