# MAKATA.ai — Content Model & Schema Specification

**Artifact 7 — Content Architecture, Schemas & Relationship Model**

---

# 1. Purpose

This artifact defines how MAKATA.ai represents its intellectual and engineering work as structured content.

The content system must support:

- AI projects
- Edge AI projects
- experiments
- benchmarks
- field notes
- technical discoveries
- failures
- lessons
- technologies
- relationships between work
- live demonstrations
- architecture descriptions

The primary objective is:

> **Make publishing new engineering work easier without flattening the technical differences between projects.**

---

# 2. Core Content Philosophy

MAKATA.ai should not model everything as a generic “blog post.”

There are fundamentally different kinds of engineering evidence.

```text id="w6f2f4"
PROJECT
"What did I build?"

EXPERIMENT
"What did I test?"

BENCHMARK
"How did it perform?"

FIELD NOTE
"What did I observe?"

FAILURE
"What didn't work?"

IDEA
"What might be worth investigating?"
```

These entities may reference each other.

---

# 3. Content Graph

The conceptual model is:

```text id="w6w8v7"
                    TECHNOLOGY
                    /    |    \
                   /     |     \
                  ↓      ↓      ↓
              PROJECT ← EXPERIMENT
                │  \        /    │
                │   \      /     │
                ↓    ↓    ↓      ↓
            BENCHMARK  FIELD NOTE
                │         │
                └────┬────┘
                     ↓
                  LESSON
                     │
                     ↓
                NEXT QUESTION
```

This should initially be implemented using ordinary structured relationships.

A graph database is unnecessary.

---

# 4. Entity Types

The initial content system contains:

1. Project
2. Experiment
3. Benchmark
4. Field Note
5. Technology
6. Concept
7. Failure
8. Idea
9. Demo
10. Architecture
11. Person/Profile
12. Site Metadata

Not every entity requires its own public page.

---

# 5. Project

A **Project** represents something substantially built.

Examples include:

- Xylo AI
- Unawain
- DCS
- future AI systems
- client-independent POCs
- Edge AI prototypes

---

## Project Schema

```text id="c7f7d0"
Project
{
    id
    slug
    title
    shortTitle
    tagline
    summary
    description

    status
    featured

    dates
    technologies[]
    concepts[]
    modalities[]
    deploymentModels[]

    problem
    motivation
    capabilities[]

    demo
    architecture

    constraints[]
    benchmarks[]
    failures[]
    lessons[]

    experiments[]
    fieldNotes[]

    relatedProjects[]
    relatedIdeas[]

    images[]
    videos[]

    links[]

    seo
}
```

---

# 6. Project Identity

### `id`

Stable internal identifier.

Example:

```text id="qg1fsv"
xylo
unawain
dcs
```

### `slug`

Public URL identifier.

Example:

```text id="m2m35b"
xylo
unawain
dcs
```

### `title`

Human-facing project name.

### `shortTitle`

Used where screen space is limited.

### `tagline`

One concise statement explaining what the project is.

### `summary`

Short description used in cards, search, previews, and metadata.

### `description`

Longer overview.

---

# 7. Project Status

Status should communicate development state honestly.

Recommended values:

```text id="w5p7ac"
CONCEPT
PROTOTYPE
EXPERIMENTAL
ACTIVE
BETA
RELEASED
ARCHIVED
```

Do not use status as a marketing ranking.

“Experimental” can be more informative than “Beta” when appropriate.

---

# 8. Featured Flag

A project may have:

```text id="4qkl8p"
featured: true
```

This controls editorial placement.

It does **not** imply:

- technical superiority
- commercial success
- importance
- quality

It simply means:

> This is currently worth putting in front of visitors.

---

# 9. Dates

Projects may contain:

```text id="8e7i3u"
started
updated
released
archived
```

Only populate fields that are meaningful.

Avoid fake precision.

---

# 10. Technologies

Technologies should be references, not arbitrary strings repeated across projects.

Example:

```text id="v0fl6q"
technologies:
  - Apple Foundation Models
  - Gemma
  - Swift
  - iOS
```

The exact technology vocabulary should eventually be normalized.

---

# 11. Technology Schema

```text id="g9y4n2"
Technology
{
    id
    slug
    name
    category
    description
    relatedProjects[]
    relatedExperiments[]
}
```

Possible categories:

```text id="q2f2v8"
MODEL
FRAMEWORK
PLATFORM
LANGUAGE
INFRASTRUCTURE
METHOD
DEVICE
PROTOCOL
```

---

# 12. Concepts

A Concept represents an engineering idea that crosses individual projects.

Examples:

```text id="z90s72"
on-device AI
local inference
privacy-preserving AI
multi-agent synthesis
model compression
Edge AI
document intelligence
```

Schema:

```text id="v56d87"
Concept
{
    id
    slug
    name
    description
    relatedProjects[]
    relatedExperiments[]
    relatedNotes[]
}
```

Concepts are useful because they allow visitors to discover work by **idea**, not only by project.

---

# 13. Problem

Every major project should identify the problem it addresses.

Structure:

```text id="1yqz40"
problem
{
    statement
    context
    affectedUsers
    existingApproach
}
```

The content should remain concise.

The project page should not begin with an enormous essay.

---

# 14. Motivation

Motivation explains why the project was worth building.

It should distinguish:

```text id="c3b4hc"
Problem
```

from:

```text id="a6x4eg"
Why investigate this particular approach?
```

This distinction is particularly useful for experimental projects.

---

# 15. Capabilities

Capabilities describe what the system actually does.

Example:

```text id="nh7e5y"
capabilities:
  - document summarization
  - document chat
  - entity extraction
  - action-item extraction
```

Capabilities should describe functionality rather than marketing claims.

---

# 16. Modality

Normalize major interaction modalities.

Possible values:

```text id="9s4p1v"
TEXT
DOCUMENT
IMAGE
AUDIO
VIDEO
VOICE
MULTIMODAL
STRUCTURED_DATA
```

A project may have multiple modalities.

---

# 17. Deployment Model

Possible values:

```text id="qf6f6v"
ON_DEVICE
LOCAL
CLOUD
HYBRID
EDGE
PRECOMPUTED
```

These should describe the actual system architecture.

---

# 18. Demo Entity

A Demo represents something visitors can interact with.

```text id="jz4x6d"
Demo
{
    type
    status
    execution
    input
    output
    model
    device
    runtime
    processingLocation
    estimatedLatency
    privacy
    endpoint
    fallback
}
```

---

# 19. Demo Type

Possible values:

```text id="m6p5xg"
LIVE
PRECOMPUTED
HYBRID
INTERACTIVE_VISUALIZATION
SIMULATION
VIDEO
```

A project can have more than one demonstration.

---

# 20. Demo Execution

Represent execution explicitly.

```text id="0ynh2q"
execution
{
    client
    server
    externalProvider
}
```

Example:

```text id="b4b8b6"
client: false
server: true
externalProvider: true
```

For on-device AI:

```text id="c0u5po"
client: true
server: false
externalProvider: false
```

---

# 21. Demo Privacy

Privacy information should be explicit.

Possible values:

```text id="w6d5q7"
ON_DEVICE
SERVER_PROCESSING
THIRD_PARTY_PROCESSING
MIXED
NO_USER_DATA
PRECOMPUTED
```

A short explanation should accompany the status.

Never claim “private” merely because a system feels private.

---

# 22. Demo Input

Describe:

```text id="8ov5e7"
inputType
acceptedFormats
maximumSize
sampleAvailable
userInputAllowed
```

This allows the UI to construct the correct input interface.

---

# 23. Demo Output

Describe:

```text id="3n9yq4"
outputType
format
sampleAvailable
```

Examples:

```text id="i2h9a6"
SUMMARY
STRUCTURED_DATA
CHAT
CLASSIFICATION
VISUALIZATION
TEXT
```

---

# 24. Demo Fallback

Every live demo should have a fallback strategy.

```text id="z5m3g0"
fallback
{
    enabled
    type
    description
}
```

Possible fallback:

```text id="f80p3e"
PRECOMPUTED_RESULT
VIDEO
STATIC_EXAMPLE
NONE
```

---

# 25. Architecture Entity

Architecture describes how the system works.

```text id="8b1q3h"
Architecture
{
    overview
    layers[]
    nodes[]
    edges[]
    boundaries[]
    dataFlow
    executionLocation
}
```

---

# 26. Architecture Layers

Architecture can progressively disclose information.

### Level 1

```text id="j1t6u8"
Input
→ AI
→ Output
```

### Level 2

```text id="f8w1u4"
Input
→ preprocessing
→ model
→ postprocessing
→ interface
```

