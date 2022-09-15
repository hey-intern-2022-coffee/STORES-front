<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { useRouter } from 'vue-router'
import GoodsCardForCheckoutForm from '../../components/GoodsCardForCheckoutForm.vue'
import { ItemInfoForCheckoutForm } from '../../modules/onlineShop/types/checkout'
import { useCartStore } from '../../store/cart'

const router = useRouter()
const cartStore = useCartStore()

/** 注文した商品の情報(現状はアイテム一つのみ) */
const purchaseItem: ComputedRef<Array<ItemInfoForCheckoutForm> | undefined> =
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
        receive: '現地',
        shopName: 'amazon.com'
      }
    ]
  })
console.debug(purchaseItem)
</script>
<template>
  <div>shopping cart</div>
  <div>
    <div>
      <div v-for="item in purchaseItem">
        <GoodsCardForCheckoutForm :item="item" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
