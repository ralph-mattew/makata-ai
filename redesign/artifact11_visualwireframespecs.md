# MAKATA.ai — Visual & Wireframe Specification

**Artifact 11 — Screen Layouts, Responsive Composition & Visual Hierarchy**

---

# 1. Purpose

This specification translates the MAKATA.ai information architecture and copy system into visual layouts.

It defines:

- page composition
- section order
- visual hierarchy
- desktop behavior
- tablet behavior
- mobile behavior
- demo placement
- architecture visualization
- project cards
- experiment cards
- technical evidence
- navigation
- whitespace
- CTA placement

It is intentionally **implementation-independent**.

The goal is to determine what the interface should look and feel like before deciding exactly how to code it.

---

# 2. Visual North Star

The website should feel like:

> **Walking into an engineer's AI laboratory.**

Not:

> Walking into a SaaS landing page.

The visual hierarchy should therefore be:

```text
ENGINEERING
    ↓
EVIDENCE
    ↓
INTERACTION
    ↓
EXPLANATION
    ↓
IDENTITY
    ↓
DECORATION
```

Decoration should never compete with engineering.

---

# 3. Global Layout System

Use a consistent responsive grid.

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│                         NAVIGATION                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                     MAIN CONTENT                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                          FOOTER                             │
└─────────────────────────────────────────────────────────────┘
```

Content should occupy a constrained maximum width rather than stretching indefinitely.

---

# 4. Container Types

Three primary containers:

### Wide

For:

- architecture diagrams
- project showcases
- benchmark comparisons
- large interactive demos

### Standard

For:

- cards
- project descriptions
- homepage sections
- technical sections

### Reading

For:

- field notes
- experiment explanations
- longer technical prose

Reading width should generally remain around **60–80 characters per line**.

---

# 5. Global Header

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│ MAKATA.ai       Work   Lab   Notes   About       Connect    │
└─────────────────────────────────────────────────────────────┘
```

Characteristics:

- compact
- persistent or sticky only if it improves navigation
- minimal visual noise
- clear active state
- no oversized logo treatment

---

# 6. Header Behavior

The header should visually recede when the user is reading.

Possible behavior:

```text
Scroll down
→ compact header

Scroll up
→ navigation available
```

Do not introduce this interaction unless it improves usability.

A simple static header is preferable to complicated motion.

---

# 7. Homepage Wireframe

Overall:

```text
┌──────────────────────────────────────────────┐
│ NAVIGATION                                   │
├──────────────────────────────────────────────┤
│                                              │
│ HERO                                         │
│                                              │
│  AI systems / Edge AI                       │
│  Main positioning statement                  │
│                                              │
│  [Explore Work] [Enter Lab]                 │
│                                              │
│                SYSTEM / DEMO VISUAL         │
│                                              │
├──────────────────────────────────────────────┤
│ FEATURED WORK                                │
│                                              │
│ [ Xylo ] [ Unawain ] [ DCS ]                │
│                                              │
├──────────────────────────────────────────────┤
│ LIVE LAB                                     │
│                                              │
│       INTERACTIVE SYSTEM                     │
│                                              │
├──────────────────────────────────────────────┤
│ ENGINEERING FOCUS                            │
│                                              │
│ Edge AI   AI Systems   Reasoning   ...       │
│                                              │
├──────────────────────────────────────────────┤
│ EXPERIMENTS                                  │
│                                              │
│ [Experiment] [Experiment] [Experiment]      │
│                                              │
├──────────────────────────────────────────────┤
│ FIELD NOTES                                  │
│                                              │
│ Observation / Observation / Observation      │
│                                              │
├──────────────────────────────────────────────┤
│ ABOUT                                        │
│                                              │
│ Ralph + concise identity                     │
│                                              │
├──────────────────────────────────────────────┤
│ CONNECT                                      │
│                                              │
│ [Connect]                                    │
│                                              │
├──────────────────────────────────────────────┤
│ FOOTER                                       │
└──────────────────────────────────────────────┘
```

---

# 8. Hero Composition

The hero should not simply be a giant heading centered on the page.

