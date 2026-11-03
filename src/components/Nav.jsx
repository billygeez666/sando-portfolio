import { useState } from 'react';
import { ButtonLink } from './ui.jsx';

const LINKS = [
  ['About', '#about'],
  ['Expertise', '#expertise'],
  ['Projects', '#projects'],
  ['Tools', '#tools'],
  ['Roles', '#roles'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="font-display text-sm font-semibold text-white">
            Sando Aleksanders
          </a>

          <ul className="hidden items-center gap-6 text-sm lg:flex">
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-muted transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ButtonLink href="#contact" className="!min-h-9 !px-4 !py-1.5">
              Hire Me
            </ButtonLink>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <ul id="mobile-menu" className="border-t border-line bg-bg px-4 py-3 lg:hidden">
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={close} className="block rounded-md px-2 py-3 text-sm text-ink hover:bg-surface">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}
