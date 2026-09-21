import React from 'react';
import {
  CaseStudyHero,
  SectionHeading,
  PipelineSteps,
  StatGrid,
  DataTable,
  CaseStudyCTA,
} from '../components/CaseStudyUI';

export default function XyloCaseStudy() {
  return (
    <>
      <CaseStudyHero
        eyebrow="Case study — live on the App Store"
        title="Xylo: on-device document intelligence, from scan to conversation"
        description="Xylo scans, summarizes, and lets you chat with any document — entirely on the phone. No document ever leaves the device. It's built on a hybrid Summary + RAG pipeline with dynamic, per-device model selection."
        meta={[
          { label: 'Platform', value: 'iOS (SwiftUI)' },
          { label: 'Role', value: 'Solo engineer' },
          { label: 'Status', value: 'Live on App Store' },
          { label: 'Stack', value: 'llama.cpp, FoundationModels, NLEmbedding' },
        ]}
      />

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
        <SectionHeading
          eyebrow="The problem"
          title="A 10-page document doesn't fit in an on-device context window"
        />
        <p className="text-slate-600 text-lg leading-relaxed">
          A typical 10-page document is 3,000–5,000 words (roughly 4,000–7,000 tokens). The on-device models Xylo runs
          have effective context windows of only 2,048–4,096 tokens depending on the device tier — the full document
          never fits. Naive truncation loses context; naive RAG-only retrieval loses the document&apos;s overall meaning.
          Xylo needed both.
        </p>
      </section>

      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <SectionHeading
            eyebrow="Architecture"
            title="Hybrid Summary + RAG pipeline"
            description="Every document is summarized once at ingestion for global context, then chunked and embedded so follow-up questions retrieve precise, grounded evidence — combined at answer time."
          />

          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-emerald-700 mb-6">Document ingestion (once per document)</h3>
            <PipelineSteps
              steps={[
                { title: 'OCR / text extraction', detail: 'Apple Vision (camera scans) or native PDF text extraction pulls raw text from the source document.' },
                { title: 'Gemma / FoundationModels summarization', detail: 'The document is summarized once, producing a global-context summary used for every future question.' },
                { title: 'Paragraph-aware chunking', detail: 'DocumentChunker splits the text into 150–250 word chunks with 30–50 word overlap, tracking page numbers and section headers.' },
                { title: 'On-device embedding', detail: 'DocumentEmbedder wraps Apple\'s NLEmbedding.sentenceEmbedding — zero download, 60+ languages, sub-millisecond vector search for ~24 chunks.' },
              ]}
            />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-emerald-700 mb-6">Question answering (per user question)</h3>
            <PipelineSteps
              steps={[
                { title: 'Query embedding', detail: 'The user\'s question is embedded with the same on-device model used for chunking.' },
                { title: 'Hybrid retrieval', detail: 'Final score = 0.7 × semantic cosine similarity + 0.3 × keyword overlap, so exact terms aren\'t missed even if they\'re not semantically close.' },
                { title: 'Chunk re-ranking', detail: 'Adjacent chunks get a proximity boost, over-representation from a single page is penalized, and chunks are presented back in document order for a coherent narrative.' },
                { title: 'Grounded generation', detail: 'Prompt = [system instruction] + [document summary] + [retrieved chunks] + [chat history] + [question], answered with page citations by the selected backend.' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">
        <SectionHeading
          eyebrow="Engineering decision"
          title="Multi-backend model selection, chosen automatically per device"
          description="Xylo never asks the user to pick a model. It selects the best available backend based on RAM and Apple Intelligence availability, and falls back gracefully if a model can't load."
        />
        <DataTable
          headers={['Device', 'Apple Intelligence', 'Analysis backend', 'Chat backend', 'Gemma download']}
          rows={[
            ['12 GB+ (iPad Pro M-series)', 'Yes', 'FoundationModels', 'FoundationModels', 'Skipped'],
            ['8 GB (iPhone 15/16)', 'Yes', 'FoundationModels', 'FoundationModels', 'Skipped'],
            ['8 GB', 'No', 'Gemma 4 E2B', 'Gemma', 'Yes (3.46 GB)'],
            ['6 GB (iPhone 14)', 'Never', 'Gemma 4 E2B', 'Qwen3 0.6B', 'Yes (3.46 GB)'],
          ]}
        />
        <p className="text-slate-600 leading-relaxed">
          On capable devices, Xylo uses Apple&apos;s on-device FoundationModels API directly — no model download, no
          storage footprint. On older or lower-RAM devices, it falls back to a locally bundled Gemma 4 Edge model run
          through llama.cpp on the Metal GPU, and to a lightweight 500&nbsp;MB Qwen3 0.6B model for chat on 6&nbsp;GB
          devices to stay within thermal and memory budgets.
        </p>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <SectionHeading
            eyebrow="Results"
            title="Performance, measured on-device"
          />
          <StatGrid
            stats={[
              { value: '<500ms', label: 'Chunk a 10-page document' },
              { value: '<2s', label: 'Embed ~24 chunks' },
              { value: '<5ms', label: 'Retrieve top-K chunks' },
              { value: '<3s', label: 'Query → first token, end to end' },
            ]}
          />
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            On a 6 GB device, the RAG layer (chunks, vectors, chat history) adds under 1&nbsp;MB of memory overhead on
            top of the ~2.5&nbsp;GB model — the real bottleneck stays inference itself, which is already managed with
            thermal throttling, memory pressure guards, and prefix caching so follow-up questions skip re-processing
            the system prompt and summary.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-6">
        <SectionHeading eyebrow="Privacy" title="Nothing leaves the device" />
        <p className="text-slate-600 text-lg leading-relaxed">
          OCR, embeddings, retrieval, and generation all run on-device via llama.cpp, Apple FoundationModels, and
          Apple&apos;s native frameworks. There is no server in the request path for any core feature — no document text,
          question, or answer is ever transmitted anywhere.
        </p>
      </section>

      <CaseStudyCTA
        appName="Xylo"
        appStoreHref="https://apps.apple.com/us/app/xylo-ai/id6771778565"
        siteHref="https://xylo.makata.ai"
        sourceHref="https://github.com/ralph-mattew/xylo"
      />
    </>
  );
}
