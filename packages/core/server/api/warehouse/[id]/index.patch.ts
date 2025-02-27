import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { patchWarehouse } from '../../../../server/services/db/warehouse'
import { warehouseUpdateSchema } from './../../../../shared/services/warehouse'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const body = await readBody(event)
    const data = warehouseUpdateSchema.parse(body)

    const warehouse = await patchWarehouse(id, data)

    await setChannelAsUpdated(channelId)

    return {
      ok: true,
      result: warehouse,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
