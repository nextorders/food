import type { PaymentMethodDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { paymentMethods } from '../tables'

export class PaymentMethod {
  static async create(data: PaymentMethodDraft) {
    const [paymentMethod] = await useDatabase().insert(paymentMethods).values(data).returning()
    return paymentMethod
  }

  static async patch(id: string, data: Partial<PaymentMethodDraft>) {
    const [paymentMethod] = await useDatabase().update(paymentMethods).set(data).where(eq(paymentMethods.id, id)).returning()
    return paymentMethod
  }

  static async delete(id: string) {
    return useDatabase().delete(paymentMethods).where(eq(paymentMethods.id, id)).returning()
  }
}
