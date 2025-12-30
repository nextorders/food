import type { DaySchedule, NextOpening, OpeningStatus, Schedule, TimePeriod, TimeZone, WeekDay } from '@nextorders/food-schema'
import { TZDate } from '@date-fns/tz'
import { TimeSchema } from '@nextorders/food-schema'

const DAYS_OF_WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] satisfies WeekDay[]

/**
 * Checks the status of the store according to the schedule.
 * @param schedule - schedule for the week
 * @param timeZone - time zone
 * @returns object for storefront
 */
export function getOpeningStatus(schedule: Schedule, timeZone: TimeZone): OpeningStatus {
  const now = new TZDate(new Date(), timeZone)
  const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  const currentDayIndex = now.getDay()
  const currentDay = DAYS_OF_WEEK[currentDayIndex] as WeekDay

  const todaySchedule = schedule.find((s): s is DaySchedule => s.day === currentDay)
  if (!todaySchedule) {
    throw new Error(`No schedule found for day: ${currentDay}`)
  }

  const isOpenedNow = todaySchedule.isClosed === false && todaySchedule.hours?.some((period) => isTimeInPeriod(currentTime, period))

  const end = isOpenedNow ? todaySchedule.hours?.at(-1)?.end : undefined

  return {
    isClosed: !isOpenedNow,
    currentTime,
    currentDay,
    todayHours: todaySchedule.hours ?? null,
    todayEndAt: end ?? null,
    todayEndInMinutes: calculateMinutesBeforeEnd(now, end) ?? null,
    nextOpening: isOpenedNow ? null : calculateNextOpeningFromToday({ schedule, currentDay, todaySchedule, currentTime }),
    timeZone,
  }
}

const SLOT_DURATION_MINUTES = 30 // Duration of each time slot (in minutes)
const ROUNDING_INTERVAL_MINUTES = 15 // Rounding interval (in minutes)
const PREPARATION_OFFSET_MINUTES = 40 // Preparation time offset (in minutes)
const CLOSING_OFFSET_MINUTES = 30 // Closing time offset (in minutes)

/**
 * Generates time slots from current time (rounded up to next rounding interval)
 * until today's closing time based on the provided schedule.
 * Each slot is formatted as a TimePeriod object: { start: "HH:mm", end: "HH:mm" }.
 *
 * @param schedule - Weekly store schedule (array of DaySchedule objects)
 * @param timeZone - Timezone of the store
 * @returns Array of TimePeriod objects representing available time slots
 */
export function getTimeSlotsFromNow(schedule: Schedule, timeZone: TimeZone): TimePeriod[] {
  const now = new TZDate(new Date(), timeZone)
  const slots: TimePeriod[] = []

  // Determine current day of week
  const currentDayIndex = now.getDay()
  const currentDay = DAYS_OF_WEEK[currentDayIndex] as WeekDay

  // Find today's schedule
  const todaySchedule = schedule.find((s): s is DaySchedule => s.day === currentDay)
  if (!todaySchedule || todaySchedule.isClosed || !todaySchedule.hours?.length) {
    return slots // No valid schedule for today
  }

  // Get today's last closing period (we'll use the latest end time)
  const lastPeriod = todaySchedule.hours[todaySchedule.hours.length - 1]
  if (!lastPeriod) {
    return slots
  }
  const closingTime = lastPeriod.end

  // Parse closing time
  const [closingHourStr, closingMinuteStr] = closingTime.split(':')
  if (!closingHourStr || !closingMinuteStr) {
    return slots // Invalid closing time format
  }

  const closingHour = Number.parseInt(closingHourStr, 10)
  const closingMinute = Number.parseInt(closingMinuteStr, 10)

  // Create TZDate for closing time today
  const closingDate = new TZDate(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    closingHour,
    closingMinute,
    0,
    0,
    timeZone,
  )

  // Calculate effective closing time (with offset)
  const effectiveClosingDate = new TZDate(closingDate.getTime(), timeZone)
  effectiveClosingDate.setMinutes(effectiveClosingDate.getMinutes() - CLOSING_OFFSET_MINUTES)

  // If current time + offset is already past or equal to effective closing time, no slots available
  const offsetDate = new TZDate(now.getTime(), timeZone)
  offsetDate.setMinutes(offsetDate.getMinutes() + PREPARATION_OFFSET_MINUTES)

  if (offsetDate.getTime() >= effectiveClosingDate.getTime()) {
    return slots
  }

  // Round offset time up to the next rounding interval
  const currentDate = new TZDate(offsetDate.getTime(), timeZone)
  const currentMinutes = currentDate.getMinutes()
  const remainder = currentMinutes % ROUNDING_INTERVAL_MINUTES

  if (remainder !== 0) {
    // Round up to next interval mark (e.g., 13:17 → 13:30 for 15‑min interval)
    currentDate.setMinutes(currentMinutes + (ROUNDING_INTERVAL_MINUTES - remainder))
  } else {
    // If already on an interval boundary, keep as-is (e.g., 13:15)
    currentDate.setMinutes(currentMinutes)
  }
  currentDate.setSeconds(0)
  currentDate.setMilliseconds(0)

  // Generate slots while current time is before effective closing time
  while (currentDate.getTime() < effectiveClosingDate.getTime()) {
    // Calculate end of current slot
    const slotEnd = new TZDate(currentDate.getTime(), timeZone)
    slotEnd.setMinutes(slotEnd.getMinutes() + SLOT_DURATION_MINUTES)

    // If slot end exceeds effective closing time, truncate to effective closing time
    if (slotEnd.getTime() > effectiveClosingDate.getTime()) {
      slotEnd.setTime(effectiveClosingDate.getTime())
    }

    // Format times as "HH:MM"
    const start = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    const end = slotEnd.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    slots.push({ start, end })

    // Move to next rounding interval (not slot end!)
    currentDate.setMinutes(
      currentDate.getMinutes() + ROUNDING_INTERVAL_MINUTES,
    )
  }

  return slots
}

