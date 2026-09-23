# Makata AI Edge Lab

## Research Methodology & Experimental Protocol

**Status:** Foundational research artifact
**Version:** 1.0
**Relationship to:** Laboratory Charter; Value Proposition & Positioning Specification; Research Thesis & Research Questions Framework; Research Portfolio & Topic Map

---

# 1. Purpose

This document defines the standard methodology by which Makata AI Edge Lab conducts, evaluates, documents, and communicates research.

The objective is to ensure that Makata's work is:

- empirically grounded;
- reproducible;
- falsifiable;
- transparent;
- appropriately scoped;
- resistant to confirmation bias;
- useful to engineers;
- credible to researchers;
- honest about uncertainty;
- capable of producing both positive and negative findings.

This document is not intended to make every experiment academically formal.

Different research questions require different levels of rigor.

Instead, it defines a **minimum methodological discipline** that scales with the importance of the claim.

---

# 2. Core Methodological Principle

Makata follows:

> **Question → Hypothesis → Baseline → Intervention → Measurement → Analysis → Challenge → Replication → Generalization → Publication**

The order may sometimes differ during exploratory research.

However, the underlying principle remains:

> **Do not interpret an intervention before establishing what changed, relative to what, under which conditions, and with what uncertainty.**

---

# 3. The Makata Research Unit

The fundamental unit of Makata research is the:

# Research Experiment

A research experiment should answer a bounded question.

Every experiment should have:

1. Research question
2. Motivation
3. Hypothesis
4. Baseline
5. Intervention
6. Experimental variables
7. Controls
8. Workload
9. Hardware environment
10. Evaluation metrics
11. Measurement protocol
12. Analysis plan
13. Failure criteria
14. Reproducibility information
15. Limitations
16. Result
17. Interpretation
18. Follow-up questions

This structure should become the standard template for Makata experiments.

---

# 4. Research Question First

Every experiment begins with a question.

Weak:

> Can we make the model faster?

Better:

> Can 4-bit quantization reduce end-to-end document QA latency on a 6 GB iPhone while preserving answer quality within a predefined tolerance?

The second question identifies:

- intervention;
- task;
- hardware;
- outcome;
- constraint.

This makes the experiment actionable.

---

# 5. Hypothesis

A hypothesis should predict a measurable relationship.

Template:

> Under **[conditions]**, changing **[independent variable]** will cause **[expected change]** in **[dependent variable]**, because **[mechanistic rationale]**.

Example:

> Under a fixed document-QA workload on a 6 GB smartphone, reducing model precision from 8-bit to 4-bit will reduce memory consumption and latency while producing a measurable but bounded reduction in reasoning accuracy.

The mechanism should be treated as a hypothesis unless independently established.

---

# 6. Null Hypothesis

Where appropriate, Makata should explicitly consider the possibility that the intervention has no meaningful effect.

Example:

> Changing quantization level produces no practically significant change in task quality under the tested workload.

This protects the experiment from assuming that every intervention must produce a meaningful improvement.

---

# 7. Baseline

No optimization result is meaningful without a baseline.

A baseline should specify:

- model;
- model version;
- precision;
- runtime;
- prompt;
- context;
- retrieval configuration;
- device;
- OS;
- workload;
- dataset;
- evaluation methodology.

The baseline should represent a credible comparison point.

---

# 8. Baseline Types

Different experiments may require different baselines.

## 8.1 Current System Baseline

The existing production or prototype configuration.

Useful for:

> Does this intervention improve our actual system?

---

## 8.2 Strong Reference Baseline

A known high-performing configuration.

Useful for:

> How much capability are we sacrificing?

---

## 8.3 Resource-Optimized Baseline

A configuration designed around efficiency.

Useful for:

> Does our new method improve upon an already efficient alternative?

---

## 8.4 Ablation Baseline

A system with one component removed.

Useful for:

> What contribution does this component actually make?

---

# 9. Independent Variables

These are variables intentionally changed.

Examples:

- quantization level;
- pruning ratio;
- model size;
- retrieval depth;
- context length;
- reasoning steps;
- verification frequency;
- runtime;
- device state.

An experiment should avoid changing multiple variables simultaneously unless the purpose is specifically to study interaction effects.

