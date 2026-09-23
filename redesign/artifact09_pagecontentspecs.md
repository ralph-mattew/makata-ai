# MAKATA.ai — Information Architecture & Page Content Specification

**Artifact 9 — Page Structure, Content Hierarchy, Navigation & Conversion Paths**

---

# 1. Purpose

This artifact defines the actual information architecture and content structure of MAKATA.ai.

The previous artifacts established:

- brand strategy
- information architecture principles
- UX
- visual design
- technical architecture
- content schemas
- interactive demo behavior

This artifact turns those principles into a **concrete website structure**.

The goal is to answer:

> **What should exist on MAKATA.ai, where should it exist, and what should a visitor encounter there?**

---

# 2. Primary Site Model

MAKATA.ai should be understood as four interconnected surfaces:

```text id="r7c8n4"
                 MAKATA.ai
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
       WORK         LAB         NOTES
        │            │            │
        └────────────┼────────────┘
                     ↓
                   ABOUT
                     │
                     ↓
                  CONNECT
```

### Work

What has been built.

### Lab

What is being investigated.

### Notes

What has been learned or observed.

### About

Who is doing the work.

### Connect

What to do if someone wants to engage professionally.

---

# 3. Primary Navigation

Desktop:

```text id="1k9c7m"
MAKATA.ai

Work
Lab
Notes
About

Connect
```

The navigation should remain intentionally small.

Do not expose every content type as a top-level navigation item.

For example:

```text id="5j4q8x"
Projects
Experiments
Benchmarks
Field Notes
Ideas
Technologies
Concepts
```

should **not** all become top-level navigation.

That creates information architecture noise.

---

# 4. Mobile Navigation

Mobile navigation:

```text id="x5p2s7"
MAKATA.ai
                ☰
```

Menu:

```text id="9v6c3k"
Work
Lab
Notes
About
Connect
```

The menu should not become a massive taxonomy explorer.

---

# 5. Global Footer

Footer should contain:

```text id="0h7m4s"
MAKATA.ai

AI systems • Edge AI • experimentation

Work
Lab
Notes
About
Connect

GitHub
LinkedIn
App Store
```

Only include links that actually exist.

The footer can also contain:

```text id="n5w4q8"
© 2026 MAKATA.ai
```

and appropriate legal/privacy links if required.

---

# 6. Homepage

Route:

```text id="5p8m3y"
/
```

The homepage should not attempt to explain everything.

Its job is to make a visitor think:

> **“This person actually builds and investigates AI systems.”**

---

# 7. Homepage Structure

Recommended:

```text id="2q6r8v"
Homepage
│
├── Hero
├── Featured Work
├── Live Lab
├── Engineering Focus
├── Selected Experiments
├── Field Notes
├── About Preview
└── Connect
```

---

# 8. Homepage Hero

The hero should establish three things immediately:

1. What MAKATA.ai is.
2. What kind of work happens here.
3. What the visitor can do next.

Conceptual structure:

```text id="3v8p4m"
MAKATA.ai

AI systems, Edge AI, and experimental engineering.

I build and investigate systems where models,
devices, constraints, and reasoning interact.

[Explore the Work]
[Enter the Lab]
```

The exact wording should be refined separately during copywriting.

---

# 9. Hero Visual

Preferred visual hierarchy:

```text id="8w3y5p"
Actual working system
        ↓
Interactive architecture
        ↓
Experiment
        ↓
Technical visualization
        ↓
Abstract visual
```

The homepage should not open with:

- generic AI imagery
- stock photographs
- glowing neural networks
- floating particles
- generic humanoid robots

The engineering itself should provide the visual interest.

---

# 10. Featured Work

Purpose:

> Establish credibility quickly.

Structure:

```text id="7g4p9s"
SELECTED WORK

Xylo
Private document intelligence

Unawain
Localized document intelligence

DCS
Multi-perspective synthesis system
```

Each card should contain:

