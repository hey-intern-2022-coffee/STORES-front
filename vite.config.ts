import { defineConfig } from 'vitest/config'
// import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src').replace(/\\/g, '/')
    }
  },
  plugins: [
    vue()
    // , manualChunksPlugin()
  ],
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
