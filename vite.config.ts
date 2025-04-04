import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [enhancedImages(), sveltekit()],
  resolve: {
    alias: {
      '~assets': resolve('./src/lib/assets'),
      '~components': resolve('./src/lib/components'),
      '~styles': resolve('./src/lib/styles'),
    },
  },
});
