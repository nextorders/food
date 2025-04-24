import { patchWarehouse } from '../../../../server/services/db/warehouse'
import { warehouseUpdateSchema } from './../../../../shared/services/warehouse'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const body = await readBody(event)
    const data = warehouseUpdateSchema.parse(body)

    const warehouse = await patchWarehouse(id, data)

    return {
      ok: true,
      result: warehouse,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
