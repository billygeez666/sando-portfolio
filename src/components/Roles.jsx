import { ROLES } from '../data/content.js';
import { Chip, Reveal, Section } from './ui.jsx';

export default function Roles() {
  return (
    <Section id="roles" eyebrow="Professional opportunities" title="Roles I can take on" intro={ROLES.intro}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {ROLES.items.map((r, i) => (
          <Reveal key={r.title} as="li" delay={(i % 2) * 60} className="card p-4">
            <p className="font-semibold text-white">{r.title}</p>
            <p className="text-sm text-muted">{r.fit}</p>
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-soft">Arrangements</p>
        <ul className="flex flex-wrap gap-2">
          {ROLES.arrangements.map((a) => (
            <Chip key={a}>{a}</Chip>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
