# MAKATA.ai — Master Specification Set v2

**Revision:** v2
**Date:** September 2026
**Basis:** Original 21-artifact design specification + repository audit of `ralph-mattew/makata-ai`

---

# Artifact 1 — Product / Identity Foundation v2

## Core identity

**MAKATA.ai is an AI / Edge AI engineering laboratory documenting things built, tested, measured, broken, and investigated.**

Primary positioning:

> **AI / EDGE AI ENGINEERING LABORATORY**

Supporting statement:

> **I build and investigate AI systems where constraints matter.**

MAKATA.ai is not primarily:

- an agency website
- a SaaS landing page
- a generic AI portfolio
- a consultancy brochure
- an academic research portal
- a collection of AI-generated articles

It is a **working engineering archive and demonstration surface**.

## New repository-grounded constraint

The current repository does **not yet implement the full laboratory concept**.

Current implementation is:

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Cloudflare static SPA deployment
- two dedicated project case studies
- homepage with hardcoded content

Therefore:

**Current state ≠ target state.**

The documentation must never imply that Lab, Notes, DCS, benchmarks, experiments, or a knowledge graph already exist in the website.

---

# Artifact 2 — Product Strategy & Experience Principles v2

## Strategic objective

Turn MAKATA.ai from a **portfolio with technical case studies** into a **credible engineering evidence system**.

The progression is:

**Portfolio → Engineering Archive → Interactive Laboratory**

But this progression should happen incrementally.

## Primary strategic principle

> **Do not build the laboratory infrastructure before proving that the engineering evidence deserves it.**

The current Xylo and Unawain pages are therefore valuable because they provide the first real content substrate.

## Priority hierarchy

1. Credible technical evidence
2. Excellent project presentation
3. Interactive demonstrations
4. Experiments and field notes
5. Cross-project relationships
6. Broader laboratory infrastructure

Not:

1. CMS
2. database
3. knowledge graph
4. elaborate visualization
5. fancy animations

## New strategic finding

The repository contains substantially less infrastructure than the previous target architecture assumed.

Therefore the redesign should be **a structural evolution of a small application**, not a migration of an already-complex platform.

---

# Artifact 3 — User Experience Specification v2

## UX north star

> **Show → Let me try → Explain → Prove → Reveal → Explore**

This remains valid.

However, the current implementation only partially supports it.

### Current state

The repository currently supports:

**Show → Explain**

through:

- homepage project cards
- case-study pages
- technical pipeline descriptions
- architecture/model tables
- performance claims

It does not yet adequately support:

**Try → Prove → Reveal → Explore**

because there is currently no MAKATA-hosted interactive demo infrastructure.

## New UX requirement

Every future interactive experience must have a clear distinction between:

- static explanation
- measured evidence
- interactive visualization
- live computation
- external product experience

The visitor must never mistake a visual simulation or illustrative terminal for actual runtime telemetry.

## Homepage journey

New preferred journey:

**Identity → Selected Work → Evidence → Try → Engineering Constraints → Experiments → Connect**

Rather than the current:

**Hero → Benefits → Insights → Products → Case Studies → Services → About → CTA**

The latter is too conventional and service-oriented for the laboratory positioning.

---

# Artifact 4 — UI & Design System v2

## Design north star

> **An engineer's laboratory for exploring AI systems.**

Remain restrained, technical and evidence-oriented.

## Repository finding

The current UI uses:

- Inter
- emerald/slate palette
- rounded cards
- shadows
- Tailwind utility classes
- woven SVG background
- dark technical panels
- pill badges

This is functional but currently resembles a polished SaaS/consulting site more than an engineering laboratory.

## Design migration

### Keep

- Tailwind
- Inter initially
- emerald accent
- dark technical surfaces
- responsive grid
- reusable cards
- existing case-study primitives

### Refactor

- excessive rounded cards
- excessive pills
- generic benefit cards
- generic CTA panels
- generic “service” presentation
- decorative terminal UI

### Replace

The homepage's fake terminal-style system visualization should become an **actual evidence surface** or a clearly labeled illustrative system diagram.

For example:

**SYSTEM STATUS**

`Xylo — iOS`

`Inference: On device`

`Retrieval: Local`

`Network dependency: None for core pipeline`

`Evidence: Case study`

Only display values that can actually be supported.

---

# Artifact 5 — Technical Architecture Specification v2

## Current architecture

```text
Browser
  ↓
React SPA
  ↓
React Router
  ↓
Home
 ├── XyloCaseStudy
 └── UnawainCaseStudy
```

Shared UI:

```text
Layout
 ├── Navigation
 ├── Footer
 ├── Button
 └── ScrollManager

CaseStudyUI
 ├── CaseStudyHero
 ├── SectionHeading
 ├── PipelineSteps
 ├── StatGrid
 ├── DataTable
 └── CaseStudyCTA
```

Infrastructure:

```text
Vite
 ↓
dist/
 ↓
Cloudflare static asset deployment
```

Cloudflare currently uses SPA fallback through Wrangler's:

`not_found_handling: "single-page-application"`

## Target architecture

```text
Presentation
      ↓
Content
      ↓
Domain Components
      ↓
Interactive/Demo Adapters
      ↓
Optional Services
      ↓
Infrastructure
```

## Critical rule

The target architecture must remain compatible with the current small implementation.

Do not introduce:

- database
- CMS
- GraphQL
- state-management framework
- server framework
- Docker
- Kubernetes
- complex backend

unless actual requirements emerge.

---

# Artifact 6 — Codebase Audit & Migration Specification v2

## Audit conclusion

### KEEP

- React
- TypeScript
- Vite
- React Router
- Tailwind
- Cloudflare static deployment
- current Xylo/Unawain route model
- existing reusable case-study components

### REFACTOR

- homepage structure
- navigation
- case-study composition
- content organization
- SEO metadata architecture
- technical evidence presentation
- CTA architecture
- shared design tokens

### REPLACE

- hardcoded homepage project arrays
- generic benefits section
- generic services section
- decorative terminal telemetry
- overly generic CaseStudyCTA

### MERGE

Current `Products` and `CaseStudy` concepts should likely become one coherent **Selected Work** system.

### DELETE / ARCHIVE

Legacy `archive/` material should not automatically become part of the new site.

### UNKNOWN

The following cannot yet be treated as authoritative without additional validation:

- historical research claims
- archived testimonials
- “50 pioneer testers”
- enterprise partner claims
- old products
- old research blueprints
- old performance claims
- any content not traceable to current evidence

## Rewrite decision

**Partial structural rebuild.**

Not a full rewrite.

The current codebase is small enough that incremental refactoring is possible, but the content architecture and homepage information architecture need substantial restructuring.

---

# Artifact 7 — Content Model & Schema Specification v2

The content model remains:

```text
Project
Experiment
Benchmark
Field Note
Failure
Idea
Technology
Concept
```

## New implementation requirement

The current site has **no actual content layer**.

Therefore introduce one before adding many routes.

Initial implementation:

```text
src/content/
  projects/
    xylo.ts
    unawain.ts
    dcs.ts
  experiments/
  benchmarks/
  notes/
```

or equivalent structured TypeScript/JSON/Markdown representation.

Do not introduce a CMS.

## Important distinction

The content model is a **future source of truth**, while the current hardcoded JSX is the current implementation.

Migration must move information gradually.

---

# Artifact 8 — Demo & Interactive System Specification v2

## New repository reality

There is currently **no MAKATA-hosted demo service** in the repository.

Therefore the first demo should not be described as an existing capability.

## Demo maturity ladder

### Level 0

External live product

Example:

Xylo App Store / live site.

### Level 1

Static technical evidence

Architecture + measured result.

### Level 2

Interactive visualization

Visitor manipulates:

- device tier
- model backend
- context size
- retrieval parameters

without actually invoking an AI model.

### Level 3

Precomputed demonstration

Known inputs → recorded outputs.

### Level 4

Live computation

Only after security, cost, latency and reliability are understood.

## New P0

Build **one excellent low-risk interactive evidence experience** before attempting a live AI endpoint.

---

# Artifact 9 — Information Architecture & Page Content v2

## Target navigation

```text
Work
Lab
Notes
About
Connect
```

## Current navigation

```text
Projects
Xylo case study
Unawain case study
Roadmap
About
Work with me
```

## Migration

Replace the current navigation rather than simply adding more links.

## Target routes

```text
/
 /work
 /work/xylo
 /work/unawain
 /work/dcs

 /lab
 /lab/experiments
 /lab/benchmarks
 /lab/[experiment]

 /notes
 /notes/[slug]

 /about
 /connect
```

## Important

Do not create empty pages merely to satisfy the information architecture.

A route should exist only when there is meaningful content behind it.

---

# Artifact 10 — Homepage Content Architecture v2

## Current homepage problem

The current homepage has:

- Hero
- Benefits
- Insights
- Products
- Case Studies
- Services
- About
- CTA

This creates a hybrid:

**portfolio + agency + SaaS landing page**

rather than a laboratory.

## New homepage

