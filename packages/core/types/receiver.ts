/**
 * Interface representing checkout data formatted for recipients
 */
export interface CheckoutForReceiver {
  /** Unique identifier for the checkout */
  id: string
  /** Method of delivery, either delivery to address or pickup from warehouse */
  deliveryMethod: 'DELIVERY' | 'WAREHOUSE'
  /** Delivery or pickup time */
  time: string
  /** Whether delivery should be ASAP or at a scheduled time */
  timeType: 'ASAP' | 'SCHEDULED'
  paymentMethodName: string
  /** Amount of cash that client has to pay */
  change?: string
  name: string
  phone: string
  /** Additional instructions for the order */
  note?: string
  totalPrice: number
  /** Items included in the order */
  items: {
    id: string
    name: string
    variant: string
    quantity: number
    totalPrice: number
  }[]
  /** Address of the warehouse for pickup */
  warehouseAddress?: string
  /** Delivery address details */
  address?: {
    street: string
    flat?: string
    doorphone?: string
    entrance?: string
    floor?: string
    addressNote?: string
  }
}
