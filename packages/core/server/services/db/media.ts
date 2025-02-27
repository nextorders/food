export async function getMedia(id: string): Promise<Media | null> {
  return useStorage('db').getItem<Media>(`media:${id}`)
}

export async function createMedia(data: Omit<Media, 'createdAt' | 'updatedAt'>): Promise<Media | null> {
  await useStorage('db').setItem(`media:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getMedia(data.id)
}

export async function deleteMedia(id: string): Promise<void> {
  await useStorage('db').removeItem(`media:${id}`)
}
