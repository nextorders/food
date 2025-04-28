import type { ChannelDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { channels } from '../tables'

export class Channel {
  static async find(id: string) {
    return useDatabase().query.channels.findFirst({
      where: (channels, { eq }) => eq(channels.id, id),
    })
  }

  static async create(data: ChannelDraft) {
    const [channel] = await useDatabase()
      .insert(channels)
      .values(data)
      .returning()

    return channel
  }

  static async update(id: string, data: Partial<ChannelDraft>) {
    const [channel] = await useDatabase()
      .update(channels)
      .set(data)
      .where(eq(channels.id, id))
      .returning()

    return channel
  }

  static async delete(id: string) {
    await useDatabase().delete(channels).where(eq(channels.id, id))
  }
}
