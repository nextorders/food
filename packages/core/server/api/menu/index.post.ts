import { createId, repository } from '@next-orders/database'
import { menuCreateSchema } from './../../../shared/services/menu'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    const body = await readBody(event)

    const data = menuCreateSchema.parse(body)
    const id = createId()

    const menu = await repository.menu.create({
      id,
      slug: id,
      name: data.name,
      channelId,
    })

    return {
      ok: true,
      result: menu,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
