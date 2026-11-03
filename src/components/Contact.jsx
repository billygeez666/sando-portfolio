import { CONTACT, SITE } from '../data/content.js';
import { ButtonLink, Reveal, Section } from './ui.jsx';

export default function Contact() {
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(SITE.emailSubject)}`;
  return (
    <>
      <Section id="contact" eyebrow="Contact" title={CONTACT.heading} intro={CONTACT.text}>
        <Reveal className="card p-6 sm:p-8">
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={mailto}>Email me</ButtonLink>
            <ButtonLink href={SITE.phoneHref} variant="secondary">
              Call {SITE.phone}
            </ButtonLink>
            <ButtonLink href={SITE.cvUrl} variant="secondary" download>
              Download CV (PDF)
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-muted">
            {SITE.email} · {SITE.location}
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <a className="text-accent-soft hover:underline" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="text-accent-soft hover:underline" href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </Reveal>
      </Section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Sando Aleksanders · {SITE.location}</p>
          <p>
            Founder of{' '}
            <a className="text-accent-soft hover:underline" href={SITE.company} target="_blank" rel="noopener noreferrer">
              NONSTOP AI
            </a>{' '}
            (trading name)
          </p>
        </div>
      </footer>
    </>
  );
}
