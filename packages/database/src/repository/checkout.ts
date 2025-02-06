import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { checkoutLines, checkouts } from '../tables'

export class Checkout {
  /**
   * Recalculate total price for a given checkout and update the database.
   *
   * @param id - The ID of the checkout to recalculate.
   */
  static async recalculate(id: string): Promise<void> {
    const checkout = await useDatabase().query.checkouts.findFirst({
      where: (checkout, { eq }) => eq(checkout.id, id),
      with: {
        lines: {
          with: {
            productVariant: true,
          },
        },
      },
    })
    if (!checkout) {
      return
    }

    for (const line of checkout.lines) {
      await useDatabase().update(checkoutLines).set({
        totalPrice: line.quantity * line.productVariant.gross,
        unitPrice: line.productVariant.gross,
      }).where(eq(checkoutLines.id, line.id))
    }

    const totalPrice = checkout.lines.reduce((acc, line) => {
      return acc + line.quantity * line.productVariant.gross
    }, 0)

    await useDatabase().update(checkouts).set({
      updatedAt: new Date().toString(),
      totalPrice,
    }).where(eq(checkouts.id, checkout.id))
  }
}
