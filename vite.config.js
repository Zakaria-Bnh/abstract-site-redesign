import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({build: {
  rollupOptions: {
    input: 'src/main.jsx', // Adjust the path as needed
  },
},
  plugins: [react()],
})
