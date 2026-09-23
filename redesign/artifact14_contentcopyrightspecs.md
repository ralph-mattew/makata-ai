# MAKATA.ai — Content & Copywriting Specification

**Document Type:** Content & Copywriting System
**Status:** Design artifact
**Purpose:** Define the language, messaging hierarchy, page copy, CTA system, technical terminology, and editorial rules for MAKATA.ai.

---

## 1. Purpose

MAKATA.ai should communicate one fundamental idea:

> **This is where an AI engineer builds, tests, measures, and investigates real AI systems.**

The website should not primarily sell “AI expertise.”

It should **demonstrate engineering ability through the work itself.**

The copy therefore supports the visual and interactive evidence rather than replacing it.

### Core communication sequence

**What I build → Why it matters → How it works → What happened → Where it breaks → What I learned → What I'm exploring next**

The site should make visitors curious enough to investigate rather than convince them through marketing language.

---

# 2. Voice

## 2.1 Voice characteristics

MAKATA.ai should sound:

- Technical
- Direct
- Curious
- Precise
- Experimental
- Calm
- First-person when discussing the work
- Confident about demonstrated facts
- Explicit about uncertainty
- Comfortable discussing failure

It should **not** sound:

- Corporate
- Sales-heavy
- Academic for its own sake
- Like an AI startup landing page
- Like a generic developer portfolio
- Overly clever
- Artificially humble
- Excessively futuristic

### Voice formula

> **Specific claim + concrete system + evidence + constraint + uncertainty**

Example:

> I built Xylo to test how useful private document intelligence can be when processing happens locally on the device. The interesting part isn't simply whether the model works. It's what happens when memory, latency, thermal behavior, and model capability become real constraints.

That is preferable to:

> Xylo is a revolutionary next-generation AI platform redefining private document intelligence.

---

# 3. Messaging Hierarchy

Every page should answer these questions in roughly this order:

### Level 1 — Identity

**What is MAKATA.ai?**

> An AI / Edge AI engineering laboratory.

### Level 2 — Work

**What does Ralph actually build?**

> AI systems, on-device applications, reasoning systems, experiments, and technical prototypes.

### Level 3 — Differentiation

**What is interesting about the work?**

> The work explores what happens when AI meets real constraints: devices, models, latency, memory, privacy, reliability, evaluation, and changing assumptions.

### Level 4 — Evidence

**Why should I believe this?**

> Working systems, live demonstrations, experiments, benchmarks, architecture, observations, and documented failures.

### Level 5 — Person

**Who is behind it?**

> Ralph Palomaria, an AI engineer working across applied AI, Edge AI, system architecture, experimentation, and AI product development.

---

# 4. Primary Positioning

## Recommended positioning

### Short

> **AI / Edge AI engineering laboratory.**

### Expanded

> **I build and investigate AI systems where constraints matter.**

### Supporting statement

> MAKATA.ai is a working laboratory for AI systems, on-device intelligence, experiments, prototypes, and the engineering questions that emerge when models meet real devices and real-world constraints.

These three statements should work together rather than compete.

---

# 5. Homepage Copy

## 5.1 Hero

### Recommended version

**Eyebrow**

> AI / EDGE AI ENGINEERING LABORATORY

**Headline**

> **I build and investigate AI systems where constraints matter.**

**Supporting copy**

> From on-device document intelligence to multi-perspective reasoning systems, MAKATA.ai is a collection of things I've built, tested, measured, broken, and kept investigating.

**Primary CTA**

> Explore the work

**Secondary CTA**

> Enter the lab

This should be the default homepage messaging unless the code/content audit reveals a stronger existing project or capability that warrants changing it.

---

## 5.2 Alternative hero directions

### More technical

> **Building AI systems beyond the API call.**

Supporting:

> I explore models, devices, architectures, evaluation methods, and the constraints that appear when AI has to work outside a controlled demo.

### More personal

> **I build AI systems to find out what actually works.**

