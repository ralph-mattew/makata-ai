# MAKATA.ai

## Information Architecture & Content Model

### Redesign Foundation — Version 1.0

---

# 1. Purpose

This document defines the structural architecture of MAKATA.ai.

It translates the Product & Brand Strategy into:

- site hierarchy
- navigation
- page types
- content types
- relationships between content
- URL structure
- discovery mechanisms
- project organization
- metadata
- future CMS/data requirements
- implementation boundaries

The objective is to prevent MAKATA.ai from becoming a collection of individually designed pages.

Instead, the site should operate as a **connected body of AI engineering work**.

---

# 2. Core Architectural Principle

The website should have two simultaneous structures:

## Surface structure

What visitors see:

```text
Home
Projects
Experiments
Field Notes
Live Lab
About
Connect
```

## Underlying structure

How the knowledge is connected:

```text
Projects
    ↕
Experiments
    ↕
Technologies
    ↕
Capabilities
    ↕
Benchmarks
    ↕
Field Notes
    ↕
Ideas / Research
```

The first structure should remain simple.

The second structure should enable deeper discovery.

---

# 3. Recommended Top-Level Sitemap

```text
/
│
├── /work
│   │
│   ├── /work/xylo
│   ├── /work/unawain
│   └── /work/dcs
│
├── /lab
│   │
│   ├── /lab/experiments
│   ├── /lab/benchmarks
│   └── /lab/demos
│
├── /notes
│   │
│   └── /notes/[slug]
│
├── /ideas
│   │
│   └── /ideas/[slug]
│
├── /about
│
└── /connect
```

Not every route needs to exist in the first release.

The architecture should nevertheless anticipate them.

---

# 4. Navigation Philosophy

The primary navigation should remain small.

Recommended:

```text
MAKATA.ai

Work
Lab
Notes
About

[Explore / Connect]
```

Potential alternative:

```text
Work
Experiments
Notes
About
```

with Live Lab accessible through Work/Lab rather than occupying permanent navigation.

The navigation should not attempt to expose every content type.

---

# 5. Primary Information Hierarchy

The hierarchy should be:

```text
MAKATA.ai
│
├── Work
│   ├── Xylo
│   ├── Unawain
│   └── DCS
│
├── Lab
│   ├── Experiments
│   ├── Benchmarks
│   └── Live Demos
│
├── Notes
│
├── Ideas
│
├── About
│
└── Connect
```

However, visitors should be able to move between these areas contextually.

For example:

```text
Xylo
 ↓
On-device inference
 ↓
Experiment
 ↓
Field Note
 ↓
Benchmark
 ↓
Another project
```

The navigation provides the map.

The content graph provides the exploration.

---

# 6. Content Taxonomy

MAKATA.ai should distinguish between different kinds of work.

## 6.1 Project

A substantial system, application, product, or engineering initiative.

Examples:

- Xylo
- Unawain
- DCS

A Project answers:

> "What did you build?"

---

## 6.2 Experiment

A focused technical investigation.

Examples:

- comparing local models
- testing mobile inference
- testing memory behavior
- evaluating latency
- experimenting with multi-agent architectures

An Experiment answers:

> "What did you investigate?"

---

## 6.3 Field Note

A concise technical observation or lesson.

Examples:

- unexpected model behavior
- deployment discovery
- architecture lesson
- implementation observation

A Field Note answers:

> "What did you learn?"

---

## 6.4 Benchmark

A structured measurement.

Examples:

- model latency
- device performance
- memory consumption
- accuracy
- token throughput
- cost

A Benchmark answers:

> "How did the system perform?"

---

## 6.5 Demo

An interactive experience.

A Demo answers:

> "Can I see it working?"

A Demo may exist independently or be embedded inside another content type.

---

## 6.6 Idea

A conceptual exploration.

Examples:

- CROSS-META
- new reasoning architectures
- evaluation concepts
- emerging AI system ideas

An Idea answers:

> "What are you thinking about?"

---

## 6.7 Capability

A conceptual grouping of technical capability.

Examples:

- Edge AI
- On-device inference
- Document intelligence
- Multi-agent systems
- AI evaluation
- AI orchestration

Capabilities should generally **not become conventional marketing pages initially**.

They are primarily metadata and discovery mechanisms.

---

## 6.8 Technology

A technology, framework, model, platform, or infrastructure component.

Examples:

- Apple Foundation Models
- Gemma
- Firebase
- React
- local inference frameworks

