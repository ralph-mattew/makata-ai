# MAKATA.ai — Testing, QA & Release Validation Specification

**Artifact 20**

## 1. Purpose

This specification defines how the redesigned MAKATA.ai will be tested before, during, and after implementation.

The goal is not simply to verify that:

> “the website works.”

The goal is to establish that the site is:

- functionally correct
- visually coherent without forcing artificial coherence
- responsive
- accessible
- performant
- secure
- technically accurate
- content-complete
- SEO-ready
- resilient when demonstrations fail
- deployable and reversible

The testing strategy must also protect against a common redesign failure:

> **The new site looks better but becomes less useful.**

---

# 2. Testing Philosophy

MAKATA.ai has several different kinds of correctness.

A page can be:

- visually correct but technically wrong
- technically correct but confusing
- accessible but slow
- fast but missing evidence
- beautiful but impossible to navigate
- functional but misleading about how an AI system actually works

Therefore QA must test multiple dimensions independently.

```text
Functional correctness
        +
Content correctness
        +
Technical correctness
        +
Visual correctness
        +
Accessibility
        +
Performance
        +
Security
        +
Deployment reliability
```

Passing one dimension does not imply passing the others.

---

# 3. Quality Model

Every major page and interaction should be evaluated against:

| Dimension     | Question                                    |
| ------------- | ------------------------------------------- |
| Identity      | Is this clearly MAKATA.ai?                  |
| Content       | Is the information accurate and complete?   |
| Navigation    | Can the visitor find the next useful thing? |
| Interaction   | Does the interface behave correctly?        |
| Evidence      | Are claims supported appropriately?         |
| Accessibility | Can different users operate it?             |
| Performance   | Does it remain responsive?                  |
| Security      | Are secrets and user data protected?        |
| Resilience    | What happens when dependencies fail?        |
| SEO           | Can the page be discovered and understood?  |

---

# 4. Testing Layers

Use multiple testing layers rather than relying on one giant end-to-end test.

```text
Level 1 — Static checks
Level 2 — Unit/component tests
Level 3 — Integration tests
Level 4 — Accessibility tests
Level 5 — Visual regression
Level 6 — End-to-end tests
Level 7 — Real-device testing
Level 8 — Performance testing
Level 9 — Security testing
Level 10 — Production validation
```

Not every feature requires every level.

Testing effort should correspond to risk.

---

# 5. Risk-Based Testing

Prioritize testing around surfaces where failure would materially damage the site.

## High risk

- navigation
- homepage
- project pages
- live demos
- contact flow
- responsive layout
- deployment
- AI/API boundary
- client/server secret handling

## Medium risk

- architecture explorer
- benchmark visualization
- experiment filtering
- search
- related work

## Lower risk

- decorative animation
- minor visual effects
- noncritical metadata

Do not spend two hours testing a decorative animation while the demo API has no failure test.

---

# 6. Test Environments

Maintain:

```text
Development
↓
Preview
↓
Production
```

Testing should occur progressively.

### Development

Fast feedback.

### Preview

Realistic deployment environment.

### Production

Final smoke tests and monitoring.

---

# 7. Production Baseline

Before redesign work begins, record the existing site's baseline.

Capture:

- current routes
- current screenshots
- current functionality
- current build behavior
- current performance
- current SEO metadata
- current forms
- current demo behavior
- current analytics
- current deployment process

This establishes:

> **What did we actually change?**

Without a baseline, redesign discussions become subjective.

---

# 8. Route Validation

Create an authoritative route inventory.

Expected core routes:

```text
/
/work
/work/xylo
/work/unawain
/work/dcs
/lab
/lab/experiments
/lab/benchmarks
/lab/[experiment]
/notes
/notes/[slug]
/about
/connect
```

The actual implementation may differ after codebase inspection.

Every production route must be classified:

- active
- intentionally removed
- redirected
- replaced
- deprecated

No accidental orphan routes.

---

# 9. Broken-Link Testing

Test:

- internal links
- external links
- project links
- GitHub links
- LinkedIn links
- App Store links
- demo endpoints
- image references
- downloads

A page should not contain a link that silently leads to:

- 404
- wrong project
- outdated URL
- localhost
- preview deployment
- private repository

---

# 10. Navigation Tests

