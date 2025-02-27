import { createId } from '@paralleldrive/cuid2'
import { hash } from 'bcrypt'
import { createUser, createUserCredentials, getMaster } from '../../../server/services/db/user'
import { userCreateSchema } from './../../../shared/services/user'

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
    const master = await getMaster()
    if (master) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Master user already exists',
      })
    }

    const body = await readBody(event)
    const data = userCreateSchema.parse(body)

    const user = await createUser({
      id: createId(),
      name: data.name ?? null,
      email: null,
      isStaff: true,
      isActive: true,
      isConfirmed: false,
      permissions: [
        'MASTER',
      ],
    })
    if (!user) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Failed to create user',
      })
    }

    const passwordHash = await hash(data.password, 10)

    await createUserCredentials(user.id, {
      id: createId(),
      login: data.login,
      passwordHash,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
