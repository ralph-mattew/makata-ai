# MAKATA.ai — Deployment, Infrastructure & DevOps Specification

**Document Type:** Infrastructure / Deployment / DevOps
**Status:** Design artifact
**Purpose:** Define how MAKATA.ai should be developed, deployed, operated, monitored, and recovered with minimal ongoing maintenance.

---

# 1. Infrastructure Philosophy

The infrastructure should follow one principle:

> **The website should be boring so the engineering it showcases can be interesting.**

MAKATA.ai does not need a complicated infrastructure platform simply because it demonstrates advanced AI.

The preferred architecture is:

**Static-first → serverless where useful → dedicated backend only where necessary.**

---

# 2. Operational Goals

The production system should be:

- Low maintenance
- Cheap to operate
- Fast
- Secure
- Easy to deploy
- Easy to roll back
- Observable
- Easy to understand six months later
- Independent of unnecessary infrastructure

Avoid introducing infrastructure merely to demonstrate technical sophistication.

---

# 3. Environment Model

Use three conceptual environments:

```text
DEVELOPMENT
    ↓
PREVIEW
    ↓
PRODUCTION
```

## Development

Local machine.

Purpose:

- Coding
- Component development
- Content editing
- Demo development
- Automated tests

---

## Preview

Temporary deployment generated from a branch or pull request.

Purpose:

- Visual review
- Functional testing
- Stakeholder review
- Mobile testing
- Demo testing

Preview should use:

- Separate credentials where possible
- Reduced AI limits
- Test data
- No production databases

---

## Production

The public MAKATA.ai site.

Purpose:

- Real visitors
- Public demos
- Public content
- Production analytics

Production credentials should never be casually reused elsewhere.

---

# 4. Recommended High-Level Architecture

```text
                         INTERNET
                             │
                             ▼
                    ┌────────────────┐
                    │ CDN / HOSTING  │
                    └───────┬────────┘
                            │
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
       Static Website                Demo/API Layer
              │                           │
              │                           ▼
              │                    AI / Application
              │                           │
              │                           ▼
              │                    External Models
              │
              ▼
       Analytics / Monitoring
```

The website should remain operational even if the AI demo backend is unavailable.

---

# 5. Static-First Principle

Pages such as:

- Home
- Work
- About
- Notes
- Project descriptions
- Experiments
- Benchmarks

should preferably be statically generated or server-rendered.

This provides:

- Fast loading
- Lower infrastructure cost
- Better reliability
- Better SEO
- Smaller attack surface

Dynamic functionality should be introduced only where it provides meaningful value.

---

# 6. AI Demo Architecture

For remote AI:

```text
Browser
   ↓
Demo API
   ↓
Validation
   ↓
Rate limiting
   ↓
AI service
   ↓
Structured response
   ↓
Browser
```

The browser should never directly control the model provider.

For on-device demonstrations:

```text
Browser/App
   ↓
Local processing
   ↓
Result
```

where technically applicable.

---

# 7. Demo Isolation

Each live demo should ideally be treated as an independent subsystem.

Example:

```text
MAKATA.ai
│
├── Xylo demo
├── Unawain demo
├── DCS demo
└── Future demos
```

A failure in one demo should not take down the entire website.

Preferred behavior:

> **Xylo unavailable**

while:

> MAKATA.ai remains fully accessible.

---

# 8. Demo Availability States

Every demo should support:

```text
READY
PROCESSING
RESULT
ERROR
TIMEOUT
UNAVAILABLE
```

If infrastructure is intentionally disabled, show:

> This experiment is currently offline.

Then provide:

- Recorded result
- Architecture
- Benchmark
- Technical explanation

The visitor should still receive value.

---

# 9. Infrastructure Failure Strategy

MAKATA.ai should degrade gracefully.

### Website failure

Critical.

### Demo failure

Important but isolated.

### Analytics failure

Non-critical.

### External AI provider failure

Demo-level degradation.

### Experimental feature failure

Acceptable if clearly labeled.

This hierarchy prevents optional features from becoming infrastructure dependencies.

---

# 10. Deployment Pipeline

