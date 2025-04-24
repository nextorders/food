import { type } from 'arktype'

const DeliveryMethodSchema = type('"DELIVERY" | "WAREHOUSE"')

const TimeTypeSchema = type('"ASAP" | "SCHEDULED"')

const CheckoutItemSchema = type({
  id: 'string',
  name: 'string',
  variant: 'string',
  quantity: 'number',
  totalPrice: 'number',
})

const CheckoutAddressSchema = type({
  street: 'string',
  flat: 'string?',
  doorphone: 'string?',
  entrance: 'string?',
  floor: 'string?',
  addressNote: 'string?',
})

export const CheckoutForReceiverSchema = type({
  /** Unique identifier for the checkout */
  id: 'string',
  /** Method of delivery, either delivery to address or pickup from warehouse */
  deliveryMethod: DeliveryMethodSchema,
  /** Delivery or pickup time */
  time: 'string',
  /** Whether delivery should be ASAP or at a scheduled time */
  timeType: TimeTypeSchema,
  paymentMethodName: 'string',
  /** Amount of cash that client has to pay */
  change: 'string?',
  name: 'string',
  phone: 'string',
  /** Additional instructions for the order */
  note: 'string?',
  totalPrice: 'number',
  /** Items included in the order */
  items: CheckoutItemSchema.array(),
  /** Address of the warehouse for pickup */
  warehouseAddress: 'string?',
  /** Delivery address details */
  address: CheckoutAddressSchema.optional(),
})
export type CheckoutForReceiver = typeof CheckoutForReceiverSchema.infer