---

# 10. Dependent Variables

These are measured outcomes.

Makata should distinguish at least four categories.

### Intelligence

- accuracy;
- reasoning quality;
- extraction F1;
- groundedness;
- factuality;
- task success;
- citation correctness.

### Performance

- latency;
- throughput;
- time-to-first-token;
- completion time.

### Resource consumption

- RAM;
- storage;
- CPU;
- GPU/NPU utilization;
- energy.

### Physical/system behavior

- temperature;
- throttling;
- crashes;
- thermal instability;
- battery impact.

---

# 11. Control Variables

Variables held constant to isolate the effect of the intervention.

Examples:

- device;
- OS;
- model family;
- prompt;
- dataset;
- retrieval corpus;
- runtime;
- application version;
- network state.

The appropriate controls depend on the research question.

---

# 12. Confounding Variables

Makata should actively search for variables that could explain the result without being the intended intervention.

Examples:

- device temperature;
- background applications;
- battery level;
- thermal throttling;
- OS version;
- memory pressure;
- network conditions;
- model caching;
- document length;
- random seed;
- prompt formatting;
- runtime configuration.

A major part of edge-AI experimentation is identifying these confounders.

---

# 13. Real-Device Principle

Where the research claim concerns edge deployment:

> **Real hardware should eventually be part of the evidence.**

Simulation and desktop benchmarking can be useful for exploration.

They should not automatically be treated as evidence of real-device behavior.

For example:

A desktop experiment can establish:

> Configuration A uses less memory than configuration B under the simulated environment.

It cannot automatically establish:

> Configuration A is more efficient on an iPhone.

---

# 14. Device Characterization

Every significant real-device experiment should document:

- device model;
- RAM;
- processor;
- GPU/NPU where known;
- OS version;
- battery state;
- thermal state;
- available storage;
- network state;
- background workload;
- power mode;
- application version.

This creates a reproducible hardware context.

---

# 15. Device State

Device state is itself an experimental variable.

Potential states include:

### Cold

Device has not recently performed significant computation.

### Warm

Device has recently performed computation.

### Sustained

Device has been under continuous workload.

### Thermally constrained

Device exhibits measurable throttling or sustained performance degradation.

These states should not be mixed casually.

---

# 16. Warm-Up Protocol

Inference systems often behave differently during:

- first model load;
- first inference;
- cached inference;
- sustained inference.

Therefore experiments should distinguish:

### Cold-start performance

Time from application launch/model load to usable output.

### Warm performance

Performance after the model and relevant caches are initialized.

### Sustained performance

Performance over an extended workload.

These are different measurements.

---

# 17. Measurement Repetition

A single run is rarely sufficient for a quantitative claim.

Where practical, experiments should use repeated measurements.

For example:

> Run the same workload N times under equivalent conditions.

Then report:

- mean;
- median;
- variance or standard deviation;
- range;
- relevant percentiles.

The exact number of repetitions should depend on:

- measurement noise;
- experiment cost;
- expected effect size;
- hardware stability.

---

# 18. Randomness

AI inference may involve randomness.

Makata should document:

- temperature;
- sampling parameters;
- random seed where controllable;
- deterministic versus stochastic inference;
- sampling configuration.

When deterministic evaluation is possible, it may simplify comparisons.

When stochastic behavior is intrinsic, variability should be measured rather than hidden.

---

# 19. Dataset Design

The dataset should match the research question.

For document intelligence, dimensions may include:

- document length;
- document type;
- language;
- formatting complexity;
- OCR quality;
- table density;
- information density;
- ambiguity;
- reasoning difficulty.

A benchmark dominated by easy documents may hide important edge cases.

---

# 20. Workload Stratification

Rather than reporting only an aggregate score, workloads may be divided into categories.

Example:

### Easy

Direct information retrieval.

### Moderate

Information synthesis.

### Hard

Multi-step reasoning.

### Adversarial

Ambiguous, noisy, incomplete, or misleading documents.

This can reveal whether an optimization disproportionately affects difficult cases.

---

# 21. Evaluation Metrics

Metrics must correspond to the task.

Examples:

### Question answering