Again, these should initially function primarily as metadata.

---

# 7. Project Data Model

Every Project should have a consistent structure.

```text
Project
│
├── identity
│   ├── title
│   ├── slug
│   ├── shortDescription
│   ├── status
│   └── date
│
├── positioning
│   ├── problem
│   ├── thesis
│   └── significance
│
├── demonstration
│   ├── demo
│   ├── screenshots
│   └── video
│
├── engineering
│   ├── architecture
│   ├── technologies
│   ├── constraints
│   ├── tradeoffs
│   └── implementation
│
├── evidence
│   ├── benchmarks
│   ├── experiments
│   └── results
│
├── reflection
│   ├── failures
│   ├── lessons
│   └── openQuestions
│
├── relationships
│   ├── relatedProjects
│   ├── relatedExperiments
│   ├── relatedNotes
│   └── relatedIdeas
│
└── external
    ├── liveUrl
    ├── repository
    └── appStore
```

Not every field needs to be populated for every project.

The schema should allow incomplete work.

---

# 8. Project Lifecycle

Projects should have an explicit status.

Recommended values:

```text
idea
prototype
experimental
active
released
paused
archived
```

This is important because MAKATA.ai should not imply that every project is a polished commercial product.

For example:

```text
Xylo
Status: Released / Active

DCS
Status: Experimental

CROSS-META
Status: Research / Idea
```

The exact values can be adjusted later.

---

# 9. Experiment Data Model

Experiments should have a lighter but rigorous structure.

```text
Experiment
│
├── title
├── slug
├── date
├── status
├── question
├── hypothesis
├── setup
├── variables
├── method
├── results
├── observations
├── limitations
├── conclusion
├── nextQuestion
│
├── technologies
├── capabilities
│
├── relatedProjects
├── relatedExperiments
├── relatedNotes
└── benchmarks
```

The important fields are:

**Question → Hypothesis → Method → Result → Observation → Limitation → Next Question**

This creates the experimental loop described in the Product Strategy.

---

# 10. Field Note Data Model

Field Notes should be deliberately lightweight.

```text
FieldNote
│
├── title
├── slug
├── date
├── summary
├── observation
├── context
├── implication
├── relatedProject
├── relatedExperiment
├── technologies
└── tags
```

A Field Note should not require the structure of a formal article.

The objective is to make publishing small discoveries easy.

---

# 11. Benchmark Data Model

Benchmarks require structured data.

```text
Benchmark
│
├── title
├── metric
├── unit
├── testEnvironment
├── device
├── model
├── version
├── input
├── result
├── baseline
├── date
├── methodology
├── limitations
└── relatedWork
```

Examples of metrics:

```text
Latency
Memory
Tokens/sec
Accuracy
Completion rate
Energy
Cost
Thermal behavior
```

The system should preserve the testing context.

A number without context should not be presented as universal.

---

# 12. Demo Data Model

A Demo should be treated as a reusable content object.

```text
Demo
│
├── title
├── description
├── type
├── entryMode
├── input
├── output
├── processingMode
├── model
├── device
├── latency
├── privacy
├── limitations
├── status
└── fallback
```

Possible processing modes:

```text
On-device
Browser-local
Cloud
Hybrid
Unknown / Experimental
```

This is especially important for MAKATA.ai because the distinction between local and cloud processing is technically meaningful.

---

# 13. Technology Metadata

Technologies should not simply be listed in a giant skills section.

Instead:

```text
Technology
│
├── name
├── category
├── version
├── description
└── relatedWork
```

Categories could include:

```text
Models
Frameworks
Platforms
Languages
Infrastructure
Devices
AI APIs
Deployment
```

A project page can then automatically surface:

> Built with Apple Foundation Models · Swift · iOS

rather than requiring manually written lists everywhere.

---

# 14. Capability Taxonomy

Recommended initial capabilities:

```text
Edge AI
On-device AI
Local-first AI
Mobile AI
Document Intelligence
AI Agents
Multi-agent Systems
AI Reasoning
AI Evaluation
AI Orchestration
AI Systems Architecture
AI Experimentation
```

Do not create dozens of capabilities initially.

The taxonomy should emerge from actual work.

---

# 15. Relationship Model

The most important structural feature of MAKATA.ai is the relationship system.

A Project can connect to:

