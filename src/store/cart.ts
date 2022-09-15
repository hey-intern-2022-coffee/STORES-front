import { defineStore } from 'pinia'
import { OnlineProducts } from '../lib/@types'
import { CartItem } from '../modules/onlineShop/types'
import { ItemInfoForShoppingCart } from '../modules/onlineShop/types/checkout'

export const useCartStore = defineStore('cart', {
  state: (): { items: Array<ItemInfoForShoppingCart> } => ({ items: [] }),
  getters: {
    getItems: state => state.items
  },
  actions: {
    addItem(item: ItemInfoForShoppingCart) {
      if (this.items.every(it => it.id !== item.id)) {
        // new item
        this.items.push(item)
      } else {
        this.items.some(it => {
          if (it.id == item.id) it.count += item.count
        })
      }
    },
    setItems(arg: ItemInfoForShoppingCart[]) {
      this.items = arg
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
