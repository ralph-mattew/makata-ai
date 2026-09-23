# MAKATA.ai — Demo & Interactive System Specification

**Artifact 8 — Interactive Demonstrations, AI Execution, Visualization & Evidence**

---

# 1. Purpose

This artifact defines how visitors interact with MAKATA.ai's engineering work.

The objective is not to maximize the number of demos.

The objective is to create **high-value interactions that demonstrate real engineering capability**.

The central principle is:

> **The visitor should experience the system before being asked to read about the system.**

The preferred sequence is:

```text
See
 ↓
Try
 ↓
Observe
 ↓
Understand
 ↓
Inspect
 ↓
Question
```

---

# 2. Demo Philosophy

A MAKATA.ai demo should answer at least one of these questions:

- What does the system actually do?
- What makes the implementation interesting?
- What constraint does the system operate under?
- What happens when the system is pushed?
- How does one architecture differ from another?
- What did the experiment discover?

A demo that merely produces generic AI text is not sufficient.

---

# 3. Demo Hierarchy

Not all interactions have equal value.

### Level 1 — Static evidence

```text
Screenshot
Recorded output
Architecture image
Benchmark result
```

### Level 2 — Interactive evidence

```text
Toggle
Slider
Filter
Architecture explorer
Benchmark comparison
```

### Level 3 — Live computation

```text
User input
→ actual processing
→ actual result
```

### Level 4 — Experimental system

```text
User changes variables
→ system executes
→ results change
→ visitor explores behavior
```

MAKATA.ai should gradually move from Level 1 toward Levels 3–4 where the engineering justifies it.

---

# 4. Demo Types

The platform should support:

```text id="v0a6g8"
LIVE_AI
PRECOMPUTED
HYBRID
INTERACTIVE_VISUALIZATION
BENCHMARK_EXPLORER
ARCHITECTURE_EXPLORER
SIMULATION
VIDEO
```

A project may contain multiple demo types.

---

# 5. Live AI Demo

A live AI demo executes the actual system when the visitor interacts.

Conceptual flow:

```text id="6x5d9b"
Visitor Input
      ↓
Validation
      ↓
Processing
      ↓
AI/model
      ↓
Post-processing
      ↓
Result
      ↓
Technical metadata
```

The visitor should know whether the result was generated live.

---

# 6. Precomputed Demo

A precomputed demo shows an actual result generated previously.

Useful when:

- inference is expensive
- API availability is unreliable
- the model is large
- reproducibility is important
- the result is more important than interaction

The UI should identify it accurately.

Example:

```text
RECORDED RESULT
Generated during Experiment #12
```

Do not present recorded output as if it were generated live.

---

# 7. Hybrid Demo

Hybrid is often the safest default.

Example:

```text id="q9r7k3"
Sample input
      ↓
Precomputed result
      │
      └── Try with your own input
                    ↓
                Live run
```

This provides immediate evidence while preserving optional experimentation.

---

# 8. Demo State Model

Every interactive demo should explicitly support:

```text id="m4g6r2"
IDLE
READY
PROCESSING
RESULT
ERROR
TIMEOUT
UNAVAILABLE
```

Possible transitions:

```text
IDLE
 ↓
READY
 ↓
PROCESSING
 ↓
RESULT
```

Failure:

```text
PROCESSING
 ├── ERROR
 ├── TIMEOUT
 └── UNAVAILABLE
```

Recovery:

```text
ERROR
 ↓
RETRY
 ↓
PROCESSING
```

---

# 9. Initial Demo State

The initial screen should answer:

> “What can I do here?”

It should not show a blank input field with unexplained controls.

Example:

```text id="4k1c7q"
TRY THE SYSTEM

Analyze this sample document

[Run Demo]
```

Optional:

```text
[Use my own input]
```

---

# 10. Sample-First Principle

Whenever practical:

> **Give the visitor a working example before asking them to provide input.**

This reduces friction.

