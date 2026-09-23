# MAKATA.ai — Technical Architecture Specification

**Artifact 5 — Technical Architecture & Implementation Specification**

**Purpose:** Define the technical architecture required to implement the MAKATA.ai redesign without prematurely committing to a rewrite, framework, database, or infrastructure pattern before the existing codebase is inspected.

---

## 1. Architecture Objective

MAKATA.ai should be implemented as a **content-driven technical portfolio and AI laboratory**, rather than as a conventional marketing website.

The architecture must support five things equally well:

1. **Professional presentation**
2. **Working AI demonstrations**
3. **Technical depth**
4. **Rapid experimentation**
5. **Low-friction publishing of new work**

The architecture should make it easy to add:

- a new AI project
- a new experiment
- a field note
- a benchmark
- a technical architecture
- a live demo
- a related-work connection

without requiring a redesign of the entire application.

### Architectural principle

> **The website shell should be stable. The engineering work should be replaceable.**

MAKATA.ai should therefore separate:

**Presentation → Content → Interactive systems → Infrastructure**

rather than embedding all four into individual pages.

---

# 2. Important Precondition: Inspect Before Refactoring

The existing codebase must be inspected before selecting the final implementation approach.

This document intentionally does **not** assume the current framework.

The following must be established from the repository:

### Application

- frontend framework
- framework version
- rendering model
- routing system
- TypeScript/JavaScript usage
- build tooling
- package manager
- dependency versions
- environment configuration

### UI

- component structure
- CSS architecture
- design-token implementation
- responsive strategy
- existing reusable components
- duplicated components
- duplicated styles
- accessibility implementation

### Content

- hard-coded project content
- JSON/YAML/Markdown content
- database-backed content
- API-backed content
- image handling
- metadata
- project relationships

### Interactive systems

- existing demo implementations
- API endpoints
- client-side model calls
- server-side model calls
- authentication
- secrets
- rate limiting
- error handling
- loading states

### Deployment

- hosting provider
- build pipeline
- domain configuration
- CDN
- environment variables
- deployment process
- preview environments
- logging/monitoring

### Measurement

- analytics provider
- existing events
- page-view tracking
- conversion tracking
- privacy configuration

### Performance

- bundle size
- image optimization
- JavaScript execution
- server response time
- Core Web Vitals
- third-party scripts

---

# 3. Refactor vs Rewrite

The default strategy is:

> **Refactor first. Rewrite only when the existing architecture creates a measurable constraint.**

A complete rewrite should not be justified simply because the current site looks amateurish.

Visual quality and architectural quality are separate problems.

### Refactor when:

- routing is fundamentally sound
- the framework is maintainable
- dependencies are reasonably current
- components can be reorganized
- content can be extracted from presentation
- CSS can be consolidated
- demos can be isolated

### Consider partial rewrite when:

- pages contain large amounts of duplicated markup
- styling is structurally difficult to control
- content and UI are inseparable
- demo logic is tightly coupled to pages
- routing prevents the desired information architecture
- performance is fundamentally limited by the current implementation

### Consider full rewrite only when:

- the existing framework is obsolete or unsuitable
- deployment architecture is fundamentally broken
- the application has severe structural coupling
- the cost of incremental refactoring clearly exceeds replacement

---

# 4. High-Level Architecture

The preferred conceptual architecture is:

```text
                    MAKATA.ai
                       │
             ┌─────────┴─────────┐
             │                   │
        Presentation          Content
             │                   │
       ┌─────┼─────┐       ┌─────┼─────┐
       │     │     │       │     │     │
     Pages Components    Projects Labs Notes
       │     │     │       │     │     │
       └─────┼─────┘       └─────┼─────┘
             │                   │
             └─────────┬─────────┘
                       │
                Interactive Layer
                       │
             ┌─────────┼─────────┐
             │         │         │
           Demos    Visualizations Experiments
             │         │         │
             └─────────┼─────────┘
                       │
                 Service Layer
                       │
          ┌────────────┼────────────┐
          │            │            │
        APIs        AI Models    External Services
          │            │            │
          └────────────┼────────────┘
                       │
                Infrastructure
```

The important separation is:

### Presentation

