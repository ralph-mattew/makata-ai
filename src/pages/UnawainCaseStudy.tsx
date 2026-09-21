import React from 'react';
import {
  CaseStudyHero,
  SectionHeading,
  PipelineSteps,
  StatGrid,
  DataTable,
  CaseStudyCTA,
} from '../components/CaseStudyUI';

export default function UnawainCaseStudy() {
  return (
    <>
      <CaseStudyHero
        eyebrow="Case study — live on the App Store"
        title="Unawain: offline document intelligence for Filipino languages"
        description="Unawain scans and summarizes documents entirely offline, then translates the result into regional Philippine dialects — while preserving formatting and protecting sensitive entities like phone numbers and amounts."
        meta={[
          { label: 'Platform', value: 'iOS (SwiftUI)' },
          { label: 'Role', value: 'Solo engineer' },
          { label: 'Status', value: 'Live on App Store' },
          { label: 'Stack', value: 'llama.cpp, NLLB-200 (CoreML), NaturalLanguage' },
        ]}
      />

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
        <SectionHeading
          eyebrow="The problem"
          title="Document understanding for Filipino users, without sending anything to a server"
        />
        <p className="text-slate-600 text-lg leading-relaxed">
          Confidential documents — contracts, billing notices, government forms — are common in the Philippines, but
          many users are more comfortable reading a summary in their regional dialect: Cebuano, Ilocano, Pangasinan, or
          Waray. Unawain needed to summarize and translate accurately, entirely on-device, on phones with as little as
          6&nbsp;GB of RAM, without a translation API and without any document ever reaching a server.
        </p>
      </section>

      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <SectionHeading
            eyebrow="Architecture"
            title="Two-phase analysis pipeline: summarize, then translate"
          />

          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-emerald-700 mb-6">Phase 1 — Summarization</h3>
            <PipelineSteps
              steps={[
                { title: 'Capture & normalize', detail: 'Vision OCR (camera scans) or Speech transcription (audio recordings) produces raw text, which is normalized and saved as a draft so nothing is lost on cancellation or app kill.' },
                { title: 'Pre-analysis (NLP, no LLM)', detail: 'NLTagger extracts keywords, entities, sentiment and document type in under a second, entirely without a language model.' },
                { title: 'Gemma 4 Edge summarization', detail: 'Gemma (E2B or E4B, chosen by device RAM) generates a structured, templated summary directly in Filipino via llama.cpp on the Metal GPU.' },
                { title: 'Extractive fallback', detail: 'If Gemma is unavailable or fails, an IDF-weighted extractive summarizer selects 10–16 key sentences (scaled by device RAM) so the app never dead-ends without a model.' },
              ]}
            />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-emerald-700 mb-6">Phase 2 — Structured translation</h3>
            <PipelineSteps
              steps={[
                { title: 'Skip when unnecessary', detail: 'English and Filipino targets are skipped entirely — Gemma already generated in the target language, avoiding a needless translation pass.' },
                { title: 'NLLB-200 for regional dialects', detail: 'For Cebuano, Ilocano, Pangasinan, and Waray, a distilled 600M NLLB-200 model (CoreML, on-device) translates Filipino output line by line.' },
                { title: 'Structure-preserving translation', detail: 'Markdown headers, bullets, and checklists are parsed, translated per-segment, and reassembled — so "## Buod" becomes a correctly formatted heading in the target dialect.' },
                { title: 'Entity protection', detail: 'Phone numbers, amounts, emails, and URLs are detected and routed around translation via passthrough segments, so a peso amount is never corrupted by machine translation.' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">
        <SectionHeading
          eyebrow="Engineering decision"
          title="Device-tiered models with thermal-aware degradation"
          description="Unawain adapts context size, GPU layer count, and prompt length in real time based on device RAM and thermal state — so it stays responsive under load instead of crashing or stalling."
        />
        <DataTable
          headers={['Device RAM', 'Model', 'Context (normal)', 'Context (throttled)']}
          rows={[
            ['6 GB', 'Gemma 4 E2B (3.46 GB)', '2,048 tokens', '2,048 tokens'],
            ['8 GB', 'Gemma 4 E2B (3.46 GB)', '2,500 tokens', '2,048 tokens'],
            ['12 GB+', 'Gemma 4 E4B (5.41 GB)', '4,096 tokens', '4,096 tokens'],
          ]}
        />
        <p className="text-slate-600 leading-relaxed">
          When the device is thermally throttled, Unawain automatically switches to compact prompt templates with
          shorter output sections, so a full four-section summary still completes within a reduced token budget
          instead of failing outright.
        </p>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <SectionHeading eyebrow="Results" title="Real end-to-end runs, measured on-device" />
          <StatGrid
            stats={[
              { value: '64.4s', label: 'Contract PDF → Ilocano summary (normal)' },
              { value: '73.9s', label: 'Billing notice → Ilocano summary (throttled)' },
              { value: '4/4', label: 'Section headers correctly translated via dictionary' },
              { value: '5', label: 'Filipino languages supported' },
            ]}
          />
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            In the throttled example, the pipeline still protected two peso amounts from mistranslation via entity
            passthrough while translating 9 of 15 content chunks — the rest were preserved as-is because they were
            classified as untranslatable entities.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-6">
        <SectionHeading eyebrow="Privacy" title="No accounts, no analytics, no network calls" />
        <p className="text-slate-600 text-lg leading-relaxed">
          Per Unawain&apos;s published privacy policy: no personal information, usage analytics, crash reports, or device
          identifiers are collected. Document scanning uses Apple&apos;s Vision framework, summarization uses a locally
          downloaded Gemma model, and translation uses a locally stored NLLB-200 model — nothing is transmitted to any
          server, cloud service, or third party.
        </p>
      </section>

      <CaseStudyCTA
        appName="Unawain"
        appStoreHref="https://apps.apple.com/us/app/unawain/id6763873149"
        siteHref="https://unawain.makata.ai"
        sourceHref="https://github.com/ralph-mattew/unawain"
      />
    </>
  );
}
