import { defineConfig } from 'vite';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  base: process.env.VITE_BASE_URL || '/', // Default to root if not defined
});