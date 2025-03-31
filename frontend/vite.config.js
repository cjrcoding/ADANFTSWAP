import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      "wks-absorbed-broccoli-avh77i.us1.demeter.run"
    ]
  }
})
