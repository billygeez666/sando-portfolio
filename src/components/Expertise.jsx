import { EXPERTISE, PROJECTS } from '../data/content.js';
import { Icon, Reveal, Section } from './ui.jsx';

const titleOf = (id) => PROJECTS.find((p) => p.id === id)?.title ?? id;

export default function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Core expertise"
      title="Six areas, each split into what I have demonstrated and what I am still developing"
      intro="“Demonstrated” means I built and operated it in a project below. “Working knowledge” means training or limited hands-on use, and I label it as such."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {EXPERTISE.map((area, i) => (
          <Reveal key={area.id} as="article" delay={(i % 2) * 80} className="card flex flex-col p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-accent-soft">
                <Icon name={area.icon} />
              </span>
              <h3 className="text-lg font-semibold leading-snug">{area.title}</h3>
            </div>
            <p className="mb-4 text-sm text-muted">{area.summary}</p>

            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-live">Demonstrated</h4>
            <ul className="mb-4 space-y-1.5 text-sm">
              {area.demonstrated.map((d) => (
                <li key={d} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-live" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-tested">Working knowledge</h4>
            <ul className="mb-4 flex flex-wrap gap-2 text-xs">
              {area.working.map((w) => (
                <li key={w} className="rounded-md border border-dashed border-line px-2 py-1 text-muted">
                  {w}
                </li>
              ))}
            </ul>

            {area.note && <p className="mb-4 text-xs italic text-muted">{area.note}</p>}

            <p className="mt-auto border-t border-line pt-3 text-xs text-muted">
              Evidence:{' '}
              {area.projects.map((id, idx) => (
                <span key={id}>
                  {idx > 0 && ', '}
                  <a href={`#project-${id}`} className="text-accent-soft underline-offset-2 hover:underline">
                    {titleOf(id).split(':')[0]}
                  </a>
                </span>
              ))}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
