import { contactCopy, contactLimits } from '@/data/contact';
import type { ContactErrors, ContactValues } from '@/types';

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (values.name.trim().length < contactLimits.name.min)
    errors.name = contactCopy.errors.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = contactCopy.errors.email;
  if (values.message.trim().length < contactLimits.message.min)
    errors.message = contactCopy.errors.message;
  for (const key of Object.keys(values) as (keyof ContactValues)[]) {
    if (values[key].length > contactLimits[key].max)
      errors[key] = contactCopy.errors.tooLong;
  }
  return errors;
}
