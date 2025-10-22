import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/core/index.client.ts',
    'src/core/index.server.ts',
    'src/site/index.client.ts',
    'src/site/index.server.ts',
  ],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom'],
  clean: true,
  splitting: true
});