- exact match;
- semantic accuracy;
- groundedness;
- citation correctness.

### Extraction

- precision;
- recall;
- F1.

### Summarization

- factuality;
- coverage;
- human evaluation;
- task-specific metrics.

### Translation

- adequacy;
- fluency;
- terminology preservation;
- human evaluation.

### Reasoning

- task accuracy;
- multi-step correctness;
- evidence usage;
- failure rate.

No single metric should automatically be treated as “intelligence.”

---

# 22. Resource Metrics

Makata should measure resource consumption where feasible.

### Memory

- peak RAM;
- average RAM;
- model footprint;
- cache footprint.

### Latency

- model load;
- time-to-first-token;
- token generation;
- end-to-end completion.

### Energy

- energy per task;
- battery impact;
- energy per successful task.

### Thermal

- temperature;
- sustained temperature;
- throttling indicators.

### Reliability

- crashes;
- failed inference;
- out-of-memory events;
- timeouts.

---

# 23. End-to-End Metrics

Component-level measurements are useful but insufficient.

For example:

A faster LLM does not necessarily produce a faster document assistant if:

- OCR is slow;
- retrieval is slow;
- reranking is expensive;
- context assembly is expensive;
- verification requires another inference pass.

Therefore Makata should distinguish:

### Component performance

Performance of one subsystem.

### Pipeline performance

Performance of the complete AI pipeline.

### User-task performance

Time and resources required to successfully complete the actual task.

The third is often the most practically important.

---

# 24. Quality-Resource Evaluation

Makata should evaluate interventions as:

> **Quality × Resource Cost**

rather than resource cost alone.

For example:

| Configuration |     Quality |    RAM | Latency | Energy |
| ------------- | ----------: | -----: | ------: | -----: |
| A             |        High |   High |    High |   High |
| B             | Medium-high | Medium |  Medium | Medium |
| C             |      Medium |    Low |     Low |    Low |

No universal winner should be declared without a defined objective and constraint set.

---

# 25. Pareto Frontier

Where multiple objectives matter, Makata should identify the Pareto frontier.

A configuration is Pareto-dominated when another configuration is:

- at least as good on relevant dimensions;
- better on at least one;
- without being worse on the others.

The frontier identifies configurations representing meaningful trade-offs.

This is preferable to collapsing everything into a single arbitrary score.

---

# 26. Composite Metrics

Composite metrics may sometimes be useful.

For example:

> Useful Intelligence per Resource

However, composite metrics should be treated carefully.

A single score can hide:

- catastrophic quality failures;
- nonlinear constraints;
- user-specific priorities;
- safety/reliability requirements.

Makata should therefore preserve the underlying measurements even when composite metrics are used.

---

# 27. Practical Constraint Analysis

Some constraints are hard constraints.

Example:

> Peak RAM must remain below the device's practical limit.

Others are optimization objectives.

Example:

> Lower latency is desirable.

These should not be conflated.

A useful optimization formulation is:

> Maximize task quality subject to memory, latency, energy, thermal, and reliability constraints.

The exact formulation should depend on the application.

---

# 28. Ablation Studies

When Makata proposes a multi-component system, ablation studies should determine what actually matters.

Suppose a system contains:

- adaptive retrieval;
- context compression;
- model routing;
- adaptive reasoning;
- verification.

Possible ablations:

- remove retrieval adaptation;
- remove context compression;
- remove model routing;
- remove adaptive reasoning;
- remove verification.

This helps determine whether the claimed contribution actually comes from the proposed mechanism.

---

# 29. Interaction Experiments

Once individual effects are understood, interactions can be studied.

For example:

### Experiment A

Quantization alone.

### Experiment B

Retrieval optimization alone.

### Experiment C

Quantization + retrieval optimization.

If:

**Effect(C) ≠ Effect(A) + Effect(B)**

then an interaction may exist.

This can become a deeper research question.

---

# 30. Order Effects

Some interventions may interact depending on the order in which they are applied.

Example:

**Prune → Quantize**

versus:

**Quantize → Prune**

Similarly:

**Retrieve → Compress Context**

versus:

**Compress Context → Retrieve**

The pipeline ordering itself can therefore become an experimental variable.

---

