import { defineStore } from 'pinia'
// import { OnlineProducts } from '../lib/@types'
import { OrderItemForStore } from '../modules/onlineShop/types'
import { ItemInfoForShoppingCart } from '../modules/onlineShop/types/checkout'

export const useOrderStore = defineStore('order', {
  // state: (): { items: Array<OrderItemForStore | ItemInfoForShoppingCart> } => ({
  state: (): { items: Array<ItemInfoForShoppingCart> } => ({
    items: []
  }),
  getters: {
    getItems: state => state.items
  },
  actions: {
    addItem(item: ItemInfoForShoppingCart) {
      // !this.items.some(it => {
      //   if (it.id == item.id) it.count += item.count
      // })
      if (this.items.length === 0 || this.items.some(it => it.id != item.id)) {
        // item.forEach((it: any) => this.items.push(it))
        this.items.push(item)
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
