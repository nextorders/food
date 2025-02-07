import { repository } from '@next-orders/database'

export default defineEventHandler(async (event) => {
  const { channelId } = useRuntimeConfig()
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing slug',
    })
  }

  const activeMenu = await repository.menu.findActive(channelId, slug)
  if (!activeMenu) {
    throw createError({
      statusCode: 404,
      statusMessage: 'No active menu',
    })
  }

  if (!activeMenu.categories[0]) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not found',
    })
  }

  return activeMenu.categories[0]
})
