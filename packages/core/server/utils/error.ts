import { createError, H3Error } from 'h3'
import { useLogger } from './logger'

const logger = useLogger('error')

export function errorResolver(exception: unknown) {
  if (exception instanceof H3Error) {
    throw exception
  }

  // Ok, something happened
  logger.error(exception)

  return createError({
    statusCode: 500,
    message: 'Internal server error',
  })
}
