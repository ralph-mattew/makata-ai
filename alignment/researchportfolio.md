# Makata AI Edge Lab

## Research Portfolio & Topic Map

**Status:** Foundational research-planning artifact
**Version:** 1.0
**Relationship to:** Laboratory Charter; Value Proposition & Positioning Specification; Research Thesis & Research Questions Framework

---

# 1. Purpose

This document defines the potential research portfolio of Makata AI Edge Lab.

It does **not** prescribe a fixed list of projects.

Its purpose is to:

- map the laboratory's research space;
- identify candidate research themes;
- distinguish foundational research from applied research;
- identify relationships between research areas;
- prevent isolated experimentation;
- identify promising research sequences;
- expose dependencies;
- identify areas requiring literature review before experimentation;
- prevent premature commitment to a particular technique;
- provide a framework for deciding which research questions deserve investment.

The portfolio is therefore a **map of possibilities**, not a commitment to execute everything contained within it.

---

# 2. Portfolio Architecture

Makata's research portfolio is organized into six layers:

1. **Foundation**
2. **Model & Compression**
3. **Information & Retrieval**
4. **Reasoning & Adaptive Computation**
5. **Runtime & Device Intelligence**
6. **Application-Grounded Systems**

These layers are connected rather than independent.

The laboratory's eventual contribution may emerge from a single layer or, more interestingly, from interactions across multiple layers.

---

# 3. Portfolio Layer 1 — Foundation

Foundation research establishes the measurement and experimental infrastructure required by later research.

Potential areas:

- edge AI evaluation methodology;
- real-device benchmarking;
- resource measurement;
- quality evaluation;
- workload characterization;
- device profiling;
- thermal profiling;
- energy measurement;
- reproducibility;
- edge-specific evaluation datasets;
- multi-objective evaluation.

This layer is not merely infrastructure.

Poor measurement can invalidate conclusions in every subsequent research area.

---

# 4. Research Area F1 — Real-Device AI Evaluation

### Core question

> How should AI systems be evaluated when they operate on real consumer edge devices rather than abstract compute environments?

Potential variables:

- peak RAM;
- sustained RAM;
- latency;
- throughput;
- energy;
- temperature;
- throttling;
- battery state;
- background load;
- model loading time;
- application startup;
- crash/restart behavior.

Potential research questions:

> Do short-duration inference benchmarks accurately predict sustained application performance?

> How much does device state alter AI performance?

> Which resource metrics are most predictive of real user experience?

Potential outputs:

- measurement framework;
- profiling tools;
- benchmark methodology;
- device characterization dataset.

---

# 5. Research Area F2 — Multi-Dimensional Edge AI Evaluation

### Core question

> How should AI quality and resource consumption be evaluated together?

Potential dimensions:

- task quality;
- reasoning accuracy;
- groundedness;
- latency;
- memory;
- energy;
- thermal stability;
- reliability.

Potential contribution:

A methodology for evaluating AI systems as multi-objective systems rather than single-number benchmarks.

---

# 6. Research Area F3 — Edge Workload Characterization

Different applications create different computational patterns.

Potential workloads:

- document QA;
- summarization;
- extraction;
- translation;
- classification;
- multimodal understanding;
- agents;
- conversational AI.

Research question:

> Which workload characteristics determine the optimal edge AI architecture?

This could become important because a technique that works for short classification tasks may behave very differently for long-context document reasoning.

---

# 7. Portfolio Layer 2 — Model & Compression

This layer investigates the relationship between model capability and computational constraints.

---

# 8. Research Area M1 — Model Scaling Under Edge Constraints

### Question

> How does model scale affect useful intelligence under fixed device constraints?

Potential comparison:

- small models;
- medium models;
- larger models;
- specialized models;
- general-purpose models.

Important variables:

- task quality;
- memory;
- latency;
- energy;
- thermal behavior.

The objective is not to identify a universally optimal model.

The objective is to understand the trade-off structure.

---

# 9. Research Area M2 — Quantization and Intelligence Preservation

### Central question

> How much model precision can be removed before meaningful task capability is lost?

Potential dimensions:

