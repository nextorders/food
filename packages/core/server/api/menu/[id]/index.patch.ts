import { patchMenu } from '../../../../server/services/db/menu'
import { menuUpdateSchema } from './../../../../shared/services/menu'

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
    const data = menuUpdateSchema.parse(body)

    const menu = await patchMenu(id, data)

    return {
      ok: true,
      result: menu,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
