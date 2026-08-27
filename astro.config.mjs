// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  site: 'https://luislazorios.github.io',
  base: '/pilligua',
  trailingSlash: 'always',
  output: 'static', // Genera HTML/CSS/JS estático compatible con GitHub Pages
  integrations: [mdx()],
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: 'astro',
      }),
    ],
  },
});
