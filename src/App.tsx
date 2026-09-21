import React, { useState, useEffect } from 'react';

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

    body {
      font-family: 'Inter', sans-serif;
      background-color: #f8fafc;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .bg-woven-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%2310b981' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    .shadow-soft { box-shadow: 0 4px 40px -2px rgba(0, 0, 0, 0.04); }
    .shadow-card { box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05); }

    html { scroll-behavior: smooth; }
  ` }} />
);

const Logo = ({ isDark = false }) => (
  <div className="flex items-center space-x-3 cursor-pointer">
    <div className="w-9 h-9 rounded-lg bg-emerald-900 flex items-center justify-center text-white font-bold tracking-tighter shadow-sm">M</div>
    <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
      MAKATA<span className="text-emerald-600">.ai</span>
    </span>
  </div>
);

const Button = ({ children, variant = 'primary', href, className = '' }) => {
  const baseStyle = 'font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white shadow-md',
  };

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </Tag>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#products' },
    { label: 'Blueprints', href: '#insights' },
    { label: 'Roadmap', href: '#services' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#"><Logo /></a>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-emerald-600 transition">
              {link.label}
            </a>
          ))}
          <Button variant="dark" href="mailto:ralph@makata.ai" className="!py-2.5 !px-5 text-sm">
            Contact
          </Button>
        </nav>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 px-6 py-4 flex flex-col space-y-4 shadow-lg">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium hover:text-emerald-600">
              {link.label}
            </a>
          ))}
          <Button variant="dark" href="mailto:ralph@makata.ai" className="w-full">
            Contact
          </Button>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-white border-b border-slate-200 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-woven-pattern z-0 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-28 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            On-device AI • privacy-first • local-first systems
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            I build AI products that run <span className="text-emerald-600">on the device, not in the cloud.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            MAKATA.ai is my portfolio and product lab for private, offline-ready AI experiences—showcasing live demos, system blueprints, and the next generation of on-device intelligence for real-world use.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Button variant="primary" href="#products" className="w-full sm:w-auto text-lg">
              Explore projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Button>
            <Button variant="secondary" href="#insights" className="w-full sm:w-auto text-lg">
              View blueprints ↓
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            <span className="bg-slate-100 border border-slate-200 px-3 py-2 rounded-full">iOS</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-2 rounded-full">React Native</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-2 rounded-full">Python</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-2 rounded-full">ONNX</span>
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
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Unawain</span>
                <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">ItanongMo</span>
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
      desc: 'Optimized for mobile memory limits, CPU performance, edge hardware, and offline reliability.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5v14m-7 0h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    },
    {
      title: 'Fast iteration, clear architecture',
      desc: 'Every prototype is documented with system design, trade-offs, and production roadmap thinking.',
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
      badge: 'System blueprint',
      body: 'Privacy-preserving retrieval pipelines built with local indexing, vector search, and secure document handling for offline use.',
    },
    {
      title: 'Edge voice and vision models',
      badge: 'Prototype',
      body: 'Small multimodal models tuned for mobile and device-level UX, with efficient run-time orchestration and low-latency inference.',
    },
    {
      title: 'Production roadmap for deployment',
      badge: 'Planning',
      body: 'A structured maturation path from demo to product: benchmarking, packaging, telemetry, operations, and secure release cycles.',
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
      name: 'Unawain',
      label: 'Beta live',
      summary: 'Offline document summarizer for confidential content and local contract review.',
      chips: ['iOS', 'PDF', 'Privacy', 'Local LLM'],
    },
    {
      name: 'ItanongMo',
      label: 'In development',
      summary: 'Multimodal voice + image assistant designed for multilingual Filipino communication.',
      chips: ['Voice', 'Vision', 'Tagalog', 'Edge AI'],
    },
    {
      name: 'Makata Edge Stack',
      label: 'Platform',
      summary: 'The foundation framework for building secure, device-first AI experiences across products.',
      chips: ['RAG', 'Models', 'Eval', 'Deployment'],
    },
  ];

  return (
    <section id="products" className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected projects</h2>
          <p className="text-slate-400 text-lg">A snapshot of my demos, prototypes, and system builds focused on local intelligence and production-ready edge AI.</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const roadmap = [
    {
      title: 'MVP demos',
      text: 'Launch polished local AI demos with clear product narratives and measurable UX value.',
    },
    {
      title: 'Reference architectures',
      text: 'Document secure system flows, model decisions, data pipelines, and edge deployment constraints.',
    },
    {
      title: 'Production readiness',
      text: 'Move from prototype to deployable product with evaluation, edge packaging, and release planning.',
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Roadmap</h2>
        <p className="text-slate-600 text-lg">From concept exploration to product execution, each phase builds toward a more durable, private AI platform.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {roadmap.map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-card transition flex flex-col">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-emerald-600">0{idx + 1}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
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
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Workspace" className="rounded-2xl shadow-lg border border-slate-200 object-cover aspect-square w-full" />
      </div>
      <div className="w-full md:w-2/3 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">About MAKATA.ai</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          This portfolio is a living archive of my work in on-device AI: product prototypes, architecture designs, experiments, and future products built for privacy, local performance, and meaningful user value.
        </p>
        <p className="text-slate-600 leading-relaxed">
          I focus on building systems that do not depend on cloud-only inference. That includes offline AI assistants, local retrieval pipelines, private language tools, and edge-native product experiences with a strong emphasis on reliability and human-centered design.
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
          I’m building the next generation of intelligent, offline-first products.
        </h2>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed mt-4">
          If you want to collaborate, review a concept, or explore an on-device AI product, let’s connect and turn the blueprint into a working system.
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

const Footer = () => (
  <footer className="border-t border-slate-200 py-12 bg-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <Logo isDark={false} />
      <p className="text-slate-500 text-sm text-center md:text-left">
        © 2026 MAKATA.ai • Built for private, local, and intelligent experiences.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <GlobalStyles />
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Insights />
        <Products />
        <Services />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
