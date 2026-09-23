# MAKATA AI EDGE LAB

## Laboratory Charter

**Version:** 1.0
**Status:** Foundational
**Organization:** Makata AI
**Document Type:** Research Laboratory Charter
**Primary Domain:** Edge AI / On-Device AI / Local AI Systems Engineering

---

# 1. Executive Definition

**Makata AI Edge Lab** is an open research and engineering laboratory focused on understanding how capable AI systems can be made practical under real-world edge-device constraints.

The laboratory investigates the interaction between:

- AI model architecture
- model compression
- quantization
- pruning
- knowledge distillation
- retrieval
- representation
- memory
- reasoning
- inference
- runtime architecture
- hardware acceleration
- device state
- thermal behavior
- energy consumption
- privacy
- application requirements

The laboratory's central concern is not simply whether an AI model can run on an edge device.

Its central question is:

> **How can we engineer the highest level of useful intelligence possible within the physical, computational, thermal, energy, privacy, and usability constraints of a real device?**

Makata AI Edge Lab therefore treats edge AI as a **systems engineering and research problem**, rather than solely as a model-deployment problem.

---

# 2. Mission

## 2.1 Primary Mission

> **To research and develop engineering techniques that make useful AI practical on constrained edge devices through reproducible experimentation, real-device evaluation, open-source implementation, and scientific analysis.**

The laboratory seeks to produce knowledge that is useful to researchers, engineers, developers, and organizations attempting to deploy AI outside conventional cloud infrastructure.

---

# 3. Vision

Makata AI Edge Lab envisions a future in which AI systems are not designed exclusively around the capabilities of centralized infrastructure.

Instead, AI systems should be capable of adapting themselves to:

- the device on which they operate,
- the resources available to them,
- the task being performed,
- the user's requirements,
- the sensitivity of the information,
- the available energy,
- the current thermal state,
- and the quality of intelligence required.

The long-term vision is therefore:

> **AI systems that intelligently adapt their computational strategy to their environment rather than requiring the environment to adapt to the AI.**

---

# 4. Core Research Thesis

Makata AI Edge Lab operates from the following research thesis:

> **Useful edge intelligence is a systems optimization problem, not simply a model-size problem.**

A model's theoretical capability does not directly determine the usefulness of the resulting edge AI system.

The practical capability of an edge system emerges from the interaction between:

$$
Model
\times
Representation
\times
Compression
\times
Retrieval
\times
Reasoning
\times
Runtime
\times
Device
\times
Task
$$

Consequently:

> **The best model is not necessarily the best edge AI system.**

A smaller model with an appropriate architecture, retrieval mechanism, reasoning strategy, and device-aware execution policy may produce greater practical utility than a larger model operating inefficiently.

This proposition is treated as a hypothesis to investigate rather than an assumption that must always be true.

---

# 5. Central Objective

The laboratory seeks to maximize:

## Useful Intelligence per Unit of Resource

A conceptual objective is:

$$
UIR =
\frac{Q}{C}
$$

where:

- \(UIR\) = Useful Intelligence per Resource
- \(Q\) = useful AI quality
- \(C\) = relevant resource cost

Resource cost may include:

- memory
- latency
- energy
- thermal load
- compute
- storage
- network dependency
- monetary cost

The weighting of these resources will vary according to the application and device.

For example:

A voice assistant may prioritize latency.

A document-analysis system may prioritize memory and reasoning quality.

An offline field application may prioritize energy and reliability.

A privacy-sensitive application may prioritize local execution.

Therefore, Makata does not assume a universal definition of "optimal."

---

# 6. What Makata AI Edge Lab Is

Makata AI Edge Lab is:

### 6.1 A Research Laboratory

It formulates research questions, develops hypotheses, conducts experiments, evaluates evidence, documents results, and produces research artifacts.

### 6.2 An Engineering Laboratory

The laboratory does not study edge AI solely through theoretical analysis.

It builds working systems and evaluates them on real hardware.

### 6.3 An Experimental Platform

Applications and prototypes are used as experimental testbeds for evaluating techniques.

### 6.4 An Open Research Repository

Where practical and legally permissible, experiments, methodologies, benchmarks, tooling, and implementations are released openly.

### 6.5 A Bridge Between Research and Production

The laboratory intentionally operates between academic research and real-world product engineering.

Research findings should be capable of informing actual AI systems.

---

# 7. What Makata AI Edge Lab Is Not

Makata AI Edge Lab is not primarily:

- a generic AI application company
- a mobile app studio
- a cloud AI provider
- an LLM provider
- a foundation-model developer
- an inference-runtime replacement
- a generic RAG framework
- a model leaderboard
- a benchmark that exists only to rank models
- a marketing organization for local AI
- a collection of disconnected demos

Makata may build applications, benchmarks, runtimes, and models when they are useful research instruments.

However, these are **means rather than the laboratory's fundamental purpose**.

---

# 8. Research Philosophy

Makata AI Edge Lab follows an experimental rather than doctrinal approach.

The laboratory does not begin with the assumption that:

- local AI is always superior,
- cloud AI is always inferior,
- smaller models are always better,
- pruning always improves efficiency,
- quantization always preserves quality,
- more reasoning always improves answers,
- more parameters always produce better intelligence,
- or privacy always justifies a performance trade-off.

These propositions should be tested.

The laboratory therefore values:

- empirical evidence,
- reproducibility,
- controlled comparisons,
- negative results,
- failed experiments,
- unexpected results,
- contradictory evidence,
- limitations,
- uncertainty,
- and clearly documented assumptions.

A technique that fails under realistic conditions is still valuable research if the failure is properly characterized.

---

# 9. Research Principles

## Principle 1 — Real Hardware Matters

Edge AI must ultimately be evaluated on actual target devices.

Simulation and desktop benchmarking can provide useful preliminary information, but they do not fully represent:

- memory pressure,
- thermal throttling,
- battery behavior,
- OS-level resource management,
- accelerator availability,
- sustained inference behavior,
- application lifecycle behavior.

Therefore, real-device experiments are a core component of the laboratory.

---

## Principle 2 — Optimize Systems, Not Isolated Components

A technique that improves one metric while making the complete application worse should not automatically be considered an improvement.

For example:

$$
Latency \downarrow
$$

is not necessarily useful if:

$$
ReasoningQuality \downarrow\downarrow
$$

Similarly:

$$
Memory \downarrow
$$

is not necessarily useful if:

$$
CrashRate \uparrow
$$

Makata evaluates techniques at the system level.

---

## Principle 3 — Quality Must Remain First-Class

Efficiency is not useful if the resulting AI becomes practically incapable.

Experiments should therefore measure both:

### Resource efficiency

and:

### Intelligence quality.

---

## Principle 4 — Multi-dimensional Evaluation

The laboratory should avoid reducing edge AI to a single metric.

Relevant dimensions include:

### Intelligence

- accuracy
- reasoning quality
- factuality
- groundedness
- extraction accuracy
- instruction following
- citation accuracy

### Performance

- time to first token
- tokens per second
- end-to-end latency
- throughput

### Resource consumption

- RAM
- storage
- energy
- compute

### Device behavior

- temperature
- thermal throttling
- battery impact
- crashes
- application termination
- sustained performance

---

## Principle 5 — Reproducibility

Where feasible, every significant experiment should include:

- source code
- configuration
- model information
- device information
- dataset information
- evaluation methodology
- raw measurements
- processed results
- limitations
- reproduction instructions

---

## Principle 6 — Negative Results Are Results

Makata explicitly recognizes that:

> **A well-characterized failure is scientifically valuable.**

Examples include:

- pruning destroys reasoning quality beyond a particular sparsity level;
- quantization creates unacceptable degradation on a particular task;
- retrieval consumes more memory than it saves;
- a larger model becomes slower after thermal throttling;
- dynamic routing introduces more overhead than it removes;
- an optimization works on one device but not another.

These results should be documented rather than hidden.

---

## Principle 7 — Application Reality Matters

The laboratory will not optimize AI systems exclusively against synthetic benchmarks.

Techniques should ultimately be evaluated against real application workloads.

The first major application domain is:

> **Document intelligence.**

This provides realistic workloads involving:

- PDFs
- scanned documents
- images
- OCR
- structured extraction
- summarization
- question answering
- retrieval
- multi-document reasoning
- citations
- long contexts
- multilingual content.

---

# 10. Primary Research Domain

The laboratory's broad domain is:

# Constraint-Aware Edge Intelligence

This encompasses techniques for making AI systems useful under resource constraints.

The laboratory will investigate the following layers.

---

## 10.1 Model Layer

Research may include:

- model architecture
- small language models
- multimodal models
- pruning
- quantization
- sparsity
- distillation
- low-rank adaptation
- parameter-efficient adaptation
- model specialization

