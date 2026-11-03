import { TOOLS } from '../data/content.js';
import { Chip, Reveal, Section } from './ui.jsx';

export default function Tools() {
  return (
    <Section id="tools" eyebrow="Tools & technologies" title="What I work with" intro="Grouped by the job each tool does. Items marked “concepts” are familiarity, not production use.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((g, i) => (
          <Reveal key={g.group} as="section" delay={(i % 3) * 70} className="card p-5" aria-label={g.group}>
            <h3 className="mb-3 text-sm font-semibold text-white">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
