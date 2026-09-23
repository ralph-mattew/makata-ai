# MAKATA.ai — SEO, Discoverability & Metadata Specification

**Document Type:** SEO / Discoverability / Metadata
**Status:** Design artifact
**Purpose:** Define how MAKATA.ai should be indexed, understood, shared, and discovered by search engines, AI systems, recruiters, engineers, and potential collaborators.

---

# 1. SEO Objective

MAKATA.ai should not attempt to compete with large content sites for generic searches such as:

> “best AI tools”
> “AI engineering”
> “what is Edge AI”

That would create an unnecessary content-production treadmill.

The objective is narrower:

> **Make MAKATA.ai highly understandable and discoverable when someone is looking for the specific person, systems, experiments, technologies, and technical questions represented on the site.**

SEO success should therefore come primarily from:

- Clear technical content
- Unique project pages
- Experiment pages
- Structured metadata
- Strong internal linking
- Good page performance
- Search-engine-readable architecture
- External references
- Professional identity
- Original technical observations

---

# 2. Search Intent Model

MAKATA.ai should serve several different discovery paths.

| Visitor intent  | Example search                        | Relevant page        |
| --------------- | ------------------------------------- | -------------------- |
| Person          | “Ralph Palomaria AI engineer”         | About                |
| Portfolio       | “Ralph Palomaria AI projects”         | Work                 |
| Project         | “Xylo AI document intelligence”       | Xylo                 |
| Technical topic | “on-device document AI iPhone”        | Xylo / Lab           |
| Experiment      | Specific model/device question        | Experiment           |
| Technology      | “Apple Foundation Models document AI” | Xylo / Notes         |
| Professional    | “Ralph Palomaria Edge AI”             | About / Work         |
| Concept         | Specific DCS/CROSS-META concept       | Concept/Project page |

The site should **capture specific intent rather than manufacture generic search volume.**

---

# 3. URL Architecture

URLs should be:

- Short
- Stable
- Human-readable
- Lowercase
- Hyphen-separated
- Descriptive
- Permanent where possible

Recommended structure:

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

Avoid URLs such as:

```text
/project?id=123
/page1
/ai-project-final
/new-project-v2
/blog/post-17
```

The URL should communicate what the page represents.

---

# 4. Page Titles

Every indexable page should have a unique `<title>`.

## Homepage

> MAKATA.ai — AI & Edge AI Engineering Laboratory

## Work

> AI Projects & Systems — MAKATA.ai

## Xylo

> Xylo AI — Private On-Device Document Intelligence | MAKATA.ai

## Unawain

> Unawain — Local AI for Filipino Language Documents | MAKATA.ai

## DCS

> Distributed Cognitive Synthesis — Multi-Perspective AI System | MAKATA.ai

Claims in these titles should be verified against the current implementation before launch.

## Lab

> AI Experiments & Engineering Investigations — MAKATA.ai

## Benchmarks

> AI Benchmarks & Performance Experiments — MAKATA.ai

## About

> Ralph Palomaria — AI Engineer | MAKATA.ai

## Connect

> Contact Ralph Palomaria — MAKATA.ai

---

# 5. Meta Descriptions

Meta descriptions should describe the actual page.

### Homepage

> AI systems, Edge AI experiments, on-device applications, benchmarks, and technical investigations by Ralph Palomaria.

### Work

> Explore AI systems, applications, prototypes, and engineering projects built by Ralph Palomaria.

### Xylo

> Xylo explores private document intelligence on-device, including local models, document analysis, system architecture, and mobile AI constraints.

### Unawain

> Unawain explores local-first document intelligence for Filipino languages and the constraints of running AI directly on mobile devices.

### DCS

> Distributed Cognitive Synthesis explores multi-perspective AI synthesis, alternative reasoning paths, evaluation, and system design.

Again, capability statements should be synchronized with the actual codebase.

---

# 6. Canonical URLs

Every indexable page should have one canonical URL.

Example:

```text
https://home.makata.ai/work/xylo
```

The canonical URL should prevent duplicate indexing caused by:

- Query parameters
- Tracking parameters
- Alternate routes
- Trailing slash variations
- Duplicate content
- Preview URLs

If the domain changes from `home.makata.ai` to another canonical domain during the redesign, the canonical strategy must be updated consistently.

---

# 7. Robots Strategy

The public portfolio should generally allow search engines to crawl:

- Homepage
- Work
- Projects
- Lab
- Experiments
- Benchmarks
- Notes
- About

Private or non-content routes should not be indexed.

