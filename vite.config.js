// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssTailwind from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      transformer: 'postcss',
      devSourcemap: true,
      plugins: [
        postcssTailwind({
          darkMode: ['class', '.dark-mode'],
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
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    exclude: ['lightningcss']
  }
})
