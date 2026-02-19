import z from 'zod'
import { LocaleValueSchema } from './common'
import { PaymentMethodSchema } from './payment'
import { ScheduleSchema, TimeZoneSchema } from './time'
import { WarehouseSchema } from './warehouse'

export const DeliveryByCourierSchema = z.object({
  isAvailable: z.boolean(),
  paymentMethods: PaymentMethodSchema.array(),
  conditions: LocaleValueSchema.array().optional(),
  minAmountForDelivery: z.number().nonnegative().optional(),
  schedule: ScheduleSchema.optional(),
})
export type DeliveryByCourier = z.infer<typeof DeliveryByCourierSchema>

export const SelfPickupSchema = z.object({
  isAvailable: z.boolean(),
  paymentMethods: PaymentMethodSchema.array(),
  conditions: LocaleValueSchema.array().optional(),
  schedule: ScheduleSchema.optional(),
  warehouses: WarehouseSchema.array().optional(),
})
export type SelfPickup = z.infer<typeof SelfPickupSchema>

export const LinkSchema = z.object({
  to: z.string().min(1),
  label: LocaleValueSchema.array().optional(),
  icon: z.string().optional(),
  target: z.enum(['_blank', '_self', '_parent', '_top']).optional(),
})
export type Link = z.infer<typeof LinkSchema>

export const LinksSchema = z.object({
  aside: LinkSchema.array(),
  footer: LinkSchema.array(),
  social: LinkSchema.array(),
})
export type Links = z.infer<typeof LinksSchema>

export const ChannelSchema = z.object({
  id: z.string(),
  selectorTitle: LocaleValueSchema.array(),
  title: LocaleValueSchema.array(),
  description: LocaleValueSchema.array().optional(),
  url: z.string(),
  timeZone: TimeZoneSchema,
  isActive: z.boolean(),
  deliveryByCourier: DeliveryByCourierSchema,
  selfPickup: SelfPickupSchema,
  copyright: LocaleValueSchema.array().optional(),
  links: LinksSchema.optional(),
})
export type Channel = z.infer<typeof ChannelSchema>
