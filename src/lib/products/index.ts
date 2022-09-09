/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    /** created products */
    resBody: Types.Products
    reqBody: Types.Products
  }

  get: {
    status: 200
    /** successful */
    resBody: Types.Products[]
  }
}
