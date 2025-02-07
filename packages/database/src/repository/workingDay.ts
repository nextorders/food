import type { WorkingDayDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { workingDays } from '../tables'

export class WorkingDay {
  static async findByDayAndChannelId(channelId: string, day: string) {
    return useDatabase().query.workingDays.findFirst({
      where: (workingDays, { eq, and }) => and(
        eq(workingDays.channelId, channelId),
        eq(workingDays.day, day),
      ),
    })
  }

  static async patch(id: string, data: Partial<WorkingDayDraft>) {
    const [workingDay] = await useDatabase().update(workingDays).set(data).where(eq(workingDays.id, id)).returning()
    return workingDay
  }

  static async create(data: WorkingDayDraft) {
    const [workingDay] = await useDatabase().insert(workingDays).values(data).returning()
    return workingDay
  }
}