```text
Project
 ↕
Experiment
 ↕
Benchmark
 ↕
Field Note
 ↕
Technology
 ↕
Capability
 ↕
Idea
```

For example:

```text
Xylo
│
├── Capability
│   ├── Edge AI
│   ├── Local AI
│   └── Document Intelligence
│
├── Technology
│   ├── Apple Foundation Models
│   └── iOS
│
├── Experiments
│   ├── Model memory behavior
│   └── Consecutive document chat
│
├── Benchmarks
│   └── Device latency
│
└── Field Notes
    └── Thermal / memory observations
```

This creates the foundation for intelligent related-content discovery.

---

# 16. Related Work Algorithm

Initially, related work can be manually curated.

Later, it can become partially automated.

A simple relationship score could consider:

```text
Shared capability
+ Shared technology
+ Shared project
+ Shared experiment
+ Shared problem
+ Shared deployment environment
```

For example:

```text
Xylo
 ↓
Unawain
```

because both involve:

- mobile AI
- document intelligence
- local processing

while:

```text
Xylo
 ↓
DCS
```

might be connected through:

- AI systems
- experimentation
- evaluation

but not necessarily presented as equally related.

The system should support **weighted relationships**, rather than assuming all relationships are equally strong.

---

# 17. URL Strategy

Use human-readable, stable URLs.

Recommended:

```text
/work/xylo
/work/unawain
/work/dcs

/lab/experiments/[slug]
/lab/benchmarks/[slug]
/lab/demos/[slug]

/notes/[slug]

/ideas/[slug]
```

Avoid URLs tied to implementation details.

For example, avoid:

```text
/projects?id=37
/page?id=abc
/work/project123
```

Stable URLs matter because these pages may eventually be shared externally.

---

# 18. Homepage as a Content Aggregator

The homepage should not contain all the site's content.

It should dynamically surface selected content.

Potential modules:

```text
Hero
↓
Featured Project
↓
Live Experiment / Demo
↓
Selected Work
↓
Latest Experiment
↓
Technical Observation
↓
Capabilities
↓
Explore the Lab
↓
About
```

The homepage becomes an **index into the system**, not the system itself.

---

# 19. Work Index

`/work` should answer:

> "What substantial systems has Ralph built?"

Each project card should communicate:

```text
Project
What it does
Primary technical theme
Status
Interaction
```

Example conceptual card:

```text
XYLO

Private document intelligence
running locally on supported devices.

Edge AI · Document Intelligence · Mobile AI

[Try Demo] [Inspect]
```

Avoid turning cards into miniature résumé entries.

---

# 20. Lab Index

`/lab` should answer:

> "What is currently being investigated?"

Potential structure:

```text
LAB

Current investigations

[Experiment]
[Experiment]
[Experiment]

Live systems

[Demo]
[Demo]

Recent measurements

[Benchmark]
[Benchmark]
```

This makes the site feel active.

---

# 21. Notes Index

`/notes` should answer:

> "What has been learned?"

The page should favor concise technical observations over traditional chronological blogging.

Potential filters:

```text
All
Edge AI
Mobile
Models
Architecture
Evaluation
AI Systems
```

---

# 22. Ideas Index

`/ideas` should answer:

> "What concepts are being explored?"

This is where concepts such as CROSS-META can live without pretending they are finished systems.

Each Idea should explicitly communicate maturity:

```text
Concept
Hypothesis
Prototype
Experimental
Research direction
```

---

# 23. About

The About page should explain:

- who Ralph is
- engineering background
- areas of expertise
- current interests
- why MAKATA.ai exists
- professional profile
- contact

However:

**About should not be the primary source of credibility.**

The work should already have established credibility before visitors arrive here.

---

# 24. Connect

The Connect page should remain simple.

Potential destinations:

```text
LinkedIn
GitHub
Email
Professional opportunities
Collaboration
Technical discussion
```

The CTA should be contextualized.

Instead of:

> "Hire me!"

prefer:

> "Interested in the systems I'm building or exploring a similar problem?"

---

# 25. Discovery Mechanisms

Visitors should be able to discover work through several routes.

## Route A — Navigation

```text
Work → Xylo
```

## Route B — Related Work

```text
Xylo → Unawain
```

## Route C — Technology

```text
Apple Foundation Models → Xylo → Field Note
```

## Route D — Capability

```text
Edge AI → Xylo → Unawain → Experiment
```

## Route E — Experiment

```text
Experiment → Project → Benchmark → Field Note
```

