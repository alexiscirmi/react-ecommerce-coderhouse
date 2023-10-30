import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/coderhouse-react-project/',
  server: { host: true },
  plugins: [react()],
})
