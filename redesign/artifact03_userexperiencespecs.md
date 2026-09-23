# MAKATA.ai

## User Experience Specification

### Redesign Foundation — Version 1.0

---

# 1. Purpose

This document defines how visitors should experience MAKATA.ai.

It translates the:

**Product & Brand Strategy**

and

**Information Architecture & Content Model**

into:

- visitor journeys
- page-level objectives
- interaction flows
- navigation behavior
- progressive disclosure
- calls to action
- exploration patterns
- demo behavior
- trust-building mechanisms
- exit paths
- mobile considerations
- UX acceptance criteria

The goal is not to force every visitor through one funnel.

Instead:

> **MAKATA.ai should provide multiple entry points into the same underlying body of engineering work.**

---

# 2. Core UX Principle

The central experience is:

> **Show → Let me try → Explain → Prove → Reveal → Explore**

A visitor should encounter the work before being asked to understand all of the technical context.

The experience should progressively increase depth.

```text id="e1zq6n"
LEVEL 1
"What is this?"

        ↓

LEVEL 2
"What did he build?"

        ↓

LEVEL 3
"Can I try it?"

        ↓

LEVEL 4
"How does it work?"

        ↓

LEVEL 5
"What were the constraints?"

        ↓

LEVEL 6
"What actually happened?"

        ↓

LEVEL 7
"What else has he discovered?"

        ↓

LEVEL 8
"Who built this?"
```

---

# 3. The Universal Visitor Journey

The recommended general journey is:

```text id="8bq8jx"
DISCOVER
   ↓
ORIENT
   ↓
NOTICE
   ↓
TRY
   ↓
UNDERSTAND
   ↓
INSPECT
   ↓
TRUST
   ↓
EXPLORE
   ↓
CONNECT
```

Not every visitor will follow every stage.

The architecture should allow visitors to skip stages.

---

# 4. Stage 1 — Discover

Visitors may arrive from:

- LinkedIn
- Google
- GitHub
- direct URL
- shared project
- social media
- professional referral
- search result

Therefore, **not every visitor will land on the homepage**.

Every important page must be capable of functioning as an entry point.

---

# 5. Stage 2 — Orient

Within seconds, the visitor should understand:

1. This is MAKATA.ai.
2. It is an AI engineering laboratory.
3. The work involves building and experimenting with AI systems.
4. Edge/local/on-device AI is a major area of exploration.

The visitor should not need to scroll extensively to understand this.

---

# 6. Stage 3 — Notice

The site should then give the visitor a reason to continue.

Possible mechanisms:

- working demo
- unusual technical result
- interactive visualization
- benchmark
- interesting experiment
- unexpected observation
- compelling project

The principle is:

> **Curiosity should be triggered by the work itself.**

---

# 7. Stage 4 — Try

Whenever technically possible, the visitor should be able to interact with the work.

Preferred sequence:

```text id="a6cy4k"
See Demo
   ↓
Try Demo
   ↓
Observe Result
```

The ideal demo has:

- no account
- no email
- no unnecessary form
- no download
- minimal instructions

The visitor should be able to reach the interesting part quickly.

---

# 8. Stage 5 — Understand

Once the visitor has experienced the result, explain:

- what happened
- why it matters
- what the system is doing
- where processing occurs
- what model is involved

This should remain understandable without deep technical knowledge.

---

# 9. Stage 6 — Inspect

Technical visitors should be able to go deeper.

Potential layers:

```text id="e8q9gl"
Simple explanation
        ↓
Architecture
        ↓
Pipeline
        ↓
Implementation
        ↓
Experiments
        ↓
Benchmarks
        ↓
Failure modes
```

The technical depth should be **available, not imposed**.

---

# 10. Stage 7 — Trust

Trust should come from evidence.

The visitor should encounter:

- concrete architecture
- measurements
- constraints
- limitations
- testing conditions
- failures
- lessons

The site should avoid attempting to manufacture trust through excessive self-description.

---

# 11. Stage 8 — Explore

Once a visitor understands one piece of work, the site should naturally suggest another.

Example:

```text id="y14g7f"
Xylo
 ↓
On-device AI
 ↓
Related Experiment
 ↓
Model performance
 ↓
Field Note
 ↓
Unawain
```

The goal is to transform:

**one page visit**

into:

**exploration of a connected body of work.**

---

# 12. Stage 9 — Connect

Only after sufficient context should the site strongly invite professional interaction.

Potential actions:

- LinkedIn
- GitHub
- email
- collaboration
- professional opportunity

The CTA should be contextual.

Example:

> "Working on a similar Edge AI problem?"

rather than a generic:

> "Contact Me."

