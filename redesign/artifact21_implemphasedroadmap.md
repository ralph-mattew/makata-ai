# MAKATA.ai — Implementation Backlog & Phased Redesign Roadmap

**Artifact 21**

## 1. Purpose

This document converts the preceding MAKATA.ai specifications into an executable redesign program.

The previous artifacts defined:

- why MAKATA.ai exists
- who it serves
- how visitors should experience it
- the information architecture
- visual language
- content model
- component architecture
- demo architecture
- security
- infrastructure
- accessibility
- performance
- testing

This artifact answers:

> **What do we actually build, in what order, and why?**

The roadmap is deliberately structured to prevent a common redesign failure:

> spending weeks polishing the visual layer before discovering that the underlying content, component, demo, or deployment architecture cannot support the intended experience.

---

# 2. Core Execution Principle

The redesign should follow:

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

Not:

```text
DESIGN EVERYTHING
↓
REWRITE EVERYTHING
↓
HOPE IT WORKS
```

The first implementation target is therefore not the entire website.

It is:

> **the smallest vertical slice that proves the architecture.**

---

# 3. Primary Pilot

## Recommended pilot: Xylo

Xylo should be the initial redesign stress test if the existing project contains sufficient:

- technical depth
- interactive capability
- architecture
- evidence
- constraints
- product context
- visual material

It is particularly useful because it can test nearly every major system:

```text
Project content
+
Demo
+
Architecture
+
Technical metadata
+
Evidence
+
Constraints
+
Failure history
+
Related work
+
Responsive behavior
+
Accessibility
```

If codebase inspection reveals another project is materially richer, the pilot should change.

The selection must be evidence-based.

---

# 4. Workstream Structure

The implementation should be divided into these workstreams:

### W0 — Baseline & Audit

Understand what exists.

### W1 — Content Foundation

Make engineering information structured and maintainable.

### W2 — Design Foundation

Establish the visual system.

### W3 — Site Shell

Navigation, routing, layout, footer.

### W4 — Core Components

Build reusable domain components.

### W5 — Homepage

Create the new front door.

### W6 — Project System

Build the reusable project-page architecture.

### W7 — Xylo Pilot

Validate the entire system against one real project.

### W8 — Demo Infrastructure

Build robust interactive demonstration infrastructure.

### W9 — Evidence & Technical Surfaces

Architecture, benchmarks, constraints, failures, experiments.

### W10 — Remaining Projects

Unawain and DCS.

### W11 — Lab & Notes

Experimental knowledge layer.

### W12 — QA / SEO / Performance / Accessibility

Production hardening.

### W13 — Launch & Cleanup

Deploy, monitor, remove legacy architecture.

---

# 5. Priority Model

Use:

### P0 — Required

Without this, the redesign cannot function correctly.

### P1 — Important

Strongly improves the intended experience.

### P2 — Valuable

Worth implementing after the core system works.

### P3 — Future

Interesting but not required for the first release.

---

# 6. Phase 0 — Baseline

## Goal

Understand the current system before changing it.

### Tasks

**R001 — Capture production baseline**

Record:

- production URL
- deployment provider
- current commit
- build command
- environment variables
- domains
- API endpoints
- analytics
- forms
- demos

Priority: **P0**

---

**R002 — Capture visual baseline**

Capture representative screenshots of:

- homepage
- Work
- Xylo
- Unawain
- DCS
- mobile views

Priority: **P0**

---

**R003 — Inventory routes**

Create the authoritative route table.

Priority: **P0**

---

**R004 — Inventory components**

Classify existing components:

```text
KEEP
REFACTOR
REPLACE
MERGE
DELETE
UNKNOWN
```

Priority: **P0**

---

**R005 — Dependency audit**

Classify dependencies:

```text
CORE
USEFUL
REPLACEABLE
SUSPICIOUS
OBSOLETE
RISKY
```

Priority: **P0**

---

**R006 — Content audit**

Identify:

- hard-coded content
- duplicated content
- missing project information
- stale claims
- missing evidence
- missing relationships

Priority: **P0**

---

**R007 — Demo audit**

Document:

- frontend
- backend
- API
- model
- execution location
- latency
- costs
- failure behavior
- secrets
- rate limiting

Priority: **P0**

---

# 7. Phase 0 Exit Criteria