---

## 10.2 Representation Layer

Research may include:

- embeddings
- binary embeddings
- compressed representations
- document representations
- semantic chunking
- structured representations
- multimodal representations

---

## 10.3 Retrieval Layer

Research may include:

- lexical retrieval
- dense retrieval
- hybrid retrieval
- reranking
- lightweight retrieval
- local vector databases
- retrieval compression
- context selection
- context pruning

---

## 10.4 Reasoning Layer

Research may include:

- reasoning budgets
- adaptive reasoning
- selective reasoning
- early termination
- task-dependent reasoning
- reasoning-aware model selection
- reasoning quality under compression

---

## 10.5 Memory Layer

Research may include:

- KV-cache optimization
- context management
- local memory
- persistent memory
- short-term memory
- retrieval-based memory
- memory compression

---

## 10.6 Runtime Layer

Research may include:

- inference runtimes
- accelerator utilization
- CPU/GPU/NPU execution
- model loading
- model swapping
- scheduling
- batching
- speculative decoding
- execution policies

---

## 10.7 Device Layer

Research may include:

- RAM constraints
- thermal behavior
- battery consumption
- storage limitations
- hardware heterogeneity
- sustained performance
- device-aware inference

---

## 10.8 System Layer

The laboratory ultimately investigates how these layers interact.

The core system can be represented as:

$$
AI\ System =
Model +
Representation +
Retrieval +
Reasoning +
Memory +
Runtime +
Device\ Policy
$$

---

# 11. Initial Application Testbed

Makata AI Edge Lab will initially use:

# Edge Document Intelligence

as its principal application testbed.

This is not a permanent restriction on the laboratory.

It is an experimental domain selected because it exposes many important edge-AI problems simultaneously.

A typical workload may involve:

```text
Document
   ↓
Ingestion
   ↓
OCR / Parsing
   ↓
Representation
   ↓
Chunking
   ↓
Indexing
   ↓
Retrieval
   ↓
Context Selection
   ↓
Local Reasoning
   ↓
Verification
   ↓
Answer / Extraction
```

This architecture provides numerous opportunities for experimentation.

---

# 12. Why Document Intelligence

Document intelligence is particularly useful because it combines:

- unstructured input,
- long context,
- OCR,
- retrieval,
- structured extraction,
- reasoning,
- summarization,
- citation,
- privacy requirements,
- potentially sensitive information,
- and substantial compute requirements.

It therefore provides a realistic environment in which to test edge-AI engineering techniques.

---

# 13. Relationship to Makata Products

Existing and future Makata products may serve as experimental environments.

For example:

### Xylo AI

Can provide a practical environment for:

- local document analysis
- document chat
- extraction
- summarization
- on-device reasoning
- Apple-device inference
- user-facing latency
- sustained inference behavior

### Unawain

Can provide an environment for:

- multilingual document processing
- translation
- OCR
- privacy-preserving local processing
- constrained mobile inference

However:

> **Products are not automatically research evidence.**

Product behavior can generate observations and hypotheses, but formal research requires controlled experimentation.

---

# 14. Research-to-Engineering Loop

Makata's operating loop is:

```text
REAL-WORLD OBSERVATION
        ↓
PROBLEM IDENTIFICATION
        ↓
LITERATURE REVIEW
        ↓
RESEARCH QUESTION
        ↓
HYPOTHESIS
        ↓
BASELINE
        ↓
ENGINEERING INTERVENTION
        ↓
CONTROLLED EXPERIMENT
        ↓
REAL-DEVICE EVALUATION
        ↓
ANALYSIS
        ↓
FAILURE / LIMITATION ANALYSIS
        ↓
METHOD OR INSIGHT
        ↓
OPEN ARTIFACT
        ↓
TECHNICAL REPORT / PAPER
        ↓
NEW RESEARCH QUESTION
```

This loop is the laboratory's primary operating model.

---

# 15. Experimental Methodology

Every substantial Makata experiment should attempt to specify:

## 15.1 Research Question

What exactly is being investigated?

## 15.2 Hypothesis

What outcome is expected and why?

## 15.3 Baseline

What existing approach is being compared against?

## 15.4 Intervention

What engineering technique is being changed?

## 15.5 Independent Variables

Examples:

- model
- quantization level
- pruning ratio
- retrieval strategy
- context length
- reasoning budget
- runtime
- device

## 15.6 Dependent Variables

Examples:

- accuracy
- reasoning quality
- latency
- memory
- energy
- thermal behavior

