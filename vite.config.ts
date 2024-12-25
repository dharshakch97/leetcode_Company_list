import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss('./tailwind.config.js')],
    }
  },
  plugins: [react()],
  base: "/leetcode_Company_list"
})
