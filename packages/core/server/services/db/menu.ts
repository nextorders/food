import { getKeys } from '.'

export async function getMenu(id: string): Promise<Menu | null> {
  return useStorage('db').getItem<Menu>(`menu:${id}`)
}

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

export async function createMenu(data: Omit<Menu, 'createdAt' | 'updatedAt'>): Promise<Menu | null> {
  await useStorage('db').setItem(`menu:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getMenu(data.id)
}

export async function patchMenu(id: string, data: Partial<Menu>): Promise<Menu | null> {
  const menu = await getMenu(id)
  if (!menu) {
    return null
  }

  const newMenu = {
    ...menu,
    ...data,
    updatedAt: new Date().toISOString(),
  }

  await useStorage('db').setItem(`menu:${id}`, newMenu)

  return getMenu(id)
}

export async function setMenuAsActive(id: string): Promise<void> {
  // Off all menus
  const { menuKeys } = await getKeys()

  for (const key of menuKeys) {
    const [, menuId, other] = key.split(':')
    if (menuId && !other) {
      await patchMenu(menuId, { isActive: false })
    }
  }

  await patchMenu(id, { isActive: true })
}

export async function getMenuCategory(id: string): Promise<MenuCategory | null> {
  const { menuKeys } = await getKeys()

  for (const key of menuKeys) {
    const [, menuId, category, categoryId] = key.split(':')

    // menu:id:category:id
    if (menuId === id && category === 'category' && categoryId) {
      return useStorage('db').getItem<MenuCategory>(key)
    }
  }

  return null
}

export async function createMenuCategory(data: Omit<MenuCategory, 'createdAt' | 'updatedAt'>): Promise<MenuCategory | null> {
  await useStorage('db').setItem(`menu:${data.menuId}:category:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getMenuCategory(data.id)
}

export async function patchMenuCategory(id: string, data: Partial<MenuCategory>): Promise<MenuCategory | null> {
  const category = await getMenuCategory(id)
  if (!category) {
    return null
  }

  const newCategory = {
    ...category,
    ...data,
    updatedAt: new Date().toISOString(),
  }

  await useStorage('db').setItem(`menu:${category.menuId}:category:${id}`, newCategory)

  return getMenuCategory(id)
}
