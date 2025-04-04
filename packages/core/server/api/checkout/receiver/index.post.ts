import { createId } from '@paralleldrive/cuid2'
import { createReceiver } from '../../../../server/services/db/receiver'
import { receiverCreateSchema } from './../../../../shared/services/receiver'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = receiverCreateSchema.parse(body)

    const receiver = await createReceiver({
      ...data,
      id: createId(),
    })

    return {
      ok: true,
      result: receiver,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
