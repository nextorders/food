import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import type * as tables from './tables'

export type { Database } from './connection'

export type Product = InferSelectModel<typeof tables.products>
export type ProductDraft = InferInsertModel<typeof tables.products>
