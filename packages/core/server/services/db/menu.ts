export async function getMenus(keys: string[]): Promise<Menu[]> {
  const menuStorage = new Map<string, unknown>(keys.map((key) => [key, useStorage('db').getItem(key)]))
  const menus: Menu[] = []

  for (const key of keys) {
    const keyParsed = key.split(':')

    // menu:id
    if (keyParsed[1] && !keyParsed[2]) {
      const menu = await menuStorage.get(key) as Menu
      if (!menu) {
        continue
      }

      const menuCategoriesKeys: string[] = []
      for (const k of keys) {
        const [, menuId, category, categoryId] = k.split(':')

        // menu:id:category:id
        if (menuId === menu.id && category === 'category' && categoryId) {
          menuCategoriesKeys.push(k)
        }
      }

      const categories: MenuCategory[] = []

      await Promise.all(
        menuCategoriesKeys.map(async (key) => {
          const category = await menuStorage.get(key) as MenuCategory
          if (!category) {
            return
          }

          categories.push(category)
        }))

      menu.categories = categories
      menus.push(menu)
    }
  }

  return menus
}
