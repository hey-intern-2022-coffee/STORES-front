/* eslint-disable */
export type UserId = {
  /** ユーザーの ID */
  userId: number
}

/** ユーザー情報 */
export type UserInfo = {
  /** ユーザーの名前 */
  name?: string | undefined
  /** 居住地 */
  address?: string | undefined
  /** 電話番号 */
  phone_number?: string | undefined
  /** メールアドレス */
  mail_address?: string | undefined
  /** 購入した商品 */
  product_ids?: number[] | undefined
}

/** 購入する */
export type Purchase = UserInfo & {
  /** PurchaseのID */
  id?: number | undefined
  /** 受け取ったかどうか */
  is_acceptance?: boolean | undefined
}
