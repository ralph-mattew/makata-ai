import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Layout';
import type { Benchmark, Constraint, EpistemicStatus, ProjectLink } from '../content/projects/types';

/** Plain-language definitions shown in badge tooltips and the homepage legend. */
export const epistemicDefinitions: Record<EpistemicStatus, string> = {
  MEASURED: 'Confirmed against a logged run or a constant in shipped source.',
  OBSERVED: 'Consistent with source and logs, but not a single precise measurement.',
  INFERRED: 'Derived or estimated — the source itself calls it a projection.',
  HYPOTHESIS: 'Proposed, not yet tested.',
};

const epistemicStyles: Record<EpistemicStatus, string> = {
  MEASURED: 'text-measured bg-measured/10 border-measured/30',
  OBSERVED: 'text-observed bg-observed/10 border-observed/30',
  INFERRED: 'text-inferred bg-inferred/10 border-inferred/30',
  HYPOTHESIS: 'text-hypothesis bg-hypothesis/10 border-hypothesis/40 border-dashed',
};

export const EpistemicBadge = ({ status }: { status: EpistemicStatus }) => (
  <span
    title={epistemicDefinitions[status]}
    className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-micro font-semibold uppercase tracking-eyebrow whitespace-nowrap ${epistemicStyles[status]}`}
  >
    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-current"></span>
    {status}
  </span>
);

export const ProjectHero = ({
  eyebrow,
  title,
  description,
  question,
  meta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  question: string;
  meta: { label: string; value: string }[];
}) => (
  <section className="relative bg-slate-900 text-white overflow-hidden pt-20">
    <div className="absolute inset-0 bg-woven-pattern opacity-10"></div>
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-24 space-y-8">
      <span className="block font-mono text-xs uppercase tracking-eyebrow text-slate-400">{eyebrow}</span>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">{title}</h1>
      <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">{description}</p>

      <div className="border-l-2 border-slate-600 pl-5 max-w-3xl">
        <div className="font-mono text-micro uppercase tracking-eyebrow text-slate-400">Engineering question</div>
        <p className="text-slate-100 text-lg leading-relaxed mt-1">{question}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
        {meta.map((item) => (
          <div key={item.label} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
            <div className="text-micro font-bold uppercase tracking-eyebrow text-slate-400">{item.label}</div>
            <div className="text-sm font-semibold text-white mt-1">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SectionHeading = ({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) => (
  <div className="max-w-3xl space-y-3">
    {eyebrow && (
      <span className="block font-mono text-xs uppercase tracking-eyebrow text-slate-500">
        {eyebrow}
      </span>
    )}
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
    {description && <p className="text-slate-600 text-lg leading-relaxed">{description}</p>}
  </div>
);

export const PipelineSteps = ({ steps }: { steps: { title: string; detail: string }[] }) => (
  <div className="space-y-0">
    {steps.map((step, idx) => (
      <div key={step.title} className="flex gap-5">
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-slate-900 text-white text-sm font-mono font-bold flex items-center justify-center shrink-0">
            {idx + 1}
          </div>
          {idx < steps.length - 1 && <div className="w-px flex-1 bg-slate-200 my-1"></div>}
        </div>
        <div className={`pb-8 ${idx === steps.length - 1 ? 'pb-0' : ''}`}>
          <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
          <p className="text-slate-600 leading-relaxed mt-1">{step.detail}</p>
        </div>
      </div>
    ))}
  </div>
);

/** Stats with their epistemic status and provenance visible — never a bare number. */
export const EvidencePanel = ({ stats }: { stats: Benchmark[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {stats.map((stat) => (
      <div key={stat.label} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-3">
        <div className="self-start"><EpistemicBadge status={stat.epistemicStatus} /></div>
        <div>
          <div className="text-3xl font-extrabold tracking-tight text-ink font-mono">{stat.value}</div>
          <div className="text-slate-600 text-sm mt-1">{stat.label}</div>
        </div>
        {stat.provenance && (
          <p className="mt-auto pt-3 border-t border-slate-100 text-xs text-slate-500 leading-relaxed [overflow-wrap:anywhere]">
            <span className="font-semibold text-slate-600">Source: </span>
            {stat.provenance}
          </p>
        )}
      </div>
    ))}
  </div>
);

/** artifact10 "Where the system gets difficult": Constraint → Impact → Response. */
export const ConstraintList = ({ constraints }: { constraints: Constraint[] }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {constraints.map((c) => (
      <div key={c.title} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
          <EpistemicBadge status={c.epistemicStatus} />
        </div>
        <dl className="space-y-3 text-sm">
          {[
            ['Constraint', c.constraint],
            ['Impact', c.impact],
            ['Response', c.response],
          ].map(([label, text]) => (
            <div key={label} className="grid grid-cols-[6rem_1fr] gap-3">
              <dt className="font-mono text-micro uppercase tracking-eyebrow text-slate-500 pt-0.5">{label}</dt>
              <dd className="text-slate-700 leading-relaxed">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    ))}
  </div>
);

export const LimitationsList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 max-w-3xl">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
        <span aria-hidden="true" className="font-mono text-slate-400 select-none">—</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const DataTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto rounded-2xl border border-slate-200">
    <table className="w-full text-sm text-left">
      <thead className="bg-slate-50 border-b border-slate-200">
        <tr>
          {headers.map((h) => (
            <th key={h} className="px-4 py-3 font-bold text-slate-700 whitespace-nowrap">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ridx) => (
          <tr key={ridx} className="border-b border-slate-100 last:border-0">
            {row.map((cell, cidx) => (
              <td key={cidx} className="px-4 py-3 text-slate-600 whitespace-nowrap">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/** Closing block: public project links + a collaboration (not services) invitation. */
export const ProjectConnect = ({ name, links }: { name: string; links: ProjectLink[] }) => (
  <section className="max-w-5xl mx-auto px-6 py-24">
    <div className="bg-brand rounded-3xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden border border-emerald-900">
      <div className="absolute inset-0 bg-woven-pattern opacity-10"></div>
      <div className="relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
          Questions about {name}, or results to compare?
        </h2>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">
          If you&apos;re working under similar constraints — or want to reproduce, challenge, or extend anything on this page — get in touch.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Button variant="primary" href="mailto:edgelab@makata.ai" className="px-8 py-4 text-lg">
            Email the lab
          </Button>
          {links.map((link) => (
            <Button key={link.url} variant="secondary" href={link.url} className="text-sm">
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-10 text-center">
      <Link to="/#work" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
        ← All work
      </Link>
    </div>
  </section>
);