---

# 13. Audience Journey A — Recruiter

## Entry

Likely:

```text id="c0gnmb"
LinkedIn
 ↓
MAKATA.ai
```

## Questions

The recruiter wants:

- Who is this?
- What does he do?
- What has he built?
- Is this relevant to the position?

## Journey

```text id="8p27ar"
Homepage
 ↓
Hero
 ↓
Selected Work
 ↓
Xylo
 ↓
Quick technical overview
 ↓
About
 ↓
Professional profile
```

Target time:

**~1–3 minutes**

The recruiter should not be forced through the entire technical narrative.

---

# 14. Recruiter UX Requirements

The homepage should provide:

- clear identity
- current professional role/context
- major technical areas
- selected projects
- obvious professional profile link

Project cards should communicate enough to establish relevance.

Deep architecture should remain optional.

---

# 15. Audience Journey B — Engineering Leader

## Entry

Potentially:

```text id="0qgy3y"
LinkedIn
Referral
Search
Direct project link
```

## Journey

```text id="r9q3id"
Homepage
 ↓
Edge AI / AI Systems positioning
 ↓
Featured project
 ↓
Demo
 ↓
Architecture
 ↓
Constraints
 ↓
Results
 ↓
Experiments
 ↓
Other systems
 ↓
About
 ↓
Connect
```

The key question is:

> **"Does this person demonstrate the type of systems thinking I need?"**

---

# 16. Audience Journey C — Technical Peer

The technical peer should be able to bypass marketing-oriented content.

Possible entry:

```text id="3knr2r"
Experiment
 ↓
Method
 ↓
Results
 ↓
Architecture
 ↓
Related project
 ↓
Related experiment
 ↓
GitHub
```

This audience benefits heavily from:

- raw measurements
- methodology
- implementation details
- limitations
- reproducibility
- model/device information

---

# 17. Audience Journey D — Potential Customer

Journey:

```text id="xk0f82"
Problem
 ↓
Relevant capability
 ↓
Working demo
 ↓
Example result
 ↓
Use case
 ↓
Technical feasibility
 ↓
Connect
```

The customer should not have to understand every technical detail.

The site should translate:

**technical capability → practical possibility**

---

# 18. Audience Journey E — Collaborator

Journey:

```text id="e4r5qg"
Experiment
 ↓
Interesting result
 ↓
Open question
 ↓
Related work
 ↓
Ideas
 ↓
GitHub / Connect
```

This audience should see what is **currently unresolved**.

Open questions are potentially more valuable here than polished conclusions.

---

# 19. Audience Journey F — Curious Visitor

Journey:

```text id="m8q2q4"
Interesting visual
 ↓
Project
 ↓
Demo
 ↓
"What just happened?"
 ↓
How it works
 ↓
Architecture
```

This visitor should be allowed to become technical naturally.

---

# 20. Homepage UX

The homepage should function as a **launchpad**, not a complete biography.

Recommended sequence:

```text id="6w5y4s"
1. Identity / Hero

2. Featured Work

3. Live / Interactive Moment

4. How I Build / Engineering Approach

5. Selected Experiments

6. Latest Technical Observation

7. Explore the Lab

8. About

9. Connect
```

The exact visual layout can change during Artifact 4.

The sequence is the important part.

---

# 21. Homepage Hero

The hero must answer:

> **What is MAKATA.ai?**

within a few seconds.

Recommended conceptual structure:

```text id="9f5h8z"
MAKATA.ai

An AI engineering laboratory exploring
practical AI systems under real-world constraints.

[Explore the Work]   [Enter the Lab]
```

Supporting visual content should ideally demonstrate an actual system rather than use generic AI imagery.

---

# 22. Homepage Featured Work

The visitor should quickly encounter substantial work.

Example:

```text id="e7p8sk"
XYLO

Private document intelligence
designed around on-device AI.

[Try Demo]
[Inspect Project]
```

The important distinction:

**Try Demo**

should be visually stronger than:

**Read More**

because interaction is a central differentiator.

---

# 23. Homepage Interactive Moment

The homepage should ideally contain at least one moment where the visitor thinks:

> "Wait, this is actually running?"

Possibilities include:

- small AI demo
- local inference demonstration
- model comparison
- interactive architecture
- live benchmark
- document transformation

However, the interaction should not become a performance burden.

If a full live model is too expensive or slow, use:

- precomputed examples
- lightweight models
- simulated visualization backed by real measurements
- constrained sample input

The experience should never pretend a result is live when it is not.

---

# 24. Project Page — Golden Structure

Every major project should support:

