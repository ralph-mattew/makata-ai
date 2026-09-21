# Architecture overview

## Goal

MAKATA.ai is designed to showcase a portfolio of local-first AI systems and product ideas that prioritise privacy, low-latency inference, and offline reliability.

## Core principles

1. Local inference first
   - Core AI operations should run on-device when possible.
   - Sensitive data stays close to the user rather than being shipped to cloud providers.

2. Privacy by design
   - The system should make security and data minimisation part of the default architecture.

3. Product clarity over abstraction
   - Every demo and prototype should communicate its value, constraints, and use case clearly.

4. Roadmap-driven iteration
   - The portfolio should evolve from proof-of-concept demos into more durable production systems.

## Example system layers

- Frontend: landing page and project portfolio UI
- Product layer: AI product concepts such as local document summarisation and multilingual assistants
- Model layer: edge-optimized small models and multimodal inference paths
- Retrieval layer: local indexing and retrieval pipelines for secure knowledge access
- Deployment layer: offline-capable packaging and runtime evaluation for edge environments

## Production considerations

- Benchmark performance on mobile and edge devices
- Measure resource use under memory and CPU constraints
- Design clear fallback flows for offline operation
- Add structured documentation for model decisions, evaluation, and release readiness