- FP16;
- INT8;
- INT6;
- INT4;
- mixed precision.

Possible research focus:

- factual accuracy;
- reasoning;
- retrieval-grounded QA;
- extraction;
- long-context behavior;
- multilingual behavior.

A particularly interesting question is whether different capabilities degrade at different rates.

For example:

> Does basic language generation remain stable while reasoning deteriorates?

That would be more informative than a single aggregate accuracy number.

---

# 10. Research Area M3 — Pruning and Capability Preservation

### Central question

> Which forms of model sparsification preserve useful intelligence under edge constraints?

Potential variables:

- structured pruning;
- unstructured pruning;
- layer-specific pruning;
- attention pruning;
- neuron/channel pruning;
- task-aware pruning.

Potential questions:

> Are reasoning capabilities disproportionately sensitive to particular forms of pruning?

> Can pruning be targeted toward capabilities that matter less for a specific workload?

This is a candidate research area rather than an established Makata specialty.

---

# 11. Research Area M4 — Distillation for Edge Intelligence

### Question

> Can knowledge distillation produce smaller models that preserve the capabilities most important for a target edge workload?

Potential research direction:

Instead of optimizing for general benchmark performance, optimize the student for a specific workload.

Example:

> Can a distilled model optimized for document reasoning outperform a generic model of similar size?

---

# 12. Research Area M5 — Joint Compression

Instead of evaluating:

- quantization;
- pruning;
- distillation;

independently, investigate their interaction.

### Question

> Are compression techniques additive, synergistic, or antagonistic?

For example:

**Quantization → pruning**

may not produce the same result as:

**Pruning → quantization**

The ordering itself may matter.

---

# 13. Portfolio Layer 3 — Information & Retrieval

This layer investigates whether intelligent information management can compensate for constrained model capacity.

---

# 14. Research Area R1 — Context Efficiency

### Question

> How much information does an AI system actually need to solve a task reliably?

Potential approaches:

- context compression;
- selective context;
- semantic filtering;
- redundancy removal;
- hierarchical context;
- document summarization;
- structured context.

Potential metric:

**Useful information per token**

rather than simply context length.

---

# 15. Research Area R2 — Retrieval as Model Compensation

One particularly important research question is:

> **Can better retrieval compensate for reduced model capacity?**

For example:

**Large model + weak retrieval**

versus

**Small model + strong retrieval**

under the same device budget.

This could reveal whether system architecture can substitute for raw model scale in particular workloads.

---

# 16. Research Area R3 — Adaptive Retrieval

Instead of always retrieving the same amount of information:

> Can the system determine how much retrieval is necessary?

Potential policy:

Simple question
→ retrieve little.

Complex question
→ retrieve more.

Low-confidence answer
→ retrieve additional evidence.

This creates an interaction between retrieval and adaptive reasoning.

---

# 17. Research Area R4 — Retrieval Quality Versus Compute

A retrieval pipeline itself consumes resources.

Potential components:

- embedding generation;
- vector search;
- reranking;
- filtering;
- context assembly.

Research question:

> At what point does retrieval computation cost more than the inference resources it saves?

This is a systems-level question that simple RAG benchmarks may not capture.

---

# 18. Research Area R5 — Representation Compression

Instead of compressing the model, compress the information supplied to it.

Potential methods:

- semantic summaries;
- structured extraction;
- compressed embeddings;
- hierarchical representations;
- document graphs;
- metadata-aware representations.

Research question:

> Can representation-level optimization preserve task quality while reducing model context and computation?

---

# 19. Portfolio Layer 4 — Reasoning & Adaptive Computation

This layer is potentially one of the most important long-term research directions.

---

# 20. Research Area A1 — Reasoning Cost

### Question

> How much reasoning is actually necessary for a given task?

Potential variables:

- reasoning depth;
- number of inference calls;
- verification;
- self-consistency;
- tool calls;
- intermediate representations.

Instead of maximizing reasoning:

> Determine the marginal value of additional computation.

---

# 21. Research Area A2 — Adaptive Reasoning

### Question

> Can the system dynamically decide how much computation a problem deserves?

Possible policy:

