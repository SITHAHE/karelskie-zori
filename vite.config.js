import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Относительная база — чтобы сайт работал и в подпапке (GitHub Pages),
  // и в корне (Netlify/свой домен) без правок.
  base: './',
  plugins: [react()],
})
