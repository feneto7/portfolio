import { siteConfig } from '@/data/siteConfig';
import { contactCopy, contactLimits } from '@/data/contact';
import type { ContactValues } from '@/types';

export async function sendContact(values: ContactValues): Promise<string> {
  if (siteConfig.contact.endpoint) {
    const response = await fetch(siteConfig.contact.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(values),
      signal: AbortSignal.timeout(contactLimits.timeoutMs),
    });
    if (!response.ok) throw new Error(contactCopy.failed);
    return contactCopy.sent;
  }
  if (!siteConfig.email) throw new Error(contactCopy.notConfigured);
  const subject = encodeURIComponent(
    `${contactCopy.subject} — ${values.name.trim()}`,
  );
  const body = encodeURIComponent(
    `${values.name.trim()} <${values.email.trim()}>\n\n${values.message.trim()}`,
  );
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  return contactCopy.mailOpened;
}
