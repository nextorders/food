import { getKeys } from '.'

export async function getUser(id: string): Promise<User | null> {
  return useStorage('db').getItem<User>(`user:${id}`)
}

export async function getUserCredentials(userId: string, id: string): Promise<UserCredentials | null> {
  return useStorage('db').getItem<UserCredentials>(`user:${userId}:credentials:${id}`)
}

export async function getMaster(): Promise<User | null> {
  const { userKeys } = await getKeys()
  const storage = new Map<string, unknown>(userKeys.map((key) => [key, useStorage('db').getItem(key)]))

  for (const key of userKeys) {
    const keyParsed = key.split(':')

    // user:id
    if (keyParsed[1] && !keyParsed[2]) {
      const user = await storage.get(key) as User
      if (!user) {
        continue
      }

      if (user.isStaff && user.permissions.find((permission) => permission === 'MASTER')) {
        return user
      }
    }
  }

  return null
}

export async function createUser(data: Omit<User, 'createdAt' | 'updatedAt'>): Promise<User | null> {
  await useStorage('db').setItem(`user:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getUser(data.id)
}

export async function createUserCredentials(data: Omit<UserCredentials, 'createdAt' | 'updatedAt'>): Promise<UserCredentials | null> {
  await useStorage('db').setItem(`user:${data.userId}:credentials:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getUserCredentials(data.userId, data.id)
}

export async function getUserCredentialsByLogin(login: string): Promise<UserCredentials | null> {
  const { userKeys } = await getKeys()
  const storage = new Map<string, unknown>(userKeys.map((key) => [key, useStorage('db').getItem(key)]))

  for (const key of userKeys) {
    const keyParsed = key.split(':')

    // user:id:credentials:id
    if (keyParsed[1] && keyParsed[2] && keyParsed[3]) {
      const userCredentials = await storage.get(key) as UserCredentials
      if (!userCredentials) {
        continue
      }

      if (userCredentials.login === login) {
        return userCredentials
      }
    }
  }

  return null
}
