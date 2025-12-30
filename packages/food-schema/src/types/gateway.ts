import z from 'zod'
import { ChannelSchema } from './channel'
import { MenuSchema } from './menu'
import { OptionsSchema } from './options'
import { DeliveryMethodSchema, OrderItemChangeSchema, OrderSchema } from './order'
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
  'addOrderItem',
  'incrementOrderItemQuantity',
  'decrementOrderItemQuantity',
  'getMenu',
  'getDeliveryByCourierStatus',
  'getSelfPickupStatus',
  'getTimeSlots',
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
  error: z.string().nullable().optional(),
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
    id: z.string().optional().nullable(),
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

/**
 * Combined Gateway Response
 */
export const GatewayResponseSchema = z.discriminatedUnion('type', [
  GatewayGetOptionsResponseSchema,
  GatewayGetChannelsResponseSchema,
  GatewayGetOrderResponseSchema,
  GatewayCreateOrderResponseSchema,
  GatewayUpdateOrderResponseSchema,
  GatewayAddOrderItemResponseSchema,
  GatewayIncrementOrderItemQuantityResponseSchema,
  GatewayDecrementOrderItemQuantityResponseSchema,
  GatewayGetMenuResponseSchema,
  GatewayGetDeliveryByCourierStatusResponseSchema,
  GatewayGetSelfPickupStatusResponseSchema,
  GatewayGetTimeSlotsResponseSchema,
])
export type GatewayResponse = z.infer<typeof GatewayResponseSchema>