Preferred composition:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  MAKATA.ai                                                  │
│                                                             │
│  I build and investigate                                    │
│  AI systems where                                           │
│  constraints matter.                                       │
│                                                             │
│  Supporting explanation...                                  │
│                                                             │
│  [Explore the Work]   [Enter the Lab]                      │
│                                                             │
│                                  ┌────────────────────────┐ │
│                                  │                        │ │
│                                  │ SYSTEM VISUALIZATION   │ │
│                                  │                        │ │
│                                  │ model → device →      │ │
│                                  │ result                 │ │
│                                  │                        │ │
│                                  └────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

The visual should preferably be derived from an actual system.

---

# 9. Hero Visual Candidates

Priority order:

### 1. Live system

Best option.

### 2. Architecture visualization

Strong fallback.

### 3. Experiment visualization

Also strong.

### 4. Technical telemetry

Potentially useful.

### 5. Abstract visual

Only if it communicates something meaningful.

Avoid decorative AI graphics.

---

# 10. Hero Animation

If animation exists, it should represent something real.

Examples:

- inference stages
- data movement
- model execution
- architecture state
- benchmark progression

Avoid:

- floating particles
- random glowing nodes
- infinite background motion
- decorative neural networks

---

# 11. Featured Work Layout

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│ SELECTED WORK                                               │
│                                                             │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│ │                 │ │                 │ │                 │ │
│ │ Xylo            │ │ Unawain         │ │ DCS             │ │
│ │                 │ │                 │ │                 │ │
│ │ visual          │ │ visual          │ │ visual          │ │
│ │                 │ │                 │ │                 │ │
│ │ description     │ │ description     │ │ description     │ │
│ │                 │ │                 │ │                 │ │
│ │ → Explore       │ │ → Explore       │ │ → Explore       │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

# 12. Project Card Hierarchy

Visual priority:

```text
Visual
 ↓
Project name
 ↓
One-sentence explanation
 ↓
Technical metadata
 ↓
Status
 ↓
Action
```

Do not turn cards into miniature landing pages.

---

# 13. Project Card Visuals

Prefer:

- application screenshots
- actual system output
- architecture fragments
- benchmark visualizations
- device imagery when relevant

Avoid stock imagery.

---

# 14. Live Lab Section

This section should feel distinct from the portfolio.

Possible layout:

```text
┌─────────────────────────────────────────────────────────────┐
│ LIVE LAB                                                     │
│                                                             │
│ Current investigation                                      │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │                INTERACTIVE EXPERIMENT                  │ │
│ │                                                         │ │
│ │ Question                                                │ │
│ │                                                         │ │
│ │ [Run Experiment]                                       │ │
│ │                                                         │ │
│ │ Result / telemetry                                     │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ What changed?                                               │
└─────────────────────────────────────────────────────────────┘
```

---

# 15. Engineering Focus Layout

Use a compact visual system rather than giant service cards.

```text
ENGINEERING FOCUS

┌──────────────────┐ ┌──────────────────┐
│ Edge AI          │ │ AI Systems       │
│                  │ │                  │
│ On-device        │ │ Architecture     │
│ inference        │ │ evaluation       │
└──────────────────┘ └──────────────────┘

┌──────────────────┐ ┌──────────────────┐
│ Document AI      │ │ Reasoning        │
│                  │ │                  │
│ Local document   │ │ Multi-perspective│
│ intelligence     │ │ synthesis        │
└──────────────────┘ └──────────────────┘
```

These are **capability maps**, not service offerings.

---

# 16. Experiment Cards

Experiment cards should look more like technical records than blog cards.

Example:

```text
┌──────────────────────────────────────────┐
│ EXPERIMENT                                │
│                                          │
│ Can model X maintain useful quality      │
│ under reduced memory constraints?        │
│                                          │
│ RESULT                                   │
│ Observed trade-off...                    │
│                                          │
│ STATUS     COMPLETED                    │
│ DEVICE     iPhone ...                   │
│                                          │
│ → Inspect experiment                     │
└──────────────────────────────────────────┘
```

---

# 17. Field Note Cards

Simpler than experiment cards:

