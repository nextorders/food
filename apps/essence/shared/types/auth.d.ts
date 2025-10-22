import type { PermissionCode } from '@nextorders/schema'

declare module '#auth-utils' {
  interface User {
    id: string
    isStaff: boolean
    name: string | null
    permissions: PermissionCode[]
  }

  interface UserSession {
    user: User
  }
}

export {}
