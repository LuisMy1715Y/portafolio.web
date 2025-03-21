import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [tailwind()],

  // Esto es clave para Vercel
  output: "static",

  adapter: vercel()
});