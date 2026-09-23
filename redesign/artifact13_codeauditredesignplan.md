# MAKATA.ai — Codebase Audit & Redesign Execution Plan

**Artifact 13 — Repository Inspection, Decision Framework, Migration Strategy & Execution Sequence**

---

# 1. Purpose

This document defines how to move from the existing MAKATA.ai implementation to the redesigned system.

The objective is **not** to rewrite the website from scratch by default.

The objective is to determine:

1. what already works
2. what should be retained
3. what should be refactored
4. what should be replaced
5. what should be deleted
6. what must be built
7. what should remain untouched

The redesign should preserve useful engineering while replacing the parts that prevent MAKATA.ai from communicating its actual value.

---

# 2. Core Principle

> **Audit first. Change second.**

Do not begin by modifying components because they look old.

Do not begin by installing a new framework.

Do not begin by replacing the CSS system.

Do not begin by rebuilding the homepage.

First establish what actually exists.

---

# 3. Desired End State

The redesigned site should have:

```text
Clear identity
      ↓
Strong project presentation
      ↓
Working demonstrations
      ↓
Technical evidence
      ↓
Architecture
      ↓
Experiments / notes
      ↓
Professional credibility
      ↓
Clear contact path
```

while remaining:

- fast
- maintainable
- inexpensive to operate
- easy to update
- technically credible
- responsive
- accessible

---

# 4. Phase 0 — Establish a Safe Baseline

Before changing code:

### Record

- current production URL
- current deployment platform
- current branch
- current commit
- current build command
- current deployment command
- environment variables
- API dependencies
- external services
- domains
- analytics
- forms
- live demos

Create a baseline snapshot.

---

# 5. Production Baseline

Record:

```text
Production URL:
Hosting:
Repository:
Branch:
Commit:
Build:
Deploy:
Domain:
DNS:
Analytics:
External APIs:
```

Do not assume any of these from previous documentation.

Verify them from the actual codebase and deployment configuration.

---

# 6. Screenshot Baseline

Capture the current:

- homepage desktop
- homepage mobile
- Work page
- Xylo page
- Unawain page
- DCS page
- Lab, if present
- Notes, if present
- About
- Connect

These screenshots provide a visual regression baseline.

---

# 7. Functional Baseline

Before redesigning, manually test:

### Navigation

- all primary links
- mobile menu
- breadcrumbs
- back navigation

### Projects

- project links
- demos
- external links
- images

### Forms

- submission
- validation
- failure state

### Interactive systems

- input
- execution
- output
- errors
- timeout

---

# 8. Baseline Classification

Each existing feature should be classified:

```text
WORKING
PARTIALLY WORKING
BROKEN
UNUSED
UNKNOWN
```

Do not redesign around assumptions about features that are not actually functioning.

---

# 9. Phase 1 — Repository Inventory

Inspect the repository root first.

Record:

```text
package.json
lockfile
README
framework configuration
build configuration
deployment configuration
environment files
source directories
public/static directories
tests
scripts
```

Do not modify anything yet.

---

# 10. Framework Identification

Determine the actual:

- framework
- version
- runtime
- language
- rendering model
- routing system
- styling approach
- component system
- build tool

Example categories:

```text
React
Next.js
Astro
Vite
Vue
Svelte
etc.
```

The actual implementation takes precedence over the redesign specification.

---

# 11. Dependency Audit

Extract all major dependencies.

Classify each:

| Classification | Meaning                                         |
| -------------- | ----------------------------------------------- |
| Core           | Necessary to application architecture           |
| Useful         | Provides meaningful functionality               |
| Replaceable    | Could be replaced but isn't necessarily harmful |
| Suspicious     | Adds complexity with unclear benefit            |
| Obsolete       | No longer necessary                             |
| Risky          | Security/performance/maintenance concern        |

Do not remove dependencies merely because they are unfamiliar.

---

# 12. Dependency Questions

For every major dependency ask:

1. Why does it exist?
2. Where is it used?
3. Is it actively required?
4. Does it create meaningful complexity?
5. Is it compatible with the target architecture?
6. Is there a simpler native alternative?
7. What breaks if it is removed?

---

# 13. Phase 2 — Route Audit

Map every route.

Example:

```text
/
├── work
│   ├── xylo
│   ├── unawain
│   └── dcs
│
├── lab
│   ├── experiments
│   └── benchmarks
│
├── notes
│
├── about
└── connect
```

The actual route map may differ.

Record actual routes first.

---

# 14. Route Classification

For every route record:

