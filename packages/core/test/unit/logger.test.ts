import { describe, expect, it } from 'vitest'
import { useLogger } from '../../server/utils/logger'

describe('useLogger', () => {
  it('should return logger', () => {
    const logger = useLogger()

    expect(logger).toBeDefined()
    expect(logger.log).toBeDefined()
    expect(logger.success('test')).toBeFalsy()
  })
})
