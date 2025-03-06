import { setChannelAsUpdated } from '../../../../../server/services/db/channel'
import { detachProductFromMenuCategory, getMenuCategory } from '../../../../../server/services/db/menu'
import { menuCategoryAttachProductSchema } from './../../../../../shared/services/menu'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Category not found',
      })
    }

    const body = await readBody(event)
    const data = menuCategoryAttachProductSchema.parse(body)

    const category = await getMenuCategory(id)
    if (!category) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Category not found',
      })
    }

    // Guard: If product not in category
    if (!category.products.some((product) => product.id === data.productId)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Product not in category',
      })
    }

    const updatedCategory = await detachProductFromMenuCategory(id, data.productId)

    await setChannelAsUpdated(channelId)

    return {
      ok: true,
      result: updatedCategory,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