How the website looks and behaves.

### Content

What MAKATA.ai is saying.

### Interactive systems

What visitors can actually run or manipulate.

### Services

What requires computation, APIs, models, or external systems.

---

# 5. Route Architecture

The website should map directly to the information architecture.

Recommended route structure:

```text
/
├── /work
│   ├── /work/xylo
│   ├── /work/unawain
│   └── /work/dcs
│
├── /lab
│   ├── /lab/experiments
│   ├── /lab/benchmarks
│   └── /lab/[experiment]
│
├── /notes
│   └── /notes/[slug]
│
├── /about
│
└── /connect
```

Potential future routes:

```text
/tools
/tools/edge-readiness
/research
/ideas
/architecture
```

These should **not** be implemented merely because the architecture allows them.

Routes should exist only when there is enough substantive content to justify them.

---

# 6. Page Architecture

## Homepage

```text
Home
├── Navigation
├── Hero
├── Featured Work
├── Live Lab Preview
├── Engineering Capabilities
├── Selected Experiments
├── Field Notes
├── About Preview
└── Connect
```

The homepage is an **index**, not the location of every detail.

---

## Project Page

Every substantial project should follow a common structure:

```text
ProjectPage
├── ProjectHero
├── DemoPanel
├── ProjectOverview
├── ArchitectureDiagram
├── TechnicalDetails
├── BenchmarkPanel
├── Constraints
├── ExperimentHistory
├── FailureBlock
├── WhatChanged
├── RelatedWork
└── ConnectCTA
```

Not every project needs every section.

The component structure should be flexible enough that a small project can contain:

```text
Hero
Demo
Overview
Architecture
Lessons
```

while a mature project can contain the complete structure.

---

# 7. Content Architecture

Project content should be modeled independently of page presentation.

Conceptually:

```text
Project
├── identity
├── summary
├── status
├── technologies
├── modalities
├── problem
├── capabilities
├── demo
├── architecture
├── constraints
├── benchmarks
├── failures
├── lessons
├── experiments
├── relatedWork
└── externalLinks
```

Example conceptual object:

```text
Project
{
    title
    slug
    summary
    status
    featured
    technologies[]
    modalities[]
    problem
    capabilities[]
    demo
    architecture
    constraints[]
    benchmarks[]
    failures[]
    lessons[]
    relatedWork[]
    links[]
}
```

The actual implementation format should be determined after repository inspection.

Possible implementations:

- Markdown + front matter
- MDX
- JSON/YAML
- TypeScript objects
- headless CMS
- database
- hybrid

---

# 8. Content Storage Decision

MAKATA.ai should initially prefer **static/file-based content** unless there is a demonstrated need for a CMS or database.

### File-based content advantages

- version controlled
- easy to edit
- easy to review
- reproducible
- inexpensive
- deployment-friendly
- natural fit for technical notes
- Git history becomes the publishing history

### CMS becomes justified when:

- publishing becomes frequent
- non-technical collaborators need editing access
- content volume becomes large
- structured editorial workflows become necessary

### Database becomes justified when:

- user-generated content exists
- experiments produce persistent dynamic records
- authenticated users need personalized state
- the site becomes an actual application rather than primarily a portfolio/lab

Avoid introducing a database simply because modern applications often have one.

---

# 9. Component Architecture

Components should represent **meaningful interface concepts**, not arbitrary visual fragments.

Preferred:

```text
ProjectHero
DemoPanel
ArchitectureDiagram
BenchmarkPanel
ConstraintBlock
FailureBlock
ExperimentCard
FieldNoteCard
RelatedWork
StatusBadge
TechnicalMetadata
```

Avoid excessive fragmentation such as:

```text
BlueBox
SmallText
ProjectThing
FancyCard
LeftSection
HeroThing
```

The component name should explain **why the component exists**.

---

# 10. Component Layers

Use three conceptual layers.

## Layer 1 — Primitives

```text
Container
Stack
Grid
Text
Heading
Button
Link
Badge
Divider
Icon
```

These should be extremely stable.

---

## Layer 2 — MAKATA Components

```text
ProjectCard
ExperimentCard
DemoPanel
ArchitectureDiagram
BenchmarkPanel
ConstraintBlock
FailureBlock
FieldNoteCard
RelatedWork
Metadata
```

