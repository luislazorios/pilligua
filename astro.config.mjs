// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import typography from '@tailwindcss/typography';
import Icons from 'unplugin-icons/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
 site: 'https://luislazorios.github.io',
  
  // Agrega el nombre exacto de tu repositorio con una barra al inicio
  base: '/pilligua',
  integrations: [mdx()],
  vite: {
    plugins: [
      basicSsl(),
      tailwindcss(),
      Icons({
        compiler: 'astro',
      }),
    ],
  },
  adapter: cloudflare({
    imageService: 'compile',
  }),
});
