import { db } from '@nextorders/database'

export default defineEventHandler(async () => {
  try {
    await db.checkHealth()

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
