import type { MenuCategoryDraft, MenuDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { menuCategories, menus } from '../tables'

export class Menu {
  static async find(id: string) {
    return useDatabase().query.menus.findFirst({
      where: (menus, { eq }) => eq(menus.id, id),
      with: {
        categories: true,
      },
    })
  }

  static async findCategory(id: string) {
    return useDatabase().query.menuCategories.findFirst({
      where: (categories, { eq }) => eq(categories.id, id),
    })
  }

  static async create(data: MenuDraft) {
    const [menu] = await useDatabase()
      .insert(menus)
      .values(data)
      .returning()

    return menu
  }

  static async createCategory(data: MenuCategoryDraft) {
    const [category] = await useDatabase()
      .insert(menuCategories)
      .values(data)
      .returning()

    return category
  }

  static async update(id: string, data: Partial<MenuDraft>) {
    const [menu] = await useDatabase()
      .update(menus)
      .set(data)
      .where(eq(menus.id, id))
      .returning()

    return menu
  }

  static async updateCategory(id: string, data: Partial<MenuCategoryDraft>) {
    const [category] = await useDatabase()
      .update(menuCategories)
      .set(data)
      .where(eq(menuCategories.id, id))
      .returning()

    return category
  }

  static async delete(id: string) {
    await useDatabase().delete(menus).where(eq(menus.id, id))
  }

  static async deleteCategory(id: string) {
    await useDatabase().delete(menuCategories).where(eq(menuCategories.id, id))
  }
}
