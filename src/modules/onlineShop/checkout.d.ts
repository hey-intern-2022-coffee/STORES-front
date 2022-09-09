export type UserInfoForCheckout = {
  [x: string]: string
}[]

export type ReceiveWays = '現地'
export type ItemInfoForCheckoutForm = {
  title: string
  price: number
  img: string
  receive: ReceiveWays
  shopName: string
  count: number
}
