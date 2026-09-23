import React from 'react';
import { Link } from 'react-router-dom';
import { Button, GITHUB_URL, LINKEDIN_URL } from '../components/Layout';
import { EpistemicBadge, epistemicDefinitions } from '../components/CaseStudyUI';
import { projects } from '../content/projects';
import type { EpistemicStatus } from '../content/projects/types';
import { usePageMeta } from '../lib/usePageMeta';

const HOME_TITLE = 'Makata AI Edge Lab — Edge AI systems research and engineering';
const HOME_DESCRIPTION =
  'Makata AI Edge Lab researches how to build useful AI under real device constraints: model compression, retrieval, memory, and inference on real phones, published as methods, open models, and benchmarks.';

const PUBLIC_MODELS_URL = 'https://github.com/ralph-mattew/unawain-public-models';
const BENCHMARK_001_URL = `${PUBLIC_MODELS_URL}/blob/main/benchmarks/results/001-host-latency-pilot.md`;

/**
 * Truthful, explicitly-labeled static status readout — replaces the previous fake
 * `$ makata launch --offline` terminal block, which was fully fabricated (no such
 * CLI/telemetry exists in either app; see docs/phase0-claim-inventory.md Home.tsx #3).
 * Per redesign/updatedmasterdatasepcs.md's Artifact 4 "SYSTEM STATUS" guidance: only
 * supportable values, clearly marked as a static summary rather than live telemetry.
 */
const systemStatus = [
  {
    name: 'Xylo — iOS',
    rows: [
      { label: 'Inference', value: 'On device' },
      { label: 'Retrieval', value: 'Local (hybrid RAG)' },
      { label: 'Network dependency', value: 'None for core pipeline' },
      { label: 'Timings', value: 'Projected, not measured' },
    ],
  },
  {
    name: 'Unawain — iOS',
    rows: [
      { label: 'Inference', value: 'On device' },
      { label: 'Translation', value: 'Local (NLLB-200)' },
      { label: 'Network dependency', value: 'None for core pipeline' },
      { label: 'Timings', value: 'Logged end-to-end runs' },
    ],
  },
  {
    name: 'unawain-public-models v0.1.0',
    rows: [
      { label: 'Artifacts', value: '7 Core ML packages, int8' },
      { label: 'Includes', value: 'Pruned NLLB-200 variants' },
      { label: 'Benchmarks', value: 'Host pilot (001); iPhone pending' },
    ],
  },
];