## Route F — Chronology

```text
Latest experiment
↓
Previous experiment
```

The site therefore supports both **intentional browsing** and **serendipitous discovery**.

---

# 26. Search

Search should not be a priority for the initial version.

Once content grows, search should operate across:

```text
Projects
Experiments
Notes
Benchmarks
Ideas
Technologies
Capabilities
```

Search results should indicate the content type.

Example:

```text
Xylo
PROJECT

On-device document intelligence

---

Testing Gemma on iPhone
EXPERIMENT

Memory behavior under consecutive inference
```

---

# 27. Filtering

Filters should be introduced only when content volume justifies them.

Potential dimensions:

```text
Type
Technology
Capability
Status
Device
Model
Deployment
Date
```

Avoid building elaborate filtering when there are only 10 pieces of content.

---

# 28. Content Maturity

Not every item should have equal visual prominence.

Recommended maturity levels:

```text
Seed
Experiment
Prototype
Active
Released
Archived
```

These states can affect how content is presented.

For example:

**Released project**

→ polished presentation

**Experiment**

→ technical notebook presentation

**Idea**

→ exploratory presentation

This prevents the site from implying false equivalence between a commercialized application and an early hypothesis.

---

# 29. Content Governance

Every content item should have:

```text
Created
Updated
Status
Author
Version
```

For technical claims, also consider:

```text
Test date
Environment
Model version
Device
Scope
```

This becomes important as AI models and device capabilities change rapidly.

---

# 30. Content vs Presentation

This is a major implementation rule.

Content should be separated from page layout.

For example, the Xylo data should conceptually look like:

```text
{
  title,
  description,
  status,
  problem,
  architecture,
  experiments,
  benchmarks,
  limitations,
  lessons,
  relatedWork
}
```

rather than embedding everything directly into a page component.

The rendering system then determines how that content is presented.

This makes future redesigns much easier.

---

# 31. Component-Level Content Blocks

Project pages should be composed from reusable blocks.

Potential blocks:

```text
Hero
ProjectMeta
Problem
Statement
Demo
Metric
Architecture
Pipeline
TechnologyList
Experiment
Benchmark
Constraint
Failure
Lesson
Timeline
FieldNote
RelatedWork
ExternalLinks
CTA
```

A project should be able to compose these blocks differently without requiring a completely new page implementation.

---

# 32. Flexible Page Composition

Do not force every project into an identical page.

Instead:

```text
Project A

Hero
Demo
Architecture
Benchmark
Lessons
Related Work
```

while:

```text
Project B

Hero
Problem
Demo
Experiment
Failure
Field Note
Architecture
```

Both use the same component vocabulary.

This balances consistency with authenticity.

---

# 33. Recommended Initial Content Set

For the first redesign, prioritize:

### Projects

1. Xylo
2. Unawain
3. DCS

### Experiments

2–5 strongest experiments.

### Field Notes

3–5 useful technical observations.

### Benchmarks

Only measurements that are genuinely informative.

### Ideas

1–3 concepts worth exposing.

This is enough to demonstrate the architecture without creating artificial content.

---

# 34. Metadata Strategy

Every content item should support:

```text
title
slug
type
status
date
summary
tags
capabilities
technologies
relatedContent
featured
```

Projects additionally:

```text
liveDemo
repository
externalLinks
```

Experiments additionally:

```text
hypothesis
method
result
limitations
```

Benchmarks additionally:

```text
metric
unit
environment
model
device
result
```

---

# 35. Featured Content

Content should have a `featured` property.

This allows the homepage to surface selected work without hardcoding it.

Example:

```text
featured: true
```

However, "featured" should mean:

> "Important to the current MAKATA.ai narrative"

not:

> "This is objectively my best work."

This keeps the content model neutral and flexible.

---

# 36. Temporal Content

MAKATA.ai should communicate that engineering work evolves.

Therefore support:

```text
Current
Recent
Historical
Archived
```

A project may have multiple iterations.

For example:

```text
Xylo
│
├── Initial prototype
├── Local model experiments
├── Foundation Model integration
└── Current implementation
```

The exact timeline can be surfaced later.

---

# 37. The Knowledge Graph — Future Direction

The underlying relationships eventually allow a richer experience:

```text
           Edge AI
          /       \
       Xylo      Unawain
        |           |
     Document     Language
    Intelligence   AI
        |
    Experiment
        |
    Benchmark
        |
    Field Note
```

