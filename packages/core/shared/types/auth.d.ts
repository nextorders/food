declare module '#auth-utils' {
  interface User {
    id: string
    orderId?: string
    completedOrderIds?: string[]
  }
}

export {}