Verify:

### Desktop

- logo → homepage
- Work → Work
- Lab → Lab
- Notes → Notes
- About → About
- Connect → Connect

### Mobile

- menu opens
- menu closes
- correct focus behavior
- correct route navigation
- current page indication
- Escape behavior where appropriate

### Deep pages

Visitors should be able to return to broader context.

Example:

```text
Xylo
↓
Work
↓
Homepage
```

---

# 11. Homepage Test

The homepage must pass four comprehension tests.

## 5-second test

Can a visitor determine what MAKATA.ai is?

Expected understanding:

> AI / Edge AI engineering laboratory.

## 30-second test

Can the visitor identify what is being built?

At minimum, representative work should be discoverable.

## 60-second test

Can the visitor understand:

- what Ralph works on
- what systems exist
- where to explore them

## 5-minute test

Can a technically interested visitor discover:

- demonstrations
- architecture
- experiments
- constraints
- evidence
- failures
- lessons

---

# 12. Project Page Functional Test

Every project page should support:

```text
Open project
↓
Understand purpose
↓
Try demo
↓
Observe result
↓
Understand architecture
↓
Inspect evidence
↓
Understand constraints
↓
Explore related work
```

Test each transition.

If a visitor can reach a dead end, document it as a defect or intentional stopping point.

---

# 13. Project Content Validation

For each project verify:

- title
- description
- status
- technologies
- capabilities
- problem
- architecture
- evidence
- constraints
- limitations
- failures
- lessons
- related work
- links

Claims should be verified against the actual system.

Especially verify:

- supported devices
- supported models
- local vs cloud processing
- current feature availability
- performance numbers
- product status
- privacy claims

---

# 14. Epistemic Validation

Technical statements must retain their evidence level.

Review each significant claim:

```text
MEASURED
OBSERVED
INFERRED
HYPOTHESIS
```

Example:

### Measured

> 3.8 seconds under specified test conditions.

### Observed

> Consecutive inference appeared to slow after extended use.

### Inferred

> Thermal behavior may contribute to the slowdown.

### Hypothesis

> A different model/runtime configuration may reduce the effect.

Do not rewrite an observation into a measurement.

---

# 15. Anti-Coherence QA

The redesign must not accidentally manufacture a cleaner story than the engineering actually supports.

Review project pages for:

- contradictions
- failed experiments
- changed assumptions
- abandoned approaches
- uncertainty
- unresolved questions

A polished page is not automatically a truthful page.

QA should ask:

> **Did the redesign remove useful messiness in the name of storytelling?**

If yes, restore the relevant uncertainty.

---

# 16. Demo Testing

Every interactive demo must be tested through all meaningful states.

Minimum:

```text
READY
↓
PROCESSING
↓
RESULT
```

And:

```text
READY
↓
ERROR
```

Also test:

```text
READY
↓
TIMEOUT
```

and, where relevant:

```text
READY
↓
RATE LIMITED
```

---

# 17. Demo Input Testing

Test:

### Valid input

- normal document
- small document
- representative sample

### Boundary input

- empty input
- very short input
- maximum supported size
- unusual formatting

### Invalid input

- unsupported format
- malformed data
- unexpected content

### Adversarial input

Where applicable:

- prompt injection
- malicious content
- oversized payload
- unexpected encoding

The system should fail safely.

---

# 18. Demo Output Testing

Verify:

- output is rendered correctly
- formatting is preserved where required
- long output does not break layout
- special characters render correctly
- errors do not expose internals
- output does not accidentally contain sensitive system information

If the demo is supposed to return structured data, validate the schema.

---

# 19. Demo Failure Testing

Intentionally simulate:

- API unavailable
- AI provider unavailable
- network timeout
- malformed response
- rate limit
- invalid response
- server error

Expected behavior:

```text
Useful explanation
+
Recovery path
+
Alternative evidence
```

Never:

```text
Blank page
```

or:

```text
Raw stack trace
```

---

# 20. Demo Cost Testing

For every live AI demo determine:

- expected requests
- approximate computation cost
- maximum input
- maximum output
- rate limit
- timeout
- concurrency behavior

Test what happens under repeated requests.

A demo that works once but can accidentally generate uncontrolled API costs is not production-ready.

---

# 21. Architecture Visualization Tests

