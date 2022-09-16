<script setup lang="ts">
import GoodsCardForShoppingCart from '../../components/GoodsCardForShoppingCart.vue'

import OrderButtonWithLoading from '../../components/OrderButtonWithLoading.vue'
import {
  CLEAR_CART,
  NOT_EXIST_ITEM_IN_CART
} from '../../modules/onlineShop/cart/constant'

import { useShoppingCart } from '../../modules/onlineShop/cart/viewModels/index'

const {
  cartItems,

  getPossibleOrderCounts,
  countItems,
  maxAbleToOrder,
  isAbleToOrder,
  isLoading,
  toOrder,
  allClearCart
} = useShoppingCart()
</script>

<template>
  <div class="wrapper">
    <div class="content" v-if="isAbleToOrder">
      <div v-for="(item, index) of cartItems">
        <GoodsCardForShoppingCart
          :item="item"
          :maxAbleToOrder="maxAbleToOrder[index]"
          v-model:count="item.count"
        />
        <!-- v-model:count="countItems[index]" -->
      </div>
    </div>
    <div class="content" v-else>{{ NOT_EXIST_ITEM_IN_CART }}</div>
    <div class="btn">
      <OrderButtonWithLoading
        :text="'注文情報を入力する'"
        :click-method="toOrder"
        :custom-style="'width: 50vw;height: auto;'"
        :is-loading="isLoading"
        :isAbleToOrder="isAbleToOrder"
      />
    </div>
    <div class="clear">
      <el-button @click="allClearCart"> {{ CLEAR_CART }} </el-button>
    </div>
  </div>
</template>

<style scoped>
.wrapper,
.btn,
.clear {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn {
  margin-top: 2rem;
}
.content {
  margin-top: 1rem;
}
.clear {
  margin: 2rem;
}
</style>
