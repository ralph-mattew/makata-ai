import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const GlobalStyles = () => (
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

export const Logo = ({ isDark = false }: { isDark?: boolean }) => (
  <div className="flex items-center space-x-3 cursor-pointer">
    <div className="w-9 h-9 rounded-lg bg-emerald-900 flex items-center justify-center text-white font-bold tracking-tighter shadow-sm">M</div>
    <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
      MAKATA<span className="text-emerald-600">.ai</span>
    </span>
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
  { label: 'Projects', href: '/#products' },
  { label: 'Xylo case study', href: '/work/xylo' },
  { label: 'Unawain case study', href: '/work/unawain' },
  { label: 'Roadmap', href: '/#services' },
  { label: 'About', href: '/#about' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/"><Logo /></Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.href} className="hover:text-emerald-600 transition">
              {link.label}
            </Link>
          ))}
          <Button variant="dark" href="mailto:ralph@makata.ai" className="!py-2.5 !px-5 text-sm">
            Work with me
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
            <Link key={idx} to={link.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium hover:text-emerald-600">
              {link.label}
            </Link>
          ))}
          <Button variant="dark" href="mailto:ralph@makata.ai" className="w-full">
            Work with me
          </Button>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="border-t border-slate-200 py-12 bg-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="/"><Logo isDark={false} /></Link>
      <p className="text-slate-500 text-sm text-center md:text-left">
        © 2026 MAKATA.ai • Built for private, local, and intelligent experiences.
      </p>
    </div>
  </footer>
);

/**
 * Handles scroll restoration for the SPA: jumps to an in-page anchor when the
 * URL contains a hash (e.g. /#products, or navigating from another route to
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
