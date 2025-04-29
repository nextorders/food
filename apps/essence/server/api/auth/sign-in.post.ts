import type { User } from '#auth-utils'
import { UserSignIn } from '@nextorders/schema'
import { type } from 'arktype'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = UserSignIn(body)
    if (data instanceof type.errors) {
      throw createError({
        statusCode: 400,
        message: 'Missing login or password',
      })
    }

    const { user: userInSession } = await getUserSession(event)
    const isSignedIn: boolean = !!userInSession?.id && userInSession?.isStaff
    if (isSignedIn) {
      return sendRedirect(event, '/')
    }

    const credentials = await repository.user.findCredentialByLogin(data.login)
    if (!credentials) {
      throw createError({ statusCode: 401, message: 'Wrong login or password' })
    }

    const isMatch = await verifyPassword(data.password, credentials.password)
    if (!isMatch) {
      throw createError({ statusCode: 401, message: 'Wrong login or password' })
    }

    const user = await repository.user.find(credentials.userId)
    if (!user) {
      throw createError({ statusCode: 401, message: 'No user found' })
    }

    const permissions = user.permissions.map((permission) => permission.code)

    await setUserSession(event, {
      user: {
        id: user.id,
        isStaff: true,
        name: user.name,
        permissions,
      } satisfies User,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
