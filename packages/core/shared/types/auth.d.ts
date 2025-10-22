declare module '#auth-utils' {
  interface User {
    id: string
    isStaff: boolean
    name: string | null
    permissions: PermissionCode[]
  }

  interface SecureSessionData {
    checkoutId?: string | null
  }
}

export {}
