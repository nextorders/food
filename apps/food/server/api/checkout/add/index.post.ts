import { repository } from '@next-orders/database'

const MAX_LINES_PER_CHECKOUT = 20

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    if (!body.productVariantId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing data',
      })
    }

    const { channelId } = useRuntimeConfig()
    const channel = await repository.channel.find(channelId)

    // Guard: If channel is not active or pickup/delivery is not available
    if (!channel?.isActive || (!channel?.isPickupAvailable && !channel?.isDeliveryAvailable)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Channel is not active',
      })
    }

    // Check if checkout exists
    let checkoutId = ''

    const { secure } = await getUserSession(event)
    if (!secure?.checkout) {
      // Create new checkout
      const deliveryMethod = channel?.isDeliveryAvailable ? 'DELIVERY' : 'WAREHOUSE'

      const createdCheckout = await repository.checkout.create({
        channelId,
        deliveryMethod,
      })
      if (!createdCheckout?.id) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Failed to create checkout',
        })
      }

      // Update user session
      await setUserSession(event, {
        secure: {
          checkout: {
            id: createdCheckout.id,
          },
        },
      })

      checkoutId = createdCheckout.id
    } else {
      checkoutId = secure.checkout.id
    }

    const checkoutInDB = await repository.checkout.find(checkoutId)
    if (!checkoutInDB?.id) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No checkout',
      })
    }

    // Add +1 or create new line
    const line = checkoutInDB?.lines.find((line) => line.productVariantId === body.productVariantId)
    if (!line) {
      // Check limit
      if (checkoutInDB?.lines?.length >= MAX_LINES_PER_CHECKOUT) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Limit reached',
        })
      }

      // Create new line
      await repository.checkoutLine.create({
        checkoutId,
        productVariantId: body.productVariantId,
        quantity: 1,
      })
    } else {
      // Add +1
      await repository.checkoutLine.increase(line.id, 1)
    }

    await repository.checkout.recalculate(checkoutId)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
