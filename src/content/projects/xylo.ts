import { Project } from './types';

/**
 * Xylo project content — extracted verbatim from src/pages/XyloCaseStudy.tsx.
 * Every claim below was tagged in docs/phase0-claim-inventory.md before migration;
 * none of the copy changed as part of this extraction (Phase 1 exit gate: no visual
 * change, content extraction only).
 */
export const xylo: Project = {
  id: 'xylo',
  slug: 'xylo',
  title: 'Xylo',
  tagline: 'On-device document intelligence, from scan to conversation.',
  summary:
    "Xylo scans, summarizes, and lets you chat with any document — entirely on the phone. No document ever leaves the device. It's built on a hybrid Summary + RAG pipeline with dynamic, per-device model selection.",
  status: 'RELEASED', // MEASURED — live on the App Store, confirmed App Store link below
  featured: true,
  question: 'What happens when useful document AI has to operate within the memory and context limits of a phone?',

  technologies: ['Swift', 'SwiftUI', 'llama.cpp', 'Apple FoundationModels', 'Gemma 4 Edge', 'Qwen3', 'NLEmbedding'],
  concepts: ['on-device AI', 'document intelligence', 'retrieval-augmented generation', 'local inference'],
  modalities: ['DOCUMENT', 'IMAGE', 'TEXT'],
  deploymentModels: ['ON_DEVICE'],

  problem: {
    eyebrow: 'The problem',
    title: "A 10-page document doesn't fit in an on-device context window",
    narrative:
      "A typical 10-page document is 3,000–5,000 words (roughly 4,000–7,000 tokens). The on-device models Xylo runs have effective context windows of only 2,048–4,096 tokens depending on the device tier — the full document never fits. Naive truncation loses context; naive RAG-only retrieval loses the document's overall meaning. Xylo needed both.",
  },

  hero: {
    eyebrow: 'Project · Released on the App Store',
    title: 'Xylo: on-device document intelligence, from scan to conversation',
    description:
      "Xylo scans, summarizes, and lets you chat with any document — entirely on the phone. No document ever leaves the device. It's built on a hybrid Summary + RAG pipeline with dynamic, per-device model selection.",
    meta: [
      { label: 'Platform', value: 'iOS (SwiftUI)' },
      { label: 'Role', value: 'Solo engineer' },
      { label: 'Status', value: 'Released · App Store' },
      { label: 'Stack', value: 'llama.cpp, FoundationModels, NLEmbedding' },
    ],
  },

  architecture: {
    eyebrow: 'Architecture',
    title: 'Hybrid Summary + RAG pipeline',
    description:
      'Every document is summarized once at ingestion for global context, then chunked and embedded so follow-up questions retrieve precise, grounded evidence — combined at answer time.',
    pipelines: [
      {
        // MEASURED — confirmed against Xylo/Services/DocumentChat/* source (see phase0-claim-inventory.md §2)
        name: 'Document ingestion (once per document)',
        steps: [
          {
            title: 'OCR / text extraction',
            detail:
              'Apple Vision (camera scans) or native PDF text extraction pulls raw text from the source document.',
          },
          {
            title: 'Gemma / FoundationModels summarization',
            detail:
              'The document is summarized once, producing a global-context summary used for every future question.',
          },
          {
            title: 'Paragraph-aware chunking',
            detail:
              "DocumentChunker splits the text into 150–250 word chunks with 30–50 word overlap, tracking page numbers and section headers.",
          },
          {
            title: 'On-device embedding',
            detail:
              "DocumentEmbedder wraps Apple's NLEmbedding.sentenceEmbedding — zero download, 60+ languages, sub-millisecond vector search for ~24 chunks.",
          },
        ],
      },
      {
        name: 'Question answering (per user question)',
        steps: [
          {
            title: 'Query embedding',
            detail: "The user's question is embedded with the same on-device model used for chunking.",
          },
          {
            // MEASURED — 0.7/0.3 weights confirmed byte-for-byte in DocumentRetriever.swift
            title: 'Hybrid retrieval',
            detail:
              "Final score = 0.7 × semantic cosine similarity + 0.3 × keyword overlap, so exact terms aren't missed even if they're not semantically close.",
          },
          {
            title: 'Chunk re-ranking',
            detail:
              'Adjacent chunks get a proximity boost, over-representation from a single page is penalized, and chunks are presented back in document order for a coherent narrative.',
          },
          {
            title: 'Grounded generation',
            detail:
              'Prompt = [system instruction] + [document summary] + [retrieved chunks] + [chat history] + [question], answered with page citations by the selected backend.',
          },
        ],
      },
    ],
  },

  engineeringDecision: {
    eyebrow: 'Engineering decision',
    title: 'Multi-backend model selection, chosen automatically per device',
    description:
      "Xylo never asks the user to pick a model. It selects the best available backend based on RAM and Apple Intelligence availability, and falls back gracefully if a model can't load.",
    headers: ['Device', 'Apple Intelligence', 'Analysis backend', 'Chat backend', 'Gemma download'],
    rows: [
      ['12 GB+ (iPad Pro M-series)', 'Yes', 'FoundationModels', 'FoundationModels', 'Skipped'],
      ['8 GB (iPhone 15/16)', 'Yes', 'FoundationModels', 'FoundationModels', 'Skipped'],
      ['8 GB', 'No', 'Gemma 4 E2B', 'Gemma', 'Yes (3.46 GB)'],
      ['6 GB (iPhone 14)', 'Never', 'Gemma 4 E2B', 'Qwen3 0.6B', 'Yes (3.46 GB)'],
    ],
    note:
      "On capable devices, Xylo uses Apple's on-device FoundationModels API directly — no model download, no storage footprint. On older or lower-RAM devices, it falls back to a locally bundled Gemma 4 Edge model run through llama.cpp on the Metal GPU, and to a lightweight 500 MB Qwen3 0.6B model for chat on 6 GB devices to stay within thermal and memory budgets.",
  },

  evidence: {
    eyebrow: 'Evidence',
    // Phase 5: heading corrected from "Performance, measured on-device" — Phase 0 found
    // xylo/docs/DOCUMENT_CHAT_ARCHITECTURE.md labels this table "Performance Projections" /
    // "Estimated Time," not a measured benchmark.
    title: 'Pipeline timings — projected, not yet measured',
    description:
      'These four targets come from the design documentation’s performance projections. They have not been measured on a phone yet, so treat them as estimates. A host-Mac check of the first three stages, using the app’s own chunking, embedding and retrieval code, is noted under each figure.',
    // Host check: docs/evidence/xylo-rag-host-check/ (Apple M4 Pro, macOS 26.5.1, -O build of the
    // unmodified DocumentChunker/DocumentEmbedder/DocumentRetriever sources, synthetic 10-page
    // 5,542-word document, 30 iterations, p50). MEASURED on the Mac only; phone figures remain INFERRED.
    stats: [
      {
        value: '<500ms',
        label: 'Chunk a 10-page document',
        epistemicStatus: 'INFERRED',
        provenance:
          'Xylo design documentation, “Performance Projections” table — listed as estimated time, not a logged measurement. Host Mac check: about 3 ms for a synthetic 10-page, 5,542-word document.',
      },
      {
        value: '<2s',
        label: 'Embed ~24 chunks',
        epistemicStatus: 'INFERRED',
        provenance:
          'Same source table, same "Estimated Time" column. Host Mac check: about 32–37 ms per chunk, so roughly 0.8–0.9 s for 24 chunks. The synthetic document produced 61 chunks (1.9–2.3 s), so chunk count depends heavily on document layout.',
      },
      {
        value: '<5ms',
        label: 'Retrieve top-K chunks',
        epistemicStatus: 'INFERRED',
        provenance:
          'Same source table, same "Estimated Time" column. Host Mac check: about 2 ms to rank 61 chunks, plus about 2.5 ms to embed the query.',
      },
      {
        value: '<3s',
        label: 'Query → first token, end to end',
        epistemicStatus: 'INFERRED',
        provenance: 'Same source table, same "Estimated Time" column. Not checked: this stage depends on on-device model inference.',
      },
    ],
    narrative:
      'On a 6 GB device, the RAG layer (chunks, vectors, chat history) adds under 1 MB of memory overhead on top of the ~2.5 GB model — the real bottleneck stays inference itself, which is already managed with thermal throttling, memory pressure guards, and prefix caching so follow-up questions skip re-processing the system prompt and summary.',
  },

  // Restructured from claims already on this page (phase0-claim-inventory.md Xylo #1–#8).
  constraints: [
    {
      title: 'Context window',
      constraint:
        'On-device models have effective context windows of 2,048–4,096 tokens by device tier; a typical 10-page document is roughly 4,000–7,000 tokens.',
      impact: 'The full document never fits. Truncation loses content; retrieval alone loses the document’s overall meaning.',
      response:
        'Summarize once at ingestion for global context, then retrieve chunks per question with 0.7 semantic / 0.3 keyword hybrid scoring.',
      epistemicStatus: 'OBSERVED',
    },
    {
      title: 'Device memory',
      constraint:
        '6 GB devices can’t use Apple FoundationModels and have limited headroom beside a 3.46 GB Gemma download.',
      impact: 'Running the analysis model for chat as well would exceed the device’s thermal and memory budget.',
      response:
        'Backend is selected automatically from RAM and Apple Intelligence availability; 6 GB devices use a ~500 MB Qwen3 0.6B model for chat.',
      epistemicStatus: 'MEASURED',
    },
    {
      title: 'Sustained inference',
      constraint: 'Inference, not retrieval, dominates cost: the RAG layer adds under 1 MB beside a ~2.5 GB model.',
      impact: 'Repeated questions re-process the same system prompt and summary, adding heat and latency.',
      response: 'Thermal throttling, memory-pressure guards, and prefix caching so follow-up questions skip the shared prefix.',
      epistemicStatus: 'OBSERVED',
    },
  ],

  privacy: {
    eyebrow: 'Privacy',
    title: 'Nothing leaves the device',
    description:
      "OCR, embeddings, retrieval, and generation all run on-device via llama.cpp, Apple FoundationModels, and Apple's native frameworks. There is no server in the request path for any core feature — no document text, question, or answer is ever transmitted anywhere.",
  },

  limitations: [
    'The four pipeline timings are projections from design documentation, not logged on-device measurements.',
    'The under-1 MB memory-overhead figure is summed from documented component sizes, not a single logged measurement.',
    'No answer-quality or citation-accuracy evaluation has been published yet.',
  ],

  // Source repo is private — intentionally no GitHub link (it 404s for visitors).
  links: [
    { type: 'APP_STORE', label: 'App Store', url: 'https://apps.apple.com/us/app/xylo-ai/id6771778565' },
    { type: 'WEBSITE', label: 'Website', url: 'https://xylo.makata.ai' },
  ],
  seo: {
    title: 'Xylo — Private on-device document intelligence | Makata AI Edge Lab',
    description:
      'How Xylo runs document summarization and retrieval-augmented chat entirely on the phone: hybrid Summary + RAG, per-device model selection, and the constraints behind each decision.',
  },
};
