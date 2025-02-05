import { resolve } from 'node:path'
import process from 'node:process'
import { useMigrateDatabase } from '@next-orders/database'

export default defineTask({
  meta: {
    name: 'db:migrate',
    description: 'Run database migrations',
  },
  async run() {
    const migrationFolder = resolve(process.cwd(), `server/migrations`)
    await useMigrateDatabase(migrationFolder)

    return {
      result: 'Migrations completed',
    }
  },
})
