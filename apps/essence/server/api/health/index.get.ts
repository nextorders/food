import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async () => {
  try {
    await repository.checkHealth()

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
