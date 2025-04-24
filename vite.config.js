import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import React from 'react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],
  
})