### Level 3

Full technical architecture.

The content model should support all three.

---

# 27. Architecture Nodes

```text id="2i4yru"
Node
{
    id
    label
    type
    description
    technology
    processingLocation
}
```

Possible types:

```text id="xq6zpu"
INPUT
PROCESSOR
MODEL
STORAGE
API
CLIENT
SERVER
OUTPUT
EXTERNAL_SERVICE
```

---

# 28. Architecture Edges

```text id="y7i0b1"
Edge
{
    source
    target
    label
}
```

This enables reusable architecture visualization.

---

# 29. Constraints

Constraints are first-class content.

Schema:

```text id="6f4bq0"
Constraint
{
    title
    description
    impact
    response
    status
}
```

Examples:

```text id="p0f4t5"
device memory
thermal throttling
model latency
API cost
offline requirement
battery consumption
model capability
```

---

# 30. Constraint Philosophy

A constraint should answer:

```text id="7w0u6d"
What limits the system?

Why does it matter?

What did we do about it?

What trade-off did that create?
```

This is more valuable than simply listing limitations.

---

# 31. Benchmark

A Benchmark represents a measured comparison or performance test.

```text id="6g6x6s"
Benchmark
{
    id
    title
    metric
    value
    unit
    baseline
    conditions
    device
    model
    version
    methodology
    date
    interpretation
}
```

---

# 32. Measurement Integrity

Every numerical claim should identify its epistemic status.

Possible labels:

```text id="l0c4a7"
MEASURED
OBSERVED
INFERRED
HYPOTHESIS
```

### MEASURED

Directly recorded through a defined procedure.

### OBSERVED

Behavior noticed during experimentation but not rigorously quantified.

### INFERRED

Conclusion derived from evidence.

### HYPOTHESIS

Proposed explanation requiring further testing.

This distinction is a core part of MAKATA.ai's credibility.

---

# 33. Benchmark Conditions

Never present:

```text id="7f3k3v"
Latency: 1.2 sec
```

without context when the number matters.

Prefer:

```text id="n8p3yh"
Latency
1.2 sec

Model
X

Device
Y

Input
Z

Condition
N runs
```

The content model must therefore support test conditions.

---

# 34. Benchmark Comparison

A benchmark may contain multiple observations.

```text id="2f5o5e"
results[]
{
    subject
    metric
    value
    unit
    conditions
}
```

This enables:

- model comparison
- device comparison
- architecture comparison
- before/after comparison

without hard-coding a specific chart structure.

---

# 35. Experiment

An Experiment represents a deliberate investigation.

Schema:

```text id="j5x0dg"
Experiment
{
    id
    slug
    title
    status
    date

    question
    hypothesis

    context
    method
    variables

    observations
    results

    benchmarks[]
    constraints[]

    conclusion
    limitations

    nextQuestion

    relatedProjects[]
    relatedExperiments[]
    relatedNotes[]
}
```

---

# 36. Experiment Anatomy

Every substantive experiment should try to answer:

```text id="9q5j8u"
QUESTION
↓
HYPOTHESIS
↓
METHOD
↓
RESULT
↓
OBSERVATION
↓
LIMITATION
↓
NEXT QUESTION
```

Not every experiment requires every field.

---

# 37. Experiment Status

Possible values:

```text id="8u8x1q"
PLANNED
RUNNING
COMPLETED
ABANDONED
REPEATING
```

“Abandoned” is valid research information.

An experiment does not need a positive result to be worth publishing.

---

# 38. Failure

Failure should be modeled separately when it contains useful engineering information.

```text id="7b0vqm"
Failure
{
    title
    context
    expected
    observed
    suspectedCause
    evidence
    response
    outcome
    lesson
}
```

---

# 39. Failure vs Error

A runtime error is not automatically a published “failure.”

### Error

Something broke during execution.

### Failure

An approach failed to satisfy an intended objective and produced a meaningful engineering lesson.

This distinction prevents the site from turning routine debugging noise into artificial content.

---

# 40. Field Note

A Field Note captures an observation that may not yet justify a full experiment.

```text id="8w0y8u"
FieldNote
{
    id
    slug
    title
    date

    observation
    context
    implication

    confidence
    relatedProjects[]
    relatedExperiments[]
    relatedConcepts[]

    nextQuestion
}
```

---

# 41. Field Note Epistemic Status