```text
┌──────────────────────────────────────────┐
│ FIELD NOTE                               │
│                                          │
│ An observation about model behavior      │
│ under sustained device load.             │
│                                          │
│ OBSERVED                                 │
│ Sep 2026                                 │
│                                          │
│ → Read note                              │
└──────────────────────────────────────────┘
```

---

# 18. Work Index Wireframe

```text
┌──────────────────────────────────────────────┐
│ NAVIGATION                                   │
├──────────────────────────────────────────────┤
│                                              │
│ WORK                                         │
│ Systems I've built...                        │
│                                              │
│ [All] [Edge AI] [AI Systems] [Experimental] │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│ FEATURED                                     │
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ Xylo                                     │ │
│ │ large visual                            │ │
│ │ description                             │ │
│ └──────────────────────────────────────────┘ │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│ OTHER WORK                                  │
│                                              │
│ [Project] [Project] [Project]               │
│                                              │
└──────────────────────────────────────────────┘
```

---

# 19. Project Page Wireframe

This is one of the most important screens.

```text
┌─────────────────────────────────────────────────────────────┐
│ NAVIGATION                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ PROJECT HERO                                                 │
│                                                             │
│ Xylo                                                        │
│ Private document intelligence                                │
│                                                             │
│ STATUS   MODEL   DEVICE   PROCESSING                        │
│                                                             │
│ [Try Demo]                                                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ LIVE / INTERACTIVE DEMO                                     │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │                   DEMO                                  │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ OVERVIEW                                                    │
│                                                             │
│ Problem / Motivation / Capabilities                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ HOW IT WORKS                                                │
│                                                             │
│ Architecture                                                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ EVIDENCE                                                    │
│                                                             │
│ Metrics / benchmarks / observations                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ CONSTRAINTS                                                 │
│                                                             │
│ constraint → impact → response                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ WHAT DIDN'T WORK                                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ WHAT CHANGED                                                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ EXPERIMENTS / FIELD NOTES                                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ RELATED WORK                                                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ CONNECT                                                      │
└─────────────────────────────────────────────────────────────┘
```

---

# 20. Project Hero Visual Weight

Project pages should prioritize:

```text
Demo
>
Architecture
>
Evidence
>
Prose
```

This is intentional.

The visitor should encounter the system before encountering an essay about the system.

---

# 21. Demo Panel

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│ TRY IT                                                       │
│                                                             │
│ ┌────────────────────────┐   ┌────────────────────────────┐ │
│ │ INPUT                  │   │ OUTPUT                     │ │
│ │                        │   │                            │ │
│ │ sample.pdf             │ → │ summary                    │ │
│ │                        │   │ entities                   │ │
│ │ [Run Demo]             │   │ actions                    │ │
│ └────────────────────────┘   └────────────────────────────┘ │
│                                                             │
│ MODEL     DEVICE      PROCESSING       LATENCY              │
└─────────────────────────────────────────────────────────────┘
```

---

# 22. Demo State Visuals

### Ready

```text
Sample available
[Run]
```

### Processing

```text
Processing

Input
 ↓
Model
 ↓
Output
```

Only show stages that correspond to actual implementation.

### Result

Show structured output.

### Error

```text
Processing failed.

[Try Again]
[View Recorded Result]
```

where applicable.

---

# 23. Architecture Section

The architecture should occupy significant visual space.

```text
INPUT
  │
  ↓
DOCUMENT PROCESSING
  │
  ↓
MODEL
  │
  ↓
