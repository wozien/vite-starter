import { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import styleImport from 'vite-plugin-style-import'

export function createVitePlugins(viteEnv: Record<string, any>, isBuild: boolean) {
  const { VITE_USE_MOCK } = viteEnv

  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    vueJsx()
  ]

  if(VITE_USE_MOCK) {
    vitePlugins.push(viteMockServe({
      mockPath: 'mock',
      localEnabled: !isBuild,
      prodEnabled: false
    }))
  }
  
  // style import on demand
  if(isBuild) {
    vitePlugins.push(styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => {
            return `vant/es/${name}/style/index`
          }
        }
      ]
    }))
  }
  
  // others plugin

  return vitePlugins
}