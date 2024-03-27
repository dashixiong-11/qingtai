import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue() ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      // 全局样式引入
      scss: {
        // 文件路径，注意最后需要添加 ';'
        additionalData: '@import "./styles/variables.scss";',
        javascriptEnabled: true
      }
    }
  },
  server: {
    proxy: {
      '/areas_v3': {
        target: 'https://geo.datav.aliyun.com',
        changeOrigin: true,
      }
    }
  }
})
