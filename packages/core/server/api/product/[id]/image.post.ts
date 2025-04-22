import type { MediaItem } from '@nextorders/schema'
import { createId } from '@paralleldrive/cuid2'
import sharp from 'sharp'
import { createMedia, deleteMedia } from '../../../../server/services/db/media'
import { getProduct, patchProduct } from '../../../../server/services/db/product'

const ACCEPTED_IMAGE_TYPES = ['jpeg', 'jpg', 'png', 'webp']
const IMAGE_SIZES = [120, 300, 600, 800]

export default defineEventHandler(async (event) => {
  try {
    const { productsDirectory, public: { mediaUrl } } = useRuntimeConfig()
    const storage = useStorage('s3')

    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const files = await readMultipartFormData(event)
    const file = files?.[0]
    if (!files?.length || !file) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing file',
      })
    }

    sharp.cache(false)
    sharp.concurrency(1)

    const sharpStream = sharp(file.data.buffer as ArrayBuffer)

    const metadata = await sharpStream.clone().metadata()

    if (!metadata?.format || !ACCEPTED_IMAGE_TYPES.includes(metadata?.format) || !metadata?.width || !metadata?.height) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid file type',
      })
    }

    if (metadata.width > 8000 || metadata.height > 8000) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Image has too big dimensions',
      })
    }

    if (metadata.width < 120 || metadata.height < 120) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Image has too small dimensions',
      })
    }

    const mediaId = createId()
    const items: MediaItem[] = []

    // Every size
    for (const size of IMAGE_SIZES) {
      // Every format
      for (const format of ['jpg', 'webp'] as const) {
        let buffer: unknown = await sharpStream
          .resize({ width: size, height: size })
          .toFormat(format, { quality: 75 })
          .toBuffer()

        await storage.setItemRaw(`${productsDirectory}/${mediaId}/${size}.${format}`, buffer)

        items.push({
          id: createId(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          mediaId,
          size,
          format,
          url: `${mediaUrl}${productsDirectory}/${mediaId}/${size}.${format}`,
        })

        // Clear
        buffer = null
      }
    }

    sharpStream.destroy()

    await createMedia({ id: mediaId }, items)

    const product = await getProduct(id)
    if (product?.mediaId) {
      // Remove old images
      for (const size of IMAGE_SIZES) {
        await storage.removeItem(`${productsDirectory}/${product.mediaId}/${size}.jpg`)
        await storage.removeItem(`${productsDirectory}/${product.mediaId}/${size}.webp`)
      }

      await deleteMedia(product.mediaId)
    }

    await patchProduct(id, { mediaId })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