Use:

```text id="l1c3p7"
OBSERVED
INFERRED
HYPOTHESIS
```

A field note should not silently turn an observation into a fact.

---

# 42. Idea

An Idea represents a potential future investigation.

```text id="5p9j2e"
Idea
{
    id
    title
    premise
    motivation
    relatedConcepts[]
    relatedProjects[]
    openQuestions[]
    status
}
```

Possible status:

```text id="7h0f1u"
SEED
CONSIDERING
EXPLORING
PROMOTED_TO_EXPERIMENT
ARCHIVED
```

---

# 43. Next Question

The “next question” is particularly important.

Engineering work should not end with:

> “Result: X.”

It should often end with:

> “This raises another question.”

Schema:

```text id="w2g5b8"
NextQuestion
{
    question
    motivation
    relatedExperiment
}
```

This creates a natural research loop.

---

# 44. Related Work

Relationships should carry meaning.

Instead of:

```text id="2o0x4x"
relatedProjects: ["unawain", "dcs"]
```

prefer:

```text id="d8w8n7"
relatedWork:
[
    {
        id: "unawain",
        relationship: "shared_edge_ai_constraint"
    },
    {
        id: "dcs",
        relationship: "shared_synthesis_problem"
    }
]
```

---

# 45. Relationship Types

Initial relationship vocabulary:

```text id="o9o5v3"
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

Do not force relationships when the connection is weak.

---

# 46. Contradiction as a First-Class Relationship

Because the goal is not to create a perfectly coherent narrative, MAKATA.ai should allow:

```text id="9r8x4s"
Project A
    CONTRADICTS
Project B
```

or:

```text id="b6z3i5"
Experiment A
    CONTRADICTS
Experiment B
```

This allows the site to preserve:

- conflicting observations
- changing hypotheses
- failed assumptions
- competing approaches

rather than retrospectively making everything appear inevitable.

---

# 47. Lessons

Lessons should be concise and evidence-linked.

```text id="f8e5y7"
Lesson
{
    statement
    evidence[]
    confidence
    scope
}
```

The `scope` field matters.

A lesson may be:

```text id="y3t7t3"
device-specific
model-specific
experiment-specific
architecture-specific
general
```

Avoid turning a narrow observation into a universal claim.

---

# 48. Professional Profile

The site should have a structured representation of the person behind the work.

```text id="x4j8p9"
Profile
{
    name
    role
    positioning
    summary
    capabilities[]
    focusAreas[]
    professionalLinks[]
}
```

The profile should support the professional identity without turning the entire website into a résumé.

---

# 49. External Links

Links should be typed.

```text id="s5y4j2"
links:
[
    {
        type
        label
        url
    }
]
```

Possible types:

```text id="f5u0s8"
GITHUB
LINKEDIN
APP_STORE
WEBSITE
PAPER
DEMO
DOCUMENTATION
OTHER
```

---

# 50. SEO Metadata

Each public content entity may contain:

```text id="r6c8t0"
seo
{
    title
    description
    image
    noIndex
}
```

If metadata is omitted, the application should generate reasonable defaults.

---

# 51. Media

Media should be modeled separately.

```text id="m0e7r6"
Media
{
    type
    src
    alt
    caption
    width
    height
}
```

Possible types:

```text id="f0j7r2"
IMAGE
VIDEO
DIAGRAM
SCREENSHOT
GIF
AUDIO
```

Alt text is mandatory for meaningful images.

---

# 52. Content Validation

Schemas should validate:

- required fields
- allowed enum values
- URL format
- unique IDs
- unique slugs
- relationship references
- benchmark units
- status values

Invalid content should fail early rather than producing broken pages.

---

# 53. Required vs Optional Fields

Do not make everything mandatory.

### Project minimum

```text id="h4s7t5"
title
slug
summary
status
problem
capabilities
```

### Experiment minimum

```text id="z5w6r8"
title
slug
question
status
```

### Field Note minimum

```text id="u8x2m0"
title
slug
observation
date
```

This keeps publishing lightweight.

---

# 54. Content Quality Gates

Before publication, a project should answer:

### Identity

- What is it?

### Problem

- What problem does it address?

### Evidence

- Can the visitor see or run something?

### Mechanism

- How does it work?

### Constraints

- What limited it?

### Results

- What actually happened?

### Learning

- What changed?

### Next

- What remains unresolved?

A project does not need perfect answers to all of these.

But missing sections should be intentional.

---

# 55. Content Lifecycle

Content should evolve.

```text id="l2k8h6"
IDEA
 ↓