```text
Hero
 ↓
Selected Work
 ↓
Live / Interactive Evidence
 ↓
Engineering Themes
 ↓
Recent Experiments
 ↓
Field Notes
 ↓
About
 ↓
Connect
```

## Hero

Recommended:

> **AI / EDGE AI ENGINEERING LABORATORY**

> **I build and investigate AI systems where constraints matter.**

Supporting copy should mention:

- shipped systems
- experiments
- edge/on-device constraints
- evidence

without claiming capabilities that aren't demonstrated on MAKATA.ai.

---

# Artifact 11 — Visual & Wireframe Specification v2

## Homepage wireframe

```text
┌──────────────────────────────────────┐
│ MAKATA.ai     Work Lab Notes About  │
├──────────────────────────────────────┤
│                                      │
│ AI / EDGE AI ENGINEERING LABORATORY  │
│                                      │
│ I build and investigate AI systems   │
│ where constraints matter.            │
│                                      │
│ [Explore the work] [Enter the lab]   │
│                                      │
├──────────────────────────────────────┤
│ SELECTED WORK                        │
│                                      │
│ Xylo        Unawain       DCS        │
│                                      │
├──────────────────────────────────────┤
│ LIVE / INTERACTIVE EVIDENCE           │
│                                      │
│ [actual evidence/demo]               │
│                                      │
├──────────────────────────────────────┤
│ ENGINEERING QUESTIONS                 │
│                                      │
│ Edge AI • RAG • Local inference ...  │
├──────────────────────────────────────┤
│ EXPERIMENTS / FIELD NOTES             │
└──────────────────────────────────────┘
```

## New visual rule

Technical diagrams and evidence should replace decorative “AI terminal” imagery whenever possible.

---

# Artifact 12 — Component & Design-System Implementation v2

## Current reusable components

```text
Layout
Button
Logo
Navigation
Footer
ScrollManager

CaseStudyHero
SectionHeading
PipelineSteps
StatGrid
DataTable
CaseStudyCTA
```

## Keep

These establish a useful primitive base.

## Next components

```text
ProjectCard
ProjectHero
ProjectMeta
DemoPanel
EvidencePanel
BenchmarkPanel
ArchitectureDiagram
ConstraintBlock
FailureBlock
WhatChanged
ExperimentCard
FieldNoteCard
RelatedWork
```

## New rule

Do not extract every repeated JSX fragment into a component.

Extract only when:

- semantic meaning exists
- repetition exists
- behavior exists
- multiple projects need the same structure

---

# Artifact 13 — Codebase Audit & Redesign Execution Plan v2

## Phase 0 — Baseline

Record:

- current production URL
- Git commit
- Cloudflare deployment
- current routes
- screenshots
- build result
- Lighthouse/performance baseline
- mobile behavior
- SEO baseline

## Phase 1 — Content foundation

Before major visual work:

- create Project schema
- migrate Xylo
- migrate Unawain
- establish evidence labels
- identify unsupported claims
- establish DCS placeholder/content status

## Phase 2 — Design foundation

Refactor:

- typography
- spacing
- color tokens
- borders
- cards
- technical panels
- responsive layout

## Phase 3 — Shell

Replace current navigation with:

**Work / Lab / Notes / About / Connect**

only where corresponding pages exist.

## Phase 4 — Project system

Build reusable project architecture.

## Phase 5 — Xylo pilot

Xylo remains the pilot because the current repository already contains the richest technical case-study implementation.

## Phase 6 — Validate

Ask:

> Does the reusable system actually improve Xylo?

If not, revise the architecture before migrating everything.

---

# Artifact 14 — Content & Copywriting Specification v2

## Voice

Remain:

- technical
- direct
- curious
- precise
- experimental
- calm
- evidence-conscious

## Major copy correction

The current repository contains several claims that should **not automatically survive migration**.

Examples include:

> “production-grade”

> “100-page PDFs in seconds”

> “absolute confidentiality guarantee”

> “50 Pioneer beta testers”

and broad statements implying every architecture has been production-shipped.

These require evidence.

## New claim taxonomy

### MEASURED

Directly measured under specified conditions.

### OBSERVED

Observed during actual operation but not rigorously benchmarked.

### INFERRED

Reasonable interpretation of evidence.

### HYPOTHESIS

An engineering proposition not yet validated.

## New writing rule

Every important technical claim should be traceable to:

**Claim → Evidence → Conditions → Limitation**

---

# Artifact 15 — SEO & Discoverability v2

## Current implementation

The repository has:

- canonical URL
- description
- Open Graph metadata
- Twitter metadata
- sitemap
- robots.txt
- favicon

This is a useful baseline.

## Current limitation

Metadata is primarily homepage-level.

