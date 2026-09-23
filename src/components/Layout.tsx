import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Font import only — background/text base colors, scroll-behavior, and the
// bg-woven-pattern/shadow-soft/shadow-card utilities all now come from
// tailwind.config.js theme tokens (see src/styles.css for the base rules).
export const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  ` }} />
);

export const GITHUB_URL = 'https://github.com/ralph-mattew';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ralphmattewpalomaria/';

// Mark: a single-stroke "M" read as a signal path that terminates in a node —
// the model reaching the device. Mirrors public/favicon.svg.
export const LogoMark = ({ className = 'w-9 h-9' }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`${className} shrink-0 shadow-sm rounded-lg`} aria-hidden="true">
    <rect width="32" height="32" rx="7" fill="#022c22" />
    <path d="M8 23V9.5l8 8 8-8V23" fill="none" stroke="#ffffff" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="23" r="2.9" fill="#34d399" />
  </svg>
);

export const Logo = ({ isDark = false }: { isDark?: boolean }) => (
  <div className="flex items-center gap-3 cursor-pointer">
    <LogoMark />
    <div className="leading-none">
      <span className={`block text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Makata</span>
      <span className={`block mt-1 font-mono text-micro uppercase tracking-eyebrow ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        AI Edge Lab
      </span>
    </div>
  </div>
);

type ButtonVariant = 'primary' | 'secondary' | 'dark';

export const Button = ({
  children,
  variant = 'primary',
  href,
  className = '',
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
}) => {
  const baseStyle = 'font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2';
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white shadow-md',
  };
  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (!href) {
    return <button className={combinedClassName}>{children}</button>;
  }

  const isExternal = /^https?:\/\//.test(href) || href.startsWith('mailto:');
  if (isExternal) {
    return (
      <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" className={combinedClassName}>
        {children}
      </a>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={combinedClassName}>
      {children}
    </Link>
  );
};

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Research', href: '/#research' },
  { label: 'About', href: '/#about' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Project pages open on a dark hero; the transparent header needs light text there.
  const onDark = !isScrolled && pathname.startsWith('/work/');

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/"><Logo isDark={onDark} /></Link>

        <nav className={`hidden md:flex items-center space-x-8 text-sm font-medium ${onDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.href} className={`${onDark ? 'hover:text-white' : 'hover:text-emerald-600'} transition`}>
              {link.label}
            </Link>
          ))}
          <Button variant={onDark ? 'secondary' : 'dark'} href="mailto:edgelab@makata.ai" className="!py-2.5 !px-5 text-sm">
            Connect
          </Button>
        </nav>

        <button
          className={`md:hidden p-2 ${onDark ? 'text-slate-200' : 'text-slate-600'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
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
        <div id="mobile-menu" className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 px-6 py-4 flex flex-col space-y-4 shadow-lg">
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium hover:text-emerald-600">
              {link.label}
            </Link>
          ))}
          <Button variant="dark" href="mailto:edgelab@makata.ai" className="w-full">
            Connect
          </Button>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="border-t border-slate-200 py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-12">
      <div className="space-y-4 max-w-sm">
        <Link to="/"><Logo isDark={false} /></Link>
        <p className="text-slate-500 text-sm leading-relaxed">
          Research and engineering for useful AI on constrained devices. Methods, code, and benchmarks are published as they&apos;re validated.
        </p>
      </div>

      <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
        {navLinks.map((link, idx) => (
          <Link key={idx} to={link.href} className="hover:text-emerald-600 transition">
            {link.label}
          </Link>
        ))}
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition">
          GitHub
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition">
          LinkedIn
        </a>
        <a href="mailto:edgelab@makata.ai" className="hover:text-emerald-600 transition">
          edgelab@makata.ai
        </a>
      </nav>
    </div>

    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100">
      <p className="text-slate-500 text-sm">
        © 2026 Makata AI Edge Lab · makata.ai
      </p>
    </div>
  </footer>
);

/**
 * Handles scroll restoration for the SPA: jumps to an in-page anchor when the
 * URL contains a hash (e.g. /#work, or navigating from another route to
 * /work/xylo#top), and resets scroll position to the top on plain route changes.
 */
export const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Wait a tick for the target page to render before scrolling.
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0 });
    return undefined;
  }, [location.pathname, location.hash]);

  return null;
};
