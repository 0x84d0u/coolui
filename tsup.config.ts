import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['package/*.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom'],
  clean: true,
  splitting: true
});