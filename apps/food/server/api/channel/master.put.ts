import { repository } from '@next-orders/database'
import { hash } from 'bcrypt'
import { userCreateSchema } from '~~/server/core/services/user'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    if (!channelId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing channelId',
      })
    }

    // Guard: If user already exists
    const master = await repository.user.findMaster(channelId)
    if (master) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Master user already exists',
      })
    }

    const body = await readBody(event)
    const data = userCreateSchema.parse(body)

    const user = await repository.user.create({
      channelId,
      isStaff: true,
      name: data.name,
    })
    if (!user) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Failed to create user',
      })
    }

    const passwordHash = await hash(data.password, 10)

    await repository.userCredential.create({
      login: data.login,
      passwordHash,
      userId: user.id,
    })

    await repository.userPermission.create({
      code: 'MASTER',
      userId: user.id,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
