# Makata AI Edge Lab

## Research Thesis & Research Questions Framework

**Status:** Foundational research artifact
**Version:** 1.0
**Relationship to:** Laboratory Charter and Value Proposition & Positioning Specification
**Scope:** Research direction, thesis formation, research-question design, hypothesis development, and experiment selection

---

# 1. Purpose of This Artifact

This document defines how Makata AI Edge Lab turns its broad mission into a coherent but non-rigid research program.

The purpose is not to predetermine the answers.

The purpose is to establish:

- what kinds of questions Makata investigates;
- what constitutes a meaningful research question;
- how engineering observations become research questions;
- how hypotheses should be formulated;
- how research questions are scoped;
- how experiments progress from exploration to validation;
- how contradictory and negative findings are handled;
- when a question is sufficiently valuable to justify an experiment;
- how individual experiments contribute to a larger body of knowledge.

This framework intentionally avoids assuming that any particular technique—such as pruning, quantization, retrieval, distillation, adaptive reasoning, or model switching—is inherently beneficial.

The laboratory's research program should emerge from evidence.

---

# 2. Central Research Thesis

Makata AI Edge Lab's central research thesis is:

> **Useful AI capability on edge devices is determined not by model capability alone, but by the interaction between models, representations, optimization techniques, inference strategies, application workloads, and device constraints.**

A stronger operational formulation is:

> **The central research problem of edge AI is determining how to maximize useful intelligence subject to real-world computational, memory, energy, thermal, latency, privacy, and connectivity constraints.**

This thesis contains several important assumptions that must remain testable.

Makata should not assume that:

- smaller models are always better for edge;
- larger models are always better for quality;
- pruning preserves reasoning;
- quantization preserves reasoning;
- retrieval compensates for model capability;
- more context produces better answers;
- more reasoning produces better results;
- local execution is always preferable to cloud execution;
- lower latency is always more valuable than higher quality;
- lower memory consumption is always worth the quality loss;
- a technique that works in a benchmark will work in a real application;
- a technique that works on one device generalizes to another;
- a technique that works for one task generalizes to another.

These are research questions, not premises.

---

# 3. The Fundamental Research Question

The laboratory's highest-level question is:

> **Given a task, a device, and a resource budget, what combination of AI models, representations, optimization techniques, retrieval strategies, reasoning strategies, and execution policies produces the highest useful intelligence?**

This question can be decomposed into several dimensions.

### Task

What is the AI system actually required to do?

Examples:

- summarize a document;
- answer questions about a document;
- extract structured information;
- classify content;
- translate text;
- perform multi-step reasoning;
- retrieve relevant information;
- generate an action plan;
- operate as an agent.

### Device

What environment must the system operate within?

Examples:

- 6 GB RAM smartphone;
- 8 GB RAM smartphone;
- high-end smartphone;
- tablet;
- laptop;
- embedded system;
- CPU-only environment;
- GPU/NPU-enabled environment.

### Resource budget

What constraints exist?

Examples:

- peak RAM;
- storage;
- latency;
- energy;
- battery consumption;
- thermal load;
- sustained throughput;
- network availability;
- bandwidth;
- monetary cost.

### Intelligence requirement

What constitutes useful performance?

Examples:

- factual accuracy;
- reasoning accuracy;
- extraction accuracy;
- groundedness;
- citation correctness;
- task completion;
- robustness;
- consistency;
- hallucination rate;
- human-rated usefulness.

The research problem therefore becomes a constrained systems optimization problem rather than a simple model-selection problem.

---

# 4. The Makata Research Thesis

The central thesis can be represented conceptually as:

**Useful Intelligence = f(Model, Representation, Compression, Retrieval, Reasoning, Memory, Runtime, Device, Task, Environment)**

subject to:

**Memory ≤ Budget**

**Latency ≤ Budget**

**Energy ≤ Budget**

**Thermal Load ≤ Budget**

**Storage ≤ Budget**

**Connectivity Dependency ≤ Budget**

while maintaining:

**Quality ≥ Required Threshold**

This is not intended as a final mathematical model.

It is a conceptual representation of the research space.

