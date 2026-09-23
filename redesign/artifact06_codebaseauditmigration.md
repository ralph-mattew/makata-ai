# MAKATA.ai — Codebase Audit & Migration Specification

**Artifact 6 — Existing System Audit, Refactoring & Migration Plan**

---

## 1. Purpose

This artifact defines the procedure for evaluating the existing MAKATA.ai implementation before substantial redesign work begins.

The objective is **not** to make the existing code conform to the new architecture at any cost.

The objective is to determine:

1. What is already good.
2. What can be reused.
3. What should be refactored.
4. What should be replaced.
5. What should be left alone.
6. Whether a partial or complete rewrite is actually justified.

The audit must be evidence-driven.

---

# 2. Audit Principle

> **Do not confuse unfamiliar code with bad code.**

A codebase may be:

- visually inconsistent but structurally sound
- technically elegant but difficult to extend
- overengineered but stable
- messy but easy to refactor
- simple but perfectly adequate

The redesign should respond to actual constraints rather than aesthetic discomfort with the current implementation.

---

# 3. Audit Outputs

The audit should produce six outputs.

### Output A — Stack Inventory

What technologies are actually being used.

### Output B — Architecture Map

How the application currently works.

### Output C — Component Inventory

What reusable UI already exists.

### Output D — Technical Debt Register

What should be changed and why.

### Output E — Migration Map

How the existing implementation maps to the new architecture.

### Output F — Rewrite Decision

One of:

```text
REFactor
PARTIAL REWRITE
FULL REWRITE
```

The recommendation must be evidence-based.

---

# 4. Audit Order

Inspect the repository in this order:

```text
1. Repository root
2. Package configuration
3. Application entry points
4. Routing
5. Page structure
6. Components
7. Styling
8. Content/data
9. API/services
10. Assets
11. Configuration
12. Tests
13. Build/deployment
14. Analytics
15. Performance
```

Do not start by rewriting individual components.

---

# 5. Repository Inventory

First establish the high-level structure.

Record:

```text
Repository:
├── application source
├── components
├── pages/routes
├── assets
├── styles
├── data/content
├── API/server
├── tests
├── configuration
├── scripts
└── deployment
```

The exact directory structure should be recorded rather than imposed prematurely.

---

# 6. Technology Inventory

Create a table containing:

| Category     | Current implementation | Version | Keep? | Notes |
| ------------ | ---------------------- | ------: | ----- | ----- |
| Framework    | TBD                    |     TBD | TBD   |       |
| Language     | TBD                    |     TBD | TBD   |       |
| Styling      | TBD                    |     TBD | TBD   |       |
| Build system | TBD                    |     TBD | TBD   |       |
| Hosting      | TBD                    |     TBD | TBD   |       |
| Analytics    | TBD                    |     TBD | TBD   |       |
| API layer    | TBD                    |     TBD | TBD   |       |
| Database     | TBD                    |     TBD | TBD   |       |
| AI providers | TBD                    |     TBD | TBD   |       |
| Testing      | TBD                    |     TBD | TBD   |       |

**TBD values must remain TBD until verified.**

---

# 7. Dependency Audit

Inspect the dependency manifest.

Classify every meaningful dependency as:

### Core

Necessary for the application.

### Useful

Provides meaningful functionality.

### Replaceable

Functionality could easily be implemented without it.

### Suspicious

Adds complexity without obvious value.

### Obsolete

No longer needed.

### Risky

Introduces security, maintenance, bundle-size, or compatibility concerns.

---

## Dependency Questions

For each significant dependency ask:

1. Is it actually used?
2. Is it used in production?
3. Is there a native framework capability that replaces it?
4. Does it increase client bundle size?
5. Does it complicate deployment?
6. Is it maintained?
7. Does removing it simplify the system?

Do not remove dependencies merely for ideological purity.

---

# 8. Routing Audit

Document every existing route.

| Route        | Purpose    | Current implementation | Target       | Keep/Change |
| ------------ | ---------- | ---------------------- | ------------ | ----------- |
| `/`          | Homepage   | TBD                    | Homepage     |             |
| `/work/...`  | Project    | TBD                    | Project page |             |
| `/lab/...`   | Experiment | TBD                    | Lab          |             |
| `/notes/...` | Field note | TBD                    | Notes        |             |
| `/about`     | Identity   | TBD                    | About        |             |
| `/connect`   | Contact    | TBD                    | Connect      |             |

Also identify:

- orphaned routes
- duplicate routes
- redirect chains
- routes with no navigation path
- routes containing hard-coded content
- routes with duplicated layouts

---

# 9. Page Complexity Audit

For each page measure conceptually:

```text
Lines of code
Number of components
Number of imports
Data sources
API calls
Interactive elements
Duplicated markup
Duplicated styling
Client-side JavaScript
```

