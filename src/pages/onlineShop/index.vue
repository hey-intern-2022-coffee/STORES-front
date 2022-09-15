<script setup lang="ts">
import { _onlineShopItems } from '../../modules/__mock__/onlineShop'
import { useHomeStore } from '../../modules/onlineShop/shop/viewModels'

const { items, allProducts, fetchPending, buttonTextInItemCard, purchase } =
  useHomeStore()
</script>

<template>
  <div class="root">
    <div id="card-items" v-for="item in items">
      <!-- TODO: make component -->
      <el-card :body-style="{ padding: '0px', width: '100%' }" class="el-card">
        <div class="card-content">
          <div class="images">
            <img :src="item.image_url" />
            <!-- src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" -->
          </div>
          <div>
            {{ item.name }}
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
