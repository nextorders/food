import { type } from 'arktype'

export const PermissionCodeSchema = type('"MASTER" | "MANAGE_OPTIONS" | "MANAGE_MENUS" | "MANAGE_PRODUCTS" | "MANAGE_CHECKOUTS" | "MANAGE_CLIENTS" | "MANAGE_WAREHOUSES"')
export type PermissionCode = typeof PermissionCodeSchema.infer

export const UserSchema = type({
  id: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  name: 'string | null',
  email: 'string | null',
  isActive: 'boolean',
  isConfirmed: 'boolean',
  isStaff: 'boolean',
  permissions: PermissionCodeSchema.array(),
})
export type User = typeof UserSchema.infer

export const UserCredentialsSchema = type({
  id: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  login: 'string',
  password: 'string',
  userId: 'string',
})
export type UserCredentials = typeof UserCredentialsSchema.infer
