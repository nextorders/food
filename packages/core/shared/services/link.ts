import { z } from 'zod'

export const linkCreateSchema = z.object({
  to: z.string().min(2).max(250),
  icon: z.string(),
})

export type LinkCreateSchema = z.output<typeof linkCreateSchema>

export const linkUpdateSchema = z.object({
  to: z.string().min(2).max(250).optional(),
  icon: z.string().optional(),
})

export type LinkUpdateSchema = z.output<typeof linkUpdateSchema>
