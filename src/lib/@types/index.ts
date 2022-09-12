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
  purchases_products?: (PurchasesProducts)[] | undefined
}

/** 商品IDを関連付ける */
export type PurchasesProducts = {
  /** 商品ID */
  product_id?: number | undefined
}

/** 購入する */
export type Purchase = UserInfo & {
  /** PurchaseのID */
  id?: number | undefined
  /** 受け取ったかどうか */
  is_acceptance?: boolean | undefined
}

export type OnlineProducts = Products & {
  online_stock?: {
    /** オンライン商品の在庫 */
    stock_quantity?: number | undefined
  } | undefined
}

/** 登録された商品 */
export type Products = {
  /** 商品のID */
  id?: number | undefined
  /** 商品の名前 */
  name: string
  /** 商品の値段 */
  price?: number | undefined
  /** 商品画像 */
  image_url?: string | undefined
}
