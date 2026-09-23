# MAKATA.ai — Component & Design-System Implementation Specification

**Artifact 12 — Component Inventory, Responsibilities, APIs, States & Composition Rules**

---

# 1. Purpose

This artifact defines the reusable interface system for MAKATA.ai.

It translates:

- the UX specification
- visual system
- technical architecture
- content schema
- demo specification
- page wireframes

into a practical component architecture.

The objective is **not** to create the largest possible design system.

The objective is:

> **Build the smallest reusable component system capable of expressing the actual engineering work.**

---

# 2. Core Principle

Components should represent **meaningful concepts**, not arbitrary visual fragments.

Prefer:

```text
ProjectCard
ExperimentCard
DemoPanel
ArchitectureDiagram
BenchmarkPanel
ConstraintBlock
FailureBlock
```

over excessive abstractions such as:

```text
Box
BoxWithBorder
Card2
CardContainer
ContentPanel
GenericPanel
FancyPanel
```

The former encodes domain meaning.

The latter encodes implementation detail.

---

# 3. Component Architecture

Recommended hierarchy:

```text
MAKATA.ai
│
├── Foundation
│   ├── Container
│   ├── Typography
│   ├── Stack
│   ├── Grid
│   └── Section
│
├── Navigation
│   ├── Header
│   ├── MobileMenu
│   ├── Breadcrumbs
│   └── Footer
│
├── Content
│   ├── ProjectCard
│   ├── ExperimentCard
│   ├── BenchmarkCard
│   ├── FieldNoteCard
│   ├── RelatedWork
│   └── Metadata
│
├── Technical
│   ├── ArchitectureDiagram
│   ├── EvidencePanel
│   ├── ConstraintBlock
│   ├── FailureBlock
│   ├── WhatChanged
│   └── TechnicalDetails
│
├── Interactive
│   ├── DemoPanel
│   ├── DemoInput
│   ├── DemoResult
│   ├── DemoStatus
│   └── DemoMetadata
│
└── Page
    ├── ProjectPage
    ├── ExperimentPage
    ├── NotePage
    └── BenchmarkPage
```

---

# 4. Component Layers

Use four conceptual layers.

## Layer 1 — Primitives

Pure presentation.

Examples:

```text
Container
Stack
Grid
Text
Heading
Link
Button
Badge
Divider
Icon
```

These should know almost nothing about MAKATA.ai.

---

## Layer 2 — Domain Components

Represent MAKATA.ai concepts.

Examples:

```text
ProjectCard
ExperimentCard
BenchmarkCard
FieldNoteCard
Metadata
StatusBadge
RelatedWork
```

---

## Layer 3 — Technical Components

Represent engineering evidence.

Examples:

```text
ArchitectureDiagram
EvidencePanel
BenchmarkPanel
ConstraintBlock
FailureBlock
WhatChanged
InferencePath
```

---

## Layer 4 — Page Composition

Assembles components.

Examples:

```text
ProjectPage
LabPage
ExperimentPage
NotesPage
AboutPage
```

Pages should compose components rather than implement everything themselves.

---

# 5. Foundation Components

## Container

Responsibilities:

- maximum content width
- responsive horizontal padding
- layout boundaries

Props/conceptual inputs:

```text
size:
  reading
  standard
  wide
  full
```

Do not create dozens of container variants.

---

# 6. Stack

Purpose:

Consistent vertical or horizontal spacing.

Conceptually:

```text
<Stack gap="medium">
```

Should support:

- vertical
- horizontal
- responsive direction

This is a primitive and should remain visually neutral.

---

# 7. Grid

Used for:

- project cards
- experiment cards
- capability blocks
- benchmark layouts

The Grid component should handle responsive collapse.

Do not encode project-specific behavior into the generic Grid.

---

# 8. Section

Purpose:

Provide consistent major-section structure.

Potential inputs:

```text
eyebrow
title
description
actions
density
```

Example:

```text
<Section
  eyebrow="Selected Work"
  title="Systems I've built"
/>
```

---

# 9. Typography

Define semantic typography rather than manually choosing font sizes everywhere.

Suggested hierarchy:

```text
Display
H1
H2
H3
H4
Body
Body Small
Caption
Technical
Code
```

Typography components should primarily express semantic hierarchy.

---

# 10. Button

Keep variants limited.

Recommended:

```text
Primary
Secondary
Tertiary
```

