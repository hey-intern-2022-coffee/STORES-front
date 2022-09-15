import { OnlineProducts } from '../../../../lib/@types'

export const getPossibleOrderCounts = (arg: OnlineProducts) =>
  (arg.online_stock?.stock_quantity ?? 0) -
  (arg.online_stock?.sold_quantity ?? 0)
