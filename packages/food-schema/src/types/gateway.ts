import z from 'zod'
import { ChannelSchema } from './channel'
import { MenuSchema } from './menu'
import { OptionsSchema } from './options'
import { AddressSuggestionSchema, DeliveryMethodSchema, OrderItemChangeSchema, OrderSchema } from './order'
import { OpeningStatusSchema, TimePeriodSchema } from './time'

/**
 * Gateway Types
 */
export const GatewayActionTypeSchema = z.enum([
  'getOptions',
  'getChannels',
  'getOrder',
  'createOrder',
  'updateOrder',
  'completeOrder',
  'addOrderItem',
  'incrementOrderItemQuantity',
  'decrementOrderItemQuantity',
  'getMenu',
  'getDeliveryByCourierStatus',
  'getSelfPickupStatus',
  'getTimeSlots',
  'suggestAddresses',
  'checkDeliveryZone',
])
export type GatewayActionType = z.infer<typeof GatewayActionTypeSchema>

/**
 * Generic Request structure
 */
export const GatewayRequestSchema = z.object({
  type: GatewayActionTypeSchema,
  params: z.record(z.string(), z.string()).optional(),
  body: z.unknown().optional(),
})
export type GatewayRequest = z.infer<typeof GatewayRequestSchema>

/**
 * Generic Response structure
 */
export const BaseResponseSchema = z.object({
  ok: z.boolean(),
  error: z.string().optional(),
})

// getOptions
export const GatewayGetOptionsRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('getOptions'),
})
export type GatewayGetOptionsRequest = z.infer<typeof GatewayGetOptionsRequestSchema>

export const GatewayGetOptionsResponseSchema = BaseResponseSchema.extend({
  type: z.literal('getOptions'),
  result: OptionsSchema,
})
export type GatewayGetOptionsResponse = z.infer<typeof GatewayGetOptionsResponseSchema>

// getChannels
export const GatewayGetChannelsRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('getChannels'),
})
export type GatewayGetChannelsRequest = z.infer<typeof GatewayGetChannelsRequestSchema>

export const GatewayGetChannelsResponseSchema = BaseResponseSchema.extend({
  type: z.literal('getChannels'),
  result: ChannelSchema.array(),
})
export type GatewayGetChannelsResponse = z.infer<typeof GatewayGetChannelsResponseSchema>

// getOrder
export const GatewayGetOrderRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('getOrder'),
  body: z.object({
    id: z.string().optional(),
  }),
})
export type GatewayGetOrderRequest = z.infer<typeof GatewayGetOrderRequestSchema>

export const GatewayGetOrderResponseSchema = BaseResponseSchema.extend({
  type: z.literal('getOrder'),
  result: OrderSchema.nullable(),
})
export type GatewayGetOrderResponse = z.infer<typeof GatewayGetOrderResponseSchema>

// createOrder
export const GatewayCreateOrderRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('createOrder'),
})
export type GatewayCreateOrderRequest = z.infer<typeof GatewayCreateOrderRequestSchema>

export const GatewayCreateOrderResponseSchema = BaseResponseSchema.extend({
  type: z.literal('createOrder'),
  result: OrderSchema,
})
export type GatewayCreateOrderResponse = z.infer<typeof GatewayCreateOrderResponseSchema>

// updateOrder
export const GatewayUpdateOrderRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('updateOrder'),
  body: OrderSchema.partial(),
})
export type GatewayUpdateOrderRequest = z.infer<typeof GatewayUpdateOrderRequestSchema>

export const GatewayUpdateOrderResponseSchema = BaseResponseSchema.extend({
  type: z.literal('updateOrder'),
  result: OrderSchema,
})
export type GatewayUpdateOrderResponse = z.infer<typeof GatewayUpdateOrderResponseSchema>

// completeOrder
export const GatewayCompleteOrderRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('completeOrder'),
  body: OrderSchema.partial(),
})
export type GatewayCompleteOrderRequest = z.infer<typeof GatewayCompleteOrderRequestSchema>

export const GatewayCompleteOrderResponseSchema = BaseResponseSchema.extend({
  type: z.literal('completeOrder'),
  result: OrderSchema,
})
export type GatewayCompleteOrderResponse = z.infer<typeof GatewayCompleteOrderResponseSchema>

// addOrderItem
export const GatewayAddOrderItemRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('addOrderItem'),
  body: z.object({
    orderId: z.string(),
    variantId: z.string(),
  }),
})
export type GatewayAddOrderItemRequest = z.infer<typeof GatewayAddOrderItemRequestSchema>

export const GatewayAddOrderItemResponseSchema = BaseResponseSchema.extend({
  type: z.literal('addOrderItem'),
  result: OrderSchema,
})
export type GatewayAddOrderItemResponse = z.infer<typeof GatewayAddOrderItemResponseSchema>

// incrementOrderItemQuantity
export const GatewayIncrementOrderItemQuantityRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('incrementOrderItemQuantity'),
  body: OrderItemChangeSchema,
})
export type GatewayIncrementOrderItemQuantityRequest = z.infer<typeof GatewayIncrementOrderItemQuantityRequestSchema>

export const GatewayIncrementOrderItemQuantityResponseSchema = BaseResponseSchema.extend({
  type: z.literal('incrementOrderItemQuantity'),
  result: OrderSchema,
})
export type GatewayIncrementOrderItemQuantityResponse = z.infer<typeof GatewayIncrementOrderItemQuantityResponseSchema>

