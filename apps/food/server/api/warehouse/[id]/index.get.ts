import { repository } from '@next-orders/database'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const warehouse = await repository.warehouse.find(id)
    if (!warehouse?.id) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Warehouse not found',
      })
    }

    return warehouse
  } catch (error) {
    throw errorResolver(error)
  }
})
