import sharp from 'sharp'

export default defineEventHandler(async (event) => {
  try {
    const { productsDirectory } = useRuntimeConfig()
    const storage = useStorage('s3')

    const mediaId = getRouterParam(event, 'mediaId')
    const name = getRouterParam(event, 'name')
    if (!mediaId || !name) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing name',
      })
    }

    const itemName = `${productsDirectory}/${mediaId}/${name}`

    const file = await storage.hasItem(itemName)
    if (!file) {
      throw createError({
        statusCode: 404,
        statusMessage: 'File not found',
      })
    }

    setHeaders(event, {
      'Cache-Control': 'max-age=31536000, immutable',
    })

    const raw = await storage.getItemRaw(itemName)

    return sharp(raw as ArrayBuffer).toBuffer()
  } catch (error) {
    throw errorResolver(error)
  }
})
