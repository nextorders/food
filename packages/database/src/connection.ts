import type { NodePgDatabase } from 'drizzle-orm/node-postgres'
import { drizzle } from 'drizzle-orm/node-postgres'
import pg from 'pg'
import * as tables from './tables'

export type Database = NodePgDatabase<typeof tables>

export function createConnection(connectionString: string): Database {
  const pool = new pg.Pool({ connectionString })

  return drizzle({
    client: pool,
    schema: tables,
  })
}