**Easy task**

→ minimal reasoning.

**Moderate task**

→ additional retrieval/reasoning.

**Hard task**

→ deeper reasoning and verification.

This potentially changes the objective from:

> Build the smallest model.

to:

> Spend computation intelligently.

---

# 22. Research Area A3 — Early Exit

### Question

> Can computation terminate once sufficient confidence or quality has been reached?

Potential benefits:

- lower latency;
- lower energy;
- lower thermal load.

Potential risks:

- premature termination;
- hidden reasoning failures;
- confidence miscalibration.

These risks themselves are research questions.

---

# 23. Research Area A4 — Verification Allocation

Verification can itself be expensive.

Question:

> When is verification worth its computational cost?

Possible policy:

- no verification for trivial tasks;
- lightweight verification for moderate tasks;
- stronger verification for high-risk tasks.

This connects reasoning, reliability, and resource allocation.

---

# 24. Research Area A5 — Capability-Aware Computation

Instead of asking only:

> How difficult is the task?

ask:

> Which capability is required?

For example:

- retrieval;
- arithmetic;
- extraction;
- long-context reasoning;
- semantic comparison;
- planning.

The system could potentially allocate resources based on capability requirements.

---

# 25. Portfolio Layer 5 — Runtime & Device Intelligence

---

# 26. Research Area D1 — Runtime Comparison

### Question

> How much does runtime architecture contribute to practical edge AI performance?

Variables:

- operator implementation;
- memory management;
- accelerator utilization;
- scheduling;
- model loading;
- caching.

The same model may behave differently under different execution environments.

---

# 27. Research Area D2 — Sustained Versus Peak Performance

A major potential research area:

> **Does the fastest configuration in a short benchmark remain the fastest during sustained workloads?**

This matters because mobile hardware can change behavior as:

- temperature increases;
- battery state changes;
- background tasks appear;
- throttling begins.

A benchmark lasting seconds may therefore produce a misleading conclusion about an application used for minutes.

---

# 28. Research Area D3 — Thermal-Aware Inference

### Question

> Can AI systems adapt computation to device thermal state?

Potential policies:

Cold device
→ higher capability mode.

Warm device
→ reduce computation.

Thermally constrained
→ smaller model / lower precision / fewer reasoning steps.

This could connect device intelligence with adaptive inference.

---

# 29. Research Area D4 — Energy-Aware Inference

### Question

> Can computational strategy adapt to available battery or energy budget?

Possible policies:

High battery
→ higher-quality inference.

Low battery
→ efficient mode.

Charging
→ allow more computation.

This introduces an explicit energy dimension into AI reasoning.

---

# 30. Research Area D5 — Device-Aware Model Selection

Instead of selecting one model for all devices:

> Can the system automatically select a suitable model/configuration based on actual hardware?

Potential variables:

- RAM;
- processor;
- accelerator;
- battery;
- thermal state;
- task complexity.

This potentially becomes a practical adaptive edge-AI architecture.

---

# 31. Portfolio Layer 6 — Application-Grounded Systems

The first application domain should be:

# Edge Document Intelligence

This provides a realistic environment in which multiple research areas interact.

---

# 32. Research Area X1 — Efficient Document Intelligence

Potential system:

Document

→ OCR

→ Parsing

→ Representation

→ Retrieval

→ Reasoning

→ Verification

→ Output

Research question:

> What system architecture provides the best document intelligence under a fixed mobile resource budget?

---

# 33. Research Area X2 — Document Intelligence on Constrained iPhones

This is a particularly concrete initial testbed.

Potential constraints:

- 6 GB RAM;
- mobile CPU/GPU/NPU;
- thermal limits;
- battery constraints;
- local storage.

Potential workloads:

- summarization;
- question answering;
- extraction;
- document comparison;
- structured data extraction.

This should be treated as an experimental environment rather than as the permanent identity of Makata.

---

# 34. Research Area X3 — Long-Document Intelligence

Long documents expose several edge constraints simultaneously.

Potential problems:

- context size;
- retrieval;
- memory;
- latency;
- repeated inference;
- document parsing.

Research question:

> How can long-document intelligence be performed reliably when both model memory and compute are constrained?

---

# 35. Research Area X4 — Local Document Reasoning

Research could investigate:

> How much document reasoning can be performed locally before quality or usability becomes unacceptable?

This provides a concrete way to study the boundary between:

- local inference;
- cloud inference;
- hybrid inference.

The research should not assume that one architecture is inherently preferable.

---

# 36. Research Area X5 — Privacy-Constrained AI

Privacy can become an explicit system constraint.

Research questions:

> What capabilities become possible when sensitive information cannot leave the device?

> What resource trade-offs are introduced by maintaining local processing?

> Which workloads justify local execution despite higher computational cost?

Again, the goal is to measure trade-offs rather than assume that privacy automatically determines the architecture.

---

# 37. Cross-Portfolio Research

The most potentially valuable research may occur **between** the individual areas.

---

# 38. Cross-Area C1 — Compression × Reasoning

Question:

> Which forms of model compression disproportionately affect reasoning capability?

Potential finding:

A model may retain:

- language generation;
- summarization;

while losing:

- multi-step reasoning;
- numerical reasoning;
- evidence integration.

This would indicate that aggregate benchmark scores can hide capability-specific degradation.

---

# 39. Cross-Area C2 — Model × Retrieval

Question:

> Can retrieval reduce the model-size requirement for document intelligence?

Potential comparison:

**Large model + weak retrieval**

versus

**small model + strong retrieval**

This is directly aligned with Makata's systems-level thesis.

---

# 40. Cross-Area C3 — Retrieval × Reasoning

Question:

> Does stronger retrieval reduce the amount of reasoning required?

Possible mechanism:

Better evidence
→ less inference required
→ lower latency/energy.

But this must be measured.

---

# 41. Cross-Area C4 — Compression × Retrieval

Question:

> Can stronger retrieval compensate for the capability lost through model compression?

This could be particularly important for constrained devices.

---

# 42. Cross-Area C5 — Reasoning × Thermal State

Question:

> Does deeper reasoning become disproportionately expensive as thermal throttling increases?

This connects algorithmic behavior with physical device behavior.

---

# 43. Cross-Area C6 — Runtime × Model Architecture

Question:

> Does the optimal model depend on the runtime and hardware accelerator?

This prevents treating model selection as independent from execution architecture.

---

# 44. Cross-Area C7 — Device × Adaptive Computation

Question:

> Can the same AI system dynamically change computational strategy based on device conditions?

This could eventually produce:

> **Device-aware AI systems**

rather than simply:

> AI models running on devices.

---

# 45. Cross-Area C8 — Application × All Layers

The highest-level research question is:

> **What combination of model, compression, representation, retrieval, reasoning, memory, runtime, and device policy produces the best useful intelligence for a particular workload under a fixed resource budget?**

This is the closest expression of Makata's overarching research program.

---

# 46. Candidate Research Families

The portfolio can therefore be grouped into several research families.

| Family              | Core Question                                                    |
| ------------------- | ---------------------------------------------------------------- |
| Edge Measurement    | What actually happens on real devices?                           |
| Model Scaling       | How does model capability scale with resource cost?              |
| Compression         | What capability can be removed without unacceptable degradation? |
| Representation      | Can better representations reduce computational requirements?    |
| Retrieval           | Can information selection compensate for model limitations?      |
| Reasoning           | How should computational reasoning be allocated?                 |
| Adaptation          | Can computation dynamically respond to task/device state?        |
| Runtime             | How does execution architecture change system behavior?          |
| Thermal/Energy      | How do physical constraints alter AI performance?                |
| Application Systems | How do all components interact in real workloads?                |

---

# 47. Research Maturity Levels

Not every topic should immediately become a major research program.

Each topic can exist at one of five maturity levels.

### Level 1 — Question

Interesting uncertainty has been identified.

### Level 2 — Exploration

Small experiments determine whether the phenomenon exists.

### Level 3 — Research Project

A controlled study is justified.

### Level 4 — Research Program

Multiple related studies establish a body of evidence.

### Level 5 — Potential Research Discipline