Verify:

- nodes are correct
- edges are correct
- labels are correct
- system boundaries are correct
- processing locations are correct
- model names are correct
- data flow is correct

Do not allow the visual architecture to become a prettier but less accurate version of the actual system.

---

# 22. Architecture Accessibility Test

For every architecture visualization:

- keyboard accessibility where interactive
- accessible labels
- readable text
- textual explanation
- screen-reader-compatible representation
- no critical information communicated only through color

Test whether someone who cannot see the diagram can still understand the system.

---

# 23. Benchmark Testing

For each benchmark verify:

- metric
- unit
- value
- device
- model
- version
- conditions
- methodology
- date
- baseline where relevant
- interpretation

Check that values displayed on the website match the underlying source.

Do not manually duplicate numbers in several locations if a single structured source can drive them.

---

# 24. Benchmark Interpretation Test

Ask:

> Does the UI accidentally imply a stronger conclusion than the evidence supports?

For example, a visualization should not transform:

> “Device A completed this test faster under these conditions.”

into:

> “Device A is better.”

The former is evidence.

The latter is an evaluation that may require additional dimensions.

---

# 25. Experiment Testing

Every experiment page should expose:

```text
Question
Hypothesis
Method
Variables
Observation
Result
Limitation
Next Question
```

Verify that the implementation does not accidentally replace this structure with a generic blog post.

---

# 26. Related Work Testing

Related work must be relevant.

Test whether each relationship can answer:

> Why is this related?

Valid reasons may include:

- shared technology
- shared constraint
- shared problem
- shared concept
- evolved from
- inspired by
- contradicts
- validates
- invalidates

Avoid arbitrary recommendations based only on recency.

---

# 27. Responsive Testing

Every major page should be tested at representative widths.

At minimum:

```text
Small phone
Large phone
Tablet
Small laptop
Desktop
Wide desktop
```

Check:

- navigation
- typography
- cards
- images
- tables
- code
- architecture
- demos
- forms
- buttons
- spacing

---

# 28. Responsive Failure Conditions

Flag:

- horizontal overflow
- clipped content
- overlapping elements
- unreadable text
- inaccessible controls
- broken cards
- broken architecture diagrams
- unusable tables
- giant empty areas
- excessive scrolling caused by poor composition

---

# 29. Visual Regression Testing

Capture baseline screenshots for critical pages.

Recommended:

- homepage
- Work
- Xylo
- Unawain
- DCS
- Lab
- experiment
- About
- Connect

Compare after significant changes.

Visual regression should detect unintended changes.

It should not prevent intentional redesign changes.

---

# 30. Visual Review Process

Automated comparison identifies differences.

Human review determines whether differences are correct.

Therefore:

```text
Screenshot diff
≠
Visual QA decision
```

A large difference may be intentional.

A tiny difference can still be a serious usability problem.

---

# 31. Accessibility Testing

Run automated accessibility checks.

Then manually test:

- keyboard-only navigation
- focus visibility
- screen reader navigation
- forms
- menus
- dialogs
- dynamic demo states
- architecture
- benchmarks
- reduced motion
- text scaling

---

# 32. Keyboard Test

A keyboard-only visitor should be able to:

1. enter the page
2. navigate the header
3. open projects
4. operate demos where applicable
5. inspect technical content
6. open links
7. use forms
8. return to previous context

No essential functionality should require a mouse.

---

# 33. Screen Reader Test

Test meaningful paths through at least one representative screen reader environment.

Verify:

- page title
- headings
- landmarks
- link names
- button names
- form labels
- status changes
- error messages
- architecture alternatives
- benchmark information

The goal is not to make every visual component identical for screen readers.

The goal is to preserve its **meaning**.

---

# 34. Performance Regression Testing

For critical pages capture:

- LCP
- INP
- CLS
- TTFB
- transfer size
- JavaScript size
- image size

Compare against the established baseline.

Do not treat every small variance as a defect.

Investigate meaningful regressions.

---

# 35. Performance Test Conditions

Record:

- browser
- device
- network
- test date
- build/version
- route

Without test conditions, a performance number is difficult to interpret.

---

# 36. Real Device Test

At minimum, perform a final validation on:

- one representative iPhone
- one representative Android device
- one desktop/laptop