```text
Route
Purpose
Current status
Primary audience
Primary CTA
Data source
Components
Dependencies
SEO metadata
Problems
Redesign target
```

---

# 15. Page Audit

For every page ask:

### Identity

What is this page?

### Visitor question

Why would someone visit it?

### Evidence

What proves its claims?

### Action

What should the visitor do next?

### Failure

What happens if the visitor cannot continue?

---

# 16. Phase 3 — Component Inventory

Create a complete component inventory.

For each component:

```text
Name
Location
Used by
Purpose
Inputs
State
Dependencies
Styling
Complexity
Quality
Redesign relevance
```

---

# 17. Component Classification

Classify components as:

```text
PRIMITIVE
DOMAIN
TECHNICAL
INTERACTIVE
PAGE
LEGACY
UNKNOWN
```

This allows the existing implementation to be compared against the new architecture.

---

# 18. Component Decision Matrix

Every significant component eventually receives:

```text
KEEP
REFACTOR
REPLACE
MERGE
DELETE
UNKNOWN
```

Do not decide this before understanding its usage.

---

# 19. KEEP

Use KEEP when:

- implementation is sound
- abstraction is appropriate
- visual changes can be handled through styling
- component fits target architecture
- no meaningful technical debt exists

A component does not need to be rewritten just because the visual design is changing.

---

# 20. REFACTOR

Use REFACTOR when:

- component concept is correct
- implementation is unnecessarily coupled
- styling is difficult to change
- data and presentation are mixed
- state management is messy
- accessibility needs improvement

This should be the default when the underlying abstraction is sound.

---

# 21. REPLACE

Use REPLACE when:

- component represents the wrong abstraction
- implementation blocks desired UX
- architecture is fundamentally incompatible
- component has become unmaintainable
- new component provides substantially clearer semantics

---

# 22. MERGE

Use MERGE when multiple components are actually the same concept.

Example:

```text
ProjectPreview
ProjectTile
WorkCard
ProjectBox
```

If they serve the same semantic purpose, consolidate them.

---

# 23. DELETE

Delete components when:

- unused
- duplicated
- obsolete
- superseded
- unnecessary to the redesigned information architecture

Do not delete solely because the component is visually ugly.

---

# 24. UNKNOWN

Use UNKNOWN when there is insufficient evidence.

This category is important.

It prevents premature conclusions.

---

# 25. Phase 4 — Content Audit

Separate content from presentation.

Identify:

- hardcoded project descriptions
- project metadata
- experiment descriptions
- benchmark results
- notes
- technology lists
- images
- links
- SEO metadata

Determine where content currently lives.

---

# 26. Hardcoded Content Test

Ask:

> If I wanted to add a fourth project tomorrow, how many components would I need to edit?

If the answer is:

```text
one structured content record
```

the architecture is healthy.

If the answer is:

```text
homepage
project component
three CSS files
navigation
some conditional logic
```

the content architecture needs work.

---

# 27. Content Migration

Do not migrate all content blindly.

First identify:

```text
Existing content
Useful content
Outdated content
Missing evidence
Duplicate content
Unsupported claims
```

Then map it to the new schema.

---

# 28. Epistemic Content Audit

Every technical claim should eventually be categorized as:

```text
MEASURED
OBSERVED
INFERRED
HYPOTHESIS
```

This is particularly important for:

- performance claims
- AI quality claims
- privacy claims
- model behavior
- device behavior
- user behavior

Do not convert observations into facts merely to make the site sound stronger.

---

# 29. Contradiction Preservation

The redesign must not accidentally turn engineering history into a clean success narrative.

For example:

```text
Hypothesis A
      ↓
Experiment
      ↓
Unexpected result
      ↓
Hypothesis B
```

should remain visible where meaningful.

Do not rewrite it as:

```text
We knew from the beginning that B was the right approach.
```

---

# 30. Phase 5 — Demo Audit

For every interactive demo identify:

```text
Input
Execution
Backend
Model
Output
State
Error handling
Fallback
Cost
Latency
Privacy
Dependencies
```

---

# 31. Demo Security Audit

Verify:

- API keys are not exposed client-side
- secrets are not committed
- endpoints are not unnecessarily public
- uploads are validated
- file sizes are controlled
- requests are rate-limited where necessary
- sensitive inputs are not unintentionally logged

---

# 32. Demo Cost Audit

For every live AI demo estimate:

```text
Cost per request
Expected traffic
Maximum acceptable monthly cost
Failure behavior
Rate limit
Caching opportunity
```

