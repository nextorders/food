export const useCheckoutStore = defineStore('checkout', () => {
  const id = ref<string | null>(null)
  const name = ref('')
  const phone = ref('')
  const status = ref<Checkout['status'] | undefined>(undefined)
  const totalPrice = ref(0)
  const deliveryMethod = ref<Checkout['deliveryMethod'] | null>(null)
  const lines = ref<CheckoutLine[]>([])

  const isEmpty = computed(() => lines.value.length === 0)
  const total = computed(() => formatNumberToLocal(totalPrice.value))

  async function update() {
    const { data, error } = await useFetch('/api/checkout', {
      lazy: true,
      server: true,
      cache: 'no-cache',
      getCachedData: undefined,
    })
    if (!data.value || error.value) {
      return
    }

    id.value = data.value.id
    name.value = data.value.name
    phone.value = data.value.phone
    status.value = data.value.status as Checkout['status']
    totalPrice.value = data.value.totalPrice
    deliveryMethod.value = data.value.deliveryMethod as Checkout['deliveryMethod'] | null
    lines.value = data.value.lines
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
  async function change(checkout: Partial<Checkout>) {
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

  return {
    id,
    name,
    phone,
    status,
    totalPrice,
    deliveryMethod,
    lines,

    isEmpty,
    total,

    update,
    add,
    change,
    changeLineQuantity,
  }
})