STRUCTURED OUTPUT
```

Then allow deeper inspection.

---

# 24. Architecture Interaction

Recommended levels:

### Level 1

Simple pipeline.

### Level 2

System components.

### Level 3

Technical details.

The visitor should never be forced to understand Level 3.

---

# 25. Architecture Visual Language

Use:

- boxes
- connectors
- labels
- boundaries
- model identifiers
- device identifiers
- processing-location indicators

Avoid:

- excessive 3D
- giant glowing nodes
- decorative circuit-board backgrounds
- meaningless motion

---

# 26. Evidence Section

Use structured evidence rather than giant statistics.

Example:

```text
┌─────────────────────────────────────────────────────────────┐
│ EVIDENCE                                                     │
│                                                             │
│ 1.8 s             20 runs            iPhone X              │
│ median latency    sample size        device                │
│                                                             │
│ ----------------------------------------------------------- │
│                                                             │
│ Model       Latency       Memory       Observation          │
│ Model A     ...           ...          ...                 │
│ Model B     ...           ...          ...                 │
└─────────────────────────────────────────────────────────────┘
```

---

# 27. Constraint Section

Visually differentiate constraints from ordinary prose.

```text
┌──────────────────────────────────────────────┐
│ CONSTRAINT                                   │
│                                              │
│ DEVICE MEMORY                                │
│                                              │
│ Impact                                       │
│ ...                                          │
│                                              │
│ Response                                     │
│ ...                                          │
│                                              │
│ Trade-off                                    │
│ ...                                          │
└──────────────────────────────────────────────┘
```

Multiple constraints can form a stack.

---

# 28. Failure Section

Use a restrained visual treatment.

```text
WHAT DIDN'T WORK

Attempt
────────────
Expected
────────────
Observed
────────────
Decision
────────────
Lesson
```

The visual should communicate technical history, not an error alert.

---

# 29. “What Changed?” Visual

This can become a signature MAKATA.ai component.

```text
BEFORE                         AFTER

Architecture A       →        Architecture B

Model X              →        Model Y

Cloud processing     →        Local processing
```

Below:

```text
WHY

Observation that caused the change...
```

---

# 30. Related Work

Use a graph-like visual relationship without building an actual graph.

Example:

```text
RELATED WORK

┌────────────┐
│ Xylo       │
└─────┬──────┘
      │ shared constraint
      ↓
┌────────────┐
│ Experiment │
└─────┬──────┘
      │ observation
      ↓
┌────────────┐
│ Field Note │
└────────────┘
```

This gives the feeling of a knowledge graph without requiring an unnecessary graph UI.

---

# 31. Lab Landing Page

```text
┌──────────────────────────────────────────────┐
│ LAB                                          │
│                                              │
│ What I'm investigating now.                  │
│                                              │
├──────────────────────────────────────────────┤
│ CURRENT INVESTIGATION                        │
│                                              │
│ Question                                     │
│                                              │
│ [Inspect]                                    │
├──────────────────────────────────────────────┤
│ RECENT EXPERIMENTS                           │
│                                              │
│ [Experiment] [Experiment]                   │
├──────────────────────────────────────────────┤
│ BENCHMARKS                                  │
│                                              │
│ [Benchmark Explorer]                        │
├──────────────────────────────────────────────┤
│ OPEN QUESTIONS                              │
│                                              │
│ ? Question                                   │
│ ? Question                                   │
└──────────────────────────────────────────────┘
```

---

# 32. Experiment Page

Use a technical notebook-like structure.

```text
┌──────────────────────────────────────────────┐
│ EXPERIMENT                                   │
│                                              │
│ Question                                     │
│                                              │
│ STATUS / DATE / PROJECT                      │
├──────────────────────────────────────────────┤
│ HYPOTHESIS                                  │
├──────────────────────────────────────────────┤
│ METHOD                                      │
├──────────────────────────────────────────────┤
│ RESULTS                                     │
│                                              │
│ measurements / observations                 │
├──────────────────────────────────────────────┤
│ INTERPRETATION                              │
├──────────────────────────────────────────────┤
│ LIMITATIONS                                 │
├──────────────────────────────────────────────┤
│ NEXT QUESTION                               │
└──────────────────────────────────────────────┘
```

---

# 33. Benchmark Page

Benchmark pages should prioritize methodology.

```text
┌──────────────────────────────────────────────┐
│ BENCHMARK                                   │
│                                              │
│ QUESTION                                     │
├──────────────────────────────────────────────┤
│ CONDITIONS                                  │
│ Device / model / runtime / input            │
├──────────────────────────────────────────────┤
│ RESULTS                                     │
│                                              │
│ chart / table                               │
├──────────────────────────────────────────────┤
│ INTERPRETATION                              │
├──────────────────────────────────────────────┤
│ LIMITATIONS                                 │
└──────────────────────────────────────────────┘
```

---

# 34. Notes Page

The Notes page should be visually lighter.

```text
┌──────────────────────────────────────────────┐
│ NOTES                                        │
│                                              │
│ Observations from the lab.                   │
├──────────────────────────────────────────────┤
│                                              │
│ FIELD NOTE                                   │
│ On-device inference under sustained load     │
│ OBSERVED · Sep 2026                          │
│                                              │
├──────────────────────────────────────────────┤
│ FIELD NOTE                                   │
│ ...                                          │
└──────────────────────────────────────────────┘
```

---

# 35. About Page

The About page should be intentionally restrained.

```text
┌──────────────────────────────────────────────┐
│ ABOUT                                        │
│                                              │
│ Ralph Palomaria                              │
│                                              │
│ AI engineer building and investigating       │
│ AI systems.                                  │
│                                              │
├──────────────────────────────────────────────┤
│ WHAT I WORK ON                               │
│                                              │
│ Edge AI                                      │
│ AI systems                                   │
│ Applied intelligence                         │
│ Experimentation                              │
├──────────────────────────────────────────────┤
│ HOW I WORK                                  │
│                                              │
│ Build → measure → learn                      │
├──────────────────────────────────────────────┤
│ SELECTED WORK                               │
├──────────────────────────────────────────────┤
│ PROFESSIONAL LINKS                           │
└──────────────────────────────────────────────┘
```

---

# 36. Connect Page

Keep it simple.

```text
┌──────────────────────────────────────────────┐
│ CONNECT                                      │
│                                              │
│ Working on something interesting?            │
│                                              │
│ AI systems                                  │
│ Edge AI                                     │
│ Architecture                                │
│ Applied AI                                  │
│ Collaboration                               │
│                                              │
│ [LinkedIn] [Email]                           │
└──────────────────────────────────────────────┘
```

If an actual contact form is needed, place it below the direct contact options.

---

# 37. Mobile Layout

Mobile should not simply be desktop stacked vertically.

It should be **recomposed**.

Example homepage:

```text
NAV