Supporting:

> MAKATA.ai documents the systems, experiments, failures, and technical questions behind my work in AI and Edge AI.

### More experimental

> **What happens when AI meets real constraints?**

Supporting:

> I build systems to find out—then measure what happened.

The first version is the safest default. The alternatives can be tested later rather than mixing several positioning statements into the homepage.

---

# 6. Homepage Featured Work

Each project should have a **different reason to exist**.

## Xylo

**Title**

> Xylo AI

**Description**

> Private document intelligence designed to run locally on the device.

**Hook**

> What happens when useful document AI has to operate within the limits of a phone?

**CTA**

> Explore Xylo

---

## Unawain

**Title**

> Unawain

**Description**

> Local-first document intelligence for Filipino languages.

**Hook**

> An experiment in bringing private AI closer to the user—and closer to the device.

**CTA**

> Explore Unawain

Claims about supported languages, models, device compatibility, and current product status should be validated against the codebase/content audit before becoming permanent marketing copy.

---

## DCS

**Title**

> Distributed Cognitive Synthesis

**Description**

> A multi-perspective synthesis system designed to expose alternative reasoning paths and potential blind spots.

**Hook**

> What changes when a problem is explored from several deliberately different perspectives?

**CTA**

> Explore DCS

Avoid presenting “blindspot discovery” as a guaranteed capability. Where appropriate, describe it as the system's objective or evaluation target.

---

# 7. Homepage Section Copy

## Featured Work

**Heading**

> Things I've built

**Supporting text**

> Working systems and prototypes exploring different problems in AI.

---

## Live Lab

**Heading**

> What's happening in the lab

**Supporting text**

> Experiments, benchmarks, and technical investigations that are still evolving.

CTA:

> Visit the lab

---

## Engineering Focus

**Heading**

> Problems I like working on

Potential categories:

- Edge AI
- On-device inference
- AI system architecture
- Multi-agent systems
- AI evaluation
- Local-first applications
- Model/device constraints
- AI product engineering

Avoid presenting these as commercial “services” unless MAKATA.ai later becomes a consulting/business site.

---

## Experiments

**Heading**

> Things I'm testing

Supporting:

> Not every experiment becomes a product. Some exist simply because the question is interesting.

---

## Field Notes

**Heading**

> Things I've noticed

Supporting:

> Observations from building and testing AI systems.

---

## About

**Heading**

> Who's building this?

Supporting:

> I'm Ralph, an AI engineer interested in what happens between an idea, a model, and a system that actually has to work.

CTA:

> About me

---

# 8. Work Index

## Heading

> Work

## Intro

> Systems, applications, prototypes, and experiments I've built.

Project cards should answer:

1. What is it?
2. What problem does it explore?
3. What makes it technically interesting?
4. Can I see it working?

Avoid long project descriptions on the index.

The index is for **selection**.

The project page is for **investigation**.

---

# 9. Project Page Copy Framework

Every project page should follow the same conceptual structure while allowing different projects to tell different stories.

## Hero

> **[PROJECT NAME]**

> [One-sentence description of what it actually is.]

Metadata:

> STATUS · PLATFORM · MODEL · PROCESSING · DATE

CTA:

> Try it

---

## Why it exists

Heading:

> Why I built this

Copy should explain the actual problem or question.

Avoid fabricated origin stories.

If the motivation changed during development, say so.

---

## What it does

Heading:

> What it actually does

Use concrete capabilities.

Avoid adjectives such as:

- revolutionary
- intelligent
- powerful
- seamless
- transformative

unless they are genuinely necessary and supported by evidence.

---

## How it works

Heading:

> How it works

Introduce the architecture progressively.

Start with:

> Input → Processing → Output

Then expose deeper technical detail.

---

## Evidence

Heading:

> What I measured

Each result should include its conditions.

Example:

> **Latency:** 2.8 s
> Device: [device]
> Model: [model]
> Input: [conditions]
> Measurement: [method]

