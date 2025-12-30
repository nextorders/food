import z from 'zod'
import { LocaleValueSchema } from './common'

export const PaymentMethodTypeSchema = z.enum(['cash', 'card', 'custom'])
export type PaymentMethodType = z.infer<typeof PaymentMethodTypeSchema>

export const PaymentMethodSchema = z.object({
  id: z.string(),
  title: LocaleValueSchema.array(),
  type: PaymentMethodTypeSchema,
})
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>