The objective is not to optimize for a particular line count.

The objective is to identify pages doing too many jobs.

---

# 10. Component Inventory

Create an inventory:

```text
Component
├── purpose
├── location
├── dependencies
├── used by
├── props
├── state
├── styling
├── accessibility
└── reuse potential
```

Then classify:

### Primitive

Generic UI building block.

### Domain component

Specific to MAKATA.ai.

### Page component

Primarily composes other components.

### Demo component

Contains interactive/AI behavior.

### Legacy component

No longer justified.

---

# 11. Component Duplication

Look specifically for patterns such as:

```text
ProjectCard
ProjectCard2
ProjectPreview
ProjectTile
FeaturedProject
```

or multiple implementations of:

```text
Button
Badge
Section
Container
Header
Modal
```

Do not automatically merge components.

Two visually similar components may have intentionally different semantics.

The question is:

> **Do these components represent the same concept?**

If yes, consolidate.

If no, preserve semantic distinction.

---

# 12. Styling Audit

Determine the current styling strategy.

Possible approaches:

- global CSS
- CSS modules
- utility classes
- component styles
- styled components
- Tailwind
- mixed strategy
- inline styles

Identify:

- duplicated values
- inconsistent spacing
- inconsistent typography
- arbitrary colors
- magic numbers
- responsive hacks
- unused styles
- conflicting selectors
- specificity problems

---

# 13. Design Token Migration

Extract recurring values.

### Colors

```text
background
surface
text
muted
border
accent
success
warning
error
```

### Typography

```text
display
h1
h2
h3
body
small
caption
technical
```

### Spacing

```text
xs
sm
md
lg
xl
2xl
3xl
```

### Layout

```text
reading width
standard width
wide width
full width
```

The goal is not to eliminate every one-off value.

The goal is to eliminate **unintentional inconsistency**.

---

# 14. Content Audit

Identify every location where content is currently stored.

Examples:

```text
hard-coded JSX
JSON
Markdown
MDX
database
API
CMS
constants
configuration
```

Then classify each content type.

| Content            | Current source | Target              |
| ------------------ | -------------- | ------------------- |
| Projects           | TBD            | Structured content  |
| Experiments        | TBD            | Structured content  |
| Field notes        | TBD            | Structured content  |
| About              | TBD            | Structured content  |
| Navigation         | TBD            | Configuration       |
| Technical metadata | TBD            | Structured metadata |

---

# 15. Hard-Coded Content Test

Search for project-specific content embedded directly inside presentation components.

Example of problematic architecture:

```text
ProjectPage
  └── 500 lines of Xylo-specific markup
```

Preferred:

```text
ProjectPage
   +
ProjectData
```

The page should determine **how** the information is presented.

The content should determine **what** information is presented.

---

# 16. Content Migration Strategy

For each existing project:

```text
Current page
   ↓
Extract content
   ↓
Normalize terminology
   ↓
Create structured project record
   ↓
Map to reusable components
   ↓
Validate visual output
   ↓
Delete obsolete implementation
```

Do not migrate all content simultaneously.

Use one project as the reference implementation.

---

# 17. Recommended Pilot Project

Choose the project with the richest combination of:

- technical depth
- visual material
- architecture
- interactive capability
- constraints
- measurable results
- narrative complexity

This project becomes the **architecture stress test**.

If the component system works for the most complex project, simpler projects should require less customization.

---

# 18. Demo Audit

For every current interactive feature document:

```text
Demo
├── input
├── processing
├── model
├── API
├── output
├── state
├── errors
├── latency
├── dependencies
└── cost
```

Then classify it:

```text
LIVE
PRECOMPUTED
HYBRID
LOCAL
REMOTE
```

A demo should not be classified based on marketing language.

Classification must reflect actual execution.

---

# 19. AI/API Audit

Identify every model/API invocation.

For each:

```text
Provider:
Model:
Invocation location:
Authentication:
Input:
Output:
Latency:
Cost:
Rate limits:
Failure behavior:
Logging:
Privacy implications:
```

Critical question:

> **Does the browser ever receive a credential that should remain private?**

If yes, fix this before launch.

---

# 20. Client/Server Boundary Audit

Map:

```text
Browser
  ↓
Frontend logic
  ↓
Server/API
  ↓
External service
```

For every operation determine whether it belongs on:

### Client

When it is:

- UI state
- local computation
- on-device AI
- interaction
- presentation

### Server

When it involves:

- secrets
- privileged APIs
- protected data
- expensive computation
- rate limiting
- centralized logging

### Static build

When the content is:

- stable
- public
- version-controlled
- not dependent on runtime state

---

# 21. Security Audit

Inspect:

- exposed environment variables
- API keys
- client bundles
- source maps
- server endpoints
- CORS
- authentication
- input validation
- rate limiting
- dependency vulnerabilities
- error messages
- logs

