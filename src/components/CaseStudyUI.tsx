import React from 'react';
import { Button } from './Layout';

export const CaseStudyHero = ({
  eyebrow,
  title,
  description,
  meta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  meta: { label: string; value: string }[];
}) => (
  <section className="relative bg-slate-900 text-white overflow-hidden pt-20">
    <div className="absolute inset-0 bg-woven-pattern opacity-10"></div>
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-24 space-y-8">
      <span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-300">
        {eyebrow}
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">{title}</h1>
      <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">{description}</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
        {meta.map((item) => (
          <div key={item.label} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{item.label}</div>
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
      <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
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
          <div className="w-9 h-9 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
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

export const StatGrid = ({ stats }: { stats: { label: string; value: string }[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {stats.map((stat) => (
      <div key={stat.label} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="text-2xl font-extrabold text-emerald-700">{stat.value}</div>
        <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
      </div>
    ))}
  </div>
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

export const CaseStudyCTA = ({
  appName,
  appStoreHref,
  siteHref,
  sourceHref,
}: {
  appName: string;
  appStoreHref: string;
  siteHref: string;
  sourceHref: string;
}) => (
  <section className="max-w-5xl mx-auto px-6 py-24">
    <div className="bg-emerald-950 rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden border border-emerald-900">
      <div className="absolute inset-0 bg-woven-pattern opacity-10"></div>
      <div className="relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
          Want an on-device AI product like {appName}?
        </h2>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">
          I design and ship privacy-first, on-device AI systems end to end — from architecture and model selection to a production App Store release. Let&apos;s talk about your project.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Button variant="primary" href="mailto:ralph@makata.ai" className="px-8 py-4 text-lg">
            Start a conversation
          </Button>
          <Button variant="secondary" href={appStoreHref} className="text-sm">
            App Store
          </Button>
          <Button variant="secondary" href={siteHref} className="text-sm">
            Live site
          </Button>
          <Button variant="secondary" href={sourceHref} className="text-sm">
            Source
          </Button>
        </div>
      </div>
    </div>
  </section>
);
