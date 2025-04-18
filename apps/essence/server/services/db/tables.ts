import { cuid2 } from 'drizzle-cuid2/postgres'
import { pgTable, timestamp } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
})
