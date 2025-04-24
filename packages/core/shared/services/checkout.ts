import { z } from 'zod'

export const checkoutUpdateSchema = z.object({
  deliveryMethod: z.enum(['WAREHOUSE', 'DELIVERY']).optional(),
  phone: z.string().max(20).optional(),
  name: z.string().max(50).optional(),
  warehouseId: z.string().max(50).optional(),
  street: z.string().min(2).max(80).optional(),
  flat: z.string().max(10).optional(),
  intercom: z.string().max(10).optional(),
  entrance: z.string().max(10).optional(),
  floor: z.string().max(10).optional(),
  addressNote: z.string().max(250).optional(),
  paymentMethodId: z.string().max(50).optional(),
  time: z.number().optional(),
  change: z.number().optional(),
  note: z.string().max(250).optional(),
})

export type CheckoutDraft = z.output<typeof checkoutUpdateSchema>