The work reveals sufficiently general principles to justify a broader framework or methodology.

Makata should not prematurely label a Level 1 question as a research program.

---

# 48. Candidate Topic Evaluation

Potential topics should eventually be evaluated along several dimensions.

| Dimension             | Question                                  |
| --------------------- | ----------------------------------------- |
| Uncertainty           | Do we genuinely not know the answer?      |
| Importance            | Would the answer matter?                  |
| Novelty               | Is there a plausible contribution?        |
| Feasibility           | Can Makata test it?                       |
| Measurement           | Can meaningful metrics be obtained?       |
| Reproducibility       | Can others reproduce it?                  |
| Generalization        | Could the result extend beyond one setup? |
| Engineering impact    | Could it change system design?            |
| Publication potential | Could the work support a technical paper? |
| OSS potential         | Could reusable tooling emerge?            |

These should guide prioritization, not become an artificial scoring system.

---

# 49. Research Dependencies

Some research should precede other research.

For example:

**Real-device measurement**

↓

**Baseline workload characterization**

↓

**Compression experiments**

↓

**Retrieval/context experiments**

↓

**Adaptive computation**

↓

**Joint optimization**

This does not mean the sequence is mandatory.

It means later conclusions become harder to interpret when foundational measurements are missing.

---

# 50. The Minimum Experimental Foundation

Before making strong claims about optimization, Makata should ideally establish:

### Device profile

- RAM;
- processor;
- accelerator;
- operating system;
- thermal characteristics.

### Model profile

- parameter count;
- precision;
- memory footprint;
- load time.

### Workload profile

- input length;
- document characteristics;
- task complexity.

### Quality profile

- evaluation dataset;
- task-specific metrics;
- human evaluation where appropriate.

### Runtime profile

- inference latency;
- throughput;
- memory;
- sustained behavior.

Without these baselines, optimization results may be difficult to interpret.

---

# 51. Potential Initial Research Portfolio

A deliberately conservative initial portfolio could contain:

### Project A

**Real-Device Edge AI Measurement Framework**

Establish the measurement methodology.

### Project B

**Model Compression and Capability Preservation**

Study quantization/pruning against task quality.

### Project C

**Retrieval as Model Compensation**

Study whether retrieval can reduce model requirements.

### Project D

**Context Efficiency for Local Document Intelligence**

Study information compression.

### Project E

**Adaptive Reasoning Under Resource Constraints**

Study computation allocation.

### Project F

**Thermal-Aware Local Inference**

Study sustained device behavior.

### Project G

**Joint Optimization of Mobile Document Intelligence**

Combine validated techniques.

These are candidate projects, not commitments.

---

# 52. Potential Research Sequence

A sensible evidence-building sequence could be:

**1. Measurement**

Understand the physical system.

↓

**2. Baseline**

Establish current capability.

↓

**3. Single-variable interventions**

Understand individual techniques.

↓

**4. Interaction studies**

Understand combinations.

↓

**5. Adaptive methods**

Use the learned relationships dynamically.

↓

**6. System optimization**

Optimize the complete application.

↓

**7. Generalization**

Test whether the findings survive different models, devices, and workloads.

This sequence reduces the risk of building a complicated architecture whose behavior cannot be explained.

---

# 53. The Research Portfolio Should Not Become a Feature Roadmap

An important distinction:

### Product roadmap

> Build feature A → feature B → feature C.

### Research portfolio

> Investigate uncertainty A → generate evidence → decide what uncertainty follows.

Research is therefore allowed to branch.

For example:

Quantization experiment

→ unexpectedly large reasoning degradation

→ investigate capability-specific sensitivity

→ discover layer-specific effect

→ investigate pruning interaction

→ new research direction.

The unexpected result becomes more important than adherence to the original roadmap.

---

# 54. Portfolio Anti-Patterns

Makata should avoid:

### Topic accumulation

Adding every interesting edge-AI paper as a research topic.

### Technique obsession

Building the identity around pruning, quantization, RAG, agents, or another single technique.

### Benchmark chasing

Selecting research questions primarily because they produce impressive benchmark numbers.

### Demo-driven research

