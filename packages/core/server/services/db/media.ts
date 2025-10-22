import type { Media, MediaItem } from '@nextorders/schema'
import type { MediaWithItems } from '../../../shared/types/food'

export async function getMedia(id: string): Promise<MediaWithItems | null> {
  return useStorage('db').getItem<MediaWithItems>(`media:${id}`)
}

export async function createMedia(data: Omit<Media, 'createdAt' | 'updatedAt'>, items?: MediaItem[]): Promise<Media | null> {
  await useStorage('db').setItem(`media:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    items,
  })
  return getMedia(data.id)
}

export async function deleteMedia(id: string): Promise<void> {
  await useStorage('db').removeItem(`media:${id}`)
}
