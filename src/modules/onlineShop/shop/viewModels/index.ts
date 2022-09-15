import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { OnlineProducts } from '../../../../lib/@types'
import { apiClient } from '../../../../repos'
import { useCartStore } from '../../../../store/cart'
import { useFetch } from '../../../utils/api'
import { CartItem } from '../../types'
import { ItemInfoForShoppingCart } from '../../types/checkout'
import { getPossibleOrderCounts } from '../models'

export const useHomeStore = () => {
  const items = ref<Array<OnlineProducts>>() // _onlineShopItems

  // FIXME: constantファイルに移動
  const buttonTextInItemCard = 'カゴに入れる'
  const cartStore = useCartStore()
  const router = useRouter()

  const purchase = async (item: OnlineProducts) => {
    // const goodsInfo: ItemInfoForShoppingCart = Object.assign(item, { count: 1 })

    // FIXME: goodsInfoをItemInfoForShoppingCart typeに合わせる
    console.debug(
      cartStore.getItems.every(it => it.id != item.id),
      cartStore.getItems
    )
    if (cartStore.getItems.every(it => it.id != item.id)) {
      // TODO: 購買可能品数を取得
      cartStore.addItem({
        id: item.id ?? 0,
        title: item.name ?? '',
        price: item.price ?? 0,
        image_url: item.image_url ?? '',
        receive: '現地',
        shopName: '',
        count: 1,
        maxAbleToOrder:
          ableToOrderInfo.value?.find(it => it.productId === item.id)
            ?.ableToOrder ?? 0
      })
    }

    router.push({ name: 'shoppingCartView' })
  }
  const allProducts = ref<OnlineProducts[]>()
  const ableToOrderInfo = ref<{ productId: number; ableToOrder: number }[]>()
  const { fetchPending } = useFetch(async () => {
    allProducts.value = (await apiClient.products.get()).body
    if (!allProducts.value) return
    let index = 0
    for await (let item of allProducts.value) {
      let res = await apiClient.products._product_id(item.id ?? 0).get()
      // productInfos.value.push(res.body)
      ableToOrderInfo.value?.push({
        productId: res.body.id ?? 0,
        ableToOrder: getPossibleOrderCounts(res.body)
      })
      index++
    }
  })
  return { allProducts, fetchPending, buttonTextInItemCard, purchase }
}