# 31. Failure Testing

Makata experiments should intentionally include difficult cases.

Potential failure conditions:

- long documents;
- noisy OCR;
- irrelevant retrieval;
- contradictory evidence;
- ambiguous questions;
- very long conversations;
- low battery;
- thermal throttling;
- memory pressure;
- repeated inference;
- background workload.

An optimization that works only under ideal conditions should be described accordingly.

---

# 32. Stress Testing

Where appropriate, Makata should test beyond normal operating conditions.

Examples:

- maximum supported context;
- sustained inference;
- repeated document processing;
- concurrent tasks;
- low available memory;
- thermally elevated devices.

Stress testing can reveal failure modes that ordinary benchmarking misses.

---

# 33. Robustness

A result should ideally survive reasonable changes in:

- prompt;
- document;
- device state;
- random seed;
- workload;
- model;
- runtime.

The appropriate robustness tests depend on the claim.

---

# 34. Statistical Treatment

Makata should use statistical methods appropriate to the experiment.

Possible analyses include:

- confidence intervals;
- effect sizes;
- hypothesis tests;
- bootstrap estimates;
- paired comparisons;
- repeated-measures analysis;
- regression;
- correlation;
- variance decomposition.

Statistical significance should not automatically be treated as practical significance.

A tiny improvement may be statistically detectable but operationally irrelevant.

---

# 35. Practical Significance

Makata should distinguish:

### Statistical significance

Is an effect unlikely to be due to random variation under the chosen statistical model?

### Practical significance

Is the effect large enough to matter to the actual system?

For example:

A 0.2% latency improvement may be statistically measurable but irrelevant to a user.

A 15% memory reduction may be operationally significant even if the quality difference is difficult to establish statistically.

---

# 36. Measurement Uncertainty

Every measurement has uncertainty.

Sources include:

- hardware variability;
- thermal variation;
- background processes;
- instrumentation error;
- stochastic inference;
- dataset sampling.

Where uncertainty materially affects the conclusion, it should be reported.

---

# 37. Reproducibility Levels

Makata should distinguish:

### Level R1 — Conceptual

Enough information to understand the experiment.

### Level R2 — Procedural

Enough information to repeat it manually.

### Level R3 — Computational

Code and configurations are available.

### Level R4 — Environmental

Hardware/software environment is documented.

### Level R5 — Fully reproducible

Another researcher can reproduce the principal result with the available artifacts.

Not every experiment can reach R5.

The desired reproducibility level should be stated.

---

# 38. Experiment Manifest

Each experiment should have a machine-readable or structured manifest containing:

```text
Experiment ID
Research question
Hypothesis
Date
Researcher
Repository version
Application version
Model
Model version/hash
Model precision
Runtime
Runtime version
Device
OS
RAM
Battery state
Thermal state
Dataset
Dataset version
Prompt
Sampling parameters
Retrieval configuration
Reasoning configuration
Intervention
Controls
Metrics
Measurement repetitions
Raw data location
Analysis version
Result
Limitations
```

The exact schema can later become a Makata research metadata standard.

---

# 39. Experiment Naming

Experiments should use stable identifiers.

Example:

`MKT-EDGE-DOC-001`

or:

`MKT-QNT-2026-001`

A consistent identifier allows:

- datasets;
- code;
- reports;
- charts;
- papers;
- issues;

to reference the same experiment.

---

# 40. Versioning

Research artifacts should be versioned.

This includes:

- code;
- models;
- prompts;
- datasets;
- evaluation scripts;
- configurations;
- analysis notebooks;
- reports.

If a result changes after a software update, the change should be traceable.

---

# 41. Data Lineage

Makata should document:

> Where did this measurement come from?

For every major result, it should ideally be possible to trace:

**Publication / Report**

→ **Analysis**

→ **Raw Measurement**

→ **Experiment**

→ **Configuration**

→ **Device**

→ **Workload**

This creates an evidence chain.

---

# 42. Research Notebook

Each experiment should maintain a research log.

Record:

- unexpected observations;
- failed runs;
- implementation changes;
- anomalies;
- hypotheses generated during experimentation;
- deviations from protocol;
- environmental conditions.

