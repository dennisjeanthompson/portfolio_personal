// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      hmr: {
        host: process.env.CODESPACE_NAME ? `${process.env.CODESPACE_NAME}-4321.app.github.dev` : 'localhost',
        clientPort: 443
      }
    }
  },

  integrations: [react()]
});