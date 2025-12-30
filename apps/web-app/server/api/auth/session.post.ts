export default defineEventHandler(async (event) => {
  try {
    const { user } = await getUserSession(event)
    if (user?.id) {
      return { ok: true }
    }

    await setUserSession(event, {
      user: {
        id: crypto.randomUUID(),
      },
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
