<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue'
import {
  INPUTS_FOR_ORDER,
  LABELS_ON_CHECKOUT_FORM
} from '../../modules/constant'
import {
  ItemInfoForCheckoutForm,
  UserInfoForCheckout
} from '../../modules/onlineShop/checkout'
import { _userInfoForCheckout } from '../../modules/__mock__/onlineShop'
import { useCartStore } from '../../store/cart'
import GoodsCardForCheckoutForm from '../../components/GoodsCardForCheckoutForm.vue'
import { useRouter } from 'vue-router'

/** 入力情報のみ抽出 */
const userInfoForCheckout = computed<UserInfoForCheckout>(() =>
  inputs.value.map(it => ({ [it.name]: it.model }))
)
/** inputのplaceholer, name, 入力情報 */
const inputs = ref(INPUTS_FOR_ORDER)

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
const allClear = () => inputs.value.forEach(it => (it.model = ''))

const router = useRouter()
const checkout = () => {
  // TODO: post
  router.push({ name: 'qrCodeView' })
}
</script>
<template>
  <h1>{{ LABELS_ON_CHECKOUT_FORM.title.title }}</h1>
  <div class="form">
    <h2>{{ LABELS_ON_CHECKOUT_FORM.addressForm.title }}</h2>
    <form>
      <div v-for="inputInfo in inputs" class="input-items">
        <label>
          {{ inputInfo.placeholder }}
        </label>
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
    <div class="all-clear">
      <el-button @pointerup="allClear" class="all-clear-btn">
        {{ LABELS_ON_CHECKOUT_FORM.addressForm.clearBtn }}
      </el-button>
    </div>
  </div>

  <div class="order-info">
    <h2>{{ LABELS_ON_CHECKOUT_FORM.orderInfo.title }}</h2>
    <div class="order-info-contents">
      <div>
        <GoodsCardForCheckoutForm :item="purchaseItem[0]" />
      </div>
      <div class="btn">
        <el-button @click="checkout" type="primary" class="el-button">
          {{ LABELS_ON_CHECKOUT_FORM.bottom.btn }}
        </el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  margin-top: 1%;
}
h1,
h2 {
  padding-left: 2%;
}
.input {
  width: 80%;
}
.form {
  margin-top: 2rem;
}
.form form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5%;
}

.input-items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.input-items label {
  margin-right: auto;
}
.all-clear {
  display: flex;
  justify-content: end;
  margin-top: 1rem;
  margin-right: 0.5rem;
}
.all-clear:hover {
  color: rgb(38, 38, 38);
}
.btn {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.btn .el-button {
  width: 50vw;
  height: auto;
}
.order-info {
  margin-top: 2rem;
}
.order-info-contents {
  padding: 3%;
}
</style>
