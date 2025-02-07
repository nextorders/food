import { repository } from '@next-orders/database'
import { warehouseCreateSchema } from '~~/server/core/services/warehouse'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    const body = await readBody(event)

    const data = warehouseCreateSchema.parse(body)

    const warehouse = await repository.warehouse.create({
      channelId,
      ...data,
    })

    return {
      ok: true,
      result: warehouse,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