If actual analytics later show a materially different device distribution, update the test matrix.

---

# 37. AI Performance Test

For AI demonstrations record separately:

```text
Page load
Demo initialization
Request latency
AI processing
Response latency
Rendering
```

Do not label all of this:

> “website latency.”

The distinction matters.

---

# 38. SEO Validation

For every indexable page verify:

- title
- meta description
- canonical URL
- heading hierarchy
- crawlable content
- OpenGraph metadata
- appropriate structured data
- internal links
- valid URL
- no accidental `noindex`

Also test:

- sitemap
- robots configuration
- redirects
- canonical consistency

---

# 39. Structured Data Validation

Structured data must represent actual page content.

Do not add schema merely because it might improve search visibility.

Examples:

- Person
- WebSite
- Article
- appropriate project/product information where justified

Incorrect structured data is worse than no structured data.

---

# 40. Metadata Testing

Check that social previews work.

For representative pages verify:

- title
- description
- preview image
- canonical URL

Especially test links shared through:

- LinkedIn
- messaging applications
- social platforms

---

# 41. Security Testing

Verify:

- no API keys in client bundle
- no secret environment variables exposed
- no sensitive data in logs
- secure API boundaries
- appropriate CORS behavior
- input validation
- output sanitization
- rate limiting
- safe error responses
- security headers where appropriate

Inspect the production bundle where necessary.

Do not assume environment variables are secret merely because they are called “environment variables.”

---

# 42. Dependency Security

Before release:

- inspect dependency vulnerabilities
- remove unused packages
- verify package sources
- review new dependencies
- confirm lockfile consistency

A dependency added for a minor visual feature should receive proportionate scrutiny.

---

# 43. Privacy Testing

Verify that analytics do not capture:

- document contents
- AI prompts
- AI outputs
- personal identifiers unnecessarily
- sensitive user input

Test demo requests and browser storage.

Check:

- cookies
- local storage
- session storage
- third-party scripts
- logs

---

# 44. Contact Form Testing

If a contact form exists, test:

### Valid

- normal submission
- correct success state

### Invalid

- missing required field
- invalid email
- oversized input
- unexpected input

### Failure

- backend unavailable
- timeout
- duplicate submission

Verify that the user receives a clear result.

---

# 45. Spam Protection

If a public contact form exists, test:

- bot submissions
- repeated submissions
- malformed input
- rate limiting

Do not introduce intrusive CAPTCHA unless the threat level justifies it.

---

# 46. Content QA

Before launch, perform a dedicated editorial pass.

Check:

- spelling
- grammar
- terminology
- capitalization
- model names
- device names
- technology names
- links
- dates
- project status
- screenshots
- benchmark values

Technical accuracy is more important than stylistic perfection.

---

# 47. Content Drift Detection

The website may eventually contain duplicated information.

For example:

> Xylo description on homepage

and:

> Xylo description on project page

and:

> Xylo description in Lab

If these are independently maintained, they can drift.

Prefer structured content where appropriate so that shared facts have one authoritative source.

---

# 48. Content Freshness

Projects should have explicit status.

Examples:

```text
PROTOTYPE
EXPERIMENTAL
ACTIVE
BETA
RELEASED
ARCHIVED
```

Avoid allowing old experiments to appear indistinguishable from active systems.

---

# 49. Deployment Test

Before production:

```text
Git commit
↓
CI checks
↓
Build
↓
Preview
↓
QA
↓
Approval
↓
Production
```

Production should not be the first place where the complete site is assembled.

---

# 50. Preview Validation

The preview environment should verify:

- routes
- assets
- APIs
- demos
- forms
- environment variables
- redirects
- metadata

Be especially careful with absolute URLs.

A common failure is:

> Preview deployment accidentally points canonical URLs, APIs, or social metadata to the wrong environment.

---

# 51. Production Smoke Test

Immediately after deployment test:

1. homepage
2. navigation
3. Work
4. Xylo
5. Unawain
6. DCS
7. Lab
8. one experiment
9. About
10. Connect
11. demo
12. external links

This should be fast enough to perform after every production deployment.

---

# 52. Rollback Test

A deployment process is incomplete until rollback is understood.

Document:

- current production version
- previous known-good version
- rollback mechanism
- environment variable considerations
- database/state considerations if any

