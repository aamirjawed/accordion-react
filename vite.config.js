import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
})
