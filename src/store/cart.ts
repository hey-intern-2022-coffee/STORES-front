import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Item } from '../modules/onlineShop/types'

export const useCartStore = defineStore('cart', () => {
  const items = ref<Array<Item>>([])

  const addItem = (item: Item) => {
    if (
      !items.value.some(it => {
        if (it.id == item.id) it.count += item.count
      })
    ) {
      items.value.push(Object.assign(item, { count: 1 }))
    }
  }
  // function increment() {
  //   count.value++
  // }

  return { items, addItem }
})
