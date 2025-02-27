declare global {
  interface Channel {
    id: string
    createdAt: string
    updatedAt: string
    slug: string
    name: string
    description: string | null
    conditions: string | null
    phone: string | null
    currencyCode: CurrencyCode
    countryCode: CountryCode
    timeZone: TimeZone
    isActive: boolean
    isDeliveryAvailable: boolean
    isPickupAvailable: boolean
    minAmountForDelivery: number | null
  }

  type CurrencyCode = 'USD' | 'EUR' | 'RUB' | 'GEL' | 'BYN' | 'UAH' | 'KZT' | 'PLN' | 'TRY'

  type CountryCode = 'RU' | 'US' | 'GB' | 'GR' | 'GE' | 'UA' | 'BY' | 'KZ' | 'FR' | 'DE' | 'IT' | 'ES' | 'TR' | 'PL'

  type Locale = 'ru' | 'en'

  type TimeZone = '-12:00' | '-11:00' | '-10:00' | '-09:00' | '-08:00' | '-07:00' | '-06:00' | '-05:00' | '-04:00' | '-03:00' | '-02:00' | '-01:00' | '00:00' | '+01:00' | '+02:00' | '+03:00' | '+04:00' | '+05:00' | '+06:00' | '+07:00' | '+08:00' | '+09:00' | '+10:00' | '+11:00' | '+12:00'

  interface PaymentMethod {
    id: string
    createdAt: string
    updatedAt: string
    name: string
    type: PaymentMethodType
  }

  type PaymentMethodType = 'CASH' | 'CARD' | 'CUSTOM'

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

  interface Media {
    id: string
    createdAt: string
    updatedAt: string
  }

  interface Menu {
    id: string
    createdAt: string
    updatedAt: string
    slug: string
    name: string
    isActive: boolean
    categories: MenuCategory[]
  }

  interface MenuCategory {
    id: string
    createdAt: string
    updatedAt: string
    slug: string
    name: string
    products: { id: string }[]
  }

  interface Product {
    id: string
    createdAt: string
    updatedAt: string
    slug: string
    name: string
    description: string
    isAvailableForPurchase: boolean
    mediaId: string | null
    variants: ProductVariant[]
  }

  interface ProductVariant {
    id: string
    createdAt: string
    updatedAt: string
    productId: string
    name: string
    weightUnit: WeightUnit
    weightValue: number
    gross: number
    net: number | null
    calories: number | null
    protein: number | null
    fat: number | null
    carbohydrate: number | null
    sku: string | null
  }

  type WeightUnit = 'G' | 'KG' | 'ML' | 'L' | 'OZ' | 'LB'

  interface Checkout {
    id: string
    createdAt: string
    updatedAt: string
    status: 'CREATED' | 'FINISHED' | 'CANCELED'
    name: string
    phone: string
    deliveryMethod: CheckoutDeliveryMethod
    paymentMethodId: string
    shippingPrice: number
    totalPrice: number
    discount: number | null
    note: string | null
    time: number
    change: string | null
    warehouseId: string | null
    street: string
    flat: string | null
    doorphone: string | null
    entrance: string | null
    floor: string | null
    addressNote: string | null
    channelId: string
  }

  type CheckoutDeliveryMethod = 'DELIVERY' | 'WAREHOUSE'

  interface CheckoutDraft extends Pick<Checkout, 'name' | 'phone' | 'paymentMethodId' | 'note' | 'time' | 'change' | 'warehouseId' | 'street' | 'flat' | 'doorphone' | 'entrance' | 'floor'> {
    time: number
    note: string | undefined
    change: number
    warehouseId: string | undefined
    street: string | undefined
    flat: string | undefined
    doorphone: string | undefined
    entrance: string | undefined
    floor: string | undefined
    addressNote: string | undefined
  }

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

  type CheckoutReceiver = {
    id: string
    createdAt: string
    updatedAt: string
    channelId: string
  } & CheckoutReceiverTypes

  type CheckoutReceiverTypes = CheckoutReceiverTypeEmail | CheckoutReceiverTypeHttp

  interface CheckoutReceiverTypeEmail {
    type: 'EMAIL'
    data: {
      url: string
      method: 'POST'
      token: string
      to: string
      template: 'NEW_CHECKOUT'
    }
  }

  interface CheckoutReceiverTypeHttp {
    type: 'HTTP'
    data: {
      url: string
      method: 'POST'
      token: string
    }
  }

  interface User {
    id: string
    createdAt: string
    updatedAt: string
    name: string | null
    email: string | null
    isActive: boolean
    isConfirmed: boolean
    isStaff: boolean
    permissions: PermissionCode[]
  }

  type PermissionCode = 'MASTER' | 'MANAGE_OPTIONS' | 'MANAGE_MENUS' | 'MANAGE_PRODUCTS' | 'MANAGE_CHECKOUTS' | 'MANAGE_CLIENTS' | 'MANAGE_WAREHOUSES'

  interface UserCredentials {
    id: string
    createdAt: string
    updatedAt: string
    login: string
    passwordHash: string
  }

  interface Warehouse {
    id: string
    createdAt: string
    updatedAt: string
    name: string
    address: string
  }
}

export {}
