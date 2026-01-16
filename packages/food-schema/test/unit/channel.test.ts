import type { Channel } from '../../src/types/channel'
import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { ChannelSchema } from '../../src/types/channel'

describe('channelSchema', () => {
  it('invalid channel data', () => {
    expect(() => ChannelSchema.parse({
      id: 1,
      title: 1,
      description: 1,
      url: 1,
    })).toThrow(ZodError)
  })

  it('valid channel data', () => {
    const channel: Channel = {
      id: '1',
      selectorTitle: [],
      title: [],
      description: [],
      url: '1',
      timeZone: '+00:00',
      isActive: true,
      deliveryByCourier: {
        isAvailable: false,
        paymentMethods: [],
      },
      selfPickup: {
        isAvailable: false,
        paymentMethods: [],
      },
    }
    const data = ChannelSchema.parse(channel)
    expect(data).toBeDefined()
    expect(data).toEqual(channel)
  })
})