Recommended:

```text
Git commit
    ↓
Automated checks
    ↓
Build
    ↓
Preview
    ↓
Review
    ↓
Production deployment
```

Production deployment should not require manual copying of files.

---

# 11. Continuous Integration

At minimum, CI should validate:

### Build

```text
npm run build
```

or the equivalent for the actual stack.

### Lint

Catch:

- Syntax errors
- Common mistakes
- Formatting problems

### Type checking

Where TypeScript or another typed system is used.

### Tests

Run critical automated tests.

### Optional

- Accessibility checks
- Link checking
- SEO metadata validation
- Bundle-size checks

---

# 12. Pull Request / Commit Strategy

Prefer small, reversible changes.

Example:

```text
feat: add ProjectHero
feat: redesign Xylo project page
feat: add architecture panel
feat: add benchmark section
fix: mobile project layout
content: update Xylo technical details
```

Avoid:

```text
redesign everything
```

as one massive commit.

Small commits make rollback and diagnosis easier.

---

# 13. Branch Strategy

Keep it simple.

Possible model:

```text
main
  ↓
production

feature/*
  ↓
preview
```

Avoid elaborate Git workflows unless team size requires them.

For a primarily solo-maintained site, simplicity is valuable.

---

# 14. Production Releases

Every production deployment should have:

- Commit identifier
- Build timestamp
- Deployment status
- Rollback capability

Where practical, the site can expose a non-sensitive build identifier internally for debugging.

Do not expose infrastructure secrets or internal deployment details.

---

# 15. Rollback

A failed deployment should be reversible.

Minimum rollback mechanism:

> Previous production deployment → redeploy

Preferred:

> One-click platform rollback

If the hosting provider supports atomic deployments, use that capability.

Before major migrations:

> Capture the current production version.

---

# 16. Domain Strategy

The final canonical domain should be established before launch.

Potential structure:

```text
makata.ai
www.makata.ai
```

or:

```text
home.makata.ai
```

The important requirement is consistency.

Choose:

> **One canonical public URL**

Then configure:

- Redirects
- Canonical tags
- Sitemap
- OpenGraph URLs
- Analytics
- Search-engine properties

around that decision.

---

# 17. Subdomain Strategy

Use subdomains only when they represent a meaningful infrastructure boundary.

Possible examples:

```text
www.makata.ai
api.makata.ai
```

Avoid creating:

```text
lab.makata.ai
work.makata.ai
notes.makata.ai
projects.makata.ai
```

unless there is a real technical or product reason.

Path-based architecture is simpler:

```text
makata.ai/work
makata.ai/lab
makata.ai/notes
```

---

# 18. Environment Variables

Separate configuration from code.

Example categories:

```text
PUBLIC_SITE_URL
ANALYTICS_ID
AI_PROVIDER_KEY
DEMO_RATE_LIMIT
MODEL_ID
```

Only variables explicitly intended for the browser may be public.

Everything else must remain server-side.

---

# 19. Secrets

Secrets should exist only in:

- Local secret store/environment
- Hosting provider secret manager
- CI secret store

Never commit:

```text
.env
.env.production
credentials.json
private keys
API tokens
```

A `.env.example` may document required variable names without actual values.

---

# 20. Infrastructure as Code

For the first redesign, do not automatically introduce Terraform, Pulumi, Kubernetes, or another infrastructure framework.

Use infrastructure-as-code when:

- Infrastructure becomes complex
- Multiple environments require reproducibility
- Multiple services need coordinated deployment
- Manual configuration becomes error-prone

For a small portfolio site:

> Simple platform configuration is often enough.

---

# 21. Containerization

Docker should not be introduced automatically.

Use it if:

- The application requires environment consistency
- A backend service has complex dependencies
- Local/production parity matters
- Deployment platform requires it

Do not containerize a static site simply because:

> “Professional systems use Docker.”

The architecture should justify the tool.

---

# 22. Database

Default:

> **No database.**

Use file-based/static content unless there is a real requirement for persistent dynamic data.

Introduce a database only if MAKATA.ai needs:

- User accounts
- Persistent user state
- Dynamic submissions
- Stateful experiments
- Persistent demo history
- CMS-like editing
- Application-specific data

A database creates:

- Backups
- Security requirements
- Migrations
- Monitoring
- Failure modes

Do not create those problems without a reason.

---

# 23. Content Deployment

Recommended early workflow:

```text
content/
   projects/
   experiments/
   benchmarks/
   notes/
   ideas/
```

Content changes can go through the same Git deployment pipeline as code.

Advantages:

- Version history
- Easy rollback
- Reviewable changes
- No CMS infrastructure
- Reproducible builds

---

# 24. CMS Decision

A CMS becomes justified when:

- Publishing frequency increases significantly
- Non-technical contributors need editing access
- Content workflows become complex
- Draft/review/publishing becomes difficult in Git

Until then:

> **Git-based content is probably sufficient.**

The decision should be revisited rather than assumed permanent.

---

# 25. Monitoring

Monitor only things that require action.

## Website

- Availability
- HTTP errors
- Build failures
- Performance

## Demo

- Request volume
- Latency
- Errors
- Timeouts
- AI provider failures
- Cost

## Infrastructure

- CPU/memory where applicable
- Storage
- Network
- Deployment health

---

# 26. Alerting

Avoid alert fatigue.

Alerts should be reserved for events such as:

> Site unavailable

> Demo error rate suddenly spikes

> AI cost exceeds threshold

> Production deployment fails

> Certificate/domain issue

Do not alert for every warning.

If every alert requires investigation, eventually none will be taken seriously.

---

# 27. Cost Monitoring

Each live AI demo should have a known approximate cost profile.

Track:

```text
Requests
×
Average inference cost
=
Estimated demo cost
```

Set a hard budget ceiling where supported.

If the budget is exceeded:

> Disable live inference and serve recorded evidence.

This protects the portfolio from becoming an accidental public AI workload.

---

# 28. Backup Strategy

Back up the things that cannot easily be recreated.

At minimum:

- Git repository
- Content
- Important configuration
- Domain information
- Critical demo assets

For static content stored in Git, the repository itself may already provide substantial recovery capability.

Do not build elaborate backup systems for disposable build artifacts.

---

# 29. Disaster Recovery

Define a simple recovery sequence:

```text
Domain
 ↓
Hosting
 ↓
Repository
 ↓
Environment variables
 ↓
AI services
 ↓
Analytics
```

The objective should be:

> **Reconstruct the public site from source control and documented configuration.**

Avoid infrastructure that exists only in someone's memory—including your own six months from now.

---

# 30. Documentation

The repository should contain a concise:

```text
README
```

covering:

- What MAKATA.ai is
- Stack
- Local setup
- Environment variables
- Build command
- Test command
- Deployment
- Content structure
- Demo architecture
- Known limitations

Also maintain:

```text
/docs
```

for deeper technical decisions where necessary.

---

# 31. Architecture Decision Records

For significant decisions, record:

```text
Decision
Context
Alternatives
Evidence
Chosen approach
Trade-offs
Confidence
Revisit condition
```

Examples:

> Why static content instead of CMS?

> Why hybrid demo instead of live inference?

> Why this hosting architecture?

> Why this model?

This prevents future redesigns from rediscovering the same questions.

---

# 32. Dependency Updates

Do not blindly update everything.

Use a controlled cycle:

```text
Review
 ↓
Classify
 ↓
Update
 ↓
Test
 ↓
Deploy
```

For critical dependencies:

- Monitor security advisories
- Update deliberately
- Test production behavior

---

# 33. Preview Environment Requirements

Before merging a major redesign, preview should be tested on:

- Desktop
- Tablet
- iPhone
- Android
- Slow connection
- Demo unavailable
- Demo failure
- Empty states
- Long content
- Short content

The preview environment should represent production behavior closely enough to catch major problems.

---

# 34. Production Readiness Checklist

## Website

- [ ] Production build succeeds
- [ ] All routes work
- [ ] 404 page works
- [ ] HTTPS enabled
- [ ] Canonical domain configured
- [ ] Redirects configured
- [ ] Sitemap available
- [ ] Robots configuration verified

