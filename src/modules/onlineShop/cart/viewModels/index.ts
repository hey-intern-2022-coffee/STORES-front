import { computed, ComputedRef, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../../../../store/cart'
import { ItemInfoForShoppingCart } from '../../types/checkout'
import { OnlineProducts } from '../../../../lib/@types'
import { useFetch } from '../../../utils/api'
import { apiClient } from '../../../../repos'
import { useOrderStore } from '../../../../store/order'
import { getPossibleOrderCounts } from '../models'
export const useShoppingCart = () => {
  const router = useRouter()
  const cartStore = useCartStore()
  const cartItems = computed(() => cartStore.getItems)

  /** 注文した商品の情報(現状はアイテム一つのみ) */
  const purchaseItem: ComputedRef<Array<ItemInfoForShoppingCart> | undefined> =
    computed(() => {
      if (!cartItems.value.length) return
      return cartItems.value.map(it => ({
        id: it.id ?? 0,
        title: it.title ?? '',
        count: it.count ?? 1,
        price: it.price ?? 0,
        image_url: it.image_url ?? '',
        receive: '現地',
        shopName: ''
      }))
    })

  const possibleOrderCounts = ref<{ product_id: number; count: number }[]>([])

  /** 各商品の個数 */
  const countItems = ref<Array<number>>(
    purchaseItem.value ? purchaseItem.value?.map(it => it.count ?? 0) : []
  )

  const maxAbleToOrder = ref<Array<number>>([])
  const syncPurchaseItemToStore = () => {
    if (!purchaseItem.value) return
    cartStore.setItems(purchaseItem.value)
  }

  const isLoading = ref(false)
  const toOrder = () => {
    isLoading.value = true
    purchaseItem.value?.forEach((item, index) => {
      item.count = countItems.value[index]
    })
    console.debug(purchaseItem.value)

    // cartStoreにpurchaseItem.valueを代入(入れ替え)
    syncPurchaseItemToStore()

    router.push({ name: 'checkoutView' })
  }

  useFetch(async () => {
    if (!purchaseItem.value) return

    for await (let item of purchaseItem.value) {
      let res = await apiClient.products._product_id(item.id ?? 0).get()
      maxAbleToOrder.value.push(getPossibleOrderCounts(res.body))
    }
  })
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
