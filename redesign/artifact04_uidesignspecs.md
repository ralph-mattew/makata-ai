# MAKATA.ai

## UI & Design System Specification

### Redesign Foundation — Version 1.0

---

# 1. Purpose

This document defines the visual language and reusable interface system for MAKATA.ai.

It translates the Product Strategy, Information Architecture, and User Experience Specification into:

- visual identity
- layout system
- typography
- color system
- spacing
- components
- interaction patterns
- project presentation
- experiment presentation
- demo presentation
- technical visualizations
- responsive behavior
- animation
- accessibility
- design constraints

The objective is to prevent the redesign from becoming a collection of individually styled pages.

> **The interface should feel like one coherent engineering environment, while allowing different types of technical content to have their own character.**

---

# 2. Design North Star

The visual experience should communicate:

> **An engineer's laboratory for exploring AI systems.**

It should feel:

- technical
- precise
- modern
- curious
- experimental
- restrained
- intelligent
- tactile
- information-rich

It should not feel:

- like a SaaS landing-page template
- like a corporate consultancy
- like a generic developer portfolio
- like a gaming website
- like a futuristic AI cliché
- like an academic paper
- like a dashboard full of charts

The interface should have enough personality to be memorable without competing with the work.

---

# 3. Core Visual Principle

## Evidence should be visually stronger than decoration.

If a visitor is looking at:

- a real benchmark
- a live demo
- an architecture
- a model result
- a technical observation

those elements should carry more visual weight than decorative graphics.

The hierarchy should generally be:

**Work > Evidence > Interaction > Explanation > Decoration**

---

# 4. Visual Personality

The design should sit between:

```text
Engineering documentation
        +
Interactive laboratory
        +
Premium technical portfolio
```

rather than:

```text
Marketing website
        +
AI visual effects
```

The design should communicate confidence through restraint.

---

# 5. Visual Language

Recommended characteristics:

### Structured

Use grids, alignment, hierarchy, and consistent spacing.

### Modular

Content should feel like systems composed of components.

### Layered

Information should reveal itself progressively.

### Instrumented

Metrics, states, labels, and system information should look intentional.

### Interactive

Where something can be manipulated, the interface should make that obvious.

---

# 6. Color Strategy

Color should be used primarily to communicate:

- hierarchy
- state
- interaction
- system status
- technical categories

Avoid making every section visually colorful.

The base palette should be relatively restrained.

Conceptually:

```text
Background
Surface
Elevated Surface
Primary Text
Secondary Text
Muted Text
Border
Accent
Success
Warning
Error
```

The exact values should be established during visual prototyping.

---

# 7. Accent Color

MAKATA.ai should have a recognizable accent.

The accent can represent:

- interaction
- active states
- links
- highlighted metrics
- experimental status
- selected nodes

It should not be used as decoration everywhere.

A visitor should quickly learn:

> "This color means I can interact with or investigate something."

---

# 8. Semantic Colors

Status colors should be consistent.

For example:

```text
Success
Completed / working

Warning
Experimental / constrained

Error
Failed / unavailable

Neutral
Informational

Accent
Interactive / selected
```

Do not rely on color alone.

Every status should also have:

- text
- icon
- shape
- or another visual indicator

where appropriate.

---

# 9. Typography

Typography should prioritize technical readability.

Recommended hierarchy:

```text
Display
H1
H2
H3
H4
Body
Small
Caption
Technical / Monospace
```

The display typeface may provide personality.

The body typeface should prioritize readability.

A monospace face should be reserved for:

- code
- technical values
- model names
- metrics
- system states
- architecture labels
- metadata where appropriate

Do not make the entire site monospace.

---

# 10. Typography Hierarchy

The hierarchy should be obvious without becoming enormous.

Conceptually:

```text
Display
Very large
High-impact statement

H1
Page identity

H2
Major section

H3
Subsection

Body
Explanation

Small
Supporting context

Caption
Metadata
```

