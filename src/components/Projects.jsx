import { PROJECTS, SITE, STATUS } from '../data/content.js';
import { Chip, Reveal, Section, StatusBadge } from './ui.jsx';

const assetUrl = (path) => (path.startsWith('http') ? path : SITE.assetBase + path);

function Results({ project }) {
  return (
    <div>
      <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-soft">Verified results</h4>
      <dl className="grid gap-3 sm:grid-cols-2">
        {project.results.map((r) => (
          <div key={r.label} className="rounded-xl border border-line bg-bg/60 p-4">
            <dt className="sr-only">{r.label}</dt>
            <dd>
              <span className="block font-display text-2xl font-semibold text-white">{r.value}</span>
              <span className="text-sm text-muted">{r.label}</span>
            </dd>
          </div>
        ))}
      </dl>
      {project.resultsNote && <p className="mt-3 text-xs italic text-muted">{project.resultsNote}</p>}
    </div>
  );
}

function Detail({ project }) {
  return (
    <div className="space-y-5 text-sm leading-relaxed">
      <div>
        <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-soft">The problem</h4>
        <p>{project.problem}</p>
      </div>
      <div>
        <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-soft">My role</h4>
        <p>{project.role}</p>
      </div>
      <div>
        <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-soft">Solution implemented</h4>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-line">
          {project.solution.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-soft">Tools used</h4>
        <ul className="flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </ul>
      </div>
      <Results project={project} />
    </div>
  );
}

function Visuals({ visuals }) {
  if (!visuals?.length) return null;
  return (
    <div className={`grid gap-4 ${visuals.length > 1 ? 'sm:grid-cols-2' : ''}`}>
      {visuals.map((v) => (
        <figure key={v.path} className="overflow-hidden rounded-xl border border-line bg-bg">
          <a href={assetUrl(v.path)} target="_blank" rel="noopener noreferrer" aria-label={`Open full size: ${v.alt}`}>
            <img src={assetUrl(v.path)} alt={v.alt} loading="lazy" decoding="async" className="h-auto w-full" />
          </a>
          <figcaption className="border-t border-line px-3 py-2 text-xs text-muted">{v.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function FeaturedCard({ project }) {
  return (
    <Reveal as="article" id={`project-${project.id}`} className="card scroll-mt-24 p-6 sm:p-8">
      <header className="mb-6 flex flex-wrap items-center gap-3">
        <StatusBadge status={project.status} />
        <span className="text-xs text-muted">{project.kind}</span>
      </header>
      <h3 className="mb-6 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
      <div className={`grid gap-8 ${project.visuals?.length ? 'lg:grid-cols-[1.1fr_1fr]' : ''}`}>
        <Detail project={project} />
        <Visuals visuals={project.visuals} />
      </div>
    </Reveal>
  );
}

function CompactCard({ project }) {
  const [first] = project.results;
  return (
    <Reveal as="article" id={`project-${project.id}`} className="card scroll-mt-24 flex flex-col p-5">
      <header className="mb-3 flex flex-wrap items-center gap-2">
        <StatusBadge status={project.status} />
        <span className="text-xs text-muted">{project.kind}</span>
      </header>
      <h3 className="mb-2 text-lg font-semibold leading-snug">{project.title}</h3>
      <p className="mb-4 text-sm text-muted">{project.problem}</p>
      <p className="mb-4 rounded-lg border border-line bg-bg/60 px-3 py-2 text-sm">
        <span className="font-semibold text-white">{first.value}.</span> <span className="text-muted">{first.label}</span>
      </p>
      <details className="group mt-auto">
        <summary className="cursor-pointer list-none text-sm font-semibold text-accent-soft hover:text-white">
          <span className="group-open:hidden">View evidence and detail +</span>
          <span className="hidden group-open:inline">Hide detail −</span>
        </summary>
        <div className="mt-4 border-t border-line pt-4">
          <Detail project={project} />
        </div>
      </details>
    </Reveal>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.tier === 'featured');
  const supporting = PROJECTS.filter((p) => p.tier === 'supporting');

  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Proof of work, with an honest status on every project"
      intro="Figures come from internal records, with the limits stated. Nothing here is a claim of client revenue, sales or customer numbers."
    >
      <ul className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted" aria-label="Status key">
        {Object.entries(STATUS).map(([key, s]) => (
          <li key={key} className="flex items-center gap-2">
            <StatusBadge status={key} />
            <span>{s.hint}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-8">
        {featured.map((p) => (
          <FeaturedCard key={p.id} project={p} />
        ))}
      </div>

      <Reveal as="h3" className="mb-6 mt-16 text-xl font-semibold">
        Supporting projects
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {supporting.map((p) => (
          <CompactCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}
