import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { configDefaults } from 'vitest/config';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import removeConsole from 'vite-plugin-remove-console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV !== 'production';

// SSL cert paths (development only)
const keyPath = path.resolve(__dirname, '../../backend/cert/key.pem');
const certPath = path.resolve(__dirname, '../../backend/cert/cert.pem');

const httpsConfig =
  isDev && fs.existsSync(keyPath) && fs.existsSync(certPath)
    ? {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      }
    : undefined;

export default defineConfig({
  base: isDev ? '/' : '/savorly-frontend/',
  plugins: [
    react(),
    removeConsole(),
    ...(isDev
      ? [
          nodePolyfills({
            protocol: true,
            buffer: true,
            crypto: true,
            events: true,
          }),
        ]
      : []),
  ],

  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },

  optimizeDeps: {
    exclude: ['bcryptjs', 'mysql2'],
    include: ['crypto', 'events'],
  },

  server: {
    https: httpsConfig,
    watch: {
      usePolling: true,
    },
    ...(isDev && {
      proxy: {
        '/api': {
          target: 'https://localhost:5001',
          changeOrigin: true,
          secure: false,
        },
        '/uploads': {
          target: 'https://localhost:5001',
          changeOrigin: true,
          secure: false,
        },
      },
    }),
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    exclude: [...configDefaults.exclude, 'node_modules'],
  },
});
