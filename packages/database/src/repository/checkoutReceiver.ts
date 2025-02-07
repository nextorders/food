import { useDatabase } from '../database'

export class CheckoutReceiver {
  static async findAll(channelId: string) {
    return useDatabase().query.checkoutReceivers.findMany({
      where: (checkoutReceivers, { eq }) => eq(checkoutReceivers.channelId, channelId),
    })
  }
}
