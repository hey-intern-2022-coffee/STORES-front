import { defineStore } from 'pinia'
import { OnlineProducts } from '../lib/@types'
import { CartItem } from '../modules/onlineShop/types'

export const useCartStore = defineStore('cart', {
  state: (): { items: Array<CartItem> } => ({ items: [] }),
  getters: {
    getItems: state => state.items
  },
  actions: {
    addItem(item: CartItem) {
      if (
        !this.items.some(it => {
          if (it.id == item.id) it.count += item.count
        })
      ) {
        this.items.push(Object.assign(item, { count: 2 }))
      }
    },

    // NOTE: 一種類しかオーダーしない仕様
    clearItems() {
      this.items.length = 0
    }
  },
  persist: {
    enabled: true
  }
})