However:

> **Do not build a giant visual knowledge graph as part of the initial redesign.**

The graph should first exist in the **data model**.

The UI should expose relationships naturally through:

- related work
- tags
- contextual links
- "explore this topic"
- next experiment

Only later should an explicit graph visualization be considered.

---

# 38. Initial Architecture vs Future Architecture

## Version 1

```text
Static / structured content
        +
Reusable components
        +
Manual relationships
```

## Version 2

```text
Structured content
        +
Automated related-content scoring
        +
Search
        +
Filtering
```

## Version 3

```text
Knowledge graph
        +
Semantic discovery
        +
Personalized exploration
        +
Interactive technical maps
```

The architecture should permit this evolution without requiring it immediately.

---

# 39. Information Architecture Principle

The site should distinguish:

### Where something belongs

from:

### How someone discovers it.

For example:

An experiment may live under:

```text
/lab/experiments
```

but be discovered through:

```text
Xylo
 ↓
Related Experiment
```

This distinction is critical.

The navigation should remain simple while the discovery network becomes richer.

---

# 40. Anti-Patterns

Avoid:

### Everything under `/projects`

This hides the distinction between products, experiments, and ideas.

### Giant `/blog`

This encourages conventional blogging rather than technical field notes.

### Technology-first navigation

Visitors shouldn't have to choose between:

> Python / Swift / Gemini / Firebase / React

to understand the work.

### Skills taxonomy as primary navigation

The site should demonstrate skills through work.

### Excessive tagging

If everything has 20 tags, nothing has meaningful metadata.

### Automated "related content" too early

Manual curation is better while the content corpus is small.

---

# 41. Implementation Priority

## P0 — Required for redesign

```text
Home
Work
Project content model
Project pages
About
Connect
Reusable project components
Related Work
```

## P1 — Add after foundation

```text
Lab
Experiments
Field Notes
Live Demos
Benchmarks
```

## P2 — Add when content justifies it

```text
Ideas
Search
Filtering
Technology pages
Capability pages
```

## P3 — Experimental future

```text
Knowledge graph visualization
Semantic discovery
Dynamic recommendations
Interactive research maps
```

---

# 42. Architectural Decision

The recommended architecture is:

> **Simple navigation + structured content + rich relationships + progressive discovery.**

Not:

> Complex navigation + hundreds of categories.

The complexity should exist underneath the experience rather than being imposed on the visitor.

---

# 43. Canonical Content Relationship

The most important relationship pattern is:

```text
PROJECT
   ↓
DEMO
   ↓
EXPERIMENT
   ↓
BENCHMARK
   ↓
FIELD NOTE
   ↓
LESSON
   ↓
RELATED PROJECT
```

This represents the fundamental MAKATA.ai story:

> **Build → Test → Measure → Observe → Learn → Build again**

---

# 44. Final Information Architecture

The resulting conceptual model is:

```text
                         MAKATA.ai
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
        WORK                LAB               NOTES
          │                  │                  │
     ┌────┼────┐       ┌─────┼─────┐           │
     │    │    │       │     │     │           │
   Xylo Unawain DCS  Experiments Benchmarks Demos
     │    │    │       │     │     │           │
     └────┴────┴───────┴─────┴─────┴───────────┘
                         │
                    CONTENT GRAPH
                         │
             ┌───────────┼───────────┐
             │           │           │
        Technologies Capabilities Ideas
             │           │           │
             └───────────┼───────────┘
                         │
                       ABOUT
                         │
                      CONNECT
```

The visual hierarchy remains simple.

The underlying system remains extensible.

---

# 45. Source-of-Truth Rule

From this point onward, the following hierarchy should govern the redesign:

```text
Product Strategy
      ↓
Information Architecture
      ↓
User Experience
      ↓
Design System
      ↓
Technical Architecture
      ↓
Implementation
```

If a later design decision conflicts with this document, the conflict should be explicit rather than silently patched in code.

---

# 46. Final Architectural Principle

MAKATA.ai should not merely answer:

> **"What projects has Ralph made?"**

It should eventually allow a visitor to discover:

> **"What problems is he exploring?"**

> **"What systems did he build?"**

> **"What experiments did he run?"**

> **"What did he measure?"**

> **"What surprised him?"**

> **"What did he learn?"**

> **"What is he investigating next?"**

That is the difference between a **portfolio architecture** and an **engineering-laboratory architecture**.