HERO
Title
Description
CTA
Visual

FEATURED WORK
Project
Project
Project

LIVE LAB
Demo

ENGINEERING FOCUS
Capability
Capability

EXPERIMENTS
Experiment
Experiment

NOTES
Note
Note

ABOUT

CONNECT
```

---

# 38. Mobile Project Page

Recommended order:

```text
Project name
Status
Description

Try Demo

Demo

Overview

Architecture

Evidence

Constraints

Failures

What Changed

Experiments

Related Work
```

Do not bury the demo below five screens of prose.

---

# 39. Mobile Architecture

Architecture diagrams should:

- remain readable
- support horizontal scrolling when necessary
- avoid tiny labels
- allow progressive expansion
- preserve system boundaries

Do not force a complicated desktop architecture into a tiny viewport.

---

# 40. Mobile Tables

Technical tables should support:

- horizontal scrolling
- priority columns
- responsive cards where appropriate

Do not shrink text until it becomes unreadable.

---

# 41. Mobile Cards

Cards should generally become one-column.

Avoid horizontal carousels unless there is a compelling interaction reason.

A carousel can hide content and make exploration less predictable.

---

# 42. Mobile Demos

Touch-first controls.

Avoid:

- hover-dependent interactions
- tiny controls
- dense parameter panels
- complex drag interactions

Sample input should remain prominent.

---

# 43. Tablet Layout

Tablet can use:

```text
2-column cards
```

where appropriate.

Architecture diagrams may retain a wider layout.

The design should adapt based on available space rather than assuming fixed device categories.

---

# 44. Responsive Breakpoint Philosophy

Do not begin with:

```text
mobile = 375
tablet = 768
desktop = 1440
```

and force everything around those numbers.

Instead:

> Let the content determine where the layout needs to change.

Breakpoints should be discovered during implementation.

---

# 45. Vertical Rhythm

Sections should feel distinct without looking like unrelated pages.

Use:

```text
small spacing
→ related elements

medium spacing
→ related components

