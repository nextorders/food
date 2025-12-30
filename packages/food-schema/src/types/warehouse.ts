import z from 'zod'
import { LocaleValueSchema } from './common'

export const WarehouseAddressSchema = z.object({
  street: LocaleValueSchema.array(),
})
export type WarehouseAddress = z.infer<typeof WarehouseAddressSchema>

export const WarehouseSchema = z.object({
  id: z.string(),
  title: LocaleValueSchema.array(),
  address: WarehouseAddressSchema,
})
export type Warehouse = z.infer<typeof WarehouseSchema>