Optional:

```text
External
```

Do not create a button style for every page.

---

# 11. Link

Links should visually communicate destination type where useful.

Examples:

```text
Internal
External
Technical
```

External links may include an indicator.

---

# 12. Badge

Used for:

- status
- epistemic state
- processing location
- content type

Examples:

```text
EXPERIMENTAL
MEASURED
OBSERVED
ON DEVICE
```

Badges should remain compact.

---

# 13. StatusBadge

Domain-specific wrapper around Badge.

Possible values:

```text
CONCEPT
PROTOTYPE
EXPERIMENTAL
ACTIVE
BETA
RELEASED
ARCHIVED
```

The component should provide both:

- visual state
- accessible text

Color must not be the sole indicator.

---

# 14. Metadata

Used across projects, experiments and benchmarks.

Example:

```text
MODEL       Gemma ...
DEVICE      iPhone ...
RUNTIME     ...
STATUS      EXPERIMENTAL
DATE        ...
```

Metadata should be visually subordinate to the main content.

---

# 15. Navigation Components

## Header

Responsibilities:

- branding
- primary navigation
- responsive menu
- active route

Should not know about individual project content.

---

# 16. MobileMenu

Responsibilities:

- navigation visibility
- open/close state
- keyboard accessibility
- focus management

Avoid complex animation.

---

# 17. Breadcrumbs

Use on:

- project pages
- experiment pages
- benchmark pages
- notes

Example:

```text
Work / Xylo
Lab / Experiments / Model Comparison
Notes / Thermal Behavior
```

Breadcrumbs should remain compact.

---

# 18. Footer

Responsibilities:

- navigation
- external links
- basic site identity
- legal links if needed

Do not turn the footer into another sitemap.

---

# 19. ProjectCard

Primary content component.

Responsibilities:

- project identity
- summary
- visual
- status
- technical metadata
- navigation

Conceptual data:

```text
project
variant
showStatus
showMetadata
```

Possible variants:

```text
featured
standard
compact
```

Avoid creating:

```text
project-card-dark
project-card-large
project-card-with-image
project-card-home
```

unless actual content requirements justify them.

---

# 20. ProjectHero

Used on project pages.

Structure:

```text
ProjectHero
├── eyebrow/status
├── title
├── tagline
├── metadata
├── actions
└── visual
```

Primary action usually:

```text
Try Demo
```

Secondary:

```text
View GitHub
```

when applicable.

---

# 21. ProjectOverview

Purpose:

Present:

- problem
- motivation
- summary
- capabilities

Should not contain architecture logic.

---

# 22. CapabilityList

Shows concrete capabilities.

Example:

```text
Document summarization
Document chat
Entity extraction
Action-item extraction
```

Keep it factual.

Avoid capability claims that cannot be demonstrated.

---

# 23. DemoPanel

One of the most important MAKATA.ai components.

Responsibilities:

- sample selection
- user input
- execution
- processing state
- result
- error handling
- technical metadata

Conceptual API:

```text
demo
onRun
state
result
error
```

The component should not itself contain business logic for every demo.

---

# 24. Demo Architecture

Separate UI from execution.

```text
DemoPanel
     ↓
DemoController
     ↓
DemoService
     ↓
actual system / API
```

This allows the interface to remain stable if the backend implementation changes.

---

# 25. Demo States

Required:

```text
IDLE
READY
PROCESSING
RESULT
ERROR
TIMEOUT
UNAVAILABLE
```

Not every demo needs every state visibly exposed.

---

# 26. DemoInput

Responsibilities:

- sample selection
- upload
- text input
- parameter selection where necessary
- validation

Prefer sample-first.

Example:

```text
Sample document
[Run Demo]
```

before:

```text
Upload your own document
```

---

# 27. DemoResult

Responsibilities:

- structured output
- important findings
- result navigation
- explanation entry points

Avoid dumping raw model output unless raw output itself is the subject of the demonstration.

---

# 28. DemoStatus

Displays:

```text
Ready
Processing
Completed
Failed
Unavailable
```

For live AI, it may also show actual processing stages.

Never fabricate stages purely for visual effect.

---

# 29. DemoMetadata

Shows:

```text
MODEL
DEVICE
RUNTIME
PROCESSING
LATENCY
VERSION
```

Only display measured values as measured.

---

# 30. ArchitectureDiagram

