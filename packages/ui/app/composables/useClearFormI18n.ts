import type { Form } from '@nuxt/ui'
import type { ShallowRef, ShallowUnwrapRef } from 'vue'

export function useClearFormI18n<T extends object>(form: Readonly<ShallowRef<ShallowUnwrapRef<Form<T> | null>>>) {
  const { locale } = useI18n()

  watch(locale, () => {
    form.value?.clear()
  }, { immediate: true })
}
