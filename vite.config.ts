import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

const isDev = process.env.NODE_ENV === 'development';
// https://vitejs.dev/config/
export default defineConfig({
  base: isDev ? '/' : './',
  plugins: [vue(), viteMockServe({
    supportTs: true,
    logger: false,
    mockPath: './mock'
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true,
    https: false,
    proxy: {}
  }
})
