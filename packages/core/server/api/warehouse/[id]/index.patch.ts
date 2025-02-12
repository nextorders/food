import { repository } from '@next-orders/database'
import { warehouseUpdateSchema } from './../../../../shared/services/warehouse'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const body = await readBody(event)
    const data = warehouseUpdateSchema.parse(body)

    const warehouse = await repository.warehouse.patch(id, data)

    return {
      ok: true,
      result: warehouse,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