Do not proceed to large-scale implementation until:

- current architecture is understood
- production baseline exists
- routes are mapped
- components are classified
- dependencies are understood
- demos are understood
- deployment is understood
- major unknowns are recorded

The output should be an **audit report**, not a pile of refactoring commits.

---

# 8. Phase 1 — Content Foundation

## Goal

Separate engineering information from page presentation.

### Tasks

**R010 — Establish content directory**

Potential structure:

```text
content/
├── projects/
├── experiments/
├── benchmarks/
├── notes/
├── failures/
├── ideas/
├── technologies/
└── concepts/
```

Priority: **P0**

---

**R011 — Implement project schema**

Support:

- identity
- status
- description
- technologies
- problem
- capabilities
- demo
- architecture
- constraints
- benchmarks
- failures
- lessons
- experiments
- field notes
- related work

Priority: **P0**

---

**R012 — Implement experiment schema**

Support:

- question
- hypothesis
- method
- variables
- observations
- results
- limitations
- next question

Priority: **P1**

---

**R013 — Implement benchmark schema**

Support:

- metric
- value
- conditions
- device
- model
- methodology
- date
- interpretation

Priority: **P1**

---

**R014 — Implement relationship model**

Support semantic relationships such as:

```text
SHARED_TECHNOLOGY
SHARED_PROBLEM
SHARED_CONSTRAINT
EXTENDS
INSPIRED_BY
CONTRADICTS
VALIDATES
INVALIDATES
EVOLVED_FROM
RELATED
```

Priority: **P1**

---

# 9. Phase 1 Exit Criteria

The system should be able to render project information without requiring content to be hard-coded directly into page components.

At least one project should successfully exist in the new model.

---

# 10. Phase 2 — Design Foundation

## Goal

Create the minimum design system required by the new site.

### Tasks

**R020 — Design tokens**

Implement:

- colors
- typography
- spacing
- radii
- borders
- shadows
- motion
- breakpoints

Priority: **P0**

---

**R021 — Typography system**

Implement:

- display
- H1
- H2
- H3
- H4
- body
- small
- caption
- technical

Priority: **P0**

---

**R022 — Layout system**

Implement:

- container
- wide container
- reading container
- stack
- grid
- section

Priority: **P0**

---

**R023 — Interaction primitives**

Implement:

- button
- link
- icon button
- status indicator
- metadata

Priority: **P0**

---

**R024 — Accessibility primitives**

Ensure primitives support:

- focus
- keyboard
- labels
- semantic HTML
- reduced motion

Priority: **P0**

---

# 11. Phase 3 — Site Shell

## Goal

Build the stable website infrastructure around the engineering content.

### Tasks

**R030 — Header**

Desktop and mobile.

Priority: **P0**

---

**R031 — Navigation**

Implement:

- Work
- Lab
- Notes
- About
- Connect

Priority: **P0**

---

**R032 — Footer**

Include:

- identity
- professional links
- relevant external links
- copyright
- essential navigation

Priority: **P0**

---

**R033 — Routing**

Establish the intended route architecture.

Priority: **P0**

---

**R034 — SEO foundation**

Implement:

- title generation
- metadata
- canonical URLs
- OpenGraph
- sitemap
- robots

Priority: **P0**

---

# 12. Phase 4 — Core Domain Components

Build only components supported by real use cases.

### P0

```text
ProjectCard
ProjectHero
Metadata
DemoPanel
Section
RelatedWork
```

### P1

```text
ArchitectureDiagram
EvidencePanel
BenchmarkPanel
ExperimentCard
ConstraintBlock
FailureBlock
WhatChanged
FieldNoteCard
NextQuestion
```

### P2

```text
InteractiveArchitecture
BenchmarkExplorer
ExperimentTimeline
AdvancedDemo
```

---

# 13. Component Implementation Rule

Do not build all theoretical components upfront.

A component should generally become reusable after:

> **two or three genuine use cases.**

If Xylo is the only consumer of a component, avoid prematurely creating an elaborate abstraction.

The exception is foundational infrastructure where reuse is obvious.

---

# 14. Phase 5 — Homepage

## Goal

Create a homepage that immediately communicates what MAKATA.ai is.

### Section order

```text
Hero
↓
Featured Work
↓
Live Lab
↓
Engineering Focus
↓
Experiments
↓
Field Notes
↓
About
↓
Connect
↓
Footer
```