- name
- concise description
- status
- technologies
- meaningful visual
- clear reason to click

---

# 11. Featured Work Rule

Do not display ten projects simply because ten projects exist.

The homepage should show the work most useful for understanding MAKATA.ai.

A visitor should be able to reach the major systems within one or two interactions.

---

# 12. Live Lab Preview

Purpose:

> Demonstrate that MAKATA.ai is active, not archival.

Possible structure:

```text id="9w7m3p"
LIVE LAB

An experiment currently running.

[Interactive experiment]

What am I testing?

[Read the experiment]
```

This section should change as the lab evolves.

It should not become a static marketing block.

---

# 13. Engineering Focus

Instead of generic “Services” or “Skills,” use capability areas.

Possible categories:

```text id="f6v2x8"
Edge AI
On-device inference
AI systems architecture
Document intelligence
Multi-agent systems
AI experimentation
Model evaluation
```

Each should connect to actual evidence.

Example:

```text id="y4r8k2"
EDGE AI

Work involving models running under
real device constraints.

→ Xylo
→ Unawain
→ Edge experiments
```

---

# 14. Selected Experiments

Purpose:

> Demonstrate engineering thinking, not just finished products.

Each experiment card:

```text id="2m7x4q"
Question
Short result
Status
Related project
```

Example structure:

```text id="4c8y7n"
Can a smaller model outperform a larger model
under constrained mobile conditions?

RESULT
Observed trade-off between quality and latency.

[Inspect Experiment]
```

The wording must reflect actual evidence.

---

# 15. Field Notes

Purpose:

> Show ongoing observation and technical curiosity.

Example:

```text id="v7k5n3"
FIELD NOTES

• On-device inference under thermal pressure
• What model size actually changes on mobile
• When multi-agent synthesis adds useful diversity
```

Field Notes should be short enough to browse.

---

# 16. About Preview

The homepage should eventually reveal the person behind the work.

Structure:

```text id="x9f3w6"
ABOUT

Ralph Palomaria

AI engineer building systems across
Edge AI, AI architecture, experimentation,
and applied intelligence.

[About Ralph]
```

The homepage does not need a résumé.

---

# 17. Homepage Connect

The final section should be contextual rather than aggressive.

Possible:

```text id="m4y8p2"
Working on something interesting?

If you're exploring AI systems, Edge AI,
or applied AI architecture, let's talk.

[Connect]
```

---

# 18. Work Index

Route:

```text id="9g4w6k"
/work
```

Purpose:

> Provide a browsable map of things that have been built.

Structure:

```text id="2f8v5q"
Work
├── Intro
├── Featured
├── Projects
└── Related concepts/technologies
```

---

# 19. Work Index Header

Conceptually:

```text id="y5v7p2"
WORK

Systems I've built, from product prototypes
to experimental AI architectures.
```

Avoid generic language such as:

> “My Projects.”

---

# 20. Work Filters

Filters should initially remain minimal.

Potential:

```text id="9h5r2x"
All
Edge AI
AI Systems
Document AI
Reasoning
Experimental
```

Do not build sophisticated filtering until content volume justifies it.

---

# 21. Project Card

Every project card should answer:

```text id="5x6p8z"
What is it?
Why is it interesting?
Can I inspect it?
```

Minimum:

```text id="3q7y4m"
Project name
Summary
Status
Technology
→ View project
```

---

# 22. Project Page

Route:

```text id="6v2m8p"
/work/[project]
```

Canonical structure:

```text id="w9p5c4"
Project
├── Hero
├── Demo
├── Overview
├── Capabilities
├── Architecture
├── Technical Details
├── Benchmarks
├── Constraints
├── Failures
├── Experiments
├── Lessons
├── Related Work
└── Connect
```

Sections should be omitted when there is no substantive content.

---

# 23. Project Hero

The hero should immediately establish:

```text id="1y8r5q"
PROJECT NAME

One-sentence explanation.

STATUS
TECHNOLOGIES
DEPLOYMENT

[Try Demo]
```