It also guarantees that the demonstration has something meaningful to show even when the visitor does not understand the system yet.

---

# 11. Input Design

Inputs should be constrained to what the experiment actually supports.

Possible inputs:

```text id="z3w5h6"
Text
Document
Image
Audio
Structured data
Parameters
```

Avoid building generalized upload systems when a simple text box is enough.

---

# 12. Input Validation

Validate before expensive execution.

Check:

- empty input
- unsupported format
- size
- length
- malformed data
- unsupported parameters

Validation should be understandable.

Bad:

```text
400 Bad Request
```

Better:

```text
This demo currently accepts PDF files up to 10 MB.
```

---

# 13. Processing State

The processing state should communicate that the system is actually working.

Example:

```text id="c7n4x5"
PROCESSING

Extracting document text
       ↓
Running local model
       ↓
Generating structured output
```

Where technically accurate, show meaningful pipeline stages.

Do not fabricate detailed progress indicators when the backend cannot actually report progress.

---

# 14. Processing Time

Where useful, expose:

```text id="5b7v9n"
Elapsed time
Model
Device
Processing location
```

Example:

```text
1.8 sec
On-device
Apple Foundation Models
iPhone
```

The values must be measured or accurately reported.

---

# 15. Result State

The result should be immediately understandable.

Avoid dumping raw model output into a giant text box.

Prefer structured presentation.

Example:

```text id="w4f3q8"
RESULT

Summary
────────
...

Key Points
──────────
• ...
• ...
• ...

Action Items
────────────
• ...
```

Technical details can appear below.

---

# 16. Result → Explanation

After showing the result, provide an optional path:

```text id="q6y9p2"
How did this happen?
```

This leads to:

```text
Architecture
Inference path
Model
Processing location
Constraints
```

The visitor can therefore move:

```text
Output
→ Mechanism
→ Evidence
```

without forcing every visitor through technical detail.

---

# 17. Technical Disclosure

Every live AI demo should provide enough information to establish what actually happened.

Potential metadata:

```text id="e8c3k5"
MODEL
DEVICE
RUNTIME
PROCESSING
LATENCY
INPUT SIZE
VERSION
```

Not every demo needs every field.

---

# 18. Privacy Indicator

Every demo should communicate where input goes.

Example states:

```text id="4d6y2h"
ON DEVICE
```

```text
SERVER
```

```text
THIRD-PARTY AI
```

```text
PRECOMPUTED
```

The wording must correspond to the actual implementation.

---

# 19. Privacy Detail

Clicking/tapping the privacy indicator can reveal:

```text id="0q7v9w"
Your document is processed locally on the device.
It is not uploaded to a server.
```

or:

```text
Your input is sent to MAKATA.ai's server
for processing.
```

or:

```text
Your input is sent to [provider]
for model inference.
```

Avoid vague statements such as:

> “Your data is secure.”

unless there is a concrete security basis.

---

# 20. Live Demo Failure

A live AI system will eventually fail.

The interface should treat failure as a normal state.

Example:

```text id="r7c5n3"
LIVE RUN UNAVAILABLE

The recorded result is still available.

[View Recorded Result]
[Try Again]
```

This is preferable to:

```text
Something went wrong.
```

with no recovery path.

---

# 21. Timeout

If inference exceeds a reasonable threshold:

```text id="1w6y8p"
This run is taking longer than expected.

[Continue Waiting]
[Show Recorded Result]
[Cancel]
```

The appropriate behavior depends on the actual execution environment.

---

# 22. Rate Limiting

Live demos should have protection against abuse.

Possible controls:

- IP-based rate limits
- anonymous session limits
- request quotas
- payload limits
- concurrency limits
- model-specific limits

Do not make the visitor create an account solely because the implementation failed to control abuse otherwise.

---

# 23. Cost Control

For every live AI demo estimate:

```text id="p9s3h7"
cost/request
expected traffic
maximum acceptable monthly cost
```

Possible strategies:

```text
precomputed default
small model
short context
cached response
rate limiting
server timeout
daily quota
```

The demo should be economically survivable.

---

# 24. AI Model Selection

The website should not automatically use the most powerful model.

Choose based on:

```text id="6w8v0q"
demonstration value
latency
cost
reliability
privacy
output quality
technical relevance
```

A weaker model that clearly demonstrates an architectural idea may be more valuable than a larger model that simply produces impressive text.

---

# 25. Demonstrating Edge AI

Edge AI deserves special treatment because it is central to MAKATA.ai's identity.

A strong Edge AI demonstration should expose the constraints.

Example:

```text id="m5q4w8"
MODEL
X

DEVICE
iPhone

PROCESSING
On-device

LATENCY
X ms

MEMORY
X MB

INPUT
X

THERMAL STATE
X
```

Where data exists.

---

# 26. Device Comparison

Potential interaction:

```text id="8x7r2k"
DEVICE

iPhone A
iPhone B
iPhone C

Compare
```

Result:

```text
Latency
Memory
Thermal behavior
Output quality
```

The methodology must be visible.

---

# 27. Model Comparison

Similarly:

```text id="k5n4c7"
MODEL A
MODEL B
MODEL C
```

Compare:

- latency
- output quality
- memory
- reliability
- task-specific accuracy

Do not reduce multidimensional engineering trade-offs to a single “winner.”

---

# 28. Benchmark Explorer

A benchmark UI can allow visitors to change:

```text id="7y6q3v"
device
model
input size
test condition
metric
```

and see the corresponding results.

This is substantially more useful than a static chart when sufficient data exists.

---

# 29. Benchmark Integrity

The UI must display test conditions.

Example:

```text id="8p3h2k"
Latency

1.42 sec

Model
X

Device
Y

Input
1,000 tokens

Runs
20

Statistic
Median
```

Do not imply broad generality from a small benchmark.

---

# 30. Architecture Explorer

An architecture visualization can begin simple:

```text id="2v5m8c"
INPUT
  ↓
PROCESSING
  ↓
MODEL
  ↓
OUTPUT
```

Clicking a node can reveal:

```text
Technology
Purpose
Execution location
Constraint
```

---

# 31. Architecture Levels

Support three levels.

### Level 1 — Conceptual

```text
Input → AI → Output
```

### Level 2 — System

```text
Input
 ↓
Extraction
 ↓
Model
 ↓
Processing
 ↓
Output
```

### Level 3 — Technical

Full system architecture.

This supports both non-technical and technical visitors.

---

# 32. Interactive Architecture Rules

Interaction should reveal information.

Do not animate nodes simply because animation is visually impressive.

Good:

```text
tap model
→ model details appear
```

Good:

```text
tap edge
→ data-flow explanation appears
```

Weak:

```text
nodes constantly moving
particles flowing forever
```

The latter creates spectacle without information.

---

# 33. Experiment Interface

An experimental system can expose controlled variables.

Example:

```text id="w6y5p4"
MODEL
[ A ]

CONTEXT
[ Short ]

TEMPERATURE
[ 0.7 ]

MODE
[ Adversarial ]

[ RUN EXPERIMENT ]
```

Results:

```text
Output
Metrics
Observation
```

The visitor can then change a variable and run again.

Only expose variables that genuinely influence the experiment.

---

# 34. DCS Demonstration

A strong DCS demonstration could expose the multi-perspective structure.

Conceptual interface:

```text id="e7q2w5"
QUESTION
        ↓
┌───────────────┐
│ Perspective 1 │
│ Perspective 2 │
│ Perspective 3 │
│ Perspective 4 │
│ Perspective 5 │
└───────┬───────┘
        ↓
    SYNTHESIS
        ↓
  ADVERSARIAL
     CHECK
        ↓
    RESULT
```

The visitor should be able to inspect how the output was constructed.

---

# 35. DCS Transparency

If the system uses multiple agents/perspectives, the demo should distinguish:

```text id="2q6s8m"
GENERATED
SYNTHESIZED
ADVERSARIAL
ADJUDICATED
```

This makes the architecture visible instead of presenting the final answer as a mysterious AI output.

---

# 36. Xylo Demonstration

Potential flow:

```text id="f5k3r7"
Sample Document
       ↓
Analyze
       ↓
Summary
       ↓
Structured Information
       ↓
Ask Question
       ↓
Technical Details
```

Where the implementation supports it, show:

```text
processing location
model
device
latency
```

The demonstration should emphasize the actual engineering trade-off of local document intelligence rather than simply reproducing a generic chatbot.

---

# 37. Unawain Demonstration

Potential flow:

```text id="q5r7y9"
English Document
       ↓
Analyze
       ↓
Filipino-language output
       ↓
Compare
       ↓
Technical explanation
```

Potential technical evidence:

```text
language
model
device
latency
memory
offline behavior
```

Only expose measurements that have actually been established.

---

# 38. Demo-to-Content Connection

Every meaningful demo should connect to deeper content.

Example:

```text id="x6n8v2"
Demo Result
     ↓
How it works
     ↓
Architecture
     ↓
Experiment
     ↓
Benchmark
     ↓
Constraint
     ↓
Field Note
```

This creates the site's evidence loop.

---

# 39. Demo-to-Demo Connection

Experiments can also connect.

Example:

```text id="3y7w5k"
Xylo
 ↓
local inference
 ↓
device constraint experiment
 ↓
related Unawain experiment
```

This makes MAKATA.ai feel like one evolving body of work rather than unrelated projects.

---

# 40. Interaction Cost

Every interaction should have a reason.

Before adding a control ask:

> **What question does this control let the visitor answer?**

If the answer is unclear, remove the control.

This prevents demo interfaces from becoming miniature dashboards.

---

# 41. Progressive Disclosure

Default:

```text id="h3n5k7"
Result
```

Then:

```text
Technical details
```

Then:

```text
Architecture
```

Then:

```text
Benchmark
```

Then:

```text
Experiment
```

The visitor chooses how deep to go.

---

# 42. Mobile Demo Behavior

Mobile is particularly important because some MAKATA.ai work is itself mobile/Edge AI.

Demos must support:

- touch controls
- vertical layouts
- readable outputs
- large touch targets
- no hover-only interactions
- manageable result length

Architecture diagrams should transform into stacked flows where necessary.

---

# 43. Loading Performance

Heavy demo code should not necessarily load with the page.

Preferred:

```text id="c4n6t8"
Page loads
 ↓
Demo placeholder
 ↓
Visitor reaches demo
 ↓
Interactive code loads
 ↓
Demo initializes
```

This prevents a large experiment from slowing down unrelated pages.

---

# 44. Demo Security

Never trust user input.

Validate:

- file types
- file sizes
- text length
- parameter ranges
- structured inputs

Protect:

- API keys
- internal prompts
- infrastructure credentials
- private endpoints

Do not expose debugging information to visitors.

---

# 45. Demo Observability

For live demos, log enough to answer:

```text id="5g7y8r"
Did it execute?
How long did it take?
Did it fail?
Why did it fail?
Which model/version?
```

Avoid logging user content unless there is a documented reason and appropriate privacy handling.

---

# 46. Demo Cost/Value Test

Before building a live demo, estimate:

```text id="7p4c2h"
Implementation effort
Infrastructure cost
Maintenance cost
Expected visitor value
Evidence value
Technical differentiation
```

A demo with:

```text
high implementation cost
+
low visitor value
+
low evidence value
```

should probably remain precomputed.

---

# 47. Demo Priority

### P0

- one excellent live or hybrid demo
- reliable sample path
- result state
- failure state
- technical metadata
- privacy indicator

### P1

- architecture explorer
- benchmark visualization
- additional project demos
- experiment interactions

### P2

- device comparison
- model comparison
- parameter exploration
- advanced visualizations

