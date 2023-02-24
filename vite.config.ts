import { defineConfig } from 'vite';
import viteEslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    })
  ]
});
