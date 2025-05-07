import { UserCreateSchema } from '@nextorders/schema'
import { createId } from '@paralleldrive/cuid2'
import { type } from 'arktype'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    // Guard: If user already exists
    const master = await repository.user.findMaster()
    if (master) {
      throw createError({
        statusCode: 400,
        message: 'Master user already exists',
      })
    }

    const body = await readBody(event)
    const data = UserCreateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const user = await repository.user.create({
      name: data.name ?? '',
      email: null,
      isActive: true,
      isConfirmed: false,
    })
    if (!user) {
      throw createError({
        statusCode: 400,
        message: 'Failed to create user',
      })
    }

    await repository.user.createPermission({
      id: createId(),
      userId: user.id,
      code: 'MASTER',
    })

    const password = await hashPassword(data.password)

    await repository.user.createCredential({
      id: createId(),
      userId: user.id,
      login: data.login,
      password,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
