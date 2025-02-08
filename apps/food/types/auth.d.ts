declare module '#auth-utils' {
  interface User {
    id: string
    isStaff: boolean
    name: string | null
    permissions: PermissionCode[]
  }

  interface Checkout {
    id: string
  }

  interface SecureSessionData {
    checkout?: Checkout | null
  }
}

export {}
