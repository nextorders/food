import { cuid2 } from 'drizzle-cuid2/postgres'
import { relations } from 'drizzle-orm'
import { boolean, doublePrecision, integer, jsonb, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const channels = pgTable('channels', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  slug: text('slug').notNull(),
  name: text('name').notNull(),
  description: text('description'),
  conditions: text('conditions'),
  phone: text('phone'),
  countryCode: text('country_code').notNull(),
  currencyCode: text('currency_code').notNull(),
  timeZone: text('time_zone').notNull(),
  isActive: boolean('is_active').default(true),
  isDeliveryAvailable: boolean('is_delivery_available').default(true),
  isPickupAvailable: boolean('is_pickup_available').default(true),
  minAmountForDelivery: integer('min_amount_for_delivery'),
})

export const checkouts = pgTable('checkouts', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  status: text('status').default('CREATED'),
  deliveryMethod: text('delivery_method').default(''),
  paymentMethodId: text('payment_method_id').default(''),
  shippingPrice: doublePrecision('shipping_price').default(0),
  totalPrice: doublePrecision('total_price').default(0),
  name: text('name').default(''),
  phone: text('phone').default(''),
  time: timestamp({ precision: 3, mode: 'string' }).defaultNow(),
  timeType: text('time_type').default('ASAP'),
  discount: doublePrecision('discount'),
  warehouseId: text('warehouse_id'),
  street: text('street').default(''),
  flat: text('flat'),
  doorphone: text('doorphone'),
  entrance: text('entrance'),
  floor: text('floor'),
  addressNote: text('address_note'),
  note: text('note'),
  change: text('change'),
  channelId: cuid2('channel_id').notNull().references(() => channels.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const checkoutLines = pgTable('checkout_lines', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  quantity: integer('quantity').default(1),
  unitPrice: doublePrecision('unit_price').default(0),
  undiscountedUnitPrice: doublePrecision('undiscounted_unit_price').default(0),
  totalPrice: doublePrecision('total_price').default(0),
  undiscountedTotalPrice: doublePrecision('undiscounted_total_price').default(0),
  isGift: boolean('is_gift').default(false),
  checkoutId: cuid2('checkout_id').notNull().references(() => checkouts.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  productVariantId: cuid2('product_variant_id').notNull().references(() => productVariants.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const checkoutReceivers = pgTable('checkout_receivers', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  type: text('type').notNull(),
  data: jsonb('data'),
  channelId: cuid2('channel_id').notNull().references(() => channels.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const medias = pgTable('medias', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
})

export const menus = pgTable('menus', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  slug: text('slug').notNull(),
  name: text('name').notNull(),
  isActive: boolean('is_active').default(false),
  channelId: cuid2('channel_id').notNull().references(() => channels.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const menuCategories = pgTable('menu_categories', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  slug: text('slug').notNull(),
  name: text('name').notNull(),
  menuId: cuid2('menu_id').notNull().references(() => menus.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const paymentMethods = pgTable('payment_methods', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  name: text('name').notNull(),
  type: text('type').notNull(),
  channelId: cuid2('channel_id').notNull().references(() => channels.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const products = pgTable('products', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  slug: text('slug').notNull(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  isAvailableForPurchase: boolean('is_available_for_purchase').default(true),
  channelId: cuid2('channel_id').notNull().references(() => channels.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  categoryId: cuid2('category_id').notNull().references(() => menuCategories.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  mediaId: cuid2('media_id').references(() => medias.id, {
    onDelete: 'set null',
    onUpdate: 'cascade',
  }),
})

export const productVariants = pgTable('product_variants', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  name: text('name').notNull(),
  weightUnit: text('weight_unit').default('G'),
  weightValue: doublePrecision('weight_value').notNull(),
  gross: doublePrecision('gross').notNull(),
  net: doublePrecision('net'),
  sku: text('sku'),
  calories: doublePrecision('calories'),
  carbohydrate: doublePrecision('carbohydrate'),
  fat: doublePrecision('fat'),
  protein: doublePrecision('protein'),
  productId: cuid2('product_id').notNull().references(() => products.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const users = pgTable('users', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  isActive: boolean('is_active').default(true),
  isConfirmed: boolean('is_confirmed').default(false),
  isStaff: boolean('is_staff').default(false),
  name: text('name'),
  email: text('email'),
  channelId: cuid2('channel_id').notNull().references(() => channels.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const userCredentials = pgTable('user_credentials', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  login: text('login').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  userId: cuid2('user_id').notNull().references(() => users.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const userPermissions = pgTable('user_permissions', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  code: text('code').notNull(),
  userId: cuid2('user_id').notNull().references(() => users.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const warehouses = pgTable('warehouses', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  name: text('name').notNull(),
  address: text('address').notNull(),
  channelId: cuid2('channel_id').notNull().references(() => channels.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const workingDays = pgTable('working_days', {
  id: cuid2('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { precision: 3, mode: 'string' }).defaultNow(),
  day: text('day').notNull(),
  openHours: integer('open_hours').notNull(),
  openMinutes: integer('open_minutes').notNull(),
  closeHours: integer('close_hours').notNull(),
  closeMinutes: integer('close_minutes').notNull(),
  isActive: boolean('is_active').default(true),
  channelId: cuid2('channel_id').notNull().references(() => channels.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
})

export const channelsRelations = relations(channels, ({ many }) => ({
  paymentMethods: many(paymentMethods),
  warehouses: many(warehouses),
  menus: many(menus),
  products: many(products),
  checkouts: many(checkouts),
  checkoutReceivers: many(checkoutReceivers),
  users: many(users),
  workingDays: many(workingDays),
}))

export const checkoutsRelations = relations(checkouts, ({ many, one }) => ({
  lines: many(checkoutLines),
  channel: one(channels, {
    fields: [checkouts.channelId],
    references: [channels.id],
  }),
}))

export const checkoutLinesRelations = relations(checkoutLines, ({ one }) => ({
  checkout: one(checkouts, {
    fields: [checkoutLines.checkoutId],
    references: [checkouts.id],
  }),
  productVariant: one(productVariants, {
    fields: [checkoutLines.productVariantId],
    references: [productVariants.id],
  }),
}))

export const checkoutReceiverRelations = relations(checkoutReceivers, ({ one }) => ({
  channel: one(channels, {
    fields: [checkoutReceivers.channelId],
    references: [channels.id],
  }),
}))

export const menusRelations = relations(menus, ({ many, one }) => ({
  categories: many(menuCategories),
  channel: one(channels, {
    fields: [menus.channelId],
    references: [channels.id],
  }),
}))

export const menuCategoriesRelations = relations(menuCategories, ({ many, one }) => ({
  products: many(products),
  menu: one(menus, {
    fields: [menuCategories.menuId],
    references: [menus.id],
  }),
}))

export const paymentMethodsRelations = relations(paymentMethods, ({ one }) => ({
  channel: one(channels, {
    fields: [paymentMethods.channelId],
    references: [channels.id],
  }),
}))

export const productsRelations = relations(products, ({ many, one }) => ({
  variants: many(productVariants),
  media: one(medias, {
    fields: [products.mediaId],
    references: [medias.id],
  }),
  channel: one(channels, {
    fields: [products.channelId],
    references: [channels.id],
  }),
  category: one(menuCategories, {
    fields: [products.categoryId],
    references: [menuCategories.id],
  }),
}))

export const productVariantsRelations = relations(productVariants, ({ many, one }) => ({
  checkoutLines: many(checkoutLines),
  product: one(products, {
    fields: [productVariants.productId],
    references: [products.id],
  }),
}))

export const usersRelations = relations(users, ({ many, one }) => ({
  credentials: many(userCredentials),
  permissions: many(userPermissions),
  channel: one(channels, {
    fields: [users.channelId],
    references: [channels.id],
  }),
}))

export const userCredentialsRelations = relations(userCredentials, ({ one }) => ({
  user: one(users, {
    fields: [userCredentials.userId],
    references: [users.id],
  }),
}))

export const userPermissionsRelations = relations(userPermissions, ({ one }) => ({
  user: one(users, {
    fields: [userPermissions.userId],
    references: [users.id],
  }),
}))

export const warehousesRelations = relations(warehouses, ({ one }) => ({
  channel: one(channels, {
    fields: [warehouses.channelId],
    references: [channels.id],
  }),
}))

export const workingDaysRelations = relations(workingDays, ({ one }) => ({
  channel: one(channels, {
    fields: [workingDays.channelId],
    references: [channels.id],
  }),
}))