Never display an impressive number without its experimental context.

---

# 10. Constraints

Heading:

> Where the system gets difficult

This section is intentionally important.

Describe:

- Memory
- Latency
- Thermal behavior
- Model limitations
- Device compatibility
- Context limits
- Reliability
- Cost
- Privacy
- API dependencies
- UX limitations

Use:

> **Constraint → Impact → Response**

Example:

> **Memory constraint**
> Larger models increased memory pressure and affected runtime stability on some devices.
> **Response:** tested smaller models and adjusted the interaction pattern.

Only include claims supported by actual observations.

---

# 11. Failure Language

Failure should not be hidden.

Preferred heading:

> What didn't work

Alternatives:

> Where it broke

> What I changed

> Unexpected behavior

> The part I underestimated

Avoid:

> Challenges we overcame

because it automatically creates a polished success narrative.

The point is to preserve engineering history.

---

# 12. “What Changed?”

Heading:

> What changed

Explain changes in:

- Architecture
- Model
- Prompting
- UX
- Evaluation
- Deployment
- Product direction

Use:

> **Before → Observation → Change → Result**

Do not imply that the change was inevitable if it wasn't.

---

# 13. Lessons

Heading:

> What I learned

Lessons should include scope.

Example:

> **Observed:** consecutive local inference increased thermal pressure during testing.

Then:

> **Implication:** this interaction pattern may be unsuitable for sustained sessions on constrained devices.

Then, where appropriate:

> **Confidence:** Medium
> **Scope:** Tested device/model configuration

This prevents an experiment from becoming an unsupported universal claim.

---

# 14. Lab Copy

## Lab landing heading

> **The lab**

Supporting:

> This is where unfinished questions live.

Alternative:

> Experiments, benchmarks, prototypes, and technical investigations that haven't necessarily become products.

---

## Current investigation

Heading:

> What I'm investigating now

Structure:

**Question**

> [Current technical question]

**Why it matters**

> [Short explanation]

**What I've tried**

> [Experiment summary]

**What happened**

> [Current result]

**Next question**

> [What remains unresolved]

The lab should feel **alive**, rather than like an archive.

---

# 15. Experiment Copy

Every experiment begins with a question.

## Template

**QUESTION**

> Can [system/change] improve [measurable outcome] under [constraint]?

**HYPOTHESIS**

> I expect [specific prediction].

**METHOD**

> [What was tested and how.]

**RESULT**

> [Observed result.]

**OBSERVATION**

> [What was noticed beyond the primary metric.]

**LIMITATION**

> [What prevents stronger conclusions.]

**NEXT QUESTION**

> [What should be tested next?]

This format should be preferred over conventional “Introduction → Methodology → Conclusion” unless the experiment genuinely requires academic structure.

---

# 16. Epistemic Language

MAKATA.ai should explicitly distinguish different kinds of knowledge.

### MEASURED

Use when directly measured.

> MEASURED — 1.8 s average latency across 20 runs.

### OBSERVED

Use when behavior was noticed but not rigorously quantified.

> OBSERVED — repeated inference appeared to increase device heat.

### INFERRED

Use when drawing a reasonable interpretation.

> INFERRED — memory pressure may be contributing to instability.

### HYPOTHESIS

Use for an idea that has not yet been adequately tested.

> HYPOTHESIS — reducing context size may improve sustained responsiveness.

This vocabulary is part of the site's identity.

---

# 17. Benchmark Copy

## Heading

> Evidence, not just demos.

Supporting:

> Benchmarks show what happened under specific conditions. They don't automatically generalize beyond them.

Each benchmark should expose:

- Metric
- Value
- Conditions
- Device
- Model
- Version
- Method
- Date
- Interpretation
- Limitations

Avoid:

> X is the best model.

Prefer:

> X produced lower latency under this test configuration.

---

# 18. About Page

## Heading

> About

### Recommended opening