---

## R050 — Hero

Recommended direction:

**AI / EDGE AI ENGINEERING LABORATORY**

> I build and investigate AI systems where constraints matter.

Supporting text should explain the collection without resorting to generic AI marketing.

Priority: **P0**

---

## R051 — Featured Work

Initially:

- Xylo
- Unawain
- DCS

Each should have a distinct technical hook.

Priority: **P0**

---

## R052 — Lab Preview

Show at least one current investigation or experiment.

Priority: **P1**

---

## R053 — Engineering Focus

Represent capabilities as technical themes rather than consulting services.

Examples:

- Edge AI
- on-device intelligence
- AI architecture
- model/runtime experimentation
- local-first systems
- AI product engineering

Priority: **P1**

---

## R054 — About Preview

Short professional identity.

Priority: **P0**

---

## R055 — Connect

Simple path to professional engagement.

Priority: **P0**

---

# 15. Homepage Exit Criteria

A new visitor should be able to determine:

### Within seconds

What MAKATA.ai is.

### Within approximately one minute

What has been built.

### Within several minutes

Why the work is technically interesting.

The homepage should not require reading every section.

---

# 16. Phase 6 — Project System

## Goal

Create one reusable architecture for project pages.

### Structure

```text
ProjectHero
↓
Why I Built This
↓
Try It
↓
What It Does
↓
How It Works
↓
Architecture
↓
Evidence
↓
Constraints
↓
What Didn't Work
↓
What Changed
↓
Lessons
↓
Experiments
↓
Field Notes
↓
Related Work
↓
Connect
```

Priority: **P0**

---

# 17. Phase 7 — Xylo Pilot

This is the most important implementation phase.

## R070 — Xylo project content

Convert Xylo into the structured content model.

Priority: **P0**

---

## R071 — Xylo project hero

Show:

- identity
- short description
- status
- technical metadata
- primary demo action

Priority: **P0**

---

## R072 — Xylo demo

Implement:

```text
READY
↓
INPUT
↓
PROCESSING
↓
RESULT
```

with error handling.

Priority: **P0**

---

## R073 — Xylo architecture

Represent actual architecture.

Priority: **P0**

---

## R074 — Xylo technical metadata

Where verified:

- model
- device
- processing location
- runtime
- latency
- version

Priority: **P1**

---

## R075 — Xylo constraints

Document actual limitations.

Priority: **P0**

---

## R076 — Xylo failure history

Represent approaches that did not work where technically useful.

Priority: **P1**

---

## R077 — Xylo evidence

Add measured/observed technical evidence.

Priority: **P1**

---

## R078 — Xylo related work

Connect Xylo to:

- Unawain
- relevant experiments
- Edge AI concepts
- shared constraints

Priority: **P1**

---

# 18. Xylo Pilot Exit Criteria

The pilot is successful when:

- the page uses the new content model
- the page uses the new component system
- the demo works
- failure states work
- architecture is accurate
- evidence is contextualized
- mobile works
- accessibility is acceptable
- performance is acceptable
- SEO works
- deployment works

This is the first major architectural checkpoint.

---

# 19. Pilot Decision Gate

After Xylo, stop and evaluate.

Ask:

> **Did the architecture become easier or harder to work with?**

And:

> **Can the same system express Unawain and DCS without forcing them into the same narrative?**

Possible outcomes:

### A — Continue

Architecture is working.

### B — Refactor

Core approach works but abstractions need adjustment.

### C — Reconsider

The pilot revealed structural problems.

Do not continue merely because significant time has already been invested.

---

# 20. Phase 8 — Demo Infrastructure

## R080 — Demo controller

Centralize:

- state
- validation
- request
- timeout
- errors
- result

Priority: **P0**

---

## R081 — Demo adapters

Separate demo UI from underlying system.

Conceptually:

```text
DemoPanel
    ↓
DemoController
    ↓
DemoAdapter
    ↓
Actual system
```

Priority: **P0**

---

## R082 — Demo security

Implement:

- server-side secrets
- validation
- rate limits
- maximum input
- timeout
- cost controls

Priority: **P0**

---

## R083 — Demo fallback

Where useful:

```text
Live demo
+
Recorded/precomputed evidence
```

Priority: **P1**

