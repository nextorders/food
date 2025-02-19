<template>
  <ClientOnly>
    <div v-if="!haveProblemWithOrder">
      <h1 class="pt-8 mb-4 md:mb-8 text-3xl md:text-4xl font-medium">
        {{ $t('app.checkout.title') }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <div class="col-span-full md:col-span-7 space-y-6">
          <div class="p-3 md:p-6 bg-(--ui-bg-muted) rounded-3xl flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <h3 class="text-lg md:text-xl font-medium">
                {{ $t('app.checkout.contacts') }}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <UInput
                  v-model="remainingCheckout.phone"
                  type="tel"
                  size="xl"
                  maxlength="17"
                  :class="{ '!ring-(--ui-success)': isValidPhone }"
                  :placeholder="$t('app.checkout.your-phone')"
                  @change="formatPhone"
                />

                <UInput
                  v-model="remainingCheckout.name"
                  size="xl"
                  :placeholder="$t('app.checkout.your-name')"
                />
              </div>
            </div>

            <div v-if="checkout?.deliveryMethod === 'DELIVERY'" class="flex flex-col gap-2">
              <h3 class="text-lg md:text-xl font-medium">
                {{ $t('app.checkout.enter-address') }}
              </h3>
              <UFormField :label="$t('app.checkout.address.street')">
                <UInput
                  v-model="remainingCheckout.street"
                  size="xl"
                  class="w-full"
                />
              </UFormField>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                <UFormField :label="$t('app.checkout.address.flat')">
                  <UInput
                    v-model="remainingCheckout.flat"
                    size="xl"
                  />
                </UFormField>

                <UFormField :label="$t('app.checkout.address.doorphone')">
                  <UInput
                    v-model="remainingCheckout.doorphone"
                    size="xl"
                  />
                </UFormField>

                <UFormField :label="$t('app.checkout.address.entrance')">
                  <UInput
                    v-model="remainingCheckout.entrance"
                    size="xl"
                  />
                </UFormField>

                <UFormField :label="$t('app.checkout.address.floor')">
                  <UInput
                    v-model="remainingCheckout.floor"
                    size="xl"
                  />
                </UFormField>
              </div>

              <UFormField :label="$t('app.checkout.address.note')">
                <UTextarea
                  v-model="remainingCheckout.addressNote"
                  size="xl"
                  class="w-full"
                  :placeholder="$t('app.checkout.address.note-placeholder')"
                />
              </UFormField>
            </div>

            <div v-if="checkout?.deliveryMethod === 'WAREHOUSE'" class="flex flex-col gap-2">
              <h3 class="text-lg md:text-xl font-medium">
                {{ $t('app.checkout.select-address') }}
              </h3>

              <USelect
                v-model="remainingCheckout.warehouseId"
                :items="channel?.warehouses.map(warehouse => ({ label: warehouse.address, value: warehouse.id }))"
                :placeholder="$t('common.select')"
                size="xl"
                icon="food:warehouse"
                class="w-full"
              />
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-lg md:text-xl font-medium">
                {{ $t('app.checkout.time-title') }}
              </h3>

              <USelect
                v-model="remainingCheckout.time"
                :items="[
                  { label: $t('app.checkout.as-soon-as-possible'), value: 0 },
                  ...slots,
                ]"
                :placeholder="$t('app.checkout.select-time')"
                size="xl"
                icon="food:clock"
                class="w-full"
              />
            </div>
          </div>

          <div class="p-3 md:p-6 bg-(--ui-bg-muted) rounded-3xl flex flex-col gap-4">
            <h2 class="text-xl md:text-2xl font-medium">
              {{ $t('app.checkout.order-title') }}
            </h2>

            <CheckoutLine
              v-for="line in checkout?.lines"
              :key="line.id"
              :line="line"
            />

            <UFormField :label="$t('app.checkout.order-note')">
              <UTextarea
                v-model="remainingCheckout.note"
                size="xl"
                class="w-full"
                :placeholder="$t('app.checkout.order-note-placeholder')"
              />
            </UFormField>
          </div>
        </div>

        <div class="col-span-full md:col-span-5 h-fit sticky top-20">
          <div class="mb-6 px-3 md:px-6 flex flex-col gap-5">
            <CartDeliveryMethodSwitch />

            <div class="space-y-2">
              <h3 class="text-lg md:text-xl font-medium">
                {{ $t('app.checkout.payment-title') }}
              </h3>

              <USelect
                v-model="remainingCheckout.paymentMethodId"
                :items="paymentMethods?.map(paymentMethod => ({ label: paymentMethod.name, value: paymentMethod.id }))"
                :placeholder="$t('common.select')"
                size="xl"
                icon="food:cash"
                class="w-full"
              />

              <UFormField v-if="selectedPaymentMethod?.type === 'CASH'" :label="$t('app.checkout.change-label')">
                <UInputNumber
                  v-model="remainingCheckout.change"
                  size="xl"
                  orientation="vertical"
                  class="w-full"
                  :min="0"
                  :placeholder="getCurrencySign(channel?.currencyCode)"
                />
              </UFormField>
            </div>

            <div class="space-y-2">
              <h3 class="text-lg md:text-xl font-medium">
                {{ $t('app.checkout.total-title') }}
              </h3>

              <div class="flex flex-row justify-between text-lg">
                <div>{{ $t('app.checkout.cost.products') }}</div>
                <div class="tracking-tight">
                  {{ total }} <span class="text-sm">{{ getCurrencySign(channel?.currencyCode) }}</span>
                </div>
              </div>
            </div>

            <div class="space-y-3">
              <CheckoutInfoMessage
                v-if="checkout?.deliveryMethod === 'DELIVERY'"
                icon="info"
                :message="$t('app.checkout.info-shipping-price')"
              />
              <CheckoutInfoMessage
                v-if="!isValidCheckout && !isOkForData"
                icon="alert"
                :message="$t('app.checkout.warning-data')"
              />
              <CheckoutInfoMessage
                v-if="!isValidCheckout && !isOkForAmount"
                icon="alert"
                :message="`${$t('app.minimum-order-value')}: ${channel?.minAmountForDelivery} ${getCurrencySign(channel?.currencyCode)}`"
              />
            </div>

            <div class="flex flex-row flex-nowrap gap-4 items-center">
              <UButton
                size="xl"
                variant="gradient"
                class="grow w-full justify-center"
                :disabled="!isValidCheckout"
                @click="updateCheckout"
              >
                {{ $t('app.checkout.create-order') }}
              </UButton>

              <div class="font-medium text-right text-2xl min-w-[5rem] tracking-tight">
                {{ total }} <span class="text-base">{{ getCurrencySign(channel?.currencyCode) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="haveProblemWithOrder && checkout" class="text-center pt-16 pb-32">
      <h1 class="pt-8 mb-4 md:mb-8 text-3xl md:text-4xl font-medium text-center">
        {{ $t('app.cart.empty-label') }}
      </h1>

      <UButton
        to="/"
        size="xl"
        variant="gradient"
      >
        {{ $t('common.to-home') }}
      </UButton>
    </div>

    <template #fallback>
      <div class="pt-32 relative h-full w-full flex flex-col justify-center items-center">
        <Icon :name="icons.loader" class="w-24 h-24 text-neutral-300 animate-pulse" />
      </div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'checkout',
})

