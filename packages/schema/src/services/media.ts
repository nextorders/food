import { type } from 'arktype'

const MAX_FILE_SIZE = 20000000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

const FileSchema = type('File').narrow((file) => file.size <= MAX_FILE_SIZE && ACCEPTED_IMAGE_TYPES.includes(file.type))

export const MediaUploadSchema = type({
  file: FileSchema,
})
export type MediaUpload = typeof MediaUploadSchema.infer
