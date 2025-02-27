export async function getWarehouse(id: string): Promise<Warehouse | null> {
  return useStorage('db').getItem<Warehouse>(`warehouse:${id}`)
}

export async function getWarehouses(keys: string[]): Promise<Warehouse[]> {
  const warehouses: Warehouse[] = []

  await Promise.all(
    keys.map(async (key) => {
      const warehouse = await useStorage('db').getItem<Warehouse>(key)
      if (!warehouse) {
        return
      }

      warehouses.push(warehouse)
    }))

  return warehouses
}

export async function createWarehouse(data: Omit<Warehouse, 'createdAt' | 'updatedAt'>): Promise<Warehouse | null> {
  await useStorage('db').setItem(`warehouse:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getWarehouse(data.id)
}

export async function patchWarehouse(id: string, data: Partial<Warehouse>): Promise<Warehouse | null> {
  const warehouse = await getWarehouse(id)
  if (!warehouse) {
    return null
  }

  const newWarehouse = {
    ...warehouse,
    ...data,
    updatedAt: new Date().toISOString(),
  }

  await useStorage('db').setItem(`warehouse:${id}`, newWarehouse)

  return getWarehouse(id)
}