---

# 21. Phase 9 — Technical Evidence Layer

## R090 — Architecture component

Implement progressive architecture:

```text
Overview
↓
Detailed
↓
Technical
```

Priority: **P1**

---

## R091 — Evidence component

Display:

- metric
- conditions
- device
- model
- methodology

Priority: **P1**

---

## R092 — Constraint component

Display:

```text
Constraint
↓
Impact
↓
Response
```

Priority: **P1**

---

## R093 — Failure component

Display:

```text
What didn't work
↓
Why it mattered
↓
What changed
```

Priority: **P1**

---

## R094 — What Changed

Show evolution where chronology matters.

Priority: **P1**

---

# 22. Phase 10 — Unawain

Apply the validated project architecture.

Focus on:

- local-first AI
- Filipino-language use case
- device constraints
- privacy architecture
- actual model/runtime behavior
- product evolution

Do not force Unawain to resemble Xylo simply because both involve document intelligence.

The reusable structure should be shared.

The technical story should remain distinct.

---

# 23. Phase 11 — DCS

DCS should focus on:

- multi-perspective synthesis
- perspective roles
- system architecture
- modes
- evaluation
- blindspot discovery
- experimentation
- limitations

Do not make unsupported claims about generalized reasoning capability.

Show the actual system.

---

# 24. Phase 12 — Lab

## Goal

Make experimentation a first-class part of MAKATA.ai.

### Initial structure

```text
Lab
├── Current Investigation
├── Experiments
├── Benchmarks
└── Recent Observations
```

Priority: **P1**

---

# 25. Lab MVP

The Lab does not require dozens of experiments.

One excellent experiment can establish the concept.

For each experiment:

```text
Question
↓
Hypothesis
↓
Method
↓
Result
↓
Observation
↓
Limitation
↓
Next Question
```

This should feel like an engineering record rather than a blog.

---

# 26. Phase 13 — Notes

Notes should capture observations that do not justify a full project or experiment.

Examples:

- unexpected device behavior
- model behavior
- architecture observation
- implementation discovery
- failed assumption
- emerging question

Each note should be lightweight.

Do not turn every observation into a polished essay.

---

# 27. Phase 14 — About

The About page should establish:

- Ralph's professional identity
- AI engineering focus
- architecture experience
- Edge AI interest
- selected work
- professional links
- engineering philosophy

Avoid turning the page into a long résumé.

The Work pages already provide evidence.

---

# 28. Phase 15 — Connect

The Connect page should answer:

> Why would someone contact Ralph?

Possible contexts:

- AI engineering
- AI architecture
- Edge AI
- technical leadership
- product engineering
- collaboration
- research/experimentation

Keep the interface simple.

---

# 29. Phase 16 — Performance Hardening

After the functional architecture stabilizes:

### Tasks

- image optimization
- font optimization
- code splitting
- lazy loading
- bundle analysis
- caching
- demo isolation
- performance measurement

Priority: **P0/P1**

Do not prematurely optimize the wrong architecture.

---

# 30. Phase 17 — Accessibility Hardening

Verify:

- semantic HTML
- keyboard
- focus
- contrast
- screen readers
- forms
- architecture
- benchmarks
- dynamic states
- reduced motion
- text scaling

Priority: **P0**

---

# 31. Phase 18 — SEO Hardening

Verify:

- metadata
- canonical URLs
- sitemap
- robots
- structured data
- social previews
- internal links
- crawlable content

Priority: **P0**

---

# 32. Phase 19 — Security Hardening

Verify:

- secrets
- API boundaries
- rate limiting
- input validation
- output handling
- CORS
- logs
- third-party services
- dependency security

Priority: **P0**

---

# 33. Phase 20 — QA

Execute Artifact 20.

Test:

```text
Functional
Visual
Responsive
Accessibility
Performance
Security
Content
SEO
Demo
Deployment
```

Priority: **P0**

---

# 34. Phase 21 — Production Launch

Deployment sequence:

```text
Final preview
↓
Release candidate
↓
Smoke tests
↓
Production deployment
↓
Production smoke tests
↓
Monitor
↓
Rollback if required
```

Priority: **P0**

---

# 35. Phase 22 — Legacy Cleanup

Only after the new architecture has stabilized:

