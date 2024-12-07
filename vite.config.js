import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        testers: resolve(__dirname, 'testers.html')
      }
    },
    cssCodeSplit: false,
    outDir: 'dist',
    assetsDir: 'assets'
  },
  css: {
    preprocessorOptions: {
      // Add any preprocessor options here if you're using SASS/LESS/etc
    }
  }
})
