import type { Config } from 'tailwindcss';

export default {
  content: [
    './package/**/*.{js,ts,jsx,tsx}',

    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/slots/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  plugins: [],
} satisfies Config;