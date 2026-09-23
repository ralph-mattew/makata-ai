# MAKATA.ai — Analytics, Measurement & Conversion Specification

**Document Type:** Analytics / Measurement / Conversion
**Status:** Design artifact
**Purpose:** Define what MAKATA.ai should measure, why it matters, which events to track, how to interpret visitor behavior, and how to avoid turning the site into an analytics-heavy dashboard with little actionable information.

---

# 1. Measurement Philosophy

MAKATA.ai is not primarily a media website.

Its purpose is to make technical work discoverable and credible.

Therefore the central question is not:

> “How many people visited?”

It is:

> **“Did the right people discover the work, understand it, interact with it, and take a meaningful next step?”**

The measurement hierarchy should therefore be:

**Discovery → Engagement → Technical Interest → Professional Intent → Outcome**

---

# 2. Primary Outcomes

MAKATA.ai has several possible outcomes.

They should not be collapsed into one generic “conversion.”

## Outcome A — Professional interest

Examples:

- Recruiter views work
- Hiring manager explores project
- LinkedIn profile opened
- CV/profile accessed
- Contact initiated

## Outcome B — Technical interest

Examples:

- Engineer runs demo
- Architecture explored
- Benchmark inspected
- GitHub repository opened
- Experiment investigated

## Outcome C — Product interest

Examples:

- Someone tries Xylo
- Someone investigates Unawain
- Someone asks about deployment
- Someone requests access
- Someone contacts Ralph about the product

## Outcome D — Collaboration

Examples:

- Research discussion
- Technical collaboration
- Consulting opportunity
- Speaking invitation
- Partnership inquiry

These outcomes should remain separate.

A recruiter visiting the About page and an engineer spending ten minutes examining an architecture diagram are valuable in different ways.

---

# 3. Measurement Funnel

Recommended funnel:

```text
DISCOVER
   ↓
LAND
   ↓
ORIENT
   ↓
EXPLORE
   ↓
INTERACT
   ↓
INVESTIGATE
   ↓
CONNECT
```

Examples:

**Discover**

Search / LinkedIn / referral

↓

**Land**

Homepage / project page

↓

**Explore**

Project / Lab / About

↓

**Interact**

Demo / architecture / benchmark

↓

**Investigate**

GitHub / experiment / related project

↓

**Connect**

LinkedIn / email / contact form

---

# 4. Measurement Layers

## Layer 1 — Traffic

Measure:

- Sessions
- Users
- Page views
- Traffic source
- Landing page
- Country/region at an appropriately aggregated level
- Device category

This is baseline information, not the primary KPI.

---

## Layer 2 — Content Engagement

Measure:

- Project opened
- Experiment opened
- Benchmark opened
- Field note opened
- About viewed
- Related work clicked

This identifies what visitors actually investigate.

---

## Layer 3 — Engineering Engagement

Measure:

- Demo started
- Demo completed
- Architecture opened
- Architecture depth reached
- Benchmark inspected
- Technical details expanded
- GitHub clicked

This layer is especially important for MAKATA.ai.

---

## Layer 4 — Intent

Measure:

- Contact initiated
- LinkedIn clicked
- Email clicked
- Product/demo request
- Collaboration inquiry
- Recruitment-related inquiry where explicitly identified

These represent stronger signals than page views.

---

# 5. Core Events

Recommended event taxonomy:

```text
page_view
project_opened
demo_started
demo_completed
demo_failed
architecture_opened
architecture_level_changed
benchmark_opened
experiment_opened
field_note_opened
related_work_clicked
github_clicked
linkedin_clicked
contact_started
contact_submitted
external_project_clicked
```

Keep the initial event vocabulary small.

Do not create an event for every button.

---

# 6. Event Properties

Events should contain useful contextual information.

Example:

```text
demo_started
  project: xylo
  demo_type: live
```

Example:

```text
architecture_opened
  project: xylo
  level: overview
```

Example:

```text
related_work_clicked
  source: xylo
  target: experiment-local-inference
  relationship: SHARED_CONSTRAINT
```