> I'm Ralph Palomaria, an AI engineer interested in building systems that sit at the intersection of models, software, devices, and real-world constraints.

Supporting:

> My work spans applied AI, Edge AI, AI architecture, experimentation, and product engineering. MAKATA.ai is where I document some of that work—not just the finished systems, but also the experiments and failures that shaped them.

Then show:

- Current professional role
- Relevant experience
- Selected systems
- Technical areas
- Professional links

The About page should **support the work**, not become a long résumé.

---

# 19. Connect Page

## Heading

> Let's build something.

Supporting:

> If you're working on an AI system, an Edge AI problem, an unusual technical constraint, or simply an interesting question, I'd be interested in hearing about it.

Possible contact contexts:

- AI engineering
- Architecture
- Edge AI
- AI product development
- Technical collaboration
- Research/experimentation
- Speaking or discussion

CTA:

> Connect with me

---

# 20. CTA Taxonomy

CTAs should communicate the visitor's next action precisely.

### Discovery

- Explore the work
- See the projects
- Enter the lab

### Interaction

- Try the demo
- Run the experiment
- Explore the architecture

### Evidence

- See the benchmark
- View the results
- Inspect the methodology

### Depth

- Read the field note
- See what changed
- What didn't work?

### Professional

- About me
- Connect
- View LinkedIn
- View GitHub

Avoid:

- Learn More
- Discover More
- Get Started
- Unlock
- Experience the Future
- See the Magic

unless there is a specific reason to use them.

---

# 21. Demo Microcopy

## Ready

> Ready to run.

CTA:

> Run the demo

## Processing

> Processing…

Where technically accurate, expose actual stages:

> Loading model → Processing input → Generating result

Never fabricate processing stages simply because they look good.

## Result

> Result

Supporting:

> Here's what the system produced.

Technical metadata:

> MODEL · DEVICE · RUNTIME · PROCESSING LOCATION

## Error

> Something went wrong.

Supporting:

> The demo couldn't complete this run.

CTA:

> Try again

If a known reason exists:

> The local model isn't currently available on this device.

## Timeout

> The run took longer than expected.

CTA:

> Try again

Secondary:

> See a recorded result

## Unavailable

> This experiment isn't running right now.

Supporting:

> You can still inspect the architecture and recorded results.

---

# 22. Privacy / Processing Microcopy

Only use factual labels.

### On-device

> **ON DEVICE**
> Processing happens locally on the device.

### Server

> **SERVER**
> Input is processed by a remote service.

### Third-party AI

> **THIRD-PARTY AI**
> Processing uses an external AI provider.

### Precomputed

> **PRECOMPUTED**
> This result was generated previously rather than during your session.

Do not use “100% private” unless the complete architecture genuinely supports that claim.

---

# 23. SEO Copy System

## Homepage

**Title**

> MAKATA.ai — AI & Edge AI Engineering Laboratory

**Description**

> AI systems, Edge AI experiments, on-device applications, benchmarks, and technical investigations by Ralph Palomaria.

---

## Project

Template:

> [Project Name] — AI Engineering | MAKATA.ai

Description:

> [Project Name] is a [system type] exploring [specific problem]. Explore the architecture, experiments, constraints, and results.

---

## Experiment

Template:

> [Experiment] — AI Engineering Experiment | MAKATA.ai

Description:

> An engineering experiment investigating [question], including methodology, results, observations, limitations, and next steps.

SEO should describe the actual page rather than stuffing keywords.

---

# 24. OpenGraph / Sharing Copy

Social preview should emphasize the **specific work**, not generic personal branding.

Example:

> **Xylo AI**
> What happens when document intelligence has to run locally on a phone?

For an experiment:

> **Can this model actually run well on-device?**
> An Edge AI experiment measuring what happens under real device constraints.

For MAKATA.ai:

> **MAKATA.ai — AI / Edge AI Engineering Laboratory**
> Systems, experiments, benchmarks, and technical investigations.

