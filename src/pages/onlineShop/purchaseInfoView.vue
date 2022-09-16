<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Purchase, PurchasesProducts } from '../../lib/@types/index'
import { useFetch } from '../../modules/utils/api'
import { apiClient } from '../../repos'
import { usePurchaseStore } from '../../store/index'

const purchaseStore = usePurchaseStore()

const purchases = ref<Purchase[]>([])
// const getProductIdSets = (arg: PurchasesProducts[] | undefined) => {
//   let productIds: number[] = []
//   arg?.forEach(it => {
//     if (!it.product_id || productIds.includes(it.product_id)) return
//     productIds.push(it.product_id)
//   })
//   return productIds
// }

const init = async () => {
  // console.debug(purchaseStore.getPurchaseIds)
  for await (let id of purchaseStore.getPurchaseIds) {
    const res = await apiClient.purchase._purchases_id(id).get()
    purchases.value.push(res.body)
  }
}
const router = useRouter()
const isLoading = ref(false)
const toQrCode = (id: number | undefined) => {
  if (!id) return
  isLoading.value = true
  router.push({
    name: 'qrCodeView',
    params: { purchaseId: id }
  })
}
// const getProductInfo = async (productId: number) => {
//   const res = await apiClient.products._product_id(productId).get()
//   return res.body
// }
useFetch(async () => {
  init()
})
</script>
<template>
  <div>購入ID一覧</div>
  <div>
    <div v-for="p in purchases" class="card">
      <el-card
        :body-style="{ padding: '0px', width: '100%' }"
        class="el-card"
        @click="toQrCode(p.id)"
      >
        <div class="card-content">
          <div class="center">
            <div>氏名: {{ p.name }}</div>
            <div>購入ID: {{ p.id }}</div>
          </div>
          <!-- 購入物品, 数量 -->
          <!-- <div class="end">購入物品: {{ p.purchases_products }}</div> -->
        </div>
      </el-card>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin: 1rem;
}
</style>