The properties should help answer questions.

They should not become a dumping ground for arbitrary visitor data.

---

# 7. Demo Measurement

The demo is one of the most important measurable surfaces.

Track:

### Started

Visitor intentionally begins the demo.

### Completed

The system successfully produces a result.

### Failed

The system encounters an error.

### Abandoned

Optional and only if it can be measured meaningfully.

Useful derived metrics:

> Demo completion rate = completed / started

> Failure rate = failed / started

> Project engagement = demo starts / project views

These are much more informative than generic page duration.

---

# 8. Do Not Treat Every Failure as a Product Failure

A demo can fail because:

- Backend unavailable
- Model unavailable
- Browser/device limitation
- Network issue
- Invalid input
- Rate limit
- Intentional experiment behavior

Therefore:

```text
demo_failed
```

should optionally capture a **technical failure category**, not the visitor's personal information.

Example:

```text
backend_unavailable
model_unavailable
validation_error
timeout
rate_limited
unknown
```

This can reveal actual reliability problems.

---

# 9. Architecture Engagement

Architecture is a key credibility mechanism.

Track:

> `architecture_opened`

Optionally:

> `architecture_level_changed`

For example:

```text
overview
detailed
technical
```

This allows comparison between visitors who only see the visual layer and visitors who investigate the technical implementation.

Do not track every node hover unless a later design decision demonstrates that it provides useful information.

---

# 10. Benchmark Engagement

Track:

> `benchmark_opened`

Potential properties:

- project
- benchmark
- metric
- comparison type

Avoid tracking every graph interaction initially.

The first question is simply:

> **Are people interested in the evidence?**

---

# 11. Content Relationship Tracking

Because MAKATA.ai is designed as a technical knowledge graph, measure movement between related content.

Example:

```text
Xylo
 ↓
Local inference experiment
 ↓
Benchmark
 ↓
Field note
```

Track:

> `related_work_clicked`

This can reveal whether the site's interconnected technical structure is actually useful.

---

# 12. Professional Conversion

Important outbound actions:

### LinkedIn

> `linkedin_clicked`

### GitHub

> `github_clicked`

### Email

> `email_clicked`

### Contact form

> `contact_started`

> `contact_submitted`

These should be treated as **intent signals**, not guaranteed outcomes.

A click does not prove that someone wants to hire or collaborate.

---

# 13. Audience Signals

The site should not attempt to identify visitors personally.

Instead, infer **content-path patterns**.

Possible behavioral segments:

### Recruiter-like path

```text
Homepage
→ Work
→ Xylo
→ About
→ LinkedIn
```

### Engineering-leader path

```text
Homepage
→ Xylo
→ Architecture
→ Constraints
→ DCS
→ Connect
```

### Technical-peer path

```text
Homepage
→ Lab
→ Experiment
→ Benchmark
→ GitHub
```

### Product/customer path

```text
Homepage
→ Xylo
→ Demo
→ Product details
→ Connect
```

These are behavioral patterns, not claims about the person's identity.

---

# 14. Conversion Quality

Do not optimize purely for conversion quantity.

For example:

> 100 contact clicks

may be less useful than:

> 5 highly relevant technical inquiries.

Where possible, evaluate outcomes qualitatively.

Track manually or through a lightweight CRM/spreadsheet:

- Inquiry source
- Context
- Opportunity type
- Relevance
- Outcome

Do not automatically collect sensitive personal information merely for analytics.

---

# 15. Primary KPIs

Recommended high-level dashboard:

### Discovery

- Qualified landing sessions
- Search/referral sources
- Branded vs technical discovery

### Engagement

- Project engagement rate
- Demo start rate
- Demo completion rate
- Architecture engagement
- Experiment engagement

### Depth

- Related-work traversal
- GitHub clicks
- Multiple-project sessions

### Intent

- LinkedIn clicks
- Contact starts
- Contact submissions
- Relevant inquiries

---

# 16. Metrics That Should NOT Become KPIs

Avoid making these primary success metrics:

- Total page views
- Total sessions
- Average time on site
- Scroll depth
- Number of clicks
- Number of animations viewed
- Bounce rate alone
- Number of pages per session

They can provide context, but they don't establish whether the website is accomplishing its purpose.

---

# 17. Scroll Depth

Scroll tracking should be used sparingly.

If used, consider coarse milestones:

```text
25%
50%
75%
90%
```

Do not record every pixel of scrolling.

More importantly, don't interpret:

> “They scrolled to 90%”

as:

> “They were highly interested.”

They may simply have been looking for the footer.

---

# 18. Time on Page

Time can be misleading.

A visitor spending ten minutes on a page may be:

- Reading carefully
- Distracted
- Idle
- Doing something else

Therefore time should never be interpreted alone.

More meaningful signals are combinations such as:

> Long project visit + architecture interaction + benchmark interaction

or:

> Project visit + demo + GitHub

---

# 19. Privacy

Analytics should follow the same philosophy as the products showcased on MAKATA.ai:

> **Collect the minimum information necessary to improve the system.**

Avoid collecting:

- Document contents
- Demo inputs unless explicitly necessary
- Personal identifiers
- Precise location
- Sensitive attributes
- Keystrokes
- Arbitrary session recordings
- Excessive behavioral profiles

Especially for Xylo/Unawain demos, never accidentally send user document content to analytics.

---

# 20. Demo Data Boundary

Analytics must be separated from application data.

For example:

```text
Visitor
   ↓
Demo
   ↓
Document
   ↓
AI processing
```

must not automatically become:

```text
Document
   ↓
Analytics platform
```

Instead:

```text
Demo
   ├── application processing
   └── anonymous event
          ↓
       analytics
```

The analytics event should contain only the minimum metadata required.

---

# 21. Analytics Failure Mode

Analytics should never prevent the website or demo from working.

If analytics fails:

> The website still works.

Do not create a hard dependency where:

```text
analytics unavailable
→ page unavailable
```

Analytics is observational infrastructure.

It is not core product functionality.

---

# 22. Performance

Analytics scripts should be evaluated for:

- Bundle size
- Blocking behavior
- Third-party requests
- Privacy implications
- Runtime cost
- Impact on Core Web Vitals

If an analytics platform meaningfully harms the experience, reconsider whether the data is worth the cost.

---

# 23. Dashboard Structure

A simple dashboard should answer five questions.

## 1. Are people finding the site?

- Traffic sources
- Search
- Referrals

## 2. What work attracts attention?

- Project views
- Project engagement

## 3. What engineering evidence gets investigated?

- Demos
- Architecture
- Benchmarks
- Experiments

## 4. Are visitors going deeper?

- Related work
- GitHub
- Multiple projects

## 5. Is any of this producing opportunities?

- LinkedIn
- Contact
- Relevant inquiries

If the dashboard cannot answer these questions, it probably contains too much irrelevant data.

---

# 24. Experimentation / A-B Testing

Do not begin with large-scale A/B testing.

MAKATA.ai is likely to have insufficient traffic for statistically useful tests in the early stage.

Instead use:

> **Observation → change → observation**

Examples:

- Change hero wording
- Change featured project order
- Improve demo visibility
- Change CTA wording
- Make architecture more prominent

Then monitor meaningful engagement.

Formal experimentation can be introduced later if traffic volume justifies it.

---

# 25. Qualitative Feedback

Analytics should be complemented by direct feedback.

Potential mechanisms:

> “Was this useful?”

> “What would you like to inspect next?”

> “Report a demo problem”

> “Discuss this project”

These should be used selectively.

Do not add feedback widgets everywhere.

---

# 26. Conversion Attribution

Visitors may arrive through:

- LinkedIn
- Google
- GitHub
- Direct URL
- Referral
- Product Hunt
- Other communities

Preserve basic source attribution where technically and legally appropriate.

But avoid creating a complicated multi-touch attribution system.

The early question is simply:

> **Which discovery paths are producing meaningful technical or professional engagement?**

---

