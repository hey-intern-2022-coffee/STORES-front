import { computed, ComputedRef, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../../../../store/cart'
import { checkoutInfosEnum, INPUTS_FOR_ORDER } from '../../../constant'
import { validators } from '../models'
import { ItemInfoForCheckoutForm } from '../../types/checkout'

export const useCheckout = () => {
  const router = useRouter()
  const cartStore = useCartStore()

  /** 注文した商品の情報(現状はアイテム一つのみ) */
  const purchaseItem: ComputedRef<Array<ItemInfoForCheckoutForm>> = computed(
    () => [
      {
        title: cartStore.items[cartStore.items.length - 1]?.title,
        count: cartStore.items[cartStore.items.length - 1]?.count,
        price: cartStore.items[cartStore.items.length - 1]?.price,
        img: cartStore.items[cartStore.items.length - 1]?.img,
        receive: '現地',
        shopName: 'amazon.com'
      }
    ]
  )
  /** inputのplaceholer, name, 入力情報 */
  const inputs = ref(INPUTS_FOR_ORDER)

  const allClear = () => inputs.value.forEach(it => (it.model = ''))

  const isShowRequireds = ref({
    [checkoutInfosEnum.zipCode]: false,
    [checkoutInfosEnum.address]: false,
    [checkoutInfosEnum.name]: false,
    [checkoutInfosEnum.phoneNumber]: false,
    [checkoutInfosEnum.email]: false
  })

  const isAllowedToCheckout = ref(true) // FIXME: default値をfalseにしたい
  const validateForm = () => {
    inputs.value.forEach(it => {
      if (!validators[it.name](it.model)) {
        isShowRequireds.value[it.name] = true
        isAllowedToCheckout.value = false
      } else {
        isShowRequireds.value[it.name] = false
      }
    })
  }

  const isLoading = ref(false)
  const checkout = async () => {
    console.debug('checkout')
    isAllowedToCheckout.value = true
    validateForm()
    if (!isAllowedToCheckout.value) return
    isLoading.value = true

    // TODO: post request
    // router.push({ name: 'qrCodeView' })
    router.push({ name: 'completeCheckoutView' })
  }

  return {
    inputs,
    purchaseItem,
    allClear,
    checkout,
    isShowRequireds,
    isLoading
  }
}
