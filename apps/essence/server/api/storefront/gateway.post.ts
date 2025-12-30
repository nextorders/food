import type { GatewayAddOrderItemRequest, GatewayDecrementOrderItemQuantityRequest, GatewayGetDeliveryByCourierStatusRequest, GatewayGetOrderRequest, GatewayGetSelfPickupStatusRequest, GatewayGetTimeSlotsRequest, GatewayIncrementOrderItemQuantityRequest, GatewayRequest, GatewayUpdateOrderRequest } from '@nextorders/food-schema'
import { handleGetChannels, handleGetDeliveryByCourierStatus, handleGetSelfPickupStatus, handleGetTimeSlots } from '~/server/services/channel'
import { handleGetMenu } from '~/server/services/menu'
import { handleGetOptions } from '~/server/services/options'
import { handleAddOrderItem, handleChangeOrderItemQuantity, handleCreateOrder, handleGetOrder, handleUpdateOrder } from '~/server/services/order'

export default defineEventHandler(async (event) => {
  try {
    const request: GatewayRequest = await readBody(event)

    switch (request.type) {
      case 'getOptions':
        return handleGetOptions()
      case 'getChannels':
        return handleGetChannels()
      case 'getMenu':
        return handleGetMenu()
      case 'getOrder':
        return handleGetOrder(request.body as GatewayGetOrderRequest['body'])
      case 'createOrder':
        return handleCreateOrder()
      case 'updateOrder':
        return handleUpdateOrder(request.body as GatewayUpdateOrderRequest['body'])
      case 'addOrderItem':
        return handleAddOrderItem(request.body as GatewayAddOrderItemRequest['body'])
      case 'incrementOrderItemQuantity':
      case 'decrementOrderItemQuantity':
        return handleChangeOrderItemQuantity(request.body as GatewayIncrementOrderItemQuantityRequest['body'] | GatewayDecrementOrderItemQuantityRequest['body'])
      case 'getDeliveryByCourierStatus':
        return handleGetDeliveryByCourierStatus(request.body as GatewayGetDeliveryByCourierStatusRequest['body'])
      case 'getSelfPickupStatus':
        return handleGetSelfPickupStatus(request.body as GatewayGetSelfPickupStatusRequest['body'])
      case 'getTimeSlots':
        return handleGetTimeSlots(request.body as GatewayGetTimeSlotsRequest['body'])
      default:
        throw createError({
          statusCode: 400,
          message: 'Invalid type',
        })
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
