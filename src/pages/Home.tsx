import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Layout';

const Hero = () => {
  return (
    <section className="relative bg-white border-b border-slate-200 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-woven-pattern z-0 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-28 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            Available for on-device AI engagements
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            I build AI products that run <span className="text-emerald-600">on the device, not in the cloud.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            MAKATA.ai is my portfolio and product lab for private, offline-ready AI experiences. Two of my apps — Xylo and Unawain — are live on the App Store, built on production-grade on-device RAG and multilingual summarization pipelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Button variant="primary" href="#products" className="w-full sm:w-auto text-lg">
              Explore projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Button>
            <Button variant="secondary" href="mailto:ralph@makata.ai" className="w-full sm:w-auto text-lg">
              Work with me
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            <span className="bg-slate-100 border border-slate-200 px-3 py-2 rounded-full">iOS</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-2 rounded-full">Swift / SwiftUI</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-2 rounded-full">On-device LLMs</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-2 rounded-full">RAG</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-2 rounded-full">Edge AI</span>
          </div>
        </div>

        <div className="flex-1 w-full relative hidden md:block">
          <div className="absolute inset-0 bg-emerald-500 rounded-[2.5rem] transform rotate-3 scale-105 opacity-10 blur-xl"></div>
          <div className="relative bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-800 overflow-hidden">
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div className="ml-4 text-xs font-mono text-slate-400">makata.edge.system</div>
            </div>
            <div className="p-6 bg-slate-950 text-slate-200 font-mono text-sm leading-7">
              <div className="text-emerald-400">$ makata launch --offline</div>
              <div className="mt-4 text-slate-300">✓ local model loaded</div>
              <div className="text-slate-300">✓ context memory active</div>
              <div className="text-slate-300">✓ private retrieval pipeline</div>
              <div className="text-slate-300">✓ secure inference on device</div>
              <div className="mt-6 flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Xylo</span>
                <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">Unawain</span>
                <span className="px-2 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">Edge RAG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefitsData = [
    {
      title: 'Private by default',
      desc: 'Data stays local. No cloud dependency for core inference, memory, or document processing.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
    },
    {
      title: 'Built for real constraints',
      desc: 'Optimized for mobile memory limits, CPU/GPU performance, thermal throttling, and offline reliability.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5v14m-7 0h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    },
    {
      title: 'Shipped, not just prototyped',
      desc: 'Every architecture here has already shipped to production and the App Store — documented end to end.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    },
  ];

  return (
    <section id="benefits" className="max-w-7xl mx-auto px-6 py-24 border-b border-slate-200">
      <div className="grid md:grid-cols-3 gap-8">
        {benefitsData.map((b, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 space-y-5 hover:-translate-y-1 transition duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{b.icon}</svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{b.title}</h3>
            <p className="text-slate-600 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Insights = () => {
  const blueprintCards = [
    {
      title: 'Local-first RAG architecture',
      badge: 'Shipped in Xylo',
      body: 'Hybrid summary + retrieval pipeline: documents are summarized once, then chunked, embedded, and retrieved on-device for grounded, cited Q&A.',
    },
    {
      title: 'Multilingual on-device translation',
      badge: 'Shipped in Unawain',
      body: 'Structured translation pipeline that preserves markdown formatting and protects entities (amounts, names, dates) across five Philippine languages.',
    },
    {
      title: 'Production roadmap for deployment',
      badge: 'Playbook',
      body: 'A structured maturation path from demo to App Store release: device-tiered model selection, thermal throttling, evaluation, and packaging.',
    },
  ];

  return (
    <section id="insights" className="bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Demo archives + architecture blueprints</h2>
          <p className="mt-4 text-slate-600 text-lg">
            This is where I document what I have built, what I am learning, and what I am preparing for the next production release cycle.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blueprintCards.map((card, idx) => (
            <article key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-card transition">
              <div className="mb-4 inline-flex items-center rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                {card.badge}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const projectCards = [
    {
      name: 'Xylo',
      label: 'Live on App Store',
      summary: 'On-device document intelligence: scan, summarize, and chat with any document using a hybrid RAG pipeline with multi-backend model selection (Apple FoundationModels → Gemma → Qwen3).',
      chips: ['iOS', 'RAG', 'On-device LLM', 'Swift'],
      caseStudyHref: '/work/xylo',
      links: [
        { label: 'App Store', href: 'https://apps.apple.com/us/app/xylo-ai/id6771778565' },
        { label: 'Live site', href: 'https://xylo.makata.ai' },
        { label: 'Source', href: 'https://github.com/ralph-mattew/xylo' },
      ],
    },
    {
      name: 'Unawain',
      label: 'Live on App Store',
      summary: 'Offline document summarizer built for Filipino users, with local translation and dialect-aware summarization for confidential documents.',
      chips: ['iOS', 'PDF', 'Privacy', 'Local LLM'],
      caseStudyHref: '/work/unawain',
      links: [
        { label: 'App Store', href: 'https://apps.apple.com/us/app/unawain/id6763873149' },
        { label: 'Live site', href: 'https://unawain.makata.ai' },
        { label: 'Source', href: 'https://github.com/ralph-mattew/unawain' },
      ],
    },
    {
      name: 'ItanongMo',
      label: 'Concept',
      summary: 'Multimodal voice + image assistant designed for multilingual Filipino communication.',
      chips: ['Voice', 'Vision', 'Tagalog', 'Edge AI'],
      caseStudyHref: null,
      links: [],
    },
  ];

  return (
    <section id="products" className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected projects</h2>
          <p className="text-slate-400 text-lg">A snapshot of my demos, shipped apps, and system builds focused on local intelligence and production-ready edge AI.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projectCards.map((project, idx) => (
            <div key={idx} className="bg-slate-800 border border-slate-700 rounded-3xl p-7 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-400 border border-emerald-800 bg-emerald-900/40 px-3 py-1 rounded-full">{project.label}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{project.summary}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-slate-600 bg-slate-700/60 px-2.5 py-1 text-xs text-slate-200">{chip}</span>
                ))}
              </div>
              {(project.caseStudyHref || project.links.length > 0) && (
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t border-slate-700 mt-auto">
                  {project.caseStudyHref && (
                    <Link
                      to={project.caseStudyHref}
                      className="text-sm font-bold text-white hover:text-emerald-300 pt-4 flex items-center gap-1"
                    >
                      Read case study
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                  )}
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 pt-4 flex items-center gap-1"
                    >
                      {link.label}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudy = () => {
  const cards = [
    {
      name: 'Xylo',
      description: 'Hybrid Summary + RAG document chat with multi-backend model selection (FoundationModels → Gemma → Qwen3), running entirely on-device.',
      href: '/work/xylo',
    },
    {
      name: 'Unawain',
      description: 'Offline analysis and dialect-aware translation pipeline for Filipino, Cebuano, Ilocano, Pangasinan, and Waray — with entity protection.',
      href: '/work/unawain',
    },
  ];

  return (
    <section id="case-study" className="bg-white py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
            Case studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Two shipped apps, two on-device AI architectures</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Both are live on the App Store today. Read the full architecture breakdown — pipelines, model selection, retrieval strategy, and real performance numbers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <Link
              key={card.name}
              to={card.href}
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col gap-4 hover:border-emerald-300 hover:shadow-card transition"
            >
              <h3 className="text-2xl font-bold text-slate-900">{card.name}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">{card.description}</p>
              <span className="text-sm font-bold text-emerald-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                Read the full case study
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const engagements = [
    {
      title: 'On-device AI feasibility',
      text: 'A short technical assessment of whether your product idea can run on-device: model selection, memory/thermal budget, and a go/no-go recommendation.',
    },
    {
      title: 'Prototype to production',
      text: 'I take a concept through architecture, model integration, and evaluation, to a real, submitted App Store build — the same path Xylo and Unawain took.',
    },
    {
      title: 'Architecture review & advisory',
      text: 'Ongoing or one-off technical review for teams building edge AI: RAG design, device-tiered model strategy, and privacy-first data flows.',
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How we can work together</h2>
        <p className="text-slate-600 text-lg">If you&apos;re exploring, building, or scaling an on-device AI product, here&apos;s where I typically plug in.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {engagements.map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-card transition flex flex-col">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-emerald-600">0{idx + 1}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.text}</p>
            <a href="mailto:ralph@makata.ai" className="text-sm font-bold text-emerald-700 hover:text-emerald-800 mt-4 inline-flex items-center gap-1">
              Discuss this
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="bg-slate-50 py-24 border-t border-b border-slate-200">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/3">
        <div className="rounded-2xl shadow-lg border border-slate-200 bg-slate-900 aspect-square w-full flex items-center justify-center">
          <span className="text-6xl font-extrabold text-emerald-500 tracking-tighter">RM</span>
        </div>
      </div>
      <div className="w-full md:w-2/3 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">About MAKATA.ai</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          I&apos;m Ralph Mattew Palomaria, an independent iOS and AI engineer. MAKATA.ai is a living archive of my work in on-device AI: shipped products, architecture designs, experiments, and what I&apos;m building next — all built for privacy, local performance, and meaningful user value.
        </p>
        <p className="text-slate-600 leading-relaxed">
          I focus on systems that don&apos;t depend on cloud-only inference: offline document intelligence, local retrieval pipelines, private language tools, and edge-native product experiences with a strong emphasis on reliability and human-centered design.
        </p>
      </div>
    </div>
  </section>
);

const CallToAction = () => (
  <section className="max-w-5xl mx-auto px-6 py-24">
    <div className="bg-emerald-950 rounded-3xl p-10 sm:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden border border-emerald-900">
      <div className="absolute inset-0 bg-woven-pattern opacity-10"></div>
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
          Looking to build an on-device AI product?
        </h2>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed mt-4">
          I help teams and founders take on-device AI ideas from concept to a shipped, production-grade release — the same process behind Xylo and Unawain. Let&apos;s talk about your project.
        </p>
        <div className="pt-8 flex justify-center">
          <Button variant="primary" href="mailto:ralph@makata.ai" className="px-8 py-4 text-lg">
            Reach out
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Insights />
      <Products />
      <CaseStudy />
      <Services />
      <About />
      <CallToAction />
    </>
  );
}
