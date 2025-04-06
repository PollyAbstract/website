import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import * as os from 'node:os';

const getHost = () => {
  const interfaces = Object.values(os.networkInterfaces()).flat();
  const ipv4 = interfaces.find(iface => iface?.family === 'IPv4' && !iface.internal)?.address;
  return ipv4 || '127.0.0.1';
};

export default defineConfig({
  plugins: [enhancedImages(), sveltekit()],
  resolve: {
    alias: {
      '~assets': resolve('./src/lib/assets'),
      '~components': resolve('./src/lib/components'),
      '~styles': resolve('./src/lib/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  server: {
    host: getHost(),
    port: 5173,
  },
});
