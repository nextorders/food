import { createId } from '@paralleldrive/cuid2'
import { setChannelAsUpdated } from '../../../server/services/db/channel'
import { createWarehouse } from '../../../server/services/db/warehouse'
import { warehouseCreateSchema } from './../../../shared/services/warehouse'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    const body = await readBody(event)

    const data = warehouseCreateSchema.parse(body)

    const warehouse = await createWarehouse({
      ...data,
      id: createId(),
    })

    await setChannelAsUpdated(channelId)

    return {
      ok: true,
      result: warehouse,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
