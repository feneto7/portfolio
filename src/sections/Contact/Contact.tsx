import { Mail, Phone, BriefcaseBusiness } from 'lucide-react';
import { contactCopy } from '@/data/contact';
import { sectionCopy, siteConfig } from '@/data/siteConfig';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SocialLinks } from '@/components/ui/SocialIcon';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section className="py-4">
      <SectionTitle {...sectionCopy.contact} number="05" />
      <div className="grid items-start gap-12 xl:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className="max-w-sm text-3xl font-light leading-snug sm:text-4xl">
            {contactCopy.title}
          </h2>
          <p className="mb-10 mt-5 max-w-md leading-7 text-text-muted">
            {contactCopy.description}
          </p>
          <div className="space-y-7">
            <div className="flex gap-4">
              <Mail
                size={23}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-accent"
                aria-hidden="true"
              />
              <div>
                <h3 className="mb-1 text-xs font-semibold">
                  {contactCopy.emailLabel}
                </h3>
                {siteConfig.email ? (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all text-sm text-text-muted hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                ) : (
                  <p className="text-sm text-text-muted">
                    {contactCopy.emailPending}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <Phone
                size={23}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-accent"
                aria-hidden="true"
              />
              <div>
                <h3 className="mb-1 text-xs font-semibold">
                  {contactCopy.phoneLabel}
                </h3>
                <a
                  href={siteConfig.phone.href}
                  className="text-sm text-text-muted hover:text-accent"
                >
                  {siteConfig.phone.label}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <BriefcaseBusiness
                size={23}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-accent"
                aria-hidden="true"
              />
              <div>
                <h3 className="mb-1 text-xs font-semibold">
                  {contactCopy.availabilityLabel}
                </h3>
                <p className="text-sm text-text-muted">
                  {contactCopy.availability}
                </p>
              </div>
            </div>
          </div>
          <p className="mb-4 mt-10 text-[10px] uppercase tracking-[.15em] text-text-muted">
            {contactCopy.networks}
          </p>
          <SocialLinks />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
