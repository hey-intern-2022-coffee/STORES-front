/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    /** Created Content */
    resBody: Types.Purchase
    reqBody: Types.UserInfo
  }

  patch: {
    status: 200
    /** successful */
    resBody: Types.Products

    reqBody: {
      /** ProductsのID */
      id: number
    }
  }
}
