import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tailwindForms from '@tailwindcss/forms';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss({
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      theme: {
        extend: {
          colors: {
            primary: '#1DA1F2',
            secondary: '#14171A',
          },
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
      transformer: 'postcss' // Cambia de lightningcss a postcss
    }
})
