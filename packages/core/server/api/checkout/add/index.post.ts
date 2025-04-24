import { createId } from '@paralleldrive/cuid2'
import { getChannel } from '../../../../server/services/db/channel'
import { createCheckout, createCheckoutLine, getCheckout, patchCheckoutLine, recalculateCheckout } from '../../../../server/services/db/checkout'

const MAX_LINES_PER_CHECKOUT = 20

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    if (!body.productVariantId) {
      throw createError({
        statusCode: 400,
        message: 'Missing data',
      })
    }

    const { channelId } = useRuntimeConfig()
    const channel = await getChannel(channelId)

    // Guard: If channel is not active or pickup/delivery is not available
    if (!channel?.isActive || (!channel?.isPickupAvailable && !channel?.isDeliveryAvailable)) {
      throw createError({
        statusCode: 400,
        message: 'Channel is not active',
      })
    }

    // Check if checkout exists
    let checkoutId = ''

    const { secure } = await getUserSession(event)
    if (!secure?.checkoutId) {
      // Create new checkout
      const deliveryMethod = channel?.isDeliveryAvailable ? 'DELIVERY' : 'WAREHOUSE'

      const createdCheckout = await createCheckout({
        id: createId(),
        status: 'CREATED',
        channelId,
        deliveryMethod,
        name: '',
        phone: '',
        street: '',
        flat: null,
        intercom: null,
        entrance: null,
        floor: null,
        addressNote: null,
        shippingPrice: 0,
        totalPrice: 0,
        paymentMethodId: '',
        discount: 0,
        note: null,
        change: null,
        time: '',
        timeType: 'ASAP',
        warehouseId: null,
        items: [],
      })
      if (!createdCheckout?.id) {
        throw createError({
          statusCode: 400,
          message: 'Failed to create checkout',
        })
      }

      // Update user session
      await setUserSession(event, {
        secure: {
          checkoutId: createdCheckout.id,
        },
      })

      checkoutId = createdCheckout.id
    } else {
      checkoutId = secure.checkoutId
    }

    const checkoutInDB = await getCheckout(checkoutId)
    if (!checkoutInDB?.id) {
      throw createError({
        statusCode: 404,
        message: 'No checkout',
      })
    }

    // Add +1 or create new line
    const line = checkoutInDB.items.find((line) => line.productVariantId === body.productVariantId)
    if (!line) {
      // Check limit
      if (checkoutInDB.items?.length >= MAX_LINES_PER_CHECKOUT) {
        throw createError({
          statusCode: 400,
          message: 'Limit reached',
        })
      }

      // Create new line
      await createCheckoutLine({
        id: createId(),
        checkoutId,
        productVariantId: body.productVariantId,
        quantity: 1,
        unitPrice: 0,
        totalPrice: 0,
        undiscountedUnitPrice: 0,
        undiscountedTotalPrice: 0,
        isGift: false,
      })
    } else {
      // Add +1
      await patchCheckoutLine(checkoutId, line.id, { quantity: line.quantity + 1 })
    }

    await recalculateCheckout(checkoutId)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