/**
 * Calculates the next opening, starting from the current day (used if today is not a day off,
 * but the current time is outside of business hours).
 */
function calculateNextOpeningFromToday({ schedule, currentDay, todaySchedule, currentTime }: { schedule: Schedule
  currentDay: WeekDay
  todaySchedule: DaySchedule
  currentTime: string }): NextOpening | null {
  // First, we check if there are any more periods today after the current time.
  const futurePeriodsToday = todaySchedule.hours?.filter((period) => {
    return period.end > currentTime
  })

  if (futurePeriodsToday?.length) {
    const nextPeriod = futurePeriodsToday.reduce(
      (earliest, period) => (period.start < earliest.start ? period : earliest),
    )

    return {
      day: currentDay,
      time: nextPeriod.start,
      relativeDays: 0,
    }
  }

  // If it doesn't open again today, look for it in the following days
  return calculateNextOpeningRelative(schedule, currentDay)
}

function calculateNextOpeningRelative(schedule: Schedule, currentDay: WeekDay): NextOpening | null {
  for (let offset = 1; offset <= 7; offset++) {
    const dayIndex = (DAYS_OF_WEEK.indexOf(currentDay) + offset) % 7
    const day = DAYS_OF_WEEK[dayIndex] as WeekDay
    const daySchedule = schedule.find((s): s is DaySchedule => s.day === day)

    if (daySchedule && !daySchedule?.isClosed && Array.isArray(daySchedule?.hours) && daySchedule.hours?.length > 0) {
      return {
        day,
        time: getEarliestTime(daySchedule.hours),
        relativeDays: offset,
      }
    }
  }

  // If haven't found an opening in the next 7 days (all days are closed)
  return null
}

// Compares time in HH:mm format
function isTimeInPeriod(time: string, period: { start: string, end: string }): boolean {
  const timeValid = TimeSchema.safeParse(time)
  const periodValid = TimeSchema.safeParse(period.start)
  const periodEndValid = TimeSchema.safeParse(period.end)

  if (!timeValid.success || !periodValid.success || !periodEndValid.success) {
    return false
  }

  // Case 24:00
  if (period.end === '24:00') {
    return time >= period.start
  }

  return time >= period.start && time < period.end
}

function calculateMinutesBeforeEnd(now: TZDate, endTime: string | undefined): number {
  const timeValid = TimeSchema.safeParse(endTime)
  if (!timeValid.success || !endTime) {
    return 0
  }

  // Extract hours and minutes from endTime
  const [endHoursStr, endMinutesStr] = endTime.split(':') as [string, string]
  const endHours = Number.parseInt(endHoursStr, 10)
  const endMinutes = Number.parseInt(endMinutesStr, 10)

  // Create a new TZDate for the end time today
  const endDate = new TZDate(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    endHours,
    endMinutes,
    0,
    0,
    now.timeZone,
  )

  // Calculate difference in milliseconds
  const diffMs = endDate.getTime() - now.getTime()

  // Convert to minutes and return (0 if negative)
  const minutesLeft = Math.floor(diffMs / 60000) // 60000 ms = 1 minute
  return minutesLeft > 0 ? minutesLeft : 0
}

// Returns the earliest time in the array
function getEarliestTime(hours: TimePeriod[]): string {
  if (!Array.isArray(hours) || hours.length === 0) {
    return ''
  }

  const firstPeriod = hours[0] as TimePeriod
  if (typeof firstPeriod?.start !== 'string' || firstPeriod.start === '') {
    return ''
  }

  return hours.reduce((min, period) => {
    if (typeof period.start !== 'string' || period.start === '') {
      return min
    }
    return period.start < min ? period.start : min
  }, firstPeriod.start as string)
}