Never assume a portfolio site is too small to require security review.

A live AI demo creates an attack surface even when the rest of the site is static.

---

# 22. Performance Audit

Establish a baseline before redesign.

Measure where possible:

```text
initial load
largest contentful paint
interaction latency
JavaScript bundle size
image weight
font loading
third-party scripts
API latency
AI latency
```

Separate:

### Website performance

from:

### AI inference performance

They are different problems.

A slow model should not make the entire website appear slow.

---

# 23. Asset Audit

Inventory:

- logos
- screenshots
- project images
- architecture diagrams
- icons
- fonts
- videos
- animated assets

Classify each:

```text
KEEP
OPTIMIZE
REPLACE
REMOVE
```

Large images and unnecessary animations should not be allowed to dominate initial page load.

---

# 24. Responsive Audit

Test the current implementation at representative widths.

At minimum:

```text
mobile
tablet
desktop
wide desktop
```

Record:

- navigation behavior
- typography scaling
- card behavior
- diagram behavior
- demo usability
- horizontal overflow
- touch targets
- image scaling
- text wrapping

Do not simply shrink desktop layouts until they fit.

Mobile should be treated as a distinct interaction context.

---

# 25. Accessibility Audit

Check:

- heading hierarchy
- semantic landmarks
- keyboard navigation
- focus states
- button labels
- link labels
- image alternatives
- contrast
- form labels
- dynamic status messages
- reduced motion
- screen-reader behavior

Interactive demos receive particular attention.

---

# 26. SEO Audit

For each public route check:

```text
title
description
canonical
Open Graph
social image
heading structure
indexability
internal links
```

Identify pages that are:

- accidentally indexable
- accidentally blocked
- missing metadata
- duplicative

---

# 27. Analytics Audit

Document:

```text
provider
page-view tracking
events
conversion events
privacy configuration
third-party scripts
```

Remove events that do not answer a useful question.

The goal is not:

> “Track everything.”

The goal is:

> **“Know whether the site is accomplishing its purpose.”**

---

# 28. Current UX Audit

For each major journey, trace the actual current experience.

### Recruiter

```text
Landing
→ Work
→ Project
→ About
→ Professional profile
```

### Technical peer

```text
Landing
→ Experiment
→ Architecture
→ Evidence
→ Related work
```

### Potential customer

```text
Landing
→ Capability
→ Demo
→ Outcome
→ Contact
```

Record every point where the visitor:

- gets confused
- encounters unnecessary friction
- reaches a dead end
- cannot find evidence
- cannot find the next relevant page

---

# 29. Dead-End Audit

A page is a dead end if there is no meaningful next action.

For every substantive page ask:

```text
What should the visitor reasonably do next?
```

Possible answers:

- try demo
- view architecture
- inspect another project
- read experiment
- view related work
- connect

A page does not need a giant CTA.

It does need an intentional exit path.

---

# 30. Migration Matrix

Create a matrix like:

| Existing                | New           | Action           |
| ----------------------- | ------------- | ---------------- |
| Existing header         | Navigation    | Refactor         |
| Existing project card   | ProjectCard   | Refactor         |
| Existing project page   | ProjectPage   | Partial rewrite  |
| Existing styles         | Design tokens | Extract/refactor |
| Hard-coded project data | Content model | Migrate          |
| Existing demo           | DemoPanel     | Isolate          |
| Existing API            | Service layer | Audit            |
| Existing About          | About         | Refactor         |
| Existing footer         | Footer        | Refactor         |

Every major existing artifact should have an explicit disposition.

---

# 31. Refactoring Priority

Use four levels.

## P0 — Must fix

Blocks correctness, security, accessibility, or fundamental redesign.

Examples:

- exposed credentials
- broken routing
- unusable mobile layout
- severe API vulnerability

## P1 — High value

Significantly improves maintainability or UX.

Examples:

- duplicated project components
- hard-coded content
- broken design-token structure

## P2 — Useful

Improves quality but does not block launch.

Examples:

- minor dependency cleanup
- small component consolidation
- non-critical performance improvements

## P3 — Defer

Interesting but unnecessary.

Examples:

- architecture perfection
- speculative scaling
- advanced abstractions

---

# 32. Migration Rules

### Rule 1

Do not refactor code that will immediately be deleted.

### Rule 2

Do not redesign a component before understanding where it is used.

### Rule 3

Do not create abstractions from one example.

### Rule 4

Extract an abstraction when at least two or three real use cases demonstrate the common pattern.

### Rule 5

Prefer boring architecture over clever architecture.

### Rule 6

Keep commits small enough to reverse.

### Rule 7

Do not mix visual redesign, dependency upgrades, and infrastructure migration in one uncontrolled change.

---

# 33. Git Strategy

The redesign should be developed in small, reversible stages.

Conceptual sequence:

```text
baseline
   ↓
audit
   ↓
foundation
   ↓
component migration
   ↓
pilot project
   ↓
content migration
   ↓
remaining pages
   ↓
labs/experiments
   ↓
optimization
```

Each meaningful stage should be independently deployable where practical.

---

# 34. Visual Regression Strategy

Before migration, capture the current state of important pages.

At minimum:

```text
Homepage
Project page
About
Mobile homepage
Mobile project page
```

These screenshots are not the target design.

They are the **baseline**.

After each migration step, compare:

```text
intentional change
vs.
accidental regression
```

---

# 35. Data Migration Validation

For every migrated project verify:

### Content

- title preserved
- description preserved
- technical claims preserved
- links preserved
- images preserved

### Functionality

- demo works
- buttons work
- external links work
- architecture displays correctly

### Metadata

- title
- description
- social preview
- canonical

### Accessibility

- headings
- labels
- keyboard navigation
- image alternatives

---

# 36. Rollback Strategy

Every migration phase must have a rollback path.

Avoid migrations where:

```text
old system
   ↓
irreversible transformation
   ↓
hope it works
```

Prefer:

```text
old implementation
       +
new implementation
       ↓
validation
       ↓
switch
       ↓
remove old implementation
```

This is particularly important for live demos.

---

# 37. Rewrite Decision Framework

After the audit, evaluate:

| Dimension             | Refactor    | Partial rewrite | Full rewrite             |
| --------------------- | ----------- | --------------- | ------------------------ |
| Framework suitability | Good        | Mixed           | Poor                     |
| Routing               | Good        | Mixed           | Poor                     |
| Components            | Reusable    | Fragmented      | Fundamentally unsuitable |
| Styling               | Fixable     | Difficult       | Fundamentally broken     |
| Content model         | Extractable | Mixed           | Unusable                 |
| Demo architecture     | Isolatable  | Coupled         | Broken                   |
| Deployment            | Stable      | Fixable         | Unsuitable               |
| Technical debt        | Manageable  | Significant     | Extreme                  |

This is not a scoring system.

It is a structured decision aid.

---

# 38. Strong Evidence for Full Rewrite

A full rewrite should require multiple independent problems.

Examples:

- framework fundamentally unsuitable
- architecture prevents desired routing
- content cannot reasonably be separated
- demo architecture is deeply coupled
- deployment is fundamentally incompatible
- accumulated technical debt makes incremental work more expensive

One ugly component is not sufficient evidence.

One messy CSS file is not sufficient evidence.

Aesthetic dissatisfaction is not sufficient evidence.

---

# 39. What Success Looks Like

After migration, a developer should be able to create a new project by doing approximately:

```text
1. Add project content.
2. Add assets.
3. Configure metadata.
4. Configure demo if applicable.
5. Publish.
```

rather than:

```text
1. Copy an old page.
2. Modify 700 lines of markup.
3. Find five CSS files.
4. Fix broken mobile styles.
5. Duplicate another component.
6. Manually add metadata.
7. Discover the demo broke.
8. Fix three unrelated pages.
```

This is one of the most important practical success criteria for the redesign.

---

# 40. Final Audit Checklist

## Repository

- [ ] repository structure understood
- [ ] framework identified
- [ ] build system identified
- [ ] dependencies inventoried

## Application

- [ ] routes mapped
- [ ] pages mapped
- [ ] components mapped
- [ ] state identified
- [ ] data flow understood

## Styling

- [ ] CSS architecture identified
- [ ] design tokens identified
- [ ] duplication identified
- [ ] responsive behavior documented

## Content

- [ ] project content locations identified
- [ ] experiment content identified
- [ ] notes identified
- [ ] hard-coded content identified

## AI

- [ ] model calls identified
- [ ] API calls identified
- [ ] client/server boundaries identified
- [ ] privacy implications documented
- [ ] costs identified
- [ ] failure modes identified

## Infrastructure

- [ ] hosting identified
- [ ] deployment identified
- [ ] environment variables identified
- [ ] logging identified
- [ ] analytics identified

## Quality

- [ ] performance baseline
- [ ] accessibility baseline
- [ ] SEO baseline
- [ ] mobile baseline
- [ ] visual baseline

## Migration

- [ ] pilot project selected
- [ ] component migration mapped
- [ ] content migration mapped
- [ ] rollback strategy defined
- [ ] rewrite decision made

---

# 41. The Audit's Most Important Question

At the end of the audit, do not ask:

> “How can we rebuild MAKATA.ai using the architecture we designed?”

Ask:

> **“What is the smallest set of architectural changes that will make the current system capable of becoming the MAKATA.ai we actually want?”**

That distinction prevents the redesign from turning into an unnecessary engineering project.

The website exists to showcase engineering work.

The website itself should therefore remain **simple enough that it does not become the engineering work.**
