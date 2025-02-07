import type { MenuDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { menus } from '../tables'

export class Menu {
  static async find(id: string) {
    return useDatabase().query.menus.findFirst({
      where: (menus, { eq }) => eq(menus.id, id),
    })
  }

  static async findActive(channelId: string, slug: string) {
    return useDatabase().query.menus.findFirst({
      where: (menus, { eq, and }) => and(
        eq(menus.channelId, channelId),
        eq(menus.isActive, true),
      ),
      with: {
        categories: {
          where: (categories, { eq }) => eq(categories.slug, slug),
          with: {
            products: {
              with: {
                variants: true,
              },
            },
          },
        },
      },
    })
  }

  static async create(data: MenuDraft) {
    const [menu] = await useDatabase().insert(menus).values(data).returning()
    return menu
  }

  static async patch(id: string, data: Partial<MenuDraft>) {
    const [menu] = await useDatabase().update(menus).set(data).where(eq(menus.id, id)).returning()
    return menu
  }

  static async setAsActive(id: string) {
    // Off all menus
    await useDatabase().update(menus).set({ isActive: false })

    const [menu] = await useDatabase().update(menus).set({ isActive: true }).where(eq(menus.id, id)).returning()
    return menu
  }
}
