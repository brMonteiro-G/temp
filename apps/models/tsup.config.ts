import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: 'esm',
  platform: 'node',
  sourcemap: true,
  dts: true,
});
