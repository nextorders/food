import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { OrderItemSchema, OrderSchema } from '../../src/types/order'

describe('orderItemSchema', () => {
  it('rejects negative unitPrice', () => {
    expect(() => OrderItemSchema.parse({
      id: '1',
      orderId: 'o1',
      productId: 'p1',
      productSlug: 'pizza',
      categoryId: 'c1',
      categorySlug: 'main',
      variantId: 'v1',
      quantity: 1,
      unitPrice: -100,
      totalPrice: 0,
    })).toThrow(ZodError)
  })

  it('rejects zero quantity', () => {
    expect(() => OrderItemSchema.parse({
      id: '1',
      orderId: 'o1',
      productId: 'p1',
      productSlug: 'pizza',
      categoryId: 'c1',
      categorySlug: 'main',
      variantId: 'v1',
      quantity: 0,
      unitPrice: 100,
      totalPrice: 0,
    })).toThrow(ZodError)
  })

  it('valid order item', () => {
    const data = OrderItemSchema.parse({
      id: '1',
      orderId: 'o1',
      productId: 'p1',
      productSlug: 'pizza',
      categoryId: 'c1',
      categorySlug: 'main',
      variantId: 'v1',
      quantity: 2,
      unitPrice: 499,
      totalPrice: 998,
    })
    expect(data.quantity).toBe(2)
    expect(data.totalPrice).toBe(998)
  })
})

describe('orderSchema', () => {
  it('rejects negative totalPrice', () => {
    expect(() => OrderSchema.parse({
      id: '1',
      status: 'draft',
      createdAt: '2024-01-01',
      readyBy: '2024-01-01',
      readyType: 'asap',
      deliveryMethod: 'selfPickup',
      address: { type: 'warehouseAddress', id: 'w1' },
      paymentMethodId: 'pm1',
      totalPrice: -1,
      name: 'John',
      phone: '+1234567890',
      items: [],
    })).toThrow(ZodError)
  })

  it('valid order with delivery address', () => {
    const data = OrderSchema.parse({
      id: '1',
      status: 'draft',
      createdAt: '2024-01-01',
      readyBy: '2024-01-01',
      readyType: 'asap',
      deliveryMethod: 'deliveryByCourier',
      address: {
        type: 'deliveryAddress',
        street: '123 Main St',
      },
      paymentMethodId: 'pm1',
      totalPrice: 0,
      name: 'John',
      phone: '+1234567890',
      items: [],
    })
    expect(data.status).toBe('draft')
  })
})
