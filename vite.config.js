import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-to-do-list/',
  server: { host: true },
  plugins: [react()],
})