Examples of candidates for exclusion:

```text
/admin
/api
/preview
/internal
/debug
```

Do not rely on `robots.txt` as a security mechanism.

Anything sensitive must be protected at the application/infrastructure layer.

---

# 8. Sitemap

Generate a sitemap containing canonical public pages.

At minimum:

```text
/
 /work
 /work/xylo
 /work/unawain
 /work/dcs
 /lab
 /lab/experiments
 /lab/benchmarks
 /about
 /connect
```

As content grows, dynamically include:

```text
/lab/[experiment]
/notes/[slug]
```

The sitemap should not contain:

- Redirect URLs
- Duplicate URLs
- Private pages
- Error pages
- Development URLs
- Unpublished drafts

---

# 9. Structured Data

Use Schema.org structured data where it genuinely describes the page.

## Homepage / About

Potential types:

- `Person`
- `WebSite`

The `Person` entity should represent Ralph's actual professional identity.

Useful properties may include:

- name
- jobTitle
- url
- sameAs
- knowsAbout

Only include information that is publicly accurate.

---

# 10. Project Structured Data

For project pages, evaluate whether:

- `SoftwareApplication`
- `CreativeWork`
- `TechArticle`
- `WebPage`

accurately represents the content.

Do not force every project into `SoftwareApplication`.

A research prototype may be better represented as a technical work or article.

Structured data should describe reality rather than maximize schema coverage.

---

# 11. Article / Experiment Structured Data

Experiment and technical-note pages may use:

> `Article`

or an appropriate subtype where justified.

Recommended fields:

- headline
- description
- author
- datePublished
- dateModified
- mainEntityOfPage
- image
- keywords

Experiments should retain their actual publication date rather than being repeatedly republished solely for freshness.

---

# 12. OpenGraph

Every significant page should define:

- `og:title`
- `og:description`
- `og:type`
- `og:url`
- `og:image`
- `og:site_name`

Project pages should have project-specific images.

Example:

```text
Xylo AI
Private document intelligence on-device.
```

rather than:

```text
MAKATA.ai
My amazing AI portfolio!!!
```

The social preview should identify the thing being shared.

---

# 13. Social Preview Design

The image should contain a restrained amount of information.

Recommended:

```text
XYLO AI

PRIVATE
DOCUMENT
INTELLIGENCE

MAKATA.ai
```

Or for experiments:

```text
EDGE AI EXPERIMENT

How much can this model
actually do on-device?

MAKATA.ai
```

Avoid:

- Huge paragraphs
- Stock AI imagery
- Excessive gradients
- Generic robot graphics
- Clickbait
- Fake benchmark claims

---

# 14. Semantic HTML

The implementation should use semantic HTML wherever practical.

Preferred:

```text
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Headings should follow logical hierarchy:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
```

Do not use heading tags purely for visual sizing.

---

# 15. Search-Friendly Project Pages

A project page should contain enough textual information that a search engine can understand the system without executing the demo.

Minimum crawlable content:

1. Project name
2. One-sentence description
3. Problem
4. What it does
5. Architecture
6. Technologies
7. Constraints
8. Evidence
9. Lessons
10. Related work

Interactive demos should **enhance** the page rather than become the only source of information.

This is particularly important for JavaScript-heavy experiences.

---

# 16. JavaScript Rendering

Do not make important information dependent on client-side interaction if it can reasonably be rendered as HTML.

Search engines and AI crawlers should be able to discover:

- Project titles
- Descriptions
- Main technical facts
- Experiment questions
- Results
- Architecture summaries
- Author information
- Internal links

Interactive architecture diagrams can enhance the experience, but a textual representation should remain available.

---

# 17. Internal Linking

MAKATA.ai should behave like a technical knowledge graph.

For example:

```text
Xylo
 ↓
Apple Foundation Models
 ↓
On-device inference
 ↓
Mobile memory constraints
 ↓
Experiment
 ↓
Field Note
```

Links should explain the relationship.

Instead of:

> Related Projects

prefer:

> **Related because they explore on-device inference**

or:

> **Related experiment: sustained local inference**

This gives both visitors and search systems additional context.

---

# 18. Anchor Text

Avoid generic anchor text:

> Click here

> Learn more

> Read more

Prefer:

> Explore the Xylo architecture

> Read the local inference experiment

> See the device benchmark

> Explore Distributed Cognitive Synthesis

Anchor text should describe the destination.

---

# 19. Breadcrumbs

Use breadcrumbs for deep pages where useful.

Example:

> Work → Xylo → Experiments → Sustained Local Inference

Breadcrumbs should reflect the actual information hierarchy.

They should not merely exist because they are an SEO convention.

---

# 20. Image SEO

Images should have:

- Meaningful filenames
- Appropriate dimensions
- Modern formats where supported
- Alt text when meaningful
- Lazy loading where appropriate
- Explicit width/height to reduce layout shift

Bad:

```text
IMG_9283.png
```

Better:

```text
xylo-local-document-analysis.png
```

Alt text should describe the image's purpose.

Do not stuff keywords into alt text.

---

# 21. Performance as Discoverability

Technical performance is part of the SEO strategy.

Target:

- Fast initial render
- Minimal JavaScript
- Optimized images
- Lazy-loaded heavy components
- Static rendering where possible
- Efficient fonts
- Cached assets
- No unnecessary third-party scripts

Interactive AI demos should not block the initial page.

The visitor should see the actual project before the expensive system loads.

---

# 22. AI Crawler / Machine-Readable Content

MAKATA.ai should also be understandable to systems that retrieve information for AI-generated answers.

This requires:

- Clear headings
- Explicit entity names
- Consistent terminology
- Structured project pages
- Author attribution
- Dates
- Technical facts
- Internal relationships
- Publicly accessible text
- Stable URLs

Avoid burying important information exclusively inside:

- Canvas elements
- Images
- Animations
- Client-only state
- Interactive visualizations

The principle is:

> **Machines should be able to understand the work even when they cannot run it.**

---

# 23. Entity Consistency

Use the same names consistently.

For example:

> Distributed Cognitive Synthesis

should not randomly become:

> DCS Engine

> Cognitive Synthesis Framework

> Distributed AI Reasoning Platform

unless these genuinely represent different things.

Likewise:

> Xylo AI

should have a stable canonical spelling.

Consistent naming helps:

- Search engines
- AI retrieval systems
- Visitors
- External references
- Professional identity

---

# 24. Author Identity

Where appropriate, identify:

> **Ralph Palomaria**

as the author/builder.

Project pages can use:

> Built by Ralph Palomaria

Experiment pages:

> Experiment by Ralph Palomaria

This creates an explicit relationship between the person and the technical work.

The About page should provide the canonical professional identity.

---

# 25. Date Strategy

Use dates for:

- Projects
- Experiments
- Benchmarks
- Field notes
- Major updates

Distinguish:

> Created

> Updated

> Tested

> Published

These are not necessarily the same date.

For benchmarks especially, **test date** matters because model and device performance can change.

---

# 26. Content Freshness

Do not repeatedly modify publication dates simply to appear fresh.

Instead, update a page when something materially changes:

- Architecture
- Model
- Device support
- Benchmark
- Product status
- Major observation
- Experiment result

Show:

> Last updated: September 2026

only when there was a meaningful update.

---

# 27. Technical Keywords

Keywords should emerge naturally from actual work.

Potential recurring vocabulary:

- Edge AI
- On-device AI
- Local AI
- AI engineering
- AI architecture
- AI systems
- Mobile AI
- Document intelligence
- AI evaluation
- AI experimentation
- Multi-agent systems
- Model evaluation
- Apple Foundation Models
- Local inference

Do not create pages solely to target each keyword.

One strong technical page is preferable to ten thin SEO pages.

---

# 28. Search Content Strategy

The site should produce **original technical evidence**, not generic AI commentary.

High-value content:

> “Testing sustained local inference on an iPhone”

> “What changed when the model was reduced?”

> “Comparing document extraction approaches under mobile constraints”

> “Where a multi-perspective synthesis system produces different results”

Lower-value content:

> “What is AI?”

> “10 benefits of artificial intelligence”

> “The future of Edge AI”

The former demonstrates expertise.

The latter competes with enormous amounts of generic content.

---

# 29. External Discovery

MAKATA.ai should be connected to legitimate external professional references where appropriate:

- LinkedIn
- GitHub
- App Store pages
- Product Hunt
- Technical publications
- Conference/event profiles
- Relevant project repositories

The goal is not backlink quantity.

The goal is **consistent external identity**:

> Ralph Palomaria → MAKATA.ai → projects → repositories/products

External profiles should point back to the canonical MAKATA.ai pages when useful.

---

# 30. Search Console / Webmaster Setup

After launch, configure the appropriate webmaster tools for the chosen search engines.

Monitor:

- Indexed pages
- Crawling errors
- Search queries
- Search impressions
- Click-through rate
- Core Web Vitals
- Structured-data errors
- Canonicalization issues
- Sitemap status