---

# 25. Words to Avoid

Unless technically justified, avoid:

- Revolutionary
- Disruptive
- Cutting-edge
- Next-generation
- Game-changing
- Seamless
- Powerful
- Intelligent
- Innovative
- State-of-the-art
- World-class
- Transformative
- Unprecedented
- AI-powered
- Future of AI
- Unlock
- Supercharge
- Leverage AI
- Harness AI
- Democratize AI

These words are not forbidden. They are simply **low-information words**.

Replace them with specifics.

Instead of:

> Powerful AI

Use:

> Runs a 3B-parameter model locally on supported iPhones.

Instead of:

> Cutting-edge Edge AI

Use:

> Tests local inference under mobile memory and thermal constraints.

Instead of:

> Intelligent document analysis

Use:

> Extracts summaries, entities, key points, action items, and answers to document questions.

---

# 26. Anti-Coherence Rule

This is a core editorial rule for MAKATA.ai.

**Do not manufacture a cleaner story than the engineering actually had.**

Avoid:

> I identified a problem, developed the solution, overcame the challenges, and created X.

Prefer:

> I initially tried X. It worked for A but failed under B. I changed Y, which improved C but introduced D. I'm still testing whether E is the underlying cause.

The website should preserve:

- Contradictions
- Failed hypotheses
- Changed objectives
- Unexpected behavior
- Abandoned approaches
- Partial evidence
- Unresolved questions
- Different interpretations

A messy truth is preferable to a polished fiction.

---

# 27. Claim Discipline

Before publishing a statement, classify it:

| Claim                | Required treatment                      |
| -------------------- | --------------------------------------- |
| Direct measurement   | State conditions                        |
| Observation          | Label as observed                       |
| Interpretation       | Identify as inference                   |
| Hypothesis           | Label explicitly                        |
| Product capability   | Verify against implementation           |
| Performance claim    | Include methodology                     |
| Privacy claim        | Verify architecture                     |
| Model capability     | Verify model/version                    |
| Device compatibility | Verify actual testing                   |
| General statement    | Avoid extrapolating from one experiment |

This becomes particularly important for Xylo, Unawain, and DCS because their capabilities may evolve.

---

# 28. Copywriting Acceptance Tests

## 5-second test

A visitor should understand:

> **This is an AI / Edge AI engineering site.**

## 30-second test

They should know:

- Who built it
- What kinds of systems exist here
- At least one interesting project
- Where to interact with it

## 60-second test

They should understand that the site contains:

> **working systems + technical evidence + experiments**

rather than simply a résumé.

## 5-minute test

A technically sophisticated visitor should be able to identify:

- What was built
- Why it was built
- How it works
- What was measured
- What constrained it
- What failed
- What changed
- What remains uncertain

---

# 29. Final Editorial Principle

The copy should never have to carry the entire credibility burden.

The strongest MAKATA.ai sentence is often:

> **Try it.**

Followed by:

> **Here's how it works.**

Then:

> **Here's what I measured.**

Then:

> **Here's where it broke.**

Then:

> **Here's what changed.**

And finally:

> **Here's the question I'm investigating next.**

That sequence is the editorial identity of MAKATA.ai.

**The website should not merely tell people that Ralph can build AI systems. It should give them enough evidence to reach that conclusion themselves.**

---

## Artifact completion criteria

Artifact 14 is complete when:

- Every major page has a defined messaging purpose.
- Homepage positioning is consistent.
- Projects have distinct narratives.
- CTAs describe actual actions.
- Demo states have factual microcopy.
- Technical claims have an evidence standard.
- SEO metadata has reusable templates.
- The voice avoids generic AI marketing language.
- Failures and uncertainty have explicit language.
- Copy does not force unrelated projects into one artificial narrative.
- Content can be populated from the structured content model defined in earlier artifacts.

**Core rule:**

> **Specificity beats adjectives. Evidence beats claims. Questions beat hype.**
