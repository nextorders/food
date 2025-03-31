import { getUser, getUserCredentialsByLogin } from '../../../server/services/db/user'
import { verify } from '../../../server/services/password'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    if (!body?.login || !body?.password) {
      throw createError({ statusCode: 400, statusMessage: 'Missing login or password' })
    }

    const { user: userInSession } = await getUserSession(event)
    if (userInSession?.isStaff) {
      return sendRedirect(event, '/command-center')
    }

    const credentials = await getUserCredentialsByLogin(body.login)
    if (!credentials) {
      throw createError({ statusCode: 401, statusMessage: 'Wrong login or password' })
    }

    const isMatch = await verify(body.password, credentials.password)
    if (!isMatch) {
      throw createError({ statusCode: 401, statusMessage: 'Wrong login or password' })
    }

    const user = await getUser(credentials.userId)
    if (!user) {
      throw createError({ statusCode: 401, statusMessage: 'No user found' })
    }

    await setUserSession(event, {
      user: {
        id: user.id,
        isStaff: user.isStaff,
        name: user.name,
        permissions: user.permissions,
      },
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
