import { computed, ComputedRef, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../../../../store/cart'
import { ItemInfoForShoppingCart } from '../../types/checkout'
import { OnlineProducts } from '../../../../lib/@types'
import { useFetch } from '../../../utils/api'
import { apiClient } from '../../../../repos'
import { useOrderStore } from '../../../../store/order'
export const useShoppingCart = () => {
  const router = useRouter()
  const cartStore = useCartStore()

  /** 注文した商品の情報(現状はアイテム一つのみ) */
  const purchaseItem: ComputedRef<Array<ItemInfoForShoppingCart> | undefined> =
    computed(() => {
      if (!cartStore.items.length) return
      return [
        // FIXME: 型修正 (swaggerでoptionalになっているのでundefinedが連発している。)
        {
          id: cartStore.items[cartStore.items.length - 1]?.id ?? 0,
          title: cartStore.items[cartStore.items.length - 1]?.name ?? '',
          count: cartStore.items[cartStore.items.length - 1]?.count ?? 1,
          price: cartStore.items[cartStore.items.length - 1]?.price ?? 0,
          image_url:
            cartStore.items[cartStore.items.length - 1]?.image_url ?? '',
          receive: '現地',
          shopName: ''
        }
      ]
    })

  const possibleOrderCounts = ref<{ product_id: number; count: number }[]>([])
  const getPossibleOrderCounts = (arg: OnlineProducts) =>
    (arg.online_stock?.stock_quantity ?? 0) -
    (arg.online_stock?.sold_quantity ?? 0)

  useFetch(async () => {
    if (!purchaseItem.value) return
    const productInfos = ref<any>([]) // FIXME: any
    for await (let item of purchaseItem.value) {
      let res = await apiClient.products._product_id(item.id ?? 0).get()
      productInfos.value.push(res.body)
      maxAbleToOrder.value.push(getPossibleOrderCounts(res.body))
    }
  })
  const countItems = ref<Array<number>>([])
  const maxAbleToOrder = ref<Array<number>>([])
  const orderStore = useOrderStore()

  const isLoading = ref(false)
  const toOrder = () => {
    isLoading.value = true
    purchaseItem.value?.forEach((item, index) => {
      item.count = countItems.value[index]
    })
    console.debug(purchaseItem.value)
    purchaseItem.value?.forEach(it => {
      orderStore.addItem(it)
    })
    router.push({ name: 'checkoutView' })
  }
  return {
    purchaseItem,
    possibleOrderCounts,
    getPossibleOrderCounts,
    countItems,
    maxAbleToOrder,
    isLoading,
    toOrder
  }
}
