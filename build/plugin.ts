import { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'

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

  // others plugin

  return vitePlugins
}