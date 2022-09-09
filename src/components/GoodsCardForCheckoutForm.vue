<script setup lang="ts">
import { PropType, ref } from 'vue'
import { ItemInfoForCheckoutForm } from '../modules/onlineShop/types/checkout'

const props = defineProps({
  item: {
    type: Object as PropType<ItemInfoForCheckoutForm>,
    required: true
  }
})
</script>

<template>
  <div>
    <el-card :body-style="{ padding: '0px', width: '100%' }" class="el-card">
      <div class="card-content">
        <div class="images">
          <img :src="item.img" />
        </div>
        <div class="center">
          <div>{{ item.title }}</div>
          <div>&yen;{{ item.price }}</div>
          <div>受取方法: {{ item.receive }}</div>
        </div>
        <div class="end">
          <div>数量: {{ item.count }}</div>
          <div class="shop-name">販売元: {{ item.shopName }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.el-card {
  margin-top: 1%;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 8rem;
  margin-left: 1%;
  margin-right: 1%;
  padding-right: 3%;
}
.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.images {
  margin-right: 1rem;
  width: 32%;
  height: auto;
}
.images img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.center {
  margin-right: auto;
}
.shop-name {
  font-size: x-small;
}
</style>