The target architecture requires page-specific metadata.

## New requirements

Every project page should eventually have:

- unique title
- description
- canonical
- OG title
- OG description
- OG image
- technical keywords/entities
- structured data where accurate

## Sitemap

Current sitemap reflects only the current real routes.

Do not add future routes until they actually exist.

---

# Artifact 16 — Analytics & Measurement Specification v2

## Current repository status

No substantive analytics implementation was identified in the inspected application architecture.

Therefore analytics should **not** become a prerequisite for redesign.

## Initial measurement

Use meaningful events only after the content structure stabilizes.

Priority events:

```text
project_opened
demo_started
demo_completed
demo_failed
architecture_opened
benchmark_opened
experiment_opened
field_note_opened
github_clicked
contact_started
```

## New principle

Because MAKATA.ai is an engineering portfolio/lab, the most important measurement is not:

> “How many people visited?”

but:

> “Did a technically relevant visitor inspect the engineering?”

---

# Artifact 17 — Security, Privacy & Threat Model v2

## Current architecture

The MAKATA website is currently static.

That substantially reduces the immediate attack surface.

## Current CSP

The repository has a CSP through `_headers`, including:

- self-hosted default resources
- Google Fonts
- image allowances
- `connect-src 'self'`

## Important future issue

A future live demo/API will require revisiting:

```text
connect-src
```

and potentially other CSP directives.

## New security principle

Do not add remote AI execution merely because the laboratory concept calls for “live demos.”

A static or precomputed demonstration may provide almost the same visitor value with dramatically lower:

- abuse risk
- cost
- latency
- privacy exposure
- operational burden

---

# Artifact 18 — Deployment, Infrastructure & DevOps v2

## Current infrastructure

```text
Vite
 ↓
dist
 ↓
Cloudflare
```

Wrangler explicitly configures:

```text
assets.directory = ./dist
not_found_handling = single-page-application
```

## Git history finding

The current deployment architecture recently encountered:

1. Wrangler/Vite project detection issue
2. SPA fallback conflict
3. redundant `_redirects` deployment loop

These were fixed by explicitly defining static asset deployment and removing the conflicting redirect configuration.

## New operational lesson

Keep the deployment architecture extremely boring.

The redesign must **not accidentally reintroduce infrastructure complexity**.

## Target

```text
GitHub
 ↓
Build
 ↓
Preview
 ↓
Smoke test
 ↓
Cloudflare production
```

---

# Artifact 19 — Accessibility, Performance & Responsive Engineering v2

## Current baseline

The repository is a lightweight SPA, which is favorable for performance.

However:

- Google Fonts are externally loaded
- substantial Tailwind-generated styling exists
- the homepage is a large monolithic page
- interactive behavior is currently limited
- future demo infrastructure could materially change performance

## New priority

Optimize the static site first.

Do not prematurely optimize hypothetical AI workloads.

## Performance boundaries

Separate:

### Website performance

- HTML
- CSS
- JavaScript
- images
- fonts
- routing

from:

### Demo performance

- model initialization
- API latency
- inference
- rendering
- timeout/fallback

---

# Artifact 20 — Testing, QA & Release Validation v2

## Current testing reality

The package provides:

```text
lint
format
build
dev
preview
```

There is no evidence of a mature automated browser/E2E/visual test suite in the current architecture.

## New testing sequence

### P0

- build
- lint
- route smoke tests
- mobile navigation
- project links
- external links
- SPA deep links
- accessibility basics

### P1

- visual regression
- E2E
- keyboard navigation
- responsive testing

### P2

- interactive demo testing
- performance regression
- security testing

## New release gate

A redesign is not finished merely because:

`npm run build`

passes.

The actual gate is:

> Can a technically curious visitor understand what is real, what was measured, what is illustrative, and what remains experimental?

---

# Artifact 21 — Implementation Backlog & Phased Redesign Roadmap v2

# Core roadmap

```text
AUDIT
  ↓
FOUNDATION
  ↓
PILOT
  ↓
VALIDATE
  ↓
SCALE
  ↓
CLEAN UP
```

## Phase 0 — Current repository baseline

**Do first.**

- freeze current baseline
- capture screenshots
- record current routes
- record deployment
- verify build/lint
- inventory claims
- inventory assets
- inventory archive
- establish Git baseline

## Phase 1 — Content foundation

- Project schema
- evidence labels
- Xylo content migration
- Unawain content migration
- identify DCS content
- separate confirmed evidence from claims requiring verification

## Phase 2 — Design system

- establish tokens
- reduce SaaS-style card treatment
- technical panels
- evidence components
- responsive primitives
- accessibility primitives

