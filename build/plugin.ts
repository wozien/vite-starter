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
            // https://github.com/anncwb/vite-plugin-style-import/issues/10
            return `vant/lib/${name}/style/less`
          }
        }
      ]
    }))
  }
  
  // others plugin

  return vitePlugins
}