import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { OnlineProducts } from '../../../../lib/@types'
import { apiClient } from '../../../../repos'
import { useCartStore } from '../../../../store/cart'
import { useFetch } from '../../../utils/api'
import { CartItem } from '../../types'

export const useHomeStore = () => {
  const items = ref<Array<OnlineProducts>>() // _onlineShopItems

  const allProducts = ref()
  const { fetchPending } = useFetch(async () => {
    allProducts.value = await apiClient.products.get() // FIXME: 型
    items.value = allProducts.value.body
  })

  // FIXME: constantファイルに移動
  const buttonTextInItemCard = 'カゴに入れる'
  const cartStore = useCartStore()
  const router = useRouter()

  const purchase = async (item: OnlineProducts) => {
    const goodsInfo: CartItem = Object.assign(item, { count: 2 })
    cartStore.addItem(goodsInfo)
    router.push({ name: 'checkoutView' })
    // router.push({ name: 'shoppingCartView' })
  }
  return { items, allProducts, fetchPending, buttonTextInItemCard, purchase }
}