- delete unused components
- delete unused dependencies
- remove legacy styles
- remove duplicate content
- remove obsolete routes
- remove dead APIs
- remove temporary compatibility code

Do not clean aggressively during the early migration.

---

# 36. Recommended Milestone Structure

## Milestone 1 — Understand

Deliverables:

- audit
- baseline
- route inventory
- component inventory
- dependency inventory
- demo inventory

---

## Milestone 2 — Foundation

Deliverables:

- content model
- design tokens
- layout primitives
- typography
- navigation
- routing

---

## Milestone 3 — First Impression

Deliverables:

- homepage
- Work page
- About
- Connect

---

## Milestone 4 — Pilot

Deliverables:

- Xylo project
- demo
- architecture
- evidence
- constraints
- responsive behavior

---

## Milestone 5 — System Validation

Deliverables:

- pilot QA
- accessibility
- performance
- security
- SEO

---

## Milestone 6 — Scale

Deliverables:

- Unawain
- DCS
- Lab
- Notes
- benchmarks
- experiments

---

## Milestone 7 — Production

Deliverables:

- final QA
- launch
- monitoring
- cleanup

---

# 37. Dependency Graph

The major dependencies are:

```text
CODEBASE AUDIT
      ↓
CONTENT MODEL
      ↓
DESIGN FOUNDATION
      ↓
SITE SHELL
      ↓
CORE COMPONENTS
      ↓
PROJECT SYSTEM
      ↓
XYLO PILOT
      ↓
ARCHITECTURE VALIDATION
      ↓
UNAWAIN / DCS / LAB
      ↓
HARDENING
      ↓
LAUNCH
```

Do not invert this sequence unnecessarily.

For example:

> Building the full Benchmark Explorer before proving the project architecture

is likely premature.

---

# 38. What Should Not Block the First Release

The following should not delay the initial redesign unless they solve a demonstrated problem:

- elaborate 3D interface
- advanced knowledge graph
- personalization
- recommendation engine
- sophisticated search
- complex CMS
- database
- user accounts
- elaborate analytics dashboard
- real-time collaboration
- highly animated landing page
- advanced benchmark explorer
- full research portal

These belong in later phases if justified.

---

# 39. MVP Definition

The first meaningful MAKATA.ai redesign can be considered an MVP with:

```text
Homepage
+
Work
+
Xylo
+
Unawain
+
DCS
+
About
+
Connect
```

and:

```text
At least one excellent demo
+
Architecture
+
Evidence
+
Constraints
+
Responsive design
+
Accessibility
+
SEO
+
Secure deployment
```

Lab and Notes can initially be smaller.

---

# 40. The Minimum Viable "Laboratory"

The Lab does not need a huge content library.

It needs evidence that the site is actually a laboratory.

A strong MVP could contain:

```text
1 current investigation
2–3 experiments
1 benchmark
2 field notes
```

if those records are substantive.

Five meaningful records are preferable to fifty generic articles.

---

# 41. Implementation Backlog Summary

| Workstream          | Priority | Dependency           |
| ------------------- | -------- | -------------------- |
| Baseline/Audit      | P0       | None                 |
| Content Foundation  | P0       | Audit                |
| Design Foundation   | P0       | Audit                |
| Site Shell          | P0       | Design Foundation    |
| Core Components     | P0       | Design Foundation    |
| Homepage            | P0       | Shell + Components   |
| Project System      | P0       | Content + Components |
| Xylo Pilot          | P0       | Project System       |
| Demo Infrastructure | P0       | Pilot                |
| Architecture        | P1       | Pilot                |
| Evidence            | P1       | Pilot                |
| Unawain             | P0/P1    | Pilot                |
| DCS                 | P0/P1    | Pilot                |
| Lab                 | P1       | Content Foundation   |
| Notes               | P1       | Content Foundation   |
| About               | P0       | Shell                |
| Connect             | P0       | Shell                |
| Accessibility       | P0       | Components           |
| Performance         | P0/P1    | Core implementation  |
| Security            | P0       | Demo/API             |
| SEO                 | P0       | Routing/content      |
| QA                  | P0       | Implementation       |
| Launch              | P0       | QA                   |

---

# 42. Suggested Commit Strategy

Keep commits small and conceptually isolated.

Good:

```text
add project content schema
add typography tokens
add responsive container
add project hero
add Xylo content
add Xylo demo states
add architecture component
```

