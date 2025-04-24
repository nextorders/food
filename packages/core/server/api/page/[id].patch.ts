import { updateLocaleValues } from '@nextorders/schema'
import { getPage, patchPage } from '../../../server/services/db/page'
import { pageUpdateSchema } from '../../../shared/services/page'

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
    const data = pageUpdateSchema.parse(body)

    const page = await getPage(id)
    if (!page) {
      throw createError({
        statusCode: 404,
        message: 'Page not found',
      })
    }

    const updatedTitle = data?.title ? updateLocaleValues(page.title, { locale: data.locale, value: data.title }) : page.title

    await patchPage(id, {
      ...data,
      title: updatedTitle,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
