import path from 'path';

import config from '@douglasneuroinformatics/ui/tailwind.config';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [...config.content, path.resolve(__dirname, './src/**/*.{js,ts,jsx,tsx}')],
  presets: [config],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    }
  }
};