Prefer deployments that can be reversed quickly.

---

# 53. Release Candidate Checklist

Before release:

### Functional

- [ ] routes work
- [ ] navigation works
- [ ] demos work
- [ ] forms work
- [ ] external links work
- [ ] errors are handled

### Content

- [ ] claims verified
- [ ] project information current
- [ ] benchmarks verified
- [ ] status verified
- [ ] uncertainty preserved

### Visual

- [ ] desktop reviewed
- [ ] mobile reviewed
- [ ] tablet reviewed
- [ ] visual regression reviewed

### Accessibility

- [ ] keyboard
- [ ] focus
- [ ] screen reader
- [ ] contrast
- [ ] reduced motion
- [ ] forms
- [ ] dynamic status

### Performance

- [ ] Core Web Vitals measured
- [ ] bundle reviewed
- [ ] images optimized
- [ ] real-device test complete
- [ ] demos tested separately

### Security

- [ ] secrets checked
- [ ] dependencies reviewed
- [ ] API boundary tested
- [ ] rate limiting checked
- [ ] logs reviewed

### SEO

- [ ] titles
- [ ] descriptions
- [ ] canonical
- [ ] sitemap
- [ ] robots
- [ ] structured data
- [ ] social metadata

### Deployment

- [ ] preview approved
- [ ] production deployment verified
- [ ] rollback understood
- [ ] monitoring active

---

# 54. Definition of Done — Individual Component

A component is not complete merely because it renders.

It should satisfy:

```text
Implementation
+
Visual behavior
+
Responsive behavior
+
Keyboard behavior
+
Accessibility
+
Loading/error states
+
Content integration
+
Testing
```

For simple static components, some states may not apply.

---

# 55. Definition of Done — Project Page

A project page is complete when:

- [ ] identity is clear
- [ ] content is accurate
- [ ] demo works or has a documented fallback
- [ ] architecture is accurate
- [ ] evidence is contextualized
- [ ] constraints are represented
- [ ] failures/limitations are represented where relevant
- [ ] related work works
- [ ] mobile works
- [ ] accessibility is acceptable
- [ ] performance is acceptable
- [ ] SEO metadata exists
- [ ] external links work

---

# 56. Definition of Done — Demo

A demo is complete when:

- [ ] clear purpose
- [ ] sample input
- [ ] ready state
- [ ] processing state
- [ ] result state
- [ ] error state
- [ ] timeout handling where relevant
- [ ] validation
- [ ] rate limiting
- [ ] cost boundary
- [ ] privacy boundary
- [ ] technical metadata
- [ ] mobile interaction
- [ ] accessibility
- [ ] fallback where appropriate
- [ ] monitoring

---

# 57. Test Automation Priorities

Automate repetitive high-value checks.

## P0

- build
- typecheck
- lint
- route availability
- broken links
- critical E2E paths
- accessibility basics

## P1

- visual regression
- performance checks
- demo integration
- metadata validation
- structured data validation

## P2

- advanced interaction testing
- browser matrix expansion
- automated benchmark validation
- deeper accessibility automation

---

# 58. Critical End-to-End Journeys

Automate a small number of high-value journeys.

### Journey A — Discover work

```text
Homepage
→ Work
→ Xylo
```

### Journey B — Try system

```text
Homepage
→ Xylo
→ Demo
→ Sample
→ Result
```

### Journey C — Inspect engineering

```text
Xylo
→ Architecture
→ Evidence
→ Constraints
```

### Journey D — Explore laboratory

```text
Homepage
→ Lab
→ Experiment
→ Related work
```

### Journey E — Professional contact

```text
Homepage
→ About
→ Connect
```

These represent actual visitor outcomes rather than arbitrary click sequences.

---

# 59. Regression Strategy

After each major implementation phase:

```text
Change
↓
Local validation
↓
Automated tests
↓
Preview
↓
Critical journey test
↓
Responsive review
↓
Accessibility review
↓
Performance review
```

Do not postpone all QA until the end.

---

# 60. Migration Regression

During migration, old functionality must be classified.

For every existing feature:

```text
KEEP
REFACTOR
REPLACE
MERGE
DELETE
UNKNOWN
```

Unknown should remain visible until resolved.