The eventual research may reveal that:

- some variables dominate others;
- some variables interact nonlinearly;
- some variables are task-dependent;
- some constraints are more important than expected;
- some commonly assumed relationships do not hold.

Those findings should modify the model rather than being forced into it.

---

# 5. Core Research Proposition

Makata's working proposition is:

> **Edge AI optimization should be evaluated at the system level rather than exclusively at the model level.**

For example, reducing model size may appear beneficial.

But if the smaller model requires:

- more retrieval;
- larger context;
- additional reranking;
- repeated inference;
- more reasoning steps;
- more verification;
- additional OCR processing;

then the overall system may consume more resources despite the smaller model.

Conversely, a larger model may sometimes produce a better total system because it requires fewer auxiliary operations.

Therefore:

> **A component-level improvement is not necessarily a system-level improvement.**

This distinction should become a recurring principle in Makata experiments.

---

# 6. Research Domains

Makata's research space is divided into eight primary domains.

## 6.1 Model

Questions involving the underlying AI model.

Examples:

- model size;
- architecture;
- parameter count;
- model family;
- mixture-of-experts behavior;
- specialized versus general models;
- reasoning-oriented versus instruction-oriented models;
- model capability versus resource consumption.

Example question:

> How does model scale affect document reasoning quality under a fixed mobile memory budget?

---

## 6.2 Compression

Techniques that alter model computational or storage requirements.

Examples:

- quantization;
- pruning;
- distillation;
- weight sharing;
- sparsity;
- low-rank approximation;
- vocabulary reduction;
- architecture modification.

Example question:

> At what level of weight quantization does document reasoning quality begin to degrade materially for a constrained smartphone workload?

The important principle is:

> The technique itself is not the research contribution.

The contribution may instead be the measured relationship between the technique, task, device, and resulting system behavior.

---

# 6.3 Representation

How information is represented before reaching the model.

Examples:

- tokenization;
- chunking;
- semantic segmentation;
- compressed context;
- summaries;
- structured representations;
- embeddings;
- metadata;
- knowledge graphs;
- document layouts;
- multimodal representations.

Example question:

> Can structured document representations reduce the amount of context required for reliable local reasoning?

---

# 6.4 Retrieval

How information is selected and supplied to the model.

Examples:

- sparse retrieval;
- dense retrieval;
- hybrid retrieval;
- reranking;
- query expansion;
- adaptive retrieval;
- context filtering;
- retrieval depth;
- retrieval confidence.

Example question:

> Can adaptive retrieval compensate for reduced model capacity without exceeding the system's latency budget?

---

# 6.5 Reasoning

How computational reasoning is allocated.

Examples:

- single-pass reasoning;
- multi-step reasoning;
- adaptive reasoning;
- verification;
- self-consistency;
- tool-assisted reasoning;
- reasoning depth;
- selective reasoning;
- early stopping.

Example question:

> Does allocating additional inference steps improve document reasoning enough to justify the associated latency and energy cost on mobile hardware?

---

# 6.6 Memory

How information is retained and reused.

Examples:

- context windows;
- conversation memory;
- external memory;
- compressed memory;
- retrieval-based memory;
- state reuse;
- cache strategies;
- episodic memory.

Example question:

> Can persistent compressed memory reduce repeated inference cost in multi-turn document interactions?

---

# 6.7 Runtime and Execution

How inference is executed.

Examples:

- runtime selection;
- CPU versus accelerator execution;
- batching;
- caching;
- scheduling;
- model loading;
- memory management;
- operator optimization;
- dynamic execution;
- heterogeneous execution.

Example question:

> How does runtime selection affect sustained rather than peak performance for local document intelligence?

---

# 6.8 Device and Environment

The physical and environmental constraints under which the system operates.

Examples:

- RAM;
- thermal state;
- battery state;
- CPU;
- GPU;
- NPU;
- operating system;
- device generation;
- background workload;
- storage;
- network availability.

Example question:

> How does thermal throttling change the effective performance of a local LLM during sustained document-analysis workloads?

---

# 7. The Application Layer

The previous domains should not be studied exclusively in isolation.

