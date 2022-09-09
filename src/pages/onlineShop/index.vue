<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { Item } from '../../modules/onlineShop/types'
import { useRouter } from 'vue-router'
import { useCartStore } from '../../store/cart'
import { apiClient, healthCheck } from '../../modules/healthCheck'
import { _onlineShopItems } from '../../modules/__mock__/onlineShop'

const items = reactive<Array<Item>>(_onlineShopItems)

// FIXME: constantファイルに移動
const buttonTextInItemCard = 'カゴに入れる'
const cartStore = useCartStore()
const router = useRouter()

const purchase = async (item: Item) => {
  cartStore.addItem(item)
  // await healthCheck() // FIXME: del

  router.push({ name: 'checkoutView' })
}
</script>
<template>
  <div class="root">
    <div id="card-items" v-for="item in items">
      <!-- TODO: make component -->
      <el-card :body-style="{ padding: '0px', width: '100%' }" class="el-card">
        <div class="card-content">
          <div class="images">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
          </div>
          <div>
            {{ item.title }}
            &yen;{{ item.price }}
          </div>
          <div class="bottom">
            <el-button text class="button" @pointerup="purchase(item)">{{
              buttonTextInItemCard
            }}</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<style scoped>
.root {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.el-card {
  margin-top: 1%;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  height: 8rem;
}
.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.images {
  margin-right: 1rem;
  width: 38%;
  height: auto;
}
.images img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.button {
  background-color: #abc7ff;
}
</style>