large spacing
→ major conceptual transition
```

Avoid excessive whitespace that makes the site feel empty.

---

# 46. Visual Density

MAKATA.ai should be **information-rich but not information-dense**.

That distinction matters.

Information-rich:

```text
Architecture
Evidence
Metadata
Experiments
Results
```

Information-dense:

```text
Too many labels
Too many cards
Too many metrics
Too many colors
Too many controls
```

The first is desirable.

The second is not.

---

# 47. Typography Hierarchy

Visual hierarchy should communicate:

```text
Page
 ↓
Section
 ↓
Subsection
 ↓
Evidence
 ↓
Metadata
```

Use monospace selectively for:

- model names
- runtimes
- metrics
- code
- technical identifiers
- status labels

Do not use monospace for all body text.

---

# 48. Color Hierarchy

Color should primarily communicate:

```text
interaction
status
system state
emphasis
```

Not:

```text
decoration
```

A mostly restrained palette should make interactive/evidentiary elements more noticeable.

---

# 49. Borders & Surfaces

Use subtle borders and surfaces to create structure.

Avoid:

- excessive rounded cards
- huge shadows
- glassmorphism everywhere
- gradient-heavy containers

The interface should feel like a technical instrument, not a fintech dashboard.

---

# 50. Motion

Motion should explain something.

Good:

```text
Input
 ↓
Processing
 ↓
Result
```

Bad:

```text
Everything continuously moves.
```

Recommended motion principles:

- short
- purposeful
- state-based
- interruptible
- reduced-motion compatible

---

# 51. Visual Hierarchy of Evidence

When evidence exists, it should visually outrank commentary.

For example:

```text
[Measured Result]

Explanation...

[Architecture]

Explanation...

[Constraint]

Explanation...
```

not:

```text
Huge paragraph

Huge paragraph

Tiny benchmark
```

---

# 52. Signature Visual Components

The redesign should eventually establish several recognizable MAKATA.ai components:

### 1. System Panel

Shows a working system.

### 2. Architecture Explorer

Shows how it works.

### 3. Evidence Panel

Shows measurements.

### 4. Constraint Block

Shows what limits it.

### 5. Failure Block

Shows what didn't work.

### 6. What Changed

Shows engineering evolution.

### 7. Next Question

Shows what remains unresolved.

These can become the visual language of the site.

---

# 53. Visual Relationship Between Content Types

Projects:

> **Built**

Experiments:

> **Tested**

Benchmarks:

> **Measured**

Field Notes:

> **Observed**

Failures:

> **Didn't work**

Ideas:

> **Could investigate**

This distinction should be visible through small labels and component structure.

---

# 54. Visual Status Language

Example:

```text
● ACTIVE
○ EXPERIMENTAL
✓ RELEASED
× ARCHIVED
```

The symbols should supplement text, not replace it.

Color should not be the only signal.

---

# 55. Desktop-to-Mobile Priority

When space becomes constrained, preserve:

### First

Project identity

### Second

Demo/evidence

### Third

Architecture

### Fourth

Important technical metadata

### Fifth

Supporting prose

### Last

Decorative visuals

Nothing essential should disappear merely because the screen is smaller.

---

# 56. Accessibility

Every visual component must support:

- keyboard navigation
- visible focus
- semantic headings
- accessible labels
- sufficient contrast
- screen-reader-readable status
- reduced motion
- touch-friendly controls

Architecture diagrams require textual equivalents.

Charts require accessible summaries.

---

# 57. Performance

The visual design must not create an unnecessarily heavy website.

Heavy elements should load lazily:

- live demos
- interactive diagrams
- benchmark visualizations
- video
- large images

Initial page rendering should remain lightweight.

---

# 58. Visual Anti-Patterns

Do not introduce:

### Generic AI background

```text
glowing neural network
```

### SaaS hero

```text
huge headline
gradient background
three feature cards
```

### Dashboard overload

```text
15 metrics
7 charts
12 controls
```

### Portfolio cliché

```text
About me
Skills
Projects
Testimonials
Contact
```

### Futuristic AI cliché

```text
3D brain
holographic interface
blue neon
```

The site should look like an engineering environment, not an AI-themed template.

---

# 59. Homepage Visual Priority

The first viewport should roughly communicate:

```text
40% identity + positioning
30% actual engineering visual
20% navigation/actions
10% supporting metadata
```

The exact proportions can change during implementation.

The principle is:

> **The engineering should be visible immediately.**

---

# 60. Project Page Visual Priority

Project pages should roughly prioritize:

```text
Demo
Architecture
Evidence
Constraints
Prose
```

This is deliberate.

---

# 61. Lab Visual Priority

Lab should prioritize:

```text
Current question
Experiment
Result
Uncertainty
```

The Lab should feel unfinished in the productive sense.

It should communicate:

> **Something is being investigated here right now.**

---

# 62. About Visual Priority

About should prioritize:

```text
Person
 ↓