Avoid:

```text
redesign everything
```

Small commits provide:

- easier review
- easier debugging
- easier rollback
- clearer history
- easier comparison against baseline

---

# 43. Branch Strategy

Keep the strategy simple.

Potentially:

```text
main
└── redesign
```

or short-lived feature branches if the workflow requires them.

Avoid elaborate Git workflows unless the team size justifies them.

The project is primarily a single-engineer system.

The process should reflect that.

---

# 44. Decision Gates

There should be explicit checkpoints.

### Gate 1

**Do we understand the existing codebase?**

If no → continue audit.

### Gate 2

**Can the content model represent the actual work?**

If no → revise schema.

### Gate 3

**Can the component system represent Xylo without excessive special cases?**

If no → refactor.

### Gate 4

**Can the same architecture represent Unawain and DCS without flattening their differences?**

If no → reconsider abstraction.

### Gate 5

**Does the redesign improve visitor comprehension and engineering credibility?**

If no → revise UX/content.

### Gate 6

**Is the site production-safe?**

If no → hardening.

---

# 45. Architecture Stress Test

The redesigned architecture should eventually survive these three projects:

### Xylo

Tests:

- local AI
- document intelligence
- mobile constraints
- demo
- architecture
- evidence

### Unawain

Tests:

- language
- local-first
- product
- device constraints
- privacy

### DCS

Tests:

- multi-agent system
- experimentation
- evaluation
- alternative reasoning paths
- conceptual complexity

If one component architecture works only because Xylo has a particular structure, it is not yet a robust content system.

---

# 46. Anti-Coherence Test

After implementing all three projects, inspect the result.

Ask:

> Did the component system create a useful common structure?

versus:

> Did the component system force three different systems into the same story?

The first is desirable.

The second is abstraction failure.

MAKATA.ai should have:

**consistent interface grammar**

without requiring:

**identical engineering narratives.**

---

# 47. Metrics for Redesign Success

Do not define success as:

- number of components
- number of animations
- number of pages
- Lighthouse score
- amount of code rewritten

Better indicators:

### Visitor understanding

Can visitors identify the work?

### Engineering engagement

Do they interact with demos and technical surfaces?

### Professional engagement

Do relevant visitors reach professional/contact paths?

### Technical credibility

Does the site provide evidence rather than adjectives?

### Maintainability

Can a new project be added without major page rewrites?

### Reliability

Does the site remain functional when demos or external services fail?

---

# 48. What Would Indicate the Redesign Is Going Wrong?

Watch for:

### Increasing abstraction

Every new project requires another special component.

### Increasing page code

Content and presentation become more tightly coupled.

### Increasing dependencies

Simple features require increasingly large libraries.

### Increasing build complexity

A portfolio site starts behaving like a distributed application.

### Increasing visual polish but decreasing information

The site looks better but says less.

### Increasing narrative coherence

Failures and contradictions disappear.

### Increasing demo fragility

The site depends on live AI services to render important content.

### Increasing maintenance

Every content change requires code changes.

These are architectural warning signals.

---

# 49. Recommended First 10 Implementation Actions

After the actual codebase audit, the first ten concrete actions should probably be:

1. Establish production baseline.
2. Map existing routes.
3. Map existing components.
4. Audit dependencies.
5. Audit demos and APIs.
6. Establish content model.
7. Establish design tokens.
8. Build the new site shell.
9. Build one project-page skeleton.
10. Implement Xylo as the pilot.

The exact ordering may change after inspection.

The important principle is:

> **Audit first; then let evidence determine the implementation sequence.**

---

# 50. Final Roadmap Principle

The redesign should not be judged by how much of the existing code was replaced.

It should be judged by whether MAKATA.ai becomes:

- easier to understand
- easier to explore
- easier to trust
- easier to maintain
- more technically credible
- more useful to professional visitors
- more expressive of actual engineering work

The most important implementation question remains:

> **What is the smallest change that materially improves the engineering experience for the visitor?**

Build that first.

Then measure.

Then continue.

Then reconsider.

Do not assume that the roadmap is correct merely because it is coherent.

The codebase audit, pilot, user behavior, performance measurements, and actual content should be allowed to contradict this plan.

That is not roadmap failure.

**That is the redesign working as an engineering process.**