A portfolio site should not accidentally become an expensive public inference endpoint.

---

# 33. Demo Architecture Classification

Classify each demo:

```text
LIVE
PRECOMPUTED
HYBRID
INTERACTIVE VISUALIZATION
SIMULATION
VIDEO
```

Use the simplest mechanism that still demonstrates the engineering.

---

# 34. Demo Reliability

Record:

```text
Success rate
Typical latency
Known failure modes
External dependencies
Fallback
```

If reliability is poor, a hybrid or recorded-result approach may provide a better visitor experience.

---

# 35. Phase 6 — Styling Audit

Determine whether the current site uses:

- CSS modules
- global CSS
- Tailwind
- styled components
- CSS-in-JS
- design tokens
- component-specific styles
- mixed approaches

Record duplication and conflicts.

---

# 36. Styling Debt

Look for:

```text
Repeated arbitrary values
Duplicate colors
Duplicate typography
Inconsistent spacing
!important usage
Deep selectors
Component-specific hacks
Responsive overrides
Unused styles
```

Do not rewrite the styling system until the current system is understood.

---

# 37. Design Token Migration

Extract recurring values into semantic tokens:

```text
colors
spacing
typography
radius
border
motion
layout
```

The token system should serve the redesigned components.

---

# 38. Phase 7 — Asset Audit

Inventory:

- images
- screenshots
- logos
- icons
- videos
- fonts
- SVGs
- background assets

Classify:

```text
KEEP
OPTIMIZE
REPLACE
DELETE
UNKNOWN
```

---

# 39. Asset Principle

Prefer assets that demonstrate actual work.

For example:

```text
Xylo interface
Unawain output
DCS synthesis
architecture
benchmark
device
```

over generic AI imagery.

---

# 40. Phase 8 — SEO Audit

For every public page inspect:

```text
title
description
canonical
Open Graph
Twitter/X metadata
heading structure
structured data where appropriate
robots
sitemap
```

Do not optimize SEO at the expense of clarity.

---

# 41. SEO Strategy

Each project should be discoverable through concepts people might actually search for.

Examples:

```text
on-device AI
Edge AI
local document intelligence
Apple Foundation Models
AI architecture
AI experimentation
```

Only use terms genuinely supported by the project.

---

# 42. Phase 9 — Analytics Audit

Determine:

- current analytics provider
- tracked events
- page views
- demo interactions
- outbound links
- contact actions

Prefer meaningful events.

Examples:

```text
demo_started
demo_completed
architecture_opened
benchmark_opened
experiment_opened
github_clicked
linkedin_clicked
contact_clicked
```

---

# 43. Privacy Rule

Do not add analytics merely because it is available.

Track only information that helps answer useful questions.

Avoid unnecessary collection of:

- document contents
- user-entered sensitive information
- unnecessary identifiers

especially for demos involving documents.

---

# 44. Phase 10 — Performance Audit

Measure:

- initial load
- JS bundle size
- image weight
- largest contentful rendering
- interaction responsiveness
- demo loading
- mobile performance

Identify the largest actual bottlenecks.

Do not optimize hypothetical problems.

---

# 45. Performance Priority

Prioritize:

```text
1. Initial page
2. Mobile
3. Project pages
4. Demo loading
5. Interactive technical components
```

A beautiful demo that takes too long to become usable is counterproductive.

---

# 46. Phase 11 — Accessibility Audit

Check:

- semantic HTML
- heading hierarchy
- keyboard navigation
- focus states
- labels
- contrast
- reduced motion
- alt text
- screen readers
- touch targets

Pay particular attention to:

- demos
- architecture diagrams
- charts
- mobile navigation

---

# 47. Phase 12 — Architecture Decision

After the audit, choose one:

### A. Incremental redesign

Existing architecture is fundamentally sound.

### B. Structural refactor

Core architecture works but major restructuring is needed.

### C. Partial rewrite

Specific subsystems should be replaced.

### D. Full rewrite

Only if there is strong evidence that the existing architecture cannot reasonably support the target system.

---

# 48. Full Rewrite Threshold

A full rewrite should require multiple independent problems such as:

```text
routing fundamentally incompatible
+
component architecture unusable
+
build/deployment unreliable
+
content tightly coupled
+
major technical debt
```

One ugly component is not sufficient evidence.

---

# 49. Migration Strategy

Preferred:

```text
Existing Site
     ↓
Foundation
     ↓
New Components
     ↓
Pilot Page
     ↓
Validation
     ↓
Remaining Pages
     ↓
Cleanup
```

Not:

```text
Delete everything
     ↓
Start over
     ↓
Hope nothing broke
```

---

# 50. Pilot Page

Use one technically rich project as the pilot.

Candidate:

**Xylo**

provided the current implementation contains enough real material to stress-test the architecture.

The pilot should exercise:

- hero
- demo
- architecture
- evidence
- constraints
- failures
- related work
- responsive design

---

# 51. Pilot Success Criteria

The pilot is successful when:

- content is structured
- page composition is clear
- demo works
- architecture is understandable
- technical evidence is visible
- mobile works
- accessibility works
- performance remains acceptable
- component abstractions are reusable

---

# 52. Three-Project Validation

After the pilot, test the component system against:

```text
Xylo
Unawain
DCS
```

Look specifically for abstraction failures.

If components require project-specific hacks everywhere, stop and redesign the abstraction.

---

# 53. Migration Sequence

Recommended:

### Step 1

Create/clean design tokens.

### Step 2

Create foundation primitives.

### Step 3

Implement global shell.

### Step 4

Implement project domain components.

### Step 5

Implement Xylo page.

### Step 6

Implement demo architecture.

### Step 7

Implement technical evidence components.

### Step 8

Validate mobile/accessibility/performance.

### Step 9

Apply architecture to Unawain.

### Step 10

Apply architecture to DCS.

### Step 11

Build Work index.

### Step 12

Build Lab.

### Step 13

Build Notes.

### Step 14

Refine About / Connect.

### Step 15

Remove legacy code.

---

# 54. Commit Strategy

Keep changes small and reversible.

Example:

```text
feat: add semantic project content model
feat: add project hero
feat: add demo panel
feat: add architecture diagram
refactor: migrate Xylo page
refactor: migrate Unawain page
```

Avoid:

```text
redesign everything
```

as one giant commit.

---

# 55. Do Not Mix Risky Changes

Avoid combining:

```text
visual redesign
+
framework upgrade
+
hosting migration
+
database migration
+
authentication rewrite
```

unless there is a compelling reason.

Separate changes make failures easier to diagnose.

---

# 56. Branch Strategy

Use a redesign branch or equivalent isolated development workflow.

Maintain:

```text
production
    ↓
redesign
    ↓
feature branches
```

The exact Git workflow can follow the current repository conventions.

---

# 57. Rollback Strategy

At every major milestone, production should remain recoverable.

Before deployment:

```text
known-good commit
+
successful build
+
tested critical paths
```

Do not deploy a major redesign without a known rollback point.

---

# 58. Environment Separation

Maintain:

```text
development
preview/staging
production
```

where the current hosting platform supports it.

Live AI demos should preferably use controlled environments rather than development endpoints.

---

# 59. Regression Checklist

Before each major production deployment:

### Navigation

- [ ] desktop navigation
- [ ] mobile navigation
- [ ] breadcrumbs

### Pages

- [ ] homepage
- [ ] Work
- [ ] Xylo
- [ ] Unawain
- [ ] DCS
- [ ] Lab
- [ ] Notes
- [ ] About
- [ ] Connect

### Demos

- [ ] input
- [ ] execution
- [ ] result
- [ ] failure
- [ ] fallback

### Technical

- [ ] architecture
- [ ] metrics
- [ ] metadata
- [ ] related work

### Responsive

- [ ] mobile
- [ ] tablet
- [ ] desktop

### Quality

- [ ] accessibility
- [ ] performance
- [ ] SEO
- [ ] analytics

---

# 60. Content Regression

Check that redesigning the visual system did not accidentally:

- remove technical details
- change measured numbers
- convert observations into facts
- remove limitations
- remove failures
- break links
- misrepresent processing location
- misrepresent model behavior

---

# 61. Demo Regression

For each live demo verify:

```text
Can visitor find it?
Can visitor run it?
Does it actually run?
Is result understandable?
Are technical claims accurate?
Does failure recover?
Does mobile work?
```

---

# 62. Analytics Regression

Verify important events:

```text
demo_started
demo_completed
architecture_opened
experiment_opened
contact_clicked
```

Do not make analytics a launch blocker for purely visual changes unless analytics is already business-critical.

---

# 63. Definition of Done — Foundation

Foundation is complete when:

- design tokens exist
- global layout works
- typography is consistent
- navigation works
- responsive shell works
- accessibility baseline exists

---

# 64. Definition of Done — Project System

Project system is complete when:

- projects use structured content
- ProjectHero works
- ProjectCard works
- DemoPanel works
- ArchitectureDiagram works
- EvidencePanel works
- constraints/failures can be represented
- RelatedWork works

---

# 65. Definition of Done — Pilot

Pilot is complete when:

- one project has been fully migrated
- desktop is polished
- mobile is polished
- demo works
- technical evidence works
- architecture works
- no major accessibility issues remain
- no major performance regression exists

---

# 66. Definition of Done — Site

The redesign is complete when:

### Identity

Visitors immediately understand what MAKATA.ai is.

### Work

They can quickly discover what has actually been built.

### Demonstration

They can experience at least one system.

### Technical depth

They can inspect architecture and evidence.

### Engineering honesty

Constraints, failures and uncertainty remain visible.

### Exploration

Related projects, experiments and notes are discoverable.

### Professional conversion

A relevant visitor can easily understand how to contact Ralph.

---

# 67. What We Should Measure

The redesign should not be judged only by aesthetics.

Measure:

```text
Demo engagement
Project engagement
Architecture engagement
Experiment engagement
Contact engagement
Mobile performance
Page performance
```

The goal is not maximum time-on-site.

A visitor finding exactly what they need in two minutes can be a successful outcome.

---

# 68. Important Unknowns

The audit should explicitly maintain an UNKNOWN list.

Examples:

```text
Is this dependency still required?
Is this demo actually used?
Is this API still active?
Is this page still relevant?
Is this component shared?
Is this metric still valid?
```

Do not resolve unknowns by guessing.

---

# 69. Red Flags During Implementation

Stop and reassess if:

- every project requires custom component exceptions
- the homepage becomes much heavier
- demo code leaks into presentation components
- content becomes hardcoded again
- technical details are removed for aesthetics
- animations start dominating the experience
- the design system becomes larger than the site
- deployment becomes significantly more complicated
- operating cost increases without clear value

---

# 70. Anti-Coherence Rule

The redesign should not force all projects into one artificial narrative.

Xylo may demonstrate one set of lessons.

Unawain may expose different constraints.

DCS may challenge assumptions that the other projects make.

That is acceptable.

The site should show relationships **without pretending that every project is evidence for one predetermined thesis.**

---

# 71. Decision Log

Maintain a lightweight decision record.

For significant decisions:

```text
Decision
Context
Alternatives
Evidence
Chosen approach
Trade-offs
Confidence
Revisit condition
```

Example:

```text
Decision:
Use precomputed fallback for live demo.

Reason:
Live inference has unreliable latency.

Trade-off:
Less direct computation.

Revisit:
When inference endpoint becomes reliable.
```

---

# 72. Technical Debt Register

Maintain:

| Item              | Impact | Priority | Decision | Status |
| ----------------- | ------ | -------- | -------- | ------ |
| Legacy component  | Medium | P1       | Replace  | Open   |
| Duplicate styles  | Low    | P2       | Merge    | Open   |
| Demo API exposure | High   | P0       | Refactor | Open   |

This prevents the redesign from silently accumulating another layer of debt.

---

# 73. Final Execution Model

The redesign should operate as:

```text
AUDIT
  ↓
BASELINE
  ↓
DECIDE
  ↓
FOUNDATION
  ↓
PILOT
  ↓
MEASURE
  ↓
ADJUST
  ↓
EXPAND
  ↓
CLEAN UP
  ↓
DEPLOY
```

Not:

```text
DESIGN
  ↓
CODE
  ↓
DISCOVER PROBLEMS
  ↓
REWRITE
```

---

# 74. The Most Important Rule

Before changing any existing code, answer:

> **What problem does this change solve?**

Then:

> **What evidence tells us this problem actually exists?**

Then:

> **What is the smallest change that solves it?**

This prevents the redesign from becoming an aesthetic rewrite disguised as engineering.

---

# 75. Final Principle

The goal is not to create a technically impressive website architecture.

The goal is to create a website that makes the underlying technical work impossible to misunderstand.

The codebase should therefore remain:

> **simpler than the engineering it represents.**

MAKATA.ai should communicate complexity without unnecessarily implementing complexity.

The final system should let the visitor move naturally:

```text
SEE
 ↓
TRY
 ↓
UNDERSTAND
 ↓
INSPECT
 ↓
QUESTION
 ↓
EXPLORE
 ↓
CONNECT
```

while allowing the underlying engineering work to remain:

```text
messy
experimental
contradictory
iterative
unfinished
real
```

That tension is not something the redesign needs to hide.

**It is part of what MAKATA.ai is supposed to show.**
