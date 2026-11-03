import { EDUCATION } from '../data/content.js';
import { Chip, Reveal, Section } from './ui.jsx';

export default function Education() {
  const exp = EDUCATION.experience;
  return (
    <Section id="education" eyebrow="Education & training" title="Learning that supports the work">
      <div className="grid gap-5 md:grid-cols-2">
        {EDUCATION.items.map((e) => (
          <Reveal key={e.title} as="article" className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-soft">{e.period}</p>
            <h3 className="mt-2 text-xl font-semibold">{e.title}</h3>
            <p className="text-sm text-muted">{e.subtitle}</p>
            <p className="mb-2 mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Relevant studies</p>
            <ul className="flex flex-wrap gap-2">
              {e.studies.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </ul>
            <p className="mt-5 text-xs italic text-muted">{EDUCATION.note}</p>
          </Reveal>
        ))}

        <Reveal as="article" delay={90} className="card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-soft">{exp.period}</p>
          <h3 className="mt-2 text-xl font-semibold">{exp.title}</h3>
          <p className="text-sm text-muted">{exp.subtitle}</p>
          <p className="mt-5 text-xs italic text-muted">
            Practical project experience, shown separately from formal training. It is not employment history.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
