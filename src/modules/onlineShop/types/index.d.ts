import { OnlineProducts } from '../../../lib/@types/index'

export type CartItem = OnlineProducts & {
  count: number
}
export type OrderItemForStore = OnlineProducts & {
  count: number
}
