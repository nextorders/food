import { MenuCreateSchema } from '@nextorders/schema'
import { createId } from '@paralleldrive/cuid2'
import { type } from 'arktype'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = MenuCreateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const id = createId()

    const menu = await repository.menu.create({
      id,
      slug: id,
      name: data.name,
      isActive: false,
    })

    return {
      ok: true,
      result: menu,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