EXPERIMENT
 ↓
PROTOTYPE
 ↓
PROJECT
 ↓
ACTIVE
 ↓
ARCHIVED
```

An experiment can also remain an experiment indefinitely.

Do not force every experiment to become a product.

---

# 56. Versioning

Technical content should support versioning when results depend on:

- model version
- framework version
- device
- prompt
- algorithm
- architecture

A benchmark without version context can become misleading later.

---

# 57. Evidence Chain

Important claims should be traceable.

Conceptually:

```text id="3j2n7r"
CLAIM
 ↓
OBSERVATION
 ↓
EXPERIMENT
 ↓
BENCHMARK
 ↓
CONCLUSION
```

Example:

```text id="0u4v7x"
Claim:
Model A performs better on device X.

Evidence:
Benchmark B

Conditions:
Device X
Model version Y
N runs

Limitation:
Small test set
```

This is significantly more credible than presenting isolated performance numbers.

---

# 58. Epistemic Labels

MAKATA.ai should consistently distinguish:

```text id="2f6h5u"
MEASURED
OBSERVED
INFERRED
HYPOTHESIS
```

These labels can become reusable UI components.

Example:

```text id="4g5j7n"
MEASURED
Latency: 1.8 sec
```

versus:

```text id="7x2m5r"
HYPOTHESIS
Thermal throttling may explain the degradation.
```

This distinction should survive from content storage through presentation.

---

# 59. Example: Xylo

Conceptually:

```text id="d9r2u4"
Project
{
    title: "Xylo AI",
    status: "ACTIVE",

    technologies:
        [Apple Foundation Models, iOS],

    concepts:
        [on-device AI, document intelligence, privacy],

    modalities:
        [DOCUMENT, TEXT, VOICE],

    deploymentModels:
        [ON_DEVICE],

    capabilities:
        [
            summarization,
            document chat,
            entity extraction,
            action items
        ]
}
```

The actual claims and technical metadata should be populated from verified project information rather than inferred from this example.

---

# 60. Example: Unawain

Conceptually:

```text id="j4t5x8"
Project
{
    title: "Unawain",

    concepts:
        [
            on-device AI,
            language AI,
            privacy
        ],

    modalities:
        [DOCUMENT],

    deploymentModels:
        [ON_DEVICE],

    capabilities:
        [
            document analysis,
            Filipino-language transformation
        ]
}
```

Again, this is a structural example, not a claim about the final implementation.

---

# 61. Example: DCS

Conceptually:

```text id="0p5r8y"
Project
{
    title: "DCS",

    concepts:
        [
            multi-agent synthesis,
            adversarial reasoning,
            blindspot discovery
        ],

    capabilities:
        [
            multi-perspective generation,
            synthesis,
            adversarial analysis,
            constraint optimization
        ]
}
```

The deeper system architecture should live in the Architecture and Experiment entities rather than being compressed into the project summary.

---

# 62. Content-to-UI Mapping

The content model maps into reusable UI.

```text id="y3z6t7"
Project
 ↓
ProjectHero
ProjectOverview
CapabilityList
DemoPanel
ArchitectureDiagram
BenchmarkPanel
ConstraintBlock
FailureBlock
ExperimentSection
RelatedWork
```

```text id="8p5r4x"
Experiment
 ↓
ExperimentHeader
Question
Hypothesis
Method
Result
Observation
Limitation
NextQuestion
RelatedWork
```

```text id="0k7u9w"
FieldNote
 ↓
FieldNoteHeader
Observation
Context
Implication
Confidence
RelatedWork
NextQuestion
```

---

# 63. Content Density

The model should support multiple levels of depth.

### Level 1 — Card

```text id="6s8x0z"
Title
Summary
Status
Technology
```

### Level 2 — Project

```text id="2q5f6n"
Problem
Capabilities
Demo
Architecture
Lessons
```

### Level 3 — Technical investigation

```text id="1v8w4p"
Experiment
Benchmark
Constraints
Failures
Evidence
```

This allows the same work to serve different audiences.

---

# 64. Publication Rules

A new content item should not require creating a new page template unless it genuinely introduces a new content type.

Preferred process:

```text id="5k4r8q"
Create content
 ↓