```text id="7w8f2m"
Hero
 ↓
What it is
 ↓
Why it exists
 ↓
Try it
 ↓
How it works
 ↓
Architecture
 ↓
Constraints
 ↓
Experiments
 ↓
Results
 ↓
What didn't work
 ↓
Lessons
 ↓
Current state
 ↓
Related work
 ↓
Connect
```

Sections can be reordered based on the project.

---

# 25. Xylo — Golden Path

Xylo should initially become the reference implementation for the entire site.

Recommended experience:

```text id="5v0p6f"
Xylo
 ↓
"Try Xylo"
 ↓
Sample document
 ↓
Result
 ↓
"What happened?"
 ↓
Local processing explanation
 ↓
Inference architecture
 ↓
Device/model constraints
 ↓
Experiments
 ↓
What failed
 ↓
Lessons
 ↓
Current state
 ↓
Related Work
```

This should demonstrate the philosophy of MAKATA.ai itself.

---

# 26. Demo UX

The demo should have three states.

## State 1 — Before

```text id="t6s1j9"
What can I do?

[Try a sample]
```

Minimal explanation.

---

## State 2 — Processing

Show meaningful system state if possible.

For example:

```text id="o5g2ad"
Processing locally

Document
   ↓
Extraction
   ↓
Inference
   ↓
Structured result
```

This makes the architecture tangible.

---

## State 3 — Result

Show:

- output
- processing time
- model/device information where useful
- privacy/processing indicator

Then:

> **How did this work?**

becomes the natural next action.

---

# 27. Processing Transparency

Where technically accurate, the interface should distinguish:

```text id="flw5g0"
ON DEVICE
CLOUD
HYBRID
PRECOMPUTED
```

This is especially important for MAKATA.ai.

Never use "local" or "private" as decorative claims.

The UI should communicate what actually happened.

---

# 28. Architecture UX

Architecture should be progressively disclosed.

### Level 1

```text id="m8v6w2"
Document
 ↓
AI Processing
 ↓
Result
```

### Level 2

```text id="i0w6ze"
Input
 ↓
Parser
 ↓
Model
 ↓
Structured extraction
 ↓
Response
```

### Level 3

Technical implementation details.

This allows both executives and engineers to use the same page.

---

# 29. Constraint UX

Constraints should be visible as part of the project story.

Example:

```text id="07am9d"
CONSTRAINTS

Memory
Limited device RAM

Latency
Must remain responsive

Thermals
Sustained inference causes heating

Connectivity
Must work offline
```

Then explain how the design responded.

---

# 30. Failure UX

Failures should not be buried.

Potential section:

> **What didn't work**

Example structure:

```text id="a7tq8v"
Approach
Local model X

Expected
Responsive document chat

Observed
Memory pressure and degraded responsiveness

Change
Reduced model/context strategy

Lesson
...
```

This is powerful evidence of engineering reasoning.

---

# 31. Experiment UX

Experiments should feel different from polished product pages.

Possible visual language:

```text id="h2w8as"
QUESTION

Can model X maintain useful responses
under consecutive on-device interactions?

HYPOTHESIS

...

TEST

...

RESULT

...

OBSERVATION

...

LIMITATION

...

NEXT QUESTION

...
```

This reinforces the laboratory identity.

---

# 32. Field Note UX

Field Notes should be quick to consume.

Structure:

```text id="5w9yq4"
Observation

Short explanation

Context

Why it matters

Related work
```

Target reading time:

**~30 seconds–2 minutes**

---

# 33. Benchmark UX

A benchmark should answer:

> "What exactly was measured?"

Display:

- metric
- result
- environment
- model
- device
- test conditions
- date
- limitations

Avoid presenting isolated numbers as universal performance claims.

---

# 34. Related Work UX

At the end of significant content, show:

> **Explore related work**

Potential cards:

```text id="s7g5un"
Related Experiment
Related Project
Related Field Note
Related Benchmark
```

The relationship should have a reason.

Where useful, communicate:

> "Related because both explore on-device document intelligence."

rather than simply presenting arbitrary cards.

---

# 35. Navigation Behavior

Navigation should remain available without dominating the experience.

Desktop:

```text id="v0n2an"
Logo | Work | Lab | Notes | About | Connect
```

Mobile:

```text id="l0r6th"
Logo                 Menu
```

The menu should expose the primary structure.

---

# 36. Breadcrumbs

Breadcrumbs are useful primarily for deeper technical content.

Example:

```text id="0jv4j5"
Work / Xylo / Experiments / Memory behavior
```

They help visitors understand where they are in the knowledge structure.

---

# 37. Backtracking

Visitors should never feel trapped.

Useful mechanisms:

- breadcrumbs
- related work
- back-to-project
- persistent navigation
- clear parent context

---

# 38. CTA Hierarchy

Not every CTA should have equal visual weight.

## Primary

Actions that advance the current journey.

Examples:

**Try Demo**

**Explore Work**

---

## Secondary

Deeper investigation.

Examples:

**View Architecture**

**Read Experiment**

---

## Tertiary

External/professional actions.

Examples:

**GitHub**

**LinkedIn**

**Connect**

---

# 39. Avoid CTA Overload

A section should generally have:

**one dominant action**

rather than:

```text
TRY
READ
WATCH
GITHUB
LINKEDIN
CONTACT
DOWNLOAD
SHARE
BOOK
```

all competing visually.

---

# 40. Progressive Disclosure

MAKATA.ai should support three depth levels.

## Level 1 — Executive

"What is this?"

## Level 2 — Practitioner

"How does it work?"

## Level 3 — Engineer

"How was it implemented and evaluated?"

A visitor should be able to move between these levels deliberately.

---

# 41. Mobile UX

Because some of the work itself involves mobile/Edge AI, the MAKATA.ai mobile experience must be treated as first-class.

Requirements:

- fast initial load
- readable technical content
- touch-friendly controls
- architecture diagrams that remain understandable
- horizontally scrollable technical details where necessary
- demos that work within mobile limitations
- no hover-dependent information
- minimal animation overhead

---

# 42. Performance Principle

The site itself should not contradict the engineering philosophy.

A site showcasing:

> Edge AI and efficient computing

should not be:

- excessively heavy
- animation-heavy
- bloated with unnecessary JavaScript
- dependent on huge media assets

Performance should therefore be part of the brand.

---

# 43. Loading States

Every interactive feature should have explicit states.

```text id="f0a9dv"
Idle
 ↓
Loading
 ↓
Processing
 ↓
Success
```

and:

```text id="g6s4j1"
Error
 ↓
Explain
 ↓
Recover
```

Never leave visitors staring at an ambiguous spinner.

---

# 44. Error UX

Errors should communicate what happened.

Bad:

> "Something went wrong."

Better:

> "The demo couldn't run in this browser. Try the precomputed example instead."

For technical experiments:

> "This experiment requires a device capability that isn't available here."

Honest failure is consistent with the brand.

---

# 45. External Links

External destinations should be obvious.

Examples:

```text id="r5d1ob"
Open Live App →
View Source →
View LinkedIn →
```

External links should not unexpectedly replace the visitor's entire journey without warning where that matters.

---

# 46. Deep-Link Experience

Every important page should work when entered directly.

For example:

```text id="9l0e2f"
/work/xylo
```

should still explain:

- what MAKATA.ai is
- what Xylo is
- what the visitor can do next

without requiring the homepage first.

This is essential for search and social sharing.

---

# 47. Social / Referral Journey

If someone shares:

> "Check out this Edge AI experiment"

the linked page should immediately communicate:

- what was investigated
- what was discovered
- why it matters

The visitor should not need to reconstruct the context from the homepage.

---

# 48. Exploration Loop

Every major page should ideally end with:

```text id="h4x5cm"
You learned something
        ↓
Here is something related
        ↓
Explore it
```

This creates:

**Page → Discovery → Page → Discovery**

rather than:

**Page → End**

---

# 49. Curiosity Loop

The strongest experience should repeatedly produce:

```text id="r4o0jc"
Interesting statement
       ↓
"What happens if?"
       ↓
Experiment
       ↓
Result
       ↓
Unexpected behavior
       ↓
New question
       ↓
Next experiment
```

This is one of the most important UX patterns for MAKATA.ai.

The site itself should embody experimental thinking.

---

# 50. Professional Proof Loop

For career-oriented visitors:

```text id="z5l6pn"
Project
 ↓
Technical depth
 ↓
Systems thinking
 ↓
Experimental rigor
 ↓
Builder identity
 ↓
Professional profile
```

The site should allow this journey without requiring the visitor to read every technical page.

---

# 51. Customer Proof Loop

For potential customers:

```text id="q6u8zs"
Problem
 ↓
Relevant capability
 ↓
Working example
 ↓
Result
 ↓
Technical feasibility
 ↓
Contact
```

The site should communicate possibility without making unsupported promises.

---

# 52. Contact Experience

The contact experience should be low friction.

The visitor should know:

- why they might contact Ralph
- where to contact him
- what types of interaction are welcome

Possible categories:

```text id="8m3j6t"
AI engineering
Edge AI
Architecture
Collaboration
Technical discussion
Professional opportunities
```

Avoid requiring visitors to complete a long contact form unless there is a strong reason.

