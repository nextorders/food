import type { Database } from './connection'
import { resolve } from 'node:path'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { createConnection } from './connection'

let instance: Database | null = null

export function useCreateDatabase(databaseURL: string) {
  instance = createConnection(databaseURL)
}

export async function useMigrateDatabase(migrationFolder: string) {
  if (!instance) {
    throw new Error('Database is not created')
  }

  await migrate(instance, {
    migrationsFolder: resolve(migrationFolder),
  })
}

export function useDatabase(): Database {
  if (!instance) {
    throw new Error('Database is not created')
  }

  return instance
}
