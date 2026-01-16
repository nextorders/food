import { describe, expect, it } from 'vitest'
import { ScheduleSchema, TimeZoneSchema } from '../../src/types/time'

describe('timeZoneSchema', () => {
  it('invalid timezone format', () => {
    try {
      TimeZoneSchema.parse('+15:00')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })

  it('valid timezone format', () => {
    const timeZone = TimeZoneSchema.parse('+00:00')
    expect(timeZone).toBe('+00:00')
  })
})

describe('scheduleSchema', () => {
  it('repeating days', () => {
    try {
      ScheduleSchema.parse([
        {
          day: 'mon',
          isClosed: false,
        },
        {
          day: 'mon',
          isClosed: false,
        },
      ])
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })

  it('all days of the week must be represented exactly once', () => {
    ScheduleSchema.parse([
      {
        day: 'mon',
        isClosed: false,
        hours: [
          {
            start: '10:00',
            end: '21:00',
          },
        ],
      },
      {
        day: 'tue',
        isClosed: false,
        hours: [
          {
            start: '10:00',
            end: '21:00',
          },
        ],
      },
      {
        day: 'wed',
        isClosed: false,
        hours: [
          {
            start: '10:00',
            end: '21:00',
          },
        ],
      },
      {
        day: 'thu',
        isClosed: false,
        hours: [
          {
            start: '10:00',
            end: '21:00',
          },
        ],
      },
      {
        day: 'fri',
        isClosed: false,
        hours: [
          {
            start: '10:00',
            end: '21:00',
          },
        ],
      },
      {
        day: 'sat',
        isClosed: false,
        hours: [
          {
            start: '10:00',
            end: '21:00',
          },
        ],
      },
      {
        day: 'sun',
        isClosed: false,
        hours: [
          {
            start: '10:00',
            end: '21:00',
          },
        ],
      },
    ])
  })
})