Large typography should be used selectively.

---

# 11. Text Width

Long-form technical content should have controlled line length.

Recommended approximate reading width:

**60–80 characters per line**

depending on typography.

This is particularly important for:

- experiments
- field notes
- architecture explanations
- technical observations

Wide screens should not produce enormous paragraphs.

---

# 12. Layout Grid

The site should use a consistent responsive grid.

Conceptually:

```text
Desktop

| margin | content grid | margin |
```

The grid should support:

- full-width visualizations
- two-column technical sections
- cards
- narrow reading columns
- comparison layouts

The system should not assume that every section uses the same column structure.

---

# 13. Container System

Define several container widths.

Conceptually:

```text
Full
Wide
Standard
Reading
```

Example:

```text
Full
For immersive demos / architecture

Wide
For project layouts

Standard
For normal page content

Reading
For long-form text
```

This prevents every page from becoming a giant 1200px text column.

---

# 14. Spacing System

Use a predictable spacing scale.

For example:

```text
xs
sm
md
lg
xl
2xl
3xl
4xl
```

The exact values should be established in implementation.

The important rule:

> **Avoid arbitrary one-off spacing values wherever possible.**

This dramatically improves visual consistency.

---

# 15. Section Rhythm

Large sections should have intentional vertical rhythm.

A major section might follow:

```text
Section label
       ↓
Heading
       ↓
Short explanation
       ↓
Primary content
       ↓
Optional evidence
       ↓
Next action
```

Avoid stacking:

```text
Heading
Heading
Card
Card
Text
Button
Card
```

without hierarchy.

---

# 16. Navigation

Desktop navigation should remain minimal.

Conceptually:

```text
MAKATA.ai

Work
Lab
Notes
About

Connect
```

The navigation should remain visually quiet.

It should provide orientation rather than dominate the screen.

---

# 17. Navigation States

Every navigation item should support:

```text
Default
Hover
Focus
Active
Visited
```

Active state should be clear without excessive decoration.

---

# 18. Mobile Navigation

Mobile navigation should prioritize:

- Work
- Lab
- Notes
- About
- Connect

The menu should be fast and predictable.

Avoid elaborate full-screen animations if they compromise usability.

---

# 19. Breadcrumb Component

Use breadcrumbs primarily for deep technical content.

Example:

```text
Work / Xylo / Experiments / Memory Behavior
```

Breadcrumbs should be:

- small
- quiet
- readable
- clickable

They should not compete with the page title.

---

# 20. Button System

Buttons should have a small number of variants.

Recommended:

### Primary

Major action.

Examples:

**Try Demo**

**Explore Work**

### Secondary

Supporting action.

Examples:

**View Architecture**

**Read Experiment**

### Tertiary

Low-emphasis navigation.

Examples:

**Learn More →**

### External

External destination.

Examples:

**View GitHub ↗**

Do not create ten button styles.

---

# 21. Button Principles

Buttons should communicate:

- what will happen
- whether the action is primary
- whether it is external
- whether it is currently available

Avoid vague actions such as:

**Click Here**

Prefer:

**Try the Demo**

**View Architecture**

**Read the Experiment**

---

# 22. Link System

Inline links should be visually distinct but restrained.

Links should not look identical to plain text.

Use consistent:

- hover
- focus
- visited behavior

Do not turn every piece of text into an interactive element.

---

# 23. Card System

Cards should represent meaningful objects.

Examples:

```text
Project Card
Experiment Card
Field Note Card
Benchmark Card
Idea Card
Technology Card
```

Cards should not simply be decorative containers.

Every card should answer:

> "Why would I click this?"

---

# 24. Project Card

Recommended anatomy:

```text
PROJECT

XYLO

Private document intelligence
designed around on-device AI.

Edge AI · Document Intelligence

[Try Demo]
```

Optional:

- status
- device
- model
- date

Do not overload the card with technical metadata.

---

# 25. Experiment Card

