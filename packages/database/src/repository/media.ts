import type { MediaDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { medias } from '../tables'

export class Media {
  static async create(data: MediaDraft) {
    const [media] = await useDatabase().insert(medias).values(data).returning()
    return media
  }

  static async delete(id: string) {
    return useDatabase().delete(medias).where(eq(medias.id, id)).returning()
  }
}
