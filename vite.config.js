import { resolve } from 'path'
import { defineConfig } from 'vite'
const path = require('path')


export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  base: '/lesol-re/', 
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
      },

    },
    outDir: '../dist',
    emptyOutDir: true,

  },

});