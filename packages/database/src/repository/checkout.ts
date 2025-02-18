import type { CheckoutDraft } from '../types'
import { asc, desc, eq, sql } from 'drizzle-orm'
import { useDatabase } from '../database'
import { checkoutLines, checkouts } from '../tables'

export class Checkout {
  static async find(id: string) {
    return useDatabase().query.checkouts.findFirst({
      where: (checkouts, { eq }) => eq(checkouts.id, id),
      with: {
        lines: {
          with: {
            productVariant: {
              with: {
                product: {
                  with: {
                    category: true,
                  },
                },
              },
            },
          },
          orderBy: [asc(checkoutLines.createdAt)],
        },
      },
    })
  }

  static async findLatestFinished() {
    return useDatabase().query.checkouts.findMany({
      where: (checkouts, { eq }) => eq(checkouts.status, 'FINISHED'),
      limit: 30,
      orderBy: [desc(checkouts.createdAt)],
      with: {
        lines: {
          with: {
            productVariant: {
              with: {
                product: {
                  with: {
                    category: true,
                  },
                },
              },
            },
          },
          orderBy: [asc(checkoutLines.createdAt)],
        },
      },
    })
  }

  static async create(data: CheckoutDraft) {
    const [checkout] = await useDatabase()
      .insert(checkouts)
      .values(data)
      .returning()
    return checkout
  }

  static async patch(id: string, data: Partial<CheckoutDraft>) {
    const [checkout] = await useDatabase()
      .update(checkouts)
      .set(data)
      .where(eq(checkouts.id, id))
      .returning()
    return checkout
  }

  static async setAsFinished(id: string) {
    const [checkout] = await useDatabase()
      .update(checkouts)
      .set({ status: 'FINISHED' })
      .where(eq(checkouts.id, id))
      .returning()
    return checkout
  }

  /**
   * Recalculate total price for a given checkout and update the database.
   *
   * @param id - The ID of the checkout to recalculate.
   */
  static async recalculate(id: string): Promise<void> {
    await useDatabase().transaction(async (tx) => {
      const checkout = await tx.query.checkouts.findFirst({
        where: (checkouts, { eq }) => eq(checkouts.id, id),
        with: {
          lines: {
            with: {
              productVariant: true,
            },
          },
        },
      })
      if (!checkout) {
        throw new Error(`Checkout with id ${id} not found`)
      }

      for (const line of checkout.lines) {
        await tx.update(checkoutLines)
          .set({
            totalPrice: line.quantity * line.productVariant.gross,
            unitPrice: line.productVariant.gross,
          })
          .where(eq(checkoutLines.id, line.id))
      }

      const totalPrice = checkout.lines.reduce((acc, line) => {
        return acc + line.quantity * line.productVariant.gross
      }, 0)

      await tx.update(checkouts)
        .set({
          totalPrice,
          updatedAt: sql`NOW()`,
        })
        .where(eq(checkouts.id, checkout.id))
    })
  }
}
