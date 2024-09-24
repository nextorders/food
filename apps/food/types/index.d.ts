declare global {
  interface Channel {
    id: string
    createdAt: Date
    updatedAt: Date
    slug: string
    name: string
    description: string | null
    currencyCode: CurrencyCode
    isActive: boolean
  }

  type CurrencyCode = 'USD' | 'EUR' | 'RUB'

  interface Menu {
    id: string
    createdAt: Date
    updatedAt: Date
    slug: string
    name: string
    channelId: string
    categories: MenuCategory[]
  }

  interface MenuCategory {
    id: string
    createdAt: Date
    updatedAt: Date
    slug: string
    name: string
    menuId: string
  }

  type MenuCategoryIcon =
    | 'DEFAULT'
    | 'BURGER'
    | 'PIZZA'
    | 'ROLLS'
    | 'SUSHI'
    | 'WOK'
    | 'CAKE'
    | 'LASAGNA'
    | 'DRINK'

  interface Product {
    id: string
    createdAt: Date
    updatedAt: Date
    slug: string
    name: string
    description: string
    isAvailableForPurchase: boolean
    channelId: string
    categoryId: string
    variants: ProductVariant[]
  }

  interface ProductVariant {
    id: string
    createdAt: Date
    updatedAt: Date
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
  }

  type WeightUnit = 'G' | 'KG' | 'ML' | 'L' | 'OZ' | 'LB'

  interface Checkout {
    id: string
    createdAt: Date
    updatedAt: Date
    deliveryMethod: CheckoutDeliveryMethod
    shippingPrice: number
    totalPrice: number
    discount: number | null
    channelId: string
  }

  type CheckoutDeliveryMethod = 'DELIVERY' | 'WAREHOUSE'

  interface CheckoutLine {
    id: string
    createdAt: Date
    updatedAt: Date
    checkoutId: string
    productVariantId: string
    quantity: number
    unitPrice: number
    undiscountedUnitPrice: number
    totalPrice: number
    undiscountedTotalPrice: number
    isGift: boolean
  }

  interface User {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string | null
    isActive: boolean
    isConfirmed: boolean
    isStaff: boolean
    channelId: string
  }

  interface UserPermission {
    id: string
    createdAt: Date
    updatedAt: Date
    code: PermissionCode
    userId: string
  }

  type PermissionCode = 'MASTER' | 'MANAGE_OPTIONS' | 'MANAGE_MENUS' | 'MANAGE_PRODUCTS' | 'MANAGE_CHECKOUTS' | 'MANAGE_CLIENTS'

  interface UserCredentials {
    id: string
    createdAt: Date
    updatedAt: Date
    login: string
    passwordHash: string
    userId: string
  }
}

export {}
