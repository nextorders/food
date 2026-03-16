import { H3Error } from 'h3'

const logger = useLogger('error')

export function errorResolver(exception: unknown): never {
  if (exception instanceof H3Error) {
    throw exception
  }

  logger.error(exception)

  throw createError({
    statusCode: 500,
    message: 'Internal server error',
  })
}
