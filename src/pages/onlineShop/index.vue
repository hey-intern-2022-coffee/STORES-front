<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { Item } from '../../modules/onlineShop'
import { useRouter } from 'vue-router'
import { useCartStore } from '../../store/cart'
import { apiClient, healthCheck } from '../../modules/accessTest'
const items = reactive<Array<Item>>([
  {
    id: 0,
    title: '商品名1',
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    count: 1
  },
  {
    id: 1,
    title: '商品名2',
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    count: 1
  },
  {
    id: 2,
    title: '商品名3',
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    count: 1
  }
])
const buttonTextInItemCard = 'カゴに入れる'
const cartStore = useCartStore()
const router = useRouter()

const purchase = async (item: Item) => {
  cartStore.addItem(item)
  await healthCheck()
  router.push('/cart')
}
</script>
<template>
  <div class="root">
    <div id="card-items" v-for="item in items">
      <el-card :body-style="{ padding: '0px', width: '100%' }" class="el-card">
        <div class="card-content">
          <div class="images">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
          </div>
          <div>
            {{ item.title }}
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
