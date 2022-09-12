import { defineStore } from 'pinia'
import { Item } from '../modules/onlineShop/types'

export const useCartStore = defineStore('cart', {
  state: (): { items: Array<Item> } => ({ items: [] }),
  getters: {
    getPurchaseId: state => state.items
  },
  actions: {
    addItem(item: Item) {
      if (
        !this.items.some(it => {
          if (it.id == item.id) it.count += item.count
        })
      ) {
        this.items.push(Object.assign(item, { count: 1 }))
      }
    }
  },
  persist: {
    enabled: true
  }
})
