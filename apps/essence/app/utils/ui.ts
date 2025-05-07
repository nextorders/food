import type { FormError } from '@nuxt/ui'
import { type } from 'arktype'

export function createValidator(schema: any) {
  const { t } = useI18n()

  return function (state: any) {
    const errors: FormError[] = []

    const result = schema(state)
    if (result instanceof type.errors) {
      result.forEach((error) => {
        errors.push({ name: error.path.toString(), message: t(error.meta?.description ?? 'error.common') })
      })
    }

    return errors
  }
}
