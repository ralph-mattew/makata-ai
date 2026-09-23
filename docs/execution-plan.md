# MAKATA.ai — Strategic Execution Plan

**Status:** Active — Phases 0–4 and the Phase 4a alignment pass are complete; Phase 5 is next
**Supersedes:** [roadmap.md](roadmap.md) (kept for history; this plan is the active one)
**Synthesizes:** [redesign/](../redesign/) (21 artifacts + `updatedmasterdatasepcs.md`) and [alignment/](../alignment/) (Lab Charter, Value Proposition, Research Thesis, Research Portfolio)

---

## 1. What this plan reconciles

Two document sets were produced independently and answer different questions:

| Folder       | Answers                                                          | Scope                                                     |
| ------------ | ---------------------------------------------------------------- | --------------------------------------------------------- |
| `redesign/`  | "How should the **website** be structured, designed, and built?" | IA, UX, UI, components, content schema, code migration    |
| `alignment/` | "What **research program** does the Lab actually do?"            | Charter, positioning, research thesis, research portfolio |

The redesign docs already assume the alignment docs' conclusion — that MAKATA.ai should present itself as an evidence-driven engineering lab, not a portfolio/agency site. This plan is the single execution sequence that ships that. It does not re-derive strategy; it turns both documents into ordered, file-level work against the actual repository.

**Correction (post-Phase-4 alignment review):** the alignment docs go further than the redesign docs in three ways the original plan under-weighted, and which Phases 0–4 partly drifted from: (1) the Lab has a stated research thesis — _"Useful edge intelligence is a systems optimization problem, not simply a model-size problem"_ (`labcharter.md`) — and the site should express it, not just list apps; (2) the Lab explicitly does **not** assume local/private AI is always better (`labcharter.md` §8, `valueproposition.md` §20), so copy like "on the device, not in the cloud" is doctrinal and off-brand; (3) the intended audience is engineers and researchers, and CTAs should invite collaboration / comparing notes, not hiring (`valueproposition.md` §12–13, redesign `artifact09` Connect wording). See Phase 4a.

**Governing rule carried over from both source sets:** the repository is the source of truth. Where a document assumed something the codebase doesn't have (a CMS, live demos, a knowledge graph, existing analytics), the plan below defaults to the simpler, currently-true option. "The repository" is no longer just `makata-ai` — see Section 3a for the full cross-repo inventory under the `ralph-mattew` GitHub account.

---

## 2. Non-negotiable constraints (from both doc sets)

1. **No premature infrastructure.** No CMS, database, GraphQL, backend service, Docker, or live AI endpoint until a specific, named requirement justifies it.
2. **Evidence-first content.** Every technical claim is tagged, explicitly or implicitly, as `MEASURED / OBSERVED / INFERRED / HYPOTHESIS`. Unverifiable legacy claims (e.g. "production-grade," "50 pioneer testers") do not migrate as-is.
3. **No empty routes.** A URL only ships when real content backs it. `/lab`, `/notes`, `/ideas` are not built until the Lab has produced something to put there.
4. **Boring deployment.** Cloudflare Workers + static assets via `wrangler.jsonc` stays as-is (already fixed and working — see Section 8). No infra churn during the content/design migration.
5. **Xylo is the pilot, always.** It has the richest existing content and is the stress test for every new component/pattern before anything is generalized.
6. **Products ≠ research.** Xylo/Unawain shipping a feature is not itself a Lab finding. The site must not conflate "we built X" with "we discovered Y."
7. **Lab, not studio or agency.** No "services," "hire me," or "let's build your product" framing anywhere; Connect CTAs invite collaboration or comparing notes (`labcharter.md` §7: not "a mobile app studio"; `artifact10` forbidden-words list).
8. **No doctrinal claims.** Never assert local > cloud, smaller > larger, or any technique as universally better. Prefer "We measured… / Under these conditions… / I haven't established whether…" (`valueproposition.md` §20). Every phase's exit gate includes the `artifact10` voice test: _"Would an experienced engineer believe this sentence, and can I point to evidence on the site for it?"_

---

## 3. Starting state (Phase 0 baseline, verified against this repo)

```
src/
  main.tsx
  App.tsx                  — router: "/", "/work/xylo", "/work/unawain"
  components/
    Layout.tsx              — GlobalStyles, Logo, Button, Navigation, Footer
    CaseStudyUI.tsx          — CaseStudyHero, SectionHeading, PipelineSteps, StatGrid, DataTable, CaseStudyCTA
  pages/
    Home.tsx                — Hero, Benefits, Insights, Products, CaseStudies(?), Services, About, CTA (hardcoded content, fake terminal block)
    XyloCaseStudy.tsx
    UnawainCaseStudy.tsx
public/                     — _headers, favicon, robots.txt, sitemap.xml (no _redirects — removed)
wrangler.jsonc               — Cloudflare Workers static-assets deploy, SPA fallback via not_found_handling
redesign/                    — 21 artifacts + master spec (target site architecture)
alignment/                   — Lab charter, value prop, research thesis, research portfolio
archive/                     — legacy material, not authoritative
docs/roadmap.md              — generic 4-phase roadmap, now superseded by this document
```

Current nav: `Technologies / Services / Research & PoCs / About` + "Book an Audit" CTA — this is the SaaS/agency framing the redesign explicitly rejects.

Current homepage flow: `Hero → Benefits → Insights → Products → Services → About → CTA` with a decorative fake-terminal ("$ makata launch --offline") that implies live telemetry that doesn't exist.

### 3a. Cross-repo inventory (`ralph-mattew` GitHub account)

The redesign/alignment docs were written assuming source material that lives outside `makata-ai`. Verified via direct repo inspection (Sep 2026):

