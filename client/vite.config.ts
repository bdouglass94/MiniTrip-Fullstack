import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Forward API requests to Express to avoid cross-origin issues during development.
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})