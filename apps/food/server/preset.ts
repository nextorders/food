import type { NitroPreset } from 'nitropack'
import { cp, mkdir, realpath } from 'node:fs/promises'
import { resolve } from 'node:path'

export default <NitroPreset>{
  extends: 'node-server',
  hooks: {
    async compiled(nitro) {
      /**
       * Copy database migrations to the output directory
       */
      const module = resolve('node_modules', '@next-orders/database')
      const source = resolve(await realpath(module), 'migrations')
      const destination = resolve(nitro.options.output.serverDir, 'migrations')

      await mkdir(destination, { recursive: true })
      await cp(source, destination, { recursive: true })
    },
  },
}
