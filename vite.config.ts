import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { resolve } from 'path'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/plugin'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env)
  const isBuild = command === 'build'

  return {
    root,
    resolve: {
      alias: [
        {
          find: /^@\//,
          replacement: pathResolve('src') + '/'
        },
        // 由于vite暂时不支持less的~导入, 需要替换成空字符串
        {
          find: /^~/,      
          replacement: ''
        }
      ]
    },
    
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // 导入变量和mixin样式，避免在每个组件@import
            hack: `true; @import (reference) "${resolve('src/styles/config.less')}";`,
          },
          javascriptEnabled: true
        }
      }
    },
  
    plugins: createVitePlugins(viteEnv, isBuild),

    server: {
      port: 8080,
      hmr: {
        overlay: false
      }
    }
  }
}