Optional:

```text id="2w6c8n"
GitHub
App Store
Website
```

---

# 24. Project Overview

Answer:

> What is this?

Structure:

```text id="7q4m5y"
Overview

Problem
Why it exists
What it does
Who it is for
```

Keep it concise.

---

# 25. Capabilities

Show concrete functionality.

Example:

```text id="p5v6y8"
Capabilities

Document summarization
Document chat
Entity extraction
Action-item extraction
```

Avoid generic claims such as:

> “Revolutionizing document intelligence.”

---

# 26. Project Demo

The demo should appear early.

Recommended order:

```text id="7h3n5x"
Hero
 ↓
Demo
 ↓
Overview
```

This intentionally puts evidence before extensive explanation.

---

# 27. Architecture

Architecture answers:

> How does this actually work?

Progressive levels:

```text id="x6q8m2"
Simple
Input → AI → Output

↓

System
Input → Processing → Model → Output

↓

Technical
Full architecture
```

---

# 28. Technical Details

Possible information:

```text id="4w7p3q"
Model
Framework
Device
Runtime
Deployment
Processing location
Version
```

Only show meaningful fields.

---

# 29. Benchmarks

Benchmark section answers:

> What happened under measured conditions?

Display:

```text id="9m2r5x"
Metric
Value
Conditions
Device
Model
Methodology
```

If there is insufficient evidence, do not manufacture a benchmark section.

---

# 30. Constraints

This section is mandatory for technically mature projects.

Structure:

```text id="8p5y6r"
CONSTRAINT

Device memory

IMPACT
Model size limits available options.

RESPONSE
Changed model/runtime strategy.

TRADE-OFF
...
```

This is where engineering judgment becomes visible.

---

# 31. Failures

If relevant:

```text id="0x7m4q"
WHAT DIDN'T WORK

Approach
Expected result
Observed result
What changed
```

Failure content should not be presented as an embarrassing appendix.

It is part of the engineering history.

---

# 32. Experiments

Project pages should expose experiments associated with the project.

Example:

```text id="3m8y6p"
RELATED EXPERIMENTS

Model comparison
Thermal behavior
Latency optimization
Prompt strategy
```

---

# 33. Lessons

The lessons section should answer:

> What changed because this project existed?

Examples:

```text id="q8w5v2"
The smaller model produced acceptable quality
under significantly lower memory pressure.

The apparent latency problem was partly caused
by thermal behavior rather than inference alone.
```

These must be supported by actual evidence.

---

# 34. Related Work

End projects with meaningful connections.

Example:

```text id="7v4x8m"
RELATED WORK

Unawain
Shared device constraints

Experiment #12
Model/runtime comparison

Field Note
Thermal behavior
```

The relationship should be explicitly explained.

---

# 35. Lab

Route:

```text id="5y8p3n"
/lab
```

Purpose:

> Show what is being investigated now.

The Lab should feel more dynamic than Work.

---

# 36. Lab Structure

```text id="q6r7w2"
LAB
├── Current Investigation
├── Recent Experiments
├── Benchmarks
└── Open Questions
```

---

# 37. Current Investigation

One investigation can receive visual priority.

Structure:

```text id="9p4x7m"
CURRENTLY INVESTIGATING

Question

Why does X happen under Y conditions?

Status
Running

Latest observation
...

[Inspect]
```

This creates the feeling that the laboratory is alive.

---

# 38. Recent Experiments

Chronological order is appropriate here.

Unlike the Work page, Lab should favor:

> **What happened recently?**

rather than:

> **What is most important?**

---

# 39. Open Questions

This section is valuable because it preserves uncertainty.

Examples:

```text id="2m8v4q"
OPEN QUESTIONS

Does the observed latency pattern persist
across different devices?

Does additional agent diversity actually
increase useful novelty?

What is the practical memory threshold
for this model class?
```

These should originate from real unresolved questions.