Experiment cards should communicate curiosity.

Example:

```text
EXPERIMENT

Can a small local model maintain
useful document context over repeated
interactions?

Experimental

Read experiment →
```

The question itself can be the visual hook.

---

# 26. Field Note Card

Field Note cards should emphasize the observation.

Example:

```text
FIELD NOTE

Unexpected memory behavior during
consecutive on-device inference

2 min read
```

---

# 27. Benchmark Card

Benchmark cards should prioritize the measurement.

Example:

```text
BENCHMARK

On-device inference

Latency
1.8s

iPhone / Model X

View methodology →
```

Do not present benchmark values without context.

---

# 28. Status Badges

Status badges should communicate maturity.

Examples:

```text
EXPERIMENTAL
ACTIVE
RELEASED
ARCHIVED
```

Keep badges visually subtle.

They should communicate state rather than become decoration.

---

# 29. Metadata Component

Project metadata may appear as:

```text
Edge AI
iOS
On-device
Document Intelligence
```

Metadata should be visually subordinate to the project title.

Avoid giant tag clouds.

---

# 30. Hero Component

The Hero should communicate:

- identity
- value
- primary action

Potential structure:

```text
EYEBROW

MAKATA.ai

An AI engineering laboratory exploring
practical AI systems under real-world constraints.

[Explore the Work] [Enter the Lab]
```

A visual/system element should occupy the remaining space.

---

# 31. Hero Visual

The preferred visual hierarchy is:

### First choice

Actual working system.

### Second choice

Architecture / system visualization.

### Third choice

Experiment visualization.

### Last resort

Abstract visual.

Generic AI artwork should not be the default.

---

# 32. Project Hero

Project heroes should immediately establish:

```text
PROJECT

XYLO

Private document intelligence
designed around on-device AI.

Status
Released / Active

[Try Demo]
```

Potential metadata:

```text
Edge AI
Mobile AI
Document Intelligence
```

---

# 33. Demo Component

The Demo component is strategically important.

It should communicate:

```text
What can I do?
        ↓
Input
        ↓
Processing
        ↓
Result
```

The demo should minimize friction.

---

# 34. Demo State Machine

Every demo should support explicit states.

```text
IDLE
 ↓
READY
 ↓
PROCESSING
 ↓
RESULT
```

Alternative path:

```text
PROCESSING
 ↓
ERROR
 ↓
RECOVER
```

---

# 35. Demo Input

The demo should preferably offer:

### Option A

Try sample.

### Option B

Use own input.

This allows visitors to see value immediately while enabling deeper interaction.

---

# 36. Demo Output

Results should be visually clear.

Where useful, show:

- output
- processing time
- model
- device
- processing location
- confidence / quality information

Only display metrics that are actually measured.

---

# 37. Processing Indicator

The interface can make the processing pipeline visible.

Example:

```text
DOCUMENT
   ↓
EXTRACTION
   ↓
INFERENCE
   ↓
STRUCTURING
   ↓
RESULT
```

This transforms an invisible process into something understandable.

---

# 38. Local / Cloud Indicator

Where applicable, use a persistent processing indicator.

Examples:

```text
● ON DEVICE
● CLOUD
● HYBRID
● PRECOMPUTED
```

This should be factual.

It should not be a marketing badge.

---

# 39. Architecture Component

Architecture should be a first-class component.

It should support:

- nodes
- edges
- labels
- system boundaries
- input/output
- processing location
- model
- infrastructure

---

# 40. Architecture Visualization Levels

Architecture should support progressive complexity.

### Level 1

```text
Input → AI → Output
```

### Level 2

```text
Input
 ↓
Processing
 ↓
Model
 ↓
Structured Output
```

### Level 3

Full technical architecture.

The visitor should be able to stop at any level.

---

# 41. Interactive Architecture

Interactive diagrams can eventually support:

- node hover
- node selection
- system boundary highlighting
- process animation
- technical details

However:

