import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/core/**/*.{js,ts,jsx,tsx}',
    './src/site/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  plugins: [],
} satisfies Config;