Starting from what can easily be demonstrated rather than what is uncertain.

### Publication-driven fragmentation

Creating many small papers without building cumulative knowledge.

### Product-driven distortion

Choosing research questions solely because they support an existing product.

### Novelty theater

Calling a straightforward engineering combination “novel research” without investigating prior work.

---

# 55. Relationship to Xylo and Unawain

Existing Makata AI products can serve as experimental environments.

### Xylo

Potential workloads:

- document summarization;
- document chat;
- structured extraction;
- local reasoning.

### Unawain

Potential workloads:

- document translation;
- document analysis;
- multilingual processing;
- constrained-device inference.

However:

> A product feature is not automatically a research result.

Research requires controlled experimentation and evidence.

The products can therefore function as:

**real-world testbeds**

rather than:

**proof of research claims.**

---

# 56. Potential Long-Term Research Program

If sufficient evidence accumulates, Makata could eventually investigate:

## Adaptive Edge Intelligence

A system that dynamically determines:

- which model to use;
- how much context to retrieve;
- how deeply to reason;
- whether to verify;
- how much memory to allocate;
- when to reduce computation;
- when to switch execution strategy;
- whether local execution remains viable.

The system would optimize against:

- task difficulty;
- device capability;
- thermal state;
- energy state;
- latency requirements;
- privacy requirements;
- information requirements.

This is a potential destination, not a predetermined conclusion.

---

# 57. Research Portfolio Graph

The conceptual relationship is:

**FOUNDATION**

Measurement
Evaluation
Device Profiling
Workload Characterization

↓

**MODEL**

Model Scale
Compression
Quantization
Pruning
Distillation

↓

**INFORMATION**

Representation
Context
Retrieval
Reranking

↓

**COMPUTATION**

Reasoning
Verification
Adaptive Inference
Early Exit

↓

**EXECUTION**

Runtime
Hardware
Thermal
Energy
Memory

↓

**APPLICATION**

Document Intelligence
Translation
Extraction
QA
Agents

↓

**KNOWLEDGE**

Trade-offs
Thresholds
Failure Modes
Optimization Methods
General Principles

The arrows represent dependencies and feedback, not a strict workflow.

---

# 58. The Central Portfolio Question

All portfolio areas ultimately connect to one question:

> **How should computational resources be allocated to maximize useful intelligence under real-world constraints?**

The answer may involve:

- better models;
- smaller models;
- better retrieval;
- less context;
- more reasoning;
- less reasoning;
- adaptive computation;
- better runtimes;
- hardware awareness;
- architectural changes;
- or combinations of all of them.

Makata should remain agnostic until evidence distinguishes these possibilities.

---

# 59. What Should Be Considered a Major Finding?

A finding becomes particularly valuable when it reveals a relationship that was not obvious beforehand.

Examples:

> A particular form of compression preserves ordinary language capability but disproportionately harms multi-hop reasoning.

> Retrieval quality can compensate for substantial model reduction for some document tasks but not others.

> Short inference benchmarks systematically overestimate sustained mobile performance because thermal throttling changes the effective throughput.

> Additional reasoning improves accuracy only beyond a particular task-complexity threshold.

> A smaller model plus adaptive retrieval produces a better quality-energy frontier than a larger fixed model.

These examples are illustrative.

The actual findings must come from experiments.

---

# 60. Portfolio Governance

The research portfolio should be reviewed periodically.

A topic may be:

### Promoted

When evidence suggests substantial research value.

### Refined

When the question is too broad.

### Split

When different phenomena require separate studies.

### Combined

When two questions are fundamentally coupled.

### Paused

When evidence or resources do not justify continuation.

### Abandoned

When the question is resolved, unproductive, or insufficiently valuable.

### Reopened

When new research changes the underlying assumptions.

This prevents the portfolio from becoming a permanent list of unfinished ideas.

---

# 61. Research Debt

Makata should explicitly track research debt.

Examples:

- unreplicated results;
- untested devices;
- unclear baselines;
- missing energy measurements;
- weak evaluation datasets;
- insufficient statistical treatment;
- implementation details not documented;
- contradictory findings not resolved.