### P3

- elaborate 3D
- unnecessary real-time animation
- complex simulation engines

---

# 48. Anti-Patterns

Avoid:

### Fake AI

A static output presented as live inference.

### Fake metrics

Numbers without methodology.

### Fake progress

Animated progress bars that do not reflect actual processing.

### AI wrapper demos

Generic chatbot functionality with no unique engineering insight.

### Dashboard syndrome

Too many charts, controls, metrics, and filters.

### Demo before explanation

Throwing users into an unexplained technical interface.

### Explanation before evidence

Several paragraphs before the visitor can see anything.

### Infinite loading

No timeout or recovery path.

---

# 49. Demo Quality Checklist

Before publishing:

### Functionality

- [ ] sample works
- [ ] custom input works if supported
- [ ] result is understandable
- [ ] retry works
- [ ] failure is recoverable

### Technical integrity

- [ ] live/precomputed state is accurate
- [ ] model is identified
- [ ] execution location is accurate
- [ ] measurements have context
- [ ] privacy claim is accurate

### UX

- [ ] visitor knows what to do
- [ ] first result appears quickly
- [ ] technical depth is optional
- [ ] mobile works
- [ ] no hover dependency

### Infrastructure

- [ ] rate limit exists
- [ ] payload limits exist
- [ ] timeout exists
- [ ] secrets are protected
- [ ] cost is bounded

---

# 50. Demo Architecture Standard

Every substantial demo should be representable conceptually as:

```text id="g6p8x3"
┌─────────────────────────────┐
│           DEMO              │
├─────────────────────────────┤
│ Input                       │
│                             │
│ [Sample] [Custom]           │
├─────────────────────────────┤
│ Processing                  │
│                             │
│ Model / Device / Runtime    │
├─────────────────────────────┤
│ Result                      │
│                             │
│ Actual system output        │
├─────────────────────────────┤
│ Evidence                    │
│                             │
│ Metrics / Conditions        │
├─────────────────────────────┤
│ Technical Disclosure        │
│                             │
│ Architecture / Constraints  │
└─────────────────────────────┘
```

The actual visual design should remain consistent with Artifact 4.

---

# 51. The Ideal MAKATA.ai Interaction

The strongest interaction should feel like:

```text id="q8k4v6"
"Interesting."

      ↓

"Let me try it."

      ↓

"Oh, that's actually running."

      ↓

"How is it doing that?"

      ↓

"Ah — it's running on-device."

      ↓

"What's the catch?"

      ↓

"Memory and thermal limits."

      ↓

"What happened when he changed the model?"

      ↓

"There's an experiment about that."

      ↓

"What else has he built?"
```

That is the desired experience.

Not:

```text
Hero
→ paragraph
→ paragraph
→ card
→ card
→ card
→ contact form
```

---

# 52. Definition of Done

The interactive system architecture is ready when:

- [ ] demo types defined
- [ ] live/precomputed/hybrid distinction defined
- [ ] state machine defined
- [ ] sample-first behavior defined
- [ ] input validation defined
- [ ] result presentation defined
- [ ] privacy disclosure defined
- [ ] technical metadata defined
- [ ] failure handling defined
- [ ] timeout behavior defined
- [ ] rate limiting defined
- [ ] cost controls defined
- [ ] architecture visualization defined
- [ ] benchmark interaction defined
- [ ] experiment interaction defined
- [ ] mobile behavior defined
- [ ] observability defined
- [ ] security requirements defined
- [ ] demo quality gates defined

---

# 53. Final Principle

The purpose of a MAKATA.ai demo is not to make the website look technologically impressive.

It is to make the **engineering observable**.

The strongest interaction is therefore not:

> “Look what a powerful AI can generate.”

It is:

> **“Here is a system I built. You can run it. Here is what it actually does. Here is how it works. Here is where it breaks. Here is what I learned.”**

That is the interaction model the rest of the site should reinforce.