Unexpected observations should not be discarded merely because they do not fit the original hypothesis.

---

# 43. Pre-Registration Where Appropriate

For important confirmatory experiments, Makata may optionally record the intended:

- hypothesis;
- variables;
- metrics;
- analysis;
- stopping criteria;

before seeing the final results.

This reduces the risk of unconsciously modifying the experiment to fit the observed data.

Pre-registration does not need to be used for every exploratory experiment.

---

# 44. Exploratory Versus Confirmatory Research

Makata should explicitly distinguish:

## Exploratory

Goal:

> Discover what might be happening.

Characteristics:

- flexible;
- hypothesis-generating;
- broader experimentation;
- more tolerance for iteration.

## Confirmatory

Goal:

> Test a specific hypothesis.

Characteristics:

- predefined variables;
- predefined evaluation;
- controlled conditions;
- stronger statistical discipline.

Confusing the two can produce overconfident conclusions.

---

# 45. Experiment Stopping Rules

Experiments should ideally define when they stop.

Possible reasons:

### Completion

The planned measurements are complete.

### Evidence threshold

Enough evidence exists to answer the research question.

### Futility

The expected information gain is too low.

### Resource limit

The experiment exceeds practical cost.

### Discovery

A new phenomenon requires a different experiment.

### Failure

The intervention is clearly not viable under the defined conditions.

Stopping should not automatically mean success or failure.

---

# 46. Evidence Classification

Makata should classify findings as:

### E0 — Observation

Something was observed.

### E1 — Preliminary

Initial controlled evidence exists.

### E2 — Replicated

The result has been reproduced.

### E3 — Robust

The result survives meaningful variations.

### E4 — Generalized

The result holds across broader conditions.

This provides a useful discipline against prematurely treating an early result as established knowledge.

---

# 47. Interpretation Discipline

Every result should separate:

### Observation

What happened?

### Explanation

Why might it have happened?

### Implication

Why does it matter?

### Limitation

What prevents broader interpretation?

Example:

> INT4 reduced peak RAM by X%.

That is an observation.

> This occurred because the lower-precision representation reduced model memory requirements.

This is an explanation requiring appropriate technical support.

> Therefore INT4 is better for edge AI.

This is an unjustified generalization unless supported by broader evidence.

---

# 48. Contradiction Protocol

If two experiments disagree:

1. Do not automatically average them.
2. Verify configurations.
3. Check hardware differences.
4. Check workload differences.
5. Check measurement differences.
6. Check implementation versions.
7. Reproduce both results.
8. Identify possible interaction variables.
9. Design a discriminating experiment.
10. Preserve the contradiction if it remains unresolved.

The final result may legitimately be:

> The effect appears conditional, and the current evidence does not identify the determining condition.

---

# 49. Negative Result Protocol

When an intervention fails:

Document:

- hypothesis;
- expected outcome;
- observed outcome;
- tested conditions;
- likely explanations;
- known limitations;
- whether the failure is specific or general.

Do not automatically classify:

> “Technique failed.”

Instead specify:

> “Technique failed to produce the expected improvement under the tested conditions.”

That distinction matters.

---

# 50. Research Review

Before a major result is published, another person or process should challenge:

### Method

Was the experiment designed correctly?

### Baseline

Is the comparison fair?

### Measurement

Are the metrics appropriate?

### Confounders

Could another variable explain the result?

### Interpretation

Does the conclusion exceed the evidence?

### Reproducibility

Could another researcher repeat it?

### Prior work

Has an existing result already demonstrated the same thing?

This review should ideally happen before public claims.

---

# 51. Literature Relationship

Makata research should not begin in isolation.

Before a major project:

1. Search existing literature.
2. Identify relevant methods.
3. Identify benchmarks.
4. Identify existing implementations.
5. Identify contradictory findings.
6. Identify known limitations.
7. Determine what remains uncertain.

The objective is not merely to prove novelty.

It is to avoid reinventing known results.

---

# 52. Literature Review Output

A serious research project should maintain:

- relevant papers;
- related repositories;
- benchmarks;
- competing methods;
- known datasets;
- unresolved questions;
- methodological gaps.

This becomes the project's evidence base.

---

# 53. Novelty Discipline