Makata adds an application layer:

> **What happens when these techniques are combined inside a real workload?**

The initial application testbed is:

# Edge Document Intelligence

Potential workload categories include:

- document summarization;
- question answering;
- information extraction;
- document classification;
- document comparison;
- citation generation;
- document-grounded reasoning;
- document translation;
- structured data extraction.

This testbed is useful because it exposes interactions between multiple AI components.

For example:

**PDF**

→ OCR

→ parsing

→ representation

→ chunking

→ embedding

→ retrieval

→ reranking

→ context selection

→ local inference

→ reasoning

→ verification

→ response.

An optimization that improves one stage may worsen another.

That interaction is itself a potential research subject.

---

# 8. Research Question Taxonomy

Makata research questions should fall into identifiable categories.

## 8.1 Descriptive Questions

These ask:

> What happens?

Examples:

- How much memory does a given model consume on a 6 GB device?
- How does latency change with context length?
- How does thermal state affect sustained inference speed?

These questions are foundational.

They establish empirical reality before optimization.

---

# 8.2 Comparative Questions

These ask:

> What happens when A is compared with B?

Examples:

- Quantization versus pruning;
- 4-bit versus 8-bit inference;
- small model versus larger model;
- dense retrieval versus hybrid retrieval;
- static reasoning versus adaptive reasoning.

Comparative research must control for confounding variables.

---

# 8.3 Causal Questions

These ask:

> Does changing X cause a measurable change in Y?

Example:

> Does reducing model precision cause a measurable degradation in document reasoning accuracy?

These are stronger than simple correlations but require more rigorous experimental design.

---

# 8.4 Trade-Off Questions

These ask:

> What is gained and what is sacrificed?

Examples:

- quality versus latency;
- quality versus memory;
- reasoning quality versus energy;
- retrieval depth versus latency;
- model size versus task reliability.

Trade-off questions are particularly important for Makata.

---

# 8.5 Threshold Questions

These ask:

> At what point does behavior change materially?

Examples:

- At what quantization level does reasoning degradation become significant?
- At what context length does additional context stop producing meaningful benefit?
- At what thermal level does sustained throughput collapse?

Thresholds may be more practically valuable than averages.

---

# 8.6 Interaction Questions

These ask:

> Does the effect of X depend on Y?

Examples:

> Does quantization affect reasoning differently depending on retrieval quality?

Or:

> Does model compression have different effects at different context lengths?

These questions are especially important because edge AI is likely to contain substantial interaction effects.

---

# 8.7 Optimization Questions

These ask:

> What configuration maximizes the objective under constraints?

Example:

> What configuration maximizes document QA quality while maintaining a peak memory limit of 5 GB and a response latency below a defined threshold?

These should normally come after enough descriptive and comparative evidence exists.

---

# 8.8 Generalization Questions

These ask:

> Does the observed result hold elsewhere?

Examples:

- Does a result on one iPhone generation hold on another?
- Does a result for document QA hold for extraction?
- Does a result with one model family hold for another?
- Does a result in one language hold in another?

Generalization should never be assumed.

---

# 9. Hypothesis Framework

A Makata hypothesis should contain five components.

### H1 — Intervention

What is being changed?

Example:

> Reduce model precision from 8-bit to 4-bit.

### H2 — Expected effect

What should change?

> Peak memory and inference latency will decrease.

### H3 — Quality consequence

What is expected to happen to intelligence?

> Reasoning accuracy may decrease.

### H4 — Boundary condition

Under what conditions?

> For document-grounded question answering on a 6 GB smartphone.

### H5 — Decision criterion

What would count as meaningful?

> The resource improvement must exceed a predefined threshold while quality degradation remains below an acceptable threshold.

This prevents vague hypotheses such as:

> “4-bit quantization should be better.”

---

# 10. Falsifiability

A Makata hypothesis should be capable of being disproven.

Weak:

> Quantization may help edge AI.

Strong:

> 4-bit quantization will reduce peak memory by at least X% while reducing document QA accuracy by less than Y percentage points under the defined workload.