> **Do not make architecture interactive merely because it can be.**

Interaction should reveal information.

---

# 42. Metrics Component

Metrics should have strong hierarchy.

Example:

```text
1.8s
Median inference latency

iPhone 15
Model X
50 test runs
```

The supporting context is essential.

Never show:

> "1.8s"

without explaining what was measured.

---

# 43. Comparison Component

When comparing models/devices:

```text
                 Model A    Model B
Latency          ...        ...
Memory           ...        ...
Quality          ...        ...
Thermal          ...        ...
```

The interface should communicate testing conditions.

Avoid implying universal conclusions from a narrow benchmark.

---

# 44. Constraint Component

Constraints should look like engineering information.

Example:

```text
CONSTRAINT

DEVICE MEMORY

Limited available RAM
during sustained inference.
```

Potential additional information:

```text
Observed
Impact
Response
```

---

# 45. Failure Component

Failures should have their own visual pattern.

Example:

```text
WHAT DIDN'T WORK

Approach
Large local model

Observed
Memory pressure during repeated inference

Change
Reduced context / model strategy

Lesson
...
```

This should not look like an error message.

It is **engineering history**, not UI failure.

---

# 46. Experiment Component

Recommended anatomy:

```text
EXPERIMENT

Question

Hypothesis

Method

Result

Observation

Limitation

Next Question
```

Each section should be visually distinct.

---

# 47. Field Note Component

Recommended anatomy:

```text
FIELD NOTE

Observation

Context

Implication

Related Work
```

The component should support fast scanning.

---

# 48. Timeline Component

Useful for project evolution.

Example:

```text
Prototype
   ↓
Experiment
   ↓
Failure
   ↓
Iteration
   ↓
Current system
```

A timeline should only be used where chronology provides actual insight.

---

# 49. "What Changed?" Component

For iterative projects:

```text
BEFORE

Model X
Large context
Cloud inference

AFTER

Model Y
Reduced context
Local inference
```

This is useful because it shows engineering decision-making.

---

# 50. Related Work Component

Recommended layout:

```text
EXPLORE RELATED WORK

[Experiment]
Related to Xylo

[Field Note]
On-device memory behavior

[Project]
Unawain
```

The relationship should be meaningful.

---

# 51. Technical Disclosure

Technical information should support expandable depth.

Potential pattern:

```text
How it works
        ↓
Architecture
        ↓
Implementation details
        ↓
Experiment data
```

Avoid hiding important facts behind excessive accordions.

Progressive disclosure should reduce cognitive load, not conceal information.

---

# 52. Code Presentation

When source code is shown:

- syntax highlighting
- copy action
- filename
- language
- optional line numbers
- concise excerpts

Do not paste enormous code blocks into project pages.

Link to the repository for full implementation.

---

# 53. Technical Data Presentation

Use visual hierarchy for:

- model
- device
- runtime
- latency
- memory
- version
- date

Example:

```text
MODEL
Gemma

DEVICE
iPhone 15

RUNTIME
Local

TEST
50 runs
```

This makes experiments easier to interpret.

---

# 54. Dark / Light Mode

If both modes are supported, they should share the same design system.

Do not create two completely different visual identities.

The semantic hierarchy must remain consistent.

The decision to support both modes should ultimately depend on the current codebase and audience rather than being assumed.

---

# 55. Motion Principles

Motion should communicate:

- state
- transition
- hierarchy
- causality
- system behavior

Good examples:

```text
Input → Processing → Result
```

or:

```text
Architecture node
highlighted when corresponding explanation is selected
```

---

# 56. Motion Anti-Patterns

Avoid:

- perpetual background animation
- excessive parallax
- decorative particle systems
- long page transitions
- animations that delay interaction
- motion everywhere

The visitor should never feel that the website is performing for them.

---

# 57. Motion Timing

Animations should generally be:

- short
- purposeful
- interruptible
- respectful of reduced-motion settings

Long cinematic sequences should be exceptional.

