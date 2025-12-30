import z from 'zod'
import { LocaleValueSchema } from './common'
import { PaymentMethodSchema } from './payment'
import { ScheduleSchema, TimeZoneSchema } from './time'
import { WarehouseSchema } from './warehouse'

const DeliveryByCourierSchema = z.object({
  isAvailable: z.boolean(),
  paymentMethods: PaymentMethodSchema.array(),
  conditions: LocaleValueSchema.array().optional(),
  minAmountForDelivery: z.number().optional(),
  schedule: ScheduleSchema.optional(),
})

const SelfPickupSchema = z.object({
  isAvailable: z.boolean(),
  paymentMethods: PaymentMethodSchema.array(),
  conditions: LocaleValueSchema.array().optional(),
  schedule: ScheduleSchema.optional(),
  warehouses: WarehouseSchema.array().optional(),
})

const LinkSchema = z.object({
  to: z.string(),
  label: LocaleValueSchema.array().optional(),
  icon: z.string().optional(),
  target: z.string().optional(),
})

const LinksSchema = z.object({
  aside: LinkSchema.array(),
  footer: LinkSchema.array(),
  social: LinkSchema.array(),
})

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
