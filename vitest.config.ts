import { defineConfig } from 'vitest/config';

export default defineConfig({
  logLevel: 'info',
  test: {
    testTimeout: 15000,
    hookTimeout: 65000,
  },
})