Makata should distinguish:

### New implementation

A known technique implemented in a new environment.

### New empirical result

A known technique evaluated under a previously underexplored condition.

### New combination

Existing techniques combined in a new architecture.

### New method

A genuinely new algorithm or engineering technique.

### New principle

A broader insight supported by multiple experiments.

All can be valuable.

They should not all be described as the same kind of novelty.

---

# 54. Benchmark Reproduction

Reproducing an existing benchmark can itself be valuable if:

- the benchmark has not been tested on the target hardware;
- implementation details matter;
- results differ materially;
- reproducibility is poor;
- the reproduction reveals an important limitation.

The contribution should be described accurately.

---

# 55. Publication Standard

Before a result becomes a formal Makata research publication, it should ideally contain:

1. Problem
2. Related work
3. Research gap
4. Research question
5. Hypothesis
6. Method
7. Experimental setup
8. Baseline
9. Results
10. Statistical/uncertainty analysis
11. Ablations
12. Failure analysis
13. Limitations
14. Discussion
15. Reproducibility information
16. Conclusion
17. Future research

Not every technical report requires all components at full academic depth.

---

# 56. Engineering Report Standard

For shorter engineering reports:

### Problem

What practical uncertainty exists?

### Setup

What was tested?

### Intervention

What changed?

### Measurements

What happened?

### Findings

What was observed?

### Limitations

What remains uncertain?

### Recommendation

What engineering decision does the evidence support?

Recommendations should remain scoped to the tested conditions.

---

# 57. From Research to Engineering Method

A research finding becomes a potential Makata engineering method when:

1. The phenomenon is repeatedly observed.
2. The mechanism is sufficiently understood.
3. Boundary conditions are identified.
4. The result is practically meaningful.
5. The procedure can be formalized.
6. Another engineer can apply it.
7. Its limitations are known.

Only then should Makata consider turning a finding into a reusable methodology.

---

# 58. From Method to Tool

A validated method may become:

- library;
- CLI;
- benchmark;
- profiling tool;
- optimizer;
- runtime component;
- SDK;
- dataset;
- evaluation suite.

The implementation should follow the evidence rather than precede it when research validity depends on understanding the phenomenon.

---

# 59. Research-to-Product Boundary

Makata may eventually commercialize research.

However:

> **The commercial usefulness of a method should not determine whether the underlying result is reported honestly.**

If a technique performs poorly, that result should remain visible.

Commercialization can then focus on:

- validated methods;
- tooling;
- deployment;
- optimization services;
- specialized products.

---

# 60. Quality Gates

A research project should pass progressively stronger gates.

## Gate 1 — Worth Investigating

Is there a meaningful uncertainty?

## Gate 2 — Experimentally Feasible

Can it be measured?

## Gate 3 — Initial Evidence

Does a measurable phenomenon exist?

## Gate 4 — Controlled Evidence

Can the effect be isolated?

## Gate 5 — Replication

Does the effect repeat?

## Gate 6 — Generalization

Does it survive reasonable changes?

## Gate 7 — Contribution

Does it provide meaningful knowledge or engineering value?

Not every project needs to pass all gates.

The intended claim determines the required evidence.

---

# 61. Minimum Standard for a Makata Claim

The strength of the claim should match the strength of the evidence.

### Weak evidence

> “In our initial test…”

### Moderate evidence

> “Across the tested configurations…”

### Stronger evidence

> “Across multiple devices and workloads…”

### General claim

Requires evidence demonstrating generalization.

The wording should never be stronger than the evidence.

---

# 62. Makata Experiment Template

Every substantial experiment should use a structure similar to:

```text
# Experiment

ID:
Title:
Date:
Researcher:
Status:

## Research Question

## Motivation

## Related Work

## Hypothesis

## Null Hypothesis

## Baseline

## Intervention

## Independent Variables

## Dependent Variables

## Control Variables

## Confounders

## Hardware

## Software Environment

## Model

## Runtime

## Dataset

## Workload

## Procedure

## Metrics

## Repetitions

## Statistical Analysis

## Failure Criteria

## Raw Results

## Analysis

## Ablation Results

## Robustness Tests

## Limitations

## Interpretation

## Conclusion

## Open Questions

## Reproducibility Artifacts
```

