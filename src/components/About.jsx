import { ABOUT } from '../data/content.js';
import { Reveal, Section } from './ui.jsx';

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title={ABOUT.heading}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed sm:text-lg">
          {ABOUT.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="text-sm text-muted">{ABOUT.location}</p>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent-soft">How I work</h3>
          <ol className="space-y-3">
            {ABOUT.process.map((step) => (
              <li key={step.n} className="card flex gap-4 p-4">
                <span className="font-display text-sm font-semibold text-accent-soft">{step.n}</span>
                <div>
                  <p className="font-semibold text-white">{step.title}</p>
                  <p className="text-sm text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
