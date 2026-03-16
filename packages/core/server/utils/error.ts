import { createError, H3Error } from 'h3'
import { ZodError } from 'zod'
import { useLogger } from './logger'

const logger = useLogger('error')

export function errorResolver(exception: unknown): never {
  if (exception instanceof H3Error) {
    throw exception
  }

  logger.error(exception)

  // Invalid response from upstream API
  if (exception instanceof ZodError) {
    throw createError({
      statusCode: 502,
      message: 'Invalid response from API gateway',
    })
  }

  // Network error (gateway unreachable)
  if (exception instanceof TypeError && exception.message.includes('fetch')) {
    throw createError({
      statusCode: 502,
      message: 'API gateway unavailable',
    })
  }

  throw createError({
    statusCode: 500,
    message: 'Internal server error',
  })
}