---

# 58. Scroll Behavior

Scrolling should reveal hierarchy.

Good:

```text
Hero
 ↓
Project
 ↓
Demo
 ↓
Architecture
 ↓
Evidence
```

Bad:

```text
Scroll
 ↓
Animation
 ↓
Animation
 ↓
Animation
 ↓
Text
 ↓
Animation
```

The visitor should feel that they are discovering information, not completing an animation sequence.

---

# 59. Responsive Design

The system should be designed around content behavior rather than fixed device sizes.

Breakpoints should be determined by:

> "When does this layout stop working?"

rather than:

> "What device is this?"

---

# 60. Desktop

Desktop can support:

- multi-column layouts
- architecture diagrams
- side-by-side comparisons
- richer navigation
- persistent contextual controls

---

# 61. Tablet

Tablet should preserve:

- readable content
- useful diagrams
- interactive demos
- navigation clarity

Layouts may collapse from:

```text
3 → 2 columns
```

before eventually becoming:

```text
2 → 1 column
```

---

# 62. Mobile

Mobile should prioritize:

- one-column content
- touch interaction
- readable technical data
- demo accessibility
- horizontally scrollable complex diagrams
- clear hierarchy

Never simply shrink desktop components.

---

# 63. Accessibility

Accessibility should be part of the component system.

Requirements include:

- keyboard navigation
- visible focus
- semantic HTML
- sufficient contrast
- alt text
- accessible labels
- reduced motion
- screen-reader-friendly status
- touch target sizing

Interactive architecture and demo components require particular attention.

---

# 64. Loading Skeletons

Skeletons should be used only where they help communicate layout.

Avoid fake skeletons that make a page appear to load longer than necessary.

For dynamic AI demos, explicit processing state is generally more useful.

---

# 65. Empty States

Empty states should explain why there is nothing to display.

Example:

> "No benchmarks have been published for this experiment yet."

rather than showing an empty card grid.

---

# 66. Error States

Errors should provide:

1. What happened.
2. Why it may have happened.
3. What the visitor can do next.

Example:

> "This demo requires local model support that isn't available in this browser."

**[Try precomputed result]**

---

# 67. Content Density

MAKATA.ai should deliberately vary density.

### Hero

Low density.

### Project overview

Medium density.

### Architecture

High density.

### Experiment

High information density.

### Field Note

Medium/low density.

This variation creates rhythm.

---

# 68. Visual Hierarchy of Truth

The interface should visually distinguish:

### Measured

Actual benchmark.

### Observed

Observed behavior.

### Inferred

Interpretation.

### Hypothesized

Unproven idea.

Potential labels:

```text
MEASURED
OBSERVED
INFERRED
HYPOTHESIS
```

This is particularly aligned with the experimental nature of MAKATA.ai.

---

# 69. Evidence Styling

Measured results should have stronger visual treatment than unsupported claims.

Example:

```text
OBSERVED

Repeated inference caused
increasing thermal and memory pressure
under test conditions.

[View experiment]
```

This is preferable to a giant:

> **"50% FASTER AI"**

without methodology.

---

# 70. Project Page Visual Rhythm

A strong project page might alternate:

```text
Statement
     ↓
Visual
     ↓
Explanation
     ↓
Interaction
     ↓
Evidence
     ↓
Technical depth
     ↓
Reflection
```

This prevents long uninterrupted text.

---

# 71. Homepage Visual Rhythm

A possible rhythm:

```text
Quiet
  ↓
Impact
  ↓
Interaction
  ↓
Information
  ↓
Technical density
  ↓
Exploration
  ↓
Human
```

The visitor should experience changes in visual intensity.

---

# 72. Component Naming

The eventual implementation should use semantic component names.

Prefer:

```text
ProjectHero
DemoPanel
ArchitectureDiagram
ExperimentCard
BenchmarkPanel
ConstraintBlock
FailureBlock
FieldNoteCard
RelatedWork
```

