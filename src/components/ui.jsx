import { useEffect, useRef, useState } from 'react';
import { STATUS } from '../data/content.js';

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);

    // Fail-safe: content already on screen at load must never stay hidden,
    // even if the observer callback is delayed or never fires.
    let timer;
    if (el.getBoundingClientRect().top < window.innerHeight) {
      timer = window.setTimeout(() => setShown(true), 600);
    }
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? 'is-shown' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Section({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 ${className}`}>
      <Reveal className="mb-10 max-w-3xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent-soft">{eyebrow}</p>
        )}
        <h2 id={`${id}-title`} className="text-3xl font-semibold sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
      </Reveal>
      {children}
    </section>
  );
}

const STATUS_STYLE = {
  live: 'text-live border-live/40 bg-live/10',
  internal: 'text-internal border-internal/40 bg-internal/10',
  tested: 'text-tested border-tested/40 bg-tested/10',
  prototype: 'text-prototype border-prototype/40 bg-prototype/10',
};

export function StatusBadge({ status }) {
  const s = STATUS[status];
  return (
    <span
      title={s.hint}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${STATUS_STYLE[status]}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full bg-current ${status === 'live' ? 'pulse-dot' : ''}`} />
      {s.label}
    </span>
  );
}

export function Chip({ children }) {
  return (
    <li className="rounded-md border border-line bg-surface/60 px-2.5 py-1 text-xs font-medium text-ink">{children}</li>
  );
}

export function ButtonLink({ href, variant = 'primary', children, external = false, download = false, ...rest }) {
  const base =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-[#4a7fff]'
      : 'border border-line text-white hover:border-accent-soft hover:bg-surface';
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: true } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

const ICONS = {
  voice: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  browser: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  video: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m10 9 5 3-5 3z" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
};

export function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {ICONS[name]}
    </svg>
  );
}
