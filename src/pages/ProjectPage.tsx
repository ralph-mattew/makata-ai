import React from 'react';
import {
  ProjectHero,
  SectionHeading,
  PipelineSteps,
  EvidencePanel,
  ConstraintList,
  LimitationsList,
  DataTable,
  ProjectConnect,
} from '../components/CaseStudyUI';
import type { Project } from '../content/projects/types';
import { usePageMeta } from '../lib/usePageMeta';

/**
 * Shared project page (Phases 5–6). Section order follows redesign artifact10:
 * Hero → Why it exists → How it works → Engineering decision → What was measured →
 * Where it gets difficult → Privacy → Limitations → Connect. Sections render only from
 * content that exists in src/content/projects — nothing is stubbed.
 */
export default function ProjectPage({ project: p }: { project: Project }) {
  usePageMeta({ title: p.seo.title, description: p.seo.description, path: `/work/${p.slug}` });

  return (
    <>
      <ProjectHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        description={p.hero.description}
        question={p.question}
        meta={p.hero.meta}
      />

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
        <SectionHeading eyebrow={p.problem.eyebrow} title={p.problem.title} />
        <p className="text-slate-600 text-lg leading-relaxed">{p.problem.narrative}</p>
      </section>

      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <SectionHeading
            eyebrow={p.architecture.eyebrow}
            title={p.architecture.title}
            description={p.architecture.description}
          />
          {p.architecture.pipelines.map((pipeline) => (
            <div key={pipeline.name} className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="font-mono text-xs uppercase tracking-eyebrow text-slate-500 mb-6">{pipeline.name}</h3>
              <PipelineSteps steps={pipeline.steps} />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">
        <SectionHeading
          eyebrow={p.engineeringDecision.eyebrow}
          title={p.engineeringDecision.title}
          description={p.engineeringDecision.description}
        />
        <DataTable headers={p.engineeringDecision.headers} rows={p.engineeringDecision.rows} />
        {p.engineeringDecision.note && <p className="text-slate-600 leading-relaxed">{p.engineeringDecision.note}</p>}
      </section>

      <section id="evidence" className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <SectionHeading eyebrow={p.evidence.eyebrow} title={p.evidence.title} description={p.evidence.description} />
          <EvidencePanel stats={p.evidence.stats} />
          {p.evidence.narrative && <p className="text-slate-600 leading-relaxed max-w-3xl">{p.evidence.narrative}</p>}
        </div>
      </section>

      {p.constraints.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">
          <SectionHeading
            eyebrow="Constraints"
            title="Where the system gets difficult"
            description="Each constraint, what it breaks, and how the system responds."
          />
          <ConstraintList constraints={p.constraints} />
        </section>
      )}

      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <SectionHeading eyebrow={p.privacy.eyebrow} title={p.privacy.title} />
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">{p.privacy.description}</p>
        </div>
      </section>

      {p.limitations.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
          <SectionHeading
            eyebrow="Limitations"
            title="What this page doesn’t establish yet"
            description="Known gaps in the evidence above, stated so they can be closed rather than glossed over."
          />
          <LimitationsList items={p.limitations} />
        </section>
      )}

      <ProjectConnect name={p.title} links={p.links} />
    </>
  );
}
