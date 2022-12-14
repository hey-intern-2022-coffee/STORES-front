import { checkoutInfosEnum } from '../../constant'

export type ReceiveWays = '現地'
export type ItemInfoForCheckoutForm = {
  id?: number
  title: string
  price: number
  image_url: string
  receive: ReceiveWays
  shopName: string
  count: number
}

export type ItemInfoForShoppingCart = {
  id?: number
  title: string
  price: number
  image_url: string
  receive: ReceiveWays
  shopName: string
  count: number
  maxAbleToOrder?: number
}

export type CheckoutInfoUnion =
  typeof checkoutInfosEnum[keyof typeof checkoutInfosEnum]