These express MAKATA's design language.

---

## Layer 3 — Page Composition

```text
Homepage
ProjectPage
ExperimentPage
FieldNotePage
AboutPage
```

Pages should primarily compose the lower layers.

---

# 11. Design Tokens

The UI should have a centralized design-token system.

Conceptual token categories:

```text
color.*
type.*
space.*
radius.*
border.*
shadow.*
motion.*
breakpoint.*
container.*
```

For example:

```text
color.background
color.surface
color.surfaceElevated
color.text
color.textMuted
color.border
color.accent
color.success
color.warning
color.error
```

The exact visual values belong to Artifact 4 and should be implemented as variables/tokens rather than scattered literals.

### Rule

If changing the visual identity requires searching hundreds of files for hex values, the architecture is wrong.

---

# 12. Demo Architecture

Interactive demonstrations are one of the most important differentiators of MAKATA.ai.

However, every demo should explicitly identify its execution model.

Supported modes:

```text
LIVE
PRECOMPUTED
HYBRID
LOCAL
REMOTE
```

Example:

```text
Demo
├── Input
├── Processing
├── Result
├── Metadata
└── Technical Disclosure
```

Metadata can include:

```text
Model
Device
Runtime
Processing location
Latency
Input size
Version
```

---

# 13. Live vs Precomputed Demos

Not every experiment should call an AI model every time someone visits.

### Live demo

Use when:

- latency is acceptable
- infrastructure cost is acceptable
- output variability is valuable
- the demo demonstrates real interaction

### Precomputed demo

Use when:

- model execution is expensive
- reliability matters more than variability
- the result itself is the primary evidence

### Hybrid demo

Often preferable.

Example:

```text
Precomputed example
        +
"Run this yourself"
        ↓
Optional live execution
```

This prevents the entire portfolio experience from depending on an API call succeeding.

---

# 14. AI/API Boundary

API keys and model credentials must never be exposed to the browser.

Preferred:

```text
Browser
   │
   │ request
   ↓
MAKATA service/API
   │
   ├── authentication/rate limit
   ├── validation
   ├── logging
   └── model invocation
             │
             ↓
          AI provider
```

Where a model genuinely runs on the client, such as an Edge AI demonstration, that boundary should be explicitly documented.

---

# 15. Demo State Machine

Every interactive demo should define explicit states:

```text
IDLE
  ↓
READY
  ↓
PROCESSING
  ↓
RESULT
```

With alternative paths:

```text
PROCESSING
   ├── SUCCESS → RESULT
   ├── ERROR → RECOVER
   └── TIMEOUT → RECOVER
```

The user should never see an unexplained frozen interface.

---

# 16. Demo Failure Handling

A failed AI call should not destroy the credibility of the site.

Example fallback:

```text
Live execution unavailable.

Showing the recorded result from the same experiment.

[View architecture]
[Try again]
```

Where appropriate, show the reason:

```text
Rate limit
Model unavailable
Timeout
Unsupported input
Network error
```

Do not expose internal secrets, infrastructure details, or sensitive logs.

---

# 17. Architecture Visualization

Architecture diagrams should be represented as data rather than hard-coded visual elements where practical.

Conceptual model:

```text
Architecture
├── nodes[]
│   ├── id
│   ├── label
│   ├── type
│   └── metadata
│
├── edges[]
│   ├── source
│   ├── target
│   └── label
│
└── boundaries[]
```

This makes the architecture reusable for:

- static diagrams
- interactive diagrams
- mobile representations
- accessibility descriptions
- future technical visualizations

---

# 18. Accessibility Architecture

Accessibility is not a final QA step.

Components should support:

- semantic HTML
- keyboard navigation
- visible focus
- accessible labels
- screen-reader announcements
- appropriate heading hierarchy
- sufficient contrast
- reduced motion
- touch-friendly controls

Interactive architecture diagrams require an alternative textual representation.

For example:

```text
Architecture summary:

Document
→ Text extraction
→ Local model
→ Structured analysis
→ User interface
```

The visual diagram should enhance understanding, not become the only way to understand the system.

---