## Phase 3 — New site shell

Build:

```text
Header
Footer
Work
Lab
Notes
About
Connect
```

Only expose routes with real content.

## Phase 4 — Project architecture

Build:

```text
ProjectPage
ProjectHero
ProjectOverview
DemoPanel
ArchitectureDiagram
EvidencePanel
BenchmarkPanel
Constraints
Failures
WhatChanged
Experiments
RelatedWork
```

## Phase 5 — Xylo pilot

Migrate Xylo first.

The current Xylo page already contains:

- problem
- architecture
- pipeline
- device matrix
- performance figures
- privacy explanation
- external product links

This makes it the best test of the new system.

## Phase 6 — Pilot gate

Evaluate:

### Continue

If the new system makes Xylo materially clearer.

### Refactor

If components are too generic or cumbersome.

### Reconsider

If the laboratory structure produces more complexity than visitor value.

## Phase 7 — Interactive evidence

Start with:

**visualization / precomputed evidence**

before:

**live AI execution**

## Phase 8 — Evidence system

Add:

- measured benchmarks
- methodology
- device/model/version
- conditions
- limitations
- comparison surfaces

## Phase 9 — Unawain

Migrate using the same system.

## Phase 10 — DCS

Only after its actual technical artifacts are ready.

DCS should not appear merely because it exists conceptually.

It needs:

- architecture
- actual implementation evidence
- experiment history
- metrics
- limitations
- clear status

## Phase 11 — Lab

Create:

- experiments
- benchmarks
- simulations
- architecture explorations

only when sufficient material exists.

## Phase 12 — Notes

Add field notes and engineering observations.

## Phase 13 — About

Shift from résumé-style biography toward:

**who I am → what I investigate → what constraints I care about → what I have built**

## Phase 14 — Connect

Provide several context-appropriate paths:

- technical collaboration
- engineering work
- product discussion
- research/experimentation

without turning the entire site into a sales funnel.

## Phase 15 — Hardening

- SEO
- accessibility
- performance
- security
- mobile
- deep-link routing
- external links
- metadata
- sitemap

## Phase 16 — Production

Deploy and validate.

## Phase 17 — Cleanup

Remove:

- obsolete components
- duplicate content
- unused routes
- legacy copy
- misleading claims
- dead dependencies
- unnecessary archive material

---

# Cross-artifact decision changes

## 1. The current repository is now the implementation baseline

The 21 artifacts describe the **destination architecture**, not the current architecture.

## 2. The redesign is smaller than previously implied

There is no need to migrate a large system.

The real task is:

> **Reorganize a small React portfolio into a content-driven engineering laboratory.**

## 3. Xylo is still the correct pilot

But now for a stronger reason:

It is already the most technically developed page in the repository.

## 4. Unawain is the second validation case

It tests whether the architecture generalizes beyond RAG.

## 5. DCS should not be forced into the system yet

DCS belongs in the architecture only when its evidence is ready.

## 6. The archive is evidence of history, not content authority

Archived material should be treated as:

**candidate historical material**

rather than:

**approved website copy**.

## 7. The homepage needs the largest conceptual change

The current homepage is effectively:

**“Here are my products and services.”**

The target homepage is:

**“Here is how I investigate and build AI systems.”**

## 8. The fake terminal must disappear or become truthful

Visual telemetry should never imply that MAKATA.ai is actually executing those operations.

## 9. Claims require a verification pass

Particularly:

- performance numbers
- privacy guarantees
- user/tester counts
- production claims
- “zero cost” claims
- model capabilities
- device compatibility
- external testimonials

## 10. No premature platform engineering

Do not build:

- CMS
- database
- graph database
- accounts
- personalization
- 3D environment
- complex backend
- live multi-model infrastructure

until visitor value justifies them.

---

# Final v2 architectural principle

The original documentation described a fairly sophisticated laboratory.

The repository audit introduces an important correction:

> **MAKATA.ai does not need to become a sophisticated website. It needs to become a credible window into sophisticated engineering.**

Therefore:

**Simple website + strong evidence + real experiments > sophisticated website + thin evidence.**

And the implementation strategy becomes:

```text
CURRENT
React SPA
2 projects
hardcoded content
static deployment
        ↓
FOUNDATION
content model
design system
truthful evidence
        ↓
PILOT
Xylo
        ↓
VALIDATE
Unawain
        ↓
SCALE
DCS / Lab / Notes
        ↓
EVOLVE
interactive evidence
experiments
relationships
```

The documentation itself should also remain falsifiable: whenever repository evidence contradicts an earlier design assumption, the repository wins.
