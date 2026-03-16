import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

const mockAdd = vi.fn()
const mockUpdate = vi.fn()

vi.stubGlobal('useToast', () => ({ add: mockAdd, update: mockUpdate }))
vi.stubGlobal('useDictionary', () => ({ dict: (key: string) => key }))
vi.stubGlobal('useId', () => 'toast-1')
vi.stubGlobal('ref', ref)
vi.stubGlobal('createSharedComposable', (fn: any) => fn)

const { useActionToast } = await import('../../app/composables/useActionToast')

describe('useActionToast', () => {
  it('start() adds a toast', () => {
    const toast = useActionToast()
    toast.start()
    expect(mockAdd).toHaveBeenCalledOnce()
  })

  it('success() updates toast with success color', () => {
    const toast = useActionToast()
    toast.success('Done!')
    expect(mockUpdate).toHaveBeenCalledWith(
      toast.id,
      expect.objectContaining({ title: 'Done!', color: 'success' }),
    )
  })

  it('error() updates toast with error color and description', () => {
    const toast = useActionToast()
    toast.error('Something failed')
    expect(mockUpdate).toHaveBeenCalledWith(
      toast.id,
      expect.objectContaining({ color: 'error', description: 'Something failed' }),
    )
  })

  it('error() uses default description when none provided', () => {
    const toast = useActionToast()
    toast.error()
    expect(mockUpdate).toHaveBeenCalledWith(
      toast.id,
      expect.objectContaining({ color: 'error', description: 'error.default' }),
    )
  })
})