# 19. SEO Architecture

Every substantive page should generate appropriate:

- title
- description
- canonical URL
- Open Graph metadata
- social preview
- structured metadata where appropriate

Project pages should have descriptive metadata based on their actual engineering content.

Avoid generic titles such as:

```text
MAKATA.ai
```

Prefer:

```text
Xylo AI — Private On-Device Document Intelligence | MAKATA.ai
```

Metadata should be generated from the same content model used by the page where practical.

---

# 20. Technical Metadata

Technical pages should expose machine-readable and human-readable metadata where appropriate.

Possible fields:

```text
Technology
Model
Framework
Device
Runtime
Deployment
Status
Date
Version
Processing location
```

Example:

```text
MODEL
Gemma

RUNTIME
On-device

DEVICE
iPhone

PROCESSING
Local

STATUS
Experimental
```

This reinforces the site's laboratory character.

---

# 21. Analytics Architecture

Analytics should measure **meaningful engagement**, not merely traffic.

Potential events:

```text
project_view
demo_started
demo_completed
demo_failed
architecture_opened
benchmark_viewed
experiment_opened
external_link_clicked
github_clicked
linkedin_clicked
contact_clicked
```

The most valuable events are likely:

```text
demo_started
demo_completed
architecture_opened
experiment_opened
contact_clicked
```

### Important

Do not instrument every interaction simply because it is technically possible.

Excessive analytics creates:

- noise
- privacy concerns
- implementation complexity
- misleading metrics

---

# 22. Privacy

MAKATA.ai should follow a minimal-data principle.

Collect only information necessary for:

- understanding site usage
- debugging
- security
- voluntary contact

Do not introduce tracking merely because analytics tooling provides it.

For AI demos, clearly distinguish:

```text
Input stays on device
```

from:

```text
Input is sent to server
```

from:

```text
Input is sent to third-party AI provider
```

These statements must be factual for the specific demo.

---

# 23. Performance Architecture

Performance should be treated as a feature.

Priorities:

1. Fast initial rendering
2. Minimal JavaScript
3. Optimized images
4. Lazy loading for non-critical content
5. Avoid unnecessary third-party scripts
6. Defer expensive interactive systems
7. Cache static content
8. Keep demos isolated from initial page load

The homepage should not load an entire AI runtime merely because one experiment exists several sections below the fold.

---

# 24. Progressive Loading

Preferred:

```text
Initial page
   ↓
Content
   ↓
Interactive component
   ↓
Heavy visualization
   ↓
Optional AI execution
```

Not:

```text
Page load
   ↓
Load everything
   ↓
Initialize every demo
   ↓
Download every model
```

---

# 25. State Management

Avoid global state unless the state genuinely crosses page/component boundaries.

Most state should remain local to:

- demos
- interactive diagrams
- filters
- UI controls

Global state may eventually be justified for:

- persistent preferences
- authenticated sessions
- cross-demo state
- application-wide configuration

Do not introduce a state-management framework simply because one is popular.

---

# 26. Related Work Data Model

The site's content should support relationships.

A project can relate to another project because of:

```text
shared technology
shared problem
shared modality
shared deployment model
shared experiment
shared concept
shared lesson
```

Conceptually:

```text
Xylo
 ├── Edge AI
 ├── Local inference
 ├── Document intelligence
 └── Device constraints

Unawain
 ├── Edge AI
 ├── Local inference
 ├── Language AI
 └── Device constraints
```

The relationship should be stored as content metadata.

Do not initially build an elaborate graph database.

---

# 27. Search

Search should not be a P0 feature.

Initially, the site can rely on:

- navigation
- related work
- categories
- chronological browsing
- semantic links

Search becomes worthwhile once the volume of projects, experiments, and notes creates a genuine discovery problem.

---

# 28. Testing Strategy

Testing should occur at four levels.

## Component tests

Verify:

- rendering
- states
- accessibility
- interactions

## Integration tests

Verify:

- project pages
- demos
- API boundaries
- content loading

## End-to-end tests

Verify critical journeys:

```text
Homepage → Project → Demo
Homepage → Project → Architecture
Homepage → About → LinkedIn
Homepage → Connect
```

## Visual regression

