import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
/* eslint-disable import/no-extraneous-dependencies */
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    // vitePluginFaviconsInject(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
});
