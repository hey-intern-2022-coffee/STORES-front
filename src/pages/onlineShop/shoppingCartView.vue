<script setup lang="ts">
import GoodsCardForShoppingCart from '../../components/GoodsCardForShoppingCart.vue'

import ButtonWithLoading from '../../components/ButtonWithLoading.vue'

import { useShoppingCart } from '../../modules/onlineShop/cart/viewModels/index'

const {
  purchaseItem,
  possibleOrderCounts,
  getPossibleOrderCounts,
  countItems,
  maxAbleToOrder,
  isLoading,
  toOrder
} = useShoppingCart()
</script>

<template>
  <div class="wrapper">
    <div>
      <div v-for="(item, index) of purchaseItem">
        <GoodsCardForShoppingCart
          :item="item"
          :maxAbleToOrder="maxAbleToOrder[index]"
          v-model:count="countItems[index]"
        />
      </div>
    </div>
    <div class="btn">
      <ButtonWithLoading
        :text="'注文情報を入力する'"
        :click-method="toOrder"
        :custom-style="'width: 50vw;height: auto;'"
        :is-loading="isLoading"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper,
.btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
