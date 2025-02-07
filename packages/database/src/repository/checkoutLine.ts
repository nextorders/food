import type { CheckoutLineDraft } from '../types'
import { eq, sql } from 'drizzle-orm'
import { useDatabase } from '../database'
import { checkoutLines } from '../tables'

export class CheckoutLine {
  static async create(data: CheckoutLineDraft) {
    const [line] = await useDatabase().insert(checkoutLines).values(data).returning()
    return line
  }

  static async increase(id: string, amount: number = 1) {
    const [line] = await useDatabase().update(checkoutLines).set({
      quantity: sql`${checkoutLines.quantity} + ${amount}`,
    }).where(eq(checkoutLines.id, id)).returning()
    return line
  }

  static async reduce(id: string, amount: number = 1) {
    const [line] = await useDatabase().update(checkoutLines).set({
      quantity: sql`${checkoutLines.quantity} - ${amount}`,
    }).where(eq(checkoutLines.id, id)).returning()

    // If decremented to 0, remove line
    if (line && line.quantity <= 0) {
      await useDatabase().delete(checkoutLines).where(eq(checkoutLines.id, id))
    }

    return line
  }
}
