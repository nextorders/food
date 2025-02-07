import type { UserDraft } from '../types'
import { useDatabase } from '../database'
import { users } from '../tables'

export class User {
  static async find(id: string) {
    return useDatabase().query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
      with: {
        permissions: true,
      },
    })
  }

  static async findMaster(channelId: string) {
    const user = await useDatabase().query.users.findFirst({
      where: (users, { eq, and }) => and(
        eq(users.channelId, channelId),
        eq(users.isStaff, true),
      ),
      orderBy: (users, { asc }) => [asc(users.createdAt)],
      with: {
        permissions: true,
      },
    })
    if (user?.permissions.find((permission) => permission.code === 'MASTER')) {
      return user
    }
  }

  static async create(data: UserDraft) {
    const [user] = await useDatabase().insert(users).values(data).returning()
    return user
  }
}
