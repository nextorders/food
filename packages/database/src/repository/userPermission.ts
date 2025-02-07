import type { UserPermissionDraft } from '../types'
import { useDatabase } from '../database'
import { userPermissions } from '../tables'

export class UserPermission {
  static async create(data: UserPermissionDraft) {
    const [permission] = await useDatabase().insert(userPermissions).values(data).returning()
    return permission
  }
}
