/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    /** created products */
    resBody: Types.OnlineProducts
    reqBody: Types.OnlineProducts
  }

  get: {
    status: 200
    /** successful */
    resBody: Types.OnlineProducts[]
  }

  put: {
    status: 200
    /** Successful */
    resBody: Types.OnlineProducts
    reqBody: Types.OnlineProducts
  }
}
