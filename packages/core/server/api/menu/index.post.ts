import { createId } from '@paralleldrive/cuid2'
import { setChannelAsUpdated } from '../../../server/services/db/channel'
import { createMenu } from '../../../server/services/db/menu'
import { menuCreateSchema } from './../../../shared/services/menu'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    const body = await readBody(event)

    const data = menuCreateSchema.parse(body)
    const id = createId()

    const menu = await createMenu({
      id,
      slug: id,
      name: data.name,
      isActive: false,
      categories: [],
    })

    await setChannelAsUpdated(channelId)

    return {
      ok: true,
      result: menu,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