## 15.7 Controls

The experiment should identify variables that must remain constant.

## 15.8 Statistical / Experimental Treatment

Where appropriate:

- repeated measurements
- confidence intervals
- variance
- multiple workloads
- multiple devices
- sensitivity analysis

## 15.9 Failure Conditions

Define what constitutes:

- degradation
- failure
- unacceptable latency
- unacceptable memory
- unacceptable thermal behavior

---

# 16. Core Optimization Model

Makata will treat edge-AI optimization as a constrained multi-objective problem.

Conceptually:

$$
\max Q
$$

subject to:

$$
M \leq M_{max}
$$

$$
L \leq L_{max}
$$

$$
E \leq E_{max}
$$

$$
T \leq T_{max}
$$

$$
S \leq S_{max}
$$

where:

- \(Q\) = useful intelligence quality
- \(M\) = memory consumption
- \(L\) = latency
- \(E\) = energy consumption
- \(T\) = thermal load
- \(S\) = storage consumption

Different experiments may add or remove constraints.

---

# 17. Pareto Thinking

Makata should generally avoid declaring one configuration universally "best."

Instead, experiments should identify trade-offs and, where appropriate, Pareto-efficient configurations.

For example:

```text
Quality
  ↑
  │                    ●
  │                ●
  │            ●
  │        ●
  │     ●
  │  ●
  └────────────────────────→
          Resource Cost
```

A configuration may be preferable under one application constraint and inferior under another.

The laboratory should expose these trade-offs rather than conceal them behind a single score.

---

# 18. Research Outputs

Makata AI Edge Lab can produce several classes of artifacts.

### Class A — Research

- papers
- technical reports
- literature reviews
- research notes
- hypotheses
- theoretical frameworks

### Class B — Experimental

- benchmarks
- datasets
- evaluation suites
- measurements
- device profiles
- experiment logs

### Class C — Engineering

- libraries
- reference implementations
- inference policies
- compression tools
- profiling tools
- evaluation tools

### Class D — Demonstration

- applications
- prototypes
- demos
- reference architectures

### Class E — Communication

- visualizations
- technical articles
- research summaries
- documentation

---

# 19. Open-Source Philosophy

Where licensing, privacy, intellectual property, and security permit, Makata should favor open research artifacts.

The ideal experiment should expose:

```text
Question
+
Method
+
Code
+
Configuration
+
Data
+
Measurements
+
Results
+
Limitations
```

However, openness is not an absolute requirement where:

- data cannot legally be shared,
- user information is involved,
- proprietary models impose restrictions,
- security concerns exist,
- or intellectual-property considerations require temporary restrictions.

---

# 20. Relationship With Existing Research

Makata does not intend to replace established ecosystems.

Instead, it should build upon them.

Potential infrastructure and research foundations include:

- MLCommons / MLPerf
- ExecuTorch
- MLX
- LiteRT
- llama.cpp
- Apple Foundation Models
- open-weight language models
- existing edge-RAG implementations
- existing mobile AI benchmarks
- academic research on compression and efficient inference

Makata's contribution should generally be at the level of:

> **experimental questions, engineering techniques, system combinations, empirical evidence, and application-grounded research.**

---

# 21. Differentiation

Makata's differentiation should not be based solely on the claim:

> "We run AI locally."

Many projects already do this.

Nor should it be:

> "We build smaller models."

Many research groups already investigate this.

The intended differentiation is:

> **Makata investigates how multiple AI engineering techniques interact under real-world edge constraints and translates those findings into reproducible methods and working systems.**

The distinction is therefore:

```text
Existing ecosystem
        ↓
models
runtimes
benchmarks
applications
optimization techniques
        ↓
        MAKATA
        ↓
experimental integration
        ↓
real-device measurement
        ↓
new engineering insights
        ↓
new methods
```

---

# 22. Research Integrity

Makata will distinguish explicitly between:

### Observed fact

Something directly measured or established by a cited source.

### Experimental result

Something observed under Makata's experimental conditions.

### Interpretation

An explanation proposed for an observed result.

### Hypothesis

A proposition requiring further testing.

### Speculation

A possibility that has not yet been adequately tested.

### Engineering recommendation

A context-dependent decision derived from available evidence.

These categories should not be conflated.

---

# 23. Uncertainty Policy

Makata should explicitly document:

- unknowns
- confounding variables
- measurement limitations
- device variability
- model variability
- dataset limitations
- benchmark limitations
- reproducibility limitations
- results that cannot yet be generalized

A result obtained on one iPhone should not automatically be described as representative of all smartphones.

A result obtained on one model should not automatically be generalized to all language models.

---

# 24. Initial Device Focus

The initial research program may focus on constrained Apple mobile devices, including devices with approximately 6 GB RAM.

This is a practical starting point because such devices create meaningful constraints around:

- model size
- memory
- sustained inference
- thermal behavior
- application lifecycle
- local model loading
- user experience

However:

> **The laboratory's scientific scope is broader than the initial hardware platform.**

The Apple platform is an initial experimental environment, not the definition of the laboratory.

---

# 25. Initial Research Program

The initial research program is:

# Makata Edge Document Intelligence

with the broad research question:

> **How can document intelligence be engineered to maximize useful reasoning and information extraction under the resource constraints of consumer edge devices?**

Initial investigation areas may include:

1. quantization
2. pruning
3. distillation
4. retrieval optimization
5. context compression
6. adaptive reasoning
7. KV-cache optimization
8. device-aware model selection
9. thermal-aware inference
10. energy-aware execution

The precise ordering and research priority remain subject to literature review and preliminary experiments.

---

# 26. Long-Term Research Direction

The laboratory may eventually expand from:

**Document Intelligence**

to:

- personal AI
- offline agents
- multilingual AI
- multimodal AI
- edge reasoning
- edge memory
- adaptive AI systems
- privacy-preserving AI
- autonomous local agents
- edge/cloud collaboration
- resource-aware AI architectures

The laboratory should expand only when there is a meaningful research connection to its core problem.

---

# 27. Long-Term Scientific Question

The laboratory's broader scientific direction can be summarized as:

> **How should an AI system adapt its intelligence strategy to the resources and constraints of the environment in which it operates?**

This potentially leads toward research in:

- adaptive inference
- dynamic model selection
- resource-aware reasoning
- device-aware architectures
- intelligent compression
- adaptive retrieval
- dynamic memory
- edge/cloud orchestration
- self-optimizing AI systems

These are future research directions rather than predetermined conclusions.

---

# 28. Success Criteria

Makata AI Edge Lab should not measure success primarily by:

- number of GitHub stars,
- number of applications,
- number of models supported,
- benchmark leaderboard position,
- or marketing reach.

Long-term success should be demonstrated through:

### Scientific contribution

- new findings
- validated hypotheses
- reproducible experiments
- peer-reviewed publications

### Engineering contribution

- useful techniques
- open-source tooling
- reference architectures
- practical optimizations

### Empirical contribution

- high-quality real-device measurements
- meaningful benchmarks
- well-characterized trade-offs

### Practical contribution

- techniques that improve real applications

### Community contribution

- reproducible artifacts
- accessible documentation
- useful datasets
- independent validation

---

# 29. The Laboratory's Core Promise

Makata AI Edge Lab makes the following promise:

> **We will not simply demonstrate that AI can run on an edge device. We will investigate what makes it useful, efficient, sustainable, and reliable under the constraints of that device.**

---

# 30. Foundational Statement

The following statement summarizes the laboratory charter:

> **Makata AI Edge Lab is an open research and engineering laboratory investigating how useful intelligence can be maximized under real-world edge-device constraints. Through reproducible experiments on real hardware, the laboratory studies the interaction between models, compression, retrieval, reasoning, memory, inference runtimes, device state, and application requirements. Its initial testbed is edge document intelligence, with research outputs spanning benchmarks, engineering techniques, prototypes, open-source tools, technical reports, and scientific publications.**
>
> **Makata does not assume that smaller, faster, cheaper, or more local AI is inherently better. Instead, it seeks empirical evidence for when and why particular engineering choices produce better intelligence under specific constraints.**
>
> **The laboratory's ultimate objective is to develop a body of knowledge and engineering methods for building AI systems that intelligently adapt to the environments in which they operate.**

---

# 31. Status of This Charter

This charter establishes the **stable identity and boundaries** of Makata AI Edge Lab.

It does **not** predetermine:

- which optimization technique will ultimately work best;
- which model family will dominate;
- which pruning method will be adopted;
- which runtime will be preferred;
- which hardware platform will ultimately be emphasized;
- which research hypothesis will be validated;
- or which specific framework will emerge.

Those conclusions must be established through research.

The charter therefore defines **what Makata investigates**, rather than **what Makata must discover**.
