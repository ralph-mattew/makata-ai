import colors from 'tailwindcss/colors';

// Woven-pattern decorative background, previously defined as a bespoke `.bg-woven-pattern`
// CSS rule inside Layout.tsx's GlobalStyles. Moved here so it's a first-class Tailwind
// utility (`bg-woven-pattern`) instead of hand-written CSS duplicating theme values.
const wovenPatternBg =
  "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%2310b981' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Site background/text base colors, previously hardcoded as literal hex
        // (#f8fafc / #0f172a) in both src/styles.css and Layout.tsx's GlobalStyles.
        surface: colors.slate[50],
        ink: colors.slate[900],
        // Brand: the deep green used for the logo mark, favicon, and theme-color.
        brand: colors.emerald[950],
        // Accent = interactive (links, primary buttons). Not used for decoration or status.
        accent: colors.emerald[600],
        // Epistemic status (artifact04 "Evidence-first" / redesign constraint 5). Deliberately
        // distinct from the accent so evidence labels never read as buttons or links.
        measured: colors.sky[700],
        observed: colors.indigo[700],
        inferred: colors.amber[700],
        hypothesis: colors.slate[500],
      },
      fontSize: {
        // The repeated "eyebrow"/label micro-copy size, previously written inline
        // as the arbitrary value `text-[10px]` across CaseStudyUI.tsx and Home.tsx.
        micro: ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        // The repeated uppercase-label tracking, previously written inline as
        // `tracking-[0.12em]` across Layout.tsx, CaseStudyUI.tsx, Home.tsx and the case study pages.
        eyebrow: '0.12em',
      },
      borderRadius: {
        // One-off decorative radii from Home.tsx's hero terminal mockup, previously
        // written inline as `rounded-[2rem]` / `rounded-[2.5rem]`.
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        // Previously bespoke `.shadow-soft` / `.shadow-card` CSS rules in Layout.tsx's GlobalStyles.
        soft: '0 4px 40px -2px rgba(0, 0, 0, 0.04)',
        card: '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'woven-pattern': wovenPatternBg,
      },
    },
  },
  plugins: [],
};
