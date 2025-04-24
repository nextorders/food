import { z } from 'zod'

export const linkCreateSchema = z.object({
  menuId: z.enum(['main', 'footer', 'social']),
  label: z.string().max(50),
  to: z.string().min(2).max(250),
  icon: z.string().optional(),
  target: z.string().max(10),
})

export type LinkCreateSchema = z.output<typeof linkCreateSchema>

export const linkUpdateSchema = z.object({
  label: z.string().max(50).optional(),
  to: z.string().min(2).max(250).optional(),
  icon: z.string().optional(),
  target: z.string().max(10).optional(),
})

export type LinkUpdateSchema = z.output<typeof linkUpdateSchema>
