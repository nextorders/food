import type {
  GatewayActionType,
  GatewayAddOrderItemRequest,
  GatewayCheckDeliveryZoneRequest,
  GatewayCompleteOrderRequest,
  GatewayCreateOrderRequest,
  GatewayDecrementOrderItemQuantityRequest,
  GatewayGetChannelsRequest,
  GatewayGetDeliveryByCourierStatusRequest,
  GatewayGetMenuRequest,
  GatewayGetOptionsRequest,
  GatewayGetOrderRequest,
  GatewayGetSelfPickupStatusRequest,
  GatewayGetTimeSlotsRequest,
  GatewayIncrementOrderItemQuantityRequest,
  GatewayResponse,
  GatewaySuggestAddressesRequest,
  GatewayUpdateOrderRequest,
} from '@nextorders/food-schema'
import { GatewayResponseSchema } from '@nextorders/food-schema'

type GatewayRequestMap = {
  getOptions: GatewayGetOptionsRequest
  getChannels: GatewayGetChannelsRequest
  getOrder: GatewayGetOrderRequest
  createOrder: GatewayCreateOrderRequest
  updateOrder: GatewayUpdateOrderRequest
  completeOrder: GatewayCompleteOrderRequest
  addOrderItem: GatewayAddOrderItemRequest
  incrementOrderItemQuantity: GatewayIncrementOrderItemQuantityRequest
  decrementOrderItemQuantity: GatewayDecrementOrderItemQuantityRequest
  getMenu: GatewayGetMenuRequest
  getDeliveryByCourierStatus: GatewayGetDeliveryByCourierStatusRequest
  getSelfPickupStatus: GatewayGetSelfPickupStatusRequest
  getTimeSlots: GatewayGetTimeSlotsRequest
  suggestAddresses: GatewaySuggestAddressesRequest
  checkDeliveryZone: GatewayCheckDeliveryZoneRequest
}

type AllGatewayRequests = GatewayRequestMap[keyof GatewayRequestMap]
type GatewayResponseFor<T> = T extends { type: infer U extends GatewayActionType }
  ? Extract<GatewayResponse, { type: U }>
  : never

export async function fetchApi<T extends AllGatewayRequests>(data: T): Promise<GatewayResponseFor<T>> {
  const { apiUrl, apiToken } = useRuntimeConfig()

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiToken,
      },
    })
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: `API error: ${response.statusText}`,
      })
    }

    const rawResponse = await response.json()

    const validated = GatewayResponseSchema.parse(rawResponse)

    if (!validated.ok) {
      throw createError({
        statusCode: 400,
        message: validated.error ?? 'Request failed',
      })
    }

    return validated as GatewayResponseFor<T>
  } catch (error) {
    throw errorResolver(error)
  }
}
