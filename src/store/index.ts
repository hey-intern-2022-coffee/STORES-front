import { defineStore } from 'pinia'

export const usePurchaseStore = defineStore('purchase', {
  state: (): { purchaseIds: number[] } => ({ purchaseIds: [] }),
  getters: {
    getPurchaseIds: state => state.purchaseIds
  },
  actions: {
    setPurchaseId(arg: number) {
      this.purchaseIds.push(arg)
    }
  },
  persist: {
    enabled: true
  }
})