| Repo                    | Visibility      | What it actually is                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Relevance                                                                                                         |
| ----------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `xylo`                  | Private, Swift  | Xylo iOS app source. Has a real `DesignSystem/` (Theme + Components: `XyloPalette`, `XyloFonts`, `XyloSpacing`, glass cards, `DocumentIntelligenceView`, `TemplatePicker`, `EmptyStateView`, `SectionCardsView`) and `docs/` with detailed technical architecture (`TECHNICAL_ARCHITECTURE.md`, `PIPELINE_ARCHITECTURE.md`, `DOCUMENT_CHAT_ARCHITECTURE.md`) — this is the primary source of truth for Xylo's case-study claims, and should be the reference when tagging MEASURED vs INFERRED in Phase 0.                                                                                | Content grounding + design-system extraction source                                                               |
| `unawain`               | Private, Swift  | Unawain iOS app source. Parallel structure to `xylo` (`UNAWAINSpacing`, `UNAWAINFonts`, Filipino-localized components: `BanigComparisonView`, `ResultCard`, `IntelligenceRevealCard`, `BaybayinWatermark`). `docs/PIPELINE_ARCHITECTURE.md` has extensive measured pipeline data (timings, token budgets, thresholds).                                                                                                                                                                                                                                                                    | Content grounding + design-system extraction source                                                               |
| `xylo-app`              | Public, HTML    | Static marketing site for Xylo (deployed via GitHub Pages, separate from `makata-ai`/`studio.makata.ai`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Not part of this plan; separate deploy target                                                                     |
| `unawain-app`           | Public, HTML    | Static marketing site for Unawain (`unawain.makata.ai`), Filipino-language, Solihiya-weave visual theme.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Not part of this plan; separate deploy target                                                                     |
| `ios_unawain`           | Private, Python | ML research/data pipeline: dataset curation scripts, a Colab fine-tuning notebook (`unawain_colab_finetune.ipynb`), configs. This is the actual model-training research work behind Unawain's NLLB/Gemma pipeline.                                                                                                                                                                                                                                                                                                                                                                        | **Real candidate Lab evidence** for Phase 7 — this is genuine research artifacts, not a placeholder               |
| `unawain-public-models` | Public, Python  | Public model release repo: model cards, artifacts, licenses (MIT/CC-BY-NC per model).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **Real candidate Lab evidence** — already-published research output                                               |
| `dcs`                   | Private, Python | **This resolves the DCS/ItanongMo discrepancy (see Section 6).** DCS = "Distributed Cognitive Graph" (DCG) — a from-scratch multi-agent/distributed reasoning architecture (not related to ItanongMo at all). Substantial, mature codebase: `src/dcg/` core engine, FastAPI `src/api/`, React+TS `web/` frontend, 40+ docs, test suite, Docker/Render deploy config. Its own docs self-describe it as "Production Ready" / "Freemium SaaS" — same unverifiable-claim pattern flagged in Home.tsx, so it needs the same evidence-first treatment before any of its claims reach makata.ai. | Real project, currently un-shipped/undeployed publicly; candidate for `/work/dcs` once its own claims are audited |

**Confirmed: no `itanongmo` repository exists anywhere on the account.** ItanongMo is concept-stage — it exists only as a `caseStudyHref: null`, `links: []` card in `Home.tsx`. It is unrelated to DCS; both are legitimate, just at different maturity stages. This replaces the earlier (incorrect) assumption that DCS and ItanongMo were the same project under two names.

---

## 4. Target state (from `redesign/`, grounded to this repo)

- **Nav:** `Work / Lab / Notes / About` + contextual `Connect` — only sections with real content get a nav entry at each phase.
- **Homepage flow:** `Hero → Selected Work → Live/Interactive Evidence → Engineering Themes → Recent Experiments → Field Notes → About → Connect` (later items added only once they exist).
- **Routes:** `/work/xylo`, `/work/unawain` (existing, refactored) → later `/work/dcs`, `/lab`, `/lab/experiments/[slug]`, `/lab/benchmarks/[slug]`, `/notes/[slug]`.
- **Content model:** typed content under `src/content/{projects,experiments,benchmarks,notes}/*.ts`, replacing hardcoded JSX arrays in `Home.tsx`. No CMS.
- **Positioning copy:** eyebrow "AI / Edge AI engineering laboratory," headline "AI systems, built under real constraints." (`artifact10` §5.2 engineering-first default), with the Lab thesis expressed in the Engineering Focus intro — replacing the original "Book an Audit" agency tone. Applied in Phase 4a.
- **Naming:** the wordmark stays `MAKATA.ai`; the alignment docs' "Makata AI Edge Lab" is not yet used on the site (open question, Section 9).
- **Fake terminal:** replaced by a truthful, labeled system-status block or removed entirely until there's a real interactive demo to show.

---

## 5. Phased execution sequence

Each phase has a concrete deliverable set and an explicit exit gate. Phases are intentionally small enough to land as individual PRs/commits.

### Phase 0 — Baseline (no code changes) — ✅ COMPLETE

- Freeze baseline: current commit, current routes, current Lighthouse/build output, screenshots of `/`, `/work/xylo`, `/work/unawain`.
- Inventory unverifiable claims currently in `Home.tsx`, `XyloCaseStudy.tsx`, `UnawainCaseStudy.tsx` (numbers, tester counts, "production-grade," etc.) and tag each `MEASURED / OBSERVED / INFERRED / HYPOTHESIS / REMOVE`.
- **Exit gate:** a short written inventory (can live in this doc's appendix or a follow-up note) — no ambiguity about what content is trustworthy before it's migrated.
- **Done:** see [phase0-claim-inventory.md](phase0-claim-inventory.md). Baseline frozen at commit `5cceafe` (clean build, 609ms). Every claim on all three pages tagged and cross-checked directly against `xylo`/`unawain` source code (not just their docs) via the GitHub repo inventory from Section 3a. Headline findings: Unawain's case study is fully measured (real timestamped pipeline runs, e.g. "64.4s"/"73.9s" totals traced to logged component timings); Xylo's retrieval weights (0.7/0.3) are confirmed byte-for-byte in shipped Swift code; but Xylo's "Results: Performance, measured on-device" section is actually copied from the source repo's own "Performance **Projections**" (estimates), not measured data — a real evidence-integrity gap to fix in Phase 1. Also found a third (previously uncounted) "production-ready" instance alongside the two "production-grade" ones, and one claim (Benefits: "every architecture has already shipped") that will become false once any unshipped project gets a card, so it needs to move to the Phase 1 content schema as a per-project attribute rather than a site-wide claim.

### Phase 1 — Content foundation — ✅ COMPLETE

- Create `src/content/projects/{xylo,unawain}.ts` following the Artifact-07 project schema (identity, positioning, demonstration, engineering, evidence, reflection, relationships, external).
- Migrate only claims that survived the Phase 0 inventory; mark anything unresolved as a TODO rather than inventing evidence.
- **Exit gate:** `XyloCaseStudy.tsx`/`UnawainCaseStudy.tsx` can render entirely from the new content objects with no behavior change yet (content extraction only, no visual change).
- **Done:** `src/content/projects/types.ts` defines a trimmed, TypeScript adaptation of the Artifact-07 project schema (identity, positioning, architecture/engineering, evidence with `EpistemicStatus` tags, external links/CTA/SEO) — `Demo`, related-work graph, `Experiment`, `Failure`, and `Lesson` fields were deliberately left out rather than stubbed, since neither project has that content yet. `xylo.ts`/`unawain.ts` migrate every claim verbatim from the Phase 0 inventory, carrying forward each `Benchmark`'s epistemic tag and provenance note (e.g. Xylo's four performance stats are tagged `INFERRED` with a note that the source repo itself calls them projections — the copy itself is untouched pending a Phase 5 fix). `XyloCaseStudy.tsx`/`UnawainCaseStudy.tsx` now render entirely from these content objects through the existing `CaseStudyUI` components. Verified via `npm run build` (clean, 49 modules, 556ms) and a visual diff of both rendered pages against a local preview server — pixel-identical to pre-refactor output, including non-breaking spaces preserved at their original positions.

### Phase 2 — Design tokens — ✅ COMPLETE

- Extract current ad hoc Tailwind values (colors, spacing, radii) used across `Layout.tsx`/`CaseStudyUI.tsx`/`Home.tsx` into `tailwind.config.js` theme tokens.
- No visual redesign yet — this is a consolidation pass so Phase 3+ styling changes touch tokens, not scattered class names.
- **Exit gate:** no more one-off hex/spacing values in the three files above; `npm run build` unchanged output.
- **Done:** Deferred the Section 9 shared-tokens-repo idea (name/scope unconfirmed) in favor of the lower-risk, originally-scoped option — tokens now live in `tailwind.config.js`'s `theme.extend`: `colors.surface`/`colors.ink` (previously hardcoded `#f8fafc`/`#0f172a` duplicated in both `styles.css` and `Layout.tsx`'s `GlobalStyles`), `boxShadow.soft`/`boxShadow.card` and `backgroundImage['woven-pattern']` (previously bespoke CSS rules injected via a runtime `<style>` tag in `GlobalStyles`, now real Tailwind utilities), `fontSize.micro` and `letterSpacing.eyebrow` (previously the repeated arbitrary values `text-[10px]`/`tracking-[0.12em]`, used 10+ times across `CaseStudyUI.tsx`, `Home.tsx`, and both case study pages), and `borderRadius['4xl']`/`['5xl']` (previously `rounded-[2rem]`/`rounded-[2.5rem]` in `Home.tsx`'s hero terminal mockup). `styles.css` now references `theme('colors.ink')`/`theme('colors.surface')` instead of literal hex. `GlobalStyles` was reduced to just the Google Fonts `@import` — the duplicate body font/color/background rules and `html { scroll-behavior: smooth; }` were removed since `styles.css` already declares them identically. Verified via `npm run build` (clean, 49 modules, 511ms) and a visual diff of `/`, `/work/xylo`, and the "Selected projects" section against a local preview server — pixel-identical to pre-consolidation output (small CSS byte delta expected/acceptable since hand-written CSS was replaced by Tailwind-generated utility classes of the same values, not a visual change).

### Phase 3 — Shell & navigation — ✅ COMPLETE

- Replace `Navigation`/`Footer` in `Layout.tsx`: nav becomes `Work / About / Connect` (drop "Technologies/Services/Research & PoCs/Book an Audit" framing). `Lab`/`Notes` are added to nav only in Phase 6+ once those routes exist.
- Update `App.tsx` routes only if paths change (e.g. keep `/work/xylo`, `/work/unawain`; do not add `/lab` yet).
- **Exit gate:** site still has exactly the routes it has today, just restyled/reworded shell.
- **Done:** `navLinks` in `Layout.tsx` trimmed from `Projects/Xylo case study/Unawain case study/Roadmap/About` to `Work / About` (per `redesign/artifact03`'s target nav `Logo | Work | Lab | Notes | About | Connect`, minus the not-yet-built `Lab`/`Notes`), and the mailto CTA button relabeled from "Work with me" to "Connect" in both desktop and mobile nav. `Footer` expanded from a bare logo+copyright line to match `redesign/artifact09`'s Global Footer spec: logo + tagline ("AI systems • Edge AI • experimentation"), the same `Work/About/Connect` nav links, and the copyright line — GitHub/LinkedIn/App&nbsp;Store links from that spec were deliberately omitted since no such profile URLs exist anywhere in the repo (per the "only include links that actually exist" rule; per-project App Store links already live on the case study pages, not the global footer). `App.tsx` was not touched — routes remain exactly `/`, `/work/xylo`, `/work/unawain`. Verified via `npm run build` (clean, 49 modules, 526ms) and a visual check of desktop nav, footer, and the mobile hamburger menu against a local preview server — new copy renders correctly, no route or behavior changes beyond the shell wording/links.

### Phase 4 — Homepage rebuild — ✅ COMPLETE

- Rebuild `Home.tsx` around: `Hero → Selected Work → Engineering Themes → About → Connect` (skip "Live/Interactive Evidence" and "Recent Experiments/Field Notes" modules until Phase 6+ has real content for them).
- Remove the fake terminal block or replace with a truthful, explicitly-labeled static system diagram (per Artifact 4/11 guidance — "SYSTEM STATUS" block with only supportable values).
- Remove generic "Benefits"/"Services" sections; fold anything salvageable into "Engineering Themes."
- **Exit gate:** homepage no longer implies live telemetry or "services for hire" positioning; `npm run build` + manual smoke test of all links.
- **Done:** `Home.tsx` rewritten to the `Hero → Selected Work → Engineering Themes → About → Connect` flow. The `$ makata launch --offline` fake terminal (100% fabricated, phase0-claim-inventory #3) was replaced by a "System status" panel explicitly labeled "Static — not live telemetry," showing only supportable, non-invented values (inference location, retrieval/translation method, network dependency, evidence pointer) for Xylo and Unawain. The old `Products()` + `CaseStudy()` (near-duplicate sections linking to the same two case studies) were merged into a single `SelectedWork()` section (`id="work"`), which now sources Xylo/Unawain card data (title, tagline, status, technologies, links) directly from `src/content/projects` instead of a second hardcoded copy — ItanongMo remains a plain inline "Concept" card since no repo/content module exists for it. `Benefits()` + `Insights()` were merged into `EngineeringThemes()` (`id="themes"`), keeping only the four `MEASURED` claims ("Private by default," "Built for real constraints," "Local-first RAG architecture — Shipped in Xylo," "Multilingual on-device translation — Shipped in Unawain") and dropping two cards that were either about to become false ("Shipped, not just prototyped," which breaks the moment a non-shipped project is listed) or unbacked (`HYPOTHESIS`-tagged "Production roadmap for deployment / Playbook," no such document exists). `Services()` (agency/consulting engagement cards) was removed entirely rather than folded in, since it's a service-offering list, not an engineering theme — satisfies the "no longer implies services for hire" exit gate. Three "production-grade"/"production-ready" claims (Hero intro, Selected Work intro, final CTA) were reworded per phase0-claim-inventory #2/#13/#17. The final CTA section was renamed `Connect()` (from `CallToAction()`) and its button relabeled "Connect" (from "Reach out") for consistency with the Phase 3 nav CTA; the Hero's secondary button was also relabeled "Connect" (from "Work with me") for the same reason. `About()` was left unchanged (already lab-appropriate tone). `Layout.tsx`'s shared `navLinks` `Work` entry was updated from `/#products` to `/#work` to match the renamed section id (plus its `ScrollManager` doc-comment example). Verified via `npm run build` (clean, 49 modules, 508ms) and a visual check against a local preview server: Hero's System status panel renders with the correct static-data disclaimer, Selected Work shows Xylo/Unawain (sourced from content module, all case-study/App-Store/site/source links resolve) plus ItanongMo, Engineering Themes shows exactly the 4 intended cards, Services is fully gone, and nav/footer `Work` links resolve to `/#work`.

### Phase 4a — Alignment pass (inserted after Phase 4 review) — ✅ COMPLETE

- Review `alignment/` + `redesign/` against Phases 0–4 as shipped; fix positioning drift before building more components on top of it.
- **Exit gate:** homepage, shell, and homepage metadata pass constraints 7–8 above; `npm run build` clean.
- **Review findings:**

| Area                                                          | Verdict                      | Detail                                                                                                                                                                                         |
| ------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content model, tokens, shell, homepage structure (Phases 1–4) | On track                     | Matches `artifact02/07/09` IA and the evidence-first rule.                                                                                                                                     |
| Hero headline                                                 | Drift                        | "I build AI products that run on the device, not in the cloud" was product/app-studio framing plus a doctrinal local-vs-cloud claim.                                                           |
| Final CTA                                                     | **Missed Phase 4 exit gate** | "Looking to build an on-device AI product? … Let's talk about your project" still read as services-for-hire.                                                                                   |
| Engineering Themes                                            | Drift                        | Two generic cards ("Private by default", "Built for real constraints") weren't tied to evidence; no expression of the Lab thesis; `artifact09` asks for capability areas _linked to evidence_. |
| Homepage `<title>`/meta                                       | Drift                        | "On-Device AI Portfolio" (`artifact01`: not a portfolio) and "live demos" (none exist).                                                                                                        |
| About / footer copy                                           | Minor drift                  | "meaningful user value", "intelligent experiences" — marketing adjectives with no evidence.                                                                                                    |
| ItanongMo status                                              | Minor                        | "Concept" / "in progress" isn't in the `artifact02` status vocabulary and implies active work with no repo.                                                                                    |
| Visual system                                                 | Partial                      | Decorative hero glow violated "evidence > decoration" (`artifact04`); broader accent-color restraint and semantic status colors still to do (moved into Phase 5).                              |
| Plan coverage of `alignment/`                                 | Gap                          | Plan only used alignment docs as a Phase 7 gate; methodology requirements for experiments and the thesis weren't carried into later phases.                                                    |

- **Done:** Hero headline → "AI systems, built under real constraints." with supporting copy describing the Lab's actual method (build on real devices, find where they strain, document what was measured); decorative rotated/blurred glow behind the System status panel removed. Final CTA → "Working on something interesting?" + collaboration/compare-notes wording (`artifact09`), closing the Phase 4 gap. Engineering Themes → "Engineering focus / Problems I like working on," intro states the Lab thesis in plain language, and the four cards now each map to `researchthesis.md` domains (Retrieval·Representation, Model·Runtime·Device, Representation·Application, Foundation·Measurement) with an explicit "Evidence: Xylo/Unawain" link — every card's claim is sourced from `src/content/projects` (hybrid retrieval, device-tiered model selection, entity-protected translation, logged per-stage timings). Selected Work intro reworded to separate shipped/documented systems from the unbuilt idea; ItanongMo relabeled "Idea"; card CTAs → "Explore Xylo/Unawain" (`artifact10` §6). About copy now states the Lab's non-doctrinal stance ("I don't assume local AI is always better than cloud AI…"). Footer copyright line de-marketed. Homepage `<title>`/description/OG/Twitter pulled forward from Phase 9 to `artifact15`'s "MAKATA.ai — AI & Edge AI Engineering Laboratory," with a description limited to what exists today (no "experiments/benchmarks/live demos" yet). Verified via `npm run build` (clean, 49 modules, 581ms), a forbidden-words grep across `src/`, `index.html`, `public/` (zero hits), and a visual check of Hero and Engineering focus against a local preview server (all four evidence links resolve to `/work/xylo` / `/work/unawain`).

### Phase 4b — Brand & owner decisions — ✅ COMPLETE

- Applied the §11 answers: site brand is **Makata AI Edge Lab** (logo = "Makata" wordmark + mono "AI Edge Lab" subtitle; titles use `… | Makata AI Edge Lab`). The site now commits to publishing methods, code, and benchmarks _as they're validated_ (hero, footer, and a new `#research` "How the lab works" section with the method chain, the epistemic legend, and the `unawain-public-models` v0.1.0 release, marked "Benchmarks pending"). Footer + About link GitHub (`ralph-mattew`). ItanongMo removed from the homepage. Nav → Work · Research · About.
- **LinkedIn not linked:** the provided URL (`linkedin.com/feed/`) is the viewer's own feed, not a public profile. Add a `linkedin.com/in/…` URL to `Layout.tsx` footer + `index.html` JSON-LD `sameAs` when available.
- **Source links removed:** `ralph-mattew/xylo` and `ralph-mattew/unawain` are private (404 for visitors). Only the public `unawain-public-models` repo is linked (Unawain page, "Open models").

### Phase 5 — Project page componentization (Xylo pilot) — ✅ COMPLETE

- **Done:** `CaseStudyUI.tsx` rewritten into `ProjectHero` (with an "Engineering question" block), `SectionHeading`, `PipelineSteps`, `EvidencePanel` (badge + mono value + readable provenance), `ConstraintList` (Constraint → Impact → Response + badge), `LimitationsList`, `DataTable`, `ProjectConnect`, `EpistemicBadge`. One shared `src/pages/ProjectPage.tsx` renders every project from its content object: Hero → Problem → Architecture → Engineering decision → Evidence → Constraints → Privacy → Limitations → Connect. `Project` type gained `question`, `constraints`, `limitations`; the services-style `cta` field was removed. Xylo's four timings are titled "projected, not yet measured" and tagged `INFERRED`. Semantic tokens (`brand`, `accent`, `measured`, `observed`, `inferred`, `hypothesis`) added to `tailwind.config.js`; emerald now limited to brand mark / accents. "Failures" and "Lessons" sections omitted (no documented content yet) per the omit-don't-stub rule — Limitations covers known evidence gaps instead.
- **Bugs fixed on the way:** evidence section title was invisible (dark bg + dark heading) — evidence is now a light section; logo/nav were invisible over dark project heroes (header now switches to a light variant until scrolled); INFERRED badge stretched full-width; long provenance paths overflowed cards.

### Phase 5 (original scope, for reference)

- Extract reusable `ProjectHero`, `EvidencePanel`, `ConstraintBlock`, `FailureBlock` from the existing `CaseStudyUI.tsx` primitives, validated against Xylo first.
- Re-point `XyloCaseStudy.tsx` at the new components + Phase 1 content object.
- **Section order (from `artifact10` §9 + `artifact01` storytelling model):** Hero (status · platform · model · processing) → Why I built this → What it actually does → How it works (Input → Processing → Output, then detail) → What I measured → Where the system gets difficult (`Constraint → Impact → Response`) → Failures → Lessons & open questions. Omit sections with no real content rather than stubbing them.
- **`EpistemicBadge` component:** render each benchmark/claim's existing `epistemicStatus` tag visibly (`MEASURED / OBSERVED / INFERRED / HYPOTHESIS`, `artifact10` §13). This is how Xylo's four performance figures get fixed: relabel the section from "measured on-device" to projections tagged `INFERRED`, not by deleting them.
- **Every metric shows its conditions** (device, model, input, method) or is labeled as missing them (`artifact10`: "Never display an impressive number without its experimental context").
- **Visual restraint (carried from Phase 4a):** add semantic status tokens (`success / warning / error / neutral / accent`, `artifact04`) to `tailwind.config.js`, and restrict emerald to interactive/selected state across `CaseStudyUI.tsx` and `Home.tsx` badges.
- **Pilot gate (from Artifact 13):** ship only if this measurably clarifies the Xylo page; otherwise revise the component split before touching Unawain.

### Phase 6 — Unawain migration — ✅ COMPLETE

- **Done:** `UnawainCaseStudy.tsx` is a thin wrapper over `ProjectPage` with no one-off overrides (exit gate met). Four constraints (memory, thermal, model availability, translation fidelity), three limitations (runs not a controlled comparison; context-token constants unverified; model benchmarks pending). Copy corrected to "four regional Philippine languages" and to the actual protected entities (amounts, phone numbers, emails, URLs).
- **Pulled forward from Phase 9:** per-route title/description/OG/canonical via `src/lib/usePageMeta.ts`; `NotFound` page + `*` route; `ResearchOrganization` + founder JSON-LD in `index.html`; `og:image` removed (the referenced `og-image.png` never existed) and Twitter card set to `summary`. Mobile nav gained `aria-expanded`/`aria-controls`.
- **Verified:** `tsc --noEmit` + `npm run build` clean; forbidden-words grep clean (one code comment only); visual QA of both project pages (desktop + 390px mobile), homepage research section, and 404 title.

### Phase 6 (original scope, for reference)

- Apply the same component system to `UnawainCaseStudy.tsx` using its Phase 1 content object.
- **Exit gate:** confirms the system generalizes beyond a single project without one-off overrides.

### Phase 7 — Lab v0 (gated on real Lab output existing)

- **Progress (experiment 001 done, not yet pushed):** in `ralph-mattew/unawain-public-models` (local clone at `~/Projects/unawain-public-models`): `benchmarks/bench_coreml_latency.py` (per-setting subprocess isolation, host conditions, manifest-compatible package SHA-256), `benchmarks/README.md` (protocol with pre-stated hypotheses), `benchmarks/results/001-host-latency-pilot.{md,json}`. Findings: 0 NLLB ops are Neural Engine-eligible (int8 weights → fp32 compute; `MLComputePlan`), GPU path aborts on macOS 26.5.1 / M4 Pro (MPSGraph MLIR assertion), pruning cuts size 26–30% but latency ≤7%, decoder step has no KV cache. The four NLLB model cards got corrected I/O shapes, measured compute placement (replacing "Neural Engine preferred"), and host latency rows; README "Production-ready" removed. Site now surfaces the finding (homepage research card, Unawain "Compute placement" constraint). **Ship order: push public-models first — the site links to `benchmarks/results/001-host-latency-pilot.md` on `main`.**
- `/lab` still deferred: one host-Mac pilot is a finding, but the lab page should wait for 002 (iPhone) so its first entry measures the device the apps actually run on.
- Only start this phase once the Lab (per `alignment/`) has produced at least one real, reproducible finding (device/model/technique/result/limitation).
- **This gate may already be closer to met than assumed:** `ios_unawain` (dataset curation + fine-tuning notebook) and `unawain-public-models` (published model cards/artifacts) are real, existing research output, not hypothetical future work. Before treating Phase 7 as blocked indefinitely, audit whether either of these already qualifies as a publishable first experiment/finding.
- Add `/lab` index and first `/lab/experiments/[slug]` page using the Experiment data model from `redesign/artifact07`, **extended with the required components from `alignment/researchmethodology.md` §3**: research question, hypothesis, baseline, intervention, variables/controls, workload, hardware + device state (cold / warm / sustained / thermally constrained, §15), metrics across the four dimensions (intelligence, performance, resource, physical behavior, §10), measurement protocol, failure criteria, reproducibility info, limitations, result, interpretation, follow-up questions. Add `NEGATIVE RESULT` as an allowed outcome tag.
- **Strongest first-experiment candidate:** re-measuring Xylo's four `INFERRED` performance projections on real devices. It converts an existing evidence gap into the Lab's first `MEASURED` finding and fits the thesis's own example question shape (intervention × task × hardware × outcome × constraint).
- Add `Lab` to nav at this point, not before.
- **Exit gate:** page content is a real experiment, not a placeholder.

### Phase 8 — Notes v0 (gated similarly)

- Add `/notes` + first field note once at least one genuine observation exists worth publishing.

### Phase 9 — Hardening

- **Progress:** per-route static HTML is done. A `routeMetaPages` plugin in `vite.config.ts` writes `dist/work/{xylo,unawain}.html` with each project's `seo` title/description, canonical, `og:*` and `twitter:*` baked in, because link-preview scrapers don't run JS. Workers static assets (default `auto-trailing-slash`) serve `/work/xylo` from `work/xylo.html`; `vite preview` does the same. The build fails loudly if an expected meta tag is missing from `index.html`. Still to do: sitemap `lastmod`, a11y pass, mobile nav QA, Lighthouse re-check.
- Per-route SEO metadata using `artifact15` titles/descriptions (homepage already done in Phase 4a; case study pages still inherit it), Person/WebSite structured data with only publicly accurate fields, sitemap update to match real routes only, accessibility pass, mobile nav QA, Lighthouse re-check against Phase 0 baseline.

### Phase 10 — Cleanup

- Remove now-dead components/content, reconcile `archive/` material explicitly (keep as historical reference only, never silently promoted to live copy).

---

## 6. Explicitly deferred (do not build yet)

- **DCS project page** — DCS is a real, substantial project (`ralph-mattew/dcs`, "Distributed Cognitive Graph": multi-agent reasoning engine + FastAPI + React UI). It is not related to ItanongMo (see Section 3a). No `/work/dcs` route until: (a) its own docs' unverifiable claims ("Production Ready," "Freemium SaaS") get the same evidence-first audit as Xylo/Unawain, and (b) it's actually deployed/shippable somewhere a visitor could see it. Until then it stays out of both `/work` and `/lab`.
- **ItanongMo** — concept-only, no repository exists. Removed from the homepage in Phase 4b (owner decision); do not build a case study page for it.
- Any live AI endpoint / interactive model demo — precomputed or visualization-only evidence comes first (Demo maturity ladder, Artifact 8).
- Analytics — add event tracking only after content structure stabilizes (Artifact 16).
- `/ideas` route — only once a concept like CROSS-META has a clearly labeled maturity status to show.

---

## 7. Risks & mitigations

| Risk                                                                                    | Mitigation                                                                                                                                          |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Redesign scope creep (rebuilding more than needed)                                      | Every phase above is scoped to specific existing files; no new dependencies added without a named requirement.                                      |
| Migrating unverifiable claims by habit                                                  | Phase 0's claim inventory is a hard gate before any content migration.                                                                              |
| Component over-abstraction before proving value                                         | Xylo-first pilot gate in Phase 5 before Unawain or any third project touches the new components.                                                    |
| Lab/Notes sections becoming placeholders                                                | Phases 7–8 are explicitly gated on real research output existing first — no stub pages.                                                             |
| Deployment regressions during redesign                                                  | No infra changes planned in this plan; Cloudflare/`wrangler.jsonc` config from the prior session is left untouched.                                 |
| Positioning drifting back to product/agency framing (happened once, caught in Phase 4a) | Constraints 7–8 + the `artifact10` voice test are part of every phase's exit gate; re-run the forbidden-words grep before marking a phase complete. |

---

## 8. Current deployment status (context, not part of this plan's scope)

Cloudflare Workers static-assets deploy is currently working: `wrangler.jsonc` declares `assets.not_found_handling: "single-page-application"`, the conflicting legacy `public/_redirects` file was removed, and the last push (`5cceafe`) resolved the "infinite loop" deploy error. Outstanding and external to this plan: DNS for `studio.makata.ai` needs to point at the Cloudflare Worker's custom domain target (Error 1016 indicated a stale/incorrect DNS record) — this is a dashboard action, not a code change.

---

## 9. Shared architecture repo (revised 2026-09-23, supersedes the design-token decision below)

**Audit basis:** read-only shallow clones of `xylo` @ `9e103e8` and `unawain` @ `b0124e6`, since deleted. Both apps share one skeleton: Services/{Real,Protocols,Stubs}, Utilities, Extensions, Models, DesignSystem. The shared code has already drifted:

- identical: `FileStorageManager`, `UIImage+Crop`, `SummarySection`;
- small diffs (2–13 lines): `PDFTextExtractor`, `KeychainHelper`, `UIImage+Enhancement`, `VisionOCRService`;
- forked (50–550 lines): `GGUFModelManager` 50, `GemmaLLMEngine` 239, `CoreMLModelManager` 503, `FoundationModelsAnalysisService` 549.

20 SwiftUI components share names across the two apps. Third-party dependencies: LlamaSwift (both), WhisperKit (both), swift-transformers `Tokenizers` (Unawain).

**Purpose:** reference implementations of the techniques the lab measures, with each module stating the conditions under which it was measured. It is _not_ a general-purpose RAG or LLM framework (lab charter §7). It is also the code the benchmarks run, so experiments and apps exercise the same implementation.

**Owner decisions (2026-09-23):**

- public;
- the apps are not switched to the kit for now;
- `BenchCore` moves into `Instrumentation`;
- no UI module;
- the repo also hosts PoCs (papers and repos in edge AI, reproduced and measured, then published on the lab site).

**Name:** `makata-edge-lab`, Apache-2.0 (confirmed by the owner 2026-09-23). No model weights or datasets are committed: SwiftPM clones the whole repo for dependents, so PoCs stay small and large artifacts go to release assets.

**Status (2026-09-23):** created at https://github.com/ralph-mattew/makata-edge-lab (public), first commit `b246d81`, local clone `~/Projects/makata-edge-lab`.

- Products: `Instrumentation` (from BenchCore; hashing also takes single files), `EdgeRuntime` (`DeviceTier`, `LLMContextPolicy`, `CooldownPolicy`, `ResourceWait`, `DiskSpace`) and `CoreMLBench` (BenchCore's runner, JSON unchanged).
- 23 XCTests pass on macOS; the iOS 17 cross-build succeeds. Tests pin the hashing against `build_manifest.py` and round-trip the published 002 Mac result byte for byte.
- PoC 001 protocol registered in that commit, before the first run. The host run uses the Homebrew llama.cpp CLI, so `LlamaEngine` is only needed for the device run.
- **PoC 001 host run done, `675c1f2`: reject, not the constraint.** At the shipped settings (f16, FA off), Gemma E2B's KV + compute buffers go from 167.6 MiB at 2,048 context to 180.6 MiB at 4,096 (+13 MiB) and 210.1 MiB at 8,192. Only 3 of 35 layers grow with context: 20 share KV, and 12 are a 512-token SWA window. The shipped settings already pass every _proceed_ criterion at 4,096. q8_0 K+V saves 25 MiB at 4,096 (KLD 0.0006, top-token 98.95%); q4_0 drifts (KLD 0.089, top-token 86.9%). FA alone saves 11 MiB (no V padding) and decodes 10% faster on the host. Next question: thermal behavior at 4,096 on a 6 GB iPhone, which needs `LlamaEngine` plus a device harness (backlog PoC 002).
- **Opened to replications, `b579b98` (2026-09-23).** Owner decisions: replications only for now; write-ups and results CC BY 4.0, code Apache-2.0; DCO (`git commit -s`), no CLA; lab-as-subject voice with a named byline on each PoC and replication (no "I"); Zenodo DOIs; GitHub Discussions. Added CONTRIBUTING, GOVERNANCE (editor = Ralph; reviewers TBD; errata policy), Contributor Covenant 2.1, SECURITY, CITATION.cff, issue forms (replication, correction, bug), PR template, CODEOWNERS, `poc/_template/REPLICATION.md`. CI (`swift test`, iOS build, `scripts/check_repo.py`) green; DCO check on PRs. PoC 001 `run.sh` takes `OUT=`, `summarize.py` takes a results dir. Discussions, private vulnerability reporting, labels and topics enabled. Site About now has the headshot and a "Replicate a result" button (`e43ec48`).
- The `unawain-public-models` harness still uses its own BenchCore copy.

**Structure:** a root SwiftPM package (the kit, one product per module, heavy dependencies isolated) plus `poc/`, which SwiftPM ignores.

| Module                                                                                                                     | Source (private)                                                                                                                                                                                             | Dependencies                            | Coupling to clear                                                                          |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------ |
| `EdgeRuntime`: device tier, memory budget, thermal state, cooldown policy                                                  | `GGUFModelManager` tiers, `InferenceThrottleManager`, `GemmaLLMEngine` memory floors, `CoreMLModelManager.logMemoryDiagnostics`, Unawain context-tier policy (7.5/11.5 GB, ≥3 GB available, half-size retry) | Foundation, UIKit (optional)            | `UserDefaults` keys to be injected                                                         |
| `Instrumentation`: stage timings (signposts), device-conditions snapshot, JSON result schema                               | `unawain-public-models/benchmarks/swift/BenchCore` (already public)                                                                                                                                          | Foundation, os                          | none                                                                                       |
| `DocumentRAG`: chunker, `NLEmbedding` embedder, cosine retriever, chat session                                             | Xylo `Services/DocumentChat` (`DocumentChatEngine` stays in the app)                                                                                                                                         | Foundation, NaturalLanguage, Accelerate | `Language` (9 refs) replaced by `NLLanguage`; `ChatDebugLog` replaced by `Instrumentation` |
| `DocumentIngest`: PDF text, Vision OCR, image crop/rotate/enhance                                                          | `PDFTextExtractor`, `VisionOCRService`, `UIImage+*`                                                                                                                                                          | PDFKit, Vision, CoreImage               | `Language` (1 ref)                                                                         |
| `ModelStore`: background download, resume, SHA-256 verification against the `model-manifest.json` schema, disk-space guard | `GGUFModelManager` download path, `CoreMLModelManager` disk and fallback loading                                                                                                                             | Foundation, CoreML                      | Bundle-ID session names and model catalog to be injected                                   |
| `LlamaEngine`: llama.cpp wrapper, prefix/KV cache reuse, sampler overrides, memory-aware context creation                  | `GemmaLLMEngine` (take Xylo's version, merge Unawain's diff)                                                                                                                                                 | LlamaSwift                              | none found                                                                                 |
| `CoreMLSeq2Seq`: fixed-shape encoder/decoder, cross-attention cache, pruned-vocab mapping                                  | `NLLBTranslationHelper`, NLLB parts of `CoreMLModelManager`                                                                                                                                                  | CoreML, Tokenizers                      | NLLB token IDs to become config                                                            |

Repo layout:

- `Package.swift` (iOS 17 / macOS 14);
- `Sources/<Module>/`;
- `Tests/<Module>Tests/`, seeded from `DocumentChatTests` and `PipelineDiagnosticTests`;
- `poc/README.md`: an index table (id, question, source paper/repo + license, status, verdict, lab link);
- `poc/_template/`: README with the question, source, pre-stated hypothesis, method, run conditions, results (`results/*.json` + `.md`, claims tagged) and verdict;
- `poc/NNN-slug/`, each with its own `Package.swift` or `pyproject.toml` that depends on the kit by path;
- `docs/architecture/`: short ADR-style pages on memory tiering, fallback chains, the RAG pipeline and fixed-shape Core ML;
- `LICENSE`, `NOTICE`, `CHANGELOG.md`, semver tags.

PoC lifecycle: proposed → running → reported. The verdict is one of: graduates into a kit module with tests, not adopted, or inconclusive. Numbering is `PoC 001`, kept separate from `unawain-public-models`' Benchmark 001/002.

**Stays private:**

- product features and UI flows;
- `PurchaseManager`, `AnalyticsManager`;
- `OutputTemplate`, prompts, `Dialect` content;
- the `QwenNLLBAnalysisService` monolith (only its tier policy is extracted);
- brand visuals (Banig, Baybayin, Solihiya, Sampaguita, Parol, Capiz; Xylo's particle and pattern effects);
- `XyloPalette`/`UNAWAIN*` tokens.

**Order.** Each step is extract, generalize, then test on macOS and iOS. The apps keep their own copies for now, so each module records the private commit it was extracted from, and the code is checked for third-party snippets before publishing.

1. `Instrumentation` (from `BenchCore`) + `EdgeRuntime`. Switch the `unawain-public-models` harness to depend on the kit only after the owner has run 002, so the harness doesn't change under that run.
2. `LlamaEngine`, pulled forward because PoC 001 needs it.
3. `DocumentRAG`, which already builds standalone (host check).
4. `DocumentIngest`.
5. `ModelStore`.
6. `CoreMLSeq2Seq`, which the fp16 experiment 003b would reuse.

**PoC 001: KV-cache quantization vs the context tiers** (approved; protocol and decision rule in `poc/001-kv-cache-quantization/README.md`).

The scope below is the original proposal. The registered version adds a flash-attention-only arm and a K-only q8_0 arm, because the apps ship with flash attention off. It also includes a "not the constraint" outcome: Unawain's notes say the 6 GB cap of 2,048 is also for thermal stability.

- **Question:** can a q8_0 or q4_0 KV cache let the 6 GB tier run Gemma E2B at 4,096 context (currently 2,048) within the same memory, without degrading document summaries?
- **Why first:** it attacks a `MEASURED` constraint already on `/work/unawain`; it runs on this Mac before the iPhone; llama.cpp already exposes the K/V cache types (quantized V needs flash attention); and a positive result changes `EdgeRuntime`'s tier policy directly. Related literature: KIVI, KVQuant.
- **Measure:**
  - KV and peak memory at 2k/4k/8k × f16/q8_0/q4_0;
  - prefill and decode tokens/s;
  - output agreement against f16 on a fixed document set.

**Backlog:**

- PoC 002 (from PoC 001): repeated 4,096-context Gemma E2B summaries on a 6 GB iPhone, covering thermal state, decode speed over time and jetsam headroom, with FA on vs off. Needs `LlamaEngine` and a device harness.
- PoC 003: prompt-lookup decoding for document-grounded summarization, where outputs copy source n-grams;
- PoC 004: a small Core ML sentence-embedding model vs `NLEmbedding` for retrieval quality;
- fp16 NLLB for Neural Engine placement (experiment 003b in `unawain-public-models`).

**Web design tokens:** dropped from this repo. The site's tokens stay in `tailwind.config.js`, since the site shares no UI code with the Swift apps.

### Superseded (original design-token decision)

The user plans to extract shareable components/design from `xylo` and `unawain` (both native Swift/SwiftUI apps) into a separate repository. Decision (made autonomously in the user's absence — revisit if it doesn't match intent):

- **Scope: tokens + thin React layer.** A design-tokens package (colors, spacing, type scale, radii as JSON/TS — derived from `XyloPalette`/`XyloSpacing`/`XyloFonts` and `UNAWAINSpacing`/`UNAWAINFonts`) as the source of truth, plus a thin React/Tailwind component layer built on top for web reuse. The Swift apps are **not** wired to consume this package automatically (that would require nontrivial Swift tooling changes to `xylo`/`unawain` and isn't justified yet) — they remain the reference source; values are manually kept in sync going forward. This avoids over-engineering a cross-platform pipeline nobody asked for, while still giving `makata-ai` (and any future site) a real, non-duplicated source for tokens/components.
- **Sequencing: prerequisite to Phase 2.** Phase 2 (design tokens) in this plan should pull from the new repo's token package instead of defining tokens from scratch in `tailwind.config.js`. Practically this means: create/populate the shared repo first (or at least its token package), then Phase 2 becomes "wire `tailwind.config.js` to consume it" rather than "invent tokens."
- **Repo name** — not yet decided; not created. Suggest something like `makata-design` (keeps naming consistent with `makata-ai`) but this is the user's call.
- **Not yet done:** no repo has been created, no tokens have been extracted. This section only records the decision so Phase 2 isn't scoped against an assumption that gets invalidated later. Creating a new GitHub repository is a reversible, low-risk action — happy to scaffold it (token JSON/TS extracted from the values visible in `xylo`'s `XyloPalettePreview.swift`/`unawain`'s equivalent files) once the name/exact token set is confirmed.
- **Update (Phase 2):** Phase 2 shipped with tokens in `tailwind.config.js` instead (repo name/scope still unconfirmed); migrating them to a shared package later is a drop-in change.

---

## 10. Immediate next action

**12A shipped (2026-09-23):** `unawain-public-models` `50d18ce` on `main`; v0.1.0 `model-manifest.json` replaced (no local paths; all 7 SHA-256/sizes unchanged); `makata` `865ae8f` deployed to the Worker (`makata-ai.ralphmattew.workers.dev`). **Owner blocker:** `makata.ai` itself still resolves to GitHub Pages (Cloudflare DNS apex A records 185.199.108–111.153, `*.github.io` cert → browser cert error). Attach `makata.ai` (and `www`) as a Custom Domain on the `makata-ai` Worker; Cloudflare replaces the A records.

**Experiment 002 — iPhone latency** for the same four NLLB packages (needs a small Swift harness run on a physical device; record model, iOS version, thermal state, and cold/warm runs). Then 003: FLORES-200 quality for full vs pruned, and an fp16-conversion variant to test whether Neural Engine placement is reachable without quality loss. Second candidate remains re-measuring Xylo's four `INFERRED` projections on device.

**Brand assets (done):** `LogoMark` in `Layout.tsx` (single-stroke "M" signal path ending in an emerald node), matching `public/favicon.svg` and `public/apple-touch-icon.png`; `public/og-image.png` (1200×630) generated from `docs/brand/og-image.html` (regeneration command in that file); `og:image`, `summary_large_image`, and JSON-LD `logo` restored in `index.html`.

---

## 11. Owner decisions (answered; applied in Phase 4b)

1. Lab name → **Makata AI Edge Lab**.
2. Open research → **publish code and benchmarks** (site promises publication _as validated_; nothing claimed as published that isn't).
3. Profiles → GitHub `ralph-mattew` and LinkedIn `linkedin.com/in/ralphmattewpalomaria/` linked (footer, About, JSON-LD `sameAs`).
4. ItanongMo → **removed**.

### Original questions

1. **Lab name on the site:** keep `MAKATA.ai` alone, or introduce "Makata AI Edge Lab" (as used throughout `alignment/`)? Currently: wordmark unchanged, "AI / Edge AI engineering laboratory" as the descriptor.
2. **Open-research commitments:** `labcharter.md` §6.4 describes an open research repository. Should the site promise published code/benchmarks, or wait until the first one exists? Currently: no such promise is made.
3. **Footer profile links:** GitHub/LinkedIn URLs (`artifact09` footer spec) are still omitted because none exist in the repo. Provide them to add.
4. **ItanongMo:** keep as an "Idea" card or remove from the homepage?

---

## 12. Owner action items (pending on Ralph's side)

Ordered by what unblocks the most. Check off here as they're done. **Status: items 1–3 and 7 done 2026-09-23; new item 0 (custom domain) blocks verifying on `makata.ai`.** Ralph reports back when a prerequisite is met, and I pick up the follow-up from the tracker below.

### Tracker: waiting on you, then I…

| #   | Prerequisite (owner)                                                                                                                                                                               | Then I do                                                                                                                                                                                | Blocks                    |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 0   | Attach `makata.ai` + `www.makata.ai` as Custom Domains on the `makata-ai` Worker (Cloudflare → Workers → makata-ai → Settings → Domains & Routes); optionally disable the legacy GitHub Pages site | Re-verify TLS, headers/CSP and share cards on `makata.ai`; run LinkedIn Post Inspector                                                                                                   | Public site               |
| 1   | ~~Push `unawain-public-models`~~ — done (`50d18ce`)                                                                                                                                                | ~~Links resolve~~ — verified 200                                                                                                                                                         | —                         |
| 2   | ~~Replace v0.1.0 `model-manifest.json`~~ — done by me with approval                                                                                                                                | ~~Verify~~ — re-downloaded, byte-identical, 0 `/Users`, 7/7 SHA-256 + sizes match                                                                                                        | —                         |
| 3   | ~~Push `makata`~~ — done (`865ae8f`)                                                                                                                                                               | Worker verified: all routes 200, per-route titles/og:url, CSP + X-Frame-Options + Referrer-Policy present. `makata.ai` pending item 0                                                    | —                         |
| 4   | Install the iOS 26.5 platform, set the signing team, run `CoreMLBench` on the iPhone, send the JSON                                                                                                | Write up `002-iphone-latency.{md,json}`, test H1–H4, update the model cards, the homepage research card and the Unawain "Compute placement" constraint; then build `/lab` with 001 + 002 | Phase 7 (`/lab`)          |
| 5   | Decide on fp16 reconversion and on publishing the conversion scripts                                                                                                                               | Design experiment 003 (FLORES-200 quality, full vs pruned) and 003b (fp16 compute, Neural Engine placement)                                                                              | Experiment 003            |
| 6   | Approve adding per-stage timing logs to the private `xylo` repo (a branch; nothing merged without review), then do one device run                                                                  | Instrument chunk/embed/retrieve/first-token timings, then promote or revise Xylo's four `INFERRED` figures                                                                               | Xylo evidence             |
| 7   | ~~LinkedIn URL~~ — done                                                                                                                                                                            | Footer, About, JSON-LD `sameAs`                                                                                                                                                          | —                         |
| 8   | ~~Photo~~ — done (497×600 headshot, `e43ec48`, `object-top` crop)                                                                                                                                  | ~~Replace the About placeholder~~                                                                                                                                                        | —                         |
| 9   | GitHub bio + pin `unawain-public-models`                                                                                                                                                           | Nothing; owner-only                                                                                                                                                                      | —                         |
| 10  | `/lab` timing decision (default: after 002)                                                                                                                                                        | Build `/lab` then                                                                                                                                                                        | Phase 7                   |
| 11  | Approve PoC 002 (thermal at 4,096 context on a 6 GB iPhone). When ready, have the phone and signing team available                                                                                 | Extract `LlamaEngine`, build the device harness, register the protocol, then send you the run steps                                                                                      | PoC 002                   |
| 12  | Sign in at zenodo.org with GitHub, then Account → GitHub → toggle `makata-edge-lab` on                                                                                                             | Cut release `v0.1.0`, add the DOI badge and the DOI to `CITATION.cff` and the README                                                                                                     | Citable DOI               |
| 13  | Send founding reviewers' names + GitHub handles (after they agree)                                                                                                                                 | Add them to `GOVERNANCE.md` and `CODEOWNERS`; the 7-day change window starts applying                                                                                                    | Independent review        |
| 14  | Approve posting a pinned "Call for replications: PoC 001" in Discussions (and optionally sharing it)                                                                                               | Write and post it                                                                                                                                                                        | First outside replication |

### Resolved from the private repos (no owner action needed)

- **Unawain context-token constants: confirmed.** `ralph-mattew/unawain` @ `b0124e6`, `QwenNLLBAnalysisService.swift` + `GGUFModelManager.swift`: tiers switch at 7.5 GB and 11.5 GB of physical RAM; the E2B/E4B sizes and all six context values match the site table. The page now also states two conditions the table left out: the 4,096 context requires ≥3 GB available (otherwise 2,500), and there is a single half-size retry if the context can't be allocated. The limitation was removed from `/work/unawain`.
- **Unawain run metadata: partially recovered.** `docs/PIPELINE_ARCHITECTURE.md` records the normal run on a 6 GB device (5,960 MB reported, 2,048 context). The throttled run doesn't record a device tier; its 352-token cap matches the code's 8 GB throttled branch, so the two runs may be from different devices. Provenance and limitation copy now say this. The exact device model and iOS version aren't recorded anywhere; supply them if you remember.
- **Xylo projections: host-Mac check done.** The unmodified `DocumentChunker`/`DocumentEmbedder`/`DocumentRetriever` sources were compiled with a timing driver (`docs/evidence/xylo-rag-host-check/`: M4 Pro, `-O`, synthetic 10-page, 5,542-word document, 30 iterations). Chunking takes about 3 ms; embedding about 32–37 ms per chunk (61 chunks in 1.9–2.3 s, because chunk count depends on layout); retrieval about 2 ms plus a 2.5 ms query embed. The first-token figure isn't checkable off-device. The figures stay `INFERRED` (they're phone claims) with the host numbers in their provenance. The device run is tracker item 6.

### A. Ship what's already built (blocks the site deploy)

- [x] **Review + commit + push `unawain-public-models`** — `50d18ce`. (`~/Projects/unawain-public-models`). Changed: `README.md`, `CHANGELOG.md`, all 7 `modelcards/*.md`, `scripts/build_manifest.py`; new: `benchmarks/` (Python harness, Swift harness + iOS app, 001 results, 002 protocol and Mac harness check). Review the model-card diffs in particular — the "(not yet included in this repository)" suffix on the conversion-script lines was applied by a scripted replace. Must land on `main` **before** the site deploys: the homepage links to `benchmarks/results/001-host-latency-pilot.md`.
- [x] **Replace the v0.1.0 release asset `model-manifest.json`** — done 2026-09-23, verified. It exposed local absolute paths (`/Users/rlpalomaria/Projects/ios_unawain/models/coreml/…`). Root cause was `scripts/build_manifest.py` writing absolute `resolved_path` values; it now writes repo-relative paths (or just the filename for anything outside the repo) — uncommitted, part of the push above. To regenerate: download all 7 release zips into `artifacts/` and unzip (only the 4 NLLB packages are there now), run `python scripts/build_manifest.py --artifacts-dir artifacts --fail-missing --output /tmp/model-manifest.json`, confirm `grep /Users` finds nothing and the SHA-256 values match the current release, then replace the asset on the v0.1.0 release.
- [x] **Review + commit + push `makata`** — `865ae8f`, deployed to the Worker. Internal docs (`docs/execution-plan.md`, `docs/phase0-claim-inventory.md`, `docs/evidence/`, `alignment/`, `redesign/`) deliberately left uncommitted (repo is public).
- [ ] **Point `makata.ai` at the Worker** (tracker item 0). Includes Phases 1–6, brand assets (`LogoMark`, favicon, apple-touch-icon, `og-image.png`), and the benchmark 001 integration. After deploy, check the share card with a link-preview debugger (LinkedIn Post Inspector / opengraph.xyz).

### B. Profile & identity (small, any time)

- [x] **LinkedIn public URL** — `linkedin.com/in/ralphmattewpalomaria/`, added to footer, About, JSON-LD `sameAs`.
- [ ] **GitHub bio / profile README** for `ralph-mattew` — suggested bio: _"Makata AI Edge Lab — researching useful AI under real device constraints. iOS · Core ML · on-device LLMs."_ Pin `unawain-public-models`.
- [ ] **Real photo** for the About section (square, ≥800×800). Currently a dark placeholder block.
- [ ] **DNS for `studio.makata.ai`** (§8) — Cloudflare dashboard action, still outstanding if that subdomain is still wanted.

### C. Research that needs the device or the private repos

- [ ] **Experiment 002 — iPhone latency.** Harness is built: `benchmarks/swift/CoreMLBench.xcodeproj` in `unawain-public-models` (step-by-step in `benchmarks/README.md` → "Running 002 on an iPhone"). Your part: install the iOS 26.5 platform in Xcode → Settings → Components (not installed on this Mac, so the app couldn't be built for a device or simulator here — sources type-check against the iOS SDK), set your signing team, run on the phone, send back the JSON. Pre-stated hypotheses and run conditions are in the README. Memory is a new focus: on the Mac, `CPU_AND_NE` pushed the process to 1.7–3.2 GB.
- [x] ~~**Unawain context-token constants**~~: confirmed from source (see "Resolved" above).
- [ ] **Xylo's four `INFERRED` projections**: the host check is done. The on-device run needs your approval to instrument the private `xylo` repo (tracker item 6).
- [ ] **Unawain run metadata**: the tier was recovered for the normal run (6 GB). The device model and iOS version for both runs aren't recorded, so supply them only if you know them.

### D. Decisions only the owner can make

- [ ] **fp16 reconversion (experiment 003b):** approve spending time on re-exporting NLLB with fp16 compute to test Neural Engine placement. Requires the original conversion pipeline from `ios_unawain` — decide whether to publish those conversion scripts in `unawain-public-models` (model cards currently say "not yet included").
- [ ] **`/lab` page timing:** current recommendation is to add it once 002 (iPhone) exists, so the first Lab entry measures the device the apps actually run on. Override if you'd rather launch it with 001 alone.
- [x] **Shared architecture repo** (§9): `makata-edge-lab`, public, Apache-2.0, PoC 001 approved (2026-09-23). Created; see §9 status.
