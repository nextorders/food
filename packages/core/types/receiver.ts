export interface CheckoutForReceiver {
  id: string
  deliveryMethod: CheckoutDeliveryMethod
  time: string
  timeType: Checkout['timeType']
  paymentMethodName: string
  change?: string
  name: string
  phone: string
  note?: string
  totalPrice: number
  lines: {
    id: string
    name: string
    variant: string
    quantity: number
    totalPrice: number
  }[]
  warehouseAddress?: string
  address?: {
    street: string
    flat?: string
    doorphone?: string
    entrance?: string
    floor?: string
    addressNote?: string
  }
}
