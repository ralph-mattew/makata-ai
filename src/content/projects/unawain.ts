import { Project } from './types';

/**
 * Unawain project content — extracted verbatim from src/pages/UnawainCaseStudy.tsx.
 * Every claim below was tagged in docs/phase0-claim-inventory.md before migration;
 * none of the copy changed as part of this extraction (Phase 1 exit gate: no visual
 * change, content extraction only).
 */
export const unawain: Project = {
  id: 'unawain',
  slug: 'unawain',
  title: 'Unawain',
  tagline: 'Offline document intelligence for Filipino languages.',
  summary:
    'Unawain scans and summarizes documents entirely offline, then translates the result into regional Philippine dialects — while preserving formatting and protecting sensitive entities like phone numbers and amounts.',
  status: 'RELEASED', // MEASURED — live on the App Store, confirmed App Store link below
  featured: true,
  question:
    'What does it take to summarize and translate sensitive documents into regional Philippine languages on a 6 GB phone, with no server involved?',

  technologies: ['Swift', 'SwiftUI', 'llama.cpp', 'Gemma 4 Edge', 'NLLB-200 (CoreML)', 'NaturalLanguage'],
  concepts: ['on-device AI', 'document intelligence', 'machine translation', 'local inference'],
  modalities: ['DOCUMENT', 'IMAGE', 'AUDIO', 'TEXT'],
  deploymentModels: ['ON_DEVICE'],

  problem: {
    eyebrow: 'The problem',
    title: 'Document understanding for Filipino users, without sending anything to a server',
    narrative:
      'Confidential documents — contracts, billing notices, government forms — are common in the Philippines, but many users are more comfortable reading a summary in their regional dialect: Cebuano, Ilocano, Pangasinan, or Waray. Unawain needed to summarize and translate accurately, entirely on-device, on phones with as little as 6 GB of RAM, without a translation API and without any document ever reaching a server.',
  },

  hero: {
    eyebrow: 'Project · Released on the App Store',
    title: 'Unawain: offline document intelligence for Filipino languages',
    description:
      'Unawain scans and summarizes documents entirely offline, then translates the result into regional Philippine dialects — while preserving formatting and protecting sensitive entities like phone numbers and amounts.',
    meta: [
      { label: 'Platform', value: 'iOS (SwiftUI)' },
      { label: 'Role', value: 'Solo engineer' },
      { label: 'Status', value: 'Released · App Store' },
      { label: 'Stack', value: 'llama.cpp, NLLB-200 (CoreML), NaturalLanguage' },
    ],
  },

  architecture: {
    eyebrow: 'Architecture',
    title: 'Two-phase analysis pipeline: summarize, then translate',
    pipelines: [
      {
        name: 'Phase 1 — Summarization',
        steps: [
          {
            title: 'Capture & normalize',
            detail:
              'Vision OCR (camera scans) or Speech transcription (audio recordings) produces raw text, which is normalized and saved as a draft so nothing is lost on cancellation or app kill.',
          },
          {
            // MEASURED — pre-analysis logged at 904ms and 47ms in real end-to-end runs (both under 1s)
            title: 'Pre-analysis (NLP, no LLM)',
            detail:
              'NLTagger extracts keywords, entities, sentiment and document type in under a second, entirely without a language model.',
          },
          {
            title: 'Gemma 4 Edge summarization',
            detail:
              'Gemma (E2B or E4B, chosen by device RAM) generates a structured, templated summary directly in Filipino via llama.cpp on the Metal GPU.',
          },
          {
            title: 'Extractive fallback',
            detail:
              'If Gemma is unavailable or fails, an IDF-weighted extractive summarizer selects 10–16 key sentences (scaled by device RAM) so the app never dead-ends without a model.',
          },
        ],
      },
      {
        name: 'Phase 2 — Structured translation',
        steps: [
          {
            title: 'Skip when unnecessary',
            detail:
              'English and Filipino targets are skipped entirely — Gemma already generated in the target language, avoiding a needless translation pass.',
          },
          {
            title: 'NLLB-200 for regional dialects',
            detail:
              'For Cebuano, Ilocano, Pangasinan, and Waray, a distilled 600M NLLB-200 model (CoreML, on-device) translates Filipino output line by line.',
          },
          {
            title: 'Structure-preserving translation',
            detail:
              'Markdown headers, bullets, and checklists are parsed, translated per-segment, and reassembled — so "## Buod" becomes a correctly formatted heading in the target dialect.',
          },
          {
            title: 'Entity protection',
            detail:
              'Phone numbers, amounts, emails, and URLs are detected and routed around translation via passthrough segments, so a peso amount is never corrupted by machine translation.',
          },
        ],
      },
    ],
  },

  engineeringDecision: {
    eyebrow: 'Engineering decision',
    title: 'Device-tiered models with thermal-aware degradation',
    description:
      'Unawain adapts context size, GPU layer count, and prompt length in real time based on device RAM and thermal state — so it stays responsive under load instead of crashing or stalling.',
    // Verified against the Unawain app source (ralph-mattew/unawain @ b0124e6,
    // Services/Real/QwenNLLBAnalysisService.swift + GGUFModelManager.swift): RAM thresholds are
    // 7.5 GB and 11.5 GB of physical memory; all six context values match the code.
    headers: ['Device RAM', 'Model', 'Context (normal)', 'Context (throttled)'],
    rows: [
      ['6 GB', 'Gemma 4 E2B (3.46 GB)', '2,048 tokens', '2,048 tokens'],
      ['8 GB', 'Gemma 4 E2B (3.46 GB)', '2,500 tokens', '2,048 tokens'],
      ['12 GB+', 'Gemma 4 E4B (5.41 GB)', '4,096 tokens', '4,096 tokens'],
    ],
    note:
      'When the device is thermally throttled, Unawain automatically switches to compact prompt templates with shorter output sections, so a full four-section summary still completes within a reduced token budget instead of failing outright. On 12 GB+ devices the 4,096-token context also requires at least 3 GB of memory available when the summary starts; otherwise it drops to 2,500. If the context still can’t be allocated, the app retries once at half size.',
  },

  evidence: {
    eyebrow: 'Evidence',
    title: 'Logged end-to-end runs',
    description:
      'Totals from two complete pipeline runs recorded in the project’s pipeline documentation — capture through translated summary.',
    stats: [
      {
        // MEASURED — matches docs/PIPELINE_ARCHITECTURE.md "End-to-End Example: Contract PDF → Ilocano
        // Summary (Normal)": 36.7s Gemma inference + 11.8s NLLB translation + other steps = "total: 64.4s"
        value: '64.4s',
        label: 'Contract PDF → Ilocano summary (normal)',
        epistemicStatus: 'MEASURED',
        provenance:
          'Unawain pipeline documentation — logged end-to-end run on a 6 GB iOS device (5,960 MB reported), nominal thermal state, 2,048-token context.',
      },
      {
        value: '73.9s',
        label: 'Billing notice → Ilocano summary (throttled)',
        epistemicStatus: 'MEASURED',
        // Device tier not recorded in the log. Its 352-token generation cap matches the code's
        // 8 GB throttled branch (6 GB caps at 350), so it may not be the same device as the 64.4s run.
        provenance:
          'Unawain pipeline documentation — logged end-to-end run, critical thermal state, 2,048-token context. Device tier not recorded.',
      },
      {
        value: '4/4',
        label: 'Section headers correctly translated via dictionary',
        epistemicStatus: 'MEASURED',
        provenance: '“Dictionary hits: 4/4 headers intercepted” appears in both logged runs.',
      },
      {
        value: '5',
        label: 'Philippine languages supported (Filipino + 4 regional)',
        epistemicStatus: 'MEASURED',
        provenance: 'Filipino, Cebuano, Ilocano, Pangasinan, Waray — defined in the app’s language configuration.',
      },
    ],
    narrative:
      'In the throttled example, the pipeline still protected two peso amounts from mistranslation via entity passthrough while translating 9 of 15 content chunks — the rest were preserved as-is because they were classified as untranslatable entities.',
  },

  // Restructured from claims already on this page (phase0-claim-inventory.md Unawain #4, #5, #10
  // and homepage #5 for thermal branching).
  constraints: [
    {
      title: 'Device memory',
      constraint: 'Target phones start at 6 GB of RAM, and the Gemma 4 E2B model alone is a 3.46 GB download.',
      impact: 'Larger models and longer contexts don’t fit on every supported device.',
      response: 'Model and context size are chosen by device RAM: E2B up to 8 GB, E4B on 12 GB+ devices.',
      epistemicStatus: 'OBSERVED',
    },
    {
      title: 'Thermal state',
      constraint: 'Sustained on-device inference drives the phone into thermal throttling.',
      impact: 'A reduced token budget risks truncated or failed summaries.',
      response:
        'Switch to compact prompt templates with shorter sections. The logged throttled run still completed a full summary in 73.9 s.',
      epistemicStatus: 'MEASURED',
    },
    {
      title: 'Model availability',
      constraint: 'The Gemma model may not be downloaded yet, or may fail to load.',
      impact: 'Without a fallback, the app would dead-end with no summary at all.',
      response: 'An IDF-weighted extractive summarizer runs instead, selecting key sentences scaled by device RAM.',
      epistemicStatus: 'OBSERVED',
    },
    {
      title: 'Translation fidelity',
      constraint: 'Machine translation can corrupt amounts, phone numbers, emails, and URLs.',
      impact: 'A mistranslated peso amount in a billing notice is worse than no translation.',
      response:
        'Entities are detected and passed through untranslated. In the throttled run, two peso amounts were protected and 6 of 15 chunks passed through as-is.',
      epistemicStatus: 'MEASURED',
    },
    {
      title: 'Compute placement',
      constraint:
        'The published NLLB packages store int8 weights but compute in fp32, and the Neural Engine doesn’t run fp32 math.',
      impact:
        'In benchmark 001 (host Mac), Core ML placed 0 of 440 encoder operations on the Neural Engine; every call ran on the CPU at about 38–42 ms. Loading on the GPU path crashed.',
      response:
        'Not solved yet. The next experiments measure the same packages on iPhone, then test an fp16 conversion against the current packages for both speed and translation quality.',
      epistemicStatus: 'MEASURED',
    },
  ],

  privacy: {
    eyebrow: 'Privacy',
    title: 'No accounts, no analytics, no network calls',
    description:
      "Per Unawain's published privacy policy: no personal information, usage analytics, crash reports, or device identifiers are collected. Document scanning uses Apple's Vision framework, summarization uses a locally downloaded Gemma model, and translation uses a locally stored NLLB-200 model — nothing is transmitted to any server, cloud service, or third party.",
  },

  limitations: [
    'The two logged runs use different documents under different thermal states, and the throttled run’s device tier wasn’t recorded, so they are not a controlled normal-vs-throttled comparison.',
    'The Core ML model packages are published openly. Their first benchmark ran on a host Mac, not an iPhone; on-device latency and translation quality are still pending.',
  ],

  // App source repo is private — link the public model-artifact repo instead.
  links: [
    { type: 'APP_STORE', label: 'App Store', url: 'https://apps.apple.com/us/app/unawain/id6763873149' },
    { type: 'WEBSITE', label: 'Website', url: 'https://unawain.makata.ai' },
    { type: 'GITHUB', label: 'Open models', url: 'https://github.com/ralph-mattew/unawain-public-models' },
  ],
  seo: {
    title: 'Unawain — Local AI for Filipino-language documents | Makata AI Edge Lab',
    description:
      'How Unawain summarizes documents offline and translates them into Cebuano, Ilocano, Pangasinan, or Waray on the phone — device-tiered models, thermal-aware prompts, and entity protection.',
  },
};