const Hero = () => {
  return (
    <section className="relative bg-white border-b border-slate-200 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-woven-pattern z-0 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-28 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <span className="block font-mono text-xs uppercase tracking-eyebrow text-slate-500">
            Edge AI · Systems research
          </span>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            AI systems, built under <span className="text-slate-500">real constraints.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            An independent lab researching how to make AI useful on the devices people already carry. The lab builds working systems on real phones, measures where memory, latency, and heat push back, and publishes the methods, models, and benchmarks as they&apos;re validated.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Button variant="primary" href="#work" className="w-full sm:w-auto text-lg">
              Explore the work
              <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Button>
            <Button variant="secondary" href="#research" className="w-full sm:w-auto text-lg">
              How the lab works
            </Button>
          </div>

          <div className="pt-6 max-w-2xl mx-auto lg:mx-0">
            <div className="font-mono text-micro uppercase tracking-eyebrow text-slate-500">Working thesis</div>
            <p className="mt-2 text-slate-800 font-medium">
              Useful edge intelligence is a systems optimization problem, not simply a model-size problem.
            </p>
            <p className="mt-2 font-mono text-xs text-slate-500">
              model × compression × retrieval × memory × runtime × device × task
            </p>
          </div>
        </div>

        <div className="flex-1 w-full relative hidden md:block">
          <div className="relative bg-slate-900 rounded-4xl shadow-2xl border border-slate-800 overflow-hidden">
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
              <span className="text-xs font-bold uppercase tracking-eyebrow text-slate-400">System status</span>
              <span className="text-micro text-slate-500">Static summary — not live telemetry</span>
            </div>
            <div className="p-6 space-y-6">
              {systemStatus.map((entry) => (
                <div key={entry.name} className="space-y-2">
                  <div className="text-sm font-bold text-white">{entry.name}</div>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs">
                    {entry.rows.map((row) => (
                      <React.Fragment key={row.label}>
                        <dt className="text-slate-500">{row.label}</dt>
                        <dd className="text-slate-300 font-mono text-right">{row.value}</dd>
                      </React.Fragment>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SelectedWork = () => (
  <section id="work" className="bg-slate-900 py-24 text-white">
    <div className="max-w-7xl mx-auto px-6 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="block font-mono text-xs uppercase tracking-eyebrow text-slate-400">Selected work</span>
        <h2 className="text-3xl sm:text-4xl font-bold">Shipped systems, used as testbeds</h2>
        <p className="text-slate-400 text-lg">
          Xylo and Unawain are live on the App Store. They&apos;re also where the lab&apos;s questions get tested: real documents on real phones, where model, retrieval, memory, and heat all compete for the same budget.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article key={project.id} className="bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <span className="font-mono text-micro uppercase tracking-eyebrow text-slate-300 border border-slate-600 px-3 py-1 rounded-md">
                {project.status === 'RELEASED' ? 'Released · App Store' : project.status}
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">{project.tagline}</p>
            <div className="border-l-2 border-slate-600 pl-4">
              <div className="font-mono text-micro uppercase tracking-eyebrow text-slate-500">Engineering question</div>
              <p className="text-slate-200 mt-1 leading-relaxed">{project.question}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((chip) => (
                <span key={chip} className="rounded-md border border-slate-600 bg-slate-700/60 px-2.5 py-1 font-mono text-xs text-slate-200">{chip}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-slate-700 mt-auto">
              <Link
                to={`/work/${project.slug}`}
                className="text-sm font-bold text-white hover:text-emerald-300 flex items-center gap-1"
              >
                Read the {project.title} case study
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/**
 * Engineering focus areas, each mapped to a research domain from alignment/researchthesis.md
 * (Model, Representation, Retrieval, Runtime, Device, Foundation/measurement) and linked to
 * the shipped system where the evidence lives (redesign artifact09: "capability areas
 * connected to actual evidence", not service cards). Generic, evidence-free cards
 * ("Private by default", "Built for real constraints") were dropped in the alignment pass —
 * the Lab explicitly does not assume local/private is always the better trade-off
 * (alignment/labcharter.md §8).
 */
const engineeringThemes: {
  domain: string;
  title: string;
  desc: string;
  status: EpistemicStatus;
  evidence: { label: string; href: string };
}[] = [
  {
    domain: 'Retrieval · Representation',
    title: 'Fitting a whole document into a small context window',
    desc: 'Documents are summarized once, then chunked, embedded, and retrieved on-device with 0.7 semantic / 0.3 keyword scoring, so a 2–4K-token model can answer grounded, cited questions about a document it can never see in full.',
    status: 'MEASURED',
    evidence: { label: 'Xylo', href: '/work/xylo' },
  },
  {
    domain: 'Model · Runtime · Device',
    title: 'Choosing the model by the device’s memory budget',
    desc: 'Model selection is device-tiered: Apple FoundationModels where available, Gemma 4 Edge via llama.cpp on older hardware, and a 0.6B Qwen3 model for chat on 6 GB devices.',
    status: 'MEASURED',
    evidence: { label: 'Xylo', href: '/work/xylo' },
  },
  {
    domain: 'Representation · Application',
    title: 'Translation that preserves structure',
    desc: 'On-device NLLB-200 translation into four regional Philippine languages that keeps markdown structure intact and routes amounts, phone numbers, emails, and URLs around the translator.',
    status: 'MEASURED',
    evidence: { label: 'Unawain', href: '/work/unawain' },
  },
  {
    domain: 'Foundation · Measurement',
    title: 'Measuring the pipeline end to end',
    desc: 'Per-stage timings logged from complete pipeline runs — capture, pre-analysis, summarization, translation — rather than component benchmarks in isolation.',
    status: 'MEASURED',
    evidence: { label: 'Unawain', href: '/work/unawain' },
  },
];

const EngineeringThemes = () => (
  <section id="themes" className="bg-slate-50 py-24 border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12 max-w-3xl">
        <span className="block font-mono text-xs uppercase tracking-eyebrow text-slate-500">Engineering focus</span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">Where the systems problem shows up</h2>
        <p className="mt-4 text-slate-600 text-lg">
          The model, retrieval, representation, runtime, and device all interact — and the useful result depends on that interaction more than on model size alone. These are the places it has had to be engineered so far, each linked to its evidence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {engineeringThemes.map((theme) => (
          <div key={theme.title} className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-micro uppercase tracking-eyebrow text-slate-500">{theme.domain}</span>
              <EpistemicBadge status={theme.status} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{theme.title}</h3>
            <p className="text-slate-600 leading-relaxed">{theme.desc}</p>
            <Link
              to={theme.evidence.href}
              className="mt-auto pt-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
            >
              Evidence: {theme.evidence.label}
              <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const methodSteps = ['Question', 'Hypothesis', 'Baseline', 'Intervention', 'Measurement', 'Analysis', 'Publication'];
const epistemicOrder: EpistemicStatus[] = ['MEASURED', 'OBSERVED', 'INFERRED', 'HYPOTHESIS'];

/**
 * Open research — owner decision (execution-plan §11): publish code and benchmarks.
 * Shows the lab's method, how to read evidence labels, and the one public artifact that
 * exists today. Nothing here claims work that hasn't been published.
 */
const OpenResearch = () => (
  <section id="research" className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-6 space-y-14">
      <div className="max-w-3xl">
        <span className="block font-mono text-xs uppercase tracking-eyebrow text-slate-500">Open research</span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">How the lab works</h2>
        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
          The unit of output is a reproducible finding: how one engineering decision changes system behavior under a defined constraint, on real hardware. Methods, code, and benchmarks are published as they&apos;re validated — including results that don&apos;t work out.
        </p>
      </div>

      <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-600" aria-label="Research method">
        {methodSteps.map((step, idx) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">{step}</span>
            {idx < methodSteps.length - 1 && <span aria-hidden="true" className="text-slate-400">→</span>}
          </li>
        ))}
      </ol>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-slate-200 p-8 space-y-5">
          <h3 className="text-lg font-bold text-slate-900">How to read claims on this site</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Results, evidence cards, and constraint write-ups carry one of four labels, so a projection is never presented as a measurement.
          </p>
          <dl className="space-y-3">
            {epistemicOrder.map((status) => (
              <div key={status} className="grid sm:grid-cols-[8.5rem_1fr] items-start gap-1 sm:gap-3">
                <dt><EpistemicBadge status={status} /></dt>
                <dd className="text-sm text-slate-700 leading-relaxed">{epistemicDefinitions[status]}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-micro uppercase tracking-eyebrow text-slate-500">Published · v0.1.0</span>
            <span className="font-mono text-micro uppercase tracking-eyebrow text-measured border border-measured/30 bg-measured/10 rounded-md px-2 py-0.5">
              Benchmark 001 published
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-mono">unawain-public-models</h3>
          <p className="text-slate-600 leading-relaxed">
            Seven int8 Core ML model packages from the Unawain stack — NLLB-200 (including pruned variants), DistilBART, and Qwen2.5 — each with a model card, license metadata, and checksums.
          </p>
          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
            <span className="font-mono text-micro uppercase tracking-eyebrow text-slate-500">First finding · host Mac pilot</span>
            <p className="text-sm text-slate-700 leading-relaxed">
              None of the NLLB packages&apos; operations can run on the Neural Engine: int8 weights are expanded to fp32 math, so Core ML runs everything on the CPU. Pruning cut package size by 26–30% but changed per-call latency by at most 7%. iPhone latency and translation quality are next.
            </p>
          </div>
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-2">
            <a href={BENCHMARK_001_URL} target="_blank" rel="noreferrer" className="text-sm font-bold text-emerald-700 hover:text-emerald-800">
              Read benchmark 001 ↗
            </a>
            <a href={PUBLIC_MODELS_URL} target="_blank" rel="noreferrer" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              Models on GitHub ↗
            </a>
            <Link to="/work/unawain" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              Context: Unawain case study
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-slate-50 py-24 border-t border-b border-slate-200">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/3">
        <div className="rounded-2xl shadow-lg border border-slate-200 bg-white aspect-square w-full overflow-hidden">
          <img
            src="/ralph-headshot.jpeg"
            alt="Ralph Mattew Palomaria"
            width={497}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 space-y-6">
        <span className="block font-mono text-xs uppercase tracking-eyebrow text-slate-500">About the lab</span>
        <h2 className="text-3xl font-bold text-slate-900">An independent lab, run by one engineer</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Makata AI Edge Lab is run by Ralph Mattew Palomaria, an independent iOS and AI engineer. The apps are how the questions get tested: shipping to real users on real phones exposes trade-offs that benchmarks in isolation miss.
        </p>
        <p className="text-slate-600 leading-relaxed">
          The lab doesn&apos;t assume local AI is always better than cloud AI. The question is narrower: given a task, a device, and a resource budget, what system actually produces useful results — and where does it break?
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex text-sm font-bold text-emerald-700 hover:text-emerald-800">
            github.com/ralph-mattew ↗
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex text-sm font-bold text-emerald-700 hover:text-emerald-800">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Connect = () => (
  <section className="max-w-5xl mx-auto px-6 py-24">
    <div className="bg-brand rounded-3xl p-10 sm:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden border border-emerald-900">
      <div className="absolute inset-0 bg-woven-pattern opacity-10"></div>
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
          Working on something related?
        </h2>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed mt-4">
          Research collaboration, reproducing or challenging a result, or comparing measurements from your own devices — all welcome.
        </p>
        <div className="pt-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary" href="mailto:ralph@makata.ai" className="px-8 py-4 text-lg">
            Email the lab
          </Button>
          <Button variant="secondary" href={GITHUB_URL} className="px-8 py-4 text-lg">
            GitHub
          </Button>
          <Button variant="secondary" href="https://github.com/ralph-mattew/makata-edge-lab/blob/main/CONTRIBUTING.md" className="px-8 py-4 text-lg">
            Replicate a result
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  usePageMeta({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: '/' });

  return (
    <>
      <Hero />
      <SelectedWork />
      <EngineeringThemes />
      <OpenResearch />
      <About />
      <Connect />
    </>
  );
}
