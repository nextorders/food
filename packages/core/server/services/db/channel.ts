export async function getChannel(id: string): Promise<Channel | null> {
  return useStorage('db').getItem<Channel>(`channel:${id}`)
}

export async function patchChannel(id: string, data: Partial<Channel>): Promise<Channel | null> {
  const channel = await getChannel(id)
  if (!channel) {
    return null
  }

  const newChannel = {
    ...channel,
    ...data,
    updatedAt: new Date().toISOString(),
  }

  await useStorage('db').setItem(`channel:${id}`, newChannel)

  return newChannel
}

export async function createChannel(data: Omit<Channel, 'createdAt' | 'updatedAt'>): Promise<Channel | null> {
  await useStorage('db').setItem(`channel:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getChannel(data.id)
}

export async function setChannelAsUpdated(id: string): Promise<void> {
  await patchChannel(id, { updatedAt: new Date().toISOString() })
}