Useful for:

- navigation
- project cards
- hero
- demo panel
- architecture diagram
- responsive layouts

Do not attempt exhaustive screenshot testing of every page at the beginning.

---

# 29. Critical Acceptance Tests

The following should work before launch:

### Test 1 — 30-second comprehension

A new visitor can identify MAKATA.ai as an AI/Edge AI engineering laboratory.

### Test 2 — Project discovery

A visitor can reach Xylo, Unawain, or DCS without searching.

### Test 3 — Demonstration

A visitor can interact with at least one meaningful demonstration without registration.

### Test 4 — Technical depth

A visitor can move from:

```text
What is it?
→
How does it work?
→
What were the constraints?
→
What happened?
```

### Test 5 — Professional identity

A visitor can determine who built the systems and access the professional profile.

### Test 6 — Mobile

The core experience works without hover interactions.

### Test 7 — Failure

If a live demo fails, the page remains usable.

---

# 30. Deployment Architecture

The preferred architecture should minimize operational burden.

Conceptually:

```text
Git Repository
      │
      ↓
CI / Build
      │
      ↓
Production Build
      │
      ├── Static assets
      ├── Pages
      └── API services
             │
             ↓
        AI providers
```

The exact hosting arrangement should be determined after inspecting the current deployment.

The redesign should not introduce infrastructure complexity without a concrete requirement.

---

# 31. Environment Separation

At minimum:

```text
Development
Preview
Production
```

Secrets must be environment-specific.

Examples:

```text
AI_API_KEY
ANALYTICS_ID
DATABASE_URL
AUTH_SECRET
```

Secrets must not exist in:

- source code
- public configuration
- client bundles
- Git history

---

# 32. Observability

For live demos, basic observability should exist.

Track:

```text
request count
success rate
failure rate
latency
timeout rate
provider/model errors
```

Where possible, distinguish:

```text
User-facing failure
```

from:

```text
Infrastructure failure
```

The user should receive a clean error while the developer receives enough information to diagnose it.

---

# 33. Technical Debt Strategy

Technical debt should be visible rather than silently accumulated.

Maintain a lightweight technical debt list:

```text
Issue
Impact
Workaround
Cost
Priority
Trigger for fixing
```

Example:

```text
Issue:
Demo uses temporary server endpoint.

Impact:
Limited scalability.

Workaround:
Low-volume usage.

Trigger:
Demo traffic exceeds X requests/day.

Priority:
P2.
```

This is preferable to prematurely engineering for hypothetical scale.

---

# 34. Implementation Phases

## Phase 0 — Codebase Audit

Before redesign implementation:

- inspect repository
- identify framework
- map routes
- map components
- map styles
- identify content sources
- inspect deployment
- inspect API boundaries
- inspect analytics
- identify technical debt

**Output:** Architecture audit + migration plan.

---

## Phase 1 — Foundation

Implement:

- design tokens
- typography
- layout primitives
- navigation
- footer
- buttons
- links
- responsive foundation
- metadata framework

---

## Phase 2 — Content Architecture

Implement:

- project content model
- experiment content model
- field note model
- related-work relationships
- project routing
- reusable project components

---

## Phase 3 — Core Pages

Implement:

- homepage
- Work index
- Xylo page
- Unawain page
- DCS page
- About
- Connect

---

## Phase 4 — Interactive Layer

Implement:

- DemoPanel
- demo state machine
- technical metadata
- architecture visualization
- benchmark components
- failure states

---

## Phase 5 — Laboratory Layer

Implement:

- Lab
- experiments
- field notes
- benchmarks
- experiment relationships

---

## Phase 6 — Optimization

Measure and improve:

- performance
- accessibility
- mobile UX
- SEO
- analytics
- error handling

---

# 35. Migration Strategy

The existing website should not disappear during development.

Recommended process:

```text
Current Site
     │
     ↓
Audit
     │
     ↓
Foundation
     │
     ↓
New components
     │
     ↓
Migrate one page
     │
     ↓
Validate
     │
     ↓
Migrate remaining pages
     │
     ↓
Remove obsolete components
```

Start with **one representative project page**, preferably the project with the richest technical content.

This validates:

- content architecture
- design system
- responsive layout
- demo architecture
- architecture visualization
- metadata
- related work

before applying the system everywhere.

---

# 36. What Should NOT Be Built Yet

To prevent architecture-driven overengineering, defer:

- full CMS
- database
- user accounts
- personalization
- recommendation engine
- sophisticated search
- 3D website
- animated particle backgrounds
- AI chatbot for the website
- complex knowledge graph UI
- elaborate admin dashboard
- real-time collaboration
- unnecessary microservices

These may eventually become useful.

They are not prerequisites for making MAKATA.ai substantially better.

---

# 37. Architecture Risks

### Risk 1 — Overengineering

The site becomes a software platform instead of a portfolio/lab.

**Mitigation:** Build the smallest architecture supporting the actual content.

---

### Risk 2 — Demo infrastructure dominates the project

Too much effort goes into keeping AI demos operational.

**Mitigation:** Support precomputed and hybrid demos.

---

### Risk 3 — Content becomes hard to publish

A technically elegant architecture requires code changes for every new experiment.

**Mitigation:** Separate content from presentation.

---

### Risk 4 — Generic portfolio architecture

The site becomes another grid of cards and résumé sections.

**Mitigation:** Treat experiments, demonstrations, architecture, constraints, and failures as first-class content.

---

### Risk 5 — Visual redesign without substantive improvement

The site looks better but still fails to communicate engineering depth.

**Mitigation:** Every major project should answer:

```text
What was built?
Can I see it?
How does it work?
What happened?
What constrained it?
What was learned?
```

---

### Risk 6 — Too much technical information

Visitors encounter architecture diagrams and benchmarks before understanding why the project matters.

**Mitigation:** Progressive disclosure.

---

# 38. Definition of Done

The architecture is ready for implementation when:

- [ ] current stack has been audited
- [ ] existing routes have been mapped
- [ ] existing components have been mapped
- [ ] content sources have been identified
- [ ] demo/API boundaries have been identified
- [ ] deployment architecture is understood
- [ ] redesign can be implemented without unnecessary rewrite
- [ ] design tokens are centralized
- [ ] project content is separated from presentation
- [ ] reusable project components exist
- [ ] live/precomputed/hybrid demo strategy is defined
- [ ] failure states are defined
- [ ] SEO metadata is systematic
- [ ] accessibility requirements are incorporated
- [ ] analytics events are intentional
- [ ] performance strategy is defined
- [ ] migration sequence is defined

---

# 39. Required Codebase Audit Before Coding

Before making substantial code changes, produce a short audit containing:

### A. Stack

```text
Framework:
Version:
Language:
Build system:
Hosting:
```

### B. Structure

```text
Routes:
Components:
Styles:
Assets:
Content:
Services:
```

### C. Dependencies

Identify:

- unnecessary dependencies
- outdated dependencies
- duplicate functionality
- heavy dependencies affecting performance

### D. Architecture

Identify:

- client/server boundaries
- API calls
- model calls
- environment variables
- data flow

### E. UX

Identify:

- current homepage flow
- current project flow
- dead ends
- confusing interactions
- missing CTAs

### F. Technical debt

Classify:

```text
P0 — blocks redesign
P1 — materially complicates redesign
P2 — should improve during redesign
P3 — leave alone
```

### G. Recommendation

Conclude with exactly one of:

```text
REFactor
PARTIAL REWRITE
FULL REWRITE
```

with evidence supporting the recommendation.

---

# 40. Final Architecture Principle

MAKATA.ai should not become an increasingly complicated website designed to prove that its creator can build complicated websites.

The architecture exists to support the actual work.

The desired loop is:

```text
Build
  ↓
Experiment
  ↓
Measure
  ↓
Learn
  ↓
Publish
  ↓
Let visitors interact
  ↓
Discover the next question
  ↓
Build again
```

Therefore the architecture should optimize for:

**low friction to publish + high technical credibility + reliable interaction + honest evidence.**

The ultimate test is not:

> “Is the architecture sophisticated?”

It is:

> **“Can Ralph build something interesting on Monday and have it credibly documented on MAKATA.ai by Friday without fighting the website?”**

If yes, the architecture is doing its job.