Core technical visualization.

Data model:

```text
nodes
edges
boundaries
layers
dataFlow
executionLocation
```

Example:

```text
Input
  ↓
Preprocessing
  ↓
Model
  ↓
Postprocessing
  ↓
Output
```

---

# 31. ArchitectureDiagram Levels

Support progressive disclosure.

### Level 1

System overview.

### Level 2

Component architecture.

### Level 3

Technical implementation.

Do not render Level 3 by default.

---

# 32. Architecture Interaction

Interaction should reveal information.

Examples:

- select node
- show description
- inspect model
- reveal processing location
- display dependency
- highlight data path

Avoid interaction whose only purpose is animation.

---

# 33. Architecture Accessibility

Every architecture diagram needs a textual equivalent.

Example:

> Document input is processed locally, passed through the inference model, and transformed into structured output.

The visual must never be the only source of information.

---

# 34. EvidencePanel

Purpose:

Make evidence immediately visible.

Possible content:

```text
Metric
Value
Conditions
Device
Model
Runs
Date
```

The component should enforce context around numbers.

---

# 35. BenchmarkPanel

More specialized than EvidencePanel.

Responsibilities:

- comparison
- methodology
- conditions
- results
- interpretation
- limitations

Do not force every benchmark into a chart.

A table may sometimes be clearer.

---

# 36. BenchmarkVisualization

Use only where visualization reveals something that a table cannot.

Potential visualizations:

- latency distribution
- memory usage
- model comparison
- performance over time
- thermal behavior
- quality/latency trade-off

Avoid charting data merely because charts look technical.

---

# 37. ConstraintBlock

One of MAKATA.ai's signature components.

Structure:

```text
Constraint
──────────
Impact
──────────
Response
──────────
Trade-off
```

Optional:

```text
Evidence
```

---

# 38. FailureBlock

Another signature component.

Structure:

```text
What Didn't Work

Attempt
Expected
Observed
Decision
Lesson
```

The component should visually resemble a technical record rather than an application error.

---

# 39. WhatChanged

Signature component for engineering evolution.

Structure:

```text
BEFORE
 ↓
OBSERVATION
 ↓
CHANGE
 ↓
AFTER
```

Optional:

```text
Why
Trade-off
Evidence
```

---

# 40. NextQuestion

Small but important component.

Purpose:

Keep research/project evolution open-ended.

Example:

```text
NEXT QUESTION

Does the same behavior appear
under sustained thermal load?

→ Investigate
```

---

# 41. InferencePath

Optional component.

Useful where a system produces a meaningful multi-stage reasoning or transformation process.

Structure:

```text
Input
 ↓
Transformation
 ↓
Intermediate result
 ↓
Final result
```

Only use when the actual system can expose these stages.

Do not imply access to hidden model reasoning.

---

# 42. Important Boundary: Model Reasoning

MAKATA.ai should never claim to display hidden internal chain-of-thought.

If a demo shows:

```text
analysis stages
```

they must be actual application-level processing stages, tool calls, transformations, or explicitly generated intermediate artifacts.

Do not label fabricated intermediate text as the model's private reasoning.

---

# 43. ExperimentCard

Displays:

```text
Question
Result
Status
Date
Project
```

The question should receive the greatest visual weight.

---

# 44. ExperimentPage

Composition:

```text
ExperimentHero
Question
Hypothesis
Method
Variables
Results
Observations
Limitations
Related Benchmarks
NextQuestion
Related Work
```

---

# 45. ExperimentStatus

Potential:

```text
PLANNED
RUNNING
COMPLETED
ABANDONED
SUPERSEDED
```

These are useful because not every investigation becomes successful.

---

# 46. FieldNoteCard

Minimal structure:

```text
Observation
Epistemic status
Date
Related project
```

---

# 47. FieldNotePage

Composition:

```text
NoteHero
Observation
Context
Implication
Confidence
Related Work
NextQuestion
```

The page should be significantly lighter than an experiment page.

---

# 48. RelatedWork

This component should communicate **why** something is related.

Bad:

```text
Related:
Xylo
DCS
Unawain
```

Better:

```text
Xylo
Shared on-device inference constraint

Experiment #12
Investigates the same model/runtime behavior

Field Note
Observed related thermal behavior
```

---

# 49. Relationship Types

The content system should support:

```text
SHARED_TECHNOLOGY
SHARED_PROBLEM
SHARED_CONSTRAINT
SHARED_CONCEPT
SHARED_EXPERIMENT
EXTENDS
INSPIRED_BY
CONTRADICTS
VALIDATES
INVALIDATES
EVOLVED_FROM
RELATED
```

The UI does not need to expose every relationship type.

---

# 50. TechnicalDetails

Compact technical metadata component.

Possible fields:

```text
Model
Framework
Device
Runtime
Version
Deployment
Processing location
```

Use a definition-list style rather than a giant card grid.

---

# 51. Content Type Indicator

Every technical content item may show:

```text
PROJECT
EXPERIMENT
BENCHMARK
FIELD NOTE
FAILURE
IDEA
```

This should help visitors understand what they are looking at.

---

# 52. Search Result Component

Future component.

Structure:

```text
Title
Content type
Short excerpt
Relevant metadata
```

Search should be added only when content volume justifies it.

---

# 53. CTA Component

A CTA should have a purpose.

Examples:

```text
Try Demo
Inspect Architecture
Read Experiment
Explore Related Work
Connect
```

Do not create a giant generic CTA component that supports dozens of visual styles.

---

# 54. Page-Level Components

Pages should primarily compose domain components.

Example:

```text
ProjectPage
│
├── ProjectHero
├── DemoPanel
├── ProjectOverview
├── ArchitectureDiagram
├── TechnicalDetails
├── EvidencePanel
├── ConstraintBlock
├── FailureBlock
├── WhatChanged
├── ExperimentList
├── RelatedWork
└── ConnectCTA
```

---

# 55. Homepage Composition

Recommended:

```text
HomePage
│
├── Hero
├── FeaturedWork
│   └── ProjectCard
├── LiveLabPreview
│   └── DemoPanel
├── EngineeringFocus
├── SelectedExperiments
│   └── ExperimentCard
├── FieldNotes
│   └── FieldNoteCard
├── AboutPreview
└── ConnectCTA
```

---

# 56. Lab Composition

```text
LabPage
│
├── LabHero
├── CurrentInvestigation
├── RecentExperiments
│   └── ExperimentCard
├── RecentBenchmarks
│   └── BenchmarkCard
└── OpenQuestions
```

---

# 57. Work Composition

```text
WorkPage
│
├── WorkHero
├── Filters
└── ProjectGrid
    └── ProjectCard
```

Filters should remain optional.

---

# 58. About Composition

```text
AboutPage
│
├── AboutHero
├── Identity
├── FocusAreas
├── EngineeringPhilosophy
├── SelectedWork
└── ProfessionalLinks
```

---

# 59. Connect Composition

```text
ConnectPage
│
├── ConnectHero
├── ReasonsToConnect
├── ContactMethods
└── OptionalContactForm
```

---

# 60. Design Token System

The component system should consume tokens rather than hardcoded values.

Conceptual categories:

```text
color
type
spacing
radius
border
shadow
motion
breakpoint
layout
```

---

# 61. Color Tokens

Define semantic tokens such as:

```text
background
surface
surfaceElevated
text
textMuted
border
accent
success
warning
error
```

Do not allow individual components to invent arbitrary colors.

---

# 62. Typography Tokens

Define:

```text
display
h1
h2
h3
h4
body
bodySmall
caption
technical
code
```

Typography should remain consistent across content types.

---

# 63. Spacing Tokens

Use a predictable scale.

For example:

```text
xs
sm
md
lg
xl
2xl
3xl
```

The actual numerical values should be selected during implementation.

---

# 64. Border Tokens

Keep borders restrained.

Useful semantic concepts:

```text
subtle
default
strong
focus
```

Avoid component-specific border values.

---

# 65. Motion Tokens

Potential:

```text
fast
normal
slow
```

And semantic transitions:

```text
fade
slide
expand
stateChange
```

Do not create perpetual motion tokens.

---

# 66. Responsive Tokens

Components should adapt based on content.

Potential primitives:

```text
mobile
compact
standard
wide
```

But actual breakpoints should be determined during implementation.

---

# 67. Component State Model

Interactive components should explicitly model state.

Example:

```text
DemoPanel

READY
PROCESSING
RESULT
ERROR
TIMEOUT
UNAVAILABLE
```

Avoid scattered boolean flags such as:

```text
isLoading
isDone
hasError
isDisabled
isTimeout
```