---

# 40. Benchmarks

Route:

```text id="7x4p8m"
/lab/benchmarks
```

Purpose:

> Make measurements inspectable.

Possible sections:

```text id="5n7q3y"
Recent measurements
Model comparisons
Device comparisons
Historical results
Methodology
```

---

# 41. Benchmark Page

Each benchmark should show:

```text id="8m5r2x"
QUESTION
METHOD
CONDITIONS
RESULT
INTERPRETATION
LIMITATION
```

The limitation is as important as the number.

---

# 42. Experiment Page

Route:

```text id="2q8v5m"
/lab/[experiment]
```

Structure:

```text id="p6y4x8"
Experiment
├── Question
├── Hypothesis
├── Context
├── Method
├── Variables
├── Results
├── Observations
├── Limitations
├── Related benchmarks
└── Next question
```

---

# 43. Experiment Header

Example:

```text id="7r5m8q"
EXPERIMENT

Can model X maintain useful quality
under reduced memory constraints?

STATUS
COMPLETED

DATE
September 2026
```

---

# 44. Hypothesis

Clearly label the hypothesis.

```text id="9y6p3m"
HYPOTHESIS

Reducing model size will improve runtime
stability but may reduce output quality.
```

Do not rewrite the hypothesis after the result to make it appear more accurate.

---

# 45. Method

Describe only what matters.

```text id="4x8q6v"
METHOD

Devices
Models
Inputs
Runs
Variables
Evaluation approach
```

A technically interested visitor should be able to understand the experiment without reading implementation code.

---

# 46. Results

Separate:

```text id="5p7m2x"
RESULT
```

from:

```text id="8q4v6y"
INTERPRETATION
```

This prevents interpretation from being mistaken for measurement.

---

# 47. Limitations

Every serious experiment should have an explicit limitations section where relevant.

Examples:

```text id="7m5x9q"
small sample
limited devices
specific model version
controlled conditions
subjective evaluation
```

This is part of the evidence.

---

# 48. Next Question

End experiments with:

```text id="2v6p8m"
NEXT QUESTION

Does the same behavior appear
under sustained thermal load?
```

Then provide:

```text id="8q5y3r"
[Related experiment]
```

when one exists.

---

# 49. Notes

Route:

```text id="4x7m2p"
/notes
```

Purpose:

> Provide a lower-friction publishing surface for observations and technical thinking.

Notes should not require the full structure of an experiment.

---

# 50. Notes Index

Display:

```text id="9p6y4m"
Field Notes

Latest
├── Note
├── Note
├── Note

Topics
├── Edge AI
├── Models
├── Systems
└── Reasoning
```

Keep browsing lightweight.

---

# 51. Field Note Page

Route:

```text id="7m4q8x"
/notes/[slug]
```

Structure:

```text id="5y8p3n"
Title
Date
Observation
Context
Implication
Confidence
Related Work
Next Question
```

---

# 52. About

Route:

```text id="2x6m9q"
/about
```

Purpose:

> Explain the person behind the systems.

It should answer:

- Who is Ralph?
- What does he work on?
- Why these problems?
- What kind of work is he interested in?
- Where can someone learn more?

---

# 53. About Structure

```text id="7p5x4m"
About
├── Identity
├── What I Work On
├── Selected Capabilities
├── Engineering Philosophy
├── Selected Work
└── Professional Links
```

---

# 54. Engineering Philosophy

This should not become motivational copy.

It can communicate principles such as:

```text id="8m3q6v"
Build before theorizing.

Measure where possible.

Treat constraints as part of the problem.

Preserve uncertainty.

Investigate failures.

Change the representation when
the current one stops being useful.
```

These are principles, not claims of superiority.

---

# 55. Professional Identity

The About page should connect naturally to professional contexts.

Potential links:

```text id="5y8p2m"
LinkedIn
GitHub
CV
Contact
```

The exact links should be configured only if available.

---

# 56. Connect

