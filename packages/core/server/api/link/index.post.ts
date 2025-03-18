import { createId } from '@paralleldrive/cuid2'
import { setChannelAsUpdated } from '../../../server/services/db/channel'
import { createLink } from '../../../server/services/db/link'
import { linkCreateSchema } from '../../../shared/services/link'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

    const body = await readBody(event)
    const data = linkCreateSchema.parse(body)

    await createLink({
      id: createId(),
      icon: data.icon ?? null,
      ...data,
    })

    await setChannelAsUpdated(channelId)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
