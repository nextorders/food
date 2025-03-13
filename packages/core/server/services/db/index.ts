interface Keys {
  allKeys: string[]
  menuKeys: string[]
  productKeys: string[]
  warehouseKeys: string[]
  paymentMethodKeys: string[]
  userKeys: string[]
  receiverKeys: string[]
  linkKeys: string[]
}

export async function getKeys(): Promise<Keys> {
  const allKeys = await useStorage('db').getKeys()
  const menuKeys = allKeys.filter((key) => key.startsWith('menu:'))
  const productKeys = allKeys.filter((key) => key.startsWith('product:'))
  const warehouseKeys = allKeys.filter((key) => key.startsWith('warehouse:'))
  const paymentMethodKeys = allKeys.filter((key) => key.startsWith('payment:method:'))
  const userKeys = allKeys.filter((key) => key.startsWith('user:'))
  const receiverKeys = allKeys.filter((key) => key.startsWith('receiver:'))
  const linkKeys = allKeys.filter((key) => key.startsWith('link:'))

  return {
    allKeys,
    menuKeys,
    productKeys,
    warehouseKeys,
    paymentMethodKeys,
    userKeys,
    receiverKeys,
    linkKeys,
  }
}
