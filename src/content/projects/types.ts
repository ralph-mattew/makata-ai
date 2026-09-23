/**
 * Content schema for MAKATA.ai projects.
 *
 * Adapted from redesign/artifact07_contentschemaspecs.md — deliberately trimmed to
 * what Xylo/Unawain content actually needs today. Entities that don't exist yet for
 * either project (Demo, Experiment, Failure, related-work graph, Lesson) are left out
 * entirely rather than stubbed with placeholder data, per execution-plan.md's
 * "no premature infrastructure" rule. Add them when a project actually has that content.
 *
 * Every quantitative claim carries an `EpistemicStatus` per execution-plan.md's
 * evidence-first rule — see docs/phase0-claim-inventory.md for how each value below
 * was tagged.
 */

export type ProjectStatus =
  | 'CONCEPT'
  | 'PROTOTYPE'
  | 'EXPERIMENTAL'
  | 'ACTIVE'
  | 'BETA'
  | 'RELEASED'
  | 'ARCHIVED';

export type Modality =
  | 'TEXT'
  | 'DOCUMENT'
  | 'IMAGE'
  | 'AUDIO'
  | 'VIDEO'
  | 'VOICE'
  | 'MULTIMODAL'
  | 'STRUCTURED_DATA';

export type DeploymentModel = 'ON_DEVICE' | 'LOCAL' | 'CLOUD' | 'HYBRID' | 'EDGE' | 'PRECOMPUTED';

/** MEASURED = directly confirmed against a logged run or shipped source constant.
 *  OBSERVED = true and consistent with source, but not a single precise logged number.
 *  INFERRED = plausible, cross-referenced, but the source itself labels it an estimate/projection.
 *  HYPOTHESIS = asserted with no supporting evidence found. */
export type EpistemicStatus = 'MEASURED' | 'OBSERVED' | 'INFERRED' | 'HYPOTHESIS';

export type LinkType =
  | 'GITHUB'
  | 'LINKEDIN'
  | 'APP_STORE'
  | 'WEBSITE'
  | 'PAPER'
  | 'DEMO'
  | 'DOCUMENTATION'
  | 'OTHER';

export interface ProjectLink {
  type: LinkType;
  label: string;
  url: string;
}

export interface ProjectHero {
  eyebrow: string;
  title: string;
  description: string;
  meta: { label: string; value: string }[];
}

/**
 * Maps to artifact07's `problem` entity (§13), flattened with the rendered
 * SectionHeading copy so the same content drives both the page and (later) any
 * project-index summary. Optional deeper fields are left unset rather than invented
 * when the case study prose doesn't already state them.
 */
export interface ProblemSection {
  eyebrow: string;
  title: string;
  narrative: string;
  affectedUsers?: string;
  existingApproach?: string;
}

/** One stage of a described pipeline. Maps 1:1 to the existing <PipelineSteps> step shape. */
export interface PipelineStep {
  title: string;
  detail: string;
}

/** A named, ordered pipeline (e.g. "Document ingestion", "Question answering"). */
export interface PipelineStage {
  name: string;
  steps: PipelineStep[];
}

export interface ProjectArchitecture {
  eyebrow: string;
  title: string;
  description?: string;
  pipelines: PipelineStage[];
}

/**
 * Ad hoc extension beyond artifact07's base schema — a device/backend comparison
 * table. Maps 1:1 to the existing <DataTable> component. Kept separate from
 * `Constraint` (artifact07 §29) because today's content reads as a decision table,
 * not a list of individual constraints; revisit if/when constraints need their own
 * page-level treatment.
 */
export interface EngineeringDecision {
  eyebrow: string;
  title: string;
  description?: string;
  headers: string[];
  rows: string[][];
  note?: string;
}

/**
 * Trimmed adaptation of artifact07's Benchmark entity (§31) — only the fields the
 * current <StatGrid> needs plus the epistemic tag. Expand with device/methodology/date
 * if a future phase needs to render that detail.
 */
export interface Benchmark {
  value: string;
  label: string;
  epistemicStatus: EpistemicStatus;
  /** Why this status was assigned — cite the source. Not yet rendered (Phase 1 keeps
   *  existing copy verbatim); this is structured metadata for Phase 5+ to use when the
   *  component split makes room to disclose it (e.g. "Estimated" vs "Measured" badges). */
  provenance?: string;
}

export interface EvidenceSection {
  eyebrow: string;
  title: string;
  /** Short framing shown under the title — used to state conditions or caveats up front. */
  description?: string;
  stats: Benchmark[];
  narrative?: string;
}

/**
 * artifact07 §29 Constraint, rendered as artifact10's "Constraint → Impact → Response".
 * Every entry restructures claims already tagged in docs/phase0-claim-inventory.md —
 * no new claims are introduced here. `epistemicStatus` is the weakest tag among the
 * claims the entry relies on.
 */
export interface Constraint {
  title: string;
  constraint: string;
  impact: string;
  response: string;
  epistemicStatus: EpistemicStatus;
}

export interface PrivacySection {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ProjectSEO {
  title: string;
  description: string;
}

export interface Project {
  // --- Identity (artifact07 §6-9) ---
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  status: ProjectStatus;
  featured: boolean;
  /** The engineering question the project is a testbed for (artifact10 §6 "hook"). */
  question: string;

  // --- Positioning (artifact07 §10, §12, §15-17) ---
  technologies: string[];
  concepts: string[];
  modalities: Modality[];
  deploymentModels: DeploymentModel[];
  problem: ProblemSection;

  // --- Rendered page content (drives the current case-study page 1:1) ---
  hero: ProjectHero;
  architecture: ProjectArchitecture;
  engineeringDecision: EngineeringDecision;
  evidence: EvidenceSection;
  constraints: Constraint[];
  privacy: PrivacySection;
  /** Known gaps in the evidence and open questions — facts about what hasn't been
   *  established, not speculation (artifact01 "Open Question", labcharter §8). */
  limitations: string[];

  // --- External (artifact07 §49-50) ---
  /** Public links only — xylo/unawain source repos are private, so no source links. */
  links: ProjectLink[];
  seo: ProjectSEO;

  // NOTE: no `demo`, `relatedWork`, `experiments`, or `failures` fields yet —
  // none of that content exists for this project. Add it when it's real (see Phase 7/8
  // gates in execution-plan.md), not before.
}
