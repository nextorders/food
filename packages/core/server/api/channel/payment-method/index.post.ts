import { createId } from '@paralleldrive/cuid2'
import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { createPaymentMethod } from '../../../../server/services/db/payment'
import { channelPaymentMethodCreateSchema } from './../../../../shared/services/channel'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    if (!channelId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing channelId',
      })
    }

    const body = await readBody(event)
    const data = channelPaymentMethodCreateSchema.parse(body)

    await createPaymentMethod({
      id: createId(),
      name: data.name,
      type: data.type,
    })

    await setChannelAsUpdated(channelId)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