Route:

```text id="9q4x7m"
/connect
```

Purpose:

> Provide a clear path for professional engagement.

Potential reasons:

```text id="6m8p3y"
AI architecture
Edge AI
Technical leadership
Applied AI
Research collaboration
AI product development
```

Only include areas that accurately represent the intended positioning.

---

# 57. Connect Page Structure

```text id="8x5q2m"
Let's talk.

What are you working on?

[Professional inquiry]
[Collaboration]
[AI system / technical discussion]

Contact methods
```

Avoid a large generic form unless it is genuinely needed.

---

# 58. Contact Friction

The user should not have to:

- create an account
- answer unnecessary questions
- navigate multiple pages
- solve a complicated funnel

to contact the site owner.

---

# 59. Search

Search should initially be omitted unless the content volume warrants it.

Once MAKATA.ai contains substantial content, search could cover:

```text id="4p7m8x"
Projects
Experiments
Notes
Concepts
Technologies
```

Search results should show content type.

Example:

```text id="5x2q9m"
Xylo AI
PROJECT

On-device document intelligence
```

---

# 60. Error Pages

### 404

Should maintain the site's personality.

Example:

```text id="7m4x8p"
NOT FOUND

This path doesn't point to anything
currently published.

[Explore the Work]
[Enter the Lab]
```

### Demo error

Should be specific and recoverable.

### Server error

Should remain simple to the visitor while being observable internally.

---

# 61. Empty States

Empty states should not imply failure.

Example:

```text id="8q6m3y"
No experiments published yet.

This area will contain active investigations
as they are documented.
```

Only use this where an empty section is intentionally part of the product.

---

# 62. URL Strategy

URLs should be:

- short
- descriptive
- stable
- human-readable

Preferred:

```text id="5p8x4m"
/work/xylo
/work/unawain
/work/dcs

/lab/experiments
/lab/benchmarks
/lab/[slug]

/notes/[slug]
```

Avoid implementation-derived URLs.

Bad:

```text id="7m4q9x"
/page?id=123
/project-template-v2
/demo-final-final
```

---

# 63. Internal Linking Strategy

Each content page should expose relevant next paths.

Example:

```text id="6x8p3m"
PROJECT
 ↓
Experiment
 ↓
Benchmark
 ↓
Field Note
 ↓
Related Project
```

The site should feel like a network.

---

# 64. Navigation vs Discovery

Navigation answers:

> Where can I go?

Related work answers:

> What should I explore next?

These are different systems.

Do not overload the primary navigation with discovery functionality.

---

# 65. Content Priority

Not all content deserves equal prominence.

### Highest prominence

- working projects
- meaningful demonstrations
- strong evidence
- important current experiments

### Medium

- field notes
- benchmarks
- technical explanations

### Lower

- older experiments
- archived work
- speculative ideas

This is editorial hierarchy, not a quality ranking.

---

# 66. Homepage Content Refresh

The homepage should not require redesign whenever a new project is created.

It should pull from structured content:

```text id="4m7x8q"
featured projects
latest experiments
latest notes
current investigation
```

This makes the homepage a dynamic index over the underlying knowledge system.

---

# 67. Recommended Initial Content

The first release does **not** need dozens of entries.

A credible initial content set could be:

```text id="9p5m2x"
3 major projects
3–5 experiments
3 field notes
1 benchmark set
1 About page
1 Connect page
```

Depth is preferable to artificial volume.

---

# 68. Project Page Minimum

A project should be publishable with:

```text id="7x4q8m"
Hero
Overview
Capabilities
Demo or evidence
Architecture
Lessons
Related Work
```

Additional sections should be added only when justified.

---

# 69. Experiment Minimum

```text id="5m8p3y"
Question
Method
Result
Observation
Limitation
Next Question
```

---

# 70. Field Note Minimum

```text id="8q6x4m"
Observation
Context
Implication
Related Work
```

---

# 71. Content Depth Rule

