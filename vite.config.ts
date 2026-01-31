import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 25589,
    allowedHosts: ['lynxhost.xiiaa.lol'],
    allowedHosts: ['node.zemii.xyz'],
  }
})
