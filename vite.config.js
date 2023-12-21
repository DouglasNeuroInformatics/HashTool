import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [viteSingleFile()]
});