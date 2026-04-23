import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: '#f2faf3',
          100: '#e0f4e3',
          500: '#2f9e44',
          700: '#1f6f31',
          900: '#164d22'
        }
      }
    }
  },
  plugins: []
};

export default config;
