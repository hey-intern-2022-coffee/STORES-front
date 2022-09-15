<script setup lang="ts">
import { computed, ComputedRef, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  ItemInfoForCheckoutForm,
  ItemInfoForShoppingCart
} from '../../modules/onlineShop/types/checkout'
import { useCartStore } from '../../store/cart'
import GoodsCardForShoppingCart from '../../components/GoodsCardForShoppingCart.vue'
import { useFetch } from '../../modules/utils/api'
import { apiClient } from '../../repos'
import { OnlineProducts } from '../../lib/@types'
import { useOrderStore } from '../../store/order'
import ButtonWithLoading from '../../components/ButtonWithLoading.vue'

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
        image_url: cartStore.items[cartStore.items.length - 1]?.image_url ?? '',
        // maxAbleToOrder: 0,
        receive: '現地',
        shopName: 'amazon.com'
      }
    ]
  })
// console.debug(purchaseItem)
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
    // console.debug(getPossibleOrderCounts(res.body))
    // item.maxAbleToOrder = getPossibleOrderCounts(res.body)
    maxAbleToOrder.value.push(getPossibleOrderCounts(res.body))
  }
})
const countItems = ref<Array<number>>([])
const maxAbleToOrder = ref<Array<number>>([])
const orderStore = useOrderStore()

// watch(
//   countItems,
//   val => {
//     console.debug(val)
//   },
//   { deep: true }
// )
// watch(
//   purchaseItem,
//   val => {
//     console.debug(val)
//   },
//   { deep: true }
// )

const isLoading = ref(false)
const toOrder = () => {
  isLoading.value = true
  purchaseItem.value?.forEach((item, index) => {
    item.count = countItems.value[index]
  })
  console.debug(purchaseItem.value)
  orderStore.addItem(purchaseItem.value)
  router.push({ name: 'checkoutView' })
}
</script>
<template>
  <div class="wrapper">
    <div>
      <div v-for="(item, index) of purchaseItem">
        <GoodsCardForShoppingCart
          :item="item"
          :maxAbleToOrder="maxAbleToOrder[index]"
          v-model:count="countItems[index]"
        />
        <!-- v-model:count="item.count" -->
      </div>
    </div>
    <div class="btn">
      <ButtonWithLoading
        :text="'注文情報を入力する'"
        :click-method="toOrder"
        :custom-style="'width: 50vw;height: auto;'"
        :is-loading="isLoading"
      />
    </div>
  </div>
</template>
<style scoped>
.wrapper,
.btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
