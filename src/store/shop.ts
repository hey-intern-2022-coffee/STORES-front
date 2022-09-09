import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useShopnStore = defineStore('shop', () => {
  type StoreInfo = {
    name: string
  }
  const shopInfo = ref<StoreInfo>({
    name: ''
  })

  // const count = ref(0)
  // const name = ref('Eduardo')
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  // return { count, name, doubleCount, increment }
})
