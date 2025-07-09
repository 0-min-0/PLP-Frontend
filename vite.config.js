// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssTailwind from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssTailwind({
          darkMode: ['class', '.dark-mode'], // permite que Tailwind use `.dark-mode`
          content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
          theme: {
            extend: {},
          },
          plugins: [],
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu']
    },
  },
  optimizeDeps: {
    exclude: ['lightningcss']
  }
})
