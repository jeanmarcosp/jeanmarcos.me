import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
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
