import type { MenuCategoryDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { menuCategories } from '../tables'

export class MenuCategory {
  static async create(data: MenuCategoryDraft) {
    const [category] = await useDatabase().insert(menuCategories).values(data).returning()
    return category
  }

  static async patch(id: string, data: Partial<MenuCategoryDraft>) {
    const [category] = await useDatabase().update(menuCategories).set(data).where(eq(menuCategories.id, id)).returning()
    return category
  }
}
