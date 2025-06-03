import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/iasm-solutions-website/',
  plugins: [react( )],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
