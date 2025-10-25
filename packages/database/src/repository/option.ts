import type { OptionDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { options } from '../tables'

export class Option {
  static async find(id: string) {
    return useDatabase().query.options.findFirst({
      where: (options, { eq }) => eq(options.id, id),
    })
  }

  static async list() {
    return useDatabase().query.options.findMany()
  }

  static async create(data: OptionDraft) {
    const [option] = await useDatabase()
      .insert(options)
      .values(data)
      .returning()

    return option
  }

  static async update(id: string, data: Partial<OptionDraft>) {
    const [option] = await useDatabase()
      .update(options)
      .set(data)
      .where(eq(options.id, id))
      .returning()

    return option
  }

  static async delete(id: string) {
    await useDatabase().delete(options).where(eq(options.id, id))
  }
}
