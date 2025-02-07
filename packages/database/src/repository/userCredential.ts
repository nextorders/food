import type { UserCredentialsDraft } from '../types'
import { useDatabase } from '../database'
import { userCredentials } from '../tables'

export class UserCredential {
  static async findByLogin(login: string) {
    return useDatabase().query.userCredentials.findFirst({
      where: (credentials, { eq }) => eq(credentials.login, login),
    })
  }

  static async create(data: UserCredentialsDraft) {
    const [credential] = await useDatabase().insert(userCredentials).values(data).returning()
    return credential
  }
}
