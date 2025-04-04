import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      '~assets': './src/lib/assets',
      '~components': './src/lib/components',
      '~styles': './src/lib/styles',
    },
  },
};

export default config;
