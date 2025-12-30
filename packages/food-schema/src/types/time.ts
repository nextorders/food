import z from 'zod'
import { LocaleValueSchema } from './common'

export const TimeZoneSchema = z.enum([
  '-12:00', '-11:00', '-10:00', '-09:00', '-08:00', '-07:00', '-06:00',
  '-05:00', '-04:00', '-03:00', '-02:00', '-01:00', '+00:00', '+01:00',
  '+02:00', '+03:00', '+04:00', '+05:00', '+06:00', '+07:00', '+08:00',
  '+09:00', '+10:00', '+11:00', '+12:00', '+13:00', '+14:00',
])
export type TimeZone = z.infer<typeof TimeZoneSchema>

export const TimeSchema = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/) // HH:MM

export const TimePeriodSchema = z.object({
  start: TimeSchema,
  end: TimeSchema,
})
export type TimePeriod = z.infer<typeof TimePeriodSchema>

export const WeekDaySchema = z.enum(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'])
export type WeekDay = z.infer<typeof WeekDaySchema>

const DayScheduleSchema = z.object({
  day: WeekDaySchema,
  isClosed: z.boolean(),
  hours: TimePeriodSchema.array().optional(), // time period (example: from 9:00 to 13:00 and from 14:00 to 18:00)
  comment: LocaleValueSchema.array().optional(), // odd info (example: 'by appointment only')
})
export type DaySchedule = z.infer<typeof DayScheduleSchema>

export const ScheduleSchema = z.array(DayScheduleSchema)
  .refine((schedules) => {
    const days = schedules.map((s) => s.day)
    return new Set(days).size === days.length && days.length === 7
  }, {
    message: 'All days of the week must be represented exactly once',
  })
export type Schedule = z.infer<typeof ScheduleSchema>

const NextOpeningSchema = z.object({
  day: WeekDaySchema,
  time: TimeSchema,
  relativeDays: z.number().int(),
})
export type NextOpening = z.infer<typeof NextOpeningSchema>

export const OpeningStatusSchema = z.object({
  isClosed: z.boolean(),
  timeZone: TimeZoneSchema,
  currentTime: TimeSchema,
  currentDay: WeekDaySchema,
  todayHours: TimePeriodSchema.array().nullable(),
  todayEndAt: TimeSchema.nullable(),
  todayEndInMinutes: z.number().nullable(),
  nextOpening: NextOpeningSchema.nullable(),
})
export type OpeningStatus = z.infer<typeof OpeningStatusSchema>
