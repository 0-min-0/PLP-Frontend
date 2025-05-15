import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tailwindForms from '@tailwindcss/forms'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss({
    content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#1DA1F2',
          secondary: '#14171A',
        },
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1680px',
      },
    },
    plugins: [
      tailwindForms,
    ],
    darkMode: 'class',
    variants: {
      extend: {
        backgroundColor: ['active'],
        textColor: ['active'],
      },
    },
  })],
  css: {
    transformer: 'postcss'
  }
})
