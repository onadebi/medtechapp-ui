import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4500,
    proxy:{
      '/api':{
        target: 'http://localhost:5500',
        changeOrigin: true
      }
    }
  }
})