Work
 ↓
Thinking style
 ↓
Professional context
```

Not:

```text
Résumé
 ↓
Résumé
 ↓
Résumé
```

---

# 63. Connect Visual Priority

Connect should be almost frictionless.

The visitor should see a contact path immediately.

Do not hide contact information behind elaborate UI.

---

# 64. Wireframe Acceptance Test

A screenshot of the site should be recognizable as MAKATA.ai even before reading the words.

It should communicate:

```text
AI
+
Engineering
+
Experiments
+
Evidence
+
Systems
```

rather than:

```text
Generic AI startup
```

---

# 65. 5-Second Test

Show only the first viewport.

Ask:

> What kind of website is this?

Expected understanding:

> An AI engineer's working laboratory / technical portfolio.

---

# 66. 30-Second Test

Ask:

> What has this person actually built?

Expected:

- Xylo
- Unawain
- DCS
- other visible work

---

# 67. 60-Second Test

Ask:

> What makes this different from a normal developer portfolio?

Expected:

- live systems
- experiments
- architecture
- evidence
- constraints
- failures

---

# 68. 5-Minute Test

A technically interested visitor should be able to discover:

- how something works
- what was measured
- what constrained it
- what failed
- what changed
- what is being investigated now

without contacting the owner.

---

# 69. Implementation Sequence

Do not redesign all screens simultaneously.

Recommended sequence:

```text
1. Global shell
       ↓
2. Homepage
       ↓
3. One project page
       ↓
4. Demo component
       ↓
5. Architecture component
       ↓
6. Evidence / benchmark components
       ↓
7. Remaining projects
       ↓
8. Lab
       ↓
9. Notes
       ↓
10. About / Connect
```

---

# 70. Pilot Page

The **Xylo project page** should be the first serious visual implementation candidate if it remains the richest available demonstration.

It should stress-test:

- hero
- demo
- architecture
- metadata
- evidence
- constraints
- failure
- related work
- responsive layout

If the component system survives Xylo, it can be generalized.

If it doesn't, change the system before building the rest of the site.

---

# 71. What Not to Build Yet

Do not initially build:

- 3D environments
- animated particle systems
- complex knowledge graphs
- elaborate page transitions
- massive dashboard interfaces
- sophisticated personalization
- dozens of filter controls
- complicated CMS UI

These may become useful later.

They are not prerequisites for a strong MAKATA.ai.

---

# 72. Visual Design Principle

The final interface should create this progression:

```text
SEE IT
   ↓
TRY IT
   ↓
UNDERSTAND IT
   ↓
INSPECT IT
   ↓
QUESTION IT
```

That is the visual expression of the entire MAKATA.ai strategy.

---

# 73. Final Visual Principle

The redesign should avoid making the website itself the spectacle.

Instead:

> **The systems should be the spectacle.**

The interface exists to make those systems:

- visible
- interactive
- understandable
- measurable
- inspectable
- imperfect
- evolving

The strongest visual moment on MAKATA.ai should therefore not be an animation.

It should be the moment a visitor realizes:

> **“Wait — I can actually run this.”**

Then:

> **“I can see how it works.”**

Then:

> **“I can see what happened when it failed.”**

And finally:

> **“I want to see what this person builds next.”**

That is the visual experience the redesign should optimize for.