The actual thresholds should be determined from the experimental context rather than fabricated simply to make a hypothesis appear scientific.

A hypothesis is valuable even when it fails.

---

# 11. Research Question Quality Criteria

Before beginning substantial experimentation, Makata should evaluate a proposed research question against the following criteria.

### 11.1 Specific

Can the question be experimentally bounded?

### 11.2 Measurable

Can its important variables be measured?

### 11.3 Falsifiable

Could evidence contradict the hypothesis?

### 11.4 Relevant

Does the answer contribute to useful edge-AI knowledge?

### 11.5 Non-trivial

Is the result likely to reveal something beyond an obvious engineering fact?

### 11.6 Reproducible

Can another researcher recreate the experiment?

### 11.7 Generalizable

Could the finding potentially apply beyond one arbitrary configuration?

### 11.8 Resource-feasible

Can Makata realistically conduct the experiment?

### 11.9 Evidence-producing

Will the experiment produce information rather than merely another demonstration?

### 11.10 Uncertainty-aware

Does the research design allow the possibility that the initial assumption is wrong?

---

# 12. What Qualifies as Makata Research?

A project qualifies when it investigates a meaningful question about AI behavior under defined constraints and produces evidence that can inform engineering or scientific understanding.

Examples:

### Qualifies

> Measuring the relationship between model quantization and reasoning accuracy on constrained smartphones.

> Investigating whether context compression can preserve document QA quality while reducing memory.

> Comparing retrieval strategies under identical mobile inference budgets.

> Measuring the impact of thermal throttling on sustained local inference.

> Developing an adaptive inference policy and evaluating whether it improves the quality/resource Pareto frontier.

> Studying whether a smaller model combined with stronger retrieval can outperform a larger model under a fixed energy budget.

---

# 13. What Does Not Qualify by Itself?

These activities may be useful engineering work but are not automatically Makata research.

### Mere application development

> “We built a document chatbot.”

### Mere integration

> “We connected OCR, embeddings, and an LLM.”

### Mere model deployment

> “We successfully ran a 7B model on an iPhone.”

### Uncontrolled benchmarking

> “Model A feels faster than Model B.”

### Marketing claims

> “Our architecture is the most efficient.”

### Technology collection

> “We tested ten models.”

### Feature development

> “We added offline document chat.”

These can become research when they generate controlled questions and evidence.

---

# 14. Turning an Observation into Research

Makata should explicitly support the transformation:

**Observation**

→ **Anomaly / uncertainty**

→ **Question**

→ **Hypothesis**

→ **Experiment**

→ **Evidence**

→ **Interpretation**

→ **Replication**

→ **Generalization**

For example:

### Observation

A smaller model seems to answer some document questions better than a larger model when retrieval is enabled.

### Bad conclusion

> Smaller models are better for document intelligence.

### Better research question

> Under what retrieval conditions can a smaller model match or exceed a larger model on document-grounded reasoning?

### Hypothesis

> Improved retrieval quality may reduce the model-capability gap for certain document reasoning tasks.

### Experiment

Hold constant:

- device;
- document corpus;
- retrieval pipeline;
- prompt;
- evaluation set;

and vary:

- model capability.

Then measure:

- accuracy;
- groundedness;
- latency;
- memory;
- energy.

The outcome may confirm, weaken, or contradict the hypothesis.

---

# 15. Research Ladder

Makata should use a progressive research ladder.

## Level 0 — Observation

Something interesting was noticed.

No strong claim is made.

---

## Level 1 — Exploratory Experiment

The goal is to understand behavior.

Controls may be limited.

Purpose:

> Determine whether the phenomenon is worth investigating.

---

## Level 2 — Controlled Experiment

Variables and controls are explicitly defined.

Purpose:

> Establish whether a measurable effect exists.

---

## Level 3 — Comparative Study

Multiple techniques or configurations are systematically compared.

Purpose:

> Understand relative behavior and trade-offs.

---

## Level 4 — Method Development

A new technique, policy, architecture, or optimization strategy is proposed.

Purpose:

> Determine whether a new intervention produces a meaningful improvement.

---

## Level 5 — Validation

