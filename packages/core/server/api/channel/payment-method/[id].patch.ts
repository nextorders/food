import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { patchPaymentMethod } from '../../../../server/services/db/payment'
import { channelPaymentMethodUpdateSchema } from './../../../../shared/services/channel'

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
    const data = channelPaymentMethodUpdateSchema.parse(body)

    await patchPaymentMethod(id, data)
    await setChannelAsUpdated(channelId)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
