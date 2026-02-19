import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { GatewayActionTypeSchema, GatewayGetOrderRequestSchema, GatewayResponseSchema } from '../../src/types/gateway'

describe('gatewayActionTypeSchema', () => {
  it('rejects invalid action type', () => {
    expect(() => GatewayActionTypeSchema.parse('oops!')).toThrow(ZodError)
  })

  it('valid action types', () => {
    expect(GatewayActionTypeSchema.parse('getOptions')).toBe('getOptions')
    expect(GatewayActionTypeSchema.parse('createOrder')).toBe('createOrder')
    expect(GatewayActionTypeSchema.parse('getMenu')).toBe('getMenu')
  })
})

describe('gatewayGetOrderRequestSchema', () => {
  it('valid request with optional id', () => {
    const data = GatewayGetOrderRequestSchema.parse({
      type: 'getOrder',
      body: { id: 'order-1' },
    })
    expect(data.body.id).toBe('order-1')
  })

  it('valid request without id', () => {
    const data = GatewayGetOrderRequestSchema.parse({
      type: 'getOrder',
      body: {},
    })
    expect(data.body.id).toBeUndefined()
  })
})

describe('gatewayResponseSchema', () => {
  it('discriminates by type', () => {
    const data = GatewayResponseSchema.parse({
      ok: true,
      type: 'getMenu',
      result: {
        id: '1',
        slug: 'main',
        title: [],
        isActive: true,
        categories: [],
      },
    })
    expect(data.type).toBe('getMenu')
  })

  it('rejects unknown type', () => {
    expect(() => GatewayResponseSchema.parse({
      ok: true,
      type: 'unknownAction',
      result: {},
    })).toThrow(ZodError)
  })
})