The proposed method is tested across:

- devices;
- models;
- workloads;
- datasets;
- environmental conditions.

Purpose:

> Determine the boundaries of the finding.

---

## Level 6 — Generalization

The research asks whether the observed principle extends beyond its original testbed.

Purpose:

> Determine whether the finding represents a broader engineering principle.

Not every project needs to reach Level 6.

---

# 16. Research Axes

Makata's experimental space can be represented as a multidimensional matrix.

| Axis        | Example Variables                           |
| ----------- | ------------------------------------------- |
| Model       | 1B / 3B / 7B / architecture / family        |
| Precision   | FP16 / INT8 / INT4 / mixed                  |
| Compression | pruning / quantization / distillation       |
| Context     | length / compression / selection            |
| Retrieval   | sparse / dense / hybrid / adaptive          |
| Reasoning   | single-pass / multi-step / adaptive         |
| Memory      | stateless / cache / persistent / compressed |
| Runtime     | runtime A / runtime B / accelerator         |
| Device      | 6 GB / 8 GB / 12 GB / laptop                |
| Thermal     | cold / sustained / throttled                |
| Task        | QA / extraction / summary / comparison      |
| Corpus      | short / long / structured / noisy           |
| Environment | offline / intermittent / connected          |
| Objective   | quality / latency / energy / memory         |

This matrix is not a mandate to test every combination.

It defines the possible research space.

---

# 17. The Research Frontier

Makata should prioritize areas where multiple variables interact.

For example:

> **Model × Retrieval**

Can retrieval compensate for model reduction?

> **Compression × Reasoning**

Which forms of compression disproportionately affect reasoning?

> **Context × Memory**

Can context reduction preserve task quality while reducing memory?

> **Reasoning × Energy**

When does additional reasoning become economically or thermally unjustified?

> **Runtime × Thermal State**

Does a runtime that wins in short benchmarks remain superior under sustained workloads?

> **Model × Device**

Does the optimal model change with hardware constraints?

> **Application × Architecture**

Does the best architecture depend on the actual workload rather than the underlying model?

These interaction questions may ultimately be more valuable than isolated component benchmarks.

---

# 18. Initial Research Program

The initial research program should begin with the edge document-intelligence testbed.

A possible progression is:

### Phase A — Establish Reality

Measure:

- baseline model performance;
- memory;
- latency;
- energy;
- thermal behavior;
- task quality.

Question:

> What actually happens on constrained devices?

---

### Phase B — Compression

Investigate:

- quantization;
- pruning;
- distillation;
- combinations.

Question:

> What capability is lost or preserved when computational requirements are reduced?

---

### Phase C — Representation

Investigate:

- chunking;
- context compression;
- structured document representations;
- retrieval.

Question:

> Can better information representation compensate for limited model capacity?

---

### Phase D — Reasoning Allocation

Investigate:

- adaptive reasoning;
- selective reasoning;
- early stopping;
- verification.

Question:

> Can computational effort be allocated only where it provides measurable value?

---

### Phase E — Device Adaptation

Investigate:

- device-specific configuration;
- thermal-aware execution;
- resource-aware model selection;
- dynamic inference policies.

Question:

> Can the AI system adapt its behavior to the actual state of the device?

---

### Phase F — Joint Optimization

Combine multiple interventions.

Question:

> Does coordinated optimization produce a better system-level Pareto frontier than optimizing individual components independently?

This sequence is provisional.

Evidence may justify changing the order.

---

# 19. The 6 GB iPhone as a Research Constraint

The initial constrained-device focus can be expressed as:

> **How much useful AI intelligence can be delivered within the practical resource envelope of a 6 GB consumer smartphone?**

This is not a claim that 6 GB is universally important.

It is a deliberately difficult and concrete experimental boundary.

It creates a useful research environment because constraints become real rather than theoretical.

Potential measurements include:

- peak memory;
- sustained memory;
- model load time;
- first-token latency;
- tokens/second;
- end-to-end response time;
- energy consumption;
- device temperature;
- throttling;
- crash/restart behavior;
- task accuracy;
- hallucination rate;
- groundedness;
- user-perceived usefulness.