Do not silently lose functionality because nobody remembered it existed.

---

# 61. Test Evidence

For significant defects and fixes, preserve lightweight evidence:

- screenshot
- test result
- browser/device
- reproduction steps
- commit/version
- expected behavior
- actual behavior

This creates a useful engineering history.

---

# 62. Defect Classification

### P0 — Blocking

Examples:

- production unavailable
- security vulnerability
- broken primary navigation
- major data leakage
- demo causes uncontrolled cost
- critical pages inaccessible

### P1 — Serious

Examples:

- major mobile defect
- broken project demo
- inaccessible primary interaction
- significant performance regression
- important SEO failure

### P2 — Moderate

Examples:

- visual inconsistency
- minor interaction issue
- secondary broken link

### P3 — Cosmetic

Examples:

- small spacing issue
- minor visual imperfection
- nonessential animation issue

---

# 63. Bug Report Template

Use:

```text
Title:

Severity:

Environment:

Route:

Device:

Browser:

Build/version:

Expected:

Actual:

Steps to reproduce:

Evidence:

Possible cause:

Status:
```

Do not write:

> “Mobile looks weird.”

Write:

> “Xylo demo result overflows the viewport at 390px width in Safari.”

Specificity accelerates fixing.

---

# 64. Release Decision Model

The release decision should consider:

```text
Severity
+
Frequency
+
Affected audience
+
Security
+
Recoverability
+
Workaround
```

A P3 visual imperfection does not necessarily justify delaying launch.

A security issue may.

Do not reduce all defects to one arbitrary score.

---

# 65. Uncertainty in QA

Testing produces evidence, not certainty.

Passing tests does not prove:

- absence of all bugs
- accessibility for every user
- performance on every device
- security against every attack
- correctness under every AI input
- universal usability

The correct statement is:

> **The tested conditions passed.**

Not:

> **The system is guaranteed to work everywhere.**

---

# 66. Post-Launch Validation

Testing does not end at deployment.

Monitor:

- errors
- broken routes
- demo failures
- performance
- user-reported issues
- contact failures
- API failures
- unexpected traffic patterns

Review actual behavior against assumptions.

---

# 67. First-Week Production Review

After launch, review:

### Technical

- production errors
- demo reliability
- performance
- broken links

### Behavioral

- which projects receive meaningful engagement
- which demos are actually used
- which technical surfaces are explored
- whether visitors reach professional/contact paths

### Content

- confusing sections
- missing information
- inaccurate assumptions

Do not immediately redesign based on one anomalous day.

---

# 68. Monthly QA Review

Once the redesign stabilizes, perform a lightweight monthly review:

- broken links
- dependency updates
- security
- performance
- demo reliability
- content freshness
- project status
- external links
- analytics anomalies

The purpose is maintenance, not perpetual redesign.

---

# 69. Anti-Overtesting Rule

Do not build a massive QA framework before the site has enough complexity to justify it.

Start with:

```text
Build checks
+
Critical E2E journeys
+
Accessibility
+
Responsive testing
+
Performance
+
Production smoke test
```

Expand automation when repetitive failures justify it.

---

# 70. Anti-Overfitting Rule

Do not optimize the entire site around:

- one device
- one browser
- one Lighthouse run
- one user
- one project
- one benchmark
- one demo
- one traffic source

A test is evidence about a condition.

It is not automatically a universal truth.

---

# 71. Final Release Gate

MAKATA.ai should ship only when the following statement is defensible:

> **The redesigned site accurately represents the engineering work, works across its intended environments, exposes important technical evidence, handles failure gracefully, remains usable on mobile, meets its accessibility objectives, protects its boundaries, and can be deployed and rolled back safely.**

Not:

> “Everything is perfect.”

---

# 72. Final Principle

QA should protect the integrity of MAKATA.ai.

The purpose of testing is not to make the site sterile or eliminate every imperfection.

It is to ensure that:

**the interface does not lie,**

**the demos do not pretend,**

**the metrics retain their context,**

**the architecture reflects reality,**

**the failures are survivable,**

**the content remains discoverable,**

and

**the website gets out of the way of the engineering.**

The strongest QA question is therefore not:

> “Does this look finished?”

It is:

> **“Can a technically curious visitor trust what this site is showing them?”**