// decrementOrderItemQuantity
export const GatewayDecrementOrderItemQuantityRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('decrementOrderItemQuantity'),
  body: OrderItemChangeSchema,
})
export type GatewayDecrementOrderItemQuantityRequest = z.infer<typeof GatewayDecrementOrderItemQuantityRequestSchema>

export const GatewayDecrementOrderItemQuantityResponseSchema = BaseResponseSchema.extend({
  type: z.literal('decrementOrderItemQuantity'),
  result: OrderSchema,
})
export type GatewayDecrementOrderItemQuantityResponse = z.infer<typeof GatewayDecrementOrderItemQuantityResponseSchema>

// getMenu
export const GatewayGetMenuRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('getMenu'),
})
export type GatewayGetMenuRequest = z.infer<typeof GatewayGetMenuRequestSchema>

export const GatewayGetMenuResponseSchema = BaseResponseSchema.extend({
  type: z.literal('getMenu'),
  result: MenuSchema,
})
export type GatewayGetMenuResponse = z.infer<typeof GatewayGetMenuResponseSchema>

// getDeliveryByCourierStatus
export const GatewayGetDeliveryByCourierStatusRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('getDeliveryByCourierStatus'),
  body: z.object({
    channelId: z.string(),
  }),
})
export type GatewayGetDeliveryByCourierStatusRequest = z.infer<typeof GatewayGetDeliveryByCourierStatusRequestSchema>

export const GatewayGetDeliveryByCourierStatusResponseSchema = BaseResponseSchema.extend({
  type: z.literal('getDeliveryByCourierStatus'),
  result: OpeningStatusSchema,
})
export type GatewayGetDeliveryByCourierStatusResponse = z.infer<typeof GatewayGetDeliveryByCourierStatusResponseSchema>

// getSelfPickupStatus
export const GatewayGetSelfPickupStatusRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('getSelfPickupStatus'),
  body: z.object({
    channelId: z.string(),
  }),
})
export type GatewayGetSelfPickupStatusRequest = z.infer<typeof GatewayGetSelfPickupStatusRequestSchema>

export const GatewayGetSelfPickupStatusResponseSchema = BaseResponseSchema.extend({
  type: z.literal('getSelfPickupStatus'),
  result: OpeningStatusSchema,
})
export type GatewayGetSelfPickupStatusResponse = z.infer<typeof GatewayGetSelfPickupStatusResponseSchema>

// getTimeSlots
export const GatewayGetTimeSlotsRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('getTimeSlots'),
  body: z.object({
    channelId: z.string(),
    deliveryMethod: DeliveryMethodSchema,
  }),
})
export type GatewayGetTimeSlotsRequest = z.infer<typeof GatewayGetTimeSlotsRequestSchema>

export const GatewayGetTimeSlotsResponseSchema = BaseResponseSchema.extend({
  type: z.literal('getTimeSlots'),
  result: TimePeriodSchema.array(),
})
export type GatewayGetTimeSlotsResponse = z.infer<typeof GatewayGetTimeSlotsResponseSchema>

// suggestAddresses
export const GatewaySuggestAddressesRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('suggestAddresses'),
  body: z.object({
    query: z.string().min(1).max(200),
    limit: z.number().int().min(1).max(50).optional(),
  }),
})
export type GatewaySuggestAddressesRequest = z.infer<typeof GatewaySuggestAddressesRequestSchema>

export const GatewaySuggestAddressesResponseSchema = BaseResponseSchema.extend({
  type: z.literal('suggestAddresses'),
  result: z.array(AddressSuggestionSchema),
})
export type GatewaySuggestAddressesResponse = z.infer<typeof GatewaySuggestAddressesResponseSchema>

// checkDeliveryZone
export const DeliveryZoneInfoSchema = z.object({
  name: z.string(),
  deliveryPrice: z.number(),
  minOrderAmount: z.number().nullable(),
})
export type DeliveryZoneInfo = z.infer<typeof DeliveryZoneInfoSchema>

export const GatewayCheckDeliveryZoneRequestSchema = GatewayRequestSchema.extend({
  type: z.literal('checkDeliveryZone'),
  body: z.object({
    lat: z.number(),
    lon: z.number(),
  }),
})
export type GatewayCheckDeliveryZoneRequest = z.infer<typeof GatewayCheckDeliveryZoneRequestSchema>

export const GatewayCheckDeliveryZoneResponseSchema = BaseResponseSchema.extend({
  type: z.literal('checkDeliveryZone'),
  result: DeliveryZoneInfoSchema.nullable(),
})
export type GatewayCheckDeliveryZoneResponse = z.infer<typeof GatewayCheckDeliveryZoneResponseSchema>

/**
 * Combined Gateway Response
 */
export const GatewayResponseSchema = z.discriminatedUnion('type', [
  GatewayGetOptionsResponseSchema,
  GatewayGetChannelsResponseSchema,
  GatewayGetOrderResponseSchema,
  GatewayCreateOrderResponseSchema,
  GatewayUpdateOrderResponseSchema,
  GatewayCompleteOrderResponseSchema,
  GatewayAddOrderItemResponseSchema,
  GatewayIncrementOrderItemQuantityResponseSchema,
  GatewayDecrementOrderItemQuantityResponseSchema,
  GatewayGetMenuResponseSchema,
  GatewayGetDeliveryByCourierStatusResponseSchema,
  GatewayGetSelfPickupStatusResponseSchema,
  GatewayGetTimeSlotsResponseSchema,
  GatewaySuggestAddressesResponseSchema,
  GatewayCheckDeliveryZoneResponseSchema,
])
export type GatewayResponse = z.infer<typeof GatewayResponseSchema>