The exact measurement set should vary according to the research question.

---

# 20. Quality Must Remain First-Class

Makata should avoid a common failure mode in edge optimization:

> treating resource reduction as success regardless of intelligence degradation.

For example:

**Model A**

- lower memory;
- lower latency;
- lower energy;
- significantly worse reasoning.

**Model B**

- higher memory;
- higher latency;
- higher energy;
- substantially better reasoning.

Neither should automatically be declared superior.

The correct question is:

> Which configuration is appropriate under the stated task and constraints?

This naturally leads to Pareto analysis.

---

# 21. Pareto Research Principle

Makata should prefer:

> **Pareto frontiers over universal winners.**

A system may be evaluated across:

- quality;
- latency;
- memory;
- energy;
- thermal behavior;
- reliability.

A configuration is potentially interesting when another configuration cannot improve one major dimension without sacrificing another.

The objective is therefore not necessarily:

> Find the single best system.

It may instead be:

> Map the feasible trade-off frontier and understand what causes its shape.

---

# 22. Negative Results

Negative results are explicitly part of Makata's research output.

Examples:

> Quantization reduced memory but caused unacceptable reasoning degradation.

> Retrieval improvements did not compensate for model reduction.

> A theoretically efficient architecture performed poorly on real hardware.

> A runtime that performed well in short benchmarks degraded under sustained thermal load.

> Adaptive reasoning added complexity without producing sufficient quality improvement.

These findings should not be hidden merely because they weaken a proposed technique.

A failed hypothesis may prevent other engineers from repeating the same mistake.

That is useful knowledge.

---

# 23. Contradictory Results

Makata should not automatically resolve contradictory findings into a single narrative.

If:

- Experiment A shows improvement;
- Experiment B does not;
- Experiment C shows degradation;

the appropriate response may be:

> **The effect is conditional or not yet understood.**

Potential explanations should be treated as hypotheses.

Examples:

- task dependence;
- model dependence;
- device dependence;
- dataset characteristics;
- thermal state;
- implementation differences;
- measurement noise;
- experimental design;
- interaction effects.

The laboratory should preserve these contradictions until sufficient evidence exists to explain them.

---

# 24. Generalization Discipline

A result should initially be described at the narrowest level supported by the evidence.

For example:

### Evidence

A technique improved QA performance on one document dataset using one model on one iPhone.

### Appropriate claim

> The technique improved QA performance under the tested configuration.

### Inappropriate claim

> The technique improves document intelligence on smartphones.

The broader claim requires additional evidence.

This principle should govern publications, README files, demos, presentations, and marketing.

---

# 25. Research Boundaries

Makata should maintain three levels of certainty.

### Observed

> We measured X.

### Supported interpretation

> The evidence suggests Y.

### Hypothesis

> We propose Z as a possible explanation.

These should not be collapsed into:

> X proves Y.

This distinction is especially important when publishing engineering research.

---

# 26. Experiment Selection Framework

Before committing significant resources to an experiment, Makata should ask:

### Scientific value

Will the result teach us something we do not already know?

### Engineering value

Could the result change how an edge AI system is designed?

### Reproducibility

Can the experiment be reproduced?

### Measurement quality

Can the important variables actually be measured?

### Decision value

Could the result eliminate a meaningful uncertainty?

### Scope

Can the experiment be completed within available resources?

### Novelty

Is there a plausible contribution beyond merely reproducing an existing benchmark?

### Contradiction potential

Could the experiment meaningfully disprove our current assumption?

The last question is particularly important.

Experiments should not be designed merely to validate Makata's preferred narrative.

---

# 27. Research Prioritization

A candidate research question can be prioritized conceptually according to:

**Potential Knowledge Gain × Practical Relevance × Uncertainty × Feasibility**

This should not necessarily become a literal numerical score.

It is a thinking framework.

A question with:

- high uncertainty;
- high practical consequence;
- measurable variables;
- manageable experimentation cost;

may be more valuable than a question whose answer is already largely known.

---

# 28. Research Question Templates

Makata can use the following templates.

### Compression

