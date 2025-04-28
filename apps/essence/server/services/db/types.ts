import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import type * as tables from './tables'

export type { Database } from './connection'

export type Option = InferSelectModel<typeof tables.options>
export type OptionDraft = InferInsertModel<typeof tables.options>

export type User = InferSelectModel<typeof tables.users>
export type UserDraft = InferInsertModel<typeof tables.users>

export type UserPermission = InferSelectModel<typeof tables.userPermissions>
export type UserPermissionDraft = InferInsertModel<typeof tables.userPermissions>

export type UserCredential = InferSelectModel<typeof tables.userCredentials>
export type UserCredentialDraft = InferInsertModel<typeof tables.userCredentials>

export type Channel = InferSelectModel<typeof tables.channels>
export type ChannelDraft = InferInsertModel<typeof tables.channels>

export type Menu = InferSelectModel<typeof tables.menus>
export type MenuDraft = InferInsertModel<typeof tables.menus>

export type MenuCategory = InferSelectModel<typeof tables.menuCategories>
export type MenuCategoryDraft = InferInsertModel<typeof tables.menuCategories>

export type Product = InferSelectModel<typeof tables.products>
export type ProductDraft = InferInsertModel<typeof tables.products>

export type ProductVariant = InferSelectModel<typeof tables.productVariants>
export type ProductVariantDraft = InferInsertModel<typeof tables.productVariants>

export type Media = InferSelectModel<typeof tables.media>
export type MediaDraft = InferInsertModel<typeof tables.media>

export type MediaItem = InferSelectModel<typeof tables.mediaItems>
export type MediaItemDraft = InferInsertModel<typeof tables.mediaItems>