Do not optimize solely for impressions.

A highly specific visitor searching for a project and spending five minutes examining the architecture may be more valuable than hundreds of irrelevant impressions.

---

# 31. Analytics Events

SEO analysis should connect discovery to meaningful engagement.

Recommended events:

```text
page_view
project_opened
demo_started
demo_completed
architecture_opened
benchmark_opened
experiment_opened
note_opened
github_clicked
linkedin_clicked
contact_clicked
```

Avoid collecting excessive personal information.

The objective is understanding **which technical evidence creates meaningful engagement**, not building a surveillance system.

---

# 32. SEO Measurement Framework

Track four layers.

### Discovery

- Search impressions
- Branded searches
- Non-branded technical searches
- Referral sources

### Engagement

- Project views
- Demo starts
- Demo completions
- Architecture interactions
- Experiment views

### Depth

- Multiple project visits
- Project → experiment
- Project → GitHub
- Project → About
- Project → Connect

### Professional outcome

- LinkedIn clicks
- GitHub visits
- Contact submissions
- Recruiter/collaborator inquiries
- Product/demo interest

Do not use raw traffic as the primary success metric.

---

# 33. SEO Anti-Patterns

Do not:

- Generate dozens of thin AI articles
- Keyword-stuff project descriptions
- Create fake “research” pages
- Publish generic AI definitions
- Duplicate project content
- Hide important content behind JavaScript
- Create misleading structured data
- Inflate benchmark claims
- Change dates without substantive updates
- Build pages solely for search engines
- Sacrifice performance for SEO widgets
- Add popups everywhere
- Turn MAKATA.ai into a content farm

---

# 34. Technical SEO Acceptance Criteria

Before launch:

### Crawlability

- [ ] Public pages crawlable
- [ ] Important content server/static rendered
- [ ] No accidental `noindex`
- [ ] Robots configuration verified

### URLs

- [ ] Canonical URLs defined
- [ ] Stable route structure
- [ ] No duplicate routes
- [ ] Redirects defined for changed URLs

### Metadata

- [ ] Unique title per page
- [ ] Unique description per important page
- [ ] OpenGraph metadata
- [ ] Social preview images
- [ ] Author metadata where appropriate

### Structured data

- [ ] Person identity
- [ ] Website identity
- [ ] Appropriate project/article schema
- [ ] No fabricated properties

### Performance

- [ ] Optimized images
- [ ] Minimal blocking JavaScript
- [ ] Demo code lazy-loaded
- [ ] Fonts optimized
- [ ] Layout shift controlled

### Content

- [ ] Projects contain crawlable technical descriptions
- [ ] Experiments contain questions/results
- [ ] Benchmarks contain conditions
- [ ] Author identity is explicit
- [ ] Internal relationships are linked

---

# 35. Priority

## P0 — Launch requirements

- Correct titles
- Meta descriptions
- Canonicals
- Sitemap
- Robots
- Semantic HTML
- Crawlable project content
- OpenGraph
- Stable URLs
- Performance baseline

## P1 — Strongly recommended

- Structured data
- Breadcrumbs
- Rich internal linking
- Project-specific social previews
- Search Console monitoring
- Author/entity consistency
- Experiment metadata

## P2 — Later

- Advanced schema
- Automated content relationship metadata
- Search-specific dashboards
- Advanced analytics
- Automated SEO validation

## P3 — Avoid initially

- SEO content generators
- Hundreds of programmatic landing pages
- Keyword farms
- AI-generated technical articles at scale
- Complex SEO personalization

---

# 36. Core Principle

The SEO strategy for MAKATA.ai should be:

> **Build things worth indexing.**

The strongest search strategy is not to create more pages.

It is to make each meaningful page unusually specific.

A page documenting:

> what was tested → on which device → with which model → under which conditions → what happened → what failed → what changed

has substantially more information value than another generic article about “the future of AI.”

MAKATA.ai should therefore optimize for:

**Specificity → Evidence → Structure → Discoverability**

not:

**Keywords → Traffic → Content volume**

---

## Final acceptance test

A stranger searching for:

> “Ralph Palomaria AI”

should be able to identify the person.

A technical visitor searching for:

> “[specific project/problem]”

should be able to discover the relevant MAKATA.ai page.

A search engine or AI retrieval system should be able to understand:

> **who built what, what it does, how it works, what was tested, and what remains uncertain.**

That is the discoverability standard for MAKATA.ai.
