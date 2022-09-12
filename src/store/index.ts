import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePurchaseStore = defineStore('purchase', () => {
  const purchaseId = ref(0)
  const setPurchaseId = (arg: number) => (purchaseId.value = arg)

  return { purchaseId, setPurchaseId }
})
