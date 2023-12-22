import path from 'path';

import config from '@douglasneuroinformatics/ui/tailwind.config';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [...config.content, path.resolve(__dirname, './src/**/*.{js,ts,jsx,tsx}')],
  presets: [config],
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.text-muted': {
          '@apply text-slate-600 dark:text-slate-300': {}
        }
      });
    })
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    }
  }
};
