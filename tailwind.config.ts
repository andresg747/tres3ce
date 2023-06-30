import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    height: () => ({
      auto: 'auto',
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: () => ({
      '0': '0',
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    extend: {
      fontFamily: {
        sans: ['var(--font-graphik)'],
        mont: ['Mont Heavy', 'sans-serif'],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      colors: {
        primaryRed: '#eb3f43',
        primaryBlue: '#3d42e8',
        darkGray: '#384359',
        lightGray: '#6b7285',
        lightestGray: '#c5c3c4'
      },
      gradientColorStops: {
        'gradient-1-start': '#eb3f43', // '#007CF0',
        'gradient-1-end': '#eb3f43', // '#00DFD8',
        'gradient-2-start': '#3d42e8', // '#7928CA',
        'gradient-2-end': '#3d42e8', // '#FF0080',
        'gradient-3-start': '#c5c3c4', // '#FF4D4D',
        'gradient-3-end': '#c5c3c4', // '#F9CB28',
      },
      keyframes: {
        'gradient-foreground-1': {
          'from, 16.667%, to': {
            opacity: '1',
          },
          '33.333%, 83.333%': {
            opacity: '0',
          },
        },
        'gradient-background-1': {
          'from, 16.667%, to': {
            opacity: '0',
          },
          '25%, 91.667%': {
            opacity: '1',
          },
        },
        'gradient-foreground-2': {
          'from, to': {
            opacity: '0',
          },
          '33.333%, 50%': {
            opacity: '1',
          },
          '16.667%, 66.667%': {
            opacity: '0',
          },
        },
        'gradient-background-2': {
          'from, to': {
            opacity: '1',
          },
          '33.333%, 50%': {
            opacity: '0',
          },
          '25%, 58.333%': {
            opacity: '1',
          },
        },
        'gradient-foreground-3': {
          'from, 50%, to': {
            opacity: '0',
          },
          '66.667%, 83.333%': {
            opacity: '1',
          },
        },
        'gradient-background-3': {
          'from, 58.333%, 91.667%, to': {
            opacity: '1',
          },
          '66.667%, 83.333%': {
            opacity: '0',
          },
        },
      },
      animation: {
        'gradient-background-1': 'gradient-background-1 8s infinite',
        'gradient-foreground-1': 'gradient-foreground-1 8s infinite',
        'gradient-background-2': 'gradient-background-2 8s infinite',
        'gradient-foreground-2': 'gradient-foreground-2 8s infinite',
        'gradient-background-3': 'gradient-background-3 8s infinite',
        'gradient-foreground-3': 'gradient-foreground-3 8s infinite',
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