A research program with large unresolved debt should not make increasingly broad claims.

---

# 62. Evidence Accumulation

Makata should think in terms of an evidence graph.

A finding:

> “INT4 reduces memory”

is weakly informative.

A stronger body of evidence might establish:

> INT4 reduces memory.

↓

> The reduction varies by model architecture.

↓

> Reasoning degrades differently from summarization.

↓

> Retrieval-grounded QA is more resilient.

↓

> The effect depends on context length.

↓

> Thermal behavior changes the latency benefit.

↓

> The optimal configuration therefore depends on workload and device state.

The value emerges from accumulated relationships rather than one benchmark.

---

# 63. The Ultimate Research Asset

Makata's most valuable long-term asset should not merely be:

- a repository;
- a model;
- an application;
- a benchmark;
- a dataset.

It should be:

> **A body of empirically grounded knowledge about how AI systems behave under edge constraints.**

This knowledge can subsequently produce:

- methods;
- tools;
- architectures;
- benchmarks;
- papers;
- products;
- consulting;
- licensing;
- intellectual property.

The research knowledge is the underlying asset.

---

# 64. Current Portfolio Baseline

For the current stage, Makata should recognize the following as **candidate research families**, not commitments:

1. Real-device evaluation
2. Multi-dimensional edge benchmarking
3. Model scaling
4. Quantization
5. Pruning
6. Distillation
7. Joint compression
8. Context efficiency
9. Retrieval optimization
10. Retrieval as model compensation
11. Representation optimization
12. Adaptive retrieval
13. Adaptive reasoning
14. Verification allocation
15. Early exit
16. Runtime optimization
17. Thermal-aware inference
18. Energy-aware inference
19. Device-aware model selection
20. Edge document intelligence
21. Long-document intelligence
22. Privacy-constrained AI
23. Cross-layer system optimization
24. Adaptive edge intelligence

The list is intentionally broad.

The research process should narrow it through evidence.

---

# 65. Current Strategic Hypothesis

At this stage, the most important strategic hypothesis is not:

> “Makata should research pruning.”

Nor:

> “Makata should research quantization.”

Nor:

> “Makata should build adaptive AI.”

The stronger hypothesis is:

> **There is meaningful research value in understanding how different AI engineering decisions interact under real device constraints and application workloads, particularly where conventional model-centric benchmarks fail to capture the resulting system behavior.**

This hypothesis itself requires validation through literature review, landscape analysis, and actual experimentation.

---

# 66. Frozen Portfolio Principle

For now:

> **Makata should maintain a broad research map but make narrow experimental commitments.**

The laboratory can therefore explore many questions while only investing deeply in a small number of experiments at any given time.

This prevents two opposite failure modes:

### Premature narrowing

Choosing a research specialty before understanding the field.

### Unbounded exploration

Collecting interesting ideas without building cumulative knowledge.

The portfolio exists to maintain the map.

The experiment backlog determines what is actually investigated.

---

# 67. Final Portfolio Statement

> **Makata AI Edge Lab maintains a research portfolio centered on understanding how useful AI capability can be maximized under real-world edge constraints. Its research spans models, compression, representation, retrieval, reasoning, memory, runtime, device behavior, and application workloads.**
>
> **The laboratory does not treat these areas as isolated disciplines. Its central interest lies in their interactions: whether model compression changes reasoning, whether retrieval can compensate for reduced model capability, whether context optimization changes system-level resource consumption, whether adaptive reasoning improves the quality-resource frontier, and whether real device behavior invalidates conclusions drawn from conventional benchmarks.**
>
> **The initial application-grounded testbed is edge document intelligence on constrained consumer devices. This testbed provides a realistic environment in which multiple layers of the AI system interact.**
>
> **The portfolio is deliberately broader than the initial experiments. Individual research commitments should emerge through literature review, exploratory experimentation, evidence quality, feasibility, and demonstrated uncertainty rather than through premature strategic selection.**
>
> **Makata's long-term research asset is intended to be a cumulative body of empirical knowledge and engineering methods for building AI systems that use computational resources intelligently under real-world constraints.**
