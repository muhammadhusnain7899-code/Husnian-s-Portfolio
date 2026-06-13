import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'muhammad-husnain-elite-portfolio',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});