import type { GatewayAddOrderItemRequest, GatewayAddOrderItemResponse, GatewayCreateOrderResponse, GatewayDecrementOrderItemQuantityRequest, GatewayDecrementOrderItemQuantityResponse, GatewayGetOrderRequest, GatewayGetOrderResponse, GatewayIncrementOrderItemQuantityRequest, GatewayIncrementOrderItemQuantityResponse, GatewayUpdateOrderRequest, GatewayUpdateOrderResponse, Order, OrderItem } from '@nextorders/food-schema'
import { handleGetMenu } from './menu'

const logger = useLogger('order')

const orders = new Map<Order['id'], Order>()

function findOrder(id: string): Order | undefined {
  return orders.get(id)
}

function createOrder(): Order {
  const newOrder: Order = {
    id: crypto.randomUUID(),
    status: 'draft',
    createdAt: new Date().toISOString(),
    readyBy: '',
    readyType: 'asap',
    deliveryMethod: 'deliveryByCourier',
    paymentMethodId: '',
    address: {
      type: 'deliveryAddress',
      street: '',
      flat: '',
      intercom: '',
      entrance: '',
      floor: '',
      addressNote: '',
    },
    items: [],
    totalPrice: 0,
    note: '',
    name: '',
    phone: '',
  }

  orders.set(newOrder.id, newOrder)

  logger.success(`Order created: ${newOrder.id}`)

  return newOrder
}

function updateOrder(id: string, data: Partial<Order>): Order | undefined {
  const order = findOrder(id)
  if (!order) {
    return
  }

  orders.set(id, {
    ...order,
    ...data,
  })

  logger.success(`Order updated: ${id}`)

  return orders.get(id) as Order
}

function recalculateOrder(order: Order): Order {
  // For each
  order.items = order.items.map((item) => ({
    ...item,
    totalPrice: item.unitPrice * item.quantity,
  }))

  // Total price
  order.totalPrice = order.items.reduce((total, item) => total + item.totalPrice, 0)

  return order
}

export function handleGetOrder({ id }: GatewayGetOrderRequest['body']): GatewayGetOrderResponse {
  if (!id) {
    return {
      ok: true,
      type: 'getOrder',
      result: null,
    }
  }

  const order = findOrder(id)
  if (!order) {
    return {
      ok: true,
      type: 'getOrder',
      result: null,
    }
  }

  return {
    ok: true,
    type: 'getOrder',
    result: order,
  }
}

export function handleCreateOrder(): GatewayCreateOrderResponse {
  const order = createOrder()
  return {
    ok: true,
    type: 'createOrder',
    result: order,
  }
}

export function handleUpdateOrder(data: GatewayUpdateOrderRequest['body']): GatewayUpdateOrderResponse {
  if (!data.id) {
    throw new Error('Order id is required')
  }

  const order = updateOrder(data.id, data)
  if (!order) {
    throw new Error('Order not found')
  }

  return {
    ok: true,
    type: 'updateOrder',
    result: order,
  }
}

export function handleAddOrderItem({ orderId, variantId }: GatewayAddOrderItemRequest['body']): GatewayAddOrderItemResponse {
  const menu = handleGetMenu().result

  const category = menu.categories.find((category) => category.products.find((product) => product.variants.find((variant) => variant.id === variantId)))
  if (!category) {
    throw new Error('Category not found')
  }

  const product = menu.categories.flatMap((category) => category.products).find((product) => product.variants.find((variant) => variant.id === variantId))
  if (!product) {
    throw new Error('Product not found')
  }

  const variant = product.variants.find((variant) => variant.id === variantId)
  if (!variant) {
    throw new Error('Variant not found')
  }

  const newItem: OrderItem = {
    variantId,
    orderId,
    id: crypto.randomUUID(),
    categoryId: category.id,
    categorySlug: category.slug,
    productId: product.id,
    productSlug: product.slug,
    quantity: 1,
    unitPrice: variant.gross,
    totalPrice: variant.gross,
  }

  const order = findOrder(orderId)
  if (!order) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not found',
      message: `Order id ${orderId} not found`,
    })
  }

  const updatedOrder = updateOrder(orderId, {
    ...order,
    items: [
      ...order.items,
      newItem,
    ],
  })
  if (!updatedOrder) {
    throw new Error('Order not found')
  }

  const recalculatedOrder = recalculateOrder(updatedOrder)

  return {
    ok: true,
    type: 'addOrderItem',
    result: recalculatedOrder,
  }
}

export function handleChangeOrderItemQuantity(data: GatewayIncrementOrderItemQuantityRequest['body'] | GatewayDecrementOrderItemQuantityRequest['body']): GatewayIncrementOrderItemQuantityResponse | GatewayDecrementOrderItemQuantityResponse {
  const order = findOrder(data.orderId)
  if (!order) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not found',
      message: `Order id ${data.orderId} not found`,
    })
  }

  const item = order.items.find((item) => item.id === data.itemId)
  if (!item) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not found',
      message: `Item id ${data.itemId} not found`,
    })
  }

  const newQuantity = item.quantity + (data.method === 'increment' ? 1 : -1)
  if (newQuantity <= 0) {
    // Remove item
    order.items = order.items.filter((item) => item.id !== data.itemId)
  } else {
    // Update quantity
    item.quantity = newQuantity
  }

  const updatedOrder = updateOrder(data.orderId, order)
  if (!updatedOrder) {
    throw new Error('Order not found')
  }

  const recalculatedOrder = recalculateOrder(updatedOrder)

  return {
    ok: true,
    type: data.method === 'increment' ? 'incrementOrderItemQuantity' : 'decrementOrderItemQuantity',
    result: recalculatedOrder,
  }
}
