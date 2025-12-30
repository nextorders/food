import z from 'zod'

export const ImageFormatSchema = z.enum(['jpeg', 'webp'])
export type ImageFormat = z.infer<typeof ImageFormatSchema>

/**
 * Image sizes. Max width or height:
 * - xs - 320px
 * - sm - 640px
 * - md - 960px
 * - lg - 1280px
 * - xl - 1920px
 */
export const ImageSizeSchema = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
export type ImageSize = z.infer<typeof ImageSizeSchema>

export const ImageSchema = z.object({
  id: z.string(),
  url: z.string(),
  size: ImageSizeSchema,
  format: ImageFormatSchema,
})
export type Image = z.infer<typeof ImageSchema>