Validate schema
 ↓
Select existing template
 ↓
Publish
```

Not:

```text id="0q9y7m"
Create content
 ↓
Create custom page
 ↓
Create custom CSS
 ↓
Create custom layout
```

---

# 65. Initial Content Taxonomy

Keep the initial taxonomy deliberately small.

### Project categories

```text id="w8h4n1"
EDGE_AI
AI_SYSTEMS
DOCUMENT_AI
REASONING
EXPERIMENTAL
```

### Technology categories

```text id="z1r5v9"
MODEL
FRAMEWORK
PLATFORM
DEVICE
INFRASTRUCTURE
METHOD
```

Avoid dozens of tags.

Taxonomies should emerge from actual content.

---

# 66. What Should Not Be Modeled

Do not create entities for every noun.

Avoid premature models for:

- individual paragraphs
- every UI state
- every metric
- every technology mention
- arbitrary tags
- every visitor interaction
- every external link as a database object

The content graph should remain understandable.

---

# 67. Storage Recommendation

Initial implementation preference:

```text id="6g8w2h"
Version-controlled structured content
+
schema validation
+
reusable rendering components
```

Potential implementation:

```text id="v2c9f4"
content/
├── projects/
├── experiments/
├── benchmarks/
├── notes/
├── ideas/
├── technologies/
└── concepts/
```

The exact file format should be determined after the codebase audit.

---

# 68. Future CMS Migration

If a CMS becomes necessary later, the schemas should remain conceptually stable.

The migration should be:

```text id="z6y2q8"
File-based content
       ↓
same logical schema
       ↓
CMS
```

rather than:

```text id="f2x4v7"
CMS-specific content model
       ↓
entire application rewrite
```

---

# 69. Content Integrity Rules

The system should reject:

- duplicate slugs
- missing relationship targets
- invalid status
- unsupported technology categories
- invalid benchmark values
- malformed URLs
- missing required fields

Warnings may be appropriate for:

- missing images
- missing related work
- missing next question
- missing benchmark conditions

Not every warning should block publication.

---

# 70. Editorial Principle

MAKATA.ai should preserve uncertainty.

A technically honest project page can say:

```text id="6v5k1j"
We observed X.

We suspect Y.

We have not yet established whether Y causes X.

Next experiment:
test Z.
```

That is preferable to:

```text id="h7f4m3"
We discovered Y causes X.
```

when the evidence does not support the stronger statement.

The content model must make this distinction possible.

---

# 71. Final Content Model

The resulting system can be viewed as:

```text id="6y5r4u"
                    MAKATA.ai
                        │
        ┌───────────────┼────────────────┐
        ↓               ↓                ↓
     PROJECT        EXPERIMENT       FIELD NOTE
        │               │                │
        ↓               ↓                ↓
    ARCHITECTURE     BENCHMARK       OBSERVATION
        │               │                │
        └───────────────┼────────────────┘
                        ↓
                     LESSON
                        ↓
                  NEXT QUESTION
                        ↓
                      IDEA
                        │
                        ↓
                  NEW EXPERIMENT
```

This creates a living engineering knowledge system rather than a static portfolio.

---

# 72. Definition of Done

The content architecture is ready when:

- [ ] Project schema defined
- [ ] Experiment schema defined
- [ ] Benchmark schema defined
- [ ] Field Note schema defined
- [ ] Failure schema defined
- [ ] Idea schema defined
- [ ] Technology schema defined
- [ ] Concept schema defined
- [ ] Demo schema defined
- [ ] Architecture schema defined
- [ ] Relationship vocabulary defined
- [ ] Epistemic status defined
- [ ] Content validation requirements defined
- [ ] SEO model defined
- [ ] Media model defined
- [ ] Versioning requirements defined
- [ ] Content-to-component mapping defined
- [ ] Initial taxonomy defined
- [ ] Storage approach defined
- [ ] Migration path defined

---

# 73. Final Principle

The content system should make MAKATA.ai capable of recording the **actual evolution of engineering thought**.

Not just:

> “Here are the things I built.”

But:

```text
I built X.
↓
I expected Y.
↓
I observed Z.
↓
That contradicted my assumption.
↓
I changed the architecture.
↓
The result changed.
↓
There is still an unresolved question.
↓
I am testing that next.
```

That is the difference between a portfolio and an engineering laboratory.
