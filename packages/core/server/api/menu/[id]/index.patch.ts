import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { patchMenu } from '../../../../server/services/db/menu'
import { menuUpdateSchema } from './../../../../shared/services/menu'

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
    const data = menuUpdateSchema.parse(body)

    const menu = await patchMenu(id, data)

    await setChannelAsUpdated(channelId)

    return {
      ok: true,
      result: menu,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