This should eventually become a reusable Makata experiment template.

---

# 63. Example — Quantization Experiment

### Research question

> How does model quantization affect document reasoning on a constrained iPhone?

### Hypothesis

4-bit quantization will reduce memory and potentially latency while causing measurable degradation in reasoning quality.

### Baselines

- FP16;
- INT8.

### Intervention

- INT6;
- INT4.

### Controls

- same model;
- same documents;
- same prompts;
- same runtime where applicable;
- same device;
- same retrieval pipeline.

### Metrics

Quality:

- answer accuracy;
- groundedness.

Resources:

- peak RAM;
- latency;
- energy;
- thermal state.

### Analysis

Plot:

**Quality versus RAM**

**Quality versus latency**

**Quality versus energy**

rather than only:

> “INT4 is X% faster.”

The final conclusion might show:

- strong benefit;
- weak benefit;
- no meaningful benefit;
- task-dependent benefit;
- unacceptable quality degradation.

All are valid outcomes.

---

# 64. Example — Pruning Experiment

The same methodology applies.

Research question:

> Which pruning strategy preserves document reasoning under a fixed memory/compute budget?

Possible interventions:

- 10%;
- 20%;
- 30%;
- 40%;
- structured;
- unstructured.

Evaluation:

- task quality;
- reasoning;
- memory;
- latency;
- energy;
- reliability.

A particularly important analysis would be:

> **Which capabilities degrade first as pruning increases?**

This may reveal more than a single overall score.

---

# 65. Example — Adaptive Reasoning Experiment

### Research question

> Can adaptive reasoning reduce resource consumption without materially reducing task quality?

Baseline:

Fixed reasoning budget.

Intervention:

Dynamic reasoning budget.

Measurements:

- accuracy;
- reasoning steps;
- latency;
- energy;
- memory;
- thermal behavior.

Additional question:

> Does the adaptive system correctly identify difficult tasks?

This introduces a second research problem:

**resource allocation accuracy.**

---

# 66. Example — Thermal Experiment

### Research question

> Does sustained thermal load change the ranking of local inference configurations?

Experiment:

1. Cold benchmark.
2. Repeated workload.
3. Warm benchmark.
4. Sustained workload.
5. Thermal-constrained workload.

Compare configurations across time.

Potential finding:

Configuration A wins cold performance.

Configuration B wins sustained performance.

That would demonstrate why peak benchmarks may be insufficient.

---

# 67. Research Artifact Chain

Every significant project should ideally produce a connected artifact chain:

**Research Question**

↓

**Experiment Specification**

↓

**Code**

↓

**Configuration**

↓

**Raw Data**

↓

**Analysis**

↓

**Figures**

↓

**Technical Report**

↓

**Paper**

↓

**Open-Source Implementation**

Not every project needs every artifact.

But the relationship should remain traceable.

---

# 68. Evidence Hierarchy

A useful conceptual hierarchy is:

**Demo**

↓

**Single experiment**

↓

**Controlled experiment**

↓

**Repeated experiment**

↓

**Cross-condition replication**

↓

**Cross-device validation**

↓

**Cross-workload validation**

↓

**General principle**

The farther up the hierarchy a claim moves, the more evidence it requires.

---

# 69. Research Lifecycle

The complete Makata research lifecycle becomes:

### 1. Observe

Identify something interesting.

### 2. Search

Understand existing research.

### 3. Question

Define uncertainty.

### 4. Hypothesize

Predict an outcome.

### 5. Design

Define experimental conditions.

### 6. Baseline

Measure the current state.

### 7. Intervene

Change the target variable.

### 8. Measure

Collect evidence.

### 9. Analyze

Quantify the result.

### 10. Challenge

Search for alternative explanations.

### 11. Replicate

Test again.

### 12. Generalize

Test broader conditions.

### 13. Publish

Communicate the evidence.

### 14. Implement

Convert validated knowledge into reusable engineering artifacts.

### 15. Re-enter the loop

Use new observations to generate the next question.

---

# 70. The Makata Anti-Coherence Rule

Because research narratives naturally tend to become cleaner after results are known, Makata should preserve evidence of uncertainty.