## Content

- [ ] No placeholder text
- [ ] No fake metrics
- [ ] No unverified technical claims
- [ ] Images optimized
- [ ] Metadata complete

## Demo

- [ ] Ready state works
- [ ] Processing state works
- [ ] Result state works
- [ ] Error state works
- [ ] Timeout state works
- [ ] Unavailable state works
- [ ] Rate limits active
- [ ] Cost controls active

## Security

- [ ] Secrets protected
- [ ] No credentials in bundle
- [ ] Input validation
- [ ] Error sanitization
- [ ] Dependency review
- [ ] Security headers reviewed

## Analytics

- [ ] Core events verified
- [ ] No sensitive input collected
- [ ] Analytics failure does not break site

---

# 35. Launch Strategy

Do not launch the entire redesigned MAKATA.ai at once if the codebase is uncertain.

Recommended sequence:

```text
Existing site
     ↓
Infrastructure audit
     ↓
Design system
     ↓
Homepage
     ↓
Xylo pilot
     ↓
Demo
     ↓
Architecture
     ↓
Evidence
     ↓
Remaining projects
     ↓
Lab
     ↓
Notes
```

This reduces the blast radius of mistakes.

---

# 36. Pilot Deployment

The first complete production-grade page should be the richest project page.

Likely:

> **Xylo**

provided the codebase audit confirms it has enough technical material.

The pilot should validate:

- Component architecture
- Content model
- Demo integration
- Responsive behavior
- SEO
- Analytics
- Security
- Deployment
- Performance

If the architecture works for the hardest page, simpler pages should become easier.

---

# 37. Operational Burden Test

Before adding any infrastructure component, ask:

> **Will this save more time than it costs to maintain?**

For every new service:

| Question                     | Requirement                  |
| ---------------------------- | ---------------------------- |
| Why does it exist?           | Specific reason              |
| What does it solve?          | Concrete problem             |
| What does it add?            | Dependency/cost/complexity   |
| Can we avoid it?             | Evaluate simpler alternative |
| Who maintains it?            | Ralph initially              |
| What happens when it breaks? | Defined fallback             |

If the answer is unclear:

> Don't add it yet.

---

# 38. Infrastructure Anti-Patterns

Avoid:

- Kubernetes for a portfolio site
- Microservices without independent scaling needs
- A database for static content
- CMS infrastructure before publishing volume requires it
- Self-hosted observability stacks without a reason
- Multiple hosting providers without a requirement
- Complex CI/CD pipelines
- Custom authentication for public demos
- AI inference on every page load
- Permanent storage of uploaded documents
- Infrastructure that only one person understands

---

# 39. P0 / P1 / P2

## P0

- Production hosting
- HTTPS
- Git-based deployment
- Preview environment
- Environment variables
- Secret management
- Rollback
- Basic monitoring
- Demo isolation
- Cost controls

## P1

- Automated CI
- Error monitoring
- Dependency scanning
- Automated performance checks
- Deployment notifications
- Structured architecture documentation

## P2

- Infrastructure as code
- Advanced observability
- Automated disaster recovery
- Multi-region deployment
- Sophisticated deployment orchestration

## P3

Avoid unless MAKATA.ai becomes a substantially larger product/platform.

---

# 40. Final Architecture Principle

MAKATA.ai should have a deliberately asymmetric architecture:

> **Simple infrastructure supporting sophisticated demonstrations.**

The public website should be:

**Fast → static → resilient → cheap → boring**

while the things it showcases can be:

**Experimental → computational → interactive → technically complex → unfinished**

That separation matters.

The infrastructure exists to make the engineering work visible.

It should never become the engineering work that consumes all of your time.

---

## Final acceptance criterion

Six months after launch, Ralph should be able to answer:

> “How does MAKATA.ai deploy?”

without needing to rediscover the system.

And if the AI demo breaks, the answer should be:

> “The demo is down.”

—not:

> “The entire website is down.”

That is the infrastructure standard for MAKATA.ai.
