declare global {
  interface WorkingDay {
    index: 0 | 1 | 2 | 3 | 4 | 5 | 6
    day: DayCode
    open: string
    close: string
    isActive: boolean
  }

  type DayCode = 'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY'

  type WorkingWeek = [
    WorkingDay,
    WorkingDay,
    WorkingDay,
    WorkingDay,
    WorkingDay,
    WorkingDay,
    WorkingDay,
  ]

  interface Checkout {
    id: string
    createdAt: string
    updatedAt: string
    status: CheckoutStatus
    name: string
    phone: string
    deliveryMethod: CheckoutDeliveryMethod
    paymentMethodId: string
    shippingPrice: number
    totalPrice: number
    discount: number | null
    note: string | null
    time: string
    timeType: 'ASAP' | 'SCHEDULED'
    change: string | null
    warehouseId: string | null
    street: string
    flat: string | null
    intercom: string | null
    entrance: string | null
    floor: string | null
    addressNote: string | null
    channelId: string
    items: CheckoutLine[]
  }

  type CheckoutStatus = 'CREATED' | 'FINISHED' | 'CANCELED'
  type CheckoutDeliveryMethod = 'DELIVERY' | 'WAREHOUSE'

  interface CheckoutLine {
    id: string
    createdAt: string
    updatedAt: string
    totalPrice: number
    quantity: number
    unitPrice: number
    undiscountedUnitPrice: number
    undiscountedTotalPrice: number
    isGift: boolean
    checkoutId: string
    productVariantId: string
  }

  interface CheckoutReceiver {
    id: string
    createdAt: string
    updatedAt: string
    name: string
    url: string
    method: 'POST' | 'PUT'
    authorization?: string
    body?: Record<string, string>
  }

  interface CheckoutRegistryItem {
    id: string
    createdAt: string
    updatedAt: string
    checkoutId: string
    status: CheckoutStatus
  }
}

export {}
