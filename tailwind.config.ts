import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'xs': '320px',
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        headerMobile: "url('/assets/mobile/bg-pattern-header.svg')",
        headerDesktop: "url('/assets/desktop/bg-pattern-header.svg')",
        headerTablet: "url('/assets/tablet/bg-pattern-header.svg')",
      },
      colors: {
        primary: {
          violet: '#5964E0',
          lightViolet: '#939BF4',
          veryDarkBlue: '#19202D',
          midnight: '#121721',
        },
        secondary: {
          white: '#FFFFFF',
          lightGrey: '#F4F6F8',
          Gray: '#9DAEC2',
          darkGrey: '#6E8098',
        },
      },
      fontFamily: {
        kumbhSans: ["var(--font-kumbhSans)"],
      },
    },
  },
  plugins: [],
};
export default config;