---

# 53. UX Anti-Patterns

Avoid:

### Forced registration

Do not require an account merely to explore.

### Email gates

Do not require an email before a visitor can see a basic demo.

### Excessive popups

Do not interrupt exploration.

### Infinite animations

Motion should communicate something.

### Mystery navigation

Visitors should know where they are.

### Walls of text

Technical depth should be layered.

### Generic stock AI visuals

Use the actual work whenever possible.

### Every page ending with "Contact Me"

Use contextual next actions.

---

# 54. Three-Click Test

A visitor should be able to reach:

### A working demo

Within ~3 meaningful interactions.

### Technical architecture

Within ~3 meaningful interactions from a project.

### Professional profile

Within ~3 interactions from the homepage.

### Contact

Within ~3 interactions.

These are heuristics, not rigid requirements.

---

# 55. Thirty-Second Test

A new visitor should be able to answer:

> "What is MAKATA.ai?"

Expected understanding:

> An AI engineering laboratory focused on practical AI systems and experimentation, with strong emphasis on Edge/local AI.

---

# 56. One-Minute Test

A visitor should understand:

- what Ralph builds
- major projects
- major technical themes
- where to explore further

---

# 57. Five-Minute Test

A technically curious visitor should have discovered:

- at least one working system
- at least one architecture
- at least one experiment
- at least one limitation
- at least one technical lesson
- at least one related project

At this point the visitor should understand that MAKATA.ai represents a body of engineering work rather than a static portfolio.

---

# 58. UX Measurement

Potential analytics events:

```text id="ax4n9g"
page_view
project_view
demo_start
demo_complete
architecture_view
experiment_view
benchmark_view
field_note_view
related_work_click
github_click
linkedin_click
contact_click
```

More useful than raw page views is measuring **depth of engagement**.

Example:

```text id="r7y6ki"
Visitor
 ↓
Project
 ↓
Demo
 ↓
Architecture
 ↓
Experiment
```

This indicates meaningful technical engagement.

---

# 59. Engagement Quality

Avoid defining success purely as:

> "People stayed on the website longer."

Long sessions can also mean confusion.

Better signals include:

- demo completion
- architecture exploration
- related-content exploration
- return visits
- professional-profile clicks
- meaningful contact
- GitHub exploration

---

# 60. UX Acceptance Criteria

The redesigned site should satisfy the following.

### Identity

A visitor understands MAKATA.ai's purpose quickly.

### Navigation

Primary sections are obvious.

### Discovery

Visitors can find substantial work quickly.

### Interaction

At least one important project provides an accessible demonstration.

### Technical depth

Technical details are available without overwhelming casual visitors.

### Evidence

Projects contain concrete results and limitations where appropriate.

### Exploration

Major pages connect naturally to related work.

### Professional path

Recruiters and engineering leaders can identify who built the systems.

### Performance

The site loads quickly enough that the experience itself does not undermine its technical positioning.

### Mobile

Core journeys work on mobile.

---

# 61. Recommended Implementation Sequence

Do not build the entire UX simultaneously.

Use:

```text id="m0t4js"
STEP 1
Homepage

        ↓

STEP 2
Xylo project page

        ↓

STEP 3
Xylo demo

        ↓

STEP 4
Architecture / evidence sections

        ↓

STEP 5
Reusable project components

        ↓

STEP 6
Unawain

        ↓

STEP 7
DCS

        ↓

STEP 8
Lab / Experiments

        ↓

STEP 9
Notes / Ideas

        ↓

STEP 10
Polish + analytics
```

Xylo should function as the **UX reference implementation**.

---

# 62. The Golden Path

The strongest default journey is:

```text id="9x7g8v"
LAND
 ↓
UNDERSTAND
 ↓
SEE
 ↓
TRY
 ↓
ASK "HOW?"
 ↓
INSPECT
 ↓
SEE EVIDENCE
 ↓
DISCOVER A LIMITATION
 ↓
DISCOVER A LESSON
 ↓
EXPLORE RELATED WORK
 ↓
UNDERSTAND THE BUILDER
 ↓
CONNECT
```

This is the experience MAKATA.ai should optimize around.

---

# 63. Final UX Principle

The site should not attempt to force the visitor to appreciate the work.

Instead:

> **Give the visitor enough evidence and freedom to discover why the work is interesting.**

The strongest MAKATA.ai journey therefore isn't:

**Homepage → About → Skills → Projects → Contact**

It is:

**Interesting system → Interaction → Technical curiosity → Evidence → Discovery → Understanding the builder**

That is the fundamental UX distinction between a conventional portfolio and the MAKATA.ai engineering laboratory.
