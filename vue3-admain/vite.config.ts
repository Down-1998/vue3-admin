import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:3001
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'src'),
      "com":path.resolve(__dirname,'src/components')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
