import { createId } from '@paralleldrive/cuid2'
import { setChannelAsUpdated } from '../../../server/services/db/channel'
import { createUser, createUserCredentials, getMaster } from '../../../server/services/db/user'
import { hash } from '../../../server/services/password'
import { userCreateSchema } from './../../../shared/services/user'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

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

    const password = await hash(data.password)

    await createUserCredentials({
      id: createId(),
      userId: user.id,
      login: data.login,
      password,
    })

    await setChannelAsUpdated(channelId)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
