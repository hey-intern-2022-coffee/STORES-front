/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    /** Created Content */
    resBody: Types.Purchase
    reqBody: Types.UserInfo
  }

  put: {
    status: 200
    /** Successful */
    resBody: Types.OnlineProducts
    reqBody: Types.OnlineProducts
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

  delete: {
    status: 204

    reqBody: {
      /** ProductのID */
      id: number
    }
  }
}
