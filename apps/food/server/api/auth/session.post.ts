import { createId } from '@next-orders/database'

export default defineEventHandler(async (event) => {
  try {
    const { user } = await getUserSession(event)
    if (user?.id) {
      return { ok: true }
    }

    await setUserSession(event, {
      user: {
        id: createId(),
        isStaff: false,
        name: null,
        permissions: [],
      },
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
