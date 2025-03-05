import tsconfigPaths from 'vite-tsconfig-paths'
import { defineProject, mergeConfig } from 'vitest/config'
import baseConfig from '../../vitest.config'

export default mergeConfig(baseConfig, defineProject({
  plugins: [tsconfigPaths()],
}))
