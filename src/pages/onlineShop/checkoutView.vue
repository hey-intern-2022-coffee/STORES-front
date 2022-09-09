<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  INPUTS_FOR_ORDER,
  LABELS_ON_CHECKOUT_FORM
} from '../../modules/constant'
import { UserInfoForCheckout } from '../../modules/onlineShop/checkout'
import { _userInfoForCheckout } from '../../modules/__mock__/onlineShop'
import { useCartStore } from '../../store/cart'

const userInfoForCheckout = computed<UserInfoForCheckout>(() =>
  inputs.value.map(it => ({ [it.name]: it.model }))
)
/** inputのplaceholer, name, 入力情報 */
const inputs = ref(INPUTS_FOR_ORDER)

const cartStore = useCartStore()
const purchaseItem = cartStore.items[cartStore.items.length - 1]

const allClear = () => inputs.value.forEach(it => (it.model = ''))
</script>
<template>
  <div>{{ LABELS_ON_CHECKOUT_FORM.addressForm.title }}</div>
  <div class="">
    <form>
      <div v-for="inputInfo in inputs">
        <template v-if="inputInfo.name === 'name'">
          <el-input
            class="input"
            v-model="inputInfo.model"
            :placeholder="inputInfo.placeholder"
            name="name"
        /></template>
        <template v-else>
          <el-input
            class="input"
            v-model="inputInfo.model"
            :placeholder="inputInfo.placeholder"
          />
        </template>
      </div>
    </form>
    <div @pointerup="allClear" class="all-clear">
      {{ LABELS_ON_CHECKOUT_FORM.addressForm.clearBtn }}
    </div>

    <div>{{ LABELS_ON_CHECKOUT_FORM.orderInfo.title }}</div>
  </div>
</template>
<style scoped>
.input {
  width: 80%;
}
.all-clear {
}
.all-clear:hover {
  color: rgb(38, 38, 38);
}
</style>
