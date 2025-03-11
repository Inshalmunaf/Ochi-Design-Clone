import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["FoundersGrotesk", "sans-serif"], // Custom font
      },
    },
  },
  plugins: [react(),tailwindcss()],
})
