import { useCreateDatabase } from '@next-orders/database'

/**
 * DB init
 */
export default defineNitroPlugin(async () => {
  const runtimeConfig = useRuntimeConfig()

  if (!runtimeConfig.databaseURL) {
    throw new Error('APP_DATABASE_URL is not defined')
  }

  useCreateDatabase(runtimeConfig.databaseURL)

  // In dev mode we don't execute migrations, for this we use the command `pnpm db:migrate` in `@next-orders/database`
  if (import.meta.dev) {
    return
  }

  const tasks = [
    'db:migrate',
  ]

  for (const task of tasks) {
    await runTask<string>(task)
  }
})
