import z from 'zod'

export const VideoTypeSchema = z.enum(['video/mp4', 'video/webm'])
export type VideoType = z.infer<typeof VideoTypeSchema>

export const VideoSchema = z.object({
  id: z.string(),
  url: z.string(),
  type: VideoTypeSchema,
})
export type Video = z.infer<typeof VideoSchema>