When documenting a project, maintain:

### What we expected

### What actually happened

### What surprised us

### What remains unexplained

### What we initially believed but now doubt

### What cannot yet be concluded

This is especially important when results are eventually turned into polished papers or public demonstrations.

The final narrative should not erase the actual uncertainty encountered during the research.

---

# 71. The Makata Research Record

A mature research project should therefore preserve three parallel records:

## Scientific Record

What was hypothesized and measured.

## Engineering Record

What was implemented and how.

## Epistemic Record

What is known, suspected, uncertain, contradictory, or unresolved.

The third record is particularly important.

A technically impressive system with poorly understood behavior is not equivalent to a well-understood engineering method.

---

# 72. What Counts as Success?

A research project succeeds if it materially reduces uncertainty.

It does not require:

- a positive result;
- an optimization win;
- a new model;
- a faster system;
- a publishable algorithm.

For example:

> We believed technique A could reduce model memory without affecting reasoning. Controlled experiments showed that the assumption was false under the tested conditions.

That is a successful research result.

The uncertainty has been reduced.

---

# 73. What Counts as Failure?

Research failure includes:

- changing too many variables to interpret the result;
- insufficient baseline;
- uncontrolled device state;
- unclear metrics;
- irreproducible setup;
- cherry-picked workloads;
- conclusions broader than the evidence;
- inability to distinguish intervention effects from confounders.

A failed hypothesis is not necessarily research failure.

A badly designed experiment often is.

---

# 74. Foundational Methodological Principle

Makata should optimize for:

> **Information gained per unit of research effort.**

This means the lab should prefer experiments that can meaningfully distinguish between competing explanations.

For example:

If two hypotheses predict the same result, an experiment that merely confirms that shared result provides limited information.

A better experiment is one where:

- Hypothesis A predicts X;
- Hypothesis B predicts Y;

and the experiment can distinguish X from Y.

This is a powerful criterion for experimental design.

---

# 75. Research Decision Principle

Before starting an experiment, ask:

> **What would we believe differently if the result went the other way?**

If the answer is:

> “Nothing.”

then the experiment may not be sufficiently informative.

This question should become one of Makata's standard research-design checks.

---

# 76. Current Methodology Baseline

For the current stage, Makata adopts the following methodological principles:

1. Questions precede techniques.
2. Baselines precede optimization claims.
3. Real hardware matters for real-device claims.
4. Quality and resource consumption must be measured together.
5. Component benchmarks do not substitute for end-to-end evaluation.
6. Independent variables should be isolated where possible.
7. Confounders should be actively investigated.
8. Repeated measurements should be used where appropriate.
9. Statistical significance and practical significance are distinct.
10. Negative results are valid results.
11. Contradictions should be preserved until explained.
12. Exploratory and confirmatory research should be distinguished.
13. Claim strength must match evidence strength.
14. Reproducibility should be designed into experiments.
15. Literature review precedes major novelty claims.
16. Ablations should be used for multi-component systems.
17. Robustness and generalization should be tested before broad claims.
18. Research records should preserve uncertainty.
19. Methods should emerge from evidence.
20. Engineering recommendations should remain scoped to the evidence.

---

# 77. Final Methodological Statement

> **Makata AI Edge Lab conducts research through controlled, reproducible, application-grounded experimentation on real AI systems and real hardware. Each major investigation begins with an explicit uncertainty, establishes an appropriate baseline, isolates interventions where possible, measures both intelligence and resource behavior, challenges alternative explanations, and documents limitations and unresolved questions.**
>
> **Makata treats positive, negative, contradictory, and inconclusive findings as legitimate research outcomes. The strength of every claim should correspond to the strength and breadth of its evidence. Component-level improvements are not automatically considered system-level improvements, and benchmark performance is not automatically considered application performance.**
>
> **The laboratory's methodological objective is not simply to produce faster or smaller AI systems. It is to produce reliable knowledge about how AI systems behave under real-world constraints and to transform that knowledge into reproducible engineering methods where the evidence supports doing so.**
>
> **The governing principle is:**
>
> **Measure the system. Challenge the explanation. Preserve the uncertainty.**