const { icons } = useAppConfig()
const { channel } = await useChannel()
const { checkout, total, update } = useCheckout()
const { slots } = useTime()

const countryCode = computed(() => channel.value?.countryCode as CountryCode)
const paymentMethods = computed(() => channel.value?.paymentMethods)

const remainingCheckout = ref<CheckoutDraft>({
  name: '',
  phone: '',
  time: 0,
  change: checkout.value?.totalPrice ?? 0,
  note: undefined,
  warehouseId: undefined,
  street: undefined,
  flat: undefined,
  doorphone: undefined,
  entrance: undefined,
  floor: undefined,
  addressNote: undefined,
  paymentMethodId: '',
})

const haveProblemWithOrder = computed(() => !checkout.value?.lines.length || (!channel.value?.isPickupAvailable && !channel.value?.isDeliveryAvailable))
const isOkForData = computed(() => !!remainingCheckout.value.name && !!remainingCheckout.value.phone && !!remainingCheckout.value.paymentMethodId && (checkout.value?.deliveryMethod === 'DELIVERY' ? !!remainingCheckout.value.street : true) && (checkout.value?.deliveryMethod === 'WAREHOUSE' ? !!remainingCheckout.value.warehouseId : true))
const isOkForAmount = computed<boolean>(() => checkout.value?.deliveryMethod === 'DELIVERY' && channel.value?.minAmountForDelivery ? channel.value?.minAmountForDelivery <= (checkout.value?.totalPrice || 0) : true)
const isValidCheckout = computed(() => isOkForAmount.value && isOkForData.value)
const isValidPhone = ref(false)
const selectedPaymentMethod = computed(() => paymentMethods.value?.find((m) => m.id === remainingCheckout.value.paymentMethodId))

watch(
  () => remainingCheckout.value.phone,
  () => {
    if (!remainingCheckout.value.phone) {
      return
    }
    if (remainingCheckout.value.phone.length > 17) {
      return
    }

    getPhoneNumberFormatter(countryCode.value).input(remainingCheckout.value.phone)
    isValidPhone.value = checkPhoneNumberValidity(remainingCheckout.value.phone, countryCode.value)
  },
)

function formatPhone() {
  if (!remainingCheckout.value.phone) {
    return
  }

  getPhoneNumberFormatter(countryCode.value).input(remainingCheckout.value.phone)
  remainingCheckout.value.phone = formatPhoneNumber(remainingCheckout.value.phone, countryCode.value)
}

async function updateCheckout() {
  const finishedCheckout = await update({
    phone: remainingCheckout.value.phone,
    name: remainingCheckout.value.name,
    warehouseId: remainingCheckout.value.warehouseId,
    street: remainingCheckout.value.street,
    flat: remainingCheckout.value.flat,
    doorphone: remainingCheckout.value.doorphone,
    entrance: remainingCheckout.value.entrance,
    floor: remainingCheckout.value.floor,
    addressNote: remainingCheckout.value.addressNote,
    paymentMethodId: remainingCheckout.value.paymentMethodId,
    time: remainingCheckout.value.time,
    change: remainingCheckout.value.change ? remainingCheckout.value.change.toString() : undefined,
    note: remainingCheckout.value.note,
  })

  navigateTo(`/finish?id=${finishedCheckout?.result?.id}`)
}
</script>