# 27. Recommended Initial Dashboard

A single dashboard can contain:

### Traffic

- Sessions
- Top landing pages
- Top sources

### Work

- Project views
- Project engagement

### Engineering

- Demo starts
- Demo completion
- Architecture opens
- Benchmark opens
- Experiment opens

### Professional

- LinkedIn clicks
- GitHub clicks
- Contact submissions

### Reliability

- Demo failures
- Demo timeouts
- Availability errors

This is sufficient for the first version.

---

# 28. Event Naming Convention

Use:

```text
object_action
```

Examples:

```text
demo_started
demo_completed
project_opened
architecture_opened
benchmark_opened
experiment_opened
linkedin_clicked
github_clicked
contact_submitted
```

Use lowercase snake_case consistently.

Avoid:

```text
DemoStart
demoStart
startDemo
userClickedDemoButton
```

---

# 29. Analytics Implementation Boundary

Recommended architecture:

```text
UI
 ↓
Analytics abstraction
 ↓
Analytics provider
```

Components should not be tightly coupled to a specific analytics vendor.

Instead:

```text
track("demo_started", {
  project: "xylo"
})
```

The underlying provider can change later.

This prevents a future analytics migration from requiring changes throughout the UI.

---

# 30. Measurement Review Cycle

Review analytics periodically rather than constantly.

Suggested cycle:

> **Monthly**

Ask:

1. What did people actually investigate?
2. Which project generated the most meaningful engagement?
3. Which demos failed?
4. Where did people stop?
5. Which paths led to professional interaction?
6. Did any assumptions about visitor behavior turn out to be wrong?
7. What should change?

Importantly:

> **Do not retrofit a coherent story onto noisy analytics.**

If the data is ambiguous, record it as ambiguous.

---

# 31. Anti-Coherence Analytics Rule

This is particularly important for MAKATA.ai.

Do not look at a handful of sessions and construct a story such as:

> “Visitors clearly want Edge AI content.”

Maybe.

But alternative explanations may include:

- The homepage made Edge AI more visible.
- Xylo happened to be featured.
- One visitor repeatedly explored it.
- Search traffic was highly specific.
- The sample size was tiny.
- The demo was easier to find.
- Another page was broken.

Analytics should generate hypotheses, not automatically prove them.

---

# 32. Measurement Acceptance Criteria

Before launch:

- [ ] Core events defined
- [ ] Event naming standardized
- [ ] Demo lifecycle tracked
- [ ] Architecture interaction tracked
- [ ] Benchmark/experiment engagement tracked
- [ ] GitHub/LinkedIn/contact actions tracked
- [ ] Analytics abstraction implemented
- [ ] No sensitive demo content enters analytics
- [ ] Analytics does not block application behavior
- [ ] Privacy configuration reviewed
- [ ] Basic dashboard available
- [ ] Demo failures observable

---

# 33. P0 / P1 / P2

## P0

- Page views
- Traffic source
- Project views
- Demo started/completed/failed
- Architecture opened
- GitHub clicked
- LinkedIn clicked
- Contact submitted

## P1

- Benchmark engagement
- Experiment engagement
- Related-work traversal
- Failure categories
- Audience-path analysis
- Basic funnel reporting

## P2

- Controlled experiments
- Advanced attribution
- Automated qualitative classification
- Personalized content
- Sophisticated recommendation analytics

---

# 34. Final Measurement Principle

The goal of analytics is not:

> **“Know everything visitors do.”**

It is:

> **“Know enough to make better decisions about the site.”**

For MAKATA.ai, the most important signal is the transition:

**Visitor → Technical curiosity → Evidence → Deeper investigation → Professional interaction**

A visitor who runs a demo, opens the architecture, reads an experiment, and then visits LinkedIn has provided substantially more useful information than ten anonymous page views.

The analytics system should be designed around that distinction.

---

## Final rule

> **Measure behavior that changes decisions. Ignore behavior that merely fills dashboards.**

If an event will never cause a design, content, engineering, or business decision to change, it probably does not need to exist.
