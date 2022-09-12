import { defineStore } from 'pinia'

export const usePurchaseStore = defineStore('purchase', {
  state: () => ({ purchaseId: 0 }),
  getters: {
    getPurchaseId: state => state.purchaseId
  },
  actions: {
    setPurchaseId(arg: number) {
      this.purchaseId = arg
    }
  },
  persist: {
    enabled: true
  }
})
