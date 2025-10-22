import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    // 'src/forms/index.ts',
    // 'src/layout/index.ts',
  ],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom'],
  clean: true,
  splitting: true,
  banner: {
    js: "'use client';",
  },
});