// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Or you can set your IP directly like '192.168.1.100'
    port: 5173, // Change if needed
  },
});