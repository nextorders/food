import type { Order, OrderItem, OrderItemChange } from '@nextorders/food-schema'
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

export const useOrderStore = defineStore('order', () => {
  const id = ref<Order['id']>()
  const name = ref<Order['name']>()
  const phone = ref<Order['phone']>()
  const status = ref<Order['status']>()
  const totalPrice = ref<Order['totalPrice']>(0)
  const deliveryMethod = ref<Order['deliveryMethod']>()
  const paymentMethodId = ref<Order['paymentMethodId']>()
  const changeFrom = ref<Order['changeFrom']>()
  const readyBy = ref<Order['readyBy']>()
  const readyType = ref<Order['readyType']>()
  const address = ref<Order['address']>()
  const note = ref<Order['note']>()
  const items = ref<OrderItem[]>([])

  const updatedAt = ref<number>()

  const optionsStore = useOptionsStore()
  const channelStore = useChannelStore()

  const isValidPhone = ref(false)
  const deliveryZoneRequired = ref(false)
  const deliveryZoneValid = ref(false)

  const isEmpty = computed<boolean>(() => items.value.length === 0)
  const isValidMinAmount = computed<boolean>(() => deliveryMethod.value === 'deliveryByCourier' && channelStore.deliveryByCourier?.minAmountForDelivery ? channelStore.deliveryByCourier.minAmountForDelivery <= totalPrice.value : true)
  const isValidTotalPrice = computed<boolean>(() => isValidMinAmount.value)
  const isValidDeliveryAddress = computed<boolean>(() => deliveryMethod.value === 'deliveryByCourier' ? address.value?.type === 'deliveryAddress' && !!address.value?.street : true)
  const isValidPickupAddress = computed<boolean>(() => deliveryMethod.value === 'selfPickup' ? address.value?.type === 'warehouseAddress' && !!address.value?.id : true)
  const isValidDeliveryZone = computed<boolean>(() => deliveryMethod.value === 'deliveryByCourier' && deliveryZoneRequired.value ? deliveryZoneValid.value : true)
  const isValidAddress = computed<boolean>(() => isValidDeliveryAddress.value && isValidPickupAddress.value && isValidDeliveryZone.value)
  const isValidCheckoutData = computed<boolean>(() => {
    return !!name.value
      && !!phone.value
      && isValidPhone.value
      && isValidAddress.value
      && !!paymentMethodId.value
  })

  const isReadyToCheckout = computed<boolean>(() => isValidCheckoutData.value && isValidTotalPrice.value)

  const isLoading = ref<boolean>(true)
  const isSaved = ref<boolean>(true)

  // Check if order is not saved
  watch(isSaved, useDebounceFn(async () => {
    if (!isSaved.value) {
      await change({
        name: name.value,
        phone: phone.value,
        address: address.value,
        paymentMethodId: paymentMethodId.value,
        changeFrom: changeFrom.value,
        readyBy: readyBy.value,
        readyType: readyType.value,
        note: note.value,
      }, false)

      isSaved.value = true
    }
  }, 2000))

  function formatPhone(phoneAsString: string): string {
    if (!phoneAsString) {
      return ''
    }

    getPhoneNumberFormatter(optionsStore.countryCode).input(phoneAsString)

    return formatPhoneNumber(phoneAsString, optionsStore.countryCode)
  }

  function validateAndSetPhone(formattedPhone: string): void {
    if (!formattedPhone || formattedPhone?.length > 17) {
      isValidPhone.value = false
      return
    }

    getPhoneNumberFormatter(optionsStore.countryCode).input(formattedPhone)
    isValidPhone.value = checkPhoneNumberValidity(formattedPhone, optionsStore.countryCode)

    if (isValidPhone.value) {
      // Remove all except numbers
      phone.value = formattedPhone.replace(/\D/g, '')
    } else {
      phone.value = undefined
    }
  }

  async function update() {
    try {
      const data = await $fetch('/api/order')
      if (!data?.id) {
        return clear()
      }

      id.value = data.id
      name.value = data.name
      status.value = data.status
      totalPrice.value = data.totalPrice
      deliveryMethod.value = data.deliveryMethod
      paymentMethodId.value = data.paymentMethodId
      changeFrom.value = data.changeFrom
      readyBy.value = data.readyBy
      readyType.value = data.readyType
      address.value = data.address
      note.value = data.note
      items.value = data.items

      validateAndSetPhone(data.phone)

      updatedAt.value = Date.now()
    } catch (error) {
      const statusCode = (error && typeof error === 'object' && 'statusCode' in error)
        ? (error as { statusCode?: number }).statusCode
        : undefined

      if (statusCode === 404) {
        // Order not found or was completed
        clear()
      }
    } finally {
      isLoading.value = false
    }
  }

  function clear() {
    id.value = undefined
    totalPrice.value = 0
    items.value = []

    isLoading.value = false
  }

  async function add(variantId: string) {
    isLoading.value = true

    try {
      await $fetch(
        '/api/order/add',
        {
          method: 'POST',
          body: { orderId: id.value, variantId },
        },
      )

      await update()
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  async function change(order: Partial<Order>, isUpdateNeeded = true) {
    try {
      const data = await $fetch(
        '/api/order',
        {
          method: 'PATCH',
          body: order,
        },
      )

      if (isUpdateNeeded) {
        await update()
      }

      return data
    } catch (error) {
      console.error(error)
    }
  }

  async function changeItem(data: Pick<OrderItemChange, 'itemId' | 'method'>) {
    try {
      await $fetch(
        '/api/order/item',
        {
          method: 'PATCH',
          body: data,
        },
      )

      await update()
    } catch (error) {
      console.error(error)
    }
  }

  async function complete(order: Partial<Order>) {
    try {
      const data = await $fetch(
        '/api/order/complete',
        {
          method: 'POST',
          body: order,
        },
      )

      await update()

      return data
    } catch (error) {
      console.error(error)
    }
  }

  async function get(id: string) {
    try {
      const data = await $fetch(`/api/order/id/${id}`)
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
    paymentMethodId,
    changeFrom,
    readyBy,
    readyType,
    address,
    note,
    items,

    updatedAt,

    isEmpty,
    isValidPhone,
    isValidTotalPrice,
    isValidPickupAddress,
    isValidCheckoutData,
    isReadyToCheckout,
    isLoading,
    isSaved,
    deliveryZoneRequired,
    deliveryZoneValid,

    update,
    add,
    change,
    changeItem,
    complete,
    get,
    formatPhone,
    validateAndSetPhone,
  }
})
