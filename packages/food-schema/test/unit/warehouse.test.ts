import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { WarehouseSchema } from '../../src/types/warehouse'

describe('warehouseSchema', () => {
  it('rejects missing required fields', () => {
    expect(() => WarehouseSchema.parse({
      id: '1',
    })).toThrow(ZodError)
  })

  it('valid warehouse', () => {
    const data = WarehouseSchema.parse({
      id: '1',
      title: [{ locale: 'en', value: 'Main Warehouse' }],
      address: {
        street: [{ locale: 'en', value: '123 Main St' }],
      },
    })
    expect(data).toEqual({
      id: '1',
      title: [{ locale: 'en', value: 'Main Warehouse' }],
      address: {
        street: [{ locale: 'en', value: '123 Main St' }],
      },
    })
  })
})
