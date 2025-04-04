import { z } from 'zod'

export const receiverCreateSchema = z.object({
  name: z.string().min(2).max(50),
  url: z.string().min(2).max(300),
  method: z.enum(['POST', 'PUT']),
  authorization: z.string().optional(),
  body: z.record(z.string()).optional(),
})

export type ReceiverCreateSchema = z.output<typeof receiverCreateSchema>

export const receiverUpdateSchema = z.object({
  name: z.string().min(2).max(50).optional(),
  url: z.string().min(2).max(300).optional(),
  method: z.enum(['POST', 'PUT']).optional(),
  authorization: z.string().optional(),
})

export type ReceiverUpdateSchema = z.output<typeof receiverUpdateSchema>
