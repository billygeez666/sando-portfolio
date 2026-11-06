import { SITE, INTRO, HERO_PILLARS, HERO_FACTS } from '../data/content.js';
import { ButtonLink, Chip, Reveal } from './ui.jsx';

function Node({ title, sub, accent = false }) {
  return (
    <div className={`rounded-xl border px-3 py-2.5 ${accent ? 'border-accent/60 bg-accent/10' : 'border-line bg-surface/70'}`}>
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="text-xs text-muted">{sub}</p>
    </div>
  );
}

function Diagram() {
  return (
    <figure className="card p-5" aria-label="Illustrative architecture of the systems I build">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-live">
        <span aria-hidden="true" className="pulse-dot mr-2 inline-block h-1.5 w-1.5 rounded-full bg-live align-middle" />
        Connected workflow
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        <div className="space-y-3">
          <Node title="Phone call" sub="Twilio number" />
          <Node title="Form / API event" sub="Webhook" />
        </div>
        <span aria-hidden="true" className="hidden text-accent-soft sm:block">→</span>
        <Node title="n8n workflow" sub="Logic & routing" accent />
        <span aria-hidden="true" className="hidden text-accent-soft sm:block">→</span>
        <div className="space-y-3">
          <Node title="Voice agent" sub="Bland AI" />
          <Node title="Email" sub="Gmail API" />
          <Node title="Supabase" sub="Postgres · Edge Fn" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Node title="Enquiry logged" sub="Structured lead" />
        <Node title="Run log" sub="Execution audit" />
      </div>
      <figcaption className="mt-4 text-xs text-muted">Illustrative architecture of the systems I build</figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto w-full max-w-6xl px-4 pb-12 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs text-ink">
            <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-live" />
            Open to freelance, contract and permanent roles · Remote or hybrid · UK-based
          </p>
          <h1 id="hero-title" className="text-5xl font-bold leading-[1.05] sm:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-4 font-display text-lg font-medium text-accent-soft sm:text-xl">
            <span className="sr-only">{SITE.headline}</span>
            {SITE.headlineParts.map((part, i) => (
              <span key={part} aria-hidden="true">
                {i > 0 && <span className="mx-2 text-line">|</span>}
                {part}
              </span>
            ))}
          </p>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-ink">
            {INTRO.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core tools and areas">
            {HERO_FACTS.map((f) => (
              <Chip key={f}>{f}</Chip>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#contact">Hire Me</ButtonLink>
            <ButtonLink href={SITE.cvUrl} variant="secondary" download>
              Download CV (PDF)
            </ButtonLink>
            <ButtonLink href="#projects" variant="secondary">
              See the projects
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Diagram />
        </Reveal>
      </div>

      <Reveal as="ul" className="mt-14 grid gap-4 sm:grid-cols-3" delay={80} aria-label="What I do">
        {HERO_PILLARS.map((s) => (
          <li key={s.title} className="card p-5">
            <p className="font-display text-2xl font-semibold text-white">{s.title}</p>
            <p className="mt-2 text-sm text-ink">{s.text}</p>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
