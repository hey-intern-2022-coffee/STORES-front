import { checkoutInfosEnum } from '../../constant'

export type ReceiveWays = '現地'
export type ItemInfoForCheckoutForm = {
  title: string
  price: number
  img: string
  receive: ReceiveWays
  shopName: string
  count: number
}

export type CheckoutInfoUnion =
  typeof checkoutInfosEnum[keyof typeof checkoutInfosEnum]
