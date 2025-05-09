import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite conexões de qualquer IP
    port: 5173,  // Certifique-se de que a porta está correta
  },
})
