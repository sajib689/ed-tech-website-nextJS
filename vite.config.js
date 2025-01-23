import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.VITE_BASE_URL || '/', // Default to root if not defined
});
