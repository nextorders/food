import { getCheckoutReceiver, patchReceiver } from '../../../../server/services/db/receiver'
import { receiverUpdateSchema } from '../../../../shared/services/receiver'

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
    const data = receiverUpdateSchema.parse(body)

    const receiver = await getCheckoutReceiver(id)
    if (!receiver?.id) {
      throw createError({
        statusCode: 404,
        message: 'No receiver',
      })
    }

    await patchReceiver(id, {
      ...data,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
