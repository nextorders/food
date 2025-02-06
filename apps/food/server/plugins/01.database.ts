import process from 'node:process'
import { useCreateDatabase } from '@next-orders/database'

/**
 * DB init
 */
export default defineNitroPlugin(async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined')
  }

  useCreateDatabase(process.env.DATABASE_URL)

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