> How does **[compression technique]** affect **[quality metric]**, **[resource metric]**, and **[system behavior]** for **[task]** under **[device constraint]**?

### Quantization

> At what precision does **[model/task]** exhibit meaningful degradation under **[device/resource condition]**?

### Pruning

> Which forms of pruning preserve **[capability]** most effectively under **[resource budget]**?

### Retrieval

> To what extent can **[retrieval strategy]** compensate for reduced **[model/context capacity]**?

### Context

> How does **[context reduction strategy]** affect task quality relative to memory and latency savings?

### Reasoning

> When does additional reasoning improve task quality enough to justify its resource cost?

### Runtime

> How does **[runtime/execution strategy]** affect sustained performance under **[device condition]**?

### Thermal

> How does sustained thermal state affect effective AI performance compared with short-duration benchmark measurements?

### Adaptive systems

> Can dynamically selecting **[model/retrieval/reasoning configuration]** based on **[resource/task state]** improve the quality-resource Pareto frontier?

### Joint optimization

> Does jointly optimizing **[A]**, **[B]**, and **[C]** produce greater system-level benefit than optimizing each independently?

---

# 29. What Could Become a Major Makata Contribution?

The laboratory should not assume that the eventual contribution will be a new model.

Potential contributions include:

### Empirical knowledge

A previously poorly understood relationship between:

- model size;
- reasoning;
- retrieval;
- memory;
- thermal behavior;
- device constraints.

### Engineering method

A repeatable procedure for selecting or adapting AI configurations under constraints.

### Optimization algorithm

A method that dynamically allocates computation.

### Architecture

A system architecture that coordinates multiple components based on resource state.

### Benchmark

A benchmark specifically designed around realistic edge workloads.

### Dataset

A workload/evaluation dataset designed to expose edge-specific trade-offs.

### Profiling system

A tool for measuring AI behavior across device conditions.

### Theory or framework

A general model describing how useful intelligence changes with computational resources.

The eventual contribution should emerge from research rather than being predetermined.

---

# 30. The Long-Term Research Question

The laboratory's long-term research direction can be expressed as:

> **Can AI systems learn to intelligently allocate their own computational resources according to task difficulty, information requirements, device capability, resource availability, and environmental state?**

This leads toward areas such as:

- adaptive model selection;
- adaptive reasoning;
- dynamic retrieval;
- dynamic context;
- device-aware inference;
- thermal-aware computation;
- energy-aware reasoning;
- dynamic model routing;
- local/cloud orchestration;
- self-optimizing AI systems.

However, this is a long-term research direction, not a claim that Makata has already demonstrated such systems.

---

# 31. Research Map

The overall research space can be visualized conceptually as:

**DEVICE CONSTRAINTS**

↓

Memory
Compute
Energy
Thermal
Latency
Storage
Connectivity

↓

**SYSTEM STRATEGIES**

Model
Compression
Representation
Retrieval
Reasoning
Memory
Runtime

↓

**APPLICATION WORKLOAD**

Document Intelligence
Translation
Extraction
QA
Summarization
Agents
Other Edge AI Tasks

↓

**MEASURED OUTCOMES**

Quality
Latency
Memory
Energy
Thermal Stability
Reliability
Privacy
Cost

↓

**RESEARCH KNOWLEDGE**

Observed Relationships
Trade-offs
Thresholds
Failure Modes
Optimization Methods
Generalizable Principles

↓

**ENGINEERING OUTPUTS**

Methods
Benchmarks
Tools
Architectures
Open Source
Technical Reports
Research Papers

This forms the conceptual research pipeline of Makata AI Edge Lab.

---

# 32. The Research Loop

Makata's research should operate as a loop rather than a linear product-development process.

**Observe**

↓

**Question**

↓

**Hypothesize**

↓

**Measure**

↓

**Experiment**

↓

**Analyze**

↓

**Challenge**

↓

**Replicate**

↓

**Generalize**

↓

**Publish**

↓

**Implement**

↓

**Observe Again**

The final stage is important.

A method that works in a controlled experiment should eventually be tested in realistic workloads.

Real-world behavior may reveal new problems.

Those problems generate new questions.

---

# 33. Research Integrity Rules

Makata should adopt the following rules:

1. Never claim optimization without defining the baseline.
2. Never report quality improvement without specifying the evaluation task.
3. Never report speed improvement without specifying measurement conditions.
4. Never generalize from one device without acknowledging device specificity.
5. Never treat benchmark performance as equivalent to application performance.
6. Never hide negative results that materially affect the conclusion.
7. Never remove inconvenient measurements simply because they complicate the narrative.
8. Distinguish correlation from causation.
9. Separate measured results from interpretation.
10. Preserve uncertainty where evidence is insufficient.
11. Report meaningful implementation details required for reproduction.
12. Where possible, release code, configurations, evaluation data, or sufficient methodological detail.
13. Document failed approaches.
14. State known limitations explicitly.
15. Avoid universal claims when evidence is conditional.

---

# 34. Relationship to the Laboratory Charter

The Laboratory Charter defines **what Makata is**.

The Value Proposition defines **why Makata is valuable**.

This Research Framework defines:

> **How Makata turns that identity and value proposition into actual research.**

The three artifacts therefore form the initial conceptual foundation:

### Artifact 01

**Laboratory Charter**

Identity → mission → philosophy → boundaries.

### Artifact 02

**Value Proposition & Positioning**

Problem → value → differentiation hypothesis → beneficiaries.

### Artifact 03

**Research Thesis & Questions Framework**

Thesis → research space → questions → hypotheses → experiments → evidence.

Together they establish the foundation before implementation begins.

---

# 35. Current Research Thesis — Frozen Baseline

For the current stage of Makata development, the following should be treated as the working research thesis:

> **Useful edge intelligence is a systems-level phenomenon emerging from the interaction between AI models, information representation, compression, retrieval, reasoning, memory, inference runtime, device capabilities, and application requirements.**
>
> **Makata AI Edge Lab investigates these interactions empirically to determine how useful AI capability can be maximized under real-world resource constraints.**
>
> **The laboratory does not assume that any individual optimization technique is universally beneficial. Instead, it studies the conditions under which particular engineering choices improve, degrade, or otherwise alter the quality-resource trade-off of an AI system.**
>
> **Its initial experimental environment is constrained consumer mobile hardware, with edge document intelligence serving as an application-grounded testbed.**
>
> **The longer-term objective is to develop generalizable engineering methods for AI systems that dynamically adapt computation to task requirements and environmental constraints.**

---

# 36. What Is Deliberately Not Decided Yet

This framework intentionally leaves several questions open.

### Not yet decided

- Whether pruning will become a major Makata research area.
- Whether quantization will produce the most valuable findings.
- Whether document intelligence will remain the primary application.
- Whether 6 GB iPhones will remain the primary hardware target.
- Whether adaptive inference becomes the central research direction.
- Whether Makata develops its own benchmark.
- Whether Makata develops its own optimization framework.
- Whether the eventual contribution is primarily empirical, algorithmic, architectural, or theoretical.
- Whether the research will demonstrate that local AI is preferable to cloud AI for particular workloads.
- Whether a generalized theory of useful intelligence per resource unit is achievable.

These should remain open until evidence provides a reason to narrow them.

---

# 37. Final Principle

The most important research rule for Makata AI Edge Lab is:

> **Do not start with the technique you want to prove. Start with the uncertainty you want to resolve.**

Instead of:

> “Let's prove pruning works.”

Ask:

> “How does reducing model capacity affect useful intelligence under a defined resource constraint?”

Instead of:

> “Let's prove local AI is better.”

Ask:

> “Under what workload and resource conditions does local execution provide the best overall system trade-off?”

Instead of:

> “Let's build an adaptive AI system.”

Ask:

> “Is dynamically allocating computational effort measurably better than using a fixed configuration?”

This keeps Makata a laboratory rather than a vehicle for confirming predetermined beliefs.

## Foundational Research Principle

> **Question first. Evidence second. Method third. Conclusion last.**

And when the evidence does not support a conclusion:

> **“Cannot conclude yet” is a valid research result.**
