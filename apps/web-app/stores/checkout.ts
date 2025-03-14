import type { CheckoutDraft } from '@next-orders/core/shared/services/checkout'

export const useCheckoutStore = defineStore('checkout', () => {
  const id = ref<string | null>(null)
  const name = ref('')
  const phone = ref('')
  const status = ref<Checkout['status'] | undefined>(undefined)
  const totalPrice = ref(0)
  const deliveryMethod = ref<Checkout['deliveryMethod'] | undefined>(undefined)
  const lines = ref<CheckoutLine[]>([])

  const isEmpty = computed(() => lines.value.length === 0)

  async function update() {
    try {
      const data = await $fetch('/api/checkout', {
        lazy: true,
        server: true,
        cache: 'no-cache',
        getCachedData: undefined,
      })
      if (!data) {
        return clear()
      }

      id.value = data.id
      name.value = data.name
      phone.value = data.phone
      status.value = data.status
      totalPrice.value = data.totalPrice
      deliveryMethod.value = data.deliveryMethod
      lines.value = data.lines
    } catch (error) {
      if (error instanceof Error) {
        // its ok
      }
    }
  }
  function clear() {
    id.value = null
    totalPrice.value = 0
    lines.value = []
  }
  async function add(productVariantId: string) {
    try {
      await $fetch(
        '/api/checkout/add',
        {
          method: 'POST',
          body: { productVariantId },
        },
      )

      await update()
    } catch (error) {
      console.error(error)
    }
  }
  async function change(checkout: CheckoutDraft) {
    try {
      const data = await $fetch(
        '/api/checkout',
        {
          method: 'PATCH',
          body: checkout,
        },
      )

      await update()

      return data
    } catch (error) {
      console.error(error)
    }
  }
  async function changeLineQuantity(id: string, method: 'increment' | 'decrement') {
    try {
      await $fetch(
        `/api/checkout/line/${id}`,
        {
          method: 'POST',
          body: { method },
        },
      )

      await update()
    } catch (error) {
      console.error(error)
    }
  }
  async function get(id: string) {
    try {
      const data = await $fetch(`/api/checkout/id/${id}`)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    id,
    name,
    phone,
    status,
    totalPrice,
    deliveryMethod,
    lines,

    isEmpty,

    update,
    add,
    change,
    changeLineQuantity,
    get,
  }
})
