import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        founders: ["Founders Grotesk", "sans-serif"],
        icomoon: ["IcoMoon", "sans-serif"],
        montreal: ["Neue Montreal", "sans-serif"],
      },
    },
  },
  plugins: [react(),tailwindcss()],
})