Avoid:

```text
BlueCard
FancySection
BigBox
ThingContainer
```

The component vocabulary should mirror the information architecture.

---

# 73. Component Composition

Components should be composable.

Example:

```text
ProjectPage
 ├── ProjectHero
 ├── DemoPanel
 ├── ProjectOverview
 ├── ArchitectureDiagram
 ├── BenchmarkPanel
 ├── ExperimentSection
 ├── FailureBlock
 ├── RelatedWork
 └── ConnectCTA
```

This allows project pages to evolve without duplicating code.

---

# 74. Component Independence

Components should not assume they belong to one particular project.

For example:

`BenchmarkPanel`

should work for:

- Xylo
- Unawain
- future Edge AI experiments

Likewise:

`ExperimentCard`

should work across the entire lab.

---

# 75. Design Tokens

The implementation should eventually centralize:

```text
Colors
Typography
Spacing
Radius
Borders
Shadows
Motion
Breakpoints
```

This prevents visual drift.

---

# 76. Border Radius

Use a small set of radius values.

For example:

```text
small
medium
large
pill
```

Avoid arbitrary rounded corners on every element.

The interface should feel engineered rather than excessively soft.

---

# 77. Shadows

Shadows should be restrained.

Use them primarily for:

- elevation
- modal surfaces
- important floating elements

Do not use shadows on every card.

Borders may communicate structure more effectively.

---

# 78. Surface Hierarchy

Possible surface system:

```text
Base
 ↓
Section
 ↓
Card
 ↓
Elevated
 ↓
Interactive
```

The visual difference should be subtle.

---

# 79. Iconography

Icons should be:

- simple
- consistent
- functional
- recognizable

Icons should clarify meaning, not decorate every heading.

---

# 80. Data Visualization

Charts should be used only when they help answer a question.

Examples:

- latency over time
- model comparison
- memory behavior
- benchmark distribution
- experiment evolution

Avoid charts merely because they make a page look technical.

---

# 81. Architecture Visualization vs Data Visualization

These are separate components.

### Architecture

Shows:

> **How the system works.**

### Data visualization

Shows:

> **What happened when it ran.**

Do not combine them unnecessarily.

---

# 82. Visualizing Uncertainty

Where results are uncertain, the UI should communicate uncertainty.

Possible mechanisms:

- ranges
- confidence intervals
- "experimental" labels
- methodology notes
- small sample indicators

The visual design should not make uncertain measurements look more authoritative than they are.

---

# 83. "Laboratory" Motifs

Possible recurring motifs:

- experiment IDs
- timestamps
- model/version labels
- device labels
- status indicators
- measurement panels
- system boundaries
- small technical annotations

Use these sparingly.

The goal is to create a **language**, not a theme park.

---

# 84. Visual Differentiation Between Content Types

The content types should feel related but distinguishable.

```text
PROJECT
High impact

EXPERIMENT
Question-driven

BENCHMARK
Measurement-driven

FIELD NOTE
Observation-driven

IDEA
Concept-driven
```

This can be achieved through typography, labels, metadata, and layout rather than radically different colors.

---

# 85. Homepage Project Presentation

Featured projects should receive more visual space than ordinary content.

Example:

```text
┌──────────────────────────────────────┐
│                                      │
│               XYLO                   │
│                                      │
│  Private document intelligence       │
│                                      │
│  [Live interactive element]          │
│                                      │
│  [Try Demo]                          │
└──────────────────────────────────────┘
```

Other projects can use smaller cards.

---

# 86. Experimental Content Presentation

The lab should feel more like a workspace than a product catalog.

Possible pattern:

```text
LAB

CURRENT INVESTIGATION

Can local models maintain
useful context under repeated use?

Status: Experimental

[Read Experiment]
```

This creates a sense of active exploration.

---

# 87. About Page Design

The About page should become more human.

Possible elements:

- photograph
- concise biography
- professional history
- technical interests
- current explorations
- links

The visual language can become slightly warmer here.

The site does not need to maintain maximum technical density everywhere.

---

# 88. Connect Section

The final CTA should be visually simple.

Example:

```text
BUILDING SOMETHING SIMILAR?

Interested in Edge AI,
AI systems, or technical collaboration?

[Connect]
```

Do not turn the ending into a giant sales banner.

---

# 89. Design Anti-Patterns

The redesign should explicitly avoid:

### Generic AI glow

### Excessive glassmorphism

### Endless rounded cards

### Giant gradients everywhere

### Stock AI imagery

### Excessive 3D

### Overuse of monospace

### Excessive dark UI

### Animation as decoration

### Dashboard-like information overload

### Every element being interactive

### Every section having a different visual identity

---

# 90. Design Decision Filter

Before introducing a visual element, ask:

1. What does this communicate?
2. Does it improve hierarchy?
3. Does it improve comprehension?
4. Does it reveal system behavior?
5. Does it improve interaction?
6. Does it establish MAKATA.ai's identity?

If it only makes the site "look cooler," it should be questioned.

---

# 91. Component Priority

## P0

Build first:

```text
Navigation
Container
Typography
Buttons
Links
ProjectHero
ProjectCard
DemoPanel
Metadata
Section
RelatedWork
Footer
```

## P1

Then:

```text
ArchitectureDiagram
BenchmarkPanel
ExperimentCard
ConstraintBlock
FailureBlock
FieldNoteCard
Timeline
StatusBadge
```

## P2

Then:

```text
InteractiveArchitecture
BenchmarkVisualization
ExperimentTimeline
AdvancedDemo
```

---

# 92. Design System Acceptance Criteria

The system is ready for implementation when:

### Consistency

Two different project pages can use the same component system without looking identical.

### Flexibility

A project can omit irrelevant sections.

### Hierarchy

Visitors can distinguish important information immediately.

### Technical depth

The system supports both simple and highly technical content.

### Interaction

Demos and architecture can be interactive without requiring unique visual systems each time.

### Responsive

Core components work across desktop and mobile.

### Accessibility

Interactive elements have accessible states.

### Performance

Visual richness does not create unnecessary runtime cost.

---

# 93. Relationship to the Content Model

The design system should map directly onto the content taxonomy.

```text
Project
    ↓
ProjectHero
ProjectCard

Experiment
    ↓
ExperimentCard
ExperimentSection

Benchmark
    ↓
BenchmarkPanel

Field Note
    ↓
FieldNoteCard
FieldNoteSection

Demo
    ↓
DemoPanel

Architecture
    ↓
ArchitectureDiagram

Relationship
    ↓
RelatedWork
```

This creates a clean bridge from content architecture to frontend architecture.

---

# 94. Relationship to User Journey

The visual system should reinforce the UX journey.

```text
DISCOVER
Hero

↓

NOTICE
Featured Work

↓

TRY
Demo

↓

UNDERSTAND
Explanation

↓

INSPECT
Architecture

↓

TRUST
Evidence / Constraints

↓

EXPLORE
Related Work

↓

CONNECT
About / Connect
```

Every major visual component therefore has a job in the journey.

---

# 95. The Most Important Design Rule

Do not design the website as a sequence of beautiful screens.

Design it as a **system of reusable evidence and interaction components**.

The page is merely one composition of that system.

---

# 96. Final Visual Principle

MAKATA.ai should feel like:

> **You have entered a working engineer's laboratory.**

Not:

> "You are looking at an engineer's résumé."

The visual language should therefore make systems, experiments, measurements, constraints, and discoveries feel like first-class objects.

The design should be attractive enough to invite exploration, but restrained enough that the **engineering remains the spectacle**.

---

# 97. Final Design North Star

When choosing between two designs, prefer the one that:

> **makes the work easier to see, the system easier to understand, the evidence easier to inspect, and the next discovery easier to find.**

Everything else is secondary.
