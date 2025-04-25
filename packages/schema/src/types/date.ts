import { type } from 'arktype'

const test = [
  type('"-12:00"'), type('"-11:00"'), type('"-10:00"'), type('"-09:00"'),
  type('"-08:00"'), type('"-07:00"'), type('"-06:00"'), type('"-05:00"'),
  type('"-04:00"'), type('"-03:00"'), type('"-02:00"'), type('"-01:00"'),
  type('"+00:00"'), type('"+01:00"'), type('"+02:00"'), type('"+03:00"'),
  type('"+04:00"'), type('"+05:00"'), type('"+06:00"'), type('"+07:00"'),
  type('"+08:00"'), type('"+09:00"'), type('"+10:00"'), type('"+11:00"'),
  type('"+12:00"'), type('"+13:00"'), type('"+14:00"'),
] as const
export const TimeZoneSchema = type.or(...test)
export type TimeZone = typeof TimeZoneSchema.infer
