import type { CountryCode, CurrencyCode, Locale, LocaleValue, MediaFormat, PermissionCode, TimeZone, WeightUnit } from '@nextorders/schema'
import { cuid2 } from 'drizzle-cuid2/postgres'
import { relations } from 'drizzle-orm'
import { boolean, integer, jsonb, numeric, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const options = pgTable('options', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  name: jsonb('name').notNull().default([]).$type<LocaleValue[]>(),
  description: jsonb('description').notNull().default([]).$type<LocaleValue[]>(),
  currencyCode: varchar('currency_code').notNull().$type<CurrencyCode>(),
  countryCode: varchar('country_code').notNull().$type<CountryCode>(),
  defaultLocale: varchar('default_locale').notNull().$type<Locale>(),
  timeZone: varchar('time_zone').notNull().$type<TimeZone>(),
})

export const users = pgTable('users', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  name: varchar('name').notNull(),
  email: varchar('email'),
  isActive: boolean('is_active').notNull().default(true),
  isConfirmed: boolean('is_confirmed').notNull().default(false),
})

export const userPermissions = pgTable('user_permissions', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  code: varchar('code').notNull().$type<PermissionCode>(),
  userId: cuid2('user_id').notNull().references(() => users.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const userCredentials = pgTable('user_credentials', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  login: varchar('login').notNull(),
  password: varchar('password').notNull(),
  userId: cuid2('user_id').notNull().references(() => users.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const channels = pgTable('channels', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  slug: varchar('slug').notNull(),
  name: jsonb('name').notNull().default([]).$type<LocaleValue[]>(),
  description: jsonb('description').notNull().default([]).$type<LocaleValue[]>(),
  conditions: jsonb('conditions').notNull().default([]).$type<LocaleValue[]>(),
  copyright: jsonb('copyright').notNull().default([]).$type<LocaleValue[]>(),
  currencyCode: varchar('currency_code').notNull().$type<CurrencyCode>(),
  countryCode: varchar('country_code').notNull().$type<CountryCode>(),
  defaultLocale: varchar('default_locale').notNull().$type<Locale>(),
  timeZone: varchar('time_zone').notNull().$type<TimeZone>(),
  isActive: boolean('is_active').notNull().default(true),
  isDeliveryAvailable: boolean('is_delivery_available').notNull().default(true),
  isPickupAvailable: boolean('is_pickup_available').notNull().default(true),
  minAmountForDelivery: numeric('min_amount_for_delivery', { mode: 'number' }),
})

export const menus = pgTable('menus', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  slug: varchar('slug').notNull(),
  name: varchar('name').notNull(),
  isActive: boolean('is_active').notNull().default(false),
})

export const menuCategories = pgTable('menu_categories', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  slug: varchar('slug').notNull(),
  name: jsonb('name').notNull().default([]).$type<LocaleValue[]>(),
  icon: varchar('icon'),
  menuId: cuid2('menu_id').notNull().references(() => menus.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

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

export const productsInMenuCategories = pgTable('products_in_menu_categories', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).notNull().defaultNow(),
  menuCategoryId: cuid2('menu_category_id').notNull().references(() => menuCategories.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
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

export const userRelations = relations(users, ({ many }) => ({
  credentials: many(userCredentials),
  permissions: many(userPermissions),
}))

export const userPermissionRelations = relations(userPermissions, ({ one }) => ({
  user: one(users, { fields: [userPermissions.userId], references: [users.id] }),
}))

export const userCredentialRelations = relations(userCredentials, ({ one }) => ({
  user: one(users, { fields: [userCredentials.userId], references: [users.id] }),
}))

export const menuRelations = relations(menus, ({ many }) => ({
  categories: many(menuCategories),
}))

export const menuCategoryRelations = relations(menuCategories, ({ one, many }) => ({
  menu: one(menus, { fields: [menuCategories.menuId], references: [menus.id] }),
  products: many(productsInMenuCategories),
}))

export const productRelations = relations(products, ({ one, many }) => ({
  variants: many(productVariants),
  media: one(media, { fields: [products.mediaId], references: [media.id] }),
  categories: many(productsInMenuCategories),
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
