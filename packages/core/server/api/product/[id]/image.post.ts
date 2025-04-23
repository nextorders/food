import type { MediaItem } from '@nextorders/schema'
import { createId } from '@paralleldrive/cuid2'
import sharp from 'sharp'
import { createMedia, deleteMedia, getMedia } from '../../../../server/services/db/media'
import { getProduct, patchProduct } from '../../../../server/services/db/product'

const IMAGE_SIZES = [120, 300, 600, 800]
const IMAGE_FORMATS = ['jpg', 'webp'] as const
const ACCEPTED_IMAGE_FORMATS = ['jpeg', 'jpg', 'png', 'webp']

export default defineEventHandler(async (event) => {
  let sharpStream

  try {
    const { productsDirectory, public: { mediaUrl } } = useRuntimeConfig()
    const storage = useStorage('s3')

    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const files = await readMultipartFormData(event)
    const file = files?.[0]
    if (!files?.length || !file) {
      throw createError({
        statusCode: 400,
        message: 'Missing file',
      })
    }

    sharp.cache(false)
    sharp.concurrency(1)

    sharpStream = sharp(file.data.buffer as ArrayBuffer)

    const metadata = await sharpStream.clone().metadata()

    if (!metadata?.format || !ACCEPTED_IMAGE_FORMATS.includes(metadata?.format) || !metadata?.width || !metadata?.height) {
      throw createError({
        statusCode: 400,
        message: 'Invalid file type',
      })
    }

    if (metadata.width > 8000 || metadata.height > 8000) {
      throw createError({
        statusCode: 400,
        message: 'Image has too big dimensions',
      })
    }

    if (metadata.width < 120 || metadata.height < 120) {
      throw createError({
        statusCode: 400,
        message: 'Image has too small dimensions',
      })
    }

    const mediaId = createId()
    const items: MediaItem[] = []

    // Every size
    for (const size of IMAGE_SIZES) {
      // Every format
      for (const format of IMAGE_FORMATS) {
        let buffer: unknown = await sharpStream
          .resize({ width: size, height: size })
          .toFormat(format, { quality: 75 })
          .toBuffer()

        const id = createId()

        await storage.setItemRaw(`${productsDirectory}/${mediaId}/${id}.${format}`, buffer)

        items.push({
          id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          mediaId,
          size,
          format,
          url: `${mediaUrl}${productsDirectory}/${mediaId}/${id}.${format}`,
        })

        // Clear
        buffer = null
      }
    }

    await createMedia({ id: mediaId }, items)

    const product = await getProduct(id)
    if (product?.mediaId) {
      const media = await getMedia(product.mediaId)
      if (media) {
        // Remove old images
        for (const item of media.items) {
          await storage.removeItem(`${productsDirectory}/${item.mediaId}/${item.id}.${item.format}`)
        }

        await deleteMedia(media.id)
      }
    }

    await patchProduct(id, { mediaId })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  } finally {
    sharpStream?.destroy()
  }
})
