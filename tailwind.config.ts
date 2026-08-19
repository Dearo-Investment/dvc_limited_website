import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-deep': '#1B0E33',
        'primary-darker': '#0D0819',
        'primary-light': '#2E1B54',
        'primary-rule': 'rgba(255,255,255,0.08)',
        accent: {
          gold: '#C6A15B',
          'gold-light': '#E4C87E',
          violet: '#8B5CF6',
        },
        neutral: {
          white: '#FFFFFF',
          offwhite: '#F7F4FB',
          ink: '#160B2B',
          muted: '#B7ACD1',
          mutedDark: '#6E6389',
        },
      },
      fontFamily: {
        heading: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.25), transparent)',
        'gold-line':
          'linear-gradient(90deg, transparent, #C6A15B, transparent)',
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(198,161,91,0.35)',
      },
      maxWidth: {
        content: '1440px',
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
