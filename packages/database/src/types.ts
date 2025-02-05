import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import type * as tables from './tables'

export type { Database } from './connection'

export type Channel = InferSelectModel<typeof tables.channels>
export type ChannelDraft = InferInsertModel<typeof tables.channels>

export type Checkout = InferSelectModel<typeof tables.checkouts>
export type CheckoutDraft = InferInsertModel<typeof tables.checkouts>

export type CheckoutLine = InferSelectModel<typeof tables.checkoutLines>
export type CheckoutLineDraft = InferInsertModel<typeof tables.checkoutLines>

export type CheckoutReceiver = InferSelectModel<typeof tables.checkoutReceivers>
export type CheckoutReceiverDraft = InferInsertModel<typeof tables.checkoutReceivers>

export type Media = InferSelectModel<typeof tables.medias>
export type MediaDraft = InferInsertModel<typeof tables.medias>

export type Menu = InferSelectModel<typeof tables.menus>
export type MenuDraft = InferInsertModel<typeof tables.menus>

export type MenuCategory = InferSelectModel<typeof tables.menuCategories>
export type MenuCategoryDraft = InferInsertModel<typeof tables.menuCategories>

export type PaymentMethod = InferSelectModel<typeof tables.paymentMethods>
export type PaymentMethodDraft = InferInsertModel<typeof tables.paymentMethods>

export type Product = InferSelectModel<typeof tables.products>
export type ProductDraft = InferInsertModel<typeof tables.products>

export type ProductVariant = InferSelectModel<typeof tables.productVariants>
export type ProductVariantDraft = InferInsertModel<typeof tables.productVariants>

export type User = InferSelectModel<typeof tables.users>
export type UserDraft = InferInsertModel<typeof tables.users>

export type UserCredentials = InferSelectModel<typeof tables.userCredentials>
export type UserCredentialsDraft = InferInsertModel<typeof tables.userCredentials>

export type UserPermission = InferSelectModel<typeof tables.userPermissions>
export type UserPermissionDraft = InferInsertModel<typeof tables.userPermissions>

export type Warehouse = InferSelectModel<typeof tables.warehouses>
export type WarehouseDraft = InferInsertModel<typeof tables.warehouses>

export type WorkingDay = InferSelectModel<typeof tables.workingDays>
export type WorkingDayDraft = InferInsertModel<typeof tables.workingDays>
