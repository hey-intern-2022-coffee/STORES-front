/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  patch: {
    status: 200
    /** successful */
    resBody: Types.Purchase

    reqBody: {
      /** purchaseのID */
      id: number
    }
  }
}
