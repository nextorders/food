import type { WarehouseDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { warehouses } from '../tables'

export class Warehouse {
  static async find(id: string) {
    return useDatabase().query.warehouses.findFirst({
      where: (warehouses, { eq }) => eq(warehouses.id, id),
    })
  }

  static async create(data: WarehouseDraft) {
    const [warehouse] = await useDatabase().insert(warehouses).values(data).returning()
    return warehouse
  }

  static async patch(id: string, data: Partial<WarehouseDraft>) {
    const [warehouse] = await useDatabase().update(warehouses).set(data).where(eq(warehouses.id, id)).returning()
    return warehouse
  }
}
