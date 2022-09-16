import { computed, ComputedRef, onBeforeUnmount, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../../../../store/cart'
import { ItemInfoForShoppingCart } from '../../types/checkout'
// import { OnlineProducts } from '../../../../lib/@types'
import { useFetch } from '../../../utils/api'
import { apiClient } from '../../../../repos'
import { useOrderStore } from '../../../../store/order'
import { getPossibleOrderCounts } from '../models'
export const useShoppingCart = () => {
  const router = useRouter()
  const cartStore = useCartStore()
  // const originalCartItems = computed(() => cartStore.getItems)

  /** 注文する商品の情報 */
  const cartItems = ref<Array<ItemInfoForShoppingCart> | undefined>()
  /** チェックアウト画面に遷移可能かどうか: 品物がカートに格納されているかどうか */
  const isAbleToOrder = computed(() => !!cartItems.value?.length)
  /** 初期処理 */
  const init = () => {
    // cartItems.value = originalCartItems.value.map(it => ({
    cartItems.value = cartStore.getItems.map(it => ({
      id: it.id ?? 0,
      title: it.title ?? '',
      count: it.count ?? 1,
      price: it.price ?? 0,
      image_url: it.image_url ?? '',
      receive: '現地',
      shopName: ''
    }))
  }

  /** 各商品の個数 */
  const countItems = ref<Array<number>>(
    cartItems.value ? cartItems.value?.map(it => it.count ?? 0) : []
  )
  const initCountItems = () => {
    countItems.value = cartItems.value
      ? cartItems.value?.map(it => it.count ?? 0)
      : []
  }

  /**オーダー可能な品数 */
  const maxAbleToOrder = ref<Array<number>>([])

  /** 商品情報の同期 */
  const syncOriginalCartItemsToDb = async () => {
    const allProducts = (await apiClient.products.get()).body

    // originalCartItems.value.forEach(it => {
    cartItems.value?.forEach(it => {
      const existItem = allProducts.find(el => el.id === it.id)
      it.title = existItem?.name ?? ''
      it.image_url = existItem?.image_url ?? ''
      it.price = existItem?.price ?? 0
      console.debug(it)
    })
  }

  /** storeに同期させる */
  const syncCartItemsToStore = () => {
    if (!cartItems.value) return
    cartItems.value = cartItems.value.filter(it => it.count)
    console.debug(cartItems.value)
    cartStore.setItems(cartItems.value)
  }

  const allClearCart = () => {
    cartStore.clearItems()
    if (cartItems.value) cartItems.value.length = 0
  }

  const isLoading = ref(false)
  const toOrder = () => {
    isLoading.value = true

    // cartStoreにcartItems.valueを代入(入れ替え)
    syncCartItemsToStore()

    router.push({ name: 'checkoutView' })
  }

  useFetch(async () => {
    init()
    if (!cartItems.value) return
    await syncOriginalCartItemsToDb()
    initCountItems()
    for await (let item of cartItems.value) {
      let res = await apiClient.products._product_id(item.id ?? 0).get()
      maxAbleToOrder.value.push(getPossibleOrderCounts(res.body))
    }
  })

  return {
    cartItems,
    // possibleOrderCounts,
    isAbleToOrder,
    getPossibleOrderCounts,
    countItems,
    maxAbleToOrder,
    isLoading,
    toOrder,
    allClearCart
  }
}
