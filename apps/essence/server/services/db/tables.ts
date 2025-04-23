import type { LocaleValue, MediaFormat, WeightUnit } from '@nextorders/schema'
import { cuid2 } from 'drizzle-cuid2/postgres'
import { relations } from 'drizzle-orm'
import { boolean, integer, jsonb, numeric, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  slug: varchar('slug').notNull(),
  isAvailableForPurchase: boolean('is_available_for_purchase').notNull().default(true),
  name: jsonb('name').notNull().default([]).$type<LocaleValue[]>(),
  description: jsonb('description').notNull().default([]).$type<LocaleValue[]>(),
  mediaId: cuid2('media_id').references(() => media.id),
})

export const productVariants = pgTable('product_variants', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  name: jsonb('name').notNull().default([]).$type<LocaleValue[]>(),
  weightValue: numeric('weight_value', { mode: 'number' }).notNull(),
  weightUnit: varchar('weight_unit').notNull().$type<WeightUnit>(),
  gross: numeric('gross', { mode: 'number' }).notNull(),
  net: numeric('net', { mode: 'number' }),
  calories: numeric('calories', { mode: 'number' }),
  protein: numeric('protein', { mode: 'number' }),
  fat: numeric('fat', { mode: 'number' }),
  carbohydrate: numeric('carbohydrate', { mode: 'number' }),
  sku: varchar('sku'),
  productId: cuid2('product_id').notNull().references(() => products.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const media = pgTable('media', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
})

export const mediaItems = pgTable('media_items', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  url: varchar('url').notNull(),
  size: integer('size').notNull(),
  format: varchar('format').notNull().$type<MediaFormat>(),
  mediaId: cuid2('media_id').notNull().references(() => media.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const productRelations = relations(products, ({ one, many }) => ({
  variants: many(productVariants),
  media: one(media, { fields: [products.mediaId], references: [media.id] }),
}))

export const productVariantRelations = relations(productVariants, ({ one }) => ({
  product: one(products, { fields: [productVariants.productId], references: [products.id] }),
}))

export const mediaRelations = relations(media, ({ many }) => ({
  items: many(mediaItems),
}))

export const mediaItemRelations = relations(mediaItems, ({ one }) => ({
  media: one(media, { fields: [mediaItems.mediaId], references: [media.id] }),
}))
