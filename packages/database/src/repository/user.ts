import type { UserCredentialDraft, UserDraft, UserPermissionDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { userCredentials, userPermissions, users } from '../tables'

export class User {
  static async find(id: string) {
    return useDatabase().query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
      with: {
        permissions: true,
      },
    })
  }

  static async findCredentialByLogin(login: string) {
    return useDatabase().query.userCredentials.findFirst({
      where: (credentials, { eq }) => eq(credentials.login, login),
    })
  }

  static async findMaster() {
    const masterPermission = await useDatabase().query.userPermissions.findFirst({
      where: (permissions, { eq }) => eq(permissions.code, 'MASTER'),
    })
    if (!masterPermission) {
      return
    }

    return User.find(masterPermission.userId)
  }

  static async create(data: UserDraft) {
    const [user] = await useDatabase()
      .insert(users)
      .values(data)
      .returning()

    return user
  }

  static async createPermission(data: UserPermissionDraft) {
    const [permission] = await useDatabase()
      .insert(userPermissions)
      .values(data)
      .returning()

    return permission
  }

  static async createCredential(data: UserCredentialDraft) {
    const [credential] = await useDatabase()
      .insert(userCredentials)
      .values(data)
      .returning()

    return credential
  }

  static async update(id: string, data: Partial<UserDraft>) {
    const [user] = await useDatabase()
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning()

    return user
  }

  static async delete(id: string) {
    return useDatabase().delete(users).where(eq(users.id, id))
  }

  static async deletePermission(id: string) {
    return useDatabase().delete(userPermissions).where(eq(userPermissions.id, id))
  }

  static async deleteCredential(id: string) {
    return useDatabase().delete(userCredentials).where(eq(userCredentials.id, id))
  }
}
