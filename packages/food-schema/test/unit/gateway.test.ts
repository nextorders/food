import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { GatewayActionTypeSchema } from '../../src/types/gateway'

describe('gatewayActionTypeSchema', () => {
  it('invalid action type', () => {
    expect(() => GatewayActionTypeSchema.parse('oops!')).toThrow(ZodError)
  })

  it('valid action type', () => {
    const getOptions = GatewayActionTypeSchema.parse('getOptions')
    expect(getOptions).toBe('getOptions')

    const getChannels = GatewayActionTypeSchema.parse('getChannels')
    expect(getChannels).toBe('getChannels')

    const getOrder = GatewayActionTypeSchema.parse('getOrder')
    expect(getOrder).toBe('getOrder')

    const createOrder = GatewayActionTypeSchema.parse('createOrder')
    expect(createOrder).toBe('createOrder')

    const updateOrder = GatewayActionTypeSchema.parse('updateOrder')
    expect(updateOrder).toBe('updateOrder')

    const addOrderItem = GatewayActionTypeSchema.parse('addOrderItem')
    expect(addOrderItem).toBe('addOrderItem')

    const incrementOrderItemQuantity = GatewayActionTypeSchema.parse('incrementOrderItemQuantity')
    expect(incrementOrderItemQuantity).toBe('incrementOrderItemQuantity')

    const getMenu = GatewayActionTypeSchema.parse('getMenu')
    expect(getMenu).toBe('getMenu')

    const getDeliveryByCourierStatus = GatewayActionTypeSchema.parse('getDeliveryByCourierStatus')
    expect(getDeliveryByCourierStatus).toBe('getDeliveryByCourierStatus')

    const getSelfPickupStatus = GatewayActionTypeSchema.parse('getSelfPickupStatus')
    expect(getSelfPickupStatus).toBe('getSelfPickupStatus')

    const getTimeSlots = GatewayActionTypeSchema.parse('getTimeSlots')
    expect(getTimeSlots).toBe('getTimeSlots')

    const decrementOrderItemQuantity = GatewayActionTypeSchema.parse('decrementOrderItemQuantity')
    expect(decrementOrderItemQuantity).toBe('decrementOrderItemQuantity')
  })
})
