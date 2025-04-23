import type { MediaDraft, MediaItem, MediaItemDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { mediaItems, media as mediaTable } from '../tables'

export class Media {
  static async find(id: string) {
    return useDatabase().query.media.findFirst({
      where: (media, { eq }) => eq(media.id, id),
      with: {
        items: true,
      },
    })
  }

  static async create(data: MediaDraft, items?: MediaItem[]) {
    const [media] = await useDatabase()
      .insert(mediaTable)
      .values(data)
      .returning()

    if (items) {
      for (const item of items) {
        await Media.createItem(item)
      }
    }

    return media
  }

  static async createItem(data: MediaItemDraft) {
    const [item] = await useDatabase()
      .insert(mediaItems)
      .values(data)
      .returning()

    return item
  }

  static async update(id: string, data: Partial<MediaDraft>) {
    const [media] = await useDatabase()
      .update(mediaTable)
      .set(data)
      .where(eq(mediaTable.id, id))
      .returning()

    return media
  }

  static async delete(id: string) {
    return useDatabase().delete(mediaTable).where(eq(mediaTable.id, id))
  }
}
