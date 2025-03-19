import { z } from 'zod'
import { locale } from './locale'

export const pageCreateSchema = z.object({
  locale,
  slug: z.string().min(2).max(50),
  title: z.string().min(2).max(75),
  content: z.string(),
})

export type PageCreateSchema = z.output<typeof pageCreateSchema>

export const pageUpdateSchema = z.object({
  locale,
  slug: z.string().min(2).max(50).optional(),
  title: z.string().min(2).max(75).optional(),
  content: z.string().optional(),
})

export type PageUpdateSchema = z.output<typeof pageUpdateSchema>