A page should not become long merely because the architecture allows it.

The rule is:

> **Add a section when it adds evidence, understanding, or useful context.**

Do not add:

- “Why choose us”
- testimonials
- generic statistics
- meaningless feature grids
- artificial case studies
- filler paragraphs

simply because conventional websites contain them.

---

# 72. Professional Conversion Path

The professional journey should be:

```text id="6p8m4x"
Interesting work
      ↓
Technical credibility
      ↓
Who built it?
      ↓
Professional context
      ↓
Connect
```

The website should not aggressively push contact.

The work should create the reason to contact.

---

# 73. Technical Visitor Journey

```text id="9x5q7m"
Homepage
 ↓
Project
 ↓
Demo
 ↓
Architecture
 ↓
Benchmark
 ↓
Experiment
 ↓
Related Work
```

This is where MAKATA.ai can differentiate itself from a conventional portfolio.

---

# 74. Recruiter / Hiring Manager Journey

```text id="4m6p8x"
Homepage
 ↓
Selected Work
 ↓
Project
 ↓
Technical depth
 ↓
About
 ↓
Professional profile
```

The visitor should be able to understand the professional signal without reading every technical detail.

---

# 75. Potential Client Journey

```text id="8q3m5x"
Homepage
 ↓
Relevant capability
 ↓
Project
 ↓
Demo
 ↓
Technical feasibility
 ↓
Connect
```

The client should see evidence before receiving a sales pitch.

---

# 76. Research / Collaboration Journey

```text id="5p7x4m"
Lab
 ↓
Experiment
 ↓
Result
 ↓
Unresolved question
 ↓
Related work
 ↓
Connect
```

The unresolved question is important because it creates a natural opening for collaboration.

---

# 77. Information Architecture Rule

The website should support multiple paths through the same content.

There is no requirement that every visitor follow:

```text id="9m4x7p"
Home
→ Work
→ About
→ Connect
```

A visitor may instead go:

```text id="6q8p3m"
Google
→ Experiment
→ Project
→ Demo
→ About
```

or:

```text id="5x7m2q"
LinkedIn
→ Project
→ Architecture
→ Experiment
```

Every substantive page must therefore stand on its own.

---

# 78. Final Site Map

```text id="4p8m6x"
MAKATA.ai
│
├── /
│
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

Future additions:

```text id="7m3q8x"
 /tools
 /research
 /ideas
```

should be introduced only when the content warrants them.

---

# 79. Page Priority

## P0 — Launch-critical

```text id="5x8m4p"
Homepage
Work
Xylo
Unawain
DCS
About
Connect
```

## P1 — Differentiation

```text id="9q6m3x"
Lab
Experiments
Benchmarks
Field Notes
Architecture explorers
```

## P2 — Scale

```text id="4p7x8m"
Search
Tools
Ideas
Research index
Advanced discovery
```

---

# 80. Definition of Done

The information architecture is complete when:

- [ ] primary navigation defined
- [ ] mobile navigation defined
- [ ] homepage structure defined
- [ ] Work index defined
- [ ] project page defined
- [ ] Lab defined
- [ ] experiment page defined
- [ ] benchmark page defined
- [ ] Notes defined
- [ ] Field Note defined
- [ ] About defined
- [ ] Connect defined
- [ ] error states defined
- [ ] empty states defined
- [ ] URL structure defined
- [ ] internal linking defined
- [ ] visitor journeys defined
- [ ] page priorities defined

---

# 81. Final Principle

MAKATA.ai should not feel like a collection of pages.

It should feel like **one body of engineering work viewed from different angles**.

A project leads to an experiment.

An experiment leads to a benchmark.

A benchmark leads to a constraint.

A constraint leads to a field note.

A field note leads to another question.

Another question leads to another project.

And somewhere in that chain, the visitor realizes:

> **There is a person behind all of this who is actually building, testing, and learning from these systems.**

That is the information architecture MAKATA.ai should embody.