when those states are mutually exclusive.

A state machine may be simpler.

---

# 68. Component Data vs Presentation

Components should not own content that belongs in structured content data.

Bad:

```text
<ProjectCard>
  <h2>Xylo</h2>
  <p>Private document intelligence...</p>
</ProjectCard>
```

Prefer:

```text
<ProjectCard project={xylo} />
```

This keeps content independent from presentation.

---

# 69. Component Logic vs Service Logic

A component should not directly know:

- API credentials
- backend implementation
- model provider internals
- database structure

Instead:

```text
Component
 ↓
Controller / service
 ↓
API / system
```

---

# 70. Demo Adapter Pattern

Different systems can expose different implementations through a common conceptual interface.

```text
Demo
├── input
├── execute
├── result
├── metadata
└── error
```

Then:

```text
XyloDemo
UnawainDemo
DcsDemo
```

can use the same `DemoPanel` while retaining system-specific behavior.

---

# 71. Do Not Over-Abstraction

Do not create a generic abstraction simply because two things look similar.

Use this rule:

> **Abstract repeated meaning, not repeated markup.**

If two components share only CSS, they may not need to be the same component.

If three projects genuinely use the same technical concept, abstraction becomes more justified.

---

# 72. Component Naming

Prefer semantic names:

```text
ArchitectureDiagram
ConstraintBlock
ExperimentCard
EvidencePanel
```

Avoid:

```text
BlueBox
InfoCard
Section2
BigCard
TechBox
```

Names should describe purpose, not appearance.

---

# 73. Component File Organization

A possible structure:

```text
components/
│
├── ui/
│   ├── Button
│   ├── Container
│   ├── Grid
│   ├── Stack
│   └── Typography
│
├── navigation/
│   ├── Header
│   ├── MobileMenu
│   └── Footer
│
├── projects/
│   ├── ProjectCard
│   ├── ProjectHero
│   └── ProjectOverview
│
├── technical/
│   ├── ArchitectureDiagram
│   ├── EvidencePanel
│   ├── ConstraintBlock
│   ├── FailureBlock
│   └── WhatChanged
│
├── demos/
│   ├── DemoPanel
│   ├── DemoInput
│   ├── DemoResult
│   └── DemoMetadata
│
└── experiments/
    ├── ExperimentCard
    └── ExperimentPage
```

The exact directory structure should follow the actual framework discovered during the codebase audit.

---

# 74. Testing Strategy

Prioritize testing components with meaningful behavior.

### High priority

- DemoPanel
- ArchitectureDiagram
- navigation
- responsive project pages
- forms/input
- benchmark visualization

### Medium

- ProjectCard
- ExperimentCard
- RelatedWork

### Lower

- static typography wrappers

---

# 75. Visual Regression

Important pages:

```text
Homepage
Xylo
Unawain
DCS
Lab
Experiment
Notes
About
```

Test:

- desktop
- tablet
- mobile

after major component changes.

---

# 76. Accessibility Testing

Every interactive component must test:

- keyboard
- focus
- screen reader labels
- reduced motion
- contrast
- touch targets

Architecture and chart components need additional accessibility validation.

---

# 77. Performance Rules

Avoid making every component client-side/interactive by default.

Prefer:

```text
Static content
   ↓
Server/rendered content
   ↓
Interactive island only where necessary
```

This keeps the site fast.

---

# 78. Client-Side JavaScript Rule

A component should require client-side JavaScript only when it actually needs:

- interaction
- state
- browser API
- live data
- animation tied to state

Static project descriptions should not become client-side applications.

---

# 79. Image Strategy

Images should have:

- optimized dimensions
- meaningful alt text
- responsive variants where useful
- lazy loading when below the fold

Screenshots should communicate something.

---

# 80. Component Documentation

Each major component should eventually have:

```text
Purpose
Inputs
States
Variants
Accessibility
Responsive behavior
Example
Known limitations
```

This becomes particularly useful if MAKATA.ai grows.

---

# 81. P0 Component Set

The first implementation should prioritize:

```text
Header
Footer
Container
Typography
Button
Section

ProjectCard
ProjectHero
ProjectOverview

DemoPanel
Metadata
StatusBadge

RelatedWork
```

---

# 82. P1 Component Set

Then:

```text
ArchitectureDiagram
EvidencePanel
BenchmarkPanel
ExperimentCard
ConstraintBlock
FailureBlock
FieldNoteCard
WhatChanged
NextQuestion
Breadcrumbs
```

---

# 83. P2 Component Set

Later:

```text
InteractiveArchitecture
BenchmarkVisualization
InferencePath
Search
AdvancedDemo
ExperimentTimeline
```

---

# 84. P3 / Avoid Initially

Do not prioritize:

```text
3D architecture environments
complex graph explorers
AI-generated visual interfaces
highly animated dashboards
personalized component systems
```

They can be reconsidered once actual usage demonstrates their value.

---

# 85. Component Acceptance Test

For every proposed component ask:

### 1. Does it represent a recurring concept?

If no → probably don't create it.

### 2. Does it have more than one real use?

If no → consider keeping it local.

### 3. Does abstraction make future work easier?

If no → don't abstract.

### 4. Does it preserve content independence?

If no → redesign.

### 5. Does it work on mobile?

If no → redesign.

---

# 86. The Three-Project Test

Before making a domain component highly generic, test it against:

```text
Xylo
Unawain
DCS
```

If the component works naturally across all three, it is likely a useful abstraction.

If it requires:

```text
if project === "xylo"
...
if project === "unawain"
...
if project === "dcs"
...
```

inside the shared component, the abstraction is probably wrong.

---

# 87. The Evidence Test

For technical components, ask:

> Does this component help the visitor understand something that would otherwise be difficult to see?

If yes:

```text
keep
```

If it merely makes the page look technical:

```text
remove
```

---

# 88. The Engineering-Spectacle Test

Every major interactive component should answer at least one:

```text
What does the system do?

How does it work?

What did it measure?

What constrained it?

What failed?

What changed?
```

If it answers none:

> It probably does not belong in MAKATA.ai.

---

# 89. Migration Principle

When auditing the existing codebase, classify each existing component as:

```text
KEEP
REFACTOR
REPLACE
MERGE
DELETE
UNKNOWN
```

Do not automatically rewrite.

The existing implementation may already contain useful abstractions.

---

# 90. Component Migration Example

Potential future mapping:

```text
ExistingHero
      ↓
REFACTOR
      ↓
ProjectHero / HomeHero
```

or:

```text
ExistingCard
      ↓
INSPECT

Used everywhere?
       ↓
YES → retain/refactor
NO  → replace with semantic cards
```

The actual decisions should happen only after inspecting the code.

---

# 91. Avoid Premature Design-System Extraction

Do not immediately create a large component library.

Start with:

```text
Foundation
+
One complete project page
```

Then extract patterns discovered across:

```text
Xylo
Unawain
DCS
```

This keeps the design system grounded in actual content.

---

# 92. Recommended Pilot

Build the component system around the richest existing project.

The pilot should contain:

- hero
- demo
- architecture
- technical metadata
- evidence
- constraints
- failure
- related work

Xylo is a natural candidate if its current implementation contains the necessary material.

---

# 93. Component Dependency Direction

Preferred:

```text
Page
 ↓
Domain component
 ↓
UI primitive
```

Avoid:

```text
UI primitive
 ↓
Page-specific knowledge
```

For example:

`Button` should never know what Xylo is.

`ProjectHero` may know what a project is.

`ProjectPage` knows which project is being displayed.

---

# 94. Content Dependency Direction

Preferred:

```text
Content data
      ↓
Domain component
      ↓
Page
```

Not:

```text
Page
 ↓
hardcoded content
 ↓
component
```

This enables the site to evolve without rewriting components.

---

# 95. Final Component Architecture

The desired architecture is:

```text
                 CONTENT
                    │
                    ↓
             DOMAIN COMPONENTS
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
   TECHNICAL COMPONENTS   INTERACTIVE
          │                   │
          └─────────┬─────────┘
                    ↓
               UI PRIMITIVES
                    │
                    ↓
                 STYLES
```

The architecture should remain boring underneath.

The **content and engineering** should provide the complexity.

---

# 96. Final Principle

The MAKATA.ai component system should disappear into the experience.

Visitors should not think:

> “This website has a sophisticated design system.”

They should think:

> “I can see the system.”

> “I can run it.”

> “I can inspect the architecture.”

> “I can see what happened.”

> “I can see where it failed.”

> “I can see what changed.”

That is the purpose of the component architecture.

**The component system is infrastructure.
The engineering work is the product.**
