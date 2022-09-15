import { computed, ComputedRef, ref } from 'vue'
import { useRouter } from 'vue-router'
// import { useCartStore } from '../../../../store/cart'
import { checkoutInfosEnum, INPUTS_FOR_ORDER } from '../../../constant'
import { validators } from '../models'
import { ItemInfoForCheckoutForm } from '../../types/checkout'
import { useFetch } from '../../../utils/api'
import { apiClient } from '../../../../repos'
import { UserInfo } from '../../../../lib/@types'
import { usePurchaseStore } from '../../../../store'
import { useOrderStore } from '../../../../store/order'

export const useCheckout = () => {
  const router = useRouter()
  // const cartStore = useCartStore()
  const orderStore = useOrderStore()

  const purchaseItem = ref<Array<ItemInfoForCheckoutForm>>([])
  // FIXME: 型修正 (swaggerでoptionalになっているのでundefinedが連発している。)

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
    isAllowedToCheckout.value = true
    validateForm()
    if (!isAllowedToCheckout.value) return
    isLoading.value = true

    const userInfo = Object.fromEntries(
      Object.entries(inputs.value).map(([key, value]) => [
        value.name,
        value.model
      ])
    )
    const productIds = ref<{ product_id: number }[]>([])
    purchaseItem.value.forEach(it => {
      for (let i = 0; i < it.count; i++) {
        productIds.value.push({ product_id: it.id ?? 0 })
      }
    })
    console.debug(productIds.value)

    const { body: purchaseInfo } = await apiClient.purchase.post({
      body: {
        name: userInfo.name,
        address: userInfo.address,
        phone_number: userInfo.phoneNumber,
        mail_address: userInfo.email,
        purchases_products: productIds.value
        // [
        //   { product_id: purchaseItem.value[0].id },
        //   { product_id: purchaseItem.value[0].id }
        // ] // FIXME: 決めうち
      }
    })
    // FIXME: purchaseIdをstoreに登録(現状: レスポンスが返ってきていない, BE待ち.)
    const store = usePurchaseStore()
    console.debug(purchaseInfo)
    if (purchaseInfo.id) store.setPurchaseId(purchaseInfo.id)

    // TODO: post request
    router.push({ name: 'completeCheckoutView' })
  }

  useFetch(async () => {
    purchaseItem.value = orderStore.getItems
  })
  return {
    inputs,
    purchaseItem,
    allClear,
    checkout,
    isShowRequireds,
    isLoading
  